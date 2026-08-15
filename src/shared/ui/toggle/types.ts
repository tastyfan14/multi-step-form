export type ToggleProps<T> = {
    value: T
    first: {
        value: T,
        label: string
    }
    second: {
        value: T,
        label: string
    }
    setValue: (value: T) => void
}