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

export interface Config {
  site: {
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    country: string;
    whatsapp: string;
    description: string;
    years_experience: number;
    business_hours: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    social: {
      facebook: string;
      instagram: string;
      twitter: string;
      linkedin: string;
    };
  };
}