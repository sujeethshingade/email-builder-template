import React from 'react';

export type PlatformName =
  | 'Instagram'
  | 'LinkedIn'
  | 'X'
  | 'TikTok'
  | 'YouTube'
  | 'Facebook';

type IconShape = 'rounded' | 'square';

function normalizePlatformForAsset(platform: PlatformName): string {
  switch (platform) {
    case 'X':
      return 'twitter';
    case 'LinkedIn':
      return 'linkedin';
    case 'YouTube':
      return 'youtube';
    case 'TikTok':
      return 'tiktok';
    case 'Instagram':
      return 'instagram';
    case 'Facebook':
      return 'facebook';
  }
}

function shapeSuffix(shape: IconShape): 'rounded' | 'circle' {
  return shape === 'square' ? 'circle' : 'rounded';
}

function pngUrl(platform: PlatformName, shape: IconShape): string {
  const name = normalizePlatformForAsset(platform);
  const suffix = shapeSuffix(shape);
  return `/assets/${name}-${suffix}.png`;
}

function imgTagForPlatform(platform: PlatformName, size: number, shape: IconShape): string {
  const s = Math.max(12, Math.min(96, size));
  const src = pngUrl(platform, shape);
  const alt = `${platform} icon`;
  const style = 'display:inline-block;vertical-align:middle;line-height:0;';
  return `<img src="${src}" alt="${alt}" width="${s}" height="${s}" style="${style}"/>`;
}

export function platformSvgString(platform: string, size: number, shape: IconShape): string {
  return imgTagForPlatform(platform as PlatformName, size, shape);
}

export function PlatformIcon({ platform, size = 24, shape = 'rounded' }: { platform: string; size?: number; shape?: IconShape }) {
  const s = Math.max(12, Math.min(96, size));
  const src = pngUrl(platform as PlatformName, shape as IconShape);
  const alt = `${platform} icon`;
  return <img src={src} alt={alt} width={s} height={s} style={{ display: 'inline-block', verticalAlign: 'middle' }} />;
}
