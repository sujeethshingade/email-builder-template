import React from 'react';

export type PlatformName =
  | 'Website'
  | 'Instagram'
  | 'LinkedIn'
  | 'X'
  | 'TikTok'
  | 'YouTube'
  | 'Facebook';

function svgForPlatform(platform: PlatformName, size: number): string {
  const s = Math.max(8, Math.min(96, size));
  const common = `width:${s}px;height:${s}px;vertical-align:middle;`;
  switch (platform) {
    case 'Website':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="${common}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M2.5 12h19"/>
        <path d="M12 3a14 14 0 010 18"/>
        <path d="M12 3a14 14 0 000 18"/>
      </svg>`;
    case 'Instagram':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="${common}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="4" ry="4"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none"/>
      </svg>`;
    case 'LinkedIn':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" style="${common}" fill="currentColor">
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
      </svg>`;
    case 'X':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="${common}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M4 4l16 16M20 4L4 20"/>
      </svg>`;
    case 'TikTok':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="${common}" fill="currentColor">
        <path d="M15 4v2.7c1.3 1 2.9 1.6 4.6 1.7V11c-1.8-.1-3.5-.7-5-1.7v5.7A4.9 4.9 0 119.6 10h3V4h2.4z"/>
      </svg>`;
    case 'YouTube':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="${common}" fill="currentColor">
        <path d="M3 8.5C3 7.1 4.1 6 5.5 6h13C19.9 6 21 7.1 21 8.5v7c0 1.4-1.1 2.5-2.5 2.5h-13C4.1 18 3 16.9 3 15.5v-7z"/>
        <polygon points="10,9 16,12 10,15" fill="#fff"/>
      </svg>`;
    case 'Facebook':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="${common}" fill="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M14 10h2V7h-2c-2 0-3 1-3 3v2H9v3h2v5h3v-5h2l.5-3H14v-2c0-.6.4-1 1-1z" fill="#fff"/>
      </svg>`;
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="${common}" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>`;
  }
}

export function platformSvgString(platform: string, size: number): string {
  return svgForPlatform(platform as PlatformName, size);
}

export function PlatformIcon({ platform, size = 24 }: { platform: string; size?: number }) {
  const __html = platformSvgString(platform, size);
  // Use dangerouslySetInnerHTML to directly inject our sanitized SVG string
  return <span style={{ display: 'inline-block', lineHeight: 0 }} dangerouslySetInnerHTML={{ __html }} />;
}
