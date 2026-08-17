import { isValidPhoneNumber } from 'libphonenumber-js'
import z from 'zod'

export const FormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, 'Name is required')
        .max(50, 'Name must be less than 50 characters')
        .regex(/^[\p{L}]+(?:[ '-][\p{L}]+)+$/u, 'Enter your first and last name (e.g. Stephen King)'),
    email: z
        .email('Enter a valid email address')
        .trim()
        .max(254, 'Email must be less than 254 characters'),
    phone: z
        .string()
        .trim()
        .min(1, 'Phone number is required')
        .refine(
            (phone) => isValidPhoneNumber(phone), {
                message: 'Enter a valid phone number',
            }
        ),

    plan: z
        .enum(['plan-arcade', 'plan-advanced', 'plan-pro'])
        .optional()
        .refine((plan) => plan !== undefined),
    billingPeriod: z
        .enum(['month', 'year']),

    checkbox: z.object({
        addons: z.array(
            z.enum([
                'online-service',
                'larger-storage',
                'customizable-profile',
            ]),
        ),
    }),
})