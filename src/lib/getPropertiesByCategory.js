// lib/api.js

import connectDB from '../config/database';
console.log("Fetching_properties for category:")
import connectDB from '../config/database';

export const GET = async (request, { params }) => {
  const { category } = params;

  console.log("Fetching properties for category:", category); 

  let query;
  switch (category) {
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

  console.log("Query object:", JSON.stringify(query, null, 2)); 

  try {
    await connectDB();

    const totalProperties = await Property.countDocuments({});
    console.log("Total properties in collection:", totalProperties);

    const properties = await Property.find(query).exec();
    console.log("Fetched properties:", properties);

    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.error("Error fetching properties by category:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
