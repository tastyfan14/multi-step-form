import RadioCard from './RadioCard'
import type { RadioGroupProps } from './types'
import cls from './RadioGroup.module.scss'

export default function RadioGroup<T extends({ id: string })>({ name, options, renderCard, value, onChange, ...props }: RadioGroupProps<T>) {
    return (
        <div className={cls['radio-group']}>
            {options.map((option) => {
                const id = `${name}-${option.id}`
                return (
                    <RadioCard
                    key={option.id}
                    id={id}
                    name={name}
                    checked={value === option.id}
                    onChange={() => onChange?.(option.id)}
                    {...props}
                    >
                        {renderCard(option)}
                    </RadioCard>
                )
            })}
        </div>
    )
}