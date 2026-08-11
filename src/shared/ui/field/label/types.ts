export type LabelProps = {
    children: React.ReactNode
    className?: string
    variant: 'in' | 'out'
} & React.ComponentPropsWithoutRef<'label'>