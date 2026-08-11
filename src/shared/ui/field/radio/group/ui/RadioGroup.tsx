import RadioCard from '@/shared/ui/field/radio/card/ui/RadioCard'
import type { RadioGroupProps } from '../model/types'
import cls from './RadioGroup.module.scss'
import clsx from 'clsx'

export default function RadioGroup<T extends({ id: string })>({ title, desc, name, options, renderCard }: RadioGroupProps<T>) {
    return (
        <fieldset className={cls['radio-group']} aria-describedby='radio-desc'>
            <legend className={clsx(cls['radio-group__title'], title === null ? cls['radio-group__title--hidden'] : null)}>{title !== null ? title : 'Select one'}</legend>
            {desc && <p id='radio-desc'>{desc}</p>}

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
        </fieldset>
    )
}