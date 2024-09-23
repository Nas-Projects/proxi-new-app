import connectDB from '@/config/database';
import Property from '../../../../../models/Property';
export const GET = async (request, { params }) => {
  const { category } = params;

  try {
    await connectDB();

    const properties = await Property.find({ category }); // Adjust based on your database structure
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
    console.error("Error fetching properties by category:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
