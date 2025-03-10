import { ReactElement } from 'react';

import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/ui/kit/phone-field';

export const orderProductSchema = z.object({
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().nonempty('Last name is required'),
  phone: z
    .string()
    .nonempty('Phone is required')
    .refine(isPhoneValid, 'Invalid phone number format'),
  email: z.string().email('Invalid email address'),
  projectDescription: z.string().nonempty('Project description is required'),
  agreement: z.boolean().refine(value => value, 'You must agree to the terms'),
});

export const orderProductWithServiceSchema = orderProductSchema.extend({
  selectedServices: z
    .array(
      z.object({
        id: z.number(),
        title: z.string(),
        icon: z.custom<
          ReactElement<{ dangerouslySetInnerHTML: { __html: string } }>
        >(),
        price: z.number(),
        color: z.string(),
      }),
    )
    .nonempty('Select at least one service'),
});

export type OrderProductWithServiceSchema = z.infer<
  typeof orderProductWithServiceSchema
>;
export type OrderProductSchema = z.infer<typeof orderProductSchema>;
