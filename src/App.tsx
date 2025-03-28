import React from 'react';
import Header from './components/Header';
import Catalog from './components/Catalog';
import SellerCard from './components/SellerCard';
import Footer from './components/Footer';
import { Car, Seller } from './types';

// Sample data - In a real application, this would come from an API
const cars: Car[] = [
  {
    id: '1',
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2024,
    price: 25000000,
    images: ['https://images.unsplash.com/photo-1624891673906-43cdee394296?auto=format&fit=crop&w=800&q=80'],
    specs: {
      engine: '2.0 TSI',
      transmission: 'Automática DSG',
      fuelType: 'Nafta',
      power: '230 CV'
    },
    description: 'Nuevo Volkswagen Golf con tecnología de última generación y máximo confort.',
    condition: 'new'
  },
  {
    id: '2',
    brand: 'Chevrolet',
    model: 'Cruze',
    year: 2024,
    price: 22000000,
    images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'],
    specs: {
      engine: '1.4 Turbo',
      transmission: 'Automática',
      fuelType: 'Nafta',
      power: '153 CV'
    },
    description: 'El sedán más vendido de Chevrolet, ahora con más tecnología y seguridad.',
    condition: 'new'
  },
  {
    id: '3',
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2022,
    price: 18000000,
    images: ['https://images.unsplash.com/photo-1624891673906-43cdee394296?auto=format&fit=crop&w=800&q=80'],
    specs: {
      engine: '2.0 TSI',
      transmission: 'Automática DSG',
      fuelType: 'Nafta',
      power: '230 CV',
      mileage: 25000
    },
    description: 'Volkswagen Golf en excelente estado, service oficial al día.',
    condition: 'used'
  },
  {
    id: '4',
    brand: 'Fiat',
    model: 'Cronos',
    year: 2024,
    price: 15000000,
    images: ['https://images.unsplash.com/photo-1619767886558-efdc259b6e09?auto=format&fit=crop&w=800&q=80'],
    specs: {
      engine: '1.3',
      transmission: 'Manual',
      fuelType: 'Nafta',
      power: '99 CV'
    },
    description: 'Plan de ahorro Fiat Cronos. Cuotas accesibles y entrega pactada.',
    condition: 'new',
    category: 'savings-plan'
  }
];

const sellers: Seller[] = [
  {
    id: '1',
    name: 'Ana García',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    phone: '+54 911 2345-6789',
    email: 'ana.garcia@automax.com',
    specialization: 'Especialista en Volkswagen'
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    phone: '+54 911 3456-7890',
    email: 'carlos.rodriguez@automax.com',
    specialization: 'Especialista en Chevrolet'
  }
];

function App() {
  const newCars = cars.filter(car => car.condition === 'new' && !car.category);
  const usedCars = cars.filter(car => car.condition === 'used');
  const savingsPlans = cars.filter(car => car.category === 'savings-plan');

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Quiénes Somos */}
      <section id="nosotros" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Quiénes Somos</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              En AutoMax, nos dedicamos a hacer realidad el sueño de tener un auto nuevo. Con más de 20 años de experiencia
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

      {/* Catálogos */}
      <section id="nuevos">
        <Catalog cars={newCars} title="Autos Nuevos" condition="new" />
      </section>

      <section id="usados">
        <Catalog cars={usedCars} title="Autos Usados" condition="used" />
      </section>

      <section id="planes">
        <Catalog cars={savingsPlans} title="Planes de Ahorro" condition="savings-plan" />
      </section>

      {/* Financiamiento */}
      <section id="financiamiento" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Proceso de Financiamiento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">1</div>
              <h3 className="text-xl font-bold mb-4">Elige tu Vehículo</h3>
              <p className="text-gray-600">
                Explora nuestro catálogo y selecciona el auto que mejor se adapte a tus necesidades.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">2</div>
              <h3 className="text-xl font-bold mb-4">Solicita tu Crédito</h3>
              <p className="text-gray-600">
                Presenta tu documentación y elige el plan de financiamiento que más te convenga.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">3</div>
              <h3 className="text-xl font-bold mb-4">¡Disfruta tu Nuevo Auto!</h3>
              <p className="text-gray-600">
                Aprobado el crédito, coordinaremos la entrega de tu vehículo en el menor tiempo posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vendedores */}
      <section id="vendedores" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sellers.map(seller => (
              <SellerCard key={seller.id} seller={seller} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;