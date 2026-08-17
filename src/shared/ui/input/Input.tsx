import type { InputProps } from './types'
import cls from './Input.module.scss'
import clsx from 'clsx'

export default function Input({ rightEl, leftEl, className, ...props }: InputProps) {
    return (
        <div>
            {rightEl}

            <input
            className={clsx(cls['input'], className)}
            {...props}
            />

            {leftEl}
        </div>
    )
}