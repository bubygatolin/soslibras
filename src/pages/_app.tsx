import { AppProps } from 'next/app'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

import {FaWhatsapp} from 'react-icons/fa';



export default function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <a className='mb-2  z-[1000] fixed bottom-0 right-0  bg-green-500 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ' href='https://wa.me/5521976075335/'>
         <FaWhatsapp
          className=''
          size={40}        
         />
      </a>
      <Navbar/>
      <Component {...pageProps} />
      

      
    </>
   
  );
  
}
