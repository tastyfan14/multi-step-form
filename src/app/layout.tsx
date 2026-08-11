import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import '@/shared/styles/main.scss'
import AppLayout from '@/shared/ui/layout/ui/AppLayout'

const UbuntuFont = Ubuntu({
    variable: '--font-ubuntu',
    weight: ['400', '500', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Multi-step form',
    description: 'Challenge by Frontend Mentor. Coded by @tasty_fan14.',
    icons: {
        icon: 'favicon-32x32.png'
    }
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang='en' className={`${UbuntuFont.variable}`}>
            <body>
                <AppLayout>
                    {children}
                </AppLayout>
            </body>
        </html>
    )
}