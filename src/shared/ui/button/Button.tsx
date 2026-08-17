import { ButtonProps } from './types'
import cls from './Button.module.scss'
import clsx from 'clsx'
import Spinner from '@/shared/ui/spinner'
import Link from 'next/link'

export default function Button(props: ButtonProps) {
    if (props.as === 'link') {
        const { as: _as, variant, className, href, children, ...linkProps } = props

        return (
            <Link
            className={clsx(cls[variant], className, cls['link'])}
            href={href}
            {...linkProps}>
                {children}
            </Link>
        )
    }
    const { as: _as, variant, className, fullWidth, loading, children, ...btnProps } = props

    return (
        <button
        className={clsx(cls[variant], fullWidth && cls.full, className)}
        aria-busy={loading}
        disabled={loading}
        {...btnProps}
        >
            {loading ? <Spinner /> : children}
        </button>
    )
}