import z from 'zod'

export const FormSchema = z.object({
    name: z
        .string()
        .trim()
        .regex(/^[\p{L}]+(?:[ '-][\p{L}]+)+$/u, 'Name is required'),
    email: z
        .string()
        .trim()
        .min(7, 'Email is required')
        .email(),
    phone: z
        .string()
        .trim()
        .min(5),

    plan: z
        .enum(['plan-arcade', 'plan-advanced', 'plan-pro'])
        .optional()
        .refine((plan) => plan !== undefined, {
            message: 'Plan is required',
        }),
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