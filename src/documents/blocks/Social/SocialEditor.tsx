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
  const iconShape = style?.iconShape ?? 'rounded';
  const padding = style?.padding
    ? `${style.padding.top}px ${style.padding.right}px ${style.padding.bottom}px ${style.padding.left}px`
  : '16px 8px';
  const links = (props?.links?.length ? props.links : (DEFAULT_LINKS as any)) as Array<{
    platform: string;
    url?: string | null;
  }>;

  const wrapperStyle: React.CSSProperties = {
    flexWrap: 'wrap',
    display: 'flex',
    gap,
    alignItems: 'center',
    justifyContent: style?.textAlign === 'right' ? 'flex-end' : style?.textAlign === 'left' ? 'flex-start' : 'center',
    padding,
  };

  const renderIcon = (platform: string) => <PlatformIcon platform={platform} size={iconSize} shape={iconShape as any} />;

  return (
    <div style={wrapperStyle}>
      {links.map((l) => {
        const url = l.url ?? '';
        const content = renderIcon(l.platform);
        return url ? (
          <a key={`${l.platform}-${url}`} href={url} target="_blank" rel="noreferrer" style={{ color: 'inherit', display: 'inline-flex' }}>
            {content}
          </a>
        ) : (
          <span key={`${l.platform}-${l.url}`} style={{ display: 'inline-flex' }}>
            {content}
          </span>
        );
      })}
    </div>
  );
}
