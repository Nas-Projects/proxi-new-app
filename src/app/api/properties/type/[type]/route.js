import connectDB from '@/config/database';
import Property from '../../../../../models/Property'; // Adjust the import path as necessary

// src/app/api/properties/type/[type]/route.js

// import { getPropertiesByType } from '@/lib/getPropertiesByType';

// export const GET = async (request, { params }) => {
//   const { type } = params;
  
//   console.log("Fetching properties for type:", type); // Log the type
  
//   const properties = await getPropertiesByType(type);
  
//   return new Response(JSON.stringify(properties), { status: 200 });
// };

export const GET = async (request, { params }) => {


  const { type } = params;
  console.log("PROPERTY_REQUEST", request, "PEOPERTY_TYPE", type )
  try {
    await connectDB();

    const properties = await Property.find({ type }); // Adjust based on your database structure
    const formattedProperties = properties.map((property) => ({
      _id: property._id.toString(),
      name: property.name,
      type: property.type,
      location: property.location,
      amenities: property.amenities,
      images: property.images,
      askingPrice: property.askingPrice,
    }));

    return new Response(JSON.stringify(formattedProperties), { status: 200 });
  } catch (error) {
    console.error("Error fetching properties by type:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
