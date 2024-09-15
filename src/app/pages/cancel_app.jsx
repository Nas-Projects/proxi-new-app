import { useEffect, useRef } from 'react'


import { Header } from '@/components/Header'
import  Footer  from '@/components/Footer'
import '../styles/tailwind.css'
import 'focus-visible'
import { NewHeader } from '../components/NewHeader'
<NewHeader/>
function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>

      <div className="relative bg-dark dark:bg-[black] dark:!text-white ">
        {/* <Header /> */}
        <NewHeader/>
        <main className='overflow-hidden w-screen max-[490px]:pt-4'>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
