import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().trim().min(1, 'Username is required').max(50, 'Username must be 50 characters or less'),
  password: z.string().trim().min(8, 'Password must be at least 8 characters').max(100, 'Password must be 100 characters or less'),
});

export type LoginSchema = z.infer<typeof loginSchema>;