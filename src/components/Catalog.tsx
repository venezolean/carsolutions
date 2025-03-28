import React, { useState } from 'react';
import { Car, FilterOptions } from '../types';
import CarCard from './CarCard';
import CarFilter from './CarFilter';

interface CatalogProps {
  cars: Car[];
  title: string;
  condition: 'new' | 'used' | 'savings-plan';
}

const Catalog: React.FC<CatalogProps> = ({ cars, title, condition }) => {
  const [filters, setFilters] = useState<FilterOptions>({
    brand: [],
    minPrice: 0,
    maxPrice: 1000000000,
    condition: condition,
    year: [1990, 2024]
  });

  const availableBrands = Array.from(new Set(cars.map(car => car.brand))).sort();

  const filteredCars = cars.filter(car => {
    return (
      (filters.brand.length === 0 || filters.brand.includes(car.brand)) &&
      car.price >= filters.minPrice &&
      car.price <= filters.maxPrice &&
      car.year >= filters.year[0]
    );
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <CarFilter
              filters={filters}
              onFilterChange={setFilters}
              availableBrands={availableBrands}
            />
          </div>
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No se encontraron vehículos con los filtros seleccionados.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;