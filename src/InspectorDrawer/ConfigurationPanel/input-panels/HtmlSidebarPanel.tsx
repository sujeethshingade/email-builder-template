"use client";
import React, { useState } from 'react';

import { HtmlProps, HtmlPropsSchema } from '@usewaypoint/block-html';

import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';
import Zod from 'zod';

type HtmlSidebarPanelProps = {
  data: HtmlProps;
  setData: (v: HtmlProps) => void;
};
export default function HtmlSidebarPanel({ data, setData }: HtmlSidebarPanelProps) {
  const [, setErrors] = useState<Zod.ZodError | null>(null);

  const updateData = (d: unknown) => {
    const res = HtmlPropsSchema.safeParse(d);
    if (res.success) {
      setData(res.data);
      setErrors(null);
    } else {
      setErrors(res.error);
    }
  };

  return (
    <BaseSidebarPanel title="Html block">
      <TextInput
        label="Content"
        rows={3}
        defaultValue={data.props?.contents ?? ''}
        onChange={(contents) => updateData({ ...data, props: { ...data.props, contents } })}
      />

      <div style={{ display: 'flex', gap: '5rem' }}>
        <MultiStylePropertyPanel
          names={['color']}
          value={data.style}
          onChange={(style) => updateData({ ...data, style })}
        />
        <MultiStylePropertyPanel
          names={['backgroundColor']}
          value={data.style}
          onChange={(style) => updateData({ ...data, style })}
        />
      </div>

      <MultiStylePropertyPanel
        names={['textAlign', 'fontFamily', 'fontSize', 'padding']}
        value={data.style}
        onChange={(style) => updateData({ ...data, style })}
      />
    </BaseSidebarPanel>
  );
}
