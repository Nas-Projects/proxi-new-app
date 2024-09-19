// app/properties/[category]/page.jsx

import { getPropertiesByCategory } from '@/lib/api';

const PropertiesByCategoryPage = async ({ params }) => {
  const { category } = params; // Get the category from the URL
  const properties = await getPropertiesByCategory(category); // Fetch properties based on category

  return (
    <div>
      <h1>{category === 'commercial' ? 'Commercial Properties' : 'Residential Properties'}</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <a href={`/properties/${property.id}`}>{property.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertiesByCategoryPage;
