export function Main() {
  return (
    <div className='bg-main-bg h-[calc(100vh-1vh)]  bg-cover flex flex-col p-12 justify-center'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-white md:text-4xl 2xl:text-5xl  font-semibold text-2xl'>&quot;Mais completo simulador de ROV do Brasil&quot; <br /> <span className='text-xl italic '>-TECROV</span></h2>
        <p className='text-white lg:text-2xl'>
          Experiencie o que há de mais moderno em simulação submarina<br />
          Com o Simulador Nautilus você se torna um real operador de ROV <br />
        </p>
        <div className='flex flex-col md:flex-row gap-2'>
          <button className='bg-white bg-opacity-40 shadow lg:w-44 px-4 lg:text-xl py-2 rounded text-white hover:bg-opacity-70'>
            Teste grátis
          </button>
          <button className=' bg-blue-500 shadow bg-opacity-80 lg:w-96 px-4 lg:text-xl py-2 rounded text-white hover:bg-opacity-100'>
            Solicite um Orçamento
          </button>
        </div>


      </div>
    </div>
  );
}