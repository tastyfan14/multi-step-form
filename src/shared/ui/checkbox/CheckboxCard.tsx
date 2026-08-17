import clsx from 'clsx'
import cls from './CheckboxCard.module.scss'
import type { CheckboxCardProps } from './types'
import Label from '@/shared/ui/label'
import Checkbox from './Checkbox'


export default function CheckboxCard({ id, children, className, checked, onChange, ...props }: CheckboxCardProps) {
    return (
        <Label variant='in' htmlFor={id} className={clsx(cls['checkbox-card'], className)}>
            <Checkbox
            id={id}
            variant='card'
            className={cls['checkbox-card__checkbox']}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            {...props}
            />

            {children}
        </Label>
    )
}