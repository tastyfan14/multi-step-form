'use client'

import { useEffect, useState } from 'react'
import type { StepLength } from '@/widgets/MultiStepForm/model/types'
import type { FormValues } from '@/entities/multi-step-form/model/types'
import {
    FIELD_STEPS,
    MULTI_STEP_FORM_DEFAULT_VALUES,
    STEP_FIELDS
} from '@/entities/multi-step-form/model/config'
import { useForm } from 'react-hook-form'
import { FormSchema } from '@/entities/multi-step-form/model/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMultiStepFormStore } from '@/entities/multi-step-form/model/store'
import { useRouter } from 'next/navigation'

export default function useMultiStepForm() {
    const [currentStep, setCurrentStep] = useState<StepLength>(1)
    const [isSuccess, setIsSuccess] = useState(false)

    const router = useRouter()

    const setForm = useMultiStepFormStore(state => state.setForm)
    const resetForm = useMultiStepFormStore(state => state.resetForm)

    const {
        register,
        handleSubmit,
        control,
        reset,
        getValues,
        trigger,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        resolver: zodResolver(FormSchema),
        mode: 'onTouched',
        reValidateMode: 'onChange',
        shouldUnregister: false,
        defaultValues: MULTI_STEP_FORM_DEFAULT_VALUES,
    })

    useEffect(() => {
        const hydrate = () => {
            const savedForm = useMultiStepFormStore.getState().form

            reset({
                ...MULTI_STEP_FORM_DEFAULT_VALUES,
                ...savedForm,
            })
        }

        if (useMultiStepFormStore.persist.hasHydrated()) {
            hydrate()
        }

        const unsubscribe = useMultiStepFormStore.persist.onFinishHydration(hydrate)

        return unsubscribe
    }, [reset])

    const prevStep = () => {
        if (currentStep === 1) return

        setCurrentStep(prev => Math.max(prev - 1, 1) as StepLength)
    }
    const nextStep = async () => {
        const fields = STEP_FIELDS[currentStep]

        if (fields) {
            const isValid = await trigger(fields)

            if (!isValid) return
        }

        const values = getValues()

        setForm(values)

        if (currentStep === FIELD_STEPS.length) return

        setCurrentStep(prev => Math.min(prev + 1, FIELD_STEPS.length) as StepLength)
    }

    const onSubmit = async (data: FormValues) => {
        console.log(data)

        await new Promise((resolve) => setTimeout(resolve, 2000))

        setIsSuccess(true)
        reset()
        resetForm()

        await new Promise((resolve) => setTimeout(resolve, 2000))

        router.push('/profile')
    }

    return {
        register,
        handleSubmit,
        control,
        errors,
        trigger,
        isSubmitting,
        setCurrentStep,
        currentStep,
        prevStep,
        nextStep,
        onSubmit,
        isSuccess,
    }
}