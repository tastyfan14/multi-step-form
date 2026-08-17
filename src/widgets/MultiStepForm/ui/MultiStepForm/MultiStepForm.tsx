'use client'

import { Navigation } from '../Navigation/Navigation'
import { StepContent } from '../StepContent/StepContent'
import { Steps } from '../Steps/Steps'
import Label from '@/shared/ui/label'
import Button from '@/shared/ui/button'
import Input from '@/shared/ui/input'
import Toggle from '@/shared/ui/toggle'
import RadioGroup from '@/shared/ui/radio/RadioGroup'
import { CheckboxCard } from '@/shared/ui/checkbox'
import MainLayout from '@/shared/ui/layout/ui/MainLayout'
import cls from './MultiStepForm.module.scss'
import clsRadio from '@/shared/ui/radio/RadioCard.module.scss'
import clsCheckbox from '@/shared/ui/checkbox/CheckboxCard.module.scss'
import clsx from 'clsx'
import {
    FIELD_STEPS,
    FIELD_TOGGLE_FIRST, FIELD_TOGGLE_SECOND
} from '@/entities/multi-step-form/model/config'
import { Controller } from 'react-hook-form'
import ISuccessOrder from '@/shared/assets/ISuccessOrder'
import useMultiStepForm from '../../model/useMultiStepForm'
import useCheckoutSummary from '../../model/useCheckoutSummary'

export function MultiStepForm() {
    const {
        currentStep,
        setCurrentStep,
        prevStep,
        nextStep,
        isSuccess,
        onSubmit,
        register,
        handleSubmit,
        control,
        errors,
        trigger,
        isSubmitting,
    } = useMultiStepForm()

    const {
        period,
        plans,
        addons,
        selectedPlan,
        selectedAddons,
        total,
    } = useCheckoutSummary(control)
    return (
        <section>
            <Steps currentStep={currentStep} steps={FIELD_STEPS} className={cls['msf__isMobile']} />

            <MainLayout className={cls['msf__container']}>
                <form onSubmit={handleSubmit(onSubmit)} className={cls['msf__form']}>
                    <Steps currentStep={currentStep} steps={FIELD_STEPS} className={cls['msf__isLaptop']} />

                    {isSuccess
                        ?
                        <>
                            <section
                            aria-live='polite'
                            aria-labelledby='success-title'
                            className={cls['msf__success']}>
                                <ISuccessOrder aria-hidden='true' />
                                <h1 id='success-title' className={cls['msf__success--title']}>Thank you!</h1>
                                <p className={cls['msf__success--desc']}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
                            </section>
                        </>
                        :
                        <>
                            {currentStep === 1 && (
                                <StepContent
                                title='Personal info'
                                desc='Please provide your name, email address, and phone number.'
                                >
                                    <div className={cls['msf__fields']}>
                                        <Label variant='in'>
                                            Name
                                            <Input
                                            {...register('name')}
                                            placeholder='e.g. Stephen King'
                                            aria-invalid={!!errors.name}
                                            aria-describedby={errors.name && 'name-error'}
                                            />
                                            {errors.name && <p id='name-error' className={cls['msf__error']}>{errors.name.message}</p>}
                                        </Label>

                                        <Label variant='in'>
                                            Email Address
                                            <Input
                                            {...register('email')}
                                            placeholder='e.g. stephenking@lorem.com'
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email && 'email-error'}
                                            />
                                            {errors.email && <p id='email-error' className={cls['msf__error']}>{errors.email.message}</p>}
                                        </Label>

                                        <Label variant='in'>
                                            Phone Number
                                            <Input
                                            {...register('phone')}
                                            placeholder='e.g. +1 234 567 890'
                                            aria-invalid={!!errors.phone}
                                            aria-describedby={errors.phone && 'phone-error'}
                                            />
                                            {errors.phone && <p id='phone-error' className={cls['msf__error']}>{errors.phone.message}</p>}
                                        </Label>
                                    </div>

                                    <Navigation prevStep={prevStep} nextStep={nextStep} currentStep={currentStep} isSubmitting={isSubmitting} />
                                </StepContent>
                            )}

                            {currentStep === 2 && (
                                <StepContent
                                title='Select your plan'
                                desc='You have the option of monthly or yearly billing.'
                                >
                                    <Controller
                                    name='plan'
                                    control={control}
                                    render={({ field, fieldState }) => {
                                        return (
                                            <>
                                                <RadioGroup
                                                name={`plan-${period}`}
                                                aria-describedby='plan-error'
                                                aria-invalid={fieldState.invalid}
                                                value={field.value}
                                                onChange={(value) => {
                                                    field.onChange(value)
                                                    trigger('plan')
                                                }}
                                                options={plans}
                                                renderCard={(option) => {
                                                    const Icon = option.icon

                                                    return (
                                                        <div className={clsx(clsRadio['radio-card-plan'], clsRadio[`radio-card-${option.id}`])}>
                                                            <Icon />
                                                            <div className={clsRadio['radio-card-plan__overview']}>
                                                                <h2 className={clsRadio['radio-card-plan__overview--title']}>{option.title}</h2>
                                                                <h3 className={clsRadio['radio-card-plan__overview--price']}>${option.price}{period === 'year' ? '/yr' : '/mo'}</h3>
                                                                {period === 'year' && 'bonus' in option && (<p className={clsRadio['radio-card-plan__overview--bonus']}>{option.bonus}</p>)}
                                                            </div>
                                                        </div>
                                                )}}
                                                />
                                            </>
                                        )
                                    }}
                                    />

                                    <Controller
                                    name='billingPeriod'
                                    control={control}
                                    render={({ field }) => {
                                        return (
                                        <Toggle
                                        first={FIELD_TOGGLE_FIRST}
                                        second={FIELD_TOGGLE_SECOND}
                                        value={field.value}
                                        setValue={field.onChange}
                                        />
                                        )
                                    }}
                                    />

                                    <Navigation prevStep={prevStep} nextStep={nextStep} currentStep={currentStep} isSubmitting={isSubmitting} />
                                </StepContent>
                            )}

                            {currentStep === 3 && (
                                <StepContent
                                title='Pick add-ons'
                                desc='Add-ons help enhance your gaming experience.'
                                >
                                    <Controller
                                    name='checkbox.addons'
                                    control={control}
                                    render={({ field }) => {
                                        return (
                                            <div className={clsx(cls['msf__fields'], cls['msf__column'])}>
                                                {addons.map((option) => {
                                                    const checked = field.value.includes(option.id)
                                                    return (
                                                        <CheckboxCard
                                                        key={option.id}
                                                        id={option.id}
                                                        checked={checked}
                                                        onChange={
                                                            (checked) => {
                                                                if (checked) {
                                                                    field.onChange([
                                                                        ...field.value,
                                                                        option.id
                                                                    ])
                                                                } else {
                                                                    field.onChange(
                                                                        field.value.filter((id) => id !== option.id)
                                                                    )
                                                                }
                                                            }
                                                        }>
                                                            <div className={clsCheckbox['checkbox-card__overview']}>
                                                                <h2 className={clsCheckbox['checkbox-card__overview--title']}>{option.title}</h2>
                                                                <p className={clsCheckbox['checkbox-card__overview--desc']}>{option.desc}</p>
                                                            </div>

                                                            <h3 className={clsCheckbox['checkbox-card__overview--price']}>${option.price}{period === 'year' ? '/yr' : '/mo'}</h3>
                                                        </CheckboxCard>
                                                    )
                                                })}
                                            </div>
                                        )
                                    }}
                                    />

                                    <Navigation prevStep={prevStep} nextStep={nextStep} currentStep={currentStep} isSubmitting={isSubmitting} />
                                </StepContent>
                            )}

                            {currentStep === 4 && (
                                <StepContent
                                title='Finishing up'
                                desc='Double-check everything looks OK before confirming.'
                                >
                                    <section className={clsx(['step-content-summary'], cls['msf__fields'])} aria-label='Order summary'>
                                        <div className={cls['step-content-summary__container']}>
                                            <div className={cls['step-content-summary__plan']}>
                                                <div className={cls['step-content-summary__plan--container']}>
                                                    <h2 className={cls['step-content-summary__plan--title']}>{selectedPlan?.title} ({period === 'year' ? 'Yearly' : 'Monthly'})</h2>
                                                    <Button className={cls['step-content-summary__plan--btn']} type='button' variant='additional' onClick={() => setCurrentStep(2)}>Change</Button>
                                                </div>
                                                <p className={cls['step-content-summary__plan--price']}>${selectedPlan?.price}/{period === 'year' ? 'yr' : 'mo'}</p>
                                            </div>

                                            <div className={cls['step-content-summary__line']}></div>

                                            <ul className={cls['step-content-summary__addons']}>
                                                {selectedAddons.length > 0
                                                    ? selectedAddons.map((addon) => (
                                                        <li key={addon.id} className={cls['step-content-summary__addon']}>
                                                            <span className={cls['step-content-summary__addon--title']}>{addon.title}</span>
                                                            <span className={cls['step-content-summary__addon--price']}>+${addon.price}/{period === 'year' ? 'yr' : 'mo'}</span>
                                                        </li>
                                                    ))
                                                    : (<p className={cls['step-content-summary__addon--title']}>No additional option has been selected</p>)
                                                }
                                            </ul>
                                        </div>

                                        <div className={cls['step-content-summary__total']}>
                                            <span className={cls['step-content-summary__total--label']}>Total (per {period === 'month' ? 'month' : 'year'})</span>
                                            <strong className={cls['step-content-summary__total--title']}>+${total}/{period === 'year' ? 'yr' : 'mo'}</strong>
                                        </div>
                                    </section>

                                    <Navigation prevStep={prevStep} nextStep={nextStep} currentStep={currentStep} isSubmitting={isSubmitting} />
                                </StepContent>
                            )}
                        </>
                    }
                </form>
            </MainLayout>
        </section>
    )
}