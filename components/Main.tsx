export function Main() {
  return (
    <div className='bg-main-bg h-[calc(100vh-1vh)]  bg-cover flex flex-col p-4 md:p-12 justify-center'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-white md:text-4xl 2xl:text-5xl  font-semibold italic text-2xl font-jost'>&quot;Mais completo simulador de ROV do Brasil&quot; <br /> <span className='text-xl font-red-hat'>-TECROV</span></h2>
        <p className='text-white font-red-hat lg:text-2xl'>
          Experiencie o que há de mais moderno em simulação submarina<br />
          Com o Simulador Nautilus você se torna um real operador de ROV <br />
        </p>
        <div className='flex flex-col md:flex-row gap-2'>
          <button className='bg-white font-red-hat bg-opacity-40 shadow lg:w-44 px-4 lg:text-xl py-2 rounded text-white hover:bg-opacity-70'>
            Teste grátis
          </button>
          <button className=' bg-blue-500 font-red-hat shadow bg-opacity-80 lg:w-96 px-4 lg:text-xl py-2 rounded text-white hover:bg-opacity-100'>
            Solicite um Orçamento
          </button>
        </div>


      </div>
    </div>
  );
}