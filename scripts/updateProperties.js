import connectDB from '../src/config/database.js';
import Property from '../src/models/Property.js'; // Adjust the path to the Property model
import mongoose from 'mongoose'; // Import mongoose using default export
// import Payment from '../src/models/Payment.js';  // Adjust the path to your Property model

// Connect to your MongoDB database
const migrateProperties = async () => {
  try {
    // await mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    await connectDB();

    // Update all properties and add missing fields with default values
    await Property.updateMany(
      {},
      {
        $set: {
          forSale: true,  // Assume all properties were initially for sale
          forRent: false, // Default to false for rent
          acceptsCrypto: false,  // Default crypto payments to false
          groupPurchasers: [],   // Initialize as an empty array
        },
      }
    );

    console.log('Properties updated successfully!');
  } catch (error) {
    console.error('Error updating properties:', error);
  } finally {
    await mongoose.disconnect();
  }
};

// Execute the migration
migrateProperties();
