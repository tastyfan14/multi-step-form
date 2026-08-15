import z from 'zod'

export const FormSchema = z.object({
    name: z
        .string()
        .min(2),
    email: z
        .string()
        .email(),
    phone: z
        .string().
        min(5),

    plan: z
        .enum(['arcade', 'advanced', 'pro'])
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