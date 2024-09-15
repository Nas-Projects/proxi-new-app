
import connectDB from '../src/config/database.js';
import User from '../src/models/User.js'; // Adjust the path to the Property model
import mongoose from 'mongoose'; // Import mongoose using default export
// import Payment from '../src/m
// Connect to your MongoDB database
const migrateUsers = async () => {
  try {
    await connectDB();

    // Update all users and add missing fields with default values
    await User.updateMany(
      {},
      {
        $set: {
          groupOwnedProperties: [],  // Initialize as an empty array
          walletAddress: null,       // Default to null for walletAddress
        },
      }
    );

    console.log('Users updated successfully!');
  } catch (error) {
    console.error('Error updating users:', error);
  } finally {
    await mongoose.disconnect();
  }
};

// Execute the migration
migrateUsers();
