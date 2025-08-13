import React, { CSSProperties, useState, useRef, useEffect } from 'react';

import { Box } from '@mui/material';

import { useCurrentBlockId } from '../../../editor/EditorBlock';
import { setSelectedBlockId, useSelectedBlockId, useDocument, setDocument, useSelectedSidebarTab, setSidebarTab } from '../../../editor/EditorContext';
import { getFontFamily } from '../fontFamilyUtils';

import TuneMenu from './TuneMenu';

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

  const saveSelection = () => {
    if (!editableRef.current || !isEditing) return;
    
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    
    const range = selection.getRangeAt(0);
    if (editableRef.current.contains(range.commonAncestorContainer)) {
      selectionInfoRef.current = {
        node: range.endContainer,
        offset: range.endOffset,
        text: editableRef.current.textContent || ''
      };
    }
  };

  const restoreSelection = () => {
    if (!editableRef.current || !selectionInfoRef.current || !isEditing) return;
    
    try {
      const selection = window.getSelection();
      const range = window.document.createRange();
      
      editableRef.current.focus();
      
      const node = selectionInfoRef.current.node;
      const nodeInDocument = editableRef.current.contains(node);
      
      if (node && nodeInDocument) {
        const offset = Math.min(
          selectionInfoRef.current.offset,
          node.textContent?.length || 0
        );
        
        range.setStart(node, offset);
        range.setEnd(node, offset);
      } else {
        const textNodes = [];
        const walker = window.document.createTreeWalker(
          editableRef.current,
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
        } else {
          range.selectNodeContents(editableRef.current);
          range.collapse(false);
        }
      }
      
      selection?.removeAllRanges();
      selection?.addRange(range);
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isEditing && e.key === 'Escape') {
      if (editableRef.current) {
        editableRef.current.blur();
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
      const newText = target.textContent || target.innerText || '';
      
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
      
      window.requestAnimationFrame(() => {
        if (isEditing) {
          restoreSelection();
        }
      });
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
      const newText = editableRef.current.textContent || editableRef.current.innerText || '';
      
      setIsEditing(false);
      isEditingSession.current = false;
      forcedTabRef.current = false;
      selectionInfoRef.current = null; // Reset selection info
      
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
      {renderChildren()}
    </Box>
  );
}
