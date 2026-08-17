import type { StepContentProps } from '../../model/types'
import cls from './StepContent.module.scss'

export function StepContent({ title, desc, children }: StepContentProps) {
    return (
        <div className={cls['step-content']}>
            <h1 className={cls['step-content__title']}>{title}</h1>
            <p className={cls['step-content__desc']}>{desc}</p>

            {children}
        </div>
    )
}