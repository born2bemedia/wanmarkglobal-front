import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/ui/kit/phone-field';

export const userSchema = z.object({
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().nonempty('Last name is required'),
  email: z.string().nonempty('Email is required'),
  phone: z
    .string()
    .nonempty('Phone is required')
    .refine(isPhoneValid, 'Invalid phone number format'),
  address: z.string().optional(),
  city: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().optional(),
});

export type UserSchema = z.infer<typeof userSchema>;
