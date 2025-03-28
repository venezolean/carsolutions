import React from 'react';
import { Car } from '../types';
import { Phone } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const handleContact = () => {
    window.open(`https://wa.me/+5491112345678?text=Hola, me interesa el ${car.brand} ${car.model}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <img
          src={car.images[0]}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
          <span className="font-semibold">${car.price.toLocaleString()}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{car.brand} {car.model}</h3>
        <p className="text-gray-600 mb-4">{car.description}</p>
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div>
            <span className="font-semibold">Motor:</span> {car.specs.engine}
          </div>
          <div>
            <span className="font-semibold">Transmisión:</span> {car.specs.transmission}
          </div>
          <div>
            <span className="font-semibold">Combustible:</span> {car.specs.fuelType}
          </div>
          <div>
            <span className="font-semibold">Potencia:</span> {car.specs.power}
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleContact}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-700"
          >
            <Phone className="w-5 h-5" />
            <span>Contactar</span>
          </button>
          <button
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Más información
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;