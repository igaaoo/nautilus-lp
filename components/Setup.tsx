import Image from "next/image";
import { Badge } from "./Itens/Badge";

export function Setup() {
  return (
    <div className="flex flex-col w-full items-center py-4 justify-center bg-setup-bg bg-cover bg-bottom px-4 md:px-20  pb-24">

      <p className="text-4xl text-white  2xl:mb-20 md:mb-20 mb-8 mt-10  border-b-2 pb-2 font-cabin font-semibold bg-white-400  bg-opacity-30 px-8 py-1 rounded-lg shadow-lg w-full text-center">Setup</p>

      <div className=" w-full flex flex-col rounded  ">
        <div className="flex flex-col  md:grid md:grid-cols-2  gap-x-10 w-full ">
          <div className="flex flex-col justify-center md:-mt-12  gap-4">
            <p className="text-white text-xl font-semibold text-center font-red-hat ">
              2 Monitores
            </p>

            <div className="bg-white backdrop-blur-md  rounded-lg shadow-lg bg-opacity-20 p-4">
              <p className="text-white font-red-hat">
                Visão do Piloto
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Badge colorBadge="white" title="Bússola" />
                <Badge colorBadge="white" title="Cabo Umbilical" />
                <Badge colorBadge="white" title="Missões" />
                <Badge colorBadge="white" title="3 Câmeras" />
              </div>
            </div>

            <div className="bg-white backdrop-blur-md rounded-lg shadow-lg bg-opacity-20 p-4">
              <p className="text-white font-red-hat">
                Tela de Diagnóstico
              </p>
              <div className=" grid grid-cols-3 gap-2 mt-2">
                <Badge colorBadge="blue" title="Sonar" />
                <Badge colorBadge="blue" title="Bússola" />
                <Badge colorBadge="blue" title="Posição" />
                <Badge colorBadge="blue" title="Giro" />
                <Badge colorBadge="blue" title="Alarmes" />
                <Badge colorBadge="blue" title="Lanternas" />
              </div>
            </div>
          </div>

          <Image
            src="/setup.png"
            width={1280}
            height={772}
            quality={100}
            alt="Setup"
            priority
            className="  self-center mt-6 md:m-0" />

        </div>
      </div>

    </div>
  );
}