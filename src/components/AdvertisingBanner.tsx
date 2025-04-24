import React from 'react';

const AdvertisingBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">¡Financiación Especial!</h2>
            <p className="text-lg">Hasta 48 cuotas con tasa preferencial</p>
          </div>
          <a
            href="/#contacto"
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Consultar Ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingBanner;