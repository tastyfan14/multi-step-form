// for store

//

// for cards

export type PlanRadioCard = {
    id: string
    icon: React.ComponentType
    title: string
    price: number
    bonus?: string
}

export type PlanRadioCardProps = {
    variant: 'month' | 'year'
} & PlanRadioCard