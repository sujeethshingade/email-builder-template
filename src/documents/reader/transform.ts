import { TEditorConfiguration, TEditorBlock } from '@/documents/editor/core';
import { platformSvgString } from '@/documents/blocks/Social/icons';

function escapeHtml(s: string) {
  return (s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function stylePadding(style?: any) {
  if (!style?.padding) return '';
  const { top, right, bottom, left } = style.padding;
  return `padding:${top}px ${right}px ${bottom}px ${left}px;`;
}

function socialToHtml(block: TEditorBlock): string {
  const style = (block as any).data?.style || {};
  const props = (block as any).data?.props || {};
  const links: Array<{ platform: string; url?: string | null }> = props.links || [];
  const gap = style.gap ?? 12;
  const align: 'left' | 'center' | 'right' = style.textAlign === 'right' ? 'right' : style.textAlign === 'left' ? 'left' : 'center';
  const pad = stylePadding(style);
  const iconSize = Math.max(8, Math.min(96, style.iconSize ?? 24));
  const iconShape: 'rounded' | 'square' = (style.iconShape === 'square' ? 'square' : 'rounded');
  const baseBottom = typeof style?.padding?.bottom === 'number' ? style.padding.bottom : 0;

  const svg = (platform: string) => platformSvgString(platform, iconSize, iconShape);

  const items = links
    .map((l) => {
      const href = escapeHtml(l.url || '');
      const icon = svg(l.platform);
      const common = 'display:inline-flex;line-height:0;color:inherit;';
      if (href) {
        return `<a href="${href}" target="_blank" rel="noreferrer" style="${common}text-decoration:none;">${icon}</a>`;
      }
      return `<span style="${common}">${icon}</span>`;
    })
    .join('');

  const placeholder = '<span style="color:#6B7280;font-size:12px">Social links</span>';
  const justify = align === 'right' ? 'flex-end' : align === 'left' ? 'flex-start' : 'center';
  return `<div style="${pad}display:flex;flex-wrap:wrap;gap:${gap}px;align-items:center;justify-content:${justify};padding-bottom:${baseBottom + gap}px;">${items || placeholder}</div>`;
}

function signatureToHtml(block: TEditorBlock): string {
  const style = (block as any).data?.style || {};
  const props = (block as any).data?.props || {};
  const pad = stylePadding(style) || 'padding:16px 24px;';
  const color = style.color || '#111827';
  const bg = style.backgroundColor || 'transparent';
  const align = style.textAlign || 'left';
  const variant: 'corporate' | 'corporate-avatar' | 'stacked-logo' = ['corporate', 'corporate-avatar', 'stacked-logo'].includes(props.variant)
    ? props.variant
    : 'corporate';

  const fullName = escapeHtml(props.fullName || 'Your Name');
  const title = escapeHtml(props.title || 'Title');
  const department = escapeHtml(props.department || 'Department');
  const company = escapeHtml(props.company || 'Company');
  const line2 = `${title} | ${department} | ${company}`;
  const phone = escapeHtml(props.phone || '000-000-0000');
  const email = escapeHtml(props.email || 'email@domain.com');
  const website = escapeHtml(props.website || 'www.example.com');

  const avatar = props.avatarUrl
    ? `<img src="${escapeHtml(props.avatarUrl)}" width="56" height="56" style="border-radius:50%;display:block;object-fit:cover" alt="avatar"/>`
    : '';
  const logoWidth = variant === 'stacked-logo' ? 140 : 120;
  const logo = props.logoUrl ? `<img src="${escapeHtml(props.logoUrl)}" width="${logoWidth}" style="display:block" alt="logo"/>` : '';
  const socialIconSize = typeof style?.socialIconSize === 'number' ? style.socialIconSize : (typeof style?.iconSize === 'number' ? style.iconSize : 20);
  const socialIconShape: 'rounded' | 'square' = style?.iconShape === 'square' ? 'square' : 'rounded';

  const socialsHtml = socialToHtml({
    type: 'Social',
    data: {
      props: { links: props.socialLinks || [] },
      style: {
        textAlign: align,
        gap: 10,
        iconSize: socialIconSize,
        iconShape: socialIconShape,
        padding: { top: 0, right: 0, bottom: 0, left: 0 }
      }
    },
  } as any);

  const nameTitleHtml = `
    <div style="font-size:16px;font-weight:700">${fullName}</div>
    <div style="font-size:13px">${line2}</div>
  `;

  const contactListHtml = `
    <div style="font-size:13px">
      <div>${phone}</div>
      <div>${email}</div>
      <div>${website}</div>
    </div>
  `;

  const dividerCell = `<td style="width:16px"></td><td style="width:1px;background:#e5e7eb"></td><td style="width:16px"></td>`;

  let headerRow = '';
  let colCount = 0;
  if (variant === 'corporate') {
    headerRow = `
      <tr>
        <td style="vertical-align:middle">${nameTitleHtml}</td>
        ${dividerCell}
        <td style="vertical-align:middle">${contactListHtml}</td>
      </tr>`;
    colCount = 5; 
  } else if (variant === 'corporate-avatar') {
    headerRow = `
      <tr>
        <td style="vertical-align:middle">${nameTitleHtml}</td>
        ${avatar ? `<td style=\"width:16px\"></td><td style="width:56px;vertical-align:middle">${avatar}</td>` : ''}
        ${dividerCell}
        <td style="vertical-align:middle">${contactListHtml}</td>
      </tr>`;
    colCount = 5 + (avatar ? 2 : 0); 
  } else {
    headerRow = `
      <tr>
        <td style="vertical-align:top">${nameTitleHtml}</td>
      </tr>`;
    colCount = 1;
  }

  const bottomCorporate = `
    <tr><td colspan="${colCount}" style="height:12px"></td></tr>
    <tr><td colspan="${colCount}" style="height:1px;background:#e5e7eb"></td></tr>
    <tr><td colspan="${colCount}" style="height:12px"></td></tr>
    <tr>
      <td style="vertical-align:middle">${logo || ''}</td>
      <td style="width:12px"></td>
      <td colspan="${Math.max(1, colCount - 2)}" style="vertical-align:middle">${socialsHtml}</td>
    </tr>`;

  const bottomCorporateAvatar = `
    <tr><td colspan="${colCount}" style="height:12px"></td></tr>
    <tr><td colspan="${colCount}" style="height:1px;background:#e5e7eb"></td></tr>
    <tr><td colspan="${colCount}" style="height:12px"></td></tr>
    <tr>
      <td style="vertical-align:middle">${logo || ''}</td>
      <td style="width:32px"></td>
      <td colspan="${Math.max(1, colCount - 2)}" style="vertical-align:middle">${socialsHtml}</td>
    </tr>`;

  const bottomStacked = `
    <tr><td style="height:12px"></td></tr>
    ${logo ? `<tr><td style=\"vertical-align:middle\">${logo}</td></tr>` : ''}
    ${logo ? `<tr><td style=\"height:8px\"></td></tr>` : ''}
    <tr><td>${socialsHtml}</td></tr>`;

  const headerTable = `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  ${headerRow}
  ${variant === 'stacked-logo' ? bottomStacked : (variant === 'corporate-avatar' ? bottomCorporateAvatar : bottomCorporate)}
    </table>`;

  return `
    <div style="${pad}background:${bg};color:${color};text-align:${align};font-family:Arial,Helvetica,sans-serif;">
      ${headerTable}
    </div>`;
}

export function transformForReader(doc: TEditorConfiguration): TEditorConfiguration {
  const out: TEditorConfiguration = { ...doc };
  for (const [id, block] of Object.entries(doc)) {
    if (!block) continue;
    if ((block as any).type === 'Social') {
      out[id] = {
        type: 'Html',
        data: {
          style: (block as any).data?.style,
          props: { contents: socialToHtml(block) },
        },
      } as any;
    } else if ((block as any).type === 'Signature') {
      out[id] = {
        type: 'Html',
        data: {
          style: (block as any).data?.style,
          props: { contents: signatureToHtml(block) },
        },
      } as any;
    }
  }
  return out;
}
