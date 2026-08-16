import { z } from 'zod'
import { FormSchema } from './schema'

// for schema

export type FormValues = z.infer<typeof FormSchema>

// for store

export type MultiStepFormStore = {
    form: Partial<FormValues>
    setForm: (data: Partial<FormValues>) => void
    resetForm: () => void
}

//