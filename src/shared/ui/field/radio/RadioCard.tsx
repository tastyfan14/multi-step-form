import cls from './RadioCard.module.scss'
import type { RadioCardProps } from './types'
import Input from '@/shared/ui/field/input'
import Label from '@/shared/ui/field/label'

export default function RadioCard({ id, children, ...props }: RadioCardProps) {
    return (
        <div className={cls['radio-card']}>
            <Input type='radio' id={id} {...props} />
            <Label variant='in' className={cls['radio-card__label']} htmlFor={id}>
                {children}
            </Label>
        </div>
    )
}