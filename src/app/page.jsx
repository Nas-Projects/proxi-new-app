'use server';
// import { Gradient } from '@/components/gradient'
import { Container } from '@/components/Container'
// import clsx from 'clsx';
// import Hero11 from '../../public/assets/11.jpeg'
// import hero12 from '../../public/assets/12.jpeg'
// import hero13 from '../../public/assets/13.jpeg'
import SearchButtons from '@/components/SearchButtons';
import AboutProxy from '@/components/AboutProxy';
// import PropertiesList from '@/components/propertiesComponents/PropertiesList';
import PropertiesListSectionUI from '@/components/propertiesComponents/PropertiesListSectionUI';
import OurValues from '@/components/propertiesComponents/OurValues';
// import OurFocus from '@/components/propertiesComponents/OurFocus';
import SectionContact from '@/components/propertiesComponents/SectionContact';
import SectionBlockChain from '@/components/propertiesComponents/SectionBlockChain';
import SectionJoin from '@/components/propertiesComponents/SectionJoin';
// import SectionTestimonial from '@/components/propertiesComponents/SectionTestimonial';
// import SectionServices from '@/components/propertiesComponents/SectionServices';
// import SectionOurTeams from '@/components/propertiesComponents/SectionOurTeams';
// import FeaturedListings from '@/components/propertiesComponents/FeaturedListings';
// import ProperTiesForSale from '@/components/propertiesComponents/ProperTiesForSale';
import Hero from '@/components/Hero';
import Link from 'next/link';
import Spinner from '@/components/propertiesComponents/Spinner';
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { propertiesQuery } from "@/sanity/lib/queries";

async function Home({}){
  let loading = true 
  const properties = await sanityFetch({ query: propertiesQuery });
  try {
    if (properties === undefined || properties.length === 0) {
       throw new Error('Failed to get data');
       };
   } catch (error) {
       console.error(error);
   } finally {
       loading = false;
   }
//  return loading ? (
//    <Spinner />
//  ) : (
//    <PropertiesListSectionUI  properties={properties} total={totalItems}/>
//  );
  return ( 
  <div className="relative !bg-white min-h-[calc(100vh_-_216px)] text-sm leading-6">
     {/* <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" /> */}
       <Container className="relative">
    <> {loading ? (
      <Spinner />
      ) :(
   
     <div className="isolate flex min-h-dvh items-center justify-center t">
      <div className="relative w-full ">

          <Hero   //  heroDetails={heroDetails}
          />
           {/* <div className="mx-auto lg:px-[10%] bg-transparent  absolute absolute top-[89vh] lg:top-[68vh] lg:mx-auto md:top-[70vh] xl:top-[67vh]"></div> */}
           <div className="mt-64 md:mt-96 relative px-0.5 lg:mt-[-0em] xl:lg:mt-[-0vh] mx-auto lg:px-[10%] bg-transparent relative relative ">
           <SearchButtons />
           </div>
           {/* <ProperTiesForSale properties={properties}/> */}
           <AboutProxy/>
           <SectionBlockChain/>
           <PropertiesListSectionUI properties={properties}/>
           {/* <FeaturedListings /> */}
           <OurValues/> 
           {/* <OurFocus/> */}
            {/* <SectionTestimonial/> */}
            {/* <SectionServices/> */}
            {/* <SectionOurTeams /> */}
          

          <Link href="/contact">
            <div class="bg-pink-400 py-3 px-6 cursor-pointer rounded-l-md bottom-10 right-0 z-50 fixed grow2">
              <p class="text-white text-[20px] font-semibold">Contact Us</p>
            </div>
          </Link>
        {/* TURN THIS IN JOIN US HEADER x */}

        {/* <div className="flex sm:px-16 px-6 hero justify-center hidden lg:flex">
          <div className='justify-center w-full mx-auto relative
            max-w-[86rem] flex md:pt-12 ss:pt-20 pt-20' 
            >
              <div className="flex flex-col w-full justify-center">
                <h1 className='text-black md:text-[82px] ss:text-[70px] 
                text-[52px] md:leading-[90px] fade-in-from-bottom
                ss:leading-[70px] leading-[55px] font-black tracking-tight'>
                  proxy- <span className="text-custom-gradient">
                  <br className="ss:flex hidden"></br>
                  reinventing the </span> <br className="ss:flex hidden"></br>
                  real estate busindess.
                </h1>
              </div>
          </div>
           <div className="absolute top-[780px] z-10">
            <SearchButtons />
          </div> 
        </div> */}
    
    

        </div>
      </div>)

   } </>
 </Container>
 <SectionJoin/>
  <SectionContact/>
        
 </div>
 )

};

export default Home;