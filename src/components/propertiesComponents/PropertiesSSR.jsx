
import PropertiesListSectionUI from './PropertiesListSectionUI';
import Spinner from './Spinner';
import { sanityFetch } from "../../../sanity/lib/sanityFetch";
import { propertiesQuery } from "../../../sanity/lib/queries";


async function PropertiesListSSR({}){

 const properties = await sanityFetch({ query: propertiesQuery });
 try {
     if (properties === undefined || properties.length === 0) {
        throw new Error('Failed to get data');
        };
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
  return loading ? (
    <Spinner />
  ) : (
    <PropertiesListSectionUI  properties={properties} total={totalItems}/>
  );
};




export default PropertiesListSSR


