import { NavItem, VehicleModel, StockVehicle, Distributor } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Nuestros Modelos', href: '#modelos' },
  { label: 'Furgonetas en Stock', href: '#stock' },
  { label: 'Alquiler y Transportistas', href: '#alquiler' },
  { label: '¿Quiénes Somos?', href: '#about' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

export const MODELS: VehicleModel[] = [
  {
    id: 'haras',
    name: 'AML Haras',
    tagline: 'Excelencia y Prestigio',
    description: 'Modelo de gama alta para profesionales. Manejabilidad, confort, robustez, precio.',
    image: 'https://www.carrosserie-ameline.com/wp-content/uploads/2025/09/aml-haras-2025.jpg',
    features: ['Gama Alta', 'Robustez Superior', 'Diseño Pro']
  },
  {
    id: 'select',
    name: 'AML Select',
    tagline: 'Confort Absoluto',
    description: 'Modelo que ofrece el mejor confort para los caballos. Elegancia, comodidad y robustez.',
    image: 'https://www.carrosserie-ameline.com/wp-content/uploads/2023/11/Plan-de-travail-3.jpg', 
    features: ['Elegancia', 'Máximo Confort', 'Seguridad']
  },
  {
    id: 'ecostar',
    name: 'AML Ecostar',
    tagline: 'Práctico y Eficiente',
    description: 'Nuestro modelo básico. Práctico, robusto y asequible.',
    image: 'https://www.carrosserie-ameline.com/wp-content/uploads/2023/08/Plan-de-travail-1.jpg',
    features: ['Económico', 'Práctico', 'Duradero']
  }
];

export const STOCK_VEHICLES: StockVehicle[] = [
  {
    id: 'st-001',
    title: 'Furgoneta para caballos 3 plazas Renault Master con carnet B',
    price: '64.000,00 €',
    condition: 'Nuevo',
    specs: {
      engine: 'Renault master 170 CV',
      fuel: 'Diesel',
      transmission: 'Manual',
      mileage: '10 km',
      seats: 3
    },
    features: [
      'Sistema de Carplay',
      'Radio – Conexión Bluetooth',
      'Limitador de velocidad',
      'Estado: Nuevo'
    ],
    image: 'https://www.carrosserie-ameline.com/wp-content/uploads/2025/09/Photoroom_20250918_095306-500x375.jpeg' 
  },
  {
    id: 'st-002',
    title: 'Furgoneta para caballos 5 plazas Renault master con carnet B',
    price: '73.000,00 €',
    condition: 'Nuevo',
    specs: {
      engine: 'Renault master 170 CV',
      fuel: 'Diesel',
      transmission: 'Manual',
      mileage: '10 km',
      seats: 5
    },
    features: [
      'Sistema de navegación',
      'Radio – Conexión Bluetooth',
      'Limitador de velocidad',
      'Asiento de cuero sintetico'
    ],
    image: 'https://www.carrosserie-ameline.com/wp-content/uploads/2024/05/Photoroom_20250520_102156.jpeg'
  },
  {
    id: 'st-003',
    title: 'Furgoneta semi nueva para 2 caballos de 3 plazas',
    price: '44.500,00 €',
    condition: 'Segundamano',
    specs: {
      engine: 'Renault master 170 CV',
      fuel: 'Diesel',
      transmission: 'Automatico',
      mileage: '117.000 km',
      seats: 3
    },
    features: [
        'Radio – Conexión Bluetooth',
        'Limitador de velocidad',
        'Asiento de tela',
        'Estado: segundamano'
    ],
    image: 'https://www.carrosserie-ameline.com/wp-content/uploads/2024/11/IMG_3714-scaled.jpg'
  }
];

export const EXPERIENCES = [
  {
    title: 'CONFORT Y SEGURIDAD',
    description: 'La producción se basa en un conjunto profesional de materiales de primera calidad. Seguridad del chasis.'
  },
  {
    title: 'UN EQUIPO TÉCNICO',
    description: 'Realizado exclusivamente por nuestro equipo técnico, así como los diseños altamente cualificados.'
  },
  {
    title: 'RESISTENCIA Y RIGIDEZ',
    description: 'Marcos de rigidez del chasis de seguridad, calidad de soldadura y montajes son imprescindible.'
  }
];

export const DISTRIBUTORS: Distributor[] = [
  { 
    name: 'CARROSSERIE AMELINE', 
    country: 'España', 
    address: 'Calle la Bisbal nº14, Polígono industrial de Vilamalla, 7469 Vilamalla', 
    url: 'https://www.carrosserie-ameline.com/',
    mapCoordinates: { top: '80%', left: '20%' } // Spain
  },
  { 
    name: 'STARTERRE EQUESTRE', 
    country: 'Francia', 
    address: '33 Boulevard Lucien Sampaix, 69190 Saint-Fons', 
    url: 'https://www.starterre-equestre.fr/',
    mapCoordinates: { top: '65%', left: '30%' } // France
  },
  { 
    name: "Meik's Pferdetaxi", 
    country: 'Alemania', 
    address: 'Frankenstraße 64, 41569 Rommerskirchen', 
    url: 'www.meiks-pferdetaxi.de',
    phone: '+49 1523 3912640',
    mapCoordinates: { top: '50%', left: '42%' } // Germany
  },
  { 
    name: "Grenan Evasion", 
    country: 'Bélgica', 
    address: '15, rue Adrienne Bolland, 6041 Gosselies', 
    url: 'https://grenan-evasion.be/',
    phone: '0032486720011',
    email: 'info@grenan-evasion.be',
    mapCoordinates: { top: '52%', left: '35%' } // Belgium
  },
  { 
    name: "FR CAR SRL", 
    country: 'Italia', 
    address: 'Via Roma, 203, 19020 Sesta Godano (SP)', 
    url: 'https://www.gruppofr.it/',
    phone: '+39 392 0657737',
    mapCoordinates: { top: '75%', left: '48%' } // Italy
  },
  { 
    name: "ALEKSANDR POZDEEV", 
    country: 'Rusia', 
    address: 'Saint Petersburg', 
    url: '#',
    phone: '007 921 326 50 00',
    email: 'horse.trans@mail.ru',
    mapCoordinates: { top: '20%', left: '85%' } // Russia (St Petersburg)
  },
  { 
    name: "TAMPEREEN AJOPELIT OY", 
    country: 'Finlandia', 
    address: 'Teollisuustie 6, 33470 Ylöjärvi', 
    url: 'https://ajopelit.fi/',
    phone: '+358 10 5048170',
    mapCoordinates: { top: '15%', left: '60%' } // Finland
  },
  { 
    name: "Krabbe Invest Handel.dk", 
    country: 'Dinamarca', 
    address: 'Marianes Vej 4, 7752 Snedsted', 
    url: 'http://www.krabbeinvesthandel.dk/',
    phone: '+45 97 10 15 36',
    mapCoordinates: { top: '40%', left: '40%' } // Denmark
  },
  { 
    name: "George Smith Horseboxes", 
    country: 'Reino Unido', 
    address: '31B Link Road, West Wilts Trading Estate, Westbury, Wiltshire BA13 4JB', 
    url: 'https://www.georgesmithhorseboxes.com/',
    phone: '+44 (0)1980 620158',
    email: 'info@georgesmithhorseboxes.com',
    mapCoordinates: { top: '48%', left: '25%' } // UK
  },
  { 
    name: "JS HORSETRUCKS", 
    country: 'Irlanda', 
    address: 'Ashgrove Stables, Jordanstown, Oldtown, Co. Dublin, A45 NA47', 
    url: 'https://www.jshorsetrucks.ie/',
    phone: '+353 87 635 1556',
    mapCoordinates: { top: '45%', left: '18%' } // Ireland
  },
  { 
    name: "XTREME CARGO AB", 
    country: 'Suecia', 
    address: 'LERBERGSVAGEN 47, 43495 KUNGSBACKA', 
    url: 'https://www.xtremecargo.se/',
    mapCoordinates: { top: '25%', left: '45%' } // Sweden
  },
];

export const ASSETS = {
  logo: 'https://www.carrosserie-ameline.com/wp-content/uploads/2023/08/carrosserie-ameline-logo-1.png',
  heroVideo: 'https://www.carrosserie-ameline.com/wp-content/uploads/2023/08/video-ameline-carrosserie-home.mp4',
  aboutImage: 'https://www.carrosserie-ameline.com/wp-content/uploads/2023/11/notre-usine-camions-chevaux-e1762379836109.jpg'
};