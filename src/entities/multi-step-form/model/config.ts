import IArcade from '@/shared/assets/IArcade'
import IAdvanced from '@/shared/assets/IAdvanced'
import IPro from '@/shared/assets/IPro'
import Checkbox from '@/shared/ui/checkbox'
import type { StepItem } from '@/widgets/MultiStepForm/model/types'

type Basic = {
    id: string
    title: string
    price: number
}

type PlanItem = {
    icon: React.ComponentType
    bonus?: string
} & Basic

type CheckboxItem = {
    checkbox: React.ComponentType
    desc: string
} & Basic

export const FIELD_PLAN_MONTH: PlanItem[] = [
    {
        id: 'radio-card-plan-arcade',
        icon: IArcade,
        title: 'Arcade',
        price: 9,
    },
    {
        id: 'radio-card-plan-advanced',
        icon: IAdvanced,
        title: 'Advanced',
        price: 12,
    },
    {
        id: 'radio-card-plan-pro',
        icon: IPro,
        title: 'Pro',
        price: 15,
    },
] as const

export const FIELD_PLAN_YEAR: PlanItem[] = [
    {
        id: 'radio-card-plan-arcade',
        icon: IArcade,
        title: 'Arcade',
        price: 90,
        bonus: '2 months free',
    },
    {
        id: 'radio-card-plan-advanced',
        icon: IAdvanced,
        title: 'Advanced',
        price: 120,
        bonus: '2 months free',
    },
    {
        id: 'radio-card-plan-pro',
        icon: IPro,
        title: 'Pro',
        price: 150,
        bonus: '2 months free',
    },
] as const

export const FIELD_PICKADDONS_MONTH: CheckboxItem[] = [
    {
        id: 'checkbox-onlineservice',
        checkbox: Checkbox,
        title: 'Online service',
        desc: 'Access to multiplayer games',
        price: 1,
    },
    {
        id: 'checkbox-storage',
        checkbox: Checkbox,
        title: 'Larger storage',
        desc: 'Extra 1TB of cloud save',
        price: 2,
    },
    {
        id: 'checkbox-profile',
        checkbox: Checkbox,
        title: 'Customizable profile',
        desc: 'Custom theme on your profile',
        price: 2,
    },
] as const

export const FIELD_PICKADDONS_YEAR: CheckboxItem[] = [
    {
        id: 'checkbox-onlineservice',
        checkbox: Checkbox,
        title: 'Online service',
        desc: 'Access to multiplayer games',
        price: 10,
    },
    {
        id: 'checkbox-storage',
        checkbox: Checkbox,
        title: 'Larger storage',
        desc: 'Extra 1TB of cloud save',
        price: 20,
    },
    {
        id: 'checkbox-profile',
        checkbox: Checkbox,
        title: 'Customizable profile',
        desc: 'Custom theme on your profile',
        price: 20,
    },
] as const

export const FIELD_STEPS: StepItem[] = [
    { step: 1, title: 'YOUR INFO' },
    { step: 2, title: 'SELECT PLAN' },
    { step: 3, title: 'ADD-ONS' },
    { step: 4, title: 'SUMMARY' },
] as const

export const FIELD_TOGGLE_FIRST = { label: 'Monthly', value: 'month' } as const

export const FIELD_TOGGLE_SECOND = { label: 'Yearly', value: 'year' } as const