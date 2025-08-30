import { z } from 'zod';

import { SocialLinkSchema } from '../Social/SocialPropsSchema';
import { zPadding, zTextAlign } from '../helpers/zod';

const COLOR = z
  .string()
  .regex(/^#[0-9a-fA-F]{6}$/)
  .optional()
  .nullable();

const SignaturePropsSchema = z.object({
  props: z
    .object({
      variant: z
        .enum(['corporate', 'corporate-avatar', 'stacked-logo'])
        .optional()
        .nullable(),
      fullName: z.string().optional().nullable(),
      title: z.string().optional().nullable(),
      department: z.string().optional().nullable(),
      company: z.string().optional().nullable(),
      phone: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      website: z.string().optional().nullable(),
      avatarUrl: z.string().url().optional().nullable(),
      logoUrl: z.string().url().optional().nullable(),
      socialLinks: z.array(SocialLinkSchema).optional().nullable(),
      accentColor: COLOR,
    })
    .optional()
    .nullable(),
  style: z
    .object({
      padding: zPadding().optional().nullable(),
      textAlign: zTextAlign().optional().nullable(),
      backgroundColor: COLOR,
      color: COLOR,
      iconShape: z.enum(['rounded', 'square']).optional().nullable(),
    })
    .optional()
    .nullable(),
});

export default SignaturePropsSchema;

export type SignatureProps = z.infer<typeof SignaturePropsSchema>;
