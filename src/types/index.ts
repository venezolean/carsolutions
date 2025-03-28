export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  images: string[];
  specs: {
    engine: string;
    transmission: string;
    fuelType: string;
    power: string;
    mileage?: number;
  };
  description: string;
  condition: 'new' | 'used';
  category?: 'savings-plan';
}

export interface Seller {
  id: string;
  name: string;
  photo: string;
  phone: string;
  email: string;
  specialization: string;
}

export interface CarouselSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

export interface FilterOptions {
  brand: string[];
  minPrice: number;
  maxPrice: number;
  condition: string;
  year: number[];
}