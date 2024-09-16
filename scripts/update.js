import connectDB from '../src/config/database.js';
import Property from '../src/models/Property.js'; // Adjust the path to the Property model
import mongoose from 'mongoose'; // Impo

async function findInvalidOwners() {
  try {
   await connectDB()
    // Find properties with owner set to "1"
    const invalidProperties = await Property.find({ owner: '1' });
    console.log('Properties with invalid owner values:', invalidProperties);
  } catch (error) {
    console.error('Error finding invalid owners:', error);
  } finally {
    await mongoose.disconnect();
  }
}

findInvalidOwners();
