import clsx from 'clsx'
import cls from './Label.module.scss'
import type { LabelProps } from './types'

export default function Label({ className, children, variant, ...props }: LabelProps) {
    return (
        <label
        className={clsx(
            cls['label'],
            variant === 'in' && cls['label__in'],
            variant === 'out' && cls['label__out'],
            className
        )}
        {...props}
        >
            {children}
        </label>
    )
}