export type RadioCardProps = {
    id: string
    children: React.ReactNode
    className?: string
} & React.ComponentPropsWithoutRef<'input'>