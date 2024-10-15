'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { Checkbox, Field, Input } from '@headlessui/react';

// import clsx from 'clsx';
// import Link from 'next/link';
// import { CheckIcon } from '@heroicons/react/20/solid';
// import { Button } from '../button';

const PropertySearchForm = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('All');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
  // alert('Submitted');
    if (location === '' && propertyType === 'All') {
      router.push('/properties');
    } else {
      const query = `?location=${location}&propertyType=${propertyType}`;
      router.push(`/properties/search-results${query}`);
    }
  };

  return (<main className="main-container !mx-auto max-[600px]:!px-0 justify-center cinstent-center min-[600px]:!py-0  bg-transparent lg:!my-0 min-[1371px]:!pt-0 xl:mx-2 lg:!pb-[0em] lg:!pt-[0em] max-[1500px]:!px-[1em] !max-w-2xl
   ">
  <section className="content-wrapper pt-0 pb-12  lg:pt-0">
   
    <div className="login-container max-[600px]:px-0 max-[700px]:!px-0 lg:!pb-0">
      <div  className="input-wrapper"  >
      <form action="#" method="POST" className="input-wrapper" onSubmit={handleSubmit}>
        <input onChange={(e) => setLocation(e.target.value)}
          className="email-input !mb-4 border-1 !border-pink-900 ring ring-1 focus:!border-pink-500 ring-pink-[#7a7678]"
          inputMode="text"
          type="text"
          id="location-input"
          name="location"
          autoComplete="Enter location"
          autoCapitalize="none"
          spellCheck="false"
          required=""
          placeholder=""
        />
        <label className="email-label " htmlFor="location-input">
          {location ? location : "Zip Code | Neighborhodod | State *"} 
        </label>
        {/* <div className="invalid-email-error-message ">
          <img
            className="error-icon"
            src="https://auth.openai.com/assets/error-icon-BaFi8GTB.svg"
          />
          Email is not valid.
        </div> */}
           <div className=''>
               <label htmlFor='property-type' className='sr-only'>
                 Property Type
               </label>
               <select
                 id='property-type'
                 className='email-input !mb-4 border-1 !border-pink-900 ring ring-1 focus:!border-pink-500 ring-pink-[#7a7678]'
                 value={propertyType}
                 onChange={(e) => setPropertyType(e.target.value)}
               >
                 <option value='All' className='email-label !text-[#6f7780]'>Property Type</option>
                 <option value='Retail'>Retail</option>
                 <option value='Residential'>Residential</option>
                 <option value='Office'>Office</option>
                 <option value='Investment Sale'>Investment Sale</option>
                 <option value='Rental'>Rental</option>
                 <option value='Commercial'>Commercial</option>
               </select>
             </div>
    
      <button  type='submit' className="continue-btn !bg-custom-gradient">
        CONTINUE
      </button>
      </form>   
      </div>
     
      {/* <p className="hidden md:inline-flex text-white font-bold justify-between other-page gap-x-12">
     
        <span>Clear search</span> 
       
     
      </p> */}
    
    </div>
  </section>
</main>

      // <div className="w-full adds max-w-[90vw] md:max-w-5xl lg:max-w-full rounded-xl bg-white shadow-md ring-1 ring-black/5">
      //   <form action="#" method="POST" className="p-7 sm:p-11 space-y-4" onSubmit={handleSubmit}>
      //     <Field className="mt-8 space-y-3">
      //     <Input required
      //             autoFocus
      //             value={location}
      //             type="text"
      //             name="location"
      //             className={clsx(
      //                'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10 px-4 py-3 ',
      //                'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
      //                'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
      //              )}
      //              placeholder='Enter Keywords or Location'
      //                     // className='w-full px-4 py-3 rounded-lg !bg-white text-gray-800 focus:outline-none focus:ring ring-1 ring-pink-300  focus:ring-blue-500 hover:shadow-lg '
              
      //                  onChange={(e) => setLocation(e.target.value)}
      //            />
      //          </Field>
            
      //            <div className='w-full  md:pl-2'>
      //          <label htmlFor='property-type' className='sr-only'>
      //            Property Type
      //          </label>
      //          <select
      //            id='property-type'
      //            className='w-full px-4 py-3 rounded-lg !bg-white text-gray-800 focus:outline-none focus:ring ring-1 ring-pink-300  focus:ring-blue-500 hover:shadow-lg '
      //            value={propertyType}
      //            onChange={(e) => setPropertyType(e.target.value)}
      //          >
      //            <option value='All'>All</option>
      //            <option value='Retail'>Retail</option>
      //            <option value='Office'>Office</option>
      //            <option value='Investment Sale'>Investment Sale</option>
      //            <option value='Rental'>Rental</option>
      //            <option value='Residential'>Residential</option>
      //            <option value='Commercial'>Commercial</option>
      //          </select>
      //        </div>
        
      //     <div className="mt-8 flex items-center justify-between text-sm/5">
      //       <Field className="flex items-center gap-3">
      //         <Checkbox
      //           name="remember-me"
      //           className={clsx(
      //             'group block size-4 rounded border border-transparent shadow ring-1 ring-black/10 focus:outline-none',
      //             'data-[checked]:bg-black data-[checked]:ring-black',
      //             'data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-black',
      //           )}
      //         >
      //           {/* <CheckIco className="fill-white opacity-0 group-data-[checked]:opacity-100" /> */}
      //         </Checkbox>
             
      //       </Field>
      //       <div className="-mt-4">
      //        <button
      //          type='submit'
      //          className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 
      //            rounded-lg bg-black text-white bg-custom-gradient hover:bg-black  focus:outline-none focus:ring focus:ring-blue-500'>
      //          Search Form
      //        </button>
      //       </div>
      //     </div>
         
      //   </form>
      //   <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
        
      //   </div>
      // </div>
  
   
  );
};

export default PropertySearchForm;

// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// // import Link from 'next/link';
// import { Field, Input } from '@headlessui/react';

// import clsx from 'clsx';
// // import { CheckIcon } from '@heroicons/react/20/solid';
// // import { Button } from '../button';

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
//         <div className="justify-center items-center w-full max-w-[85vw] overflow-hidden">
//           <form  onSubmit={handleSubmit} action="#" method="POST"
//                  className="md:inline-flex  sm:p-7 
//                     sm:p-11 mt-3 
//                     max-w-7xl w-full 
//                     md::inline-flex 
//                     flex-col 
//                     md:flex-row 
//                     items-center"
//                     >
//               <Field className="mt-8 space-y-3">
//                 {/* <Label className="text-sm/5 font-medium">Email</Label> */}
//                 <Input
//                   // required
//                   autoFocus
//                   value={location}
//                   type="text"
//                   name="location"
//                   className={clsx(
//                     'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10 px-4 py-3 ',
//                     'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
//                     'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
//                   )}
//                   placeholder='Enter Keywords or Location'
//                   //       className='w-full px-4 py-3 rounded-lg !bg-white text-gray-800 focus:outline-none focus:ring ring-1 ring-pink-300  focus:ring-blue-500 hover:shadow-lg '
              
//                       onChange={(e) => setLocation(e.target.value)}
//                 />
//               </Field>
//               <Field className="mt-8 space-y-3">
//                 <div className='w-full  md:pl-2'>
//               <label htmlFor='property-type' className='sr-only'>
//                 Property Type
//               </label>
//               <select
//                 id='property-type'
//                 className='w-full px-4 py-3 rounded-lg !bg-white text-gray-800 focus:outline-none focus:ring ring-1 ring-pink-300  focus:ring-blue-500 hover:shadow-lg '
//                 value={propertyType}
//                 onChange={(e) => setPropertyType(e.target.value)}
//               >
//                 <option value='All'>All</option>
//                 <option value='Retail'>Retail</option>
//                 <option value='Office'>Office</option>
//                 <option value='Investment Sale'>Investment Sale</option>
//                 <option value='Rental'>Rental</option>
//                 <option value='Residential'>Residential</option>
//                 <option value='Commercial'>Commercial</option>
//               </select>
//             </div>
//               </Field>
            
//               <div className="mt-8">
//          <button type='submit'
//                  className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 
//                   rounded-lg bg-black text-white bg-custom-gradient hover:bg-black  focus:outline-none focus:ring focus:ring-blue-500'
//             >
//               Search
//           </button>
              
//               </div>
//             </form>
//       </div>
    
   
//   );
// };

// export default PropertySearchForm;