import clsx from 'clsx'
import type { StepsProps } from '../../model/types'
import { Step } from './Step'
import cls from './Steps.module.scss'

export function Steps({ steps, currentStep, className }: StepsProps) {
    return (
        <nav
        className={clsx(cls['steps'], className)}
        aria-label='Progress'
        >
            {steps.map((step) => {
                return (
                    <ol 
                    key={`step-${step.step}`}
                    className={cls['steps-list']}
                    >
                        <Step
                        step={step.step}
                        title={step.title}
                        active={step.step === currentStep}
                        />
                    </ol>
            )})}
        </nav>
    )
}