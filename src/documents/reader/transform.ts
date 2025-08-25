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

  const svg = (platform: string) => platformSvgString(platform, iconSize);

  const items = links
    .map((l) => {
      const href = escapeHtml(l.url || '');
      const icon = svg(l.platform);
      if (href) {
        return `<a href="${href}" target="_blank" rel="noreferrer" style="display:inline-block;text-decoration:none;color:inherit;margin-right:${gap}px">${icon}</a>`;
      }
      return `<span style="display:inline-block;margin-right:${gap}px;color:inherit;">${icon}</span>`;
    })
    .join('');

  const placeholder = '<span style="color:#6B7280;font-size:12px">Social links</span>';
  return `<div style="${pad}text-align:${align};">${items || placeholder}</div>`;
}

function signatureToHtml(block: TEditorBlock): string {
  const style = (block as any).data?.style || {};
  const props = (block as any).data?.props || {};
  const pad = stylePadding(style) || 'padding:16px 24px;';
  const color = style.color || '#111827';
  const bg = style.backgroundColor || 'transparent';
  const align = style.textAlign || 'left';
  const accent = props.accentColor || '#6B21A8';

  const fullName = escapeHtml(props.fullName || 'Your Name');
  const line2 = escapeHtml([props.title, props.department, props.company].filter(Boolean).join(' | ') || 'Title | Company');
  const line3 = escapeHtml([props.email, props.phone, props.website].filter(Boolean).join('  •  ') || 'email@domain.com  •  000-000-0000');

  const avatar = props.avatarUrl
    ? `<img src="${escapeHtml(props.avatarUrl)}" width="56" height="56" style="border-radius:50%;display:block;object-fit:cover" alt="avatar"/>`
    : '';
  const logo = props.logoUrl ? `<img src="${escapeHtml(props.logoUrl)}" width="120" style="display:block" alt="logo"/>` : '';

  const socialsHtml = socialToHtml({
    type: 'Social',
    data: { props: { links: props.socialLinks || [] }, style: { textAlign: align, gap: 10, iconSize: 20, padding: { top: 0, right: 0, bottom: 0, left: 0 } } },
  } as any);

  return `
  <div style="${pad}background:${bg};color:${color};text-align:${align};font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td style="width:4px;background:${accent};border-radius:4px"></td>
        <td style="width:12px"></td>
        ${avatar ? `<td style="width:56px">${avatar}</td><td style="width:12px"></td>` : ''}
        <td style="vertical-align:middle">
          <div style="font-size:16px;font-weight:700">${fullName}</div>
          <div style="font-size:13px;color:#374151">${line2}</div>
          <div style="font-size:13px;color:#374151;margin-top:6px">${line3}</div>
        </td>
        ${logo ? `<td style="width:12px"></td><td style="vertical-align:middle">${logo}</td>` : ''}
      </tr>
    </table>
    <div style="height:10px"></div>
    ${socialsHtml}
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
