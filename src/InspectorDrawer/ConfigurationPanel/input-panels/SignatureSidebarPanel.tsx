"use client";
import React, { useState } from 'react';

import { Box, Chip, Stack, ToggleButton, Typography } from '@mui/material';

import SignaturePropsSchema, { SignatureProps } from '../../../documents/blocks/Signature/SignaturePropsSchema';
import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';
import RadioGroupInput from './helpers/inputs/RadioGroupInput';
import Zod from 'zod';
import { SOCIAL_PLATFORMS } from '../../../documents/blocks/Social/SocialPropsSchema';

type Props = { data: SignatureProps; setData: (v: SignatureProps) => void };

export default function SignatureSidebarPanel({ data, setData }: Props) {
  const iconShape = data.style?.iconShape ?? 'rounded';
  const [, setErrors] = useState<Zod.ZodError | null>(null);
  const updateData = (d: unknown) => {
    const res = SignaturePropsSchema.safeParse(d);
    if (res.success) {
      setData(res.data);
      setErrors(null);
    } else {
      setErrors(res.error);
    }
  };

  return (
    <BaseSidebarPanel title="Signature block">
      <RadioGroupInput
        label="Layouts"
        defaultValue={data.props?.variant ?? 'corporate'}
        onChange={(variant) => updateData({ ...data, props: { ...data.props, variant } })}
      >
        <ToggleButton value="corporate">
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Stack spacing={0.5}>
              <Box sx={{ width: 36, height: 8, bgcolor: 'text.primary', borderRadius: 0.5 }} />
              <Box sx={{ width: 32, height: 6, bgcolor: 'text.secondary', borderRadius: 0.5 }} />
            </Stack>
            <Box sx={{ width: 2, height: 20, bgcolor: 'divider' }} />
            <Stack spacing={0.5}>
              <Box sx={{ width: 26, height: 6, bgcolor: 'text.secondary', borderRadius: 0.5 }} />
              <Box sx={{ width: 22, height: 6, bgcolor: 'text.secondary', borderRadius: 0.5 }} />
              <Box sx={{ width: 18, height: 6, bgcolor: 'text.secondary', borderRadius: 0.5 }} />
            </Stack>
          </Stack>
        </ToggleButton>

        <ToggleButton value="corporate-avatar">
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Box sx={{ width: 18, height: 18, borderRadius: '50%', bgcolor: 'text.primary' }} />
            <Box sx={{ width: 2, height: 20, bgcolor: 'divider' }} />
            <Stack spacing={0.5}>
              <Box sx={{ width: 26, height: 6, bgcolor: 'text.secondary', borderRadius: 0.5 }} />
              <Box sx={{ width: 22, height: 6, bgcolor: 'text.secondary', borderRadius: 0.5 }} />
              <Box sx={{ width: 18, height: 6, bgcolor: 'text.secondary', borderRadius: 0.5 }} />
            </Stack>
          </Stack>
        </ToggleButton>

        <ToggleButton value="stacked-logo">
          <Stack spacing={0.5} alignItems="center">
            <Box sx={{ width: 40, height: 8, bgcolor: 'text.primary', borderRadius: 0.5 }} />
            <Box sx={{ width: 36, height: 6, bgcolor: 'text.secondary', borderRadius: 0.5 }} />
            <Box sx={{ width: 48, height: 10, bgcolor: 'text.disabled', borderRadius: 0.5, mt: 0.5 }} />
          </Stack>
        </ToggleButton>
      </RadioGroupInput>

      <TextInput label="Full name" defaultValue={data.props?.fullName ?? ''} onChange={(fullName) => updateData({ ...data, props: { ...data.props, fullName } })} />
      <TextInput label="Title" defaultValue={data.props?.title ?? ''} onChange={(title) => updateData({ ...data, props: { ...data.props, title } })} />
      <TextInput label="Department" defaultValue={data.props?.department ?? ''} onChange={(department) => updateData({ ...data, props: { ...data.props, department } })} />
      <TextInput label="Phone" defaultValue={data.props?.phone ?? ''} onChange={(phone) => updateData({ ...data, props: { ...data.props, phone } })} />
      <TextInput label="Email" defaultValue={data.props?.email ?? ''} onChange={(email) => updateData({ ...data, props: { ...data.props, email } })} />
      <TextInput label="Website" defaultValue={data.props?.website ?? ''} onChange={(website) => updateData({ ...data, props: { ...data.props, website } })} />
      <TextInput label="Avatar URL" defaultValue={data.props?.avatarUrl ?? ''} onChange={(avatarUrl) => updateData({ ...data, props: { ...data.props, avatarUrl } })} />
      <TextInput label="Logo URL" defaultValue={data.props?.logoUrl ?? ''} onChange={(logoUrl) => updateData({ ...data, props: { ...data.props, logoUrl } })} />

      <Stack spacing={2}>
        <Typography variant="subtitle2" sx={{ mt: 2, color: 'text.secondary', fontSize: '0.750rem' }}>Social links</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {SOCIAL_PLATFORMS.map((p) => {
            const links = data.props?.socialLinks ?? [];
            const exists = links.some((l: any) => l.platform === p);
            return (
              <Chip
                key={p}
                label={p}
                color={exists ? 'primary' : 'default'}
                size="small"
                onClick={() => {
                  const next = exists ? links.filter((l: any) => l.platform !== p) : [...links, { platform: p, url: '' }];
                  updateData({ ...data, props: { ...data.props, socialLinks: next } });
                }}
              />
            );
          })}
        </Box>
        {(data.props?.socialLinks ?? []).map((l: any, idx: number) => (
          <TextInput
            key={`${l.platform}-${idx}`}
            label={`${l.platform} URL`}
            defaultValue={l.url ?? ''}
            onChange={(url) => {
              const links = data.props?.socialLinks ?? [];
              const next = [...links];
              next[idx] = { ...l, url };
              updateData({ ...data, props: { ...data.props, socialLinks: next } });
            }}
          />
        ))}
      </Stack>

      <RadioGroupInput
          label="Icon shape"
          defaultValue={iconShape}
          onChange={(v) => updateData({ ...data, style: { ...data.style, iconShape: v as any } })}
          >
          <ToggleButton value="rounded">Rounded</ToggleButton>
          <ToggleButton value="square">Square</ToggleButton>
      </RadioGroupInput>

      <div style={{ display: 'flex', gap: '5rem' }}>
        <MultiStylePropertyPanel
          names={["color"]}
          value={data.style}
          onChange={(style) => updateData({ ...data, style })}
        />
        <MultiStylePropertyPanel
          names={["backgroundColor"]}
          value={data.style}
          onChange={(style) => updateData({ ...data, style })}
        />
      </div>

      <MultiStylePropertyPanel
        names={["padding"]}
        value={data.style}
        onChange={(style) => updateData({ ...data, style })}
      />
    </BaseSidebarPanel>
  );
}
