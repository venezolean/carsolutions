import React, { useState, useEffect } from 'react';
import { supabase } from '../config';
import { useCars } from '../hooks/useCars';
import toast from 'react-hot-toast';

interface ContactFormProps {
  vehicleId?: string;
  vehicleModel?: string;
}

type ConsultationType = 
  | 'information'
  | 'new_car_interest'
  | 'used_car_interest'
  | 'sell_used'
  | 'sell_plans';

interface InformationSubType {
  id: string;
  label: string;
}

const informationSubTypes: InformationSubType[] = [
  { id: 'savings_plan', label: 'Planes de Ahorro' },
  { id: 'guaranteed_delivery', label: 'Entrega Asegurada' },
  { id: 'quick_delivery', label: 'Entrega Rápida' },
  { id: 'active_plans', label: 'Asesoría acerca de planes activos' },
  { id: 'other', label: 'Otros' }
];

const ContactForm: React.FC<ContactFormProps> = ({ vehicleId, vehicleModel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    vehicleId: vehicleId || '',
    vehicleModel: vehicleModel || '',
    consultationType: '' as ConsultationType,
    subType: '',
    selectedModel: ''
  });

  const [loading, setLoading] = useState(false);
  const { cars: newCars } = useCars('new');
  const { cars: usedCars } = useCars('used');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      // Reset subType and selectedModel when consultation type changes
      if (name === 'consultationType') {
        return {
          ...prev,
          [name]: value,
          subType: '',
          selectedModel: ''
        };
      }
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contact_requests')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
            vehicle_id: formData.vehicleId || formData.selectedModel,
            consultation_type: formData.consultationType,
            sub_type: formData.subType
          }
        ]);

      if (error) throw error;

      toast.success('¡Mensaje enviado con éxito! Te contactaremos pronto.');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        vehicleId: vehicleId || '',
        vehicleModel: vehicleModel || '',
        consultationType: '' as ConsultationType,
        subType: '',
        selectedModel: ''
      });
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg">
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contáctanos</h3>
      <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Apellido
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Motivo de Consulta
          </label>
          <select
            name="consultationType"
            value={formData.consultationType}
            onChange={handleChange}
            required
            className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
          >
            <option value="">Seleccione un motivo</option>
            <option value="information">Información</option>
            <option value="new_car_interest">Interés en un auto 0km</option>
            <option value="used_car_interest">Interés en un auto usado</option>
            <option value="sell_used">Vender mi usado con ustedes</option>
            <option value="sell_plans">Vender mis planes activos</option>
          </select>
        </div>

        {formData.consultationType === 'information' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Información
            </label>
            <select
              name="subType"
              value={formData.subType}
              onChange={handleChange}
              required
              className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            >
              <option value="">Seleccione el tipo de información</option>
              {informationSubTypes.map(type => (
                <option key={type.id} value={type.id}>{type.label}</option>
              ))}
            </select>
          </div>
        )}

        {formData.consultationType === 'new_car_interest' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Modelo de Interés
            </label>
            <select
              name="selectedModel"
              value={formData.selectedModel}
              onChange={handleChange}
              required
              className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            >
              <option value="">Seleccione un modelo</option>
              {newCars.map(car => (
                <option key={car.id} value={car.id}>
                  {car.brand} {car.model} - {car.year}
                </option>
              ))}
            </select>
          </div>
        )}

        {formData.consultationType === 'used_car_interest' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Modelo de Interés
            </label>
            <select
              name="selectedModel"
              value={formData.selectedModel}
              onChange={handleChange}
              required
              className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            >
              <option value="">Seleccione un modelo</option>
              {usedCars.map(car => (
                <option key={car.id} value={car.id}>
                  {car.brand} {car.model} - {car.year}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50
                   text-sm md:text-base font-semibold transition-colors duration-200"
        >
          {loading ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;