// app/properties/[category]/page.jsx

import { getPropertiesByCategory } from '../../../../lib/getPropertiesByCategory.js';



const PropertiesByCategoryPage = async ({ params }) => {
  const { category } = params;
  const properties = await getPropertiesByCategory(category);

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Properties</h1>
      <ul>
        {properties.map((property) => (
          <li key={property._id}>
            <a href={`/properties/${property._id}`}>{property.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertiesByCategoryPage;
