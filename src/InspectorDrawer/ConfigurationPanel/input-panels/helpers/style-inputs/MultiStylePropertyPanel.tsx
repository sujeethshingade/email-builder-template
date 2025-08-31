import React from 'react';

import { TStyle } from '../../../../../documents/blocks/helpers/TStyle';

import SingleStylePropertyPanel from './SingleStylePropertyPanel';

type MultiStylePropertyPanelProps = {
  names: (keyof TStyle)[];
  value: TStyle | undefined | null;
  onChange: (style: TStyle) => void;
  labels?: Partial<Record<keyof TStyle, string>>;
};
export default function MultiStylePropertyPanel({ names, value, onChange, labels }: MultiStylePropertyPanelProps) {
  return (
    <>
      {names.map((name) => (
        <SingleStylePropertyPanel
          key={name}
          name={name}
          value={value || {}}
          onChange={onChange}
          labelOverride={labels?.[name]}
        />
      ))}
    </>
  );
}
