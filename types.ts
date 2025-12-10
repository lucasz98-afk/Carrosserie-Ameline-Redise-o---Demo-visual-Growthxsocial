export interface VehicleModel {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export interface StockVehicle {
  id: string;
  title: string;
  price: string;
  condition: 'Nuevo' | 'Segundamano';
  specs: {
    engine: string;
    fuel: string;
    transmission: string;
    mileage: string;
    seats: number;
  };
  features: string[];
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Distributor {
  name: string;
  country: string;
  address: string;
  url: string;
  phone?: string;
  email?: string;
  mapCoordinates: { top: string; left: string }; // Percentages for map placement
}