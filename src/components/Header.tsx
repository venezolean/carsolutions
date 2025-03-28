import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { CarouselSlide } from '../types';

const slides: CarouselSlide[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1920&q=80',
    title: 'Descubre tu próximo vehículo',
    subtitle: 'Las mejores marcas con financiamiento flexible'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1920&q=80',
    title: 'Planes de ahorro a tu medida',
    subtitle: 'Hacemos realidad el sueño de tu 0km'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1920&q=80',
    title: 'Servicio premium garantizado',
    subtitle: 'Asesoramiento personalizado de principio a fin'
  }
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <header className="relative h-[600px]">
      {/* Carousel */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="text-white font-bold text-2xl">AutoMax</div>
            <div className="flex space-x-6">
              <a href="#nuevos" className="text-white hover:text-gray-300">Autos Nuevos</a>
              <a href="#usados" className="text-white hover:text-gray-300">Autos Usados</a>
              <a href="#planes" className="text-white hover:text-gray-300">Planes de Ahorro</a>
              <a href="#nosotros" className="text-white hover:text-gray-300">Quiénes Somos</a>
              <a href="#contacto" className="text-white hover:text-gray-300">Contacto</a>
            </div>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
              <Instagram className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
              <Twitter className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
              <Linkedin className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;