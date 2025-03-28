import React from 'react';
import { FilterOptions } from '../types';

interface CarFilterProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  availableBrands: string[];
}

const CarFilter: React.FC<CarFilterProps> = ({ filters, onFilterChange, availableBrands }) => {
  const handleChange = (field: keyof FilterOptions, value: any) => {
    onFilterChange({ ...filters, [field]: value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filtros</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Marca</label>
          <select
            className="w-full border rounded-md p-2"
            value={filters.brand}
            onChange={(e) => handleChange('brand', [e.target.value])}
          >
            <option value="">Todas las marcas</option>
            {availableBrands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Precio mínimo</label>
          <input
            type="number"
            className="w-full border rounded-md p-2"
            value={filters.minPrice}
            onChange={(e) => handleChange('minPrice', Number(e.target.value))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Precio máximo</label>
          <input
            type="number"
            className="w-full border rounded-md p-2"
            value={filters.maxPrice}
            onChange={(e) => handleChange('maxPrice', Number(e.target.value))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Año desde</label>
          <select
            className="w-full border rounded-md p-2"
            value={filters.year[0]}
            onChange={(e) => handleChange('year', [Number(e.target.value), filters.year[1]])}
          >
            {Array.from({ length: 30 }, (_, i) => 2024 - i).map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CarFilter;