import { ButtonProps } from './types'
import cls from './Button.module.scss'
import clsx from 'clsx'
import Spinner from '@/shared/ui/spinner'

export default function Button({ children, variant = 'primary', className, fullWidth, loading, ...props }: ButtonProps) {
    return (
        <button
        className={clsx(cls[variant], fullWidth && cls.full, className && className)}
        aria-busy={loading}
        disabled={loading}
        {...props}
        >
            {loading ? <Spinner /> : children}
        </button>
    )
}