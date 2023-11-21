'use client';
import Image from 'next/image';
import { useState } from 'react';


export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className='p-2 fixed w-full z-50'>
      <div className='px-4 md:px-8 flex  md:flex-row items-center justify-between p-2  shadow w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20  '>
        <div className='flex items-center gap-2'>
          <Image src="nautilusLogo.svg" width={35} height={35} alt='Nautilus Logo' className='invert' />
          <h1 className='font-extrabold text-2xl md:text-2xl text-white whitespace-nowrap flex gap-1 font-cabin'><span className='hidden md:flex font-cabin'>Simulador</span> Nautilus</h1>
        </div>
        <div className='flex gap-2 py-2'>
          <div className='hidden  md:flex gap-2'>
            <button className='bg-cyan-700 bg-opacity-30 font-red-hat px-4 py-1 rounded text-white hover:bg-opacity-25'>
              Teste Grátis
            </button>
            <button className='bg-cyan-700 font-red-hat bg-opacity-30  px-4 py-1 rounded text-white  hover:bg-opacity-25'>
              Solicite um Orçamento
            </button>
            <button className='bg-cyan-700 font-red-hat bg-opacity-30  px-4 py-1 rounded text-white  hover:bg-opacity-25'>
              Entre em Contato
            </button>
          </div>


          <div className="space-y-2 bg-white bg-opacity-20  p-2 rounded flex flex-col justify-center md:hidden hover:bg-opacity-30 cursor-pointer"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="block w-8 h-0.5 bg-white rounded"></span>
            <span className="block w-8 h-0.5 bg-white rounded"></span>
            <span className="block w-8 h-0.5 bg-white rounded"></span>
          </div>

          {
            navbarOpen &&
            <div className='flex w-full flex-col gap-2 px-2 bg-white  backdrop-blur-xl backdrop-filter rounded mt-1 bg-opacity-30  absolute left-0 top-[70px] py-2'>
              <button className='bg-cyan-700 bg-opacity-80 w-full px-4 py-1 rounded text-white hover:bg-opacity-90'>
                Teste Grátis
              </button>
              <button className='bg-cyan-700 bg-opacity-80 w-full px-4 py-1 rounded text-white  hover:bg-opacity-90'>
                Solicite um Orçamento
              </button>
              <button className='bg-cyan-700 bg-opacity-80 w-full px-4 py-1 rounded text-white  hover:bg-opacity-90'>
                Entre em Contato
              </button>
            </div>
          }


        </div>
      </div>
    </div>
  );
}