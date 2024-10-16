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

// GET /api/properties/type/[type]

// GET /api/properties/[type]
export const GET = async (request, { params }) => {
  const { type } = params;
  console.log("PROPERTY_TYPE", type);

  const pageSize = request.nextUrl.searchParams.get('pageSize') || 6;
  const page = request.nextUrl.searchParams.get('page') || 1;
  const skip = (page - 1) * pageSize;

  try {
    await connectDB();

    // Build the query dynamically based on the type
    const query = {};

    // Adjust the query based on the type parameter
    if (type === 'forSale') {
      query.forSale = true;
    } else if (type === 'forRent') {
      query.forRent = true;
    } else if (type === 'apartment') {
      query.type = "Apartment"; // Check specifically for type Apartment
    } else if (type === 'Investment Sale') {
      query.type = "Investment Sale"; // Check for Investment Sale
    } else if (type === 'Retail') {
      query.type = "Retail"; // Check for Retail
    } else if (type === 'Commercial') {
      query.category = "Commercial"; // Check for Retail
    }
     else if (type === 'office') {
      query.type = "Office"; // Check for Office
    } else if (type !== 'all') {
      query.type = type; // Set the type if it's not 'all'
    }

    const total = await Property.countDocuments(query);
    const rawproperties = await Property.find(query).skip(skip).limit(pageSize);

    const properties = rawproperties.map(property => {
      return {
        location: property.location ? {
          street: property.location.street || '',
          city: property.location.city || '',
          state: property.location.state || '',
          zipcode: property.location.zipcode || '',
        } : null,
        rates: property.rates || null,
        seller_info: property.seller_info || null,
        name: property.name || null,
        _id: property._id.toString(),
        type: property.type || "Property type not provided",
        description: property.description || "No description provided",
        beds: property.beds || "Not Available",
        baths: property.baths || "Not Available",
        square_feet: property.square_feet ? property.square_feet.toString() : "Not Available",
        amenities: property.amenities || [],
        images: property.images || [],
        is_featured: property.is_featured || false,
        // Add other fields as necessary
      };
    });

    return new Response(JSON.stringify({ total, properties }), { status: 200 });
  } catch (error) {
    console.error("Error fetching properties", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
