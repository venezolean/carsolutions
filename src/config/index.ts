import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

// Create Supabase client
export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Default configuration (fallback values)
export const defaultConfig = {
  site: {
    name: 'AutoMax',
    phone: '+54 11 2345-6789',
    email: 'info@automax.com',
    address: 'Av. Principal 1234',
    city: 'Buenos Aires',
    country: 'Argentina',
    whatsapp: '+5491112345678',
    description: 'Tu concesionaria de confianza para vehículos nuevos, usados y planes de ahorro.',
    years_experience: 20,
    business_hours: {
      weekdays: 'Lunes a Viernes: 9:00 - 18:00',
      saturday: 'Sábados: 9:00 - 13:00',
      sunday: 'Domingos: Cerrado'
    },
    social: {
      facebook: 'https://facebook.com/automax',
      instagram: 'https://instagram.com/automax',
      twitter: 'https://twitter.com/automax',
      linkedin: 'https://linkedin.com/company/automax'
    }
  }
};

// Function to get configuration from Supabase
export async function getConfig() {
  try {
    const { data, error } = await supabase
      .from('config')
      .select('*')
      .eq('key', 'site')
      .single();

    if (error) {
      console.error('Error fetching config:', error);
      return defaultConfig;
    }

    return data?.value ? { site: data.value } : defaultConfig;
  } catch (error) {
    console.error('Error:', error);
    return defaultConfig;
  }
}