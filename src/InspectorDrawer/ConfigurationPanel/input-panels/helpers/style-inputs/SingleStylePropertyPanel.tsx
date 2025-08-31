import React from 'react';

import { RoundedCornerOutlined } from '@mui/icons-material';

import { TStyle } from '../../../../../documents/blocks/helpers/TStyle';
import { NullableColorInput } from '../inputs/ColorInput';
import { NullableFontFamily } from '../inputs/FontFamily';
import FontSizeInput from '../inputs/FontSizeInput';
import FontWeightInput from '../inputs/FontWeightInput';
import PaddingInput from '../inputs/PaddingInput';
import SliderInput from '../inputs/SliderInput';
import TextAlignInput from '../inputs/TextAlignInput';

type StylePropertyPanelProps = {
  name: keyof TStyle;
  value: TStyle;
  onChange: (style: TStyle) => void;
  labelOverride?: string;
};
export default function SingleStylePropertyPanel({ name, value, onChange, labelOverride }: StylePropertyPanelProps) {
  const defaultValue = value[name] ?? null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (v: any) => {
    onChange({ ...value, [name]: v });
  };

  switch (name) {
    case 'backgroundColor':
      return <NullableColorInput label={labelOverride ?? "Background color"} defaultValue={defaultValue} onChange={handleChange} />;
    case 'borderColor':
      return <NullableColorInput label={labelOverride ?? "Border color"} defaultValue={defaultValue} onChange={handleChange} />;
    case 'borderRadius':
      return (
        <SliderInput
          iconLabel={<RoundedCornerOutlined />}
          units="px"
          step={4}
          marks
          min={0}
          max={48}
          label={labelOverride ?? "Border radius"}
          defaultValue={defaultValue}
          onChange={handleChange}
        />
      );
    case 'color':
      return <NullableColorInput label={labelOverride ?? "Text color"} defaultValue={defaultValue} onChange={handleChange} />;
    case 'fontFamily':
      return <NullableFontFamily label={labelOverride ?? "Font family"} defaultValue={defaultValue} onChange={handleChange} />;
    case 'fontSize':
      return <FontSizeInput label={labelOverride ?? "Font size"} defaultValue={defaultValue} onChange={handleChange} />;
    case 'fontWeight':
      return <FontWeightInput label={labelOverride ?? "Font weight"} defaultValue={defaultValue} onChange={handleChange} />;
    case 'textAlign':
      return <TextAlignInput label={labelOverride ?? "Alignment"} defaultValue={defaultValue} onChange={handleChange} />;
    case 'padding':
      return <PaddingInput label={labelOverride ?? "Padding"} defaultValue={defaultValue} onChange={handleChange} />;
  }
}
