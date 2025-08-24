"use client";

import { useEffect } from 'react';

import { redo, undo, useCanRedo, useCanUndo } from '../documents/editor/EditorContext';

export default function KeyboardShortcuts() {
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isCtrlOrCmd = event.ctrlKey || event.metaKey;
      
      if (!isCtrlOrCmd) return;

      switch (event.key.toLowerCase()) {
        case 'b': {
          const sel = document.getSelection();
          if (!sel || sel.rangeCount === 0) break;
          const range = sel.getRangeAt(0);
          let node = range.commonAncestorContainer as Node | null;
          while (node && node.nodeType !== Node.ELEMENT_NODE) node = node.parentNode;
          const editableEl = node && (node as Element).closest ? (node as Element).closest('[data-editing="true"]') : null;
          if (!editableEl) break;

          event.preventDefault();

          const selectedText = sel.toString();
          if (!selectedText) break;

          const replacement = `**${selectedText}**`;
          range.deleteContents();
          const textNode = document.createTextNode(replacement);
          range.insertNode(textNode);

          const newRange = document.createRange();
          newRange.setStartAfter(textNode);
          newRange.collapse(true);
          sel.removeAllRanges();
          sel.addRange(newRange);

          (editableEl as HTMLElement).dispatchEvent(new Event('input', { bubbles: true }));
          break;
        }
        case 'z':
          event.preventDefault();
          if (event.shiftKey && canRedo) {
            redo();
          } else if (canUndo) {
            undo();
          }
          break;
        case 'y':
          if (canRedo) {
            event.preventDefault();
            redo();
          }
          break;
        case 'i': {
          const sel = document.getSelection();
          if (!sel || sel.rangeCount === 0) break;
          const range = sel.getRangeAt(0);
          let node = range.commonAncestorContainer as Node | null;
          while (node && node.nodeType !== Node.ELEMENT_NODE) node = node.parentNode;
          const editableEl = node && (node as Element).closest ? (node as Element).closest('[data-editing="true"]') : null;
          if (!editableEl) break;

          event.preventDefault();
          const selectedText = sel.toString();
          if (!selectedText) break;
          const replacement = `*${selectedText}*`;
          range.deleteContents();
          const textNode = document.createTextNode(replacement);
          range.insertNode(textNode);
          const newRange = document.createRange();
          newRange.setStartAfter(textNode);
          newRange.collapse(true);
          sel.removeAllRanges();
          sel.addRange(newRange);
          (editableEl as HTMLElement).dispatchEvent(new Event('input', { bubbles: true }));
          break;
        }
        case 'u': {
          const sel = document.getSelection();
          if (!sel || sel.rangeCount === 0) break;
          const range = sel.getRangeAt(0);
          let node = range.commonAncestorContainer as Node | null;
          while (node && node.nodeType !== Node.ELEMENT_NODE) node = node.parentNode;
          const editableEl = node && (node as Element).closest ? (node as Element).closest('[data-editing="true"]') : null;
          if (!editableEl) break;

          event.preventDefault();
          const selectedText = sel.toString();
          if (!selectedText) break;
          const replacement = `<u>${selectedText}</u>`;
          range.deleteContents();
          const textNode = document.createTextNode(replacement);
          range.insertNode(textNode);
          const newRange = document.createRange();
          newRange.setStartAfter(textNode);
          newRange.collapse(true);
          sel.removeAllRanges();
          sel.addRange(newRange);
          (editableEl as HTMLElement).dispatchEvent(new Event('input', { bubbles: true }));
          break;
        }
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [canUndo, canRedo]);

  return null;
}
