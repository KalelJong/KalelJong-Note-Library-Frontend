import { z } from 'zod';

export const noteCollectionSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, 'Title is required')
    .max(100, 'Title must be 100 characters or less'),
  notes: z
    .string()
    .trim()
    .max(10000, 'Notes must be 10000 characters or less')
    .optional(),
});

export type NoteCollectionSchema = z.infer<typeof noteCollectionSchema>;
