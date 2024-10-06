'use client'

import { useEffect, useState } from 'react';
import { urlFor } from "@/sanity/lib/image.js";
import BlurImage from './blur-image';

export default function AboutPageComponent({aboutData}) {

  console.log("aboutDataSections", aboutData);

  const [section1, setSection1] = useState(null);
  const [section2, setSection2] = useState(null);
  const [section3, setSection3] = useState(null);
  const [section4, setSection4] = useState(null);
  const [section5, setSection5] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        if (aboutData === null) {
          // setFetchResults("No valid agents found");
          console.log("ABOUT DATA NOT found");
        }
        else {
          let aboutSections = aboutData.sections
            console.log("ABOUT_PAGE_DATA_TO_SECTION:", aboutData);
      
            // Set each section from the sections array
            setSection1(aboutSections[0]);
            setSection2(aboutSections[1]);
            setSection3(aboutSections[2]);
            setSection4(aboutSections[3]);
            setSection5(aboutSections[4]);
      
            setLoading(false);
          
        }

        }, []);

  // If no data is found, return a fallback UI
  // if (!section1) {
  //   return <div>No data found.</div>;
  // }



  const firstSentence = "Noun /ˈprɑk·si/: The agency, office, or function of representing another person.";
  // Noun /&apos;prak·si/ the agency, office, person or function who is given 
  // the authority or power to act for another.


  const applyColorToText = (text, target) => {
    const parts = text.split(target);
    return (
      <>
        {parts[0]}
        <span  className="!text-custom-gradient" style={{ color: "#ec687f", fontWeight: "bold" }}>{target}</span>
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
       <BlurImage
            src="/beams-basic.png"
            alt=""
            height={1000}
            width={1000}
            placeholder="blur"
            className="sr-only md:not-sr-only md:!absolute md:mt-[4em] md:left-1/2  -ml-[39rem]  w-full lg:w-[113.125rem] max-w-none"
            />
      <main className="isolate">
        {/* Hero section */}

        {/* ------SECTION 1 ------- */}
        <div className="mt-4 lg:-mt-10 relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-12 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 lg:py-32 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="pt-8 max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
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
        {/* <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
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
        </div> */}


        {/* ------SECTION 2 ------- */}
        {/* Content section */}
        <div id="section2" className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="group lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl group-hover:text-pink-600">
                  {section2.title}</h2>
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
      
        <div className="relative isolate -z-10 -mt-8 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-pink-600 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl group-hover:text-pink-600">
                {section3.title}
              </h2>
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
        <div className="mt-12 overflow-hidden sm:mt-40 lg:mt-[4em] ">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-5xl grid-cols-1  lg:gflex gap-x-12 gap-y-16   lg:gap-y-8">
              <div className="grouppx-4 lg:w-full xl:max-w-[90vw] lg:pb-8 xl:px-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl group-hover:text-pink-600">
                  {section4.title}</h2>
                <p className="mt-6 text-xl leading-8 text-gray-600 py-4 lg:pb-8 ">
                 {section4.description}
                </p>
                {/* <p className="mt-6 text-base leading-7 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
                </p> */}
              </div>
              <div className="lg:-mt-12 xl:-mt-24 flex gap-6 sm:gap-8 ">
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

        {/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
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
        
        </div> */}

        {/* Content section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className=" lg:max-w-none lg:inline-flex  gap-4 lg:gap-x-10">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {section5.title} 
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-800">
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
              <p className="-mt-8 divide-y text-xl leading-8 text-gray-600 py-4 lg:pb-8 divide-gray-100">
                {section5.description}
                
              </p>
              <div className="mt-2  border-t border-gray-100 pt-8">
                <a href="/properties/search-results?location=&propertyType=sale" 
                   className="text-sm  bg-custom-gradient px-5 py-4 text-white font-semibold leading-6 hover:text-pink-600 hover:bg-white">
                  View all sales <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            
            </div>
          </div>
        </div>
                    {/* Logo cloud */}
     <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8 mb-32 ">
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




export const timeline = [
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
