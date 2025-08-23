import React, { useState } from 'react';

import { FormControlLabel, Switch, IconButton, Tooltip, Box, Paper } from '@mui/material';
import { Info } from '@mui/icons-material';

type Props = {
  label: string;
  defaultValue: boolean;
  onChange: (value: boolean) => void;
  infoContent?: React.ReactNode;
};

export default function BooleanInputWithInfo({ label, defaultValue, onChange, infoContent }: Props) {
  const [value, setValue] = useState(defaultValue);
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <FormControlLabel
        label={label}
        control={
          <Switch
            checked={value}
            onChange={(_, checked: boolean) => {
              setValue(checked);
              onChange(checked);
            }}
          />
        }
      />
      {infoContent && (
        <Tooltip
          title={
            <Paper sx={{ 
              p: 2, 
              maxWidth: 400,
              border: '1px solid #e0e0e0',
              borderRadius: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              {infoContent}
            </Paper>
          }
          placement="right"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: 'transparent',
                boxShadow: 'none',
                p: 0
              }
            }
          }}
        >
          <IconButton 
            size="small" 
            sx={{ 
              opacity: 0.8,
              color: 'primary.main',
              '&:hover': {
                opacity: 1,
                backgroundColor: 'action.hover'
              }
            }}
          >
            <Info fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}
