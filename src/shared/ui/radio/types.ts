export type RadioGroupProps<T> = {
    name: string
    options: T[]
    renderCard: (option: T) => React.ReactNode
}

export type RadioCardProps = {
    id: string
    children: React.ReactNode
} & React.ComponentPropsWithoutRef<'input'>