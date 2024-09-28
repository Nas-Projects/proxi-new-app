

export type Property = {
  _createdAt: string;
  _id,
  name: string;
  email: string;
  type: string;
  category: string;
  description: string | null;
  location: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  amenities: string[]; // Array of amenities
  images: {
    asset: {
      url: string;
    };
  }[]; // Array of image objects
  mainImage: string; // URL of the main image
  contact: {
    name: string;
    email: string;
    phone: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
  retail?: {
    address: string;
    crossStreets: string;
    neighborhood: string;
    pricePerMonth: number;
    priceAnnual: number;
    size: number;
    psf: number;
    basement: boolean;
    frontage: number;
    ceilingHeight: number;
    cookingAllowed: boolean;
    popUpAllowed: boolean;
    neighbors: string[];
  };
  office?: {
    address: string;
    suite: string;
    crossStreets: string;
    neighborhood: string;
    priceMonthly: number;
    priceYearly: number;
    size: number;
    psf: number;
    numberOfOffices: number;
    numberOfConferenceRooms: number;
    ceilingHeight: number;
    kitchen: boolean;
    bathrooms: number;
  };
  investmentSale?: {
    assetType: string;
    portfolio: boolean;
    sizeAvailable: number;
    price: number;
    psf: number;
    totalBuildingSize: number;
    lotSize: number;
    buildingDimensions: string;
    occupied: boolean;
    floors: number;
    numberOfUnits: number;
    averageFloorSize: number;
    grossIncome: number;
    realEstateTax: number;
    totalExpenses: number;
    noi: number;
    far: number;
    airRights: boolean;
    capRate: number;
    zoning: string;
    capEx: number;
    loadingDock: boolean;
  };
  forSale: boolean;
  forRent: boolean;
  acceptsCrypto: boolean;
  isFeatured: boolean;
  views: number;
  daysOnMarket: number;
};

