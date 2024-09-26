

export const getPropertiesByType = async (type) => {
  let query = {};

  switch (type.toLowerCase()) {
    case 'apartment':
      query = { type: 'Apartment', forRent: true }; // Ensure this matches your property documents
      break;
    case 'rental':
      query = { forRent: true }; // This may return all rentals regardless of type
      break;
    // Add other cases as needed
    default:
      query = {};
  }

  const properties = await Property.find(query); // Fetch properties based on the query
  return properties;
};
