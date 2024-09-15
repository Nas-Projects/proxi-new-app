import connectDB from '../src/config/database.js';
import Property from '../src/models/Property.js'; // Adjust the path to the Property model
import mongoose from 'mongoose'; // Impo
async function migrateProperties() {
  // Connect to the database
  await connectDB();
 
    console.log('MongoDB connected');

      // Migrate properties of type 'Retail'
      await Property.find({ type: 'Retail' }).then(async (retailProperties) => {
        for (const property of retailProperties) {
          const updatedFields = {};
    
          if (!property.retail) {
            updatedFields.retail = {
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
            };
          } else {
            if (!property.retail.neighbors) {
              updatedFields['retail.neighbors'] = [];
            }
          }
    
          await Property.updateOne(
            { _id: property._id },
            { $set: updatedFields }
          );
        }
      });
    
      // Migrate properties of type 'Office'
      await Property.find({ type: 'Office' }).then(async (officeProperties) => {
        for (const property of officeProperties) {
          const updatedFields = {};
    
          if (!property.office) {
            updatedFields.office = {
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
            };
          }
    
          await Property.updateOne(
            { _id: property._id },
            { $set: updatedFields }
          );
        }
      });
    
      // Migrate properties of type 'Investment Sale'
      await Property.find({ type: 'Investment Sale' }).then(async (investmentProperties) => {
        for (const property of investmentProperties) {
          const updatedFields = {};
    
          if (!property.investmentSale) {
            updatedFields.investmentSale = {
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
            };
          }
    
          await Property.updateOne(
            { _id: property._id },
            { $set: updatedFields }
          );
        }
      });
    
      console.log('Migration completed!');
      mongoose.disconnect();
    }
    
    // Run the migration
    migrateProperties().catch(err => console.error('Migration failed:', err));
    