export type RadioGroupProps<T extends { id: string }> = {
    name: string
    options: T[]
    value?: T['id']
    onChange?: (value: T['id']) => void
    renderCard: (option: T) => React.ReactNode
} & React.ComponentPropsWithoutRef<'input'>

export type RadioCardProps = {
    id: string
    children: React.ReactNode
} & React.ComponentPropsWithoutRef<'input'>