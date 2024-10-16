"use client"

import { useState } from 'react';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function SectionContact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:Hello@proxyre.io?subject=Inquiry: ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(`${formData.message}\n\nContact Email: ${formData.email}\nPhone Number: ${formData.phoneNumber}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="relative isolate bg-[#534075] pb-24 px-2  max-[430px]:!max-w-[430px]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="!text-left text-center py-4 md:pt-8 md:pb-4 lg:pt-4 
                            lg:pb-[-4em] max-[1700px]:text-[63px] text-white uppercase">Get in touch</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Get in touch with Proxy Real Estate for expert guidance and seamless property solutions.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  110 Lexington Avenue, 2R
                  <br />
                  New York, NY 10016
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:+1 (347)-987-0210" className="hover:text-white">
                    +1 (347)-987-0210
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:Hello@proxyre.io" className="hover:text-white">
                    Hello@proxyre.io
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="px-6 max-[400px]:!max-w-[400px] lg:px-12 pb-24 md:pt-20 sm:pb-32 lg:px-8 lg:pt-44 lg:pn-24">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phoneNumber"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-custom-gradient
                px-5 py-4 text-center 
                text-sm font-semibold text-white shadow-sm
                hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

// export default function SectionContact() {

//   return (
//     <div className="relative isolate bg-[#534075]">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
//         <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
//           <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
//             <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
//               <svg
//                 aria-hidden="true"
//                 className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
//               >
//                 <defs>
//                   <pattern
//                     x="100%"
//                     y={-1}
//                     id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
//                     width={200}
//                     height={200}
//                     patternUnits="userSpaceOnUse"
//                   >
//                     <path d="M130 200V.5M.5 .5H200" fill="none" />
//                   </pattern>
//                 </defs>
//                 <svg x="100%" y={-1} className="overflow-visible fill-[#da1f88]">
//                   <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
//                 </svg>
//                 <rect fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" width="100%" height="100%" strokeWidth={0} />
//               </svg>
//               <div
//                 aria-hidden="true"
//                 className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
//               >
//                 <div
//                   style={{
//                     clipPath:
//                       'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
//                   }}
//                   className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#da1f88] to-[#da1f88] opacity-20"
//                 />
//               </div>
//             </div>
//             <h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
//             <p className="mt-6 text-lg leading-8 text-gray-300">
//                Get in touch with Proxy Real Estate for expert guidance and seamless property solutions.
//             </p>
//             <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
//               <div className="flex gap-x-4">
//                 <dt className="flex-none">
//                   <span className="sr-only">Address</span>
//                   <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
//                 </dt>
//                 <dd>
//                 110 Lexington Avenue, 2R
//                   <br />
//                 New York, NY 10016
//                 </dd>
//               </div>
//               <div className="flex gap-x-4">
//                 <dt className="flex-none">
//                   <span className="sr-only">Telephone</span>
//                   <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
//                 </dt>
//                 <dd>
//                   <a href="tel:+1 (347)-987-0210" className="hover:text-white">
//                     +1 (347)-987-0210
//                   </a>
//                 </dd>
//               </div>
//               <div className="flex gap-x-4">
//                 <dt className="flex-none">
//                   <span className="sr-only">Email</span>
//                   <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
//                 </dt>
//                 <dd>
//                   <a href="mailto:Hello@proxyre.io" className="hover:text-white">
//                      Hello@proxyre.io
//                   </a>
//                 </dd>
//               </div>
//             </dl>
//           </div>
//         </div>
//         <form  className="px-12 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
//           <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
//             <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//               <div>
//                 <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
//                   First name
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     id="first-name"
//                     name="first-name"
//                     type="text"
//                     autoComplete="given-name"
//                     className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
//                   Last name
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     id="last-name"
//                     name="last-name"
//                     type="text"
//                     autoComplete="family-name"
//                     className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
//                   Email
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
//                   Phone number
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     id="phone-number"
//                     name="phone-number"
//                     type="tel"
//                     autoComplete="tel"
//                     className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
//                   Message
//                 </label>
//                 <div className="mt-2.5">
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={4}
//                     className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                     defaultValue={''}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8 flex justify-end">
//               <button
//                 type="submit"
//                 className="rounded-md bg-custom-gradien px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//               >
//                 Send message
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }
