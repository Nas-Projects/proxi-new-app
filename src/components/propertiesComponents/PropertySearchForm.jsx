'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import Link from 'next/link';
import { Field, Input } from '@headlessui/react';

import clsx from 'clsx';
// import { CheckIcon } from '@heroicons/react/20/solid';
// import { Button } from '../button';

const PropertySearchForm = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('All');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (location === '' && propertyType === 'All') {
      router.push('/properties');
    } else {
      const query = `?location=${location}&propertyType=${propertyType}`;
      router.push(`/properties/search-results${query}`);
    }
  };

  return (
        <div className="justify-center items-center w-full">
          <form  onSubmit={handleSubmit} action="#" method="POST"
                 className="md:inline-flex  sm:p-7 
                    sm:p-11 mt-3 
                    max-w-7xl w-full 
                    md::inline-flex 
                    flex-col 
                    md:flex-row 
                    items-center"
                    >
              <Field className="mt-8 space-y-3">
                {/* <Label className="text-sm/5 font-medium">Email</Label> */}
                <Input
                  // required
                  autoFocus
                  value={location}
                  type="text"
                  name="location"
                  className={clsx(
                    'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10 px-4 py-3 ',
                    'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                    'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                  )}
                  placeholder='Enter Keywords or Location'
                  //       className='w-full px-4 py-3 rounded-lg !bg-white text-gray-800 focus:outline-none focus:ring ring-1 ring-pink-300  focus:ring-blue-500 hover:shadow-lg '
              
                      onChange={(e) => setLocation(e.target.value)}
                />
              </Field>
              <Field className="mt-8 space-y-3">
                <div className='w-full  md:pl-2'>
              <label htmlFor='property-type' className='sr-only'>
                Property Type
              </label>
              <select
                id='property-type'
                className='w-full px-4 py-3 rounded-lg !bg-white text-gray-800 focus:outline-none focus:ring ring-1 ring-pink-300  focus:ring-blue-500 hover:shadow-lg '
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value='All'>All</option>
                <option value='Retail'>Retail</option>
                <option value='Office'>Office</option>
                <option value='Investment Sale'>Investment Sale</option>
                <option value='Rental'>Rental</option>
                <option value='Residential'>Residential</option>
                <option value='Commercial'>Commercial</option>
              </select>
            </div>
              </Field>
            
              <div className="mt-8">
                <button
              type='submit'
              className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 
            rounded-lg bg-black text-white bg-custom-gradient hover:bg-black  focus:outline-none focus:ring focus:ring-blue-500'
            >
              Search
          </button>
              
              </div>
            </form>
      </div>
    
   
  );
};

export default PropertySearchForm;



// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const PropertySearchForm = () => {
//   const [location, setLocation] = useState('');
//   const [propertyType, setPropertyType] = useState('All');

//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (location === '' && propertyType === 'All') {
//       router.push('/properties');
//     } else {
//       const query = `?location=${location}&propertyType=${propertyType}`;

//       router.push(`/properties/search-results${query}`);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'
//     >
//       <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
//         <label htmlFor='location' className='sr-only'>
//           Location
//         </label>
//         <input
//           type='text'
//           id='location'
//           placeholder='Enter Keywords or Location'
//           className='w-full px-4 py-3 rounded-lg !bg-white text-gray-800 focus:outline-none focus:ring ring-1 ring-pink-300  focus:ring-blue-500 hover:shadow-lg '
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//       </div>
//       <div className='w-full md:w-2/5 md:pl-2'>
//         <label htmlFor='property-type' className='sr-only'>
//           Property Type
//         </label>
//         <select
//           id='property-type'
//           className='w-full px-4 py-3 rounded-lg !bg-white text-gray-800 focus:outline-none focus:ring ring-1 ring-pink-300  focus:ring-blue-500 hover:shadow-lg '
//           value={propertyType}
//           onChange={(e) => setPropertyType(e.target.value)}
//         >
//           <option value='All'>All</option>
//           <option value='Apartment'>Apartment</option>
//           <option value='Studio'>Studio</option>
//           <option value='Condo'>Condo</option>
//           <option value='House'>House</option>
//           <option value='Cabin Or Cottage'>Cabin or Cottage</option>
//           <option value='Loft'>Loft</option>
//           <option value='Room'>Room</option>
//           <option value='Other'>Other</option>
//         </select>
//       </div>
//       <button
//         type='submit'
//         className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 
//         rounded-lg bg-black text-white bg-custom-gradient hover:bg-black  focus:outline-none focus:ring focus:ring-blue-500'
//       >
//         Search
//       </button>
//     </form>
//   );
// };
// export default PropertySearchForm;
