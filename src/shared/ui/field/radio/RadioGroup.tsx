import RadioCard from './RadioCard'
import type { RadioGroupProps } from './types'
import cls from './RadioGroup.module.scss'

export default function RadioGroup<T extends({ id: string })>({ name, options, renderCard }: RadioGroupProps<T>) {
    return (
        <div className={cls['radio-group']}>
            {options.map((option) => {
                const id = `${name}-${option.id}`
                return (
                    <RadioCard
                    key={option.id}
                    id={id}
                    name={name}
                    >
                        {renderCard(option)}
                    </RadioCard>
                )
            })}
        </div>
    )
}