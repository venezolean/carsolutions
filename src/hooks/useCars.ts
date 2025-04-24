import { useState, useEffect } from 'react';
import { supabase } from '../config';
import type { Car } from '../types';

export function useCars(condition?: 'new' | 'used' | 'savings-plan') {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let query = supabase.from('cars').select('*');
        
        if (condition) {
          if (condition === 'savings-plan') {
            query = query.eq('category', 'savings-plan');
          } else {
            query = query.eq('condition', condition);
          }
        }

        const { data, error } = await query;

        if (error) throw error;

        const formattedCars: Car[] = data.map(car => ({
          ...car,
          specs: {
            engine: car.engine,
            transmission: car.transmission,
            fuelType: car.fuel_type,
            power: car.power,
            mileage: car.mileage
          }
        }));

        setCars(formattedCars);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [condition]);

  return { cars, loading, error };
}