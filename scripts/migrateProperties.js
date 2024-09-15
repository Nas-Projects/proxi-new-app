

// import connectDB from '../src/config/database';
import connectDB from '../src/config/database.js';
import Property from '../src/models/Property.js'; // Adjust the path to the Property model
import mongoose from 'mongoose'; // Import mongoose using default export
import Payment from '../src/models/Payment.js';
async function updateProperties() {
  try {
    // Ensure the database is connected
    await connectDB();

    // Find the payment method for 'Standard'
    const standardPayment = await Payment.findOne({ method: 'Bank Transfer' });
    
    if (!standardPayment) {
      console.log('Standard payment method not found.');
      return;
    }

    // Perform the update on the Property collection
    const result = await Property.updateMany(
      {}, // Filter to match all documents
      {
        $set: {
          NumberOfbookmarks: 0,
          inClosing: false,
          interestedBy: [],
          prospects: [],
          offers: [],
          comments: [],
          likes: [],
          onMarket: true,
          views: 0,
          showPropertyDayOnMarket: true,
          hassignedTo: [],
          payments: [standardPayment._id], // Assign 'Standard' payment ObjectId
        },
        $setOnInsert: {
          daysOnMarket: 0, // Calculate or set initial value as needed
        }
      },
      { upsert: false }
    );

    console.log(`${result.nModified} properties were updated.`);
  } catch (err) {
    console.error('Error updating properties:', err);
  } finally {
    // Close the connection when the script finishes
    mongoose.connection.close();
  }
}

updateProperties();

