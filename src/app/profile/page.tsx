import Button from '@/shared/ui/button'
import MainLayout from '@/shared/ui/layout/ui/MainLayout'
import cls from './page.module.scss'

export default function Profile() {
    return (
        <MainLayout className={cls['page']}>
            <h1 className={cls['page__title']}>Fake profile</h1>
            <Button variant='primary' className={cls['page__button']} as='link' href='/'>Go back</Button>
        </MainLayout>
    )
}