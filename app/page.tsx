import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full p-0 m-0">

      <div className='p-2 fixed w-full'>
        <div className='px-8 flex flex-col  md:flex-row items-center justify-between p-2 z-40  w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20  '>
          <div className='flex items-center gap-2'>
            <Image src="nautilusLogo.svg" width={45} height={45} alt='Nautilus Logo' className='invert' />
            <h1 className='font-semibold text-2xl text-white whitespace-nowrap'>Nautilus Simulator</h1>
          </div>

          <div className='flex gap-2 py-2'>
            <button className='bg-white bg-opacity-20 px-4 py-2 rounded text-white hover:bg-opacity-25'>
              Demonstração
            </button>
            <button className='bg-white bg-opacity-20  px-4 py-2 rounded text-white  hover:bg-opacity-25'>
              Compre
            </button>
            <button className='bg-white bg-opacity-20  px-4 py-2 rounded text-white  hover:bg-opacity-25'>
              Contato
            </button>
          </div>
        </div>
      </div>

      <div className='bg-main-bg h-fit pb-28 p-12 '>
        <div className='mt-36 flex flex-col gap-4'>
          <h2 className='text-white text-4xl font-semibold'>&quot;Mais completo simulador de ROV do Brasil&quot; <br /> <span className='text-xl italic '>-TECROV</span></h2>
          <p className='text-white'>
            Experiencie o que há de mais moderno em simulação submarina<br />
            Com o Simulador Nautilus você se torna um real operador de ROV <br />
          </p>
          <div className='flex flex-col md:flex-row gap-2'>
            <button className='bg-white bg-opacity-40 shadow px-4 py-2 rounded text-white hover:bg-opacity-70'>
              Teste grátis
            </button>
            <button className=' bg-blue-500 shadow bg-opacity-80 px-4 py-2 rounded text-white hover:bg-opacity-100'>
              Solicite um Orçamento
            </button>
          </div>
        </div>
      </div>

    </main>
  );
}
