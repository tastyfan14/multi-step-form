export type RadioGroupProps<T> = {
    title?: string
    desc?: string
    name: string
    options: T[]
    renderCard: (option: T) => React.ReactNode
}