import React from 'react';
import '../index.css'
import { RiFacebookBoxFill, RiTwitterFill, RiWhatsappLine, RiInstagramLine, RiPhoneFill } from "react-icons/ri";



function Topbar() {
  return (
    <div className="batin py-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="col">
            <p className="mb-0 phone">
              <span className="fa fa-phone mr-2"></span>
              <a href="tel:01177094182 ">
                 011 7709-4182 </a>
            </p>
          </div>
          <div className="col flex justify-end">
            <div className="social-media">
              <p className="mb-0 flex">
                <a href="https://facebook.com/servicebaxinova" className="d-flex align-items-center justify-content-center mr-4">
                  <RiFacebookBoxFill />
                </a>
                <a href="https://twitter.com/servicebaxinova" className="d-flex align-items-center justify-content-center mr-4">
                  <RiTwitterFill />
                </a>
                <a href="https://instagram.com/servicebaxinova" className="d-flex align-items-center justify-content-center mr-4">
                  <RiInstagramLine />
                </a>
                <a href="https://web.whatsapp.com/servicebaxinova" className="d-flex align-items-center justify-content-center">
                  <RiWhatsappLine />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;