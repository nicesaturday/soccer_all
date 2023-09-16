
import '../app/globals.css'
import { AppProps } from 'next/app';
import OverlayButton from '@/components/overlayButton';
import { SWRConfig } from "swr";




function MyApp({ Component, pageProps }: AppProps) {

  
      
    return(
        <SWRConfig
        value={{
          fetcher: (url: string) =>
            fetch(url).then((response) => response.json()),
        }}
      >
        <div className='w-full h-full'>
      
                    <OverlayButton />
                    <Component {...pageProps}/>
  
        </div>
        </SWRConfig>
    )
}


export default MyApp;