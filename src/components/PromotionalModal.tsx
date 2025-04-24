import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

const PromotionalModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleContactClick = () => {
    setIsOpen(false);
    setShowContactForm(true);
  };

  if (!isOpen && !showContactForm) return null;

  return (
    <>
      {/* Promotional Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 md:p-6">
          <div className="relative bg-white rounded-lg w-full max-w-[95%] md:max-w-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 md:right-4 md:top-4 text-white hover:text-gray-200 z-10 bg-black/30 rounded-full p-1 md:p-2"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Image Section */}
            <div className="relative h-40 sm:h-48 md:h-56">
              <img
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80"
                alt="Promoción del día"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="p-4 md:p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 animate-pulse text-red-600">
                ¡OFERTA DEL DÍA!
              </h2>
              <p className="text-lg md:text-xl font-semibold mb-3 md:mb-4 animate-bounce">
                30% OFF EN TODOS LOS MODELOS
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 animate-pulse">
                ¡Solo por hoy! No dejes pasar esta oportunidad única
              </p>

              <button
                onClick={handleContactClick}
                className="w-full md:w-auto bg-red-600 text-white px-6 md:px-8 py-2.5 md:py-3 
                         rounded-full font-bold text-base md:text-lg 
                         transform hover:scale-105 transition-transform duration-200
                         animate-[bounce_1s_ease-in-out_infinite]
                         hover:bg-red-700 shadow-lg"
              >
                ¡APROVECHA AHORA!
              </button>

              <div className="mt-3 md:mt-4 text-xs md:text-sm text-gray-500">
                *Promoción válida hasta agotar stock
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-3 md:p-6">
          <div className="relative bg-white rounded-lg w-full max-w-[95%] md:max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute right-2 top-2 md:right-4 md:top-4 text-gray-500 hover:text-gray-700 z-10 bg-white/80 rounded-full p-1 md:p-2"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            {/* Form Container with Padding Adjustment */}
            <div className="p-4 md:p-6 pt-12 md:pt-14">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PromotionalModal;