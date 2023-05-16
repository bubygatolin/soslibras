import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {  FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../../public/assets/mens.jpg';
import InstLogo from '../../public/assets/ig.png';
import LogoSc from '../../public/assets/logo_scompany.png'
import LogoSunb from '../../public/assets/sunboay.png';

 

const Contact = () => {
 
  

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-red-600'>
          Contato
        </p>
        <h2 className='py-4 text-[#0A3235]'>Entre em Contato</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2 uppercase text-red-600'>sos <span className='text-[#8FD2D6]'>libras</span></h2>
                
                <p className='py-4 text-[#8FD2D6]'>
                Soluções rápidas e práticas para uma melhor comunicação com seus clientes surdos.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8 text-red-600'>Contate-me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.instagram.com/rodrigomultimidia/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaInstagram />
                    </div>
                  </a>
                  <a
                    href='/#contact'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                  </a>

                  <a
                    href='https://www.facebook.com/rodrigo.multimidia01'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaFacebook />
                    </div>
                  </a>
                  <Link href='https://www.instagram.com/librassports/'legacyBehavior>
                    <a>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaYoutube />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/7caa3a4c-b2be-45ed-9c53-a46904d0fe8a'
                method='POST'
                encType='multipart/form-data'
                
                
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2  text-[#8FD2D6]'>Nome</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2  text-[#8FD2D6]'>
                     Telefone 
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2  text-[#8FD2D6]'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2  text-[#8FD2D6]'>
                  <label className='uppercase text-sm py-2'>Assunto</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2  text-[#8FD2D6]'>
                  <label className='uppercase text-sm py-2'>Mensagem</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                <div className='mt-5 text-red-600'>
                   <input
                  type="file" 
                  name="document">
                  
                  </input>
                </div>
                
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                 Enviar mensagem
                </button>
                
              </form>
            </div>
          </div>
        </div>
        <div>
          <h2 className=' uppercase mt-5 text-[#8FD2D6]'>nossos parceiros:</h2>
        </div>
        <div className=' mt-4 hover:scale-105 ease-in duration-300 flex flex-col items-center space-y-5'>
          <a href="https://www.instagram.com/instituto_gatolin_/">
          <Image className='h-36 w-40'            
            src={InstLogo}
            alt='/'
          />     
          </a>   
          <a href="https://www.instagram.com/institutoscompany/">
          <Image className='h-36 w-40'            
            src={LogoSc}
            alt='/'
          />     
          </a>
          <a href="https://www.instagram.com/sunboats.catamarans/"> 
          <Image className='h-36 w-40 '           
            src={LogoSunb}
            alt='/'
          />       
          </a>   
        </div>  
       
        <div className='flex justify-center py-12'>
          <Link href='/'legacyBehavior>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className=' text-[#8FD2D6]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

