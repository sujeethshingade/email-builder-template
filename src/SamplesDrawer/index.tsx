"use client";

import React, { useState } from 'react';

import { Box, Drawer, Stack, Tab, Tabs } from '@mui/material';

import { useSamplesDrawerOpen } from '../documents/editor/EditorContext';
import SidebarButton from './SidebarButton';

export const SAMPLES_DRAWER_WIDTH = 220;

export default function SamplesDrawer() {
  const samplesDrawerOpen = useSamplesDrawerOpen();
  const [selectedTab, setSelectedTab] = useState('basic');

  const renderCurrentTabContent = () => {
    switch (selectedTab) {
      case 'basic':
        return (
          <Stack alignItems="flex-start" spacing={0.25}>
            <SidebarButton href="#">Blank Canvas</SidebarButton>
            <SidebarButton href="#sample/basic-b1">Basic B1</SidebarButton>
            <SidebarButton href="#sample/basic-b2">Basic B2</SidebarButton>
            <SidebarButton href="#sample/basic-b3">Basic B3</SidebarButton>
            <SidebarButton href="#sample/basic-b4">Basic B4</SidebarButton>
            <SidebarButton href="#sample/basic-b5">Basic B5</SidebarButton>
          </Stack>
        );
      case 'predesigned':
        return (
          <Stack alignItems="flex-start" spacing={0.25}>
            <SidebarButton href="#">Blank Canvas</SidebarButton>
            <SidebarButton href="#sample/welcome">Welcome Email</SidebarButton>
          </Stack>
        );
      default:
        return null;
    }
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={samplesDrawerOpen}
      sx={{
        width: samplesDrawerOpen ? SAMPLES_DRAWER_WIDTH : 0,
      }}
    >
      <Stack width={SAMPLES_DRAWER_WIDTH} height="100%">

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Box px={2}>
            <Tabs value={selectedTab} onChange={(_, v) => setSelectedTab(v)}>
              <Tab value="basic" label="Basic" />
              <Tab value="predesigned" label="Pre-Designed" />
            </Tabs>
          </Box>
        </Box>

        <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
          <Stack spacing={0.5} sx={{ '& .MuiButtonBase-root': { width: '100%', justifyContent: 'flex-start' } }}>
            {renderCurrentTabContent()}
          </Stack>
        </Box>

      </Stack>
    </Drawer>
  );
}
