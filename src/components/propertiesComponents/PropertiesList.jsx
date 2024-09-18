import PropertiesListCard  from './PropertiesListCard';
import SectionWrapper from '../../hoc/SectionWrapper';
import Spinner from './Spinner';
import { useEffect, useState } from 'react';
import Link from 'next/link';
export const RecentSale = () => {
    return   <div className="lg:px-4 xl:mx-24 pt-24  pb-90px">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-30px items-center">
      {/* about 2 left */}
      <div className="mb-5">
        <div className="mb-30px">
          <p className="text-sm my-4 md:text-15px lg:text-base text-secondary-color bg-highlight bg-opacity-10 capitalize mb-15px py-1px px-5 rounded-full inline-block font-semibold">
            <span className="leading-1.3 py-3">Just Closed</span>
          </p>
          <h2 className="text-left text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold mb-15px">
            <span className="leading-1.3"> Today's Property Sale</span>
          </h2>
          <p className="text-sm lg:text-base max-w-500px lg:text-left my-4 pr-6">
            Proxy allow you to design unlimited panels and real estate custom
            forms to capture leads and keep record of all information
          </p>
        </div>
        <ul className="space-y-4 pb-4">
          <li className="text-sm lg:text-base flex items-center">
            <span className="w-15px h-0.5 bg-highlight opacity-50 inline-block mr-15px" />
            <span className="leading-1.8">Properties data and agents available</span>
          </li>
          <li className="text-sm lg:text-base flex items-center">
            <span className="w-15px h-0.5 bg-secondary-color opacity-50 inline-block mr-15px" />
            <span className="leading-1.8">
              Our Secret Island Boat Tour is Just for You
            </span>
          </li>
          <li className="text-sm lg:text-base flex items-center">
            <span className="w-15px h-0.5 bg-secondary-color opacity-50 inline-block mr-15px" />
            <span className="leading-1.8">Live Music Cocerts at Luviana</span>
          </li>
          <li className="text-sm lg:text-base flex items-center">
            <span className="w-15px h-0.5 bg-secondary-color opacity-50 inline-block mr-15px" />
            <span className="leading-1.8">Live Music Cocerts at Luviana</span>
          </li>
        </ul>
        <ul className="flex gap-x-15px py-4">
          <li className="text-sm pr-4 border-r border-primary-color border-opacity-20">
            <p className="leading-1.8 font-bold">
              3<i className="flaticon-bed ml-1" />
            </p>
            <p className="leading-1.8">Bedrooms</p>
          </li>
          <li className="text-sm pr-4 border-r border-primary-color border-opacity-20">
            <p className="leading-1.8 font-bold">
              2<i className="flaticon-clean ml-1" />
            </p>
            <p className="leading-1.8">Bedrooms</p>
          </li>
          <li className="text-sm pr-4 border-r border-primary-color border-opacity-20">
            <p className="leading-1.8 font-bold">
              2<i className="flaticon-car ml-1" />
            </p>
            <p className="leading-1.8">Car parking</p>
          </li>
          <li className="text-sm">
            <p className="leading-1.8 font-bold">
              3450
              <i className="flaticon-square-shape-design-interface-tool-symbol ml-1" />
            </p>
            <p className="leading-1.8">square Ft</p>
          </li>
        </ul>
        <div>
          <ul className="flex gap-15px pt-4 gap-x-4">
            <li>
              <a
                className="glightbox2"
                href="assets/img/img-slide/11.jpg"
                data-glightbox="type:image;"
              >
                <img src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/img-slide/11.jpg" alt="" />
              </a>
            </li>
            <li>
              <a className="glightbox2" href="/assets/img/img-slide/12.jpg">
                <img src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/img-slide/12.jpg" alt="" />
              </a>
            </li>
            <li>
              <a className="glightbox2" href="assets/img/img-slide/13.jpg">
                <img src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/img-slide/13.jpg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* about 2 right */}
      <div className="lg:ml-30px relative mb-10 lg:mb-0">
        <img src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/others/9.png" alt="" className="max-w-full" />
      </div>
    </div>
  </div>

}


// Arrays for Locations, Property Types, and Sizes
const locations = ["New York", "Los Angeles", "Austin", "Phoenix", "San Francisco", "Miami", "Lost Angeles", "Chicago", "Houston", "Phoenix","Seattle", "Miami", "Denver", "Boston",  "Brooklyn", "Queens"];
const propertyTypes = [
  "Residential",
  "Commercial",
  "Industrial",
  "Land",
  "Multifamily",
  "Office",
  "Retail",
  "Mixed-Use",
  "Hospitality",
  "Agricultural",
  "Special Purpose",
  "Vacant Land",
  "Apartment",
  "Studio",
  "Chalet",
  "Condo",
  "Co-op",
  "Condominium",
  "Townhouse",
  "Cottage Or Cabin",
];
const sizes = ["< 1000 sqft", "1000-2000 sqft", "2000-3000 sqft", "3000+ sqft"];




const PropertiesList = ({properties}) => {
  const [propertiesToMap, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [totalItems, setTotalItems] = useState(0);

  const page = 1
  const pageSize = 2
  // Fetch properties on page load
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          `/api/properties?page=${page}&pageSize=${pageSize}`
        );

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        setProperties(data.properties);
        setTotalItems(data.total);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);


  return loading ? (
    <Spinner />
  ) : (
    <section className="main-properties mt-[27em] md:mt-[17em] px-0 lg:-mt-[12em]">
      <div className="wrap-title-wrap-center">
        <h1 className="page-h1 text-custom-gradient font-bold md:text-[55px] ss:text-[45px] text-[33px] slide-animation">
           Real Estate Properties
        </h1>
        <h3 className="text-4xl -mt-4  pb-6 text-gray-700">Proxy Smart Searches and Data access</h3>
        {/* <Link href="/properties" className="">
        View all 
        </Link> */}
        </div>
      <section className="px-4 lg:px-16 sm:py-12 py-4 max-w-[140rem] mx-auto bg-white">
        <div className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px] min-w-[360px] mx-auto flex items-center relative propertiesMainSection">
          <div className="items-center w-full mx-auto flex flex-col max-w-[126rem]">
            <div className="container-xl lg:container m-auto px-4 py-6 min-w-[330px]">
              {propertiesToMap.length === 0 ? (
                <p>No properties found matching your criteria. Please adjust the price or location.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-white">
                  {propertiesToMap.map((property) => (
                    <PropertiesListCard key={property.id} property={property} />
                  ))}
                </div>
              )}
             <div className="flex py-4 lg:py-12 ">
                <div className="!grid grid-cols-3 gap-x-6 lg:gap-x-4 ">
                    <div>
                        <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                        <span className="inline-block absolute top-0 right-0 w-full h-full bg-custom-gradient group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                        <a
                            href="/properties"
                            className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
                        >
                            View more
                        </a>
                        </h5>
                    </div>
                    <div>
                        <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                        <span className="inline-block absolute top-0 right-0 w-full h-full bg-black group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                        <a
                            href="/contact"
                            className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
                        >
                           Contact Us
                        </a>
                        </h5>
                    </div>
                </div>
             </div>
             <RecentSale />
            </div> 
          </div>
       
        </div>
        </section> 
         {/* <section className="mt-4 lg:my-8"> 
         <CardGrid/>
         </section> */}
      
    </section>
  );
};


export default SectionWrapper(PropertiesList, 'PropertiesList');

