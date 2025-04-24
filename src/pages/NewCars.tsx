import React from 'react';
import CatalogWithFilters from '../components/CatalogWithFilters';
import { useCars } from '../hooks/useCars';
import AdvertisingBanner from '../components/AdvertisingBanner';
import SideAdvertising from '../components/SideAdvertising';

const NewCars = () => {
  const { cars, loading, error } = useCars('new');

  if (loading) {
    return (
      <div className="pt-20 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20 text-center text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <div>
      <div className="pt-20">
        <AdvertisingBanner />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <SideAdvertising />
          <div className="flex-1">
            <CatalogWithFilters cars={cars} title="Autos Nuevos" condition="new" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCars;