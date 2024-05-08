import React, { useState, useEffect } from 'react';
import Clients from "./components/Clients";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Servicios from "./components/Servicios";
import { RiArrowUpLine } from "react-icons/ri";
import TopBar from './components/Topbar';

function App() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <TopBar />
      <Header />
      <Hero />
      <Clients />
      <Works />
       <Servicios />
      <Reviews />
      <Services />
      <Footer />
      {showButton && (
        <button onClick={scrollToTop} className="fixed bottom-5 right-5 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <RiArrowUpLine size={20} /> 
        </button>
      )}
    </div>
  );
}

export default App;