import React from "react";
// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Testimonios que calientan el corazón:
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
         Este invierno ha sido el más cómodo que hemos tenido en años. La nueva caldera que nos instalaron los chicos de BaxiNova mantiene nuestra casa a la temperatura perfecta, sin importar lo frío que haga afuera. Los niños pueden jugar en el suelo sin preocuparse por el frío, y nosotros finalmente podemos disfrutar de noches de cine acurrucados en el sofá. Estamos muy agradecidos por el excelente servicio y la tranquilidad que nos ha brindado NovaClima." -
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <img
            src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
          />
          <img
            src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
          />
          <img
            src="https://img.freepik.com/foto-gratis/hombre-negocios-dueno-empresa-oficina_1303-15851.jpg"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />
          <img
            src="https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
          />
          <img
            src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">Familia García</h3>
          <h5 className="text-center text-[20px] text-gray-500">
            Clientes de BaxiNova
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
