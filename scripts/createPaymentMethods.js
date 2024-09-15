import Payment from '../src/models/Payment.js';
import connectDB from '../src/config/database.js';

import mongoose from 'mongoose'; // Add this to manage mongoose connection
 

const createPaymentMethods = async () => {
  await connectDB();

  const paymentMethods = ['Check', 'Crypto Transfer', 'PayPal', 'Venmo', 'Cash', 'Credit Card', 'Bank Transfer'];

  for (const method of paymentMethods) {
    const existingPayment = await Payment.findOne({ method });

    if (!existingPayment) {
      const payment = new Payment({ method });
      await payment.save();
      console.log(`Payment method "${method}" created.`);
    } else {
      console.log(`Payment method "${method}" already exists.`);
    }
  }

  // Close the mongoose connection
  mongoose.connection.close();
};

createPaymentMethods();