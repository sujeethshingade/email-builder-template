import React from 'react';

import SocialEditor from '../Social/SocialEditor';
import { SignatureProps } from './SignaturePropsSchema';

export default function SignatureEditor({ props, style }: SignatureProps) {
  const padding = style?.padding
    ? `${style.padding.top}px ${style.padding.right}px ${style.padding.bottom}px ${style.padding.left}px`
    : '16px 24px';

  const color = style?.color ?? '#111827';
  const bg = style?.backgroundColor ?? 'transparent';
  const align = style?.textAlign ?? 'left';

  const container: React.CSSProperties = {
    padding,
    textAlign: align,
    color,
    background: bg,
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  };

  const allowedVariants = new Set(['corporate', 'corporate-avatar', 'stacked-logo']);
  const variant = allowedVariants.has(props?.variant as any) ? ((props?.variant as any) as 'corporate' | 'corporate-avatar' | 'stacked-logo') : 'corporate';

  const Name = (
    <div style={{ fontSize: 16, fontWeight: 700 }}>{props?.fullName ?? 'Your Name'}</div>
  );

  const TitleLine = (
    <div style={{ fontSize: 13, color: '#374151' }}>
      {[props?.title, props?.department, props?.company].filter(Boolean).join(' | ') || 'Title | Company'}
    </div>
  );

  const ContactList = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: '#374151' }}>
      {(props?.phone || '000-000-0000') && <div>{props?.phone || '000-000-0000'}</div>}
      {(props?.email || 'email@domain.com') && <div>{props?.email || 'email@domain.com'}</div>}
      {(props?.website || 'www.example.com') && <div>{props?.website || 'www.example.com'}</div>}
    </div>
  );

  const logoWidth = variant === 'stacked-logo' ? 140 : 120;
  const Logo = props?.logoUrl ? (
    <img src={props.logoUrl} alt="logo" width={logoWidth} style={{ display: 'block' }} />
  ) : null;

  const Avatar = props?.avatarUrl ? (
    <img
      src={props.avatarUrl}
      alt="avatar"
      width={56}
      height={56}
      style={{ borderRadius: '50%', display: 'block', objectFit: 'cover' }}
    />
  ) : null;

  const Divider = () => (
    <div style={{ width: 1, background: '#e5e7eb', alignSelf: 'stretch' }} />
  );

  const commonSocial = (
    <div style={{ marginTop: 10 }}>
      <SocialEditor
        props={{
          links: props?.socialLinks || [
            { platform: 'LinkedIn', url: '' },
            { platform: 'X', url: '' },
            { platform: 'Instagram', url: '' },
          ],
        }}
        style={{ textAlign: align, gap: 10, iconSize: 20, iconShape: style?.iconShape || 'rounded' }}
      />
    </div>
  );

  let header: React.ReactNode = null;
  if (variant === 'corporate') {
    header = (
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start' }}>
        <div>
          {Name}
          {TitleLine}
        </div>
        <Divider />
        <div>{ContactList}</div>
      </div>
    );
  } else if (variant === 'corporate-avatar') {
    header = (
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div>
            {Name}
            {TitleLine}
          </div>
          {Avatar}
        </div>
        <Divider />
        <div>{ContactList}</div>
      </div>
    );
  } else if (variant === 'stacked-logo') {
    header = (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start' }}>
        {Name}
        {TitleLine}
      </div>
    );
  }

  const bottomRow = (
    <div style={{ marginTop: 12 }}>
      <div style={{ height: 1, background: '#e5e7eb', margin: '12px 0' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        {Logo}
        <div style={{ flex: 1, minWidth: 160 }}>{commonSocial}</div>
      </div>
    </div>
  );

  return (
    <div style={container}>
      {header}
      {variant === 'stacked-logo' ? (
        <div style={{ marginTop: 12 }}>
          {Logo}
          <div style={{ paddingBottom: 12 }}>{commonSocial}</div>
        </div>
      ) : (
        bottomRow
      )}
    </div>
  );
}
