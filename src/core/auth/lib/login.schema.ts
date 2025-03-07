import { z } from '@/shared/lib/forms';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty('Password is required'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
