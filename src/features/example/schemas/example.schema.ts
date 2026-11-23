import { z } from 'zod';

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title cannot exceed 100 characters'),
  description: z.string().max(300, 'Description cannot exceed 300 characters').optional(),
  priority: z.enum(['low', 'medium', 'high']).default('medium'),
  completed: z.boolean().default(false),
});

export type CreateTaskSchema = z.infer<typeof createTaskSchema>;
