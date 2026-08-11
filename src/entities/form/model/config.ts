import type { PlanRadioCard } from './types'
import IArcade from '@/shared/assets/IArcade'
import IAdvanced from '@/shared/assets/IAdvanced'
import IPro from '@/shared/assets/IPro'

export const FIELD_PLAN_MONTH: PlanRadioCard[] = [
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
] as const

export const FIELD_PLAN_YEAR: PlanRadioCard[] = [
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
] as const