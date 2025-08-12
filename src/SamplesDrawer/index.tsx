"use client";

import React from 'react';

import { Drawer, Stack, Typography } from '@mui/material';

import { useSamplesDrawerOpen } from '../documents/editor/EditorContext';

import SidebarButton from './SidebarButton';
import SidebarMenuGroup from './SidebarMenuGroup';

export const SAMPLES_DRAWER_WIDTH = 240;

export default function SamplesDrawer() {
  const samplesDrawerOpen = useSamplesDrawerOpen();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={samplesDrawerOpen}
      sx={{
        width: samplesDrawerOpen ? SAMPLES_DRAWER_WIDTH : 0,
      }}
    >
      <Stack py={1} px={2} width={SAMPLES_DRAWER_WIDTH} justifyContent="space-between" height="100%">
        <Stack spacing={2} sx={{ '& .MuiButtonBase-root': { width: '100%', justifyContent: 'flex-start' } }}>
          <Typography variant="h6" component="h1">
            Templates
          </Typography>

          <Stack alignItems="flex-start" spacing={0.5}>
            <SidebarButton href="#">Blank Canvas</SidebarButton>
            
            <SidebarMenuGroup title="Basic">
              <SidebarButton href="#">Placeholder</SidebarButton>
            </SidebarMenuGroup>

            <SidebarMenuGroup title="Pre-Designed">
              <SidebarButton href="#sample/welcome">Welcome email</SidebarButton>
              <SidebarButton href="#sample/one-time-password">One-time passcode (OTP)</SidebarButton>
              <SidebarButton href="#sample/reset-password">Reset password</SidebarButton>
              <SidebarButton href="#sample/order-ecomerce">E-commerce receipt</SidebarButton>
              <SidebarButton href="#sample/subscription-receipt">Subscription receipt</SidebarButton>
              <SidebarButton href="#sample/reservation-reminder">Reservation reminder</SidebarButton>
              <SidebarButton href="#sample/post-metrics-report">Post metrics</SidebarButton>
              <SidebarButton href="#sample/respond-to-message">Respond to inquiry</SidebarButton>
            </SidebarMenuGroup>
          </Stack>

        </Stack>
      </Stack>
    </Drawer>
  );
}
