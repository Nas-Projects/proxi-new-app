import connectDB from '@/config/database';
import Property from '@/models/Property';
import { getSessionUser } from '@/utils/getSessionUser';
import cloudinary from '@/config/cloudinary';

// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB();

    const page = request.nextUrl.searchParams.get('page') || 1;
    const pageSize = request.nextUrl.searchParams.get('pageSize') || 6;

    const skip = (page - 1) * pageSize;

    const total = await Property.countDocuments({});
    console.log("Property_countDocuments", total);
    const rawproperties = await Property.find({}).skip(skip).limit(8);
    console.log("Properties.find", rawproperties);

    const properties = rawproperties.map((property) => {
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
        square_feet: property.square_feet || "Not Available",
        amenities: property.amenities || [],
        id: property._id.toString(),
        images: property.images || [],
        is_featured: property.is_featured || false,
        sellerId: property.seller_info?.id?.toString() || "Proxy",
        NumberOfbookmarks: property?.NumberOfbookmarks || 0,
        inClosing: property?.inClosing || false,
        createdAt: property.createdAt ? property.createdAt.toISOString() : null,
        updatedAt: property.updatedAt ? property.updatedAt.toISOString() : null,
        interestedBy: property.interestedBy?.map((id) => id.toString()) || null,
        prospects: property.prospects?.map((id) => id.toString()) || null,
        offers: property.offers?.map((id) => id.toString()) || null,
        comments: property.comments?.map((id) => id.toString()) || [],
        likes: property.likes?.map((id) => id.toString()) || null,
        onMarket: property?.onMarket !== undefined ? property.onMarket : true,
        views: property?.views || 0,
        daysOnMarket: property?.createdAt
          ? Math.floor((new Date() - new Date(property.createdAt)) / (1000 * 60 * 60 * 24)) // Calculate days on market
          : 0,
        showPropertyDayOnMarket: property?.showPropertyDayOnMarket !== undefined ? property.showPropertyDayOnMarket : true,
        hassignedTo: property?.hassignedTo?.map((id) => id.toString()) || null,
        payments: property?.payments?.map((id) => id.toString()) || "Standard",
      };
    });

    const result = {
      total,
      properties,
     };

   return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error("Error fetching properties", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};



export const POST = async (request) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response('User ID is required', { status: 401 });
    }

    const { userId } = sessionUser;

    const formData = await request.formData();

    // Access all values from amenities and images
    const amenities = formData.getAll('amenities');
    const images = formData
      .getAll('images')
      .filter((image) => image.name !== '');

    // Create propertyData object for database
    const propertyData = {
      type: formData.get('type'),
      name: formData.get('name'),
      description: formData.get('description'),
      location: {
        street: formData.get('location.street'),
        city: formData.get('location.city'),
        state: formData.get('location.state'),
        zipcode: formData.get('location.zipcode'),
      },
      beds: formData.get('beds'),
      baths: formData.get('baths'),
      square_feet: formData.get('square_feet'),
      amenities,
      rates: {
        weekly: formData.get('rates.weekly'),
        monthly: formData.get('rates.monthly'),
        nightly: formData.get('rates.nightly.'),
      },
      seller_info: {
        name: formData.get('seller_info.name'),
        email: formData.get('seller_info.email'),
        phone: formData.get('seller_info.phone'),
      },
      owner: userId,
    };

    // Upload image(s) to Cloudinary
    const imageUploadPromises = [];

    for (const image of images) {
      const imageBuffer = await image.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);

      // Convert the image data to base64
      const imageBase64 = imageData.toString('base64');

      // Make request to upload to Cloudinary
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        {
          folder: 'propertypulse',
        }
      );

      imageUploadPromises.push(result.secure_url);

      // Wait for all images to upload
      const uploadedImages = await Promise.all(imageUploadPromises);
      // Add uploaded images to the propertyData object
      propertyData.images = uploadedImages;
    }

    const newProperty = new Property(propertyData);
    await newProperty.save();

    return Response.redirect(
      `${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`
    );

    // return new Response(JSON.stringify({ message: 'Success' }), {
    //   status: 200,
    // });
  } catch (error) {
    return new Response('Failed to add property', { status: 500 });
  }
};
