
import './globals.css'
import NextNProgress from 'nextjs-progressbar';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import { Suspense } from 'react';
import Loading from './loading';
export const metadata = {
  title: 'Panaverse DAO',
  description: 'Panaverse DAO',
  icons: {
    icon: '/favicon.webp',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className='overflow-y-auto'>
      <Suspense fallback={<Loading />}>
      <div className='flex flex-col w-full'>
        <div className='flex-grow-0 w-full sticky inset-x-0 top-0 z-50'>
          <NavMenu />
        </div>
        <div className='flex-grow-1 w-full'>
          {children}
        </div>
        <div className='flex-grow-0  w-full'>
          <Footer />
        </div>
      </div>
      </Suspense>
      </body>
    </html>
  )
}
