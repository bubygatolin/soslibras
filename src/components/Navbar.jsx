import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import NavLogo from '../../public/assets/logo.jpeg'


const Navbar = () => {
  const[nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = ()=>{
      setNav(!nav);
    };

  useEffect(()=>{
    const handleShadow = () => {
      if(window.scrollY >= 90){
        setShadow(true);
      }else{
        setShadow(false);
      }
    }
    window.addEventListener('scroll', handleShadow);
  },[])

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image className=' rounded-2xl cursor-pointer hidden md:block mt-8' 
        src={NavLogo} 
        alt='/' width={100} 
        height={50} 
        />
        <div>
          <ul className='hidden md:flex'>
            <Link href='/' legacyBehavior>
                <li className='ml-10 text-sm uppercase hover:border-b  text-[#8FD2D6]'>Home</li>
            </Link>
            <Link href='/#about' legacyBehavior>
                <li className='ml-10 text-sm uppercase hover:border-b  text-[#8FD2D6]'>Sobre</li>
            </Link>
            <Link href='/conteudo' legacyBehavior>
                <li className='ml-10 text-sm uppercase hover:border-b  text-[#8FD2D6]'>Conteúdo</li>
            </Link>
            <Link href='/important' legacyBehavior>
                <li className='ml-10 text-sm uppercase hover:border-b  text-[#8FD2D6]'>Importâncias</li>
            </Link>
            <Link href='/#contact' legacyBehavior>
                <li className='ml-10 text-sm uppercase hover:border-b  text-[#8FD2D6]'>Contato</li>
            </Link>
           
          </ul>
          <div onClick={handleNav} className='md:hidden '>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image className=' rounded-2xl' src={NavLogo} alt='/' width={150} height={40} />
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose size={25}/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Tire suas dúvidas!</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/' legacyBehavior>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#about' legacyBehavior>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Sobre</li>
              </Link>
              <Link href='/#conteudo' legacyBehavior>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Conteúdo</li>
              </Link>
              <Link href='/important' legacyBehavior>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Importâncias</li>
              </Link>
              <Link href='/#contact' legacyBehavior>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contato</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text- [#5651e5]'>Rede sociais</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>           
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaInstagram />
                </div>                                      
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Navbar