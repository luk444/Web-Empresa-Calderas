import React from "react";
// Icons
import { RiMailFill, RiSmartphoneFill, RiMacFill, Ri24HoursFill, RiChat1Line, RiVisaFill } from "react-icons/ri";

const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">Nos destacamos en brindar</h1>
        <p className="text-[20px] text-gray-500">
          Un servicio de calidad y confianza, con los mejores repuestos del mercado y garantia en todos nuestros trabajos no dudes 
        </p>
        <form className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Suscribe
            </button>
          </div>
        </form>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Repuestos Originales</h3>
          <p className="text-gray-500">
            Contamos con los mejores repuestos del mercado!
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Garantia</h3>
          <p className="text-gray-500">
            Todos los trabajos realizados por nuestros técnicos matriculados están garantizados.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Banco de pruebas/laboratorio</h3>
          <p className="text-gray-500">
            Tenemos un amplio laboratorio de pruebas para corroborar que este todo en perfecto funcionamiento!
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiVisaFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Amplios metodos de pago</h3>
          <p className="text-gray-500">
              Transferencia bancaria - Efectivo - Tarjeta de crédito - Mercado Pago - USDT - USDC
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiChat1Line className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Respuesta en el dia</h3>
          <p className="text-gray-500">
            Atencion en el dia, para que no tengas que esperar!
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Ri24HoursFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Urgencias 24hs</h3>
          <p className="text-gray-500">
            Si tenes una urgencia no dudes en llamarnos, estamos disponibles las 24hs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
