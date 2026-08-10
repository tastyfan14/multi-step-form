import cls from './Loading.module.scss'

export default function Spinner() {
    return (
        <span aria-hidden='true' className={cls.spinner} />
    )
}