import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const PaymentSchema = new Schema({
  method: {
    type: String,
    enum: ['Check', 'Crypto Transfer', 'PayPal', 'Venmo', 'Cash', 'Credit Card', 'Bank Transfer'], // List of accepted payment methods
    required: true,
  },
  details: {
    type: Map,
    of: String, // Optional: Store additional details for each payment method (e.g., account number, wallet address)
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Payment = models.Payment || model('Payment', PaymentSchema);

export default Payment;
