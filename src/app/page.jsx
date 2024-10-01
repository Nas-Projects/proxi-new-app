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
import SectionTestimonial from '@/components/propertiesComponents/SectionTestimonial';
import SectionOurTeams from '@/components/propertiesComponents/SectionOurTeams';
// import FeaturedListings from '@/components/propertiesComponents/FeaturedListings';
import ProperTiesForSale from '@/components/propertiesComponents/ProperTiesForSale';
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
  <div className="relative !bg-white">
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
          <div className="mt-44 relative px-0.5 lg:mt-[-24em] xl:lg:mt-[-0vh] mx-auto lg:px-[10%] bg-transparent relative relative ">
          <SearchButtons />
          </div>
          <ProperTiesForSale properties={properties}/>
          <AboutProxy/>
           <PropertiesListSectionUI properties={properties}/>
          {/* <FeaturedListings /> */}
          <SectionBlockChain/>
          <OurValues/> 
          {/* <OurFocus/> */}
          <SectionTestimonial/>
          <div className="section buy-service">
           <div className="large w-container">
            <div
            data-w-id="b613acd8-a7a8-18c7-bb65-e5559fefd061"
            className="buy-service-wrap"
            style={{ opacity: 1 }}>
            <div className="buy-service-left bg-custom-gradient">
              <div className="block ">
                <h2 className='!text-white'>Proxy landlord & brokers&apos; service</h2>
                <div className="space-16" />
                <p className="paragraph-big">
                Proxy Landlord & Brokers&apos; Service connects property owners with qualified tenants and expert brokers, streamlining the rental process. Our dedicated team ensures a seamless experience, maximizing returns while minimizing hassle.
                </p>
              </div>
              <div className="buy-service-separator">
                <p className="separator-text">
                  What&apos;s included? Absolutely everything.
                </p>
                <div className="separator-line" />
              </div>
              <div className="checklist-wrap">
                <div className="checklist">
                  <div className="checklist-item">
                    <div className="checklist-icon">
                      <img
                        src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2025720557_Check.svg"
                        loading="lazy"
                        alt=""
                        className="image"
                      />
                    </div>
                    <p>We arrange the valuation report</p>
                  </div>
                  <div className="checklist-item">
                    <div className="checklist-icon">
                      <img
                        src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2025720557_Check.svg"
                        loading="lazy"
                        alt=""
                        className="image"
                      />
                    </div>
                    <p>We check your financial situation</p>
                  </div>
                  <div className="checklist-item">
                    <div className="checklist-icon">
                      <img
                        src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2025720557_Check.svg"
                        loading="lazy"
                        alt=""
                        className="image"
                      />
                    </div>
                    <p>We take care of the negotiations</p>
                  </div>
                  <div className="checklist-item">
                    <div className="checklist-icon">
                      <img
                        src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2025720557_Check.svg"
                        loading="lazy"
                        alt=""
                        className="image"
                      />
                    </div>
                    <p>We provide the building inspection</p>
                  </div>
                </div>
                <div className="checklist">
                  <div className="checklist-item">
                    <div className="checklist-icon">
                      <img
                        src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2025720557_Check.svg"
                        loading="lazy"
                        alt=""
                        className="image"
                      />
                    </div>
                    <p>We discuss your living requirements</p>
                  </div>
                  <div className="checklist-item">
                    <div className="checklist-icon">
                      <img
                        src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2025720557_Check.svg"
                        loading="lazy"
                        alt=""
                        className="image"
                      />
                    </div>
                    <p>We review the purchase agreement</p>
                  </div>
                  <div className="checklist-item">
                    <div className="checklist-icon">
                      <img
                        src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2025720557_Check.svg"
                        loading="lazy"
                        alt=""
                        className="image"
                      />
                    </div>
                    <p>We help you with the opening proposal</p>
                  </div>
                  <div className="checklist-item">
                    <div className="checklist-icon">
                      <img
                        src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def2025720557_Check.svg"
                        loading="lazy"
                        alt=""
                        className="image"
                      />
                    </div>
                    <p>You&apos;ll get free Proxy Realestate merch</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="buy-service-right !bg-[var(---agedBlack)]">
              <div className="block">
                <p>Starting from</p>
                <div className="space-10" />
                <h1 className="no-margin">$27</h1>
              </div>
              <div className="block ">
                <a href="#" className="cta large w-button bg-custom-gradient">
                  Speak with us - It&apos;s free
                </a>
                <div className="space-10" />
                <p className='py-4'>No commitment · Set up in minutes</p>
              </div>
            </div>
            </div>
           </div>
         </div>

            <SectionOurTeams />
            <SectionJoin/>
            <SectionContact/>
        

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
 </div>
 )

};

export default Home;