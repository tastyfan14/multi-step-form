type ButtonVariants = 'primary' | 'secondary' | 'additional'

type Basic = {
    variant: ButtonVariants

    children: React.ReactNode

    className?: string
}

export type ButtonProps =
    | {
        as?: 'button'

        fullWidth?: boolean
        loading?: boolean
    } & Basic & React.ComponentPropsWithoutRef<'button'>
    | {
        as: 'link'

        href: string
    } & Basic & React.ComponentPropsWithoutRef<'a'>