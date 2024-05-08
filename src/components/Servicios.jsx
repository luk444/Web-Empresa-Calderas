import React, { useState } from 'react';

const Works = () => {
  const services = [
    {
      image: 'https://www.climadesign.com.ar/admin/upload_files/products_f770b62bc8f42a0b66751fe636fc6eb0/20200717-051245_IMG-8237.JPG',
      title: 'Service Oficial de Calderas',
      description: 'Ofrecemos un servicio completo para su caldera, desde la instalación y el mantenimiento hasta la reparación y el reemplazo. Nuestros técnicos calificados están familiarizados con todas las principales marcas y modelos de calderas, y pueden diagnosticar y solucionar cualquier problema que pueda tener. También ofrecemos contratos de mantenimiento para ayudar a garantizar que su caldera funcione de manera eficiente y confiable durante todo el año.',
    },
    {
      image: 'https://www.electrofret.com/wp-content/uploads/2022/09/servicios_calefaccion.png',
      title: 'Service Loza/Piso radiante',
      description: 'Mantenga el calor fluyendo de manera óptima con nuestro servicio especializado en radiadores. Realizamos desde la instalación y reemplazo de radiadores hasta purgado, detección y reparación de fugas, y limpieza para mejorar su eficiencia. Trabajamos con diversos tipos de radiadores, incluyendo los de aluminio, hierro fundido y toalleros. Confíe en nosotros para mantener sus radiadores funcionando a la perfección y asegurar un ambiente cálido en su hogar.',
    },
    {
      image: 'https://climalvinas.com.ar/wp-content/uploads/2022/08/RADIADORES-5-1536x1024.jpg',
      title: 'Service Radiadores',
      description: 'Disfrute de la comodidad del calor radiante en su hogar con nuestro servicio de instalación, mantenimiento y reparación de losa radiante. Contamos con la experiencia para diseñar e instalar sistemas de losa radiante eficientes y personalizados, adaptados a sus necesidades. Además, ofrecemos servicios de mantenimiento preventivo, detección y reparación de fugas, y ajustes de temperatura para garantizar un rendimiento óptimo de su sistema.',
    },
  ];

  return (
    <div id="service" className="p-8 xl:p-20">
      <h1 className="text-4xl font-bold">Nuestros Servicios</h1>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ service }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => setShowDescription(true);
  const handleMouseLeave = () => setShowDescription(false);

  return (
    <div
      className="bg-gray-100 rounded-xl shadow-md overflow-hidden relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <p
          className={`absolute bottom-0 left-0 right-0 p-4 bg-gray-900 text-white transition-all duration-500 ease-in-out ${
            showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default Works;