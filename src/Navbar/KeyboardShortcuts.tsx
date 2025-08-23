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
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [canUndo, canRedo]);

  return null;
}
