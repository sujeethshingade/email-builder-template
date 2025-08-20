import React from 'react';

import { Button } from '@mui/material';

import { resetDocument, useCurrentTemplate } from '../documents/editor/EditorContext';
import getConfiguration from '../templates';

export default function SidebarButton({ href, children }: { href: string; children: JSX.Element | string }) {
  const currentTemplate = useCurrentTemplate();
  
  const isSelected = (() => {
    if (href === '#') {
      return currentTemplate === '' || currentTemplate === '#';
    }
    return currentTemplate === href;
  })();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    window.location.hash = href;
    
    resetDocument(getConfiguration(href), href);
  };
  
  return (
    <Button 
      size="small" 
      href={href} 
      onClick={handleClick}
      variant={isSelected ? "contained" : "text"}
      sx={{
        backgroundColor: isSelected ? 'primary.main' : 'transparent',
        color: isSelected ? 'primary.contrastText' : 'text.primary',
        '&:hover': {
          backgroundColor: isSelected ? 'primary.dark' : 'action.hover',
        },
      }}
    >
      {children}
    </Button>
  );
}
