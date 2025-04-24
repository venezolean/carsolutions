import React, { useState, useMemo } from 'react';
import { Car } from '../types';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import ContactForm from './ContactForm';

interface CatalogWithFiltersProps {
  cars: Car[];
  title: string;
  condition: 'new' | 'used' | 'savings-plan';
}

const CatalogWithFilters: React.FC<CatalogWithFiltersProps> = ({ cars, title, condition }) => {
  const [filters, setFilters] = useState({
    search: '',
    brand: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: '',
    showFilters: false
  });

  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const brands = useMemo(() => {
    return Array.from(new Set(cars.map(car => car.brand))).sort();
  }, [cars]);

  const years = useMemo(() => {
    return Array.from(new Set(cars.map(car => car.year))).sort((a, b) => b - a);
  }, [cars]);

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchesSearch = car.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
                          car.model.toLowerCase().includes(filters.search.toLowerCase()) ||
                          car.description.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesBrand = !filters.brand || car.brand === filters.brand;
      
      const matchesMinPrice = !filters.minPrice || car.price >= parseInt(filters.minPrice);
      const matchesMaxPrice = !filters.maxPrice || car.price <= parseInt(filters.maxPrice);
      
      const matchesMinYear = !filters.minYear || car.year >= parseInt(filters.minYear);
      const matchesMaxYear = !filters.maxYear || car.year <= parseInt(filters.maxYear);

      return matchesSearch && matchesBrand && matchesMinPrice && matchesMaxPrice && 
             matchesMinYear && matchesMaxYear;
    });
  }, [cars, filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      brand: '',
      minPrice: '',
      maxPrice: '',
      minYear: '',
      maxYear: '',
      showFilters: false
    });
  };

  const handleImageClick = (car: Car) => {
    setSelectedCar(car);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedCar) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedCar.images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedCar) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedCar.images.length) % selectedCar.images.length);
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          
          <div className="w-full md:w-auto mt-4 md:mt-0 flex gap-4">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Buscar..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            
            <button
              onClick={() => handleFilterChange('showFilters', (!filters.showFilters).toString())}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden md:inline">Filtros</span>
            </button>
          </div>
        </div>

        {filters.showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Marca</label>
                <select
                  value={filters.brand}
                  onChange={(e) => handleFilterChange('brand', e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Todas las marcas</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Precio</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Mínimo"
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="Máximo"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Año</label>
                <div className="flex gap-2">
                  <select
                    value={filters.minYear}
                    onChange={(e) => handleFilterChange('minYear', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Desde</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <select
                    value={filters.maxYear}
                    onChange={(e) => handleFilterChange('maxYear', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Hasta</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Limpiar filtros
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 cursor-pointer" onClick={() => handleImageClick(car)}>
                <img
                  src={car.images[0]}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <span className="font-semibold">${car.price.toLocaleString()}</span>
                </div>
              </div>
              <h3 className="text-s font-bold mb-2 text-center truncate w-full">{car.brand} {car.model}</h3>
              <div className="p-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => window.open(`https://wa.me/+5491112345678?text=Hola, me interesa el ${car.brand} ${car.model}`, '_blank')}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCar(car);
                      setShowContactForm(true);
                    }}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Consultar
                  </button>
                </div>              
                <button
                  onClick={() => setSelectedCar(car)}
                  className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 mt-2"
                >
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No se encontraron vehículos con los filtros seleccionados.</p>
          </div>
        )}

        {/* Image Gallery Modal */}
        {selectedCar && !showContactForm && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white rounded-lg max-w-lg w-full p-4 shadow-lg">
              <button
                onClick={() => setSelectedCar(null)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-[40vh]">
                <img
                  src={selectedCar.images[currentImageIndex]}
                  alt={`${selectedCar.brand} ${selectedCar.model}`}
                  className="w-full h-full object-contain"
                />
                {selectedCar.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                    >
                      <span className="sr-only">Anterior</span>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                    >
                      <span className="sr-only">Siguiente</span>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2 truncate">{selectedCar.brand} {selectedCar.model}</h3>
                <p className="text-gray-600 mb-3 text-sm">{selectedCar.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div><span className="font-semibold">Motor:</span> {selectedCar.specs.engine}</div>
                  <div><span className="font-semibold">Transmisión:</span> {selectedCar.specs.transmission}</div>
                  <div><span className="font-semibold">Combustible:</span> {selectedCar.specs.fuelType}</div>
                  <div><span className="font-semibold">Potencia:</span> {selectedCar.specs.power}</div>
                  {selectedCar.specs.mileage && (
                    <div className="col-span-2">
                      <span className="font-semibold">Kilometraje:</span> {selectedCar.specs.mileage.toLocaleString()} km
                    </div>
                  )}
                </div>

                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setSelectedCar(null)}
                    className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Form Modal */}
        {showContactForm && selectedCar && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white rounded-lg max-w-2xl w-full">
              <button
                onClick={() => {
                  setShowContactForm(false);
                  setSelectedCar(null);
                }}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="p-6">
                <ContactForm vehicleModel={`${selectedCar.brand} ${selectedCar.model}`} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogWithFilters;