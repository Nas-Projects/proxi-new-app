import mongoose from 'mongoose'; // Import the entire mongoose package

const { Schema, model, models } = mongoose; // Destructure the necessary exports from mongoose

const PropertySchema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      default: "Proxy Admin",
    },
    email: { 
      type: String,
      default: "proxy@nextlevel.com",
    },
    id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    type: {
      type: String,
      enum: ['Retail', 'Office', 'Investment Sale'],
      required: true,
      default: 'Property type not provided',
    },
    description: {
      type: String,
      default: 'No description provided',
    },
    // General Location Info
    location: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipcode: { type: String },
    },
    // Attributes for Retail Lease
    category: {
      type: String,
      enum: ['Residential', 'Commercial'],
      required: true,
    },
    
    retail: {
      address: { type: String },
      crossStreets: { type: String },
      neighborhood: { type: String },
      pricePerMonth: { type: Number },
      priceAnnual: { type: Number },
      size: { type: Number },
      psf: { type: Number, default: function() { return this.priceAnnual / this.size; } },
      basement: { type: Boolean, default: false },
      frontage: { type: Number },
      ceilingHeight: { type: Number },
      cookingAllowed: { type: Boolean, default: false },
      popUpAllowed: { type: Boolean, default: false },
      neighbors: { type: [String] },
    },
    // Attributes for Office Lease
    office: {
      address: { type: String },
      suite: { type: String },
      crossStreets: { type: String },
      neighborhood: { type: String },
      priceMonthly: { type: Number },
      priceYearly: { type: Number, default: function() { return this.priceMonthly * 12; } },
      size: { type: Number },
      psf: { type: Number, default: function() { return this.priceYearly / this.size; } },
      numberOfOffices: { type: Number },
      numberOfConferenceRooms: { type: Number },
      ceilingHeight: { type: Number },
      kitchen: { type: Boolean, default: false },
      bathrooms: { type: Number },
    },
    // Attributes for Investment Sale
    investmentSale: {
      assetType: { type: String, enum: ['Entire Building', 'Condo', 'Coop Land', 'Hotel', 'Industrial'] },
      portfolio: { type: Boolean, default: false },
      sizeAvailable: { type: Number },
      price: { type: Number },
      psf: { type: Number, default: function() { return this.price / this.sizeAvailable; } },
      totalBuildingSize: { type: Number },
      lotSize: { type: Number },
      buildingDimensions: { type: String },
      occupied: { type: Boolean, default: false },
      floors: { type: Number },
      numberOfUnits: { type: Number },
      averageFloorSize: { type: Number },
      grossIncome: { type: Number },
      realEstateTax: { type: Number },
      totalExpenses: { type: Number },
      noi: { type: Number }, // Net Operating Income
      far: { type: Number }, // Floor Area Ratio
      airRights: { type: Boolean, default: false },
      capRate: { type: Number, default: function() { return this.noi / this.price; } }, // Capitalization Rate
      zoning: { type: String },
      capEx: { type: Number }, // Capital Expenditures
      loadingDock: { type: Boolean, default: false },
    },
    // Shared or general property attributes
    images: {
      type: [String],
      default: [],
    },
    is_featured: {
      type: Boolean,
      default: false,
    },
    forSale: {
      type: Boolean,
      default: true,
    },
    forRent: {
      type: Boolean,
      default: false,
    },
    acceptsCrypto: {
      type: Boolean,
      default: false,
    },
    groupPurchasers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null,
      }
    ],
    NumberOfbookmarks: {
      type: Number,
      default: 0,
    },
    inClosing: {
      type: Boolean,
      default: false,
    },
    interestedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null,
      },
    ],
    offers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Offer',
        default: null,
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        default: [],
      },
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null,
      },
    ],
    onMarket: {
      type: Boolean,
      default: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    daysOnMarket: {
      type: Number,
      default: 0,
    },
    showPropertyDayOnMarket: {
      type: Boolean,
      default: true,
    },
    hassignedTo: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null,
      },
    ],
    payments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Payment',
        default: null,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Property = mongoose.models?.Property || mongoose.model('Property', PropertySchema);

export default Property;

