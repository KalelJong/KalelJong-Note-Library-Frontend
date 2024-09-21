import { z } from 'zod';

const passwordRequirements = z.string().trim()
  .min(8, 'Password must be at least 8 characters')
  .max(100, 'Password must be 100 characters or less');

export const passwordSchema = z.object({
  oldPassword: passwordRequirements,
  newPassword: passwordRequirements,
  confirmPassword: passwordRequirements,
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type PasswordSchema = z.infer<typeof passwordSchema>;