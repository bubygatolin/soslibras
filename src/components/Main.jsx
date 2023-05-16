import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

import { FaInstagram, FaFacebook, FaYoutube} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center mt-10 lg:h-screen'>
      <div className='max-w-[1240px] w-full h-full mx-auto  p-2 flex justify-center items-center'>
        <div >         
                   

          <h2 className=' text-red-700 underline decoration-solid mt-10'>
            Missão
          </h2>
          
          <p className=' mt-3 py-4 text-[#8FD2D6] max-w[70%] m-auto text-3xl'>
           Ser uma canal que possibite uma eficaz acessibilidade e cominicação entre as pessoas ouvintes com a comunidade surda.
          </p>

          <h2 className=' text-red-700 underline decoration-solid'>
            Visão
          </h2>
          
          <p className=' mt-3 py-4 text-[#8FD2D6] max-w[70%] m-auto text-3xl text-[#]'>
            Inclusão e responsabilidade social no mundo.
          </p>

          <h2 className=' text-red-700 underline decoration-solid'>
            Valores
          </h2>
          
          <p className=' mt-3 py-4 text-[#8FD2D6] max-w[70%] m-auto text-3xl'>
            Ética e cumprimento da lei acima tudo.
          </p>
          <div className='flex items-center justify-between max-w[330px] m-auto py-4 mt-2'>
          <a
              href='https://www.instagram.com/rodrigomultimidia/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full text-[#8FD2D6] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaInstagram />
              </div>
            </a>
            <a
              href='/#contact'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full text-[#8FD2D6] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>
            <a
              href='https://www.facebook.com/rodrigo.multimidia01'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full text-[#8FD2D6] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaFacebook />
              </div>
            </a>
            <a
              href='https://www.instagram.com/librassports/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full text-[#8FD2D6] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaYoutube />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main