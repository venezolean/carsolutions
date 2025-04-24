import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useConfig } from '../contexts/ConfigContext';

const Footer = () => {
  const { config } = useConfig();
  const { site } = config;

  if (!site) return null;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{site.name}</h3>
            <p className="text-gray-400">
              {site.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/nuevos" className="text-gray-400 hover:text-white">Autos Nuevos</a></li>
              <li><a href="/usados" className="text-gray-400 hover:text-white">Autos Usados</a></li>
              <li><a href="/planes" className="text-gray-400 hover:text-white">Planes de Ahorro</a></li>
              <li><a href="/#nosotros" className="text-gray-400 hover:text-white">Quiénes Somos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{site.address}</li>
              <li>{site.city}, {site.country}</li>
              <li>Tel: {site.phone}</li>
              <li>Email: {site.email}</li>
            </ul>
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Horarios de Atención</h5>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>{site.business_hours.weekdays}</li>
                <li>{site.business_hours.saturday}</li>
                <li>{site.business_hours.sunday}</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </a>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </a>
              <a href={site.social.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-4">
              © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
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