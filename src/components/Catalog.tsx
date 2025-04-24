import React from 'react';
import { Car } from '../types';
import CarCard from './CarCard';

interface CatalogProps {
  cars: Car[];
  title: string;
  condition: 'new' | 'used' | 'savings-plan';
}

const Catalog: React.FC<CatalogProps> = ({ cars, title }) => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        {cars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No se encontraron vehículos disponibles.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog