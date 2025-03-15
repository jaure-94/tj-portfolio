import { z } from 'zod';

export const eventFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters"
  }),
  email: z.string().min(3, 'Title must be t least 3 characters'),
  message: z.string().min(3, 'Message must be t least 3 characters').max(1000),
})