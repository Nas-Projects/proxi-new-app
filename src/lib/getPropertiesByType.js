
import connectDB from '../config/database'; // Your database connection

export const getPropertiesByType = async (type) => {
  const query = type === 'rentals' ? { isForRent: true } : { isForSale: true };
  const properties = await connectDB.collection('properties').find(query).toArray();
  return properties;
};