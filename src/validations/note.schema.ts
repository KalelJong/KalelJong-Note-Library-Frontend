import { z } from 'zod';

export const noteSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, 'Title is required')
    .max(100, 'Title must be 100 characters or less'),
  content: z
    .string()
    .trim()
    .min(1, 'Content is required')
    .max(10000, 'Content must be 10000 characters or less'),
});

export type NoteSchema = z.infer<typeof noteSchema>;
