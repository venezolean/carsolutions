import React, { useState, useEffect } from 'react';
import { PhoneCall, Calculator, Calendar } from 'lucide-react';

const SideAdvertising = () => {
  // Configuración de la oferta
  const offerEndDate = new Date();
  offerEndDate.setHours(23, 59, 59, 999); // La oferta termina hoy a las 23:59:59

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = offerEndDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  const handleWhatsAppClick = (message: string) => {
    window.open(`https://wa.me/+5491112345678?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="hidden lg:block w-64">
      <div className="sticky top-24 bg-white shadow-lg rounded-lg p-6 space-y-8">
        <div className="text-center">
          <h3 className="text-xl font-bold text-red-600 mb-4">¡Ofertas Especiales!</h3>
          <div className="bg-red-100 text-red-800 p-3 rounded-lg mb-2">
            <p className="font-bold">¡ÚLTIMO DÍA!</p>
            <p>Hasta 30% OFF</p>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center">
              <div className="bg-red-200 rounded p-1">
                <span className="text-lg font-bold">{formatNumber(timeLeft.hours)}</span>
                <p className="text-xs">Horas</p>
              </div>
              <div className="bg-red-200 rounded p-1">
                <span className="text-lg font-bold">{formatNumber(timeLeft.minutes)}</span>
                <p className="text-xs">Min</p>
              </div>
              <div className="bg-red-200 rounded p-1">
                <span className="text-lg font-bold">{formatNumber(timeLeft.seconds)}</span>
                <p className="text-xs">Seg</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleWhatsAppClick("Hola, necesito ayuda con la compra de un vehículo")}
            className="w-full flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <PhoneCall className="w-6 h-6 text-blue-600" />
            <div className="text-left">
              <p className="font-semibold">¿Necesitas ayuda?</p>
              <p className="text-sm text-blue-600">Chateá con nosotros</p>
            </div>
          </button>

          <button
            onClick={() => handleWhatsAppClick("Hola, quisiera calcular las cuotas para un vehículo")}
            className="w-full flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Calculator className="w-6 h-6 text-green-600" />
            <div className="text-left">
              <p className="font-semibold">Calculá tu cuota</p>
              <p className="text-sm text-green-600">Financiación a medida</p>
            </div>
          </button>

          <button
            onClick={() => handleWhatsAppClick("Hola, quisiera agendar una visita para test drive")}
            className="w-full flex items-center space-x-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <Calendar className="w-6 h-6 text-purple-600" />
            <div className="text-left">
              <p className="font-semibold">Agenda una visita</p>
              <p className="text-sm text-purple-600">Test drive gratis</p>
            </div>
          </button>
        </div>

        <div className="border-t pt-6">
          <p className="text-center font-semibold mb-2">Horario de Atención</p>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Lun a Vie: 9:00 - 18:00</p>
            <p>Sábados: 9:00 - 13:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideAdvertising;