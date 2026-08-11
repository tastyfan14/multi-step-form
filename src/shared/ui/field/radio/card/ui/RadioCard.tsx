import clsx from 'clsx'
import cls from './RadioCard.module.scss'
import type { RadioCardProps } from '../model/types'
import Input from '@/shared/ui/field/input'
import Label from '@/shared/ui/field/label'

export default function RadioCard({ id, children, className, ...props }: RadioCardProps) {
    return (
        <div className={clsx(cls['radio-card'], className && className)}>
            <Input type='radio' id={id} {...props} />
            <Label variant='in' className={cls['radio-card__label']} htmlFor={id}>
                {children}
            </Label>
        </div>
    )
}