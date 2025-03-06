import { z } from '@/shared/lib/forms';

export const resetPasswordSchema = z.object({
  email: z.string().email(),
});

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
