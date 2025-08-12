import React, { useState } from 'react';
import { Button, Collapse, Stack } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

type SidebarMenuGroupProps = {
  title: string;
  children: React.ReactNode;
};

export default function SidebarMenuGroup({ title, children }: SidebarMenuGroupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button 
        size="small" 
        onClick={handleToggle} 
        sx={{ 
          width: '100%', 
          justifyContent: 'space-between',
          textTransform: 'none',
          fontWeight: 'medium',
          color: 'text.primary'
        }}
      >
        {title}
        {isOpen ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
      </Button>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Stack pl={2}>
          {children}
        </Stack>
      </Collapse>
    </>
  );
}