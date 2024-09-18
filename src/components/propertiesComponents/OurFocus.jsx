export default function OurFOcus(){
    return   <section className="sm:px-16 -mt-12  max-w-[99vw] mx-auto">  
    <div className="container px-[4%] lg:px-[8%]  pt-30 pb-90px">
    {/* section heading */}
    <div className="text-center mb-50px">
      <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color bg-opacity-10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
        <span className="leading-1.3">Our Services</span>
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
        <span className="leading-1.3"> Our Main Focus </span>
      </h2>
    </div>
    {/* services cards  */}
    <div className="service-cards flex flex-wrap justify-center items-center text-center -mx-15px">
      {/* card 1 */}
      <div className="service-card basis-full sm:basis-1/2 lg:basis-1/3 px-15px mb-30px">
        <div className="border border-border-color-1 shadow-box-shadow-1 bg-white relative py-10 pb-35px px-30px transition-all duration-300">
          <div className="text-center mb-5">
            <img
              src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/icons/icon-img/21.png"
              alt=""
              className="inline-block"
            />
          </div>
          <h6 className="text-lg md:text-xl lg:text-22px xl:text-2xl text-heading-color font-bold">
            <a
              className="hover:text-secondary-color leading-1.3 mb-1"
              href="service-details.html"
            >
              Buy a home
            </a>
          </h6>
          <p className="text-sm mb-25px">
            <span className="leading-1.8">
              over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </span>
          </p>
          <div className="text-sm text-color-1 font-bold">
            <a
              className="find-service hover:text-secondary-color flex items-center justify-center"
              href="service-details.html"
            >
              Find A Home
              <i className="flaticon-right-arrow inline-block leading-1" />
            </a>
          </div>
          <span className="hover-line absolute bottom-0 left-0 w-0 h-1 bg-secondary-color transition-all duration-300 block" />
        </div>
      </div>
      {/* card 2 */}
      <div className="service-card basis-full sm:basis-1/2 lg:basis-1/3 px-15px mb-30px">
        <div className="border border-border-color-1 shadow-box-shadow-1 bg-white relative py-10 pb-35px px-30px transition-all duration-300">
          <div className="text-center mb-5">
            <img
              src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/icons/icon-img/22.png"
              alt=""
              className="inline-block"
            />
          </div>
          <h6 className="text-lg md:text-xl lg:text-22px xl:text-2xl text-heading-color font-bold">
            <a
              className="hover:text-secondary-color leading-1.3 mb-1"
              href="service-details.html"
            >
              Rent a home
            </a>
          </h6>
          <p className="text-sm mb-25px">
            <span className="leading-1.8">
              over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </span>
          </p>
          <div className="text-sm text-color-1 font-bold">
            <a
              className="find-service hover:text-secondary-color flex items-center justify-center"
              href="service-details.html"
            >
              Find A Home
              <i className="flaticon-right-arrow inline-block leading-1" />
            </a>
          </div>
          <span className="hover-line absolute bottom-0 left-0 w-0 h-1 bg-secondary-color transition-all duration-300 block" />
        </div>
      </div>
      {/* card 3 */}
      <div className="service-card basis-full sm:basis-1/2 lg:basis-1/3 px-15px mb-30px active">
        <div className="border border-border-color-1 shadow-box-shadow-1 bg-white relative py-10 pb-35px px-30px transition-all duration-300">
          <div className="text-center mb-5">
            <img
              src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/icons/icon-img/23.png"
              alt=""
              className="inline-block"
            />
          </div>
          <h6 className="text-lg md:text-xl lg:text-22px xl:text-2xl text-heading-color font-bold">
            <a
              className="hover:text-secondary-color leading-1.3 mb-1"
              href="service-details.html"
            >
              Sell a home
            </a>
          </h6>
          <p className="text-sm mb-25px">
            <span className="leading-1.8">
              over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </span>
          </p>
          <div className="text-sm text-color-1 font-bold">
            <a
              className="find-service hover:text-secondary-color flex items-center justify-center"
              href="service-details.html"
            >
              Find A Home
              <i className="flaticon-right-arrow inline-block leading-1" />
            </a>
          </div>
          <span className="hover-line absolute bottom-0 left-0 w-0 h-1 bg-secondary-color transition-all duration-300 block" />
        </div>
      </div>
    </div>
  </div>
      </section>
    
  
}