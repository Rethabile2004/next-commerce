import { coerce, z, ZodSchema } from 'zod'

export const productShema = z.object({
    name: z.string().min(2, { message: 'Name Must be at least 2 characters' }).max(30, { message: 'Name must be less that 30 characters' }),
    company: z.string().min(4,{message:'Company Must be at least 2 characters'}),
    price: coerce.number().min(0, { message: 'Price must be a positive value' }),
    description: z.string().refine((value) => {
        const wordCount = value.trim().split(' ').length
        return wordCount >= 10 && wordCount <= 1000
    }, {
        message: 'Description must be between 10 and 1000 words'
    }),
    featured: z.coerce.boolean()
})

export function validateWithZodSchema<T>(
    schema: ZodSchema<T>,
    data: unknown
): T {
    const result = schema.safeParse(data)

    if (!result.success) {
        const errors = result.error.issues.map((error) => error.message).join(', ')
        throw new Error(errors)
    }

    return result.data
}

const validateImageFile = () => {
  const maxUploadSize = 1024 * 1024 // 1MB in bytes
  const acceptedFileTypes = ['image/']

  return z
    .instanceof(File)
    .refine(
      (file) => file.size <= maxUploadSize,
      { message: 'File size must be less than 1MB' }
    )
    .refine(
      (file) =>
        acceptedFileTypes.some((type) =>
          file.type.startsWith(type)
        ),
      { message: 'File must be an image' }
    )
}

export const imageSchema = z.object({
  image: validateImageFile(),
})

export const reviewSchema = z.object({
  productId: z.string().refine((value) => value !== '', {
    message: 'Product ID cannot be empty',
  }),
  authorName: z.string().refine((value) => value !== '', {
    message: 'Author name cannot be empty',
  }),
  authorImageUrl: z.string().refine((value) => value !== '', {
    message: 'Author image URL cannot be empty',
  }),
  rating: z.coerce
    .number()
    .int()
    .min(1, { message: 'Rating must be at least 1' })
    .max(5, { message: 'Rating must be at most 5' }),
  comment: z
    .string()
    .min(10, { message: 'Comment must be at least 10 characters long' })
    .max(1000, { message: 'Comment must be at most 1000 characters long' }),
});