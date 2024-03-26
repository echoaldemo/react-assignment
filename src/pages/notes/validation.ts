import { z } from 'zod'

export const validationSchema = z.object({
  title: z.string().min(1, { message: 'The title is required.' }),
  description: z.string().min(1, { message: 'The description is required.' })
})

export type INoteForm = z.infer<typeof validationSchema>
