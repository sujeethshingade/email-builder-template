"use client";
import React, { useMemo, useState } from 'react';

import { Box, Chip, Stack, ToggleButton } from '@mui/material';
import { FormatSizeOutlined, SettingsEthernetOutlined } from '@mui/icons-material';

import SocialPropsSchema, { SOCIAL_PLATFORMS, SocialProps } from '../../../documents/blocks/Social/SocialPropsSchema';
import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';
import SliderInput from './helpers/inputs/SliderInput';
import RadioGroupInput from './helpers/inputs/RadioGroupInput';
import Zod from 'zod';


type Props = { data: SocialProps; setData: (v: SocialProps) => void };

export default function SocialSidebarPanel({ data, setData }: Props) {
  const [, setErrors] = useState<Zod.ZodError | null>(null);
  const updateData = (d: unknown) => {
    const res = SocialPropsSchema.safeParse(d);
    if (res.success) {
      setData(res.data);
      setErrors(null);
    } else {
      setErrors(res.error);
    }
  };

  const links = useMemo(() => data.props?.links ?? [], [data.props?.links]);
  const iconShape = data.style?.iconShape ?? 'rounded';

  return (
    <BaseSidebarPanel title="Social block">

      <Stack spacing={1}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {SOCIAL_PLATFORMS.map((p) => {
            const exists = links.some((l: any) => l.platform === p);
            return (
              <Chip
                key={p}
                label={p}
                color={exists ? 'primary' : 'default'}
                size="small"
                onClick={() => {
                  const next = exists ? links.filter((l: any) => l.platform !== p) : [...links, { platform: p, url: '' }];
                  updateData({ ...data, props: { ...data.props, links: next } });
                }}
              />
            );
          })}
        </Box>
      </Stack>

      {links.map((l: any, idx: number) => (
        <TextInput
          key={`${l.platform}-${idx}`}
          label={`${l.platform} URL`}
          defaultValue={l.url ?? ''}
          onChange={(url) => {
            const next = [...links];
            next[idx] = { ...l, url };
            updateData({ ...data, props: { ...data.props, links: next } });
          }}
        />
      ))}

      <Stack direction="column" spacing={2}>
        <SliderInput
          label="Icon Size"
          iconLabel={<FormatSizeOutlined sx={{ fontSize: 20 }} />}
          units="px"
          min={12}
          max={64}
          step={1}
          defaultValue={data.style?.iconSize ?? 24}
          onChange={(v) => updateData({ ...data, style: { ...data.style, iconSize: v } })}
        />
        <SliderInput
          label="Gap"
          iconLabel={<SettingsEthernetOutlined sx={{ fontSize: 20 }} />}
          units="px"
          min={0}
          max={48}
          step={1}
          defaultValue={data.style?.gap ?? 12}
          onChange={(v) => updateData({ ...data, style: { ...data.style, gap: v } })}
        />
        <RadioGroupInput
          label="Icon shape"
          defaultValue={iconShape}
          onChange={(v) => updateData({ ...data, style: { ...data.style, iconShape: v as any } })}
        >
          <ToggleButton value="rounded">Rounded</ToggleButton>
          <ToggleButton value="square">Circle</ToggleButton>
        </RadioGroupInput>
      </Stack>

      <MultiStylePropertyPanel
        names={["textAlign", "padding"]}
        value={data.style}
        onChange={(style) => updateData({ ...data, style })}
      />
    </BaseSidebarPanel>
  );
}
