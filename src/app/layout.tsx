import '@/styles/globals.scss'
import s from '@/app/RootLayout.module.scss';
import { Header } from '@/components/Header/Header';
import '@/styles/blocks/_container.scss';
import type { Metadata } from 'next'
import { Cabin } from 'next/font/google'
import Footer from '@/components/Footer/Footer';

const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: 'STL',
  description: 'Payment Platform',
  icons: './favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <div className={s.page}>
          <Header />
          {/* <aside>menu</aside> */}

          <main className={s.main}>
            {/* <div className="main-container"> */}
              {children}
            {/* </div> */}
          </main>

          <Footer />
        </div>
       </body>
    </html>
  );
};
