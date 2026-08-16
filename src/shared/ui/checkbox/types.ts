export type CheckboxProps = {
    className?: string
    children?: React.ReactNode
    variant: 'independent' | 'card'
} & React.ComponentPropsWithoutRef<'input'>

export type CheckboxCardProps = {
    children: React.ReactNode
    className?: string
    checked: boolean
    onChange: (checked: boolean) => void
} & React.ComponentPropsWithoutRef<'input'>