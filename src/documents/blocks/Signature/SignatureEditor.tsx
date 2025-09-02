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
    <div style={{ fontSize: 16, fontWeight: 700, color: 'inherit' }} data-editable="fullName" title="name">{props?.fullName || ''}</div>
  );

  const TitleLine = (
    <div style={{ fontSize: 13, color: 'inherit' }}>
      <span data-editable="title" title="title">
        {props?.title || ''}
      </span>
      <span>{' | '}</span>
      <span data-editable="department" title="department">
        {props?.department || ''}
      </span>
    </div>
  );

  const ContactList = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: 'inherit' }}>
      {props?.phone && (
        <div data-editable="phone" title="phone">{props.phone}</div>
      )}
      {props?.email && (
        <div data-editable="email" title="email">
          <a href={`mailto:${props.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{props.email}</a>
        </div>
      )}
      {props?.website && (
        <div data-editable="website" title="website">{props.website}</div>
      )}
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

  const commonSocial = (
    <SocialEditor
      props={{
        links: props?.socialLinks || [],
      }}
      style={{ 
        textAlign: align, 
        gap: 10, 
        iconSize: 20, 
        iconShape: style?.iconShape || 'rounded',
        padding: { top: 0, right: 0, bottom: 0, left: 0 }
      }}
    />
  );

  const nameTitleContent = (
    <div>
      {Name}
      {TitleLine}
    </div>
  );

  const dividerCell = (
    <>
      <td style={{ width: 16 }}></td>
      <td style={{ width: 1, background: '#e5e7eb' }}></td>
      <td style={{ width: 16 }}></td>
    </>
  );

  let headerRow: React.ReactNode = null;
  let colCount = 0;
  
  if (variant === 'corporate') {
    headerRow = (
      <tr>
        <td style={{ verticalAlign: 'middle' }}>{nameTitleContent}</td>
        {dividerCell}
        <td style={{ verticalAlign: 'middle' }}>{ContactList}</td>
      </tr>
    );
    colCount = 5;
  } else if (variant === 'corporate-avatar') {
    headerRow = (
      <tr>
        <td style={{ verticalAlign: 'middle' }}>{nameTitleContent}</td>
        {Avatar && <td style={{ width: 16 }}></td>}
        {Avatar && <td style={{ width: 56, verticalAlign: 'middle' }}>{Avatar}</td>}
        {dividerCell}
        <td style={{ verticalAlign: 'middle' }}>{ContactList}</td>
      </tr>
    );
    colCount = 5 + (Avatar ? 2 : 0);
  } else if (variant === 'stacked-logo') {
    headerRow = (
      <tr>
        <td style={{ verticalAlign: 'top' }}>{nameTitleContent}</td>
      </tr>
    );
    colCount = 1;
  }

  const bottomCorporate = (
    <>
      <tr><td colSpan={colCount} style={{ height: 12 }}></td></tr>
      <tr><td colSpan={colCount} style={{ height: 1, background: '#e5e7eb' }}></td></tr>
      <tr><td colSpan={colCount} style={{ height: 12 }}></td></tr>
      <tr>
        <td style={{ verticalAlign: 'middle' }}>{Logo}</td>
        <td style={{ width: 12 }}></td>
        <td colSpan={Math.max(1, colCount - 2)} style={{ verticalAlign: 'middle' }}>{commonSocial}</td>
      </tr>
    </>
  );

  const bottomCorporateAvatar = (
    <>
      <tr><td colSpan={colCount} style={{ height: 12 }}></td></tr>
      <tr><td colSpan={colCount} style={{ height: 1, background: '#e5e7eb' }}></td></tr>
      <tr><td colSpan={colCount} style={{ height: 12 }}></td></tr>
      <tr>
        <td style={{ verticalAlign: 'middle' }}>{Logo}</td>
        <td style={{ width: 32 }}></td>
        <td colSpan={Math.max(1, colCount - 2)} style={{ verticalAlign: 'middle' }}>{commonSocial}</td>
      </tr>
    </>
  );

  const bottomStacked = (
    <>
      <tr><td style={{ height: 12 }}></td></tr>
      {Logo && <tr><td style={{ verticalAlign: 'middle' }}>{Logo}</td></tr>}
      {Logo && <tr><td style={{ height: 8 }}></td></tr>}
      <tr><td>{commonSocial}</td></tr>
    </>
  );

  const headerTable = (
    <table role="presentation" cellPadding="0" cellSpacing="0" style={{ border: 0, width: '100%' }}>
      <tbody>
        {headerRow}
        {variant === 'stacked-logo' ? bottomStacked : (variant === 'corporate-avatar' ? bottomCorporateAvatar : bottomCorporate)}
      </tbody>
    </table>
  );

  return (
    <div style={container}>
      {headerTable}
    </div>
  );
}
