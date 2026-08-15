import clsx from 'clsx'
import type { StepProps } from '../../model/types'
import cls from './Steps.module.scss'

export function Step({ step, title, active }: StepProps): React.ReactNode {
    return (
        <li
        className={cls['steps-item']}
        aria-current={
            active ? 'step' : undefined
        }
        >
            <span aria-hidden='true' className={clsx(cls['steps-item__circle'], active && cls['steps-item__circle--active'])}>{step}</span>

            <div className={cls['steps-item__overview']}>
                <span className={cls['steps-item__overview--step']}>STEP {step}</span>
                <span className={cls['steps-item__overview--title']}>{title}</span>
            </div>
        </li>
    )
}