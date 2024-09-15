'use client'
import SectionWrapper from "../../hoc/SectionWrapper";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Spinner from '@/components/propertiesComponents/Spinner';
import Pagination from '@/components/propertiesComponents/Pagination';
import { SelectButton } from '@/components/select/SelectButton';

// Reusable PropertyCard component
const PropertyCard = ({ property }) => (
  <Link className="property" href={`properties/${property.id}`}>
    <img
      alt={property.name}
      loading="lazy"
      width={property.imageWidth}
      height={property.imageHeight}
      decoding="async"
      data-nimg={1}
      style={{ color: 'transparent' }}
      src={`${property.images[0]}`}
    />
    <div className="propertyInfo">
      <h2 className="text-white text-[1.1rem] font-bold">{property.name}</h2>
      <hr />
      <div className="propLocDist">
        <p className="inline-flex space-x-2">
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
          </svg>
          {property.location.city}, {property.location.zipcode}
        </p>
        <p>
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z" />
          </svg>
          {property.size}
        </p>
      </div>
    </div>
  </Link>
);

// Arrays for Locations, Property Types, and Sizes
const locations = ["New York", "Los Angeles", "Austin", "Phoenix", , "San Francisco", "Miami", "Lost Angeles", "Chicago", "Houston", "Phoenix", , "Seattle", "Miami", "Denver", "Boston",  "Brooklyn", "Queens"];
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

// Filter Component
export const Filters = ({ filters, setFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      location: '',
      type: '',
      size: '',
      priceFrom: '',
      priceTo: '',
    });
  };

  // Clear a specific filter, e.g., location
  const clearLocationFilter = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      location: ''
    }));
  };

  return (
    <div className="filterSection my-4 lg:my-8">
      <div className="filterFields space-between lg:flex">
        <div className="filterFieldsOne">
          <SelectButton
            label="Location"
            name="location"
            items={["All Locations", ...locations]} 
            handleInputChange={handleInputChange}
            value={filters.location} // Bind the value to the filters state
          />
          <SelectButton
            label="Type"
            name="type"
            items={["All Types", ...propertyTypes]} 
            handleInputChange={handleInputChange}
            value={filters.type} // Bind the value to the filters state
          />
          <SelectButton
            label="Size"
            name="size"
            items={["All ", ...sizes]} 
            handleInputChange={handleInputChange}
            value={filters.size} // Bind the value to the filters state
          />
        </div>
        <div className="filterFieldsTwo">
          <div className="price">
            <label htmlFor="price-to">Price To:</label>
            <input
              type="text"
              id="price-to"
              placeholder="$10000"
              name="priceTo"
              onChange={handleInputChange}
              value={filters.priceTo} // Bind the value to the filters state
            />
          </div>
          <div className="price">
            <label htmlFor="price-from">Price From:</label>
            <input
              type="text"
              id="price-from"
              placeholder="$10000"
              name="priceFrom"
              onChange={handleInputChange}
              value={filters.priceFrom} // Bind the value to the filters state
            />
          </div>
          <button onClick={clearFilters}>Clear All Filters</button>
          <button onClick={clearLocationFilter}>Clear Location Filter</button>
        </div>
      </div>
    </div>
  );
};




const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalItems, setTotalItems] = useState(0);

  const [filters, setFilters] = useState({
    location: '',
    type: '',
    size: '',
    priceFrom: '',
    priceTo: '',
  });

  const [filteredProperties, setFilteredProperties] = useState([]);

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
  }, [page, pageSize]);

  // Filtering logic
  // useEffect(() => {
  //   let filtered = properties;
  
  //   // Filter by location (using city)
  //   if (filters.location) {
  //     filtered = filtered.filter((property) =>
  //       property.location.city.toLowerCase().includes(filters.location.toLowerCase())
  //     );
  //   }
  
  //   // Filter by size (using square_feet)
  //   // if (filters.size) {
  //   //   const sizeRange = filters.size.split("-"); // Assuming sizes are formatted like "1000-2000 sqft"
  //   //   if (sizeRange.length === 2) {
  //   //     const [minSize, maxSize] = sizeRange.map(Number);
  //   //     filtered = filtered.filter((property) =>
  //   //       property.square_feet >= minSize && property.square_feet <= maxSize
  //   //     );
  //   //   } else if (filters.size.includes("<")) {
  //   //     const maxSize = Number(filters.size.replace("<", ""));
  //   //     filtered = filtered.filter((property) =>
  //   //       property.square_feet <= maxSize // less than or equal to maxSize
  //   //     );
  //   //   } else if (filters.size.includes("+")) {
  //   //     const minSize = Number(filters.size.replace("+", ""));
  //   //     filtered = filtered.filter((property) =>
  //   //       property.square_feet >= minSize // greater than or equal to minSize
  //   //     );
  //   //   }
  //   // }
  //   // Filter by size (using square_feet)
  //   if (filters.size) {
  //     const sizeRange = filters.size.split("-");
      
  //     if (sizeRange.length === 2) {
  //       const [minSize, maxSize] = sizeRange.map(Number);
  //       filtered = filtered.filter((property) =>
  //         property.square_feet >= minSize && property.square_feet <= maxSize
  //       );
  //     } else if (filters.size.includes("<")) {
  //       const maxSize = Number(filters.size.replace("<", ""));
  //       filtered = filtered.filter((property) =>
  //         property.square_feet <= maxSize // less than or equal to maxSize
  //       );
  //     } else if (filters.size.includes("+")) {
  //       const minSize = Number(filters.size.replace("+", ""));
  //       filtered = filtered.filter((property) =>
  //         property.square_feet >= minSize // greater than or equal to minSize
  //       );
  //     }
  //   }

  
  //   // Filter by type
  //   if (filters.type) {
  //     filtered = filtered.filter((property) =>
  //       property.type.toLowerCase().includes(filters.type.toLowerCase())
  //     );
  //   }
  
  //   if (filters.priceFrom || filters.priceTo) {
  //     filtered = filtered.filter((property) => {
  //       let price = 0;
        
  //       // Prioritize monthly rate, then weekly, then fallback to a sale price if any
  //       if (property.rates?.monthly) {
  //         price = property.rates.monthly;
  //       } else if (property.rates?.weekly) {
  //         price = property.rates.weekly * 4; // Convert weekly rate to a monthly equivalent
  //       } else if (property.price) {
  //         price = property.price;
  //       }
        
  //       const matchesPriceFrom = filters.priceFrom ? price >= Number(filters.priceFrom) : true;
  //       const matchesPriceTo = filters.priceTo ? price <= Number(filters.priceTo) : true;
    
  //       return matchesPriceFrom && matchesPriceTo;
  //     });
  //   }
    
    
  //   // Set filtered properties or show a message if none match
  //   if (filtered.length === 0) {
  //     setFilteredProperties([]);
  //   } else {
  //     setFilteredProperties(filtered);
  //   }
  // }, [filters, properties]);
  
  useEffect(() => {
    let filtered = properties;
  
    // Filter by location (using city)
    if (filters.location) {
      filtered = filtered.filter((property) =>
        property.location.city.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
  
    // Filter by size (using square_feet)
    if (filters.size) {
      const sizeRange = filters.size.split("-");
      
      if (sizeRange.length === 2) {
        const [minSize, maxSize] = sizeRange.map(Number);
        filtered = filtered.filter((property) =>
          property.square_feet >= minSize && property.square_feet <= maxSize
        );
      } else if (filters.size.includes("<")) {
        const maxSize = Number(filters.size.replace("<", ""));
        filtered = filtered.filter((property) =>
          property.square_feet <= maxSize // less than or equal to maxSize
        );
      } else if (filters.size.includes("+")) {
        const minSize = Number(filters.size.replace("+", ""));
        filtered = filtered.filter((property) =>
          property.square_feet >= minSize // greater than or equal to minSize
        );
      }
    }
  
    // Filter by type
    if (filters.type) {
      filtered = filtered.filter((property) =>
        property.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }
  
    // Filter by price (using weekly or monthly rate)
    if (filters.priceFrom || filters.priceTo) {
      filtered = filtered.filter((property) => {
        let price = 0;
  
        // Prioritize monthly rate, then weekly, then fallback to a sale price if any
        if (property.rates?.monthly) {
          price = property.rates.monthly;
        } else if (property.rates?.weekly) {
          price = property.rates.weekly * 4; // Convert weekly rate to a monthly equivalent
        } else if (property.price) {
          price = property.price;
        }
  
        const matchesPriceFrom = filters.priceFrom ? price >= Number(filters.priceFrom) : true;
        const matchesPriceTo = filters.priceTo ? price <= Number(filters.priceTo) : true;
  
        return matchesPriceFrom && matchesPriceTo;
      });
    }
  
    // Set filtered properties or show a message if none match
    setFilteredProperties(filtered.length > 0 ? filtered : []);
  }, [filters, properties]);
  

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      location: '',
      type: '',
      size: '',
      priceFrom: '',
      priceTo: '',
    });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="main-properties">
      <div className="propertiesHeader">
        <h1 className="text-custom-gradient font-bold md:text-[55px] ss:text-[45px] text-[33px]">
          Our Properties
        </h1>
        <h3 className="text-4xl">Proxy will give you help hand with search for a new living</h3>
        <Filters filters={filters} setFilters={setFilters} />
        <button className="clear-filters" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
      <section className="px-2 lg:px-16 sm:py-12 py-4 max-w-[140rem] mx-auto bg-white">
        <div className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px] min-w-[360px] mx-auto flex items-center relative propertiesMainSection">
          <div className="items-center w-full mx-auto flex flex-col max-w-[126rem]">
            <div className="container-xl lg:container m-auto px-4 py-6 min-w-[330px]">
              {filteredProperties.length === 0 ? (
                <p>No properties found matching your criteria. Please adjust the price or location.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-white">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              )}
              <Pagination
                page={page}
                pageSize={pageSize}
                totalItems={totalItems}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default SectionWrapper(PropertiesPage, 'propertiesPage');


// import SectionWrapper from "../../hoc/SectionWrapper";
// // import RealEstateListing from "@components/properties"
// import Link from "next/link";
// import { useState, useEffect } from 'react';
// // import PropertyCard from '@/components/PropertyCard';
// import Spinner from '@/components/propertiesComponents/Spinner';
// import Pagination from '@/components/propertiesComponents/Pagination';
// import {SelectButton} from '@/components/select/SelectButton'
// // Reusable PropertyCard component
// const PropertyCard = ({ property }) => {

//   return (
//     <Link className="property" href={`properties/${property.id}`}>
//       <img
//         alt={property.name}
//         loading="lazy"
//         width={property.imageWidth}
//         height={property.imageHeight}
//         decoding="async"
//         data-nimg={1}
//         style={{ color: 'transparent' }}
//         src={`${property.images[0]}`}
//       />
//       <div className="propertyInfo">
//         <h2 className="text-white text-[1.1rem] font-bold">{property.name}</h2>
//         <hr />
//         <div className="propLocDist">
//           <p className="inline-flex space-x-2">
//             <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//               <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
//             </svg>
//             {property.location.city}, {property.location.zipcode}
//           </p>
//           <p>
//             <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//               <path d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z" />
//             </svg>
//             {property.size}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// // Arrays for Locations, Property Types, and Sizes
// const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// const propertyTypes = [
//   "Residential",
//   "Commercial",
//   "Industrial",
//   "Land",
//   "Multifamily",
//   "Office",
//   "Retail",
//   "Mixed-Use",
//   "Hospitality",
//   "Agricultural",
//   "Special Purpose",
//   "Vacant Land",
//   "Co-op",
//   "Condominium",
//   "Townhouse"
// ];
// const sizes = ["< 1000 sqft", "1000-2000 sqft", "2000-3000 sqft", "3000+ sqft"];


// // Filter Component
// export const Filters = ({ filters, setFilters }) => {
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   // const [filters, setFilters] = React.useState({
//   //   location: "",
//   //   type: "",
//   //   size: "",
//   //   priceFrom: "",
//   //   priceTo: "",
//   // });
  
//   // const filteredProperties = properties.filter((property) => {
//   //   const matchesLocation = filters.location ? property.location === filters.location : true;
//   //   const matchesType = filters.type ? property.type === filters.type : true;
//   //   const matchesSize = filters.size ? property.size === filters.size : true;
//   //   const matchesPriceFrom = filters.priceFrom ? property.price >= Number(filters.priceFrom) : true;
//   //   const matchesPriceTo = filters.priceTo ? property.price <= Number(filters.priceTo) : true;
  
//   //   return matchesLocation && matchesType && matchesSize && matchesPriceFrom && matchesPriceTo;
//   // });
  
//   return (
//     <div className="filterSection my-4 lg:my-8">
//       <div className="filterFields space-between lg:flex">
//         <div className="filterFieldsOne">
//           <SelectButton
//             label="Location"
//             name="location"
//             items={locations}
//             handleInputChange={handleInputChange}
//           />
//           <SelectButton
//             label="Type"
//             name="type"
//             items={propertyTypes}
//             handleInputChange={handleInputChange}
//           />
//           <SelectButton
//             label="Size"
//             name="size"
//             items={sizes}
//             handleInputChange={handleInputChange}
//           />
//         </div>
//         <div className="filterFieldsTwo">
//           <div className="price">
//             <label htmlFor="price-to">Price To:</label>
//             <input
//               type="text"
//               id="price-to"
//               placeholder="$10000"
//               name="priceTo"
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="price">
//             <label htmlFor="price-from">Price From:</label>
//             <input
//               type="text"
//               id="price-from"
//               placeholder="$10000"
//               name="priceFrom"
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };





// const PropertiesPage = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [pageSize, setPageSize] = useState(6);
//   const [totalItems, setTotalItems] = useState(0);
//   // const [properties] = useState([

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const res = await fetch(
//           `/api/properties?page=${page}&pageSize=${pageSize}`
//         );

//         if (!res.ok) {
//           console.log("FAILED_TO_FETCH_PROPERTIES")
//           throw new Error('Failed to fetch data');
//         }

//         const data = await res.json();
//         console.log("FETCHED_PROPERTIES", data.properties);
//         setProperties(data.properties);
//         setTotalItems(data.total);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, [page, pageSize]);

//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//   };


//   const [filters, setFilters] = useState({
//     location: '',
//     type: '',
//     size: '',
//     priceFrom: '',
//     priceTo: '',
//   });

//   const [filteredProperties, setFilteredProperties] = useState(properties);

//   // Filtering logic
//   useEffect(() => {
//     let filtered = properties;

//     // Filter by location
//     if (filters.location) {
//       filtered = filtered.filter((property) =>
//         property.location.includes(filters.location)
//       );
//     }

//     // Filter by size
//     if (filters.size) {

//         console.log("FILTERED", filtered)

//       filtered = filtered.filter((property) =>
//         property.size.includes(filters.size)
//       );
//     }

//     // Add more filter conditions for type, priceFrom, and priceTo here if needed

//     setFilteredProperties(filtered);
//   }, [filters, properties]);

//   return loading ? (
//     <Spinner />
    
//   ) : (<div className="main-properties">
//     <div className="propertiesHeader">
//         <h1 className="text-custom-gradient font-bold md:text-[55px] ss:text-[45px] text-[33px]">
//           Our Properties
//         </h1>
//         <h3 className="text-4xl">Proxy will give you help hand with search for a new living</h3>
//         <Filters filters={filters} setFilters={setFilters} />
//       </div>
//     <section className="px-2 lg:px-16 sm:py-12 py-4 max-w-[140rem] mx-auto bg-white">
//   <span className="hash-span" id="propertiesmain">
//     &nbsp;
//   </span>
//   <div className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px]  min-w-[360px] mx-auto flex items-center relative propertiesMainSection bg-">
//     <div className="items-center w-full mx-auto flex flex-col max-w-[126rem]">
      
//       <div className='container-xl lg:container m-auto px-4 py-6 min-w-[330px]'>
//        {properties.length === 0 ? (
//           <p>No properties found</p>
//         ) : (
//         <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-6 bg-white'>
//             {filteredProperties.map((property) => (
//           <PropertyCard key={property.id} property={property} />
//         ))}
//     </div>
//   )}
//   <Pagination
//     page={page}
//     pageSize={pageSize}
//     totalItems={totalItems}
//     onPageChange={handlePageChange}
//   />  
//       </div>
//     </div>
//   </div>
// </section>
// </div>
//   );
// };


// const PropertiesPage = () => {


  


//   const [properties] = useState([
//     // All 20 property objects
//     {
//       id: 1,
//       title: 'Property 1',
//       location: 'Location 1',
//       size: '160 m2',
//       imageSrc: 'https://proxy-gamma-virid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite_stairs.8a888d7c.jpg&w=3840&q=75',
//       imageWidth: 3639,
//       imageHeight: 5458,
//     },
//     {
//         id: 2,
//         title: 'Property 1',
//         location: 'Location 1',
//         size: '160 m2',
//         imageSrc: 'https://proxy-gamma-virid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite_stairs.8a888d7c.jpg&w=3840&q=75',
//         imageWidth: 3639,
//         imageHeight: 5458,
//       }, {
//         id: 3,
//         title: 'Property 1',
//         location: 'Location 1',
//         size: '160 m2',
//         imageSrc: 'https://proxy-gamma-virid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite_stairs.8a888d7c.jpg&w=3840&q=75',
//         imageWidth: 3639,
//         imageHeight: 5458,
//       }, {
//         id: 4,
//         title: 'Property 1',
//         location: 'Location 1',
//         size: '160 m2',
//         imageSrc: 'https://proxy-gamma-virid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite_stairs.8a888d7c.jpg&w=3840&q=75',
//         imageWidth: 3639,
//         imageHeight: 5458,
//       }, {
//         id: 5,
//         title: 'Property 1',
//         location: 'Location 1',
//         size: '160 m2',
//         imageSrc: 'https://proxy-gamma-virid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite_stairs.8a888d7c.jpg&w=3840&q=75',
//         imageWidth: 3639,
//         imageHeight: 5458,
//       }, {
//         id: 6,
//         title: 'Property 1',
//         location: 'Location 1',
//         size: '160 m2',
//         imageSrc: 'https://proxy-gamma-virid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite_stairs.8a888d7c.jpg&w=3840&q=75',
//         imageWidth: 3639,
//         imageHeight: 5458,
//       }, {
//         id: 7,
//         title: 'Property 1',
//         location: 'Location 1',
//         size: '160 m2',
//         imageSrc: 'https://proxy-gamma-virid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite_stairs.8a888d7c.jpg&w=3840&q=75',
//         imageWidth: 3639,
//         imageHeight: 5458,
//       }, {
//         id: 8,
//         title: 'Property 1',
//         location: 'Location 1',
//         size: '160 m2',
//         imageSrc: 'https://proxy-gamma-virid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite_stairs.8a888d7c.jpg&w=3840&q=75',
//         imageWidth: 3639,
//         imageHeight: 5458,
//       }, {
//         id: 9,
//         title: 'Property 1',
//         location: 'Location 1',
//         size: '160 m2',
//         imageSrc: 'https://proxy-gamma-virid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite_stairs.8a888d7c.jpg&w=3840&q=75',
//         imageWidth: 3639,
//         imageHeight: 5458,
//       }, {
//         id: 10,
//         title: 'Property 1',
//         location: 'Location 1',
//         size: '160 m2',
//         imageSrc: 'https://proxy-gamma-virid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite_stairs.8a888d7c.jpg&w=3840&q=75',
//         imageWidth: 3639,
//         imageHeight: 5458,
//       }, {
//         id: 12,
//         title: 'Property 1',
//         location: 'Location 1',
//         size: '160 m2',
//         imageSrc: 'https://proxy-gamma-virid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite_stairs.8a888d7c.jpg&w=3840&q=75',
//         imageWidth: 3639,
//         imageHeight: 5458,
//       }, {
//         id: 13,
//         title: 'Property 1',
//         location: 'Location 1',
//         size: '160 m2',
//         imageSrc: 'https://proxy-gamma-virid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite_stairs.8a888d7c.jpg&w=3840&q=75',
//         imageWidth: 3639,
//         imageHeight: 5458,
//       },
//     // Add more properties here...
//   ]);


  




//   return (
//     <section className="sm:px-16 px-6 sm:py-12 py-4 max-w-[95rem] mx-auto">
//       <span className="hash-span" id="propertiesmain">
//         &nbsp;
//       </span>
//       <section className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px] mx-auto flex items-center relative propertiesMainSection">
//         <div className="items-center w-full mx-auto flex flex-col max-w-[86rem]">
//           <div className="propertiesHeader">
//             <h1 className="text-custom-gradient font-bold md:text-[55px] ss:text-[45px] text-[33px]">
//               Our Properties
//             </h1>
//             <h3>Proxy will give you help hand with search for a new living</h3>
//             <Filters filters={filters} setFilters={setFilters} />
//           </div>
//           <div className="gap-y-4 sm:gap-y-8 flex md:flex-row  flex-block flex-col  w-full propSec flex-block sm:grid max-w-[700px]:grid-cols-2  max-w-[900px]:!grid-cols-3 lg:grid lg:grid-cols-3 xl:grid-cols-4">
//             {filteredProperties.map((property) => (
//               <PropertyCard key={property.id} property={property} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default PropertiesPage;

//  <RealEstateListing />