"use client";
import React, { useState } from 'react';

import { ImageProps, ImagePropsSchema } from '@usewaypoint/block-image';
import { Stack, Box, Button, Typography } from '@mui/material';

import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import TextDimensionInput from './helpers/inputs/TextDimensionInput';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';
import Zod from 'zod';

type ImageSidebarPanelProps = {
  data: ImageProps;
  setData: (v: ImageProps) => void;
};
export default function ImageSidebarPanel({ data, setData }: ImageSidebarPanelProps) {
  const [, setErrors] = useState<Zod.ZodError | null>(null);

  const updateData = (d: unknown) => {
    const res = ImagePropsSchema.safeParse(d);
    if (res.success) {
      setData(res.data);
      setErrors(null);
    } else {
      setErrors(res.error);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
   const file = event.target.files?.[0];
   if (file) {
     const url = URL.createObjectURL(file);
     updateData({ ...data, props: { ...data.props, url } });
   }
  };

  return (
        <BaseSidebarPanel title="Image block">
      <Box
        sx={{
          border: '1px dashed',
          borderColor: 'text.secondary',
          borderRadius: 1,
          padding: 1,
          textAlign: 'center',
          backgroundColor: 'background.default',
          marginBottom: 1,
        }}
      >
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Drag and drop or click to upload
        </Typography>
        <Button variant="contained" component="label" 
        sx={{ 
          backgroundColor: 'primary.main', 
          color: 'primary.contrastText', '&:hover': { backgroundColor: 'primary.dark' },
          textTransform: 'none',
          fontWeight: 'semibold',
          fontSize: '0.75rem',
          borderRadius: 1,
          paddingX: 1,
          paddingY: 0.5,
        }}>
          Upload Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
        </Button>
      </Box>

      <TextInput
        label="Source URL"
        defaultValue={data.props?.url ?? ''}
        onChange={(v) => {
          const url = v.trim().length === 0 ? null : v.trim();
          updateData({ ...data, props: { ...data.props, url } });
        }}
      />
      <TextInput
        label="Alt text"
        defaultValue={data.props?.alt ?? ''}
        onChange={(alt) => updateData({ ...data, props: { ...data.props, alt } })}
      />
      <TextInput
        label="Click through URL"
        defaultValue={data.props?.linkHref ?? ''}
        onChange={(v) => {
          const linkHref = v.trim().length === 0 ? null : v.trim();
          updateData({ ...data, props: { ...data.props, linkHref } });
        }}
      />
      <Stack direction="row" spacing={2}>
        <TextDimensionInput
          label="Width"
          defaultValue={data.props?.width}
          onChange={(width) => updateData({ ...data, props: { ...data.props, width } })}
        />
        <TextDimensionInput
          label="Height"
          defaultValue={data.props?.height}
          onChange={(height) => updateData({ ...data, props: { ...data.props, height } })}
        />
      </Stack>

      <MultiStylePropertyPanel
        names={['backgroundColor']}
        value={data.style}
        onChange={(style) => updateData({ ...data, style })}
      />

      <MultiStylePropertyPanel
        names={['textAlign', 'padding']}
        value={data.style}
        onChange={(style) => updateData({ ...data, style })}
      />
    </BaseSidebarPanel>
  );
}
