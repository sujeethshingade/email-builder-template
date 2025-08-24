import React from 'react';

import { TextProps } from '@usewaypoint/block-text';

import { getFontFamily } from '../helpers/fontFamilyUtils';

function renderMarkdown(text: string): JSX.Element {
  // Handle basic markdown patterns
  let htmlText = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
    .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
    .replace(/\n/g, '<br />'); // Line breaks

  return <div dangerouslySetInnerHTML={{ __html: htmlText }} />;
}

export default function Text({ style, props }: TextProps) {
  const textStyle: React.CSSProperties = {
    fontFamily: getFontFamily(style?.fontFamily) || 'inherit',
    fontSize: (style as any)?.fontSize || 16,
    color: style?.color || 'inherit',
    backgroundColor: style?.backgroundColor || 'transparent',
    fontWeight: style?.fontWeight || 'normal',
    textAlign: style?.textAlign || 'left',
    padding: style?.padding
      ? `${style.padding.top}px ${style.padding.right}px ${style.padding.bottom}px ${style.padding.left}px`
      : '0',
  };

  const text = props?.text || '';

  if (props?.markdown ?? true) {
    return (
      <div style={textStyle}>
        {renderMarkdown(text)}
      </div>
    );
  }

  return (
    <div style={textStyle}>
      {text}
    </div>
  );
}