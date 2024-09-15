import connectDB from '../src/config/database.js';
import Property from '../src/models/Property.js'; // Adjust the path to the Property model
import mongoose from 'mongoose';
async function migrateProperties() {
  // Connect to the database
  await connectDB();
  
  console.log('MongoDB connected');

  // Add missing 'office' fields to Office properties
  await Property.updateMany(
    { type: 'office' },  // Check for properties with 'type' office
    {
      $set: {
        'office.address': '',
        'office.suite': '',
        'office.crossStreets': '',
        'office.neighborhood': '',
        'office.priceMonthly': 0,
        'office.priceYearly': 0,
        'office.size': 0,
        'office.psf': 0,
        'office.numberOfOffices': 0,
        'office.numberOfConferenceRooms': 0,
        'office.ceilingHeight': 0,
        'office.kitchen': false,
        'office.bathrooms': 0,
      },
    }
  );

  console.log('Migration for office properties completed!');
  mongoose.disconnect();
}

// Run the migration
migrateProperties().catch(err => console.error('Migration failed:', err));
