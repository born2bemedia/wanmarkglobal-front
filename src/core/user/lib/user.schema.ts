import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/ui/kit/phone-field';

export const userSchema = z.object({
  firstName: z.string().nonempty('Please provide your name'),
  lastName: z.string().nonempty('Please provide your last name'),
  email: z.string().nonempty('Please provide your email'),
  phone: z
    .string()
    .nonempty('Please provide your phone number')
    .refine(isPhoneValid, 'Invalid phone number format'),
  address: z.string().optional(),
  city: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().optional(),
});

export type UserSchema = z.infer<typeof userSchema>;
