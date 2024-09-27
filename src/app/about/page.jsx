'use client'

import { useEffect, useState } from 'react';
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image.js";

// export const revalidate = 10; // Revalidate the data every 10 seconds

// Fetch data with getStaticProps
// export async function getStaticProps() {
//   const query = groq`
//   *[_type == "aboutPage"] {
//     ...,
//   }
//   `;
//   const aboutUsData = await sanityClient.fetch(query);

//   return {
//     props: {
//       aboutUsData: aboutUsData.length > 0 ? aboutUsData[0] : null,
//     },
//     revalidate: 10, // Optional: Revalidate every 10 seconds
//   };
// }
export async function getAbout() {
  const query = groq`
  *[_type == "aboutPage"] {
    ...,
  }
`;
  const aboutData = await sanityClient.fetch(query);
  console.log("aboutData", aboutData);
  return aboutData;
}

export default function AboutPage() {
  const [section1, setSection1] = useState(null);
  const [section2, setSection2] = useState(null);
  const [section3, setSection3] = useState(null);
  const [section4, setSection4] = useState(null);
  const [section5, setSection5] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const aboutData = await getAbout();
        console.log("ABOUT_FETCHED-->", aboutData);
        
        if (!aboutData.length) {
          // setFetchResults("No valid agents found");
          console.log("ABOUT DATA NOT found");
        }
        else {
          let aboutDataSections = aboutData[0]
            console.log("ABOUT_PAGE_DATA_TO_SECTION:", aboutData);
      
            // Set each section from the sections array
            setSection1(aboutDataSections.sections[0]);
            setSection2(aboutDataSections.sections[1]);
            setSection3(aboutDataSections.sections[2]);
            setSection4(aboutDataSections.sections[3]);
            setSection5(aboutDataSections.sections[4]);
      
            setLoading(false);
          
        }
       
        
      } catch (error) {
        console.error('Error fetching agents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  // If no data is found, return a fallback UI
  // if (!section1) {
  //   return <div>No data found.</div>;
  // }



  const firstSentence = "Proxy – noun /ˈprɑk·si/: The agency, office, or function of representing another person.";


  const applyColorToText = (text, target) => {
    const parts = text.split(target);
    return (
      <>
        {parts[0]}
        <span style={{ color: "#ec687f", fontWeight: "bold" }}>{target}</span>
        {parts[1]}
      </>
    );
  }

  useEffect(() => {
    if (section1) {
      const timeout = setTimeout(() => {
        console.log("Applying color effect to the text");
      }, 1500);

      return () => clearTimeout(timeout); // Cleanup on unmount
    }
  }, [section1]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!section1) {
    return <div>No data found.</div>; // Return a "no data found" message if section1 is empty
  }


  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}

        {/* ------SECTION 1 ------- */}
        <div className=" -mt-4 lg:-mt-10 relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-12 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 lg:py-32 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              {applyColorToText(firstSentence, "/ˈprɑk·si/:")}
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                 {section1.description}
                </p>
              </div>
              <img
                alt=""
                src={urlFor(section1.image).url()}
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Timeline section */}
        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-pink-600"
                >
                  <svg viewBox="0 0 4 4" aria-hidden="true"
                   className="mr-4 h-1 w-1 flex-none">
                    <circle r={2} cx={2} cy={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    aria-hidden="true"
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* ------SECTION 2 ------- */}
        {/* Content section */}
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="group lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl group-hover:text-pink-600">{section2.title}</h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                 {section2.description}
                </p>
                {/* <p className="mt-6 text-base leading-7 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
                </p> */}
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt=""
                    src={urlFor(section2.image).url()}
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      alt=""
                      src="https://res.cloudinary.com/da6wkcnok/images/w_600,h_400,c_scale/f_auto,q_auto/v1661867877/iStock-961865680/iStock-961865680.jpg?_i=AA"
                      className="aspect-[4/3] w-[24rem]  xl:w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src="https://www.indianapolispropertymanagement.com/hubfs/Blog%20Images/Happy%20tenants%20talking%20to%20a%20landlord.jpg"
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  {/* <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ------SECTION 3 ------- */}
      
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-pink-600 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                {section3.title}
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                 {section3.description}
                </p>
              </div>
              <img
                alt=""
                src={urlFor(section3.image).url()}
                className="lg:-mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>


        {/* ------SECTION 4------- */}
        <div className="mt-12 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-5xl grid-cols-1  lg:gflex gap-x-12 gap-y-16   lg:gap-y-8">
              <div className="group lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl group-hover:text-pink-600">
                  {section4.title}</h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                 {section4.description}
                </p>
                {/* <p className="mt-6 text-base leading-7 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
                </p> */}
              </div>
              <div className="lg:-mt-4 xl:-mt-24 flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt=""
                    src="https://media.istockphoto.com/id/1348328425/photo/looking-up-a-reflections-on-glass-covered-corporate-building.jpg?s=1024x1024&w=is&k=20&c=q-QUl89gt219X0nfhWF96Yq0BhY2Npc6h2REas4fcGg="
                
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      alt=""
                      src={urlFor(section4.image).url()}
                      className="aspect-[4/3] w-[24rem]  xl:w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------SECTION 5 ------- */}

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
             {section4.title}
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
             {section5.description}
            </p>
          </div>

          <img
            alt="section 5 image"
            src={urlFor(section5.image).url()}
            className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
          />
        
        </div>

        {/* Content section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className=" lg:max-w-none lg:inline-flex  gap-4 lg:gap-x-10">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {section5.title} 
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
              Proxy simplifies residential sales with blockchain technology, 
              ensuring secure, transparent, and efficient property transactions
              </p>
              <img
                alt="section 5 image"
                src={urlFor(section5.image).url()}
                className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              />
            </div>
            <div className="flex-block">
              <div className="flex w-full mt-4 lg:mt-[10em] lg:pt-[4em] lg:max-w-xl lg:flex-auto !block">
              <h3 className="sr-only">Residential sale</h3>
              <ul className="-my-8 divide-y divide-gray-100">
                {section5.description}
                
              </ul>
              <div className="mt-8  border-t border-gray-100 pt-8">
                <a href="/properties/search-results?location=&propertyType=sale" 
                className="text-sm font-semibold leading-6 text-pink-600 hover:text-indigo-500">
                  View all sales <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            
            </div>
          </div>
        </div>
                    {/* Logo cloud */}
     <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8 mb-24 ">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our customers love us
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Our customers trust Proxy for its seamless real estate experience, powered by innovative technology. We prioritize transparency and efficiency, making every transaction smooth and secure.
            </p>
            <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
              {/* <img
                alt="Transistor"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <img
                alt="Reform"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <img
                alt="Tuple"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <img
                alt="SavvyCal"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              />
              <img
                alt="Statamic"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              /> */}
            </div>
            <div aria-hidden="true" className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl">
              <div
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              />
            </div>
          </div>
        </div>

      </main>
    
    </div>
  )
}




const timeline = [
  {
    name: 'Founded company',
    description:
      'roxy was founded with the vision to revolutionize real estate through cutting-edge technology and blockchain. With a focus on transparency and efficiency, Proxy set out to reshape the way real estate transactions are done.',
    date: 'Aug 2024',
    dateTime: '2024-08',
  },
  {
    name: 'Secured $65m in funding',
    description:
      'Proxy secured $65 million in funding to further its mission of leveraging blockchain to streamline real estate processes. This funding enabled rapid development of its platform and expansion into new markets.',
    date: 'Dec 2024',
    dateTime: '2024-12',
  },
  {
    name: 'Released beta',
    description:
      'The beta version of Proxy’s platform was released, offering a seamless experience for buyers, sellers, and investors. It featured real-time property insights, smart contracts, and secure, transparent transactions powered by blockchain.',
    date: 'Feb 2025',
    dateTime: '2022-02',
  },
  {
    name: 'Global launch of product',
    description:
      'Proxy launched globally, introducing its innovative real estate platform to the world. The platform’s use of blockchain technology ensured unparalleled security, transparency, and speed, redefining the real estate experience.',
    date: 'Dec 2025',
    dateTime: '2025-12',
  },
]
// const jobOpenings = [
//   {
//     id: 1,
//     role: 'Full-time designer',
//     href: '#',
//     description:
//       'Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.',
//     salary: '$75,000 USD',
//     location: 'San Francisco, CA',
//   },
//   {
//     id: 2,
//     role: 'Laravel developer',
//     href: '#',
//     description:
//       'Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.',
//     salary: '$125,000 USD',
//     location: 'San Francisco, CA',
//   },
//   {
//     id: 3,
//     role: 'React Native developer',
//     href: '#',
//     description:
//       'Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.',
//     salary: '$105,000 USD',
//     location: 'San Francisco, CA',
//   },
// ]
// const footerNavigation = {
//   solutions: [
//     { name: 'Marketing', href: '#' },
//     { name: 'Analytics', href: '#' },
//     { name: 'Commerce', href: '#' },
//     { name: 'Insights', href: '#' },
//   ],
//   support: [
//     { name: 'Pricing', href: '#' },
//     { name: 'Documentation', href: '#' },
//     { name: 'Guides', href: '#' },
//     { name: 'API Status', href: '#' },
//   ],
//   company: [
//     { name: 'About', href: '#' },
//     { name: 'Blog', href: '#' },
//     { name: 'Jobs', href: '#' },
//     { name: 'Press', href: '#' },
//     { name: 'Partners', href: '#' },
//   ],
//   legal: [
//     { name: 'Claim', href: '#' },
//     { name: 'Privacy', href: '#' },
//     { name: 'Terms', href: '#' },
//   ],
//   social: [
//     {
//       name: 'Facebook',
//       href: '#',
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: 'Instagram',
//       href: '#',
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: 'X',
//       href: '#',
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
//         </svg>
//       ),
//     },
//     {
//       name: 'GitHub',
//       href: '#',
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: 'YouTube',
//       href: '#',
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//   ],
// }
