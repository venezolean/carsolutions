import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '../contexts/ConfigContext';
import { useSellers } from '../hooks/useSellers';
import SellerCard from '../components/SellerCard';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const { config } = useConfig();
  const { sellers, loading: sellersLoading } = useSellers();

  return (
    <div>
      {/* Quiénes Somos */}
      <section id="nosotros" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Quiénes Somos</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              En {config.site?.name}, nos dedicamos a hacer realidad el sueño de tener un auto nuevo. Con más de {config.site?.years_experience} años de experiencia
              en el mercado automotriz, somos líderes en la venta de vehículos 0km y usados certificados.
            </p>
            <p className="text-lg mb-6">
              Nuestra misión es brindar la mejor experiencia de compra, con asesoramiento personalizado y las mejores
              opciones de financiamiento del mercado.
            </p>
            <p className="text-lg">
              Trabajamos con las marcas más reconocidas del mercado y contamos con un equipo de profesionales
              especializados para garantizar tu satisfacción.
            </p>
          </div>
        </div>
      </section>

      {/* Catálogos Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Catálogos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/nuevos" className="transform hover:scale-105 transition-transform">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80"
                  alt="Autos Nuevos"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Autos Nuevos</h3>
                  <p className="text-gray-600">Descubre nuestra amplia gama de vehículos 0km de las mejores marcas.</p>
                </div>
              </div>
            </Link>
            
            <Link to="/usados" className="transform hover:scale-105 transition-transform">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
                  alt="Autos Usados"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Autos Usados</h3>
                  <p className="text-gray-600">Vehículos seleccionados y certificados con garantía.</p>
                </div>
              </div>
            </Link>
            
            <Link to="/planes" className="transform hover:scale-105 transition-transform">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1619767886558-efdc259b6e09?auto=format&fit=crop&w=800&q=80"
                  alt="Planes de Ahorro"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Planes de Ahorro</h3>
                  <p className="text-gray-600">La mejor forma de acceder a tu 0km con cuotas accesibles.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Vendedores */}
      <section id="vendedores" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sellersLoading ? (
              <div className="col-span-full flex justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              sellers.map(seller => (
                <SellerCard key={seller.id} seller={seller} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;