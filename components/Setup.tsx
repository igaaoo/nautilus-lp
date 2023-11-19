import Image from "next/image";
import { Badge } from "./Itens/Badge";

export function Setup() {
  return (
    <div className="flex flex-col w-full items-center py-4 justify-center gap-4 bg-setup-bg bg-cover bg-bottom  h-[calc(100vh-1vh)]">
      <p className="text-4xl text-white 2xl:mb-20 mb-8  border-b-2 pb-2">Setup</p>

      <div className=" w-full flex flex-col rounded   p-4">
        <div className="flex flex-col  md:grid md:grid-cols-2  gap-x-10 w-full px-20">

          <div className="flex flex-col justify-center md:-mt-12  gap-4">
            <div className="bg-white backdrop-blur-md rounded shadow-lg bg-opacity-20 p-4">
              <p className="text-white text-xl font-semibold text-center">
                2 Monitores
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Badge colorBadge="green" title="Visão do Piloto" />
                <Badge colorBadge="blue" title="Tela de Diagnóstico" />
              </div>
            </div>

            <div className="bg-white backdrop-blur-md  rounded shadow-lg bg-opacity-20 p-4">
              <p className="text-white">
                Controle de câmeras e sensores
              </p>
              <div className="grid grid-cols-4 gap-2 mt-2">
                <Badge colorBadge="green" title="Bússola" />
                <Badge colorBadge="green" title="Cabo Umbilical" />
                <Badge colorBadge="green" title="Missões" />
                <Badge colorBadge="green" title="3 Câmeras" />
              </div>
            </div>

            <div className="bg-white backdrop-blur-md rounded shadow-lg bg-opacity-20 p-4">
              <p className="text-white">
                Informações de sensores e alarmes
              </p>
              <div className=" grid grid-cols-4 gap-2 mt-2">
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
            width={1000}
            height={1000}
            quality={100}
            alt="Setup"
            className="  self-center mt-10 md:m-0" />

        </div>
      </div>

    </div>
  );
}