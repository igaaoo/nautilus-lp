import Image from "next/image";

export function Controls() {
  return (
    <div className="flex flex-col w-full items-center py-4 justify-center bg-gradient-to-t from-cyan-100 from-cyan-300 to-[#497284] px-4 md:px-20  pb-24">
      <p className="text-4xl text-white  2xl:mb-20 md:mb-20 mb-8 mt-10  border-b-2 pb-2 font-red-hat font-semibold bg-white-400  bg-opacity-30 px-8 py-1 rounded-lg shadow-lg w-full text-center">Controles</p>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-30 backdrop-blur-sm backdrop-filter p-10 rounded-lg">
          <Image src="/keyboard.jpg" width={200} height={200} alt="Teclado" className="rounded-lg" />
          <h2 className="text-2xl text-white mt-4">Teclado</h2>
          <p>Controle espacial do ROV...</p>
        </div>

        <div className="bg-white bg-opacity-30 backdrop-blur-sm backdrop-filter p-10 rounded-lg">
          <div className="overflow-clip">
            <Image src="/joystickPiloto.jpg" width={200} height={100} alt="Teclado" />
          </div>
          <h2 className="text-2xl text-white mt-4">Teclado</h2>
          <p>Controle espacial do ROV...</p>
        </div>

        <div className="bg-white bg-opacity-30 backdrop-blur-sm backdrop-filter p-10 rounded-lg">
          <Image src="/joystickXbox.webp" width={200} height={200} alt="Teclado" className="rounded-lg" />
          <h2 className="text-2xl text-white mt-4">Teclado</h2>
          <p>Controle espacial do ROV...</p>
        </div>
      </div>

    </div>
  );
}