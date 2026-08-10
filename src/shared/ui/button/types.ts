type ButtonVariants = 'primary' | 'secondary' | 'additional'

export type ButtonProps = {
    children: React.ReactNode

    variant: ButtonVariants
    className?: string
    fullWidth?: boolean
    loading?: boolean
} & React.ComponentPropsWithoutRef<'button'>