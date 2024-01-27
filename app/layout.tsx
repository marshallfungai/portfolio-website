import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { ToastBar, Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/themeSwitch'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fungai Marshall Mangondoza | Fullstack Developer',
  description: 'Fullstack Developer based in South Africa. I build web applications using Php, MySQL, React, Next.js, Node.js, and MongoDB. I also build mobile applications using React Native and Flutter.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-60 text-gray-950 relative h-[5000px] pt-28 sm:pt-36 `}>
        <div className="bg-[#f0e2fb] absolute top-[-6rem] -z-10 right-[11-rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rm] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer/>
          <Toaster position='bottom-right'/>
        </ActiveSectionContextProvider>
         {/* <ThemeSwitch/> */}
      </body>
    </html>
  )
}
