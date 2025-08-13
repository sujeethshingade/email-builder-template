import React from 'react';

import { HeadingProps } from '@usewaypoint/block-heading';

import { getFontFamily } from '../helpers/fontFamilyUtils';

export default function Heading({ style, props }: HeadingProps) {
  const headingStyle: React.CSSProperties = {
    fontFamily: getFontFamily(style?.fontFamily) || 'inherit',
    color: style?.color || 'inherit',
    backgroundColor: style?.backgroundColor || 'transparent',
    fontWeight: style?.fontWeight || 'bold',
    textAlign: style?.textAlign || 'left',
    padding: style?.padding
      ? `${style.padding.top}px ${style.padding.right}px ${style.padding.bottom}px ${style.padding.left}px`
      : '0',
    margin: 0,
  };

  const level = props?.level || 'h2';

  if (level === 'h1') {
    return <h1 style={headingStyle}>{props?.text || ''}</h1>;
  } else if (level === 'h2') {
    return <h2 style={headingStyle}>{props?.text || ''}</h2>;
  } else if (level === 'h3') {
    return <h3 style={headingStyle}>{props?.text || ''}</h3>;
  } else if (level === 'h4') {
    return <h4 style={headingStyle}>{props?.text || ''}</h4>;
  } else if (level === 'h5') {
    return <h5 style={headingStyle}>{props?.text || ''}</h5>;
  } else if (level === 'h6') {
    return <h6 style={headingStyle}>{props?.text || ''}</h6>;
  } else {
    return <h2 style={headingStyle}>{props?.text || ''}</h2>;
  }
}