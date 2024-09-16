import connectDB from '../src/config/database.js';
import Property from '../src/models/Property.js'; // Adjust the path to the Property model
import mongoose from 'mongoose'; // Impo

const NEW_OWNER_ID = '66e7822566ee8c6803d41ed0'; // The new owner ID


async function updateProperties() {
  try {
    await connectDB()

 // Update properties with invalid owner value
 const result = await Property.updateMany(
    { owner: '1' },
    { $set: { owner: new mongoose.Types.ObjectId(NEW_OWNER_ID) } }
  );

  console.log(`Matched ${result.matchedCount} documents.`);
  console.log(`Modified ${result.modifiedCount} documents.`);
} catch (error) {
  console.error('Error during migration:', error);
} finally {
  await mongoose.disconnect();
}
}

updateProperties();
