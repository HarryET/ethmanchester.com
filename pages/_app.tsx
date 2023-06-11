import { Footer } from '@/components/footer'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`w-full h-full flex flex-col content-between`}>
      <Component {...pageProps} />
      <div className='px-16 py-6'>
        <Footer />
      </div>
    </div>
  )
}
