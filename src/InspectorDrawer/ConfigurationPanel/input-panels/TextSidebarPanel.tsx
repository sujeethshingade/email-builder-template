"use client";
import React, { useState } from 'react';

import { TextProps, TextPropsSchema } from '@usewaypoint/block-text';

import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import BooleanInputWithInfo from './helpers/inputs/BooleanInputWithInfo';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';
import MarkdownHelp from './helpers/MarkdownHelp';
import Zod from 'zod';

type TextSidebarPanelProps = {
  data: TextProps;
  setData: (v: TextProps) => void;
};
export default function TextSidebarPanel({ data, setData }: TextSidebarPanelProps) {
  const [, setErrors] = useState<Zod.ZodError | null>(null);

  const updateData = (d: unknown) => {
    const res = TextPropsSchema.safeParse(d);
    if (res.success) {
      setData(res.data);
      setErrors(null);
    } else {
      setErrors(res.error);
    }
  };

  return (
    <BaseSidebarPanel title="Text block">
      <TextInput
        label="Content"
        rows={3}
        defaultValue={data.props?.text ?? ''}
        onChange={(text) => updateData({ ...data, props: { ...data.props, text } })}
      />
      <BooleanInputWithInfo
        label="Markdown"
        defaultValue={data.props?.markdown ?? true}
        onChange={(markdown) => updateData({ ...data, props: { ...data.props, markdown } })}
        infoContent={<MarkdownHelp />}
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
        names={['textAlign', 'fontWeight', 'fontFamily', 'fontSize', 'padding']}
        value={data.style}
        onChange={(style) => updateData({ ...data, style })}
      />
    </BaseSidebarPanel>
  );
}
