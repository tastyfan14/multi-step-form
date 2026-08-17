import IArcade from '@/shared/assets/IArcade'
import IAdvanced from '@/shared/assets/IAdvanced'
import IPro from '@/shared/assets/IPro'
import { Checkbox } from '@/shared/ui/checkbox'
import type { StepItem } from '@/widgets/MultiStepForm/model/types'
import type { FormValues } from './types'

export type PlanItem = {
    id: string
    icon: React.ComponentType
    title: string
    price: number
    bonus?: string
}

type CheckboxItem = {
    id: FormValues['checkbox']['addons'][number]
    checkbox: React.ElementType
    title: string
    desc: string
    price: number
}

export const MULTI_STEP_FORM_DEFAULT_VALUES = {
    name: '',
    email: '',
    phone: '',

    plan: undefined,
    billingPeriod: 'month',

    checkbox: {
        addons: [],
    },
} satisfies FormValues

export const FIELD_PLAN_MONTH = [
    {
        id: 'plan-arcade',
        icon: IArcade,
        title: 'Arcade',
        price: 9,
    },
    {
        id: 'plan-advanced',
        icon: IAdvanced,
        title: 'Advanced',
        price: 12,
    },
    {
        id: 'plan-pro',
        icon: IPro,
        title: 'Pro',
        price: 15,
    },
] satisfies PlanItem[]

export const FIELD_PLAN_YEAR = [
    {
        id: 'plan-arcade',
        icon: IArcade,
        title: 'Arcade',
        price: 90,
        bonus: '2 months free',
    },
    {
        id: 'plan-advanced',
        icon: IAdvanced,
        title: 'Advanced',
        price: 120,
        bonus: '2 months free',
    },
    {
        id: 'plan-pro',
        icon: IPro,
        title: 'Pro',
        price: 150,
        bonus: '2 months free',
    },
] satisfies PlanItem[]

export const FIELD_PICKADDONS_MONTH = [
    {
        id: 'online-service',
        checkbox: Checkbox,
        title: 'Online service',
        desc: 'Access to multiplayer games',
        price: 1,
    },
    {
        id: 'larger-storage',
        checkbox: Checkbox,
        title: 'Larger storage',
        desc: 'Extra 1TB of cloud save',
        price: 2,
    },
    {
        id: 'customizable-profile',
        checkbox: Checkbox,
        title: 'Customizable profile',
        desc: 'Custom theme on your profile',
        price: 2,
    },
] satisfies CheckboxItem[]

export const FIELD_PICKADDONS_YEAR = [
    {
        id: 'online-service',
        checkbox: Checkbox,
        title: 'Online service',
        desc: 'Access to multiplayer games',
        price: 10,
    },
    {
        id: 'larger-storage',
        checkbox: Checkbox,
        title: 'Larger storage',
        desc: 'Extra 1TB of cloud save',
        price: 20,
    },
    {
        id: 'customizable-profile',
        checkbox: Checkbox,
        title: 'Customizable profile',
        desc: 'Custom theme on your profile',
        price: 20,
    },
] satisfies CheckboxItem[]

export const FIELD_STEPS = [
    { step: 1, title: 'YOUR INFO' },
    { step: 2, title: 'SELECT PLAN' },
    { step: 3, title: 'ADD-ONS' },
    { step: 4, title: 'SUMMARY' },
] satisfies StepItem[]

export const STEP_FIELDS = [
    undefined,
    ['name', 'email', 'phone'],
    ['plan', 'billingPeriod'],
    ['checkbox.addons'],
    undefined,
] as const

export const FIELD_TOGGLE_FIRST = { label: 'Monthly', value: 'month' } as const

export const FIELD_TOGGLE_SECOND = { label: 'Yearly', value: 'year' } as const