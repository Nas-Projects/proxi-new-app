// import Link from "next/link";
import HeroSearchForm from "./propertiesComponents/HeroSearchForm";
// import BlurImage from "./blur-image";
// import Image from "next/image";


export default function Hero() {
    return(<div className="!bg-white hero hero-primary lg:overflow-hidden relative">
      
    <div className="hero-slider-container swiper-container relative bg-white">
      <div className="primary-slider home-3 swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
        <div
          // className="swiper-wrapper"
          // id="swiper-wrapper-510e237465d3af044"
          aria-live="polite"
        >  
          {/* <Image
          src="/beams-basic.png"
            alt=""
            height={1000}
            width={1000}
            placeholder="blur"
            class="absolute left-1/2 top-0 -ml-[39rem] !h-[55vh] lg:!h-[55vh] max-w-none w-full lg:w-[113.125rem] xl:!left-0 xl:!w-[109vw] "
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
            /> */}
          {/* Hero  1 */}
          {/* <div   className="swiper-slide relative z-0 pt-[6vh]  md:pt-24 pb-100px 
            4xl:h-screen 4xl:min-h-[800px] overflow-hidden flex flex-col 
            justify-center bg-cover bg-center bg-no-repeat swiper-slide-visible 
            swiper-slide-fully-visible swiper-slide-active" */}
         <div className="relative z-0 4xl:h-screen 4xl:min-h-[800px] overflow-hidden flex flex-col 
            justify-center bg-cover bg-center bg-no-repeat swiper-slide-active"
            // style={{
            //   width: '100%',
            //   opacity: 1,
            //   transform: "translate3d(0px, 0px, 0px)"
            // }}
            role="group"
            aria-label="1 / 3"
            data-swiper-slide-index={0}
          >
           {/* <div className="absolute top-0 left-0 w-full h-full  z-0" /> */}
           
           <div className="px-6 pt-12 md:pt-[10em]  lg:pt-[8em]   min-[1400px]:pt-[6em]  xl:-mt-4  min-w-[1580px]:-mt-6 
             max-[1071px]:mt-[-4em]  min-[1600px]:pt-[0em] flex-block lg:grid grid-cols-2 group">
                <RightPart/>
               <div className="z-10 xl:!float-right !z-20 mt-10 lg:mt-0 xl:-mr-24 search-right  
                   max-w-[100vw] container w-full relative z-xl fade-in-from-bottom">
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
        {/* <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
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
        </div> */}
        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        />
      </div>
    </div>
  </div>)

}







export const RightPart = () =>{
return (
<div className="flex flex-col w-full justify-center max-[1000px]:!mt-[3em]">
  <h1 className="text-black md:text-[82px] ss:text-[70px] text-custom-gradient  text-[52px] md:leading-[90px] fade-in-from-bottom ss:leading-[70px] leading-[55px] mb-4 font-black tracking-tight">
    proxy -{/* */}{" "}
  </h1>
  <span className="text-black text-[20px] md:leading-[30px] fade-in-from-bottom  mb-4  tracking-tight italic">
  <p
    className="-pt-12 md:mt-6 ss:mt-5  md:text-[18px] ss:text-[18px] text-[16px] text-main md:leading-[25px] ss:leading-[25px]  leading-[20px] fade-in-from-bottom md:max-w-[600px]  ss:max-w-[480px] max-w-[320px]"
    style={{
      opacity: 0,
      animationDelay: "0.5s",
      animationFillMode: "forwards"
    }}
  >
     noun /ˈprɑk·si/ the agency, office, person or function who is given <br />
    the authority or power to act for another.
  </p>
  </span>
  <h1 className="text-black md:text-[82px] mt-6 ss:text-[70px]  text-[52px] md:leading-[90px] fade-in-from-bottom font-black tracking-tight">
    <span className="text-custom-gradient">
      <br className="ss:flex hidden" />
      Reinventing {/* */}{" "}
    </span>{" "}
    <br className="ss:flex hidden" />
    the real estate business.
  </h1>
  <p
    className="md:mt-6 ss:mt-5 mt-6 md:text-[18px] ss:text-[18px] text-[16px] text-main md:leading-[25px] ss:leading-[25px]  leading-[20px] fade-in-from-bottom md:max-w-[600px]  ss:max-w-[480px] max-w-[320px]"
    style={{
      opacity: 0,
      animationDelay: "0.5s",
      animationFillMode: "forwards"
    }}
  >
   Armed with two decades of industry wisdom, we are focused on combining these insights with the prowess of modern technology, delivering outcomes that not only meet but exceed your expectations
  </p>
  <div
    className="flex md:mt-6 ss:mt-8 mt-6 items-center  buttonfull fade-in-from-bottom2"
    style={{ opacity: 0, animationDelay: "1s", animationFillMode: "forwards" }}
  >
    <a href="/join">
      <button className="grow4 bg-custom-gradient border-none buttonhalf md:text-[18px] ss:text-[17px] text-[14px] md:py-3 ss:py-3 py-3 md:px-24 ss:px-7 px-3 text-white  md:rounded-[6px] ss:rounded-[3px] rounded-[3px]  font-medium cursor-pointer">
        Join Us
      </button>
    </a>
  </div>
</div>)
  }