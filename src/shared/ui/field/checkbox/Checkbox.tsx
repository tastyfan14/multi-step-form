import type { CheckboxProps } from './types'
import cls from './Checkbox.module.scss'
import Label from '@/shared/ui/field/label'
import Input from '@/shared/ui/field/input'
import clsx from 'clsx'

export default function Checkbox({ className, children, ...props }: CheckboxProps) {
    return (
        <Label variant='in' className={clsx(cls['checkbox'], className && className)}>
            <Input type='checkbox' {...props} />

            <span className={cls['checkbox__checkmark']}>
                <svg className={cls['checkbox__checkmark--icon']} width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.707031 3.70709L4.14001 7.14007L10.573 0.707092" stroke="currentColor" strokeWidth="2"/>
                </svg>
            </span>

            {children && (
                <span className={cls['checkbox__title']}>{children}</span>
            )}
        </Label>
    )
}