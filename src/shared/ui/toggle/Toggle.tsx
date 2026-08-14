import clsx from 'clsx'
import cls from './Toggle.module.scss'
import type { ToggleProps } from './types'

export default function Toggle<T>({ value, first, second, onChange }: ToggleProps<T>) {
    return (
        <div className={cls.toggle}>
            <span
            className={clsx(cls['toggle__title'], value === first.value ? cls['toggle__title--active'] : null)}
            >
                {first.label}
            </span>

            <button
            className={cls['toggle__divider']}
            aria-label={`Switch to ${value === first.value ? second.label : first.label}`}
            aria-pressed={value === first.value}
            onClick={() => onChange(value === first.value ? second.value : first.value)}
            >
                <span className={clsx(cls['toggle__thumb'], value === first.value ? null : cls['toggle__thumb--active'])} />
            </button>

            <span
            className={clsx(cls['toggle__title'], value === second.value ? cls['toggle__title--active'] : null)}
            >
                {second.label}
            </span>
        </div>
    )
}