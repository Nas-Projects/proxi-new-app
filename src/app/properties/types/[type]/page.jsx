
import { getPropertiesByType } from '../../../../lib/getPropertiesByType';

const PropertiesByTypePage = async ({ params }) => {
  const { type } = params; // Get the type from the URL
  const properties = await getPropertiesByType(type); // Fetch properties based on the type

  return (
    <div>
      <h1>{type === 'rentals' ? 'Rental Properties' : 'Properties for Sale'}</h1>
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

export default PropertiesByTypePage;