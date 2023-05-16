import React from 'react';
import Image from 'next/image';

import AboutImg from '../../public/assets/sobre.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 mt-12'>
        <div className='col-span-2 '>
          <h2 className='uppercase text-lg tracking-widest text-red-600 text-center font-bold'>Soluções rápidas e práticas para uma melhor comunicação com seus clientes surdos</h2>
          <h2 className='py-4 text-[#0A3235]'>O que é o <span className=' text-red-600'>SOS</span>  LIBRAS?</h2>
          <p className='py-2 text-[#8FD2D6] text-2xl'>É um canal de video online através do whatsapp com intérpretes de libras a disposição para esclarecer dúvidas, sugestões e críticas nas empresas, pontos de serviço ou em estabelicimentos comercias, viabilizando e tornando à acessibilidade e comunicação mais digna para todos cidadãos surdos.
          </p>
          
          <p className='py-2 text-[#8FD2D6] text-2xl'>
          Mesmo com a legislação exigindo essa "acessibilidade" muitas empresas não se preocupam, tornando assim a vida dos surdos(cidadãos) muito díficil, inviabilizando o acesso a diversos serviços que qualquer ser humano necessita para viver com dignidade.
          </p>
          <h2 className='py-4 text-[#0A3235]'>Como Funciona?</h2>
          <p className='py-2 text-[#8FD2D6] text-2xl'>
          Através do canal, as empresas, pontos de serviços e estabelecimentos comercias contratantes do nosso serviço terá acesso através dos seus colaboradores para esclarecerem dúvidas ou dificuldades de entedimento no diálogo comunicativo com 0 cliente Surdo.
          </p>
          <p className='py-2 text-[#8FD2D6] text-2xl'>
          O colaborador da empresa contartante que for abordado por um cliente Surdo com dúvidas, sugestões ou reclamações poderá fazer a ligação<span className=' uppercase text-red-600 font-bold'> online </span> para o <span className=' uppercase text-red-600 font-bold'> sos libras </span>e se comunicar com nossa equipe de intépretes de Libras para solicionar o impasse da dificuldade na comunicação entre ambas as partes.
          </p>                 
                           
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl mt-20' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;