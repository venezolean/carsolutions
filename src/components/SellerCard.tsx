import React from 'react';
import { Seller } from '../types';
import { Phone, Mail } from 'lucide-react';

interface SellerCardProps {
  seller: Seller;
}

const SellerCard: React.FC<SellerCardProps> = ({ seller }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <img
        src={seller.photo}
        alt={seller.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-bold mb-2">{seller.name}</h3>
      <p className="text-gray-600 mb-4">{seller.specialization}</p>
      <div className="flex flex-col space-y-2">
        <a
          href={`tel:${seller.phone}`}
          className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-600"
        >
          <Phone className="w-5 h-5" />
          <span>{seller.phone}</span>
        </a>
        <a
          href={`mailto:${seller.email}`}
          className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-600"
        >
          <Mail className="w-5 h-5" />
          <span>{seller.email}</span>
        </a>
      </div>
    </div>
  );
};

export default SellerCard