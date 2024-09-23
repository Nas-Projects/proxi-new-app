import Link from "next/link";
import HeroSearchForm from "./propertiesComponents/HeroSearchForm";

export default function Hero() {
    return   <div className="hero hero-primary overflow-hidden relative z-0">
   
    <div className="hero-slider-container swiper-container relative">
      <div className="primary-slider home-3 swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
        <div
          className="swiper-wrapper"
          id="swiper-wrapper-510e237465d3af044"
          aria-live="polite"
        >
          {/* Hero  1 */}
          <div   className="swiper-slide relative z-0 pt-[6vh]  md:pt-24 pb-100px 
            4xl:h-screen 4xl:min-h-[800px] overflow-hidden flex flex-col 
            justify-center bg-cover bg-center bg-no-repeat swiper-slide-visible 
            swiper-slide-fully-visible swiper-slide-active"
            style={{
              width: '100%',
              opacity: 1,
              transform: "translate3d(0px, 0px, 0px)"
            }}
            role="group"
            aria-label="1 / 3"
            data-swiper-slide-index={0}
          >
            <div className="absolute top-0 left-0 w-full h-full  z-0" />
           
           <div className="flex-block lg:grid  grid-cols-2">
            <div className="container w-full relative z-xl !text-left">
              <div className="-mt-[24">
               <div className="slide-animation flex flex-col justify-center xl:mx-3 px-6 lg:px-10  ">
                <div className="logo-agnecy ml-10 !text-left">
                   <h1 className="text-custom-gradient 
                    md:text-[82px] ss:text-[70px] text-[52px] md:leading-[90px] fade-in-from-bottom 
                    ss:leading-[70px] leading-[55px] mb-4 font-black
                    tracking-tight !text-left">
                    PROXY 
                    </h1>
                  <p className="mainText -mt-5 font-bold  text-sm md:text-15px lg:text-base 
                    xl:text-xl font-bold mb-5 text-white animated font-bold">
                    <i className="fas fa-home" />
                    Real Estate Agency
                </p>
                </div>
             
              <div className="px-4 py-12 lg:py-6 rounded-xl -mt-10">
                <div className="max-w-3xl mx-4">
                  <h1 class="text-black md:text-[82px] ss:text-[70px] text-[52px] 
                  md:leading-[90px] fade-in-from-bottom ss:leading-[70px] 
                  leading-[55px] maintext tracking-tight">
                     <span className="">
                        <br class="ss:flex hidden"/>Reinventing</span> 
                        <br/>
                     <br class="ss:flex hidden"/><span className="text-slate-600">real estate<span className='text-slate-600'> business.</span></span></h1>
                      <div className="slogan-cta pt-4">
                       <h1 className="mt-4 text-2xl md:text-40px lg:text-50px 4xl:text-65px leading-30px md:leading-10 
                           lg:leading-50px 4xl:leading-65px font-bold mb-5 animated"> <span className="leading-30px md:leading-10 lg:leading-50px 
                              xl:text-4xl text-gay-300">
                            Find Your Dream
                            <br />
                        </span>
                    </h1>
                    <p className="-mt-4 !text-slate-600 max-w-2xl text-sm lg:text-base  mb-5 max-w-450px animated xl:text-2xl">
                      <span className="leading-25px lg:leading-1.8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore.
                     </span>
                    </p>
          <div id="HERO-CTA-BUTTONS" className="lg:-mt-12  py-4 lg:py-12 z-20 ">
                    <div className="!flex grid-cols-2 gap-x-4 ">
                    <Link href="/properties">
                
                        <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                            <span className="inline-block absolute top-0 right-0 w-full h-full bg-custom-gradient  group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                             <a  href="/properties"  className="relative z-10 px-5 py-4 px-6  group-hover:text-heading-color leading-23px" >
                              View properties
                           </a>
                        </h5>
                  
                    </Link>
                  <div>
                <Link href="/contact">
                    <h5 className="uppercase text-sm md:text-base text-white relative group 
                        whitespace-nowrap font-normal mb-0 transition-all duration-300 border 
                              border-black !text-black  hover:border-heading-color inline-block">
                    <span className="inline-block absolute top-0 right-0 w-full h-full bg-white !text-black 
                           group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                    <a href="/contact"
                        className="relative  z-10 relative z-10 px-5 py-4 px-8  group-hover:text-heading-color leading-23px lg:py-17px group-hover:text-heading-color leading-23px" >
                        Contact Us
                        </a>
                        </h5>
                    </Link>
                    </div>
                    </div>
                </div>
                        {/* <h5 class="bg-custom-gradient z-30 capitalize text-sm md:text-base text-white relative group whitespace-nowrap font-normal transition-all duration-300 border hover:bg-white border-secondary-color hover:border-heading-color inline-block mr-15px">
                        <span class="inline-block absolute top-0 right-0 w-full h-fullbg-custom-gradient  group-hover:bg-primary-color z-1 group-hover:w-0 transition-all duration-300"></span>
                        <a href="about.html" class="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px">Make An Enquiry</a>
                      </h5> */}
                    </div>       
                  </div>
                    
                   
                  </div>
                  </div>
                
                </div>
              </div>
                 <div className="mx-4  mt-10 lg:mt-0 search-right  max-w-[95vw] container w-full relative z-xl">
                  <HeroSearchForm/>
                </div>
            </div>


          </div>
         {/* -----------OTHERE HEROS HERE */}
        </div>
        <div className="hidden xl:block">
          <div
            className="swiper-button-next !text-white"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-510e237465d3af044"
          >
            <i className="fas fa-arrow-right" />
          </div>
          <div
            className="swiper-button-prev !text-white"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-510e237465d3af044"
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
          <span
            className="swiper-pagination-bullet"
            tabIndex={0}
            role="button"
            aria-label="Go to slide 3"
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

}