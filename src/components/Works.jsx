import React from "react";
import { FaCalendarAlt, FaClock, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Works = () => {
  return (
    <div id="aboutUs" className="p-8 xl:p-20">
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 grid-auto-flow-dense">
        <div className="flex flex-col gap-2 xl:order-2">
          {/* Cambia el orden en pantallas grandes */}
          <img
            src="https://main--calderas-clima.netlify.app/img/NosotrosImg.png"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          <p className="text-gray-500">Ambiente confortable - June 20, 2022</p>
          <h3 className="text-2xl font-bold">
            Confort y Calidad en Climatización: Nova Calefacción
          </h3>
          <p className="text-gray-500">
            En Nova Calefacción, entendemos la importancia de un ambiente
            confortable. Nuestro equipo de técnicos altamente capacitados te
            ayudará a elegir el sistema de climatización ideal para tus
            necesidades, considerando eficiencia energética y presupuesto.
            Ofrecemos una amplia variedad de marcas y equipos para que encuentres
            la solución perfecta para tu hogar, negocio u oficina. Además,
            contamos con un servicio único de atención las 24 horas para atender
            cualquier urgencia que pueda surgir. Confía en Nova Calefacción para
            crear un ambiente agradable y a la temperatura ideal durante todo el
            año.
          </p>
        </div>
        <div className="mb-8 xl:order-1">
          {/* Cambia el orden en pantallas grandes */}
          <br />
          <br />

          <div className="relative">
            <div className="absolute inset-0 bg-gray-500 opacity-25 blur-sm rounded-lg"></div>
            <div className="rounded-lg p-4 bg-violet-300 bg-opacity-50 text-center relative shadow-lg">
              {/* Sección de horarios e información de contacto */}
              <br />
              <h1 className="text-[40px] font-black">Informacion de contacto</h1>
                <p className="text-xl text-gray-500 mb-4">
                  Y nuestros horarios de atención
                </p>
              <div className="flex flex-col gap-4 text-xl mt-20 mb-20">
                <div className="flex items-center gap-2 justify-center font-bold">
                  <FaCalendarAlt />
                  <span>Lunes a Sábados: 08:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center gap-2 justify-center font-bold">
                  <FaClock />
                  <span>Domingos: Cerrado</span>
                </div>
                <br />
                <div className="flex flex-col gap-4 text-xl mt-15 itemcen ">
                  {/* ... other contact options ... */}
                  <div className="flex items-center gap-2 justify-center px-4 py-2 rounded-md bg-zinc-900 hover:bg-gray-600 fitpa">
                    <FaEnvelope className="text-white" />
                    <a href="mailto:info@novac.com" className="text-white">
                      info@novac.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 justify-center px-4 py-2 rounded-md bg-zinc-900 hover:bg-gray-600 fitpa">
                    <FaWhatsapp className="text-white" />
                    <a href="https://wa.me/+541112345678" className="text-white">
                      +54 11 1234-5678
                    </a>
                  </div>
                  <div className="flex items-center gap-2 justify-center px-4 py-2 rounded-md bg-zinc-900 hover:bg-gray-600 fitpa">
                    <FaPhoneAlt className="text-white" />
                    <a href="tel:+541143210987" className="text-white">
                      +54 11 4321-0987
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps Container */}
              <div className="w-full h-64 overflow-hidden rounded-3xl"> 
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.27471116153!2d-58.51587084729423!3d-34.61579593308819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1715208748137!5m2!1ses-419!2sar"
                  className="w-full h-full" 
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;