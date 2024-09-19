// lib/api.js

import connectDB from '../config/database';

export const getPropertiesByCategory = async (category) => {
  let query;

  switch (category) {
    case 'residential':
      query = { isForRent: true }; // You can expand this based on your residential criteria
      break;
    case 'commercial':
      query = {
        $or: [
          { type: 'investmentSale' },
          { type: 'office' },
          { type: 'retail' },
        ],
      };
      break;
    default:
      query = {}; // Handle other categories or return all properties
  }

  const properties = await connectDB.collection('properties').find(query).toArray();
  return properties;
};
