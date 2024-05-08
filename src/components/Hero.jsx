import React from "react";
import {Button} from "@nextui-org/react";
import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 class="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
            Lideres numero uno en 
            <span class="bolsa text-primary py-2 px-6 border-8 border-primary relative inline-block rounded-b-lg">
              Calefaccion
              <RiCheckboxBlankCircleFill class="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill class="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" /> 
              <RiCheckboxBlankCircleFill class="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill class="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span> 
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Calor y confort garantizados. Reparamos tu caldera y sistema de calefacción de forma rápida y eficiente. ¡Despreocúpate del frío, nosotros nos encargamos!
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Button className="w-small xl:w-auto bg-primary text-white p-4py-2 px-8 rounded-xl text-xl">
              <a href="tel:01177094182">Contactar</a>
            </Button>   

          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <img
            src="tecnicocalderaAI.png"
            className="w-[250px] h-[250px] md:w-[490px] md:h-[490px] object-cover xl:-mt-28"
          />
          <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
            <div className="flex items-center">
              <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300"
              />
              <img
                src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
            </div>
            <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
              120 + Employees
            </h2>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarFill className="text-primary" /> 5.0 (3.1k Reviews)
            </div>
            <div className="absolute -right-12 -bottom-12 -z-10">
              <div className="relative">
                <RiCheckboxBlankCircleFill className="text-primary text-8xl" />
                <div className="absolute left-0 top-0 bg-white w-14 h-14"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Circle */}
        <div className="absolute top-1/3 -translate-y-1/3 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[460px] md:h-[40px] bg-white border-[10px] border-primary rounded-full -z-10"></div>

        {/* Logos */}
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/856/822/non_2x/temperature-illustration-on-a-transparent-background-premium-quality-symbols-line-flat-color-icon-for-concept-and-graphic-design-vector.jpg"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-2 border-gray-600 absolute top-[12%] right-[20%] xl:right-[10%]"
        />
        <img
          src="https://i.pinimg.com/564x/23/2c/f6/232cf63e80f24c70f28a98299260848a.jpg"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-2 border-gray-600 absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]"
        />
        <img
          src="https://i.pinimg.com/564x/c0/6e/c2/c06ec24c851c5ea626b7ebfd44f268a0.jpg"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[5%] left-[15%] xl:left-[3%] -rotate-12"
        />
      </div>
    </section>
  );
};

export default Hero;
