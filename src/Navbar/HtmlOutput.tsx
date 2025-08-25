"use client";

import React, { useMemo } from 'react';

import { renderToStaticMarkup } from '@usewaypoint/email-builder';
import { transformForReader } from '@/documents/reader/transform';

import { useDocument } from '../documents/editor/EditorContext';

import HighlightedCode from './helper/HighlightedCode';

export default function HtmlPanel() {
  const document = useDocument();
  const code = useMemo(() => renderToStaticMarkup(transformForReader(document) as any, { rootBlockId: 'root' }), [document]);
  return <HighlightedCode type="html" value={code} />;
}
