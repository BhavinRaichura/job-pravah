import '@/app/globals.css'

import Footer from '@/components/base/Footer'
import Aside from '@/components/base/Aside'
import Highlights from '@/components/base/Highlights'
import Navbar from '@/components/base/Navbar'
import SearchBarTiny from '@/components/ui/SearchBarTiny'


export default function RootLayout({ children }) {
  return (
    <div className='bg-white'>
        <Navbar/>
        <span className='  fixed backdrop-blur-3xl rounded-full bg-zinc-900 backdrop-brightness-200 text-gray-200 max-lg:bottom-20 max-lg:right-5 lg:top-36 lg:right-20'><SearchBarTiny /></span>
        <div className='  justify-center w-full flex '>
          <div className='   2xl:w-3/5 max-2xl:w-5/6 max-xl:w-11/12 max-lg:w-full lg:flex'>
            <main className=' lg:border-r  pt-20 pb-10 lg:sticky lg:top-0  h-fit w-2/3 max-lg:w-full overflow-hidden'>
              {children}
            </main>
            <aside className='  w-1/3 max-lg:w-full lg:sticky   h-fit overflow-hidden  lg:pt-20 max-lg:pt-1 pb-10 ' style={{top:"-80%"}} >
              <Aside/> 
            </aside>

          </div>
        </div>
        <Highlights/>
        <Footer/>
      </div>
  )
}
