import Button from '@/shared/ui/button'
import cls from './Navigation.module.scss'
import type { NavigationProps } from '../../model/types'
import { FIELD_STEPS } from '@/entities/multi-step-form/model/config'
import Spinner from '@/shared/ui/spinner'

export function Navigation({ prevStep, nextStep, currentStep, isSubmitting }: NavigationProps) {
    return (
        <div className={cls['navigation']}>
            {currentStep !== 1 && (
                    <Button
                    type='button'
                    variant='additional'
                    className={cls['navigation__prev']}
                    onClick={prevStep}
                    >
                        Go Back
                    </Button>
            )}

            {currentStep !== FIELD_STEPS.length
                ? (
                    <Button
                    type='button'
                    variant='primary'
                    className={cls['navigation__next']}
                    onClick={nextStep}
                    >
                        Next Step
                    </Button>
                )
                : (
                    <Button
                    type='submit'
                    variant='secondary'
                    className={cls['navigation__next']}
                    onClick={nextStep}
                    disabled={isSubmitting}
                    >
                        {isSubmitting ? <Spinner /> : 'Confirm'}
                    </Button>
                )
            }
        </div>
    )
}