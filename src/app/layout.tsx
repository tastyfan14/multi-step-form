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
    title: 'Multi-Step Form',
    description: 'Challenge by Frontend Mentor. Coded by @tasty_fan14.',
    icons: {
        icon: 'favicon-32x32.png'
    },
    keywords: ['Next.js', 'React', 'TypeScript', 'SCSS'],
    openGraph: {
        title: 'Multi-Step Form',
        description: 'Challenge by Frontend Mentor. Coded by @tasty_fan14.',
        type: 'website',
        images: [
            {
                url: '/preview.jpg',
                width: 1440,
                height: 1056,
            },
        ],
    },
    twitter: {
        title: 'Multi-Step Form',
        description: 'Challenge by Frontend Mentor. Coded by @tasty_fan14.',
        card: 'summary_large_image',
        images: '/preview.jpg',
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