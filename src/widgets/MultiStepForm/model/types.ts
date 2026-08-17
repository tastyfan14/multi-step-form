// Steps

export type StepItem = {
    step: number
    title: string
}

export type StepProps = {
    active: boolean
} & StepItem

export type StepsProps = {
    steps: StepItem[]
    currentStep: number
    className?: string
}

// Navigation

export type NavigationProps = {
    prevStep: () => void
    nextStep: () => void
    currentStep: number
    isSubmitting: boolean
}

// Step content

export type StepContentProps = {
    title: string
    desc: string
    children: React.ReactNode
}