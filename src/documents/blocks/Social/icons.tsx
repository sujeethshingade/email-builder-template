import React from 'react';
import { getSocialIconUrl } from './iconAssets';

export type PlatformName =
  | 'Instagram'
  | 'LinkedIn'
  | 'X'
  | 'TikTok'
  | 'YouTube'
  | 'Facebook';

type IconShape = 'rounded' | 'square';

function imgTagForPlatform(platform: PlatformName, size: number, shape: IconShape): string {
  const s = Math.max(12, Math.min(96, size));
  const cdnShape: 'rounded' | 'circle' = shape === 'square' ? 'circle' : 'rounded';
  const src = getSocialIconUrl(platform.toLowerCase(), cdnShape);
  const alt = `${platform} icon`;
  const style = 'display:inline-block;vertical-align:middle;line-height:0;';
  return `<img src="${src}" alt="${alt}" width="${s}" height="${s}" style="${style}"/>`;
}

export function platformSvgString(platform: string, size: number, shape: IconShape): string {
  return imgTagForPlatform(platform as PlatformName, size, shape);
}

export function PlatformIcon({ platform, size = 24, shape = 'rounded' }: { platform: string; size?: number; shape?: IconShape }) {
  const s = Math.max(12, Math.min(96, size));
  const cdnShape: 'rounded' | 'circle' = shape === 'square' ? 'circle' : 'rounded';
  const src = getSocialIconUrl(platform.toLowerCase(), cdnShape);
  const alt = `${platform} icon`;
  return <img src={src} alt={alt} width={s} height={s} style={{ display: 'inline-block', verticalAlign: 'middle' }} />;
}
