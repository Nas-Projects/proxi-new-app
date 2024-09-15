import connectDB from '../src/config/database.js';
import Property from '../src/models/Property.js'; // Adjust the path to the Property model
import mongoose from 'mongoose';
async function addMissingFields() {
  // Connect to the database
  await connectDB();

  console.log('MongoDB connected');

  // Add missing 'retail' fields to Retail properties
  await Property.updateMany(
    { type: 'Retail' },
    {
      $set: {
        retail: {
          address: '',
          crossStreets: '',
          neighborhood: '',
          pricePerMonth: 0,
          priceAnnual: 0,
          size: 0,
          psf: 0,
          basement: false,
          frontage: 0,
          ceilingHeight: 0,
          cookingAllowed: false,
          popUpAllowed: false,
          neighbors: [],
        },
      },
    }
  );

  // Add missing 'office' fields to Office properties
  await Property.updateMany(
    { type: 'Office' },
    {
      $set: {
        office: {
          address: '',
          suite: '',
          crossStreets: '',
          neighborhood: '',
          priceMonthly: 0,
          priceYearly: 0,
          size: 0,
          psf: 0,
          numberOfOffices: 0,
          numberOfConferenceRooms: 0,
          ceilingHeight: 0,
          kitchen: false,
          bathrooms: 0,
        },
      },
    }
  );

  // Add missing 'investmentSale' fields to Investment Sale properties
  await Property.updateMany(
    { type: 'Investment Sale' },
    {
      $set: {
        investmentSale: {
          assetType: '',
          portfolio: false,
          sizeAvailable: 0,
          price: 0,
          psf: 0,
          totalBuildingSize: 0,
          lotSize: 0,
          buildingDimensions: '',
          occupied: false,
          floors: 0,
          numberOfUnits: 0,
          averageFloorSize: 0,
          grossIncome: 0,
          realEstateTax: 0,
          totalExpenses: 0,
          noi: 0,
          far: 0,
          airRights: false,
          capRate: 0,
          zoning: '',
          capEx: 0,
          loadingDock: false,
        },
      },
    }
  );

  console.log('Missing fields added successfully!');
  mongoose.disconnect();
}

// Run the script
addMissingFields().catch(err => console.error('Failed to add missing fields:', err));
