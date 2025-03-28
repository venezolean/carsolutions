import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AutoMax</h3>
            <p className="text-gray-400">
              Tu concesionaria de confianza para vehículos nuevos, usados y planes de ahorro.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#nuevos" className="text-gray-400 hover:text-white">Autos Nuevos</a></li>
              <li><a href="#usados" className="text-gray-400 hover:text-white">Autos Usados</a></li>
              <li><a href="#planes" className="text-gray-400 hover:text-white">Planes de Ahorro</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-white">Quiénes Somos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Av. Principal 1234</li>
              <li>Buenos Aires, Argentina</li>
              <li>Tel: +54 11 2345-6789</li>
              <li>Email: info@automax.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-4">
              © 2024 AutoMax. Todos los derechos reservados.
            </p>
            <div className="space-x-4">
              <a href="/terminos" className="hover:text-white">Términos y Condiciones</a>
              <span>|</span>
              <a href="/privacidad" className="hover:text-white">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;