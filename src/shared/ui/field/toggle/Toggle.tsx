import clsx from 'clsx'
import cls from './Toggle.module.scss'
import type { ToggleProps } from './types'

export default function Toggle<T>({ value, first, second, onChange }: ToggleProps<T>) {
    return (
        <div className={cls.toggle}>
            <button
            className={clsx(cls['toggle__button'], value === first.value ? cls['toggle__button--active'] : null)}
            aria-pressed={value === first.value}
            onClick={() => onChange(first.value)}
            >
                {first.label}
            </button>

            <span className={clsx(cls['toggle__divider'], value === first.value ? cls['toggle__divider--right'] : null)}></span>

            <button
            className={clsx(cls['toggle__button'], value === second.value ? cls['toggle__button--active'] : null)}
            aria-pressed={value === second.value}
            onClick={() => onChange(second.value)}
            >
                {second.label}
            </button>
        </div>
    )
}