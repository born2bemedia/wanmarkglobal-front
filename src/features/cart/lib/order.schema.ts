import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/ui/kit/phone-field';

export const orderSchema = z.object({
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().nonempty('Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .nonempty('Phone is required')
    .refine(isPhoneValid, 'Invalid phone number format'),
  street: z.string().nonempty('Street is required'),
  city: z.string().nonempty('City is required'),
  zip: z.string().nonempty('Zip is required'),
  country: z.string().nonempty('Country is required'),
  isDetailsCorrect: z
    .boolean()
    .refine(value => value, 'Please confirm that the details are correct.'),
  agreement: z.boolean().refine(value => value, 'You must agree to the terms'),
});

export type OrderSchema = z.infer<typeof orderSchema>;
