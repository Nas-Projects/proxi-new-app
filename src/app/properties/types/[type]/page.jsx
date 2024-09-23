
import { getPropertiesByType } from '../../../../lib/getPropertiesByType';


const PropertiesByTypePage = async ({ params }) => {
  const { type } = params;
  const properties = await getPropertiesByType(type);

  return (
    <div>
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Properties</h1>
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

export default PropertiesByTypePage;
