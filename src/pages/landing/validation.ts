import { z } from 'zod'

export const validationSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Your username is required.' })
    .email('This is not a valid username.'),
  password: z.string().min(1, { message: 'Your password is required.' })
})

export type ILandingForm = z.infer<typeof validationSchema>
