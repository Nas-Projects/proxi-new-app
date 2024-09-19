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
    <section className="relative w-full">
      <section>
  {/* banner section */}
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
  {/* pinned select area  */}
  {/* <div className="container mx-[10vw] mt-30 4xl:-mt-65px relative z-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30px lg:gap-4 xl:gap-30px 
    py-10 px-25px md:p-10 shadow-box-shadow-1 border border-border-color-1 bg-white">
      <div>
        <select
          className="selectize"
          style={{ opacity: 0, width: 0, padding: 0, height: 0 }}
        >
          <option value="Choose Area" data-display="Select">
            Choose Area
          </option>
          <option value="Chicago">Chicago</option>
          <option value="London">London</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="New York">New York</option>
          <option value="New Jersey">New Jersey</option>
        </select>
        <div className="nice-select selectize  " tabIndex={0}>
          <span className="current">Choose Area</span>
          <div className="nice-select-dropdown">
            <ul className="list">
              <li data-value="Choose Area" className="option selected null">
                Choose Area
              </li>
              <li data-value="Chicago" className="option null">
                Chicago
              </li>
              <li data-value="London" className="option null">
                London
              </li>
              <li data-value="Los Angeles" className="option null">
                Los Angeles
              </li>
              <li data-value="New York" className="option null">
                New York
              </li>
              <li data-value="New Jersey" className="option null">
                New Jersey
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <select
          className="selectize"
          style={{ opacity: 0, width: 0, padding: 0, height: 0 }}
        >
          <option data-display="Select">Property Status</option>
          <option>Open house</option>
          <option>Rent</option>
          <option>Sale</option>
          <option>Sold</option>
        </select>
        <div className="nice-select selectize  " tabIndex={0}>
          <span className="current">Property Status</span>
          <div className="nice-select-dropdown">
            <ul className="list">
              <li data-value="Property Status" className="option selected null">
                Property Status
              </li>
              <li data-value="Open house" className="option null">
                Open house
              </li>
              <li data-value="Rent" className="option null">
                Rent
              </li>
              <li data-value="Sale" className="option null">
                Sale
              </li>
              <li data-value="Sold" className="option null">
                Sold
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <select
          className="selectize"
          style={{ opacity: 0, width: 0, padding: 0, height: 0 }}
        >
          <option data-display="Select">Property Type</option>
          <option>Apartment</option>
          <option>Co-op</option>
          <option>Condo</option>
          <option>Single Family Home</option>
        </select>
        <div className="nice-select selectize  " tabIndex={0}>
          <span className="current">Property Type</span>
          <div className="nice-select-dropdown">
            <ul className="list">
              <li data-value="Property Type" className="option selected null">
                Property Type
              </li>
              <li data-value="Apartment" className="option null">
                Apartment
              </li>
              <li data-value="Co-op" className="option null">
                Co-op
              </li>
              <li data-value="Condo" className="option null">
                Condo
              </li>
              <li data-value="Single Family Home" className="option null">
                Single Family Home
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
          <span className="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
          <a
            href="shop-right-sidebar.html"
            className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
          >
            Find Now
          </a>
        </h5>
      </div>
    </div>
  </div> */}
  {/* ------------- */}
  <div className="hidden  hero hero-primary overflow-hidden relative z-10">
  {/* Swiper */}
  <div className="hero-slider-container swiper-container relative">
    <div className="swiper primary-slider swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
      <div
        className="swiper-wrapper"
        id="swiper-wrapper-66558b2f676a365c"
        aria-live="polite"
      >
        {/* Hero  1 */}
        <div
          className="swiper-slide relative z-0 py-100px 4xl:min-h-[780px] overflow-hidden flex items-center bg-section-bg-1 swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
          style={{
            width: '100%',
            opacity: 1,
            transform: "translate3d(0px, 0px, 0px)"
          }}
          role="group"
          aria-label="1 / 2"
          data-swiper-slide-index={0}
        >
          <div className="container w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-30px">
              {/* banner Left */}
              <div className="slide-animation">
                <p className="text-sm md:text-15px lg:text-base text-heading-color font-bold mb-5 animated">
                  <i className="fas fa-home text-secondary-color" />
                  Real Estate Agency
                </p>
                <h1 class="text-black md:text-[82px] ss:text-[70px]  text-[52px] md:leading-[90px] fade-in-from-bottom ss:leading-[70px] leading-[55px] font-black tracking-tight">
                  <span class=""><br class="ss:flex hidden"/>Reinventing the</span> <br class="ss:flex hidden"/>real estate business.</h1>
                <h1 className="text-3xl md:text-40px lg:text-50px 4xl:text-65px leading-30px md:leading-10 lg:leading-50px 4xl:leading-65px font-bold mb-5 animated">
                  <span className="leading-30px md:leading-10 lg:leading-50px 4xl:leading-65px">
                    Find Your Dream <br />
                    House By Us
                  </span>
                </h1>
                <p className="text-sm lg:text-base mb-5 max-w-450px pl-15px xl:pl-30px border-l border-border-color-14 animated">
                  <span className="leading-25px lg:leading-1.8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </span>
                </p>
                <div className="mt-5 lg:mt-10 mb-30px xl:mb-0 animated">
                  <h5 className="capitalize text-sm md:text-base text-white relative group whitespace-nowrap font-normal transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block mr-15px">
                    <span className="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-primary-color z-1 group-hover:w-0 transition-all duration-300" />
                    <a
                      href="about.html"
                      className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
                    >
                      Make An Enquiry
                    </a>
                  </h5>
                  <div className="inline-block">
                    <div>
                      <a
                        className="glightbox w-60px h-60px text-center text-sm lg:text-base text-secondary-color shadow-box-shadow-2 rounded-full bg-white flex items-center justify-center"
                        href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0&controls=1"
                        data-glightbox="type: video;"
                      >
                        <i className="icon-play ltn__secondary-color" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* banner right */}
              <div className="4xl:absolute right-[60px] xl:right-[150px] bottom-[100px] 4xl:h-[70%] 4xl:w-[45%]">
                <img
                  className="4xl:h-full 4xl:ml-auto"
                  src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/slider/21.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Hero  2 */}
        <div
          className="swiper-slide relative z-0 py-100px 4xl:min-h-[780px] overflow-hidden flex items-center bg-section-bg-1 swiper-slide-next"
          role="group"
          aria-label="2 / 2"
          style={{
            width: '100%',
            opacity: 0,
            transform: "translate3d(-1496px, 0px, 0px)"
          }}
          data-swiper-slide-index={1}
        >
          <div className="container w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* banner Left */}
              <div className="lg:col-start-2 lg:col-span-1 flex flex-col items-end text-end slide-animation">
                <p className="text-sm md:text-15px lg:text-base text-heading-color font-bold mb-5 animated">
                  <i className="fas fa-home text-secondary-color" />
                  Real Estate Agency
                </p>
                <h1 className="text-3xl md:text-40px lg:text-50px 4xl:text-65px leading-30px md:leading-10 lg:leading-50px 4xl:leading-65px font-bold mb-5 animated">
                  <span className="leading-30px md:leading-10 lg:leading-50px 4xl:leading-65px">
                    The Right Place <br />
                    of House Finding
                  </span>
                </h1>
                <p className="text-sm lg:text-base mb-5 max-w-450px pr-15px xl:pr-30px border-r border-border-color-14 animated">
                  <span className="leading-25px lg:leading-1.8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </span>
                </p>
                <div className="lg:mt-5 mb-30px xl:mb-0 animated">
                  <h5 className="capitalize text-sm md:text-base text-white relative group whitespace-nowrap font-normal transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block mr-15px">
                    <span className="inline-block absolute top-0 right-0 w-full h-full bg-custom-gradient group-hover:bg-primary-color z-1 group-hover:w-0 transition-all duration-300" />
                    <a
                      href="service.html"
                      className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
                    >
                      OUR SERVICES
                    </a>
                  </h5>
                  <h5 className="capitalize inline-block text-sm md:text-base text-primary-color hover:text-white hover:bg-primary-color relative group whitespace-nowrap font-normal transition-all duration-300 shadow-box-shadow-3">
                    <span className="inline-block absolute top-0 right-0 w-full h-full bg-white group-hover:bg-secondary-color z-1 group-hover:w-0 transition-all duration-300" />
                    <a
                      href="about.html"
                      className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-white leading-23px"
                    >
                      LEARN MORE
                    </a>
                  </h5>
                </div>
              </div>
              {/* banner right */}
              <div className="lg:row-start-1 lg:row-span-1 lg:col-start-1 lg:col-span-1">
                <div className="4xl:absolute left-[60px] xl:left-[150px] bottom-[100px] 4xl:h-[70%] 4xl:w-[45%]">
                  <img
                    className="4xl:h-full 4xl:ml-auto"
                    src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/slider/21.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <div
          className="swiper-button-next"
          tabIndex={0}
          role="button"
          aria-label="Next slide"
          aria-controls="swiper-wrapper-66558b2f676a365c"
        >
          <i className="fas fa-arrow-right" />
        </div>
        <div
          className="swiper-button-prev"
          tabIndex={0}
          role="button"
          aria-label="Previous slide"
          aria-controls="swiper-wrapper-66558b2f676a365c"
        >
          <i className="fas fa-arrow-left" />
        </div>
      </div>
      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
        <span
          className="swiper-pagination-bullet swiper-pagination-bullet-active"
          tabIndex={0}
          role="button"
          aria-label="Go to slide 1"
          aria-current="true"
        />
        <span
          className="swiper-pagination-bullet"
          tabIndex={0}
          role="button"
          aria-label="Go to slide 2"
        />
      </div>
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      />
    </div>
  </div>
</div>

</section>
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
          <div className="absolute top-[780px] z-10">
            <SearchButtons />
          </div>
        </div>
    
    

    </section>
  );
};

export default Home;