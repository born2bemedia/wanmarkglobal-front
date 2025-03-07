import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/ui/kit/phone-field';

export const registerSchema = z
  .object({
    firstName: z.string().nonempty('First name is required'),
    lastName: z.string().nonempty('Last name is required'),
    phone: z
      .string()
      .nonempty('Phone is required')
      .refine(isPhoneValid, 'Invalid phone number format'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    retypePassword: z
      .string()
      .min(6, 'Retype Password must be at least 6 characters'),
  })
  .refine(data => data.password === data.retypePassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
