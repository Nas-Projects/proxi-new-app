'use client';

import clsx from 'clsx';
import Hero11 from '../../public/assets/11.jpeg'
import hero12 from '../../public/assets/12.jpeg'
import hero13 from '../../public/assets/13.jpeg'
import SearchButtons from '@/components/SearchButtons';
import AboutProxy from '@/components/AboutProxy';
import PropertiesList from '@/components/propertiesComponents/PropertiesList';
import OurFocus from '@/components/propertiesComponents/OurFocus';
import WannaJoin from '@/components/propertiesComponents/wannaJoin';
import SectionBlockChain from '@/components/propertiesComponents/SectionBlockChain';
import SectionGetInTouch from '@/components/propertiesComponents/SectionGetInTouch';
import SectionTestimonial from '@/components/propertiesComponents/SectionTestimonial';
import SectionOurTeams from '@/components/propertiesComponents/SectionOurTeams';
import FeaturedListings from '@/components/propertiesComponents/FeaturedListings';
import Hero from '@/components/Hero';
import Link from 'next/link';

const Home = ({heroDetails}) => {

  return (
    <div className="relative w-full">

        <Hero 
        //  heroDetails={heroDetails}
          />

            <div className="absolute absolute top-[68vh] lg:top-[55vh] md:top-[70vh] xl:top-[72vh] z-20">
              <SearchButtons />
            </div>
            <AboutProxy/>
            <PropertiesList />
            <FeaturedListings />
            <SectionBlockChain/>
            <OurFocus/>
            <SectionTestimonial/>
            <SectionOurTeams />
            <WannaJoin/>
            <SectionGetInTouch/>

          <Link href="/contact">
            <div class="bg-pink-400  py-3 px-6 cursor-pointer rounded-l-md bottom-28 right-0 z-50 fixed grow2">
              <p class="text-white text-[20px] font-semibold">Contact Us</p>
            </div>
          </Link>
        {/* TURN THIS IN JOIN US HEADER x */}

        <div className="flex sm:px-16 px-6 hero justify-center">
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
                  real estate business.
                </h1>
              </div>
          </div>
          {/* <div className="absolute top-[780px] z-10">
            <SearchButtons />
          </div> */}
        </div>
    
    

    </div>
  );
};

export default Home;