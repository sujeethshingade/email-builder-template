import { z } from 'zod';

import { zPadding, zTextAlign } from '../helpers/zod';

export const SOCIAL_PLATFORMS = [
  'Website',
  'Instagram',
  'LinkedIn',
  'X',
  'TikTok',
  'YouTube',
  'Facebook',
] as const;

export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number];

export const SocialLinkSchema = z.object({
  platform: z.enum(SOCIAL_PLATFORMS),
  url: z.string().url().or(z.literal('')).optional().nullable(),
});

const SocialPropsSchema = z.object({
  props: z
    .object({
      links: z.array(SocialLinkSchema).optional().nullable(),
    })
    .optional()
    .nullable(),
  style: z
    .object({
      gap: z.number().optional().nullable(),
  iconSize: z.number().optional().nullable(),
      textAlign: zTextAlign().optional().nullable(),
      padding: zPadding().optional().nullable(),
    })
    .optional()
    .nullable(),
});

export default SocialPropsSchema;

export type SocialProps = z.infer<typeof SocialPropsSchema>;
