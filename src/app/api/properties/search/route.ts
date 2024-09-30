
// import {sanityFetch} from "../../../../../sanity/lib/sanityFetch";
import { sanityFetch } from "@/sanity/lib/sanityFetch"
import { searchQuery } from "@/sanity/lib/queries";

export const GET = async () => {
  try {
    // Fetch all properties from Sanity
    const properties = await sanityFetch({ query: searchQuery });

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};

// export const GET = async (request: Request) => {
//   try {
//     const { searchParams } = new URL(request.url);
//     const location = searchParams.get('location') || "";
//     const propertyType = searchParams.get('propertyType') || "All";

//     const params = {
//       location: location.toLowerCase(),
//       propertyType: propertyType.toLowerCase()
//     };

//     // Log parameters to check if they are passed correctly
//     console.log("Sanity Params:", params);

//     const properties = await sanityFetch({ query: searchQuery, params });

//     // Log properties to ensure they are fetched correctly
//     console.log("Sanity Properties:", properties);

//     return new Response(JSON.stringify(properties), {
//       status: 200,
//     });
//   } catch (error) {
//     console.log(error);
//     return new Response('Something went wrong', { status: 500 });
//   }
// };

// export const GET = async (request: Request) => {
//   try {
//     const { searchParams } = new URL(request.url);
//     const location = searchParams.get('location') || "";
//     const propertyType = searchParams.get('propertyType') || "All";

//     const params = {
//       location: location.toLowerCase(),
//       propertyType: propertyType.toLowerCase()
//     };

//     // Fetch properties using SanityFetch and the search query
//     const properties = await sanityFetch({ query: searchQuery, params });

//     return new Response(JSON.stringify(properties), {
//       status: 200,
//     });
//   } catch (error) {
//     console.log(error);
//     return new Response('Something went wrong', { status: 500 });
//   }
// };


// import connectDB from '@/config/database';
// import Property from '@/models/Property';

// // GET /api/properties/search
// export const GET = async (request) => {
//   try {
//     await connectDB();

//     const { searchParams } = new URL(request.url);
//     const location = searchParams.get('location');
//     const propertyType = searchParams.get('propertyType');

//     const locationPattern = new RegExp(location, 'i');

//     // Match location pattern against database fields
//     let query = {
//       $or: [
//         { name: locationPattern },
//         { description: locationPattern },
//         { 'location.street': locationPattern },
//         { 'location.city': locationPattern },
//         { 'location.state': locationPattern },
//         { 'location.zipcode': locationPattern },
//       ],
//     };

//     // Only check for property if its not 'All'
//     if (propertyType && propertyType !== 'All') {
//       const typePattern = new RegExp(propertyType, 'i');
//       query.type = typePattern;
//     }

//     const properties = await Property.find(query);

//     return new Response(JSON.stringify(properties), {
//       status: 200,
//     });
//   } catch (error) {
//     console.log(error);
//     return new Response('Something went wrong', { status: 500 });
//   }
// };
