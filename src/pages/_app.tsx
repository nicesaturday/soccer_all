import { Component } from 'react';
import '../app/globals.css'
import { AppProps } from 'next/app';
import OverlayButton from '@/components/overlayButton';
import { AnimatePresence,motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { SWRConfig } from "swr";
import "../../public/static/fonts/style.css"



function MyApp({ Component, pageProps }: AppProps) {

   const router = useRouter();
  
      
    return(
        <SWRConfig
        value={{
          fetcher: (url: string) =>
            fetch(url).then((response) => response.json()),
        }}
      >
        <div className='h-full'>
            <AnimatePresence>
                <motion.div key={router.route}  
                initial={{ opacity: 0, scale: 1}} 
                animate={{ opacity:1 , scale: 1 }}
                transition={{ duration: 2 }}>
                    <OverlayButton />
                    <Component {...pageProps}/>
                </motion.div>
            </AnimatePresence>
        </div>
        </SWRConfig>
    )
}


export default MyApp;