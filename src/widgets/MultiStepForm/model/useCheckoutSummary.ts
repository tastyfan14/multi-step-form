'use client'

import {
    FIELD_PICKADDONS_MONTH,
    FIELD_PICKADDONS_YEAR,
    FIELD_PLAN_MONTH,
    FIELD_PLAN_YEAR,
    PlanItem
} from '@/entities/multi-step-form/model/config'
import { Control, useWatch } from 'react-hook-form'
import type { FormValues } from '@/entities/multi-step-form/model/types'

export default function useCheckoutSummary(control: Control<FormValues>) {
    const period = useWatch({
        control,
        name: 'billingPeriod',
    })

    const plan = useWatch({
        control,
        name: 'plan'
    })
    const addon = useWatch({
        control,
        name: 'checkbox.addons'
    }) ?? []

    const plans: PlanItem[] = period === 'month' ? FIELD_PLAN_MONTH : FIELD_PLAN_YEAR
    const addons = period === 'month' ? FIELD_PICKADDONS_MONTH : FIELD_PICKADDONS_YEAR

    const selectedPlan = plans.find((option) => option.id === plan)
    const selectedAddons = addons.filter(option => addon.some(add => String(add) === String(option.id)))

    const total = selectedPlan && selectedPlan.price + selectedAddons.reduce((acc, option) => acc + option.price, 0)

    return {
        period,
        plan,
        addon,
        plans,
        addons,
        selectedPlan,
        selectedAddons,
        total,
    }
}