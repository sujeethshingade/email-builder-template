import React from 'react';
import { SocialProps } from './SocialPropsSchema';
import { PlatformIcon } from './icons';

const DEFAULT_LINKS = [
  { platform: 'LinkedIn', url: '' },
  { platform: 'X', url: '' },
  { platform: 'Instagram', url: '' },
] as const;

export default function SocialEditor({ props, style }: SocialProps) {
  const gap = style?.gap ?? 12;
  const iconSize = style?.iconSize ?? 24;
  const padding = style?.padding
    ? `${style.padding.top}px ${style.padding.right}px ${style.padding.bottom}px ${style.padding.left}px`
    : '16px 24px';
  const links = (props?.links?.length ? props.links : (DEFAULT_LINKS as any)) as Array<{
    platform: string;
    url?: string | null;
  }>;

  const wrapperStyle: React.CSSProperties = {
    display: 'flex',
    gap,
    alignItems: 'center',
    justifyContent: style?.textAlign === 'right' ? 'flex-end' : style?.textAlign === 'left' ? 'flex-start' : 'center',
    padding,
  };

  const renderIcon = (platform: string) => <PlatformIcon platform={platform} size={iconSize} />;

  return (
    <div style={wrapperStyle}>
      {links
        .map((l) => {
          const i = (
            <span key={`${l.platform}-${l.url}`} style={{ display: 'inline-flex' }}>
              {renderIcon(l.platform)}
            </span>
          );
          const url = l.url ?? '';
          return url ? (
            <a key={`${l.platform}-${url}`} href={url} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
              {renderIcon(l.platform)}
            </a>
          ) : (
            i
          );
        })}
    </div>
  );
}
