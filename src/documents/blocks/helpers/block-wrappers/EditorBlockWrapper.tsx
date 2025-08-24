import React, { CSSProperties, useState, useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { useCurrentBlockId } from '../../../editor/EditorBlock';
import { setSelectedBlockId, useSelectedBlockId, useDocument, setDocument, useSelectedSidebarTab, setSidebarTab } from '../../../editor/EditorContext';
import { getFontFamily } from '../fontFamilyUtils';
import TuneMenu from './TuneMenu';
import FloatingFormatMenu from './FloatingFormatMenu';

type TEditorBlockWrapperProps = {
  children: JSX.Element;
};

export default function EditorBlockWrapper({ children }: TEditorBlockWrapperProps) {
  const selectedBlockId = useSelectedBlockId();
  const [mouseInside, setMouseInside] = useState(false);
  const blockId = useCurrentBlockId();
  const [isEditing, setIsEditing] = useState(false);
  const editableRef = useRef<HTMLDivElement | null>(null);
  const document = useDocument();
  const selectedSidebarTab = useSelectedSidebarTab();
  
  const isEditingSession = useRef(false);
  
  const selectionInfoRef = useRef<{
    node: Node | null;
    offset: number; 
    absoluteOffset: number; 
    text: string;
  } | null>(null);

  const forcedTabRef = useRef(false);
  
  let outline: CSSProperties['outline'];
  if (selectedBlockId === blockId) {
    outline = '2px solid rgba(0,121,204, 1)';
  } else if (mouseInside) {
    outline = '2px solid rgba(0,121,204, 0.3)';
  }

  const renderMenu = () => {
    if (selectedBlockId !== blockId) {
      return null;
    }
    return <TuneMenu blockId={blockId} />;
  };

  const block = document[blockId];
  const isTextOrHeading = block?.type === 'Text' || block?.type === 'Heading';
  const isTextBlock = block?.type === 'Text';
  const isHeadingBlock = block?.type === 'Heading';

  const getHeadingFontSize = () => {
    if (block?.type !== 'Heading') return '16px';
    
    const level = block?.data?.props?.level || 'h2';
    
    switch (level) {
      case 'h1': return '2rem';
      case 'h2': return '1.5rem';
      case 'h3': return '1.2rem';
      default: return '1.5rem';
    }
  };

  const getAbsoluteOffset = (range: Range, root: HTMLElement): number => {
    try {
      const walker = window.document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
      let abs = 0;
      let node: Node | null;
      while ((node = walker.nextNode())) {
        if (node === range.endContainer) {
          return abs + range.endOffset;
        }
        abs += node.textContent?.length || 0;
      }
      return abs;
    } catch {
      return 0;
    }
  };

  const saveSelection = () => {
    if (!editableRef.current || !isEditing) return;
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    if (!editableRef.current.contains(range.commonAncestorContainer)) return;

    const absoluteOffset = getAbsoluteOffset(range, editableRef.current);
    selectionInfoRef.current = {
      node: range.endContainer,
      offset: range.endOffset,
      absoluteOffset,
      text: editableRef.current.textContent || '',
    };
  };

  const restoreSelection = () => {
    if (!editableRef.current || !selectionInfoRef.current || !isEditing) return;
    try {
      const selection = window.getSelection();
      if (!selection) return;
      
      const range = window.document.createRange();
      editableRef.current.focus();

      const targetOffset = Math.max(0, selectionInfoRef.current.absoluteOffset || 0);
      const walker = window.document.createTreeWalker(
        editableRef.current,
        NodeFilter.SHOW_TEXT,
        null
      );
      
      let currentOffset = 0;
      let targetNode: Node | null = null;
      let targetNodeOffset = 0;
      let textNode: Node | null;
      
      while ((textNode = walker.nextNode())) {
        const nodeLength = textNode.textContent?.length || 0;
        if (currentOffset + nodeLength >= targetOffset) {
          targetNode = textNode;
          targetNodeOffset = targetOffset - currentOffset;
          break;
        }
        currentOffset += nodeLength;
      }
      
      if (!targetNode) {
        const endWalker = window.document.createTreeWalker(
          editableRef.current,
          NodeFilter.SHOW_TEXT,
          null
        );
        let last: Node | null = null;
        let n: Node | null;
        while ((n = endWalker.nextNode())) last = n;
        
        if (last) {
          const len = last.textContent?.length || 0;
          range.setStart(last, len);
          range.setEnd(last, len);
        } else {
          range.selectNodeContents(editableRef.current);
          range.collapse(false);
        }
      } else {
        const len = targetNode.textContent?.length || 0;
        const clamped = Math.max(0, Math.min(len, targetNodeOffset));
        range.setStart(targetNode, clamped);
        range.setEnd(targetNode, clamped);
      }
      
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        if (selection.rangeCount > 0 && editableRef.current) {
          const r = selection.getRangeAt(0);
          if (r.collapsed && editableRef.current.contains(r.commonAncestorContainer)) {
            const content = editableRef.current.textContent || '';
            const abs = getAbsoluteOffset(r, editableRef.current);
            if (abs === content.length && content.endsWith('\n')) {
              const zwsp = window.document.createTextNode('\u200B');
              r.insertNode(zwsp);
              r.setStart(zwsp, zwsp.nodeValue?.length || 0);
              r.setEnd(zwsp, zwsp.nodeValue?.length || 0);
              selection.removeAllRanges();
              selection.addRange(r);
            }
          }
        }
      } catch (e) {
        // noop
      }
    } catch (error) {
      console.warn('Failed to restore selection:', error);
    }
  };

  const forceInspectTab = () => {
    if (isEditingSession.current) {
      setSidebarTab('block-configuration');
      
      forcedTabRef.current = true;
      
      if (selectedBlockId !== blockId) {
        setSelectedBlockId(blockId);
      }
    }
  };

  useEffect(() => {
    if (isEditing && selectedSidebarTab !== 'block-configuration') {
      forceInspectTab();
    }
  }, [selectedSidebarTab, isEditing, blockId, selectedBlockId]);

  useEffect(() => {
    if (isEditing) {
      forceInspectTab();
      
      const tabCheckInterval = setInterval(() => {
        if (isEditingSession.current && selectedSidebarTab !== 'block-configuration') {
          forceInspectTab();
        }
      }, 200);
      
      return () => {
        clearInterval(tabCheckInterval);
      };
    }
    return undefined;
  }, [isEditing, selectedSidebarTab, blockId, selectedBlockId]);

  const handleDoubleClick = (e: React.MouseEvent) => {
    if (isTextOrHeading && !isEditing) {
      e.preventDefault();
      e.stopPropagation();
      setIsEditing(true);
      isEditingSession.current = true;
      forceInspectTab();
    }
  };

  // Convert clipboard HTML to Markdown 
  const htmlToMarkdown = (html: string): string => {
    html = html.replace(/\u00A0/g, ' ');

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const isBoldEl = (el: Element) => {
      const tag = el.tagName;
      if (tag === 'B' || tag === 'STRONG') return true;
      const fw = (el as HTMLElement).style?.fontWeight || '';
      if (!fw) return false;
      if (fw === 'bold') return true;
      const num = parseInt(fw, 10);
      return !Number.isNaN(num) && num >= 600;
    };
    const isItalicEl = (el: Element) => {
      const tag = el.tagName;
      if (tag === 'I' || tag === 'EM') return true;
      const fs = (el as HTMLElement).style?.fontStyle || '';
      return fs === 'italic' || fs === 'oblique';
    };

    const blockLike = new Set(['P', 'DIV', 'SECTION', 'ARTICLE', 'HEADER', 'FOOTER', 'ASIDE', 'MAIN']);
    const lineBreakLike = new Set(['BR']);
    const listLike = new Set(['UL', 'OL']);
    const listItem = 'LI';

    const walk = (node: Node): string => {
      if (node.nodeType === Node.TEXT_NODE) {
        return (node.textContent || '').replace(/\s+/g, (m) => (m.includes('\n') ? '\n' : ' '));
      }

      if (node.nodeType !== Node.ELEMENT_NODE) return '';

      const el = node as Element;
      const tag = el.tagName;

      if (lineBreakLike.has(tag)) return '\n';

      if (tag === 'CODE') {
        const inner = Array.from(el.childNodes).map(walk).join('');
        const escaped = inner.replace(/`/g, '\\`');
        return '`' + escaped + '`';
      }

      if (tag === 'A') {
        const href = el.getAttribute('href') || '';
        const inner = Array.from(el.childNodes).map(walk).join('');
        if (!href) return inner;
        return `[${inner}](${href})`;
      }

      if (listLike.has(tag)) {
        const isOl = tag === 'OL';
        const items = Array.from(el.children)
          .filter((c) => c.tagName === listItem)
          .map((li, idx) => {
            const content = Array.from(li.childNodes).map(walk).join('').trim();
            return (isOl ? `${idx + 1}. ` : `- `) + content;
          })
          .join('\n');
        return items + '\n';
      }

      let content = Array.from(el.childNodes).map(walk).join('');

      const bold = isBoldEl(el);
      const italic = isItalicEl(el);

      if (bold && italic) {
        content = `***${content}***`;
      } else if (bold) {
        content = `**${content}**`;
      } else if (italic) {
        content = `*${content}*`;
      }

      if (blockLike.has(tag)) {
        content = content.replace(/\n+$/g, '');
        return content + '\n';
      }

      return content;
    };

    let md = Array.from(doc.body.childNodes).map(walk).join('');

    md = md.replace(/\n{3,}/g, '\n\n');

    return md.trimEnd();
  };

  const insertTextAtSelection = (text: string) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || !editableRef.current) return;

    const range = selection.getRangeAt(0);
    if (!editableRef.current.contains(range.commonAncestorContainer)) return;

    range.deleteContents();

    const textNode = window.document.createTextNode(text);
    range.insertNode(textNode);
    range.setStart(textNode, textNode.nodeValue?.length || 0);
    range.setEnd(textNode, textNode.nodeValue?.length || 0);

    selection.removeAllRanges();
    selection.addRange(range);

    const newAbsOffset = getAbsoluteOffset(range, editableRef.current);
    selectionInfoRef.current = {
      node: range.endContainer,
      offset: range.endOffset,
      absoluteOffset: newAbsOffset,
      text: editableRef.current.textContent || ''
    };

    const event = new Event('input', { bubbles: true });
    editableRef.current.dispatchEvent(event);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    if (!isEditing || !editableRef.current) return;

    if (!isTextBlock) {
      if (isHeadingBlock) {
        e.preventDefault();
        const txt = e.clipboardData.getData('text/plain');
        insertTextAtSelection(txt);
      }
      return;
    }

    e.preventDefault();

    const html = e.clipboardData.getData('text/html');
    const plain = e.clipboardData.getData('text/plain');

    let toInsert = '';

    if (html) {
      try {
        toInsert = htmlToMarkdown(html);
      } catch {
        toInsert = plain || '';
      }
    } else {
      toInsert = plain || '';
    }

    toInsert = toInsert.replace(/\r\n?/g, '\n');

    insertTextAtSelection(toInsert);
    forceInspectTab();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isEditing && e.key === 'Escape') {
      if (editableRef.current) {
        editableRef.current.blur();
      }
    }
    
    if (isEditing && e.key === 'Enter') {
      if (isHeadingBlock) {
        e.preventDefault();
        return;
      }
      
      if (isTextBlock) {
        e.preventDefault();
        
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0 && editableRef.current) {
          const range = selection.getRangeAt(0);
          
          const newlineNode = window.document.createTextNode('\n');
          const zwspNode = window.document.createTextNode('\u200B');
          range.deleteContents();
          range.insertNode(newlineNode);
          range.collapse(false);
          range.insertNode(zwspNode);
          const zwspLen = zwspNode.nodeValue?.length || 0;
          range.setStart(zwspNode, zwspLen);
          range.setEnd(zwspNode, zwspLen);
          selection.removeAllRanges();
          selection.addRange(range);
          
          if (editableRef.current) {
            const absWithZwsp = getAbsoluteOffset(range, editableRef.current);
            const newAbsOffset = Math.max(0, absWithZwsp - 1);
            selectionInfoRef.current = {
              node: range.endContainer,
              offset: range.endOffset,
              absoluteOffset: newAbsOffset,
              text: editableRef.current.textContent || ''
            };
          }
          
          const event = new Event('input', { bubbles: true });
          editableRef.current.dispatchEvent(event);
          
          forceInspectTab();
        }
        return;
      }
    }
    
    if (isEditing) {
      saveSelection();
      forceInspectTab();
    }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    if (isEditing && editableRef.current && isTextOrHeading) {
      saveSelection();
      
      forceInspectTab();
      
      const target = e.target as HTMLDivElement;
      let newText = (target.innerText || target.textContent || '').replace(/\u200B/g, '').replace(/\r\n?/g, '\n');
      
      if (newText === block?.data?.props?.text) return;
      
      const updatedBlock = {
        ...block,
        data: {
          ...block.data,
          props: {
            ...block.data.props,
            text: newText
          }
        }
      };
      
      setDocument({
        ...document,
        [blockId]: updatedBlock
      });
      
      setTimeout(() => {
        if (isEditing && selectionInfoRef.current) {
          restoreSelection();
        }
      }, 0);
    }
  };

  const handleEditableClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isEditing) {
      forceInspectTab();
      
      setTimeout(saveSelection, 0);
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isEditing) {
      e.stopPropagation();
      forceInspectTab();
      setTimeout(saveSelection, 0);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const relatedTarget = e.relatedTarget as Element;
    if (relatedTarget && editableRef.current?.contains(relatedTarget)) {
      return;
    }
    
    if (isEditing && editableRef.current && isTextOrHeading) {
      const newText = (editableRef.current.innerText || editableRef.current.textContent || '').replace(/\u200B/g, '').replace(/\r\n?/g, '\n');
      
      setIsEditing(false);
      isEditingSession.current = false;
      forcedTabRef.current = false;
      selectionInfoRef.current = null; 
      
      const updatedBlock = {
        ...block,
        data: {
          ...block.data,
          props: {
            ...block.data.props,
            text: newText
          }
        }
      };
      
      setDocument({
        ...document,
        [blockId]: updatedBlock
      });
    }
  };

  useEffect(() => {
    if (isEditing && editableRef.current) {
      const editableElement = editableRef.current;
      
      editableElement.focus();
      
      try {
        const selection = window.getSelection();
        const range = window.document.createRange();

        const textNodes = [];
        const walker = window.document.createTreeWalker(
          editableElement,
          NodeFilter.SHOW_TEXT,
          null
        );
        
        let textNode;
        while (textNode = walker.nextNode()) {
          textNodes.push(textNode);
        }
        
        if (textNodes.length > 0) {
          const lastTextNode = textNodes[textNodes.length - 1];
          range.setStart(lastTextNode, lastTextNode.textContent?.length || 0);
          range.setEnd(lastTextNode, lastTextNode.textContent?.length || 0);
          
          selectionInfoRef.current = {
            node: lastTextNode,
            offset: lastTextNode.textContent?.length || 0,
            absoluteOffset: (editableElement.textContent || '').length,
            text: editableElement.textContent || ''
          };
        } else {
          range.selectNodeContents(editableElement);
          range.collapse(false);
        }
        
        selection?.removeAllRanges();
        selection?.addRange(range);
      } catch (error) {
        console.warn('Could not set cursor position:', error);
      }
      
      forceInspectTab();
      
    }
    return undefined;
  }, [isEditing, blockId]);

  const renderChildren = () => {
    if (isTextOrHeading && isEditing) {
      const currentText = block?.data?.props?.text || '';
      
      return (
        <div
          ref={editableRef}
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          onClick={handleEditableClick}
          onSelect={saveSelection}
          onKeyUp={saveSelection}
          onMouseUp={handleMouseUp}
          onPaste={handlePaste}
          data-editing="true"
          style={{
            cursor: 'text',
            userSelect: 'text',
            outline: '1px solid rgba(0,121,204, 0.5)',
            minHeight: '1em',
            // Apply the exact same styles 
            fontFamily: getFontFamily(block?.data?.style?.fontFamily) || 'inherit',
            fontSize: block?.type === 'Heading' 
              ? getHeadingFontSize() 
              : `${(block?.data?.style as any)?.fontSize || 16}px`,
            color: block?.data?.style?.color || 'inherit',
            backgroundColor: block?.data?.style?.backgroundColor || 'transparent',
            fontWeight: block?.data?.style?.fontWeight || (block?.type === 'Heading' ? 'bold' : 'normal'),
            textAlign: (block?.data?.style?.textAlign as any) || 'left',
            lineHeight: (block?.data?.style as any)?.lineHeight || (block?.type === 'Heading' ? '1.2' : '1.5'),
            letterSpacing: (block?.data?.style as any)?.letterSpacing || 'normal',
            textDecoration: (block?.data?.style as any)?.textDecoration || 'none',
            fontStyle: (block?.data?.style as any)?.fontStyle || 'normal',
            padding: block?.data?.style?.padding
              ? `${block.data.style.padding.top}px ${block.data.style.padding.right}px ${block.data.style.padding.bottom}px ${block.data.style.padding.left}px`
              : '0',
            margin: '0',
            border: 'none',
            boxSizing: 'border-box',
            width: '100%',
            display: 'block',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap',
          }}
        >
          {currentText}
        </div>
      );
    }
    
    if (isTextOrHeading) {
      return React.cloneElement(children, {
        style: {
          ...(children.props.style || {}),
          cursor: selectedBlockId === blockId ? 'text' : undefined,
        }
      });
    }
    
    return children;
  };

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '100%',
        outlineOffset: '-1px',
        outline,
      }}
  data-editor-block-wrapper="true"
      onMouseEnter={(ev) => {
        setMouseInside(true);
        ev.stopPropagation();
      }}
      onMouseLeave={() => {
        setMouseInside(false);
      }}
      onClick={(ev) => {
        if (!isEditing) {
          setSelectedBlockId(blockId);
          ev.stopPropagation();
          ev.preventDefault();
        } else {
          ev.stopPropagation();
          forceInspectTab();
        }
      }}
      onDoubleClick={handleDoubleClick}
    >
      {renderMenu()}
      {isTextOrHeading && isEditing && (
        <FloatingFormatMenu editableRef={editableRef as unknown as React.RefObject<HTMLElement>} isEditing={isEditing} />
      )}
      {renderChildren()}
    </Box>
  );
}
