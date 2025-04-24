import { useState, useEffect } from 'react';
import { supabase } from '../config';
import type { CarouselSlide } from '../types';

export function useCarouselSlides() {
  const [slides, setSlides] = useState<CarouselSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const { data, error } = await supabase
          .from('carousel_slides')
          .select('*')
          .order('order');

        if (error) throw error;

        setSlides(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  return { slides, loading, error };
}