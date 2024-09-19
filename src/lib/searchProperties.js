// lib/api.js




import Property from '@/models/Property'; // Ensure this points to your Property model
export const searchProperties = async ({ name, description, location, priceFrom, priceTo, size, type }) => {
  const mustClauses = [];

  // Ensure the name and description filters are added only if they're provided
  if (name) {
    mustClauses.push({
      text: {
        query: name,
        path: 'name',
      },
    });
  }

  if (description) {
    mustClauses.push({
      text: {
        query: description,
        path: 'description',
      },
    });
  }

  // Location
  if (location) {
    mustClauses.push({
      text: {
        query: location,
        path: 'location.city',
      },
    });
  }

  // Price range
  if (priceFrom || priceTo) {
    const priceRange = {
      range: {
        price: {}
      }
    };
    if (priceFrom) {
      priceRange.range.price.gte = priceFrom;
    }
    if (priceTo) {
      priceRange.range.price.lte = priceTo;
    }
    mustClauses.push(priceRange);
  }

  // Size
  if (size) {
    mustClauses.push({
      range: {
        size: {
          gte: size,
        },
      },
    });
  }

  // Type
  if (type) {
    mustClauses.push({
      term: {
        type: type,
      },
    });
  }

  // If no clauses, return all properties
  if (mustClauses.length === 0) {
    return await Property.find({});
  }

  const query = {
    $search: {
      index: 'default',
      compound: {
        must: mustClauses,
      },
    },
  };

  const properties = await Property.aggregate([query]).exec();
  return properties;
};
