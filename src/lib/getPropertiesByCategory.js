import connectDB from '../config/database';
import Property from '../models/Property'; // Assuming you have a Property model

// Exporting the getPropertiesByCategory function
export const getPropertiesByCategory = async (category) => {
  let query = {};

  switch (category.toLowerCase()) {
    case 'residential':
      query = { isForRent: true };
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
    case 'office':
      query = { type: 'office' };
      break;
    case 'modern':
      query = { style: 'modern' };
      break;
    case 'apartment':
      query = { type: 'apartment' };
      break;
    case 'sales':
      query = { isForSale: true };
      break;
    case 'rentals':
      query = { isForRent: true };
      break;
    case 'blockchain':
      query = { acceptsCrypto: true };
      break;
    default:
      query = {};
  }

  try {
    // Connecting to the database
    await connectDB();

    // Fetch properties based on the query
    const properties = await Property.find(query).exec();
    console.log("Fetched properties:", properties);

    return properties;
  } catch (error) {
    console.error("Error fetching properties by category:", error);
    throw new Error('Error fetching properties by category');
  }
};
