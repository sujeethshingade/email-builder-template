"use client";

import { Redo, Undo } from '@mui/icons-material';
import { IconButton, Stack, Tooltip, Box } from '@mui/material';

import { redo, undo, useCanRedo, useCanUndo } from '../documents/editor/EditorContext';

export default function UndoRedoButtons() {
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const handleUndo = () => {
    if (canUndo) {
      undo();
    }
  };

  const handleRedo = () => {
    if (canRedo) {
      redo();
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%">
      <Stack direction="row" spacing={0.5}>
        <Tooltip title={"Undo"}>
          <span>
            <IconButton
              onClick={handleUndo}
              disabled={!canUndo}
              size="small"
              sx={{
                color: canUndo ? 'text.primary' : 'text.disabled',
                '&:hover': {
                  backgroundColor: canUndo ? 'action.hover' : 'transparent',
                },
              }}
            >
              <Undo fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title={"Redo"}>
          <span>
            <IconButton
              onClick={handleRedo}
              disabled={!canRedo}
              size="small"
              sx={{
                color: canRedo ? 'text.primary' : 'text.disabled',
                '&:hover': {
                  backgroundColor: canRedo ? 'action.hover' : 'transparent',
                },
              }}
            >
              <Redo fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
      </Stack>
    </Box>
  );
}
