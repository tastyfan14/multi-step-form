import clsx from 'clsx'
import type { PlanRadioCardProps } from '../model/types'
import cls from './PlanRadioCard.module.scss'

export default function PlanRadioCard({ variant, id, icon: Icon, title, price, bonus }: PlanRadioCardProps) {
    return (
        <div className={clsx(cls['plan'], cls[id])}>
            <Icon />
            <div className={cls['plan__overview']}>
                <h2 className={cls['plan__overview--title']}>{title}</h2>
                <h3 className={cls['plan__overview--price']}>${price}{variant === 'year' ? '/yr' : '/mo'}</h3>
                {variant === 'year' ? <h4 className={cls['plan__overview--bonus']}>{bonus}</h4> : null}
            </div>
        </div>
    )
}