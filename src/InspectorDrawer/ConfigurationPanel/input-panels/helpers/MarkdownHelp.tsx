import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

export default function MarkdownHelp() {
  return (
    <Box>
        <Box sx={{ mb: 1 }}>
        <Typography variant="subtitle2" color="primary" gutterBottom>
          Headings
        </Typography>
        <Typography variant="body2" component="div" sx={{ mb: 1 }}>
          # Heading 1
        </Typography>
        <Typography variant="body2" component="div" sx={{ mb: 1 }}>
          ## Heading 2
        </Typography>
        <Typography variant="body2" component="div" sx={{ mb: 1 }}>
          ### Heading 3
        </Typography>
      </Box>

      <Divider sx={{ my: 1 }} />

      <Box sx={{ mb: 1 }}>
        <Typography variant="subtitle2" color="primary" gutterBottom>
          Text Formatting
        </Typography>
        <Typography variant="body2" component="div" sx={{ mb: 1 }}>
          <strong>**Bold text**</strong> → <strong>Bold text</strong>
        </Typography>
        <Typography variant="body2" component="div" sx={{ mb: 1 }}>
          <em>*Italic text*</em> → <em>Italic text</em>
        </Typography>
        <Typography variant="body2" component="div" sx={{ mb: 1 }}>
          <code>`Inline code`</code> → <code>Inline code</code>
        </Typography>
      </Box>

      <Divider sx={{ my: 1 }} />

        <Box sx={{ mb: 1 }}>
        <Typography variant="subtitle2" color="primary" gutterBottom>
          Lists
        </Typography>
        <Typography variant="body2" component="div" sx={{ mb: 1 }}>
          - Bullet point
        </Typography>
        <Typography variant="body2" component="div" sx={{ mb: 1 }}>
          1. Numbered list
        </Typography>
      </Box>

      <Divider sx={{ my: 1 }} />

      <Box sx={{ mb: 1 }}>
        <Typography variant="subtitle2" color="primary" gutterBottom>
          Links
        </Typography>
        <Typography variant="body2" component="div" sx={{ mb: 1 }}>
          [Link text](https://example.com) → <a href="#" style={{ color: '#1976d2' }}>Link text</a>
        </Typography>
      </Box>

      <Divider sx={{ my: 1 }} />

      <Box sx={{ mb: 1 }}>
        <Typography variant="subtitle2" color="primary" gutterBottom>
          Line Breaks
        </Typography>
        <Typography variant="body2" component="div" sx={{ mb: 1 }}>
          <strong>Single line break:</strong> Press enter and continue on the next line
        </Typography>
        <Typography variant="body2" component="div" sx={{ mb: 1 }}>
          <strong>Multiple line breaks:</strong> Use multiple &lt;br&gt; tags <br />
          → Text&lt;br&gt;&lt;br&gt;
        </Typography>
      </Box>

    </Box>
  );
}
