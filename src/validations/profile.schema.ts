import { z } from 'zod';

export const profileSchema = z.object({
  username: z.string().trim().min(1, 'Username is required').max(50, 'Username must be 50 characters or less'),
  firstName: z.string().trim().min(1, 'First name is required').max(50, 'First name must be 50 characters or less'),
  lastName: z.string().trim().min(1, 'Last name is required').max(50, 'Last name must be 50 characters or less'),
  age: z.number().int().positive().max(120).optional(),
  gender: z.string().trim().max(20, 'Gender must be 20 characters or less').optional(),
  password: z.string().trim().min(8, 'Password must be at least 8 characters').max(100, 'Password must be 100 characters or less'),
  confirmPassword: z.string().trim().min(8, 'Password must be at least 8 characters').max(100, 'Password must be 100 characters or less'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type ProfileSchema = z.infer<typeof profileSchema>;