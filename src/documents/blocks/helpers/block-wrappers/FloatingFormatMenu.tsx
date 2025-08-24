"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { Paper, IconButton, Stack, Fade } from '@mui/material';
import { FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';

type Props = {
  editableRef: React.RefObject<HTMLElement>;
  isEditing: boolean;
  blockType?: string; 
};

type Pos = { top: number; left: number } | null;

export default function FloatingFormatMenu({ editableRef, isEditing, blockType }: Props) {
  const [pos, setPos] = useState<Pos>(null);
  const [visible, setVisible] = useState(false);

  const isMac = useMemo(() => typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/.test(navigator.platform), []);

  const computePosition = () => {
    if (!isEditing || !editableRef.current || blockType !== 'Text') {
      setVisible(false);
      setPos(null);
      return;
    }

    const sel = document.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
      setVisible(false);
      setPos(null);
      return;
    }

    const range = sel.getRangeAt(0);
    const root = editableRef.current;
    if (!root.contains(range.commonAncestorContainer)) {
      setVisible(false);
      setPos(null);
      return;
    }

    const rect = range.getBoundingClientRect();

    if (rect.width === 0 && rect.height === 0) {
      setVisible(false);
      setPos(null);
      return;
    }

    const wrapperEl = root.closest('[data-editor-block-wrapper="true"]') as HTMLElement | null;
    const wrapperRect = (wrapperEl || root).getBoundingClientRect();

    const top = rect.top - wrapperRect.top; 
    const left = rect.left - wrapperRect.left + rect.width / 2; 

    setPos({ top, left });
    setVisible(true);
  };

  useEffect(() => {
    const handle = () => computePosition();
    const handleScroll = () => computePosition();
    const handleResize = () => computePosition();

    document.addEventListener('selectionchange', handle);
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', handleResize);
    computePosition();
    return () => {
      document.removeEventListener('selectionchange', handle);
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditing, editableRef]);

  useEffect(() => {
    if (!isEditing) {
      setVisible(false);
      setPos(null);
    }
  }, [isEditing]);

  const triggerShortcut = (key: 'b' | 'i' | 'u') => {
    editableRef.current?.focus();
    const eventInit: KeyboardEventInit = {
      key,
      code: key.toUpperCase(),
      bubbles: true,
      cancelable: true,
      metaKey: isMac,
      ctrlKey: !isMac,
    };
    const ev = new KeyboardEvent('keydown', eventInit);
    document.dispatchEvent(ev);
  };

  return (
    <Fade in={visible && pos !== null} timeout={200}>
      <Paper
        elevation={3}
        sx={{
          position: 'absolute',
          top: pos?.top || 0,
          left: pos?.left || 0,
          transform: 'translate(-50%, calc(-100% - 8px))',
          borderRadius: 4,
          px: 0.5,
          py: 0.25,
          zIndex: 'tooltip',
          display: visible && pos ? 'inline-block' : 'none',
          backdropFilter: 'blur(4px)',
        }}
        onMouseDown={(e) => e.preventDefault()}
        onClick={(e) => e.stopPropagation()}
      >
        <Stack direction="row" spacing={0} alignItems="center">
          <IconButton size="small" sx={{ color: 'text.secondary' }} aria-label="Bold" onClick={() => triggerShortcut('b')}>
            <FormatBold fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: 'text.secondary' }} aria-label="Italic" onClick={() => triggerShortcut('i')}>
            <FormatItalic fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: 'text.secondary' }} aria-label="Underline" onClick={() => triggerShortcut('u')}>
            <FormatUnderlined fontSize="small" />
          </IconButton>
        </Stack>
      </Paper>
    </Fade>
  );
}
