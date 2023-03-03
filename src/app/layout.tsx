import './globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Open_Sans } from '@next/font/google';

const openSans = Open_Sans({
  variable: "--openSans-font",
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <head />
      <body>
        <Navbar />
        <main className='w-screen h-auto lg:h-[83vh]'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
