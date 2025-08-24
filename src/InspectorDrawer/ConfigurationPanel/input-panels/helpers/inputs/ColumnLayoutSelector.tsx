import React from 'react';
import { 
  Box, 
  Button, 
  Grid, 
  Typography,
  Paper
} from '@mui/material';
import { COLUMN_LAYOUT_TEMPLATES, ColumnLayoutTemplate } from '../../../../../documents/blocks/ColumnsContainer/ColumnLayoutTemplates';

interface ColumnLayoutSelectorProps {
  onTemplateSelect: (template: ColumnLayoutTemplate) => void;
}

export default function ColumnLayoutSelector({ onTemplateSelect }: ColumnLayoutSelectorProps) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary', fontWeight: 'semibold', fontSize: '0.750rem' }}>
        Layouts
      </Typography>
      <Grid container spacing={1}>
        {COLUMN_LAYOUT_TEMPLATES.map((template) => (
          <Grid item xs={6} sm={4} key={template.id}>
              <Paper
                component={Button}
                onClick={() => onTemplateSelect(template)}
                sx={{
                  width: '100%',
                  height: 60,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  p: 1,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                    transform: 'translateY(-1px)',
                    boxShadow: 1
                  }
                }}
              >
                <Typography 
                  variant="caption" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '0.7rem',
                    color: 'text.secondary',
                    mb: 0.5
                  }}
                >
                  {template.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: '0.8rem',
                    fontFamily: 'monospace',
                    color: 'text.secondary'
                  }}
                >
                  {template.icon}
                </Typography>
              </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
