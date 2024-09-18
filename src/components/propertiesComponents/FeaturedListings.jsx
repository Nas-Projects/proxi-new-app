export  default function FeaturedListings() {
    return <div className="container-3 pt-115px pb-[75px] modal-container lg:pt-12 ">
    {/* section heading */}
    <div className="text-center mb-50px">
      <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color bg-opacity-10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
        <span className="leading-1.3">Sponsored</span>
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
        <span className="text-gray-700 leading-1.3">Featured Rental Listings </span>
      </h2>
    </div>
    <div className="featured-apartments swiper-container relative">
      {/* apartment cards  */}
      <div className="swiper featured-apartments-slider static swiper-initialized swiper-horizontal swiper-backface-hidden">
        <div
          className="swiper-wrapper"
          id="swiper-wrapper-cc7681b1bd8ee962"
          aria-live="polite"
        >
          {/* card 1 */}
          <div
            className="swiper-slide mb-65px px-15px swiper-slide-active"
            style={{ width: "513.667px" }}
            role="group"
            aria-label="1 / 5"
            data-swiper-slide-index={0}
          >
            <div className="group border border-border-color-13 shadow-box-shadow-4">
              {/* card thumbs */}
              <div className="relative leading-1">
                <a href="product-details.html" className="overflow-hidden">
                  <img
                    src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/product-3/1.jpg"
                    className="w-full group-hover:scale-110 transition-all duration-700"
                    alt=""
                  />
                </a>
                <div className="absolute w-full left-0 bottom-0 px-15px pb-15px lg:px-30px bg-transparent bg-gradient-color-5">
                  <div className="text-sm text-white flex justify-between items-center">
                    <a
                      href="locations.html"
                      className="hover:text-secondary-color"
                    >
                      <i className="flaticon-pin" /> Belmont Gardens, Chicago
                    </a>
                    <ul className="flex gap-10px">
                      <li>
                        <a
                          className="w-30px lg:w-42px h-30px flex justify-center items-center bg-transparent lg:bg-white lg:bg-opacity-35 hover:text-secondary-color"
                          href="product-details.html"
                        >
                          <i className="fas fa-camera pr-1 leading-1" />4
                        </a>
                      </li>
                      <li>
                        <a
                          className="w-30px lg:w-42px h-30px flex justify-center items-center bg-transparent lg:bg-white lg:bg-opacity-35 hover:text-secondary-color"
                          href="product-details.html"
                        >
                          <i className="fas fa-film pr-1 leading-1" /> 2
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-xs sm:text-13px text-white px-10px py-1 sm:px-15px sm:pt-3px sm:pb-0 bg-green uppercase font-semibold absolute top-[15px] right-[18px]">
                  <span className="leading-5 sm:leading-25px block">
                    for rent
                  </span>
                </div>
              </div>
              {/* card body */}
              <div className="px-5 pt-4 lg:px-30px lg:pt-5">
                <h5 className="text-lg text-secondary-color font-semibold mb-5px">
                  <span className="leading-1.8">$34,900</span>
                  <label className="text-sm font-normal">/Month</label>
                </h5>
                <h4 className="text-lg md:text-xl lg:text-22px font-semibold text-heading-color mb-15px">
                  <a
                    href="product-details.html"
                    className="hover:text-secondary-color leading-1.3"
                  >
                    New Apartment Nice View
                  </a>
                </h4>
                <p className="text-sm mb-15px">
                  <span className="leading-1.8">
                    Beautiful Huge 1 Family House In Heart Of
                    <br />
                    Westbury. Newly Renovated With New Wood
                  </span>
                </p>
                <ul className="flex flex-wrap gap-15px py-4">
                  <li className="text-sm pr-4 border-r border-primary-color border-opacity-20">
                    <p className="leading-1.8 font-bold">
                      3<i className="flaticon-bed ml-1" />
                    </p>
                    <p className="leading-1.8">Bedrooms</p>
                  </li>
                  <li className="text-sm pr-4 border-r border-primary-color border-opacity-20">
                    <p className="leading-1.8 font-bold">
                      2<i className="flaticon-clean ml-1" />
                    </p>
                    <p className="leading-1.8">Bedrooms</p>
                  </li>
                  <li className="text-sm">
                    <p className="leading-1.8 font-bold">
                      3450
                      <i className="flaticon-square-shape-design-interface-tool-symbol ml-1" />
                    </p>
                    <p className="leading-1.8">square Ft</p>
                  </li>
                </ul>
              </div>
              {/* cart footer */}
              <div className="p-5 lg:p-30px lg:pt-5 border-t border-border-color-1">
                <div className="flex flex-wrap-reverse items-center justify-between gap-y-5">
                  <div className="flex gap-x-3">
                    <a href="team-details.html" className="w-10 h-10">
                      <img
                        src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/blog/author.jpg"
                        alt=""
                        className="w-full h-full rounded-100%"
                      />
                    </a>
                    <div>
                      <h4 className="text-sm font-semibold text-heading-color mb-0">
                        <a
                          className="leading-1.3 hover:text-secondary-color"
                          href="team-details.html"
                        >
                          William Seklo
                        </a>
                      </h4>
                      <span className="text-xs"> Estate Agents </span>
                    </div>
                  </div>
                  <ul className="flex gap-x-2">
                    <li>
                      <button
                        className="modal-open w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                        data-modal-index={1}
                      >
                        <i className="flaticon-expand leading-1" />
                      </button>
                    </li>
                    <li>
                      <button
                        className="modal-open w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                        data-modal-index={2}
                      >
                        <i className="flaticon-heart-1 leading-1" />
                      </button>
                    </li>
                    <li>
                      <a
                        href="product-details.html"
                        className="w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                      >
                        <i className="flaticon-add leading-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div
            className="swiper-slide mb-65px px-15px swiper-slide-next"
            style={{ width: "513.667px" }}
            role="group"
            aria-label="2 / 5"
            data-swiper-slide-index={1}
          >
            <div className="group border border-border-color-13 shadow-box-shadow-4">
              {/* card thumbs */}
              <div className="relative leading-1">
                <a href="product-details.html" className="overflow-hidden">
                  <img
                    src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/product-3/2.jpg"
                    className="w-full group-hover:scale-110 transition-all duration-700"
                    alt=""
                  />
                </a>
                <div className="absolute w-full left-0 bottom-0 px-15px pb-15px lg:px-30px bg-transparent bg-gradient-color-5">
                  <div className="text-sm text-white flex justify-between items-center">
                    <a
                      href="locations.html"
                      className="hover:text-secondary-color"
                    >
                      <i className="flaticon-pin" /> Belmont Gardens, Chicago
                    </a>
                    <ul className="flex gap-10px">
                      <li>
                        <a
                          className="w-30px lg:w-42px h-30px flex justify-center items-center bg-transparent lg:bg-white lg:bg-opacity-35 hover:text-secondary-color"
                          href="product-details.html"
                        >
                          <i className="fas fa-camera pr-1 leading-1" />4
                        </a>
                      </li>
                      <li>
                        <a
                          className="w-30px lg:w-42px h-30px flex justify-center items-center bg-transparent lg:bg-white lg:bg-opacity-35 hover:text-secondary-color"
                          href="product-details.html"
                        >
                          <i className="fas fa-film pr-1 leading-1" /> 2
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-xs sm:text-13px text-white px-10px py-1
                 sm:px-15px sm:pt-3px sm:pb-0 bg-custom-gradient uppercase font-semibold absolute top-[15px] right-[18px]">
                  <span className="leading-5 sm:leading-25px block">
                    for rent
                  </span>
                </div>
              </div>
              {/* card body */}
              <div className="px-5 pt-4 lg:px-30px lg:pt-5">
                <h5 className="text-lg text-secondary-color font-semibold mb-5px">
                  <span className="leading-1.8">$34,900</span>
                  <label className="text-sm font-normal">/Month</label>
                </h5>
                <h4 className="text-lg md:text-xl lg:text-22px font-semibold text-heading-color mb-15px">
                  <a
                    href="product-details.html"
                    className="hover:text-secondary-color leading-1.3"
                  >
                    Modern Apartments
                  </a>
                </h4>
                <p className="text-sm mb-15px">
                  <span className="leading-1.8">
                    Beautiful Huge 1 Family House In Heart Of
                    <br />
                    Westbury. Newly Renovated With New Wood
                  </span>
                </p>
                <ul className="flex flex-wrap gap-15px py-4">
                  <li className="text-sm pr-4 border-r border-primary-color border-opacity-20">
                    <p className="leading-1.8 font-bold">
                      3<i className="flaticon-bed ml-1" />
                    </p>
                    <p className="leading-1.8">Bedrooms</p>
                  </li>
                  <li className="text-sm pr-4 border-r border-primary-color border-opacity-20">
                    <p className="leading-1.8 font-bold">
                      2<i className="flaticon-clean ml-1" />
                    </p>
                    <p className="leading-1.8">Bedrooms</p>
                  </li>
                  <li className="text-sm">
                    <p className="leading-1.8 font-bold">
                      3450
                      <i className="flaticon-square-shape-design-interface-tool-symbol ml-1" />
                    </p>
                    <p className="leading-1.8">square Ft</p>
                  </li>
                </ul>
              </div>
              {/* cart footer */}
              <div className="p-5 lg:p-30px lg:pt-5 border-t border-border-color-1">
                <div className="flex flex-wrap-reverse items-center justify-between gap-y-5">
                  <div className="flex gap-x-3">
                    <a href="team-details.html" className="w-10 h-10">
                      <img
                        src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/blog/author.jpg"
                        alt=""
                        className="w-full h-full rounded-100%"
                      />
                    </a>
                    <div>
                      <h4 className="text-sm font-semibold text-heading-color mb-0">
                        <a
                          className="leading-1.3 hover:text-secondary-color"
                          href="team-details.html"
                        >
                          William Seklo
                        </a>
                      </h4>
                      <span className="text-xs"> Estate Agents </span>
                    </div>
                  </div>
                  <ul className="flex gap-x-2">
                    <li>
                      <button
                        className="modal-open w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                        data-modal-index={1}
                      >
                        <i className="flaticon-expand leading-1" />
                      </button>
                    </li>
                    <li>
                      <button
                        className="modal-open w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                        data-modal-index={2}
                      >
                        <i className="flaticon-heart-1 leading-1" />
                      </button>
                    </li>
                    <li>
                      <a
                        href="product-details.html"
                        className="w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                      >
                        <i className="flaticon-add leading-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div
            className="swiper-slide mb-65px px-15px"
            style={{ width: "513.667px" }}
            role="group"
            aria-label="3 / 5"
            data-swiper-slide-index={2}
          >
            <div className="group border border-border-color-13 shadow-box-shadow-4">
              {/* card thumbs */}
              <div className="relative leading-1">
                <a href="product-details.html" className="overflow-hidden">
                  <img
                    src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/product-3/3.jpg"
                    className="w-full group-hover:scale-110 transition-all duration-700"
                    alt=""
                  />
                </a>
                <div className="absolute w-full left-0 bottom-0 px-15px pb-15px lg:px-30px bg-transparent bg-gradient-color-5">
                  <div className="text-sm text-white flex justify-between items-center">
                    <a
                      href="locations.html"
                      className="hover:text-secondary-color"
                    >
                      <i className="flaticon-pin" /> Belmont Gardens, Chicago
                    </a>
                    <ul className="flex gap-10px">
                      <li>
                        <a
                          className="w-30px lg:w-42px h-30px flex justify-center items-center bg-transparent lg:bg-white lg:bg-opacity-35 hover:text-secondary-color"
                          href="product-details.html"
                        >
                          <i className="fas fa-camera pr-1 leading-1" />4
                        </a>
                      </li>
                      <li>
                        <a
                          className="w-30px lg:w-42px h-30px flex justify-center items-center bg-transparent lg:bg-white lg:bg-opacity-35 hover:text-secondary-color"
                          href="product-details.html"
                        >
                          <i className="fas fa-film pr-1 leading-1" /> 2
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-xs sm:text-13px text-white px-10px py-1 sm:px-15px sm:pt-3px sm:pb-0 bg-green uppercase font-semibold absolute top-[15px] right-[18px]">
                  <span className="leading-5 sm:leading-25px block">
                    for rent
                  </span>
                </div>
              </div>
              {/* card body */}
              <div className="px-5 pt-4 lg:px-30px lg:pt-5">
                <h5 className="text-lg text-secondary-color font-semibold mb-5px">
                  <span className="leading-1.8">$34,900</span>
                  <label className="text-sm font-normal">/Month</label>
                </h5>
                <h4 className="text-lg md:text-xl lg:text-22px font-semibold text-heading-color mb-15px">
                  <a
                    href="product-details.html"
                    className="hover:text-secondary-color leading-1.3"
                  >
                    Comfortable Apartment
                  </a>
                </h4>
                <p className="text-sm mb-15px">
                  <span className="leading-1.8">
                    Beautiful Huge 1 Family House In Heart Of
                    <br />
                    Westbury. Newly Renovated With New Wood
                  </span>
                </p>
                <ul className="flex flex-wrap gap-15px py-4">
                  <li className="text-sm pr-4 border-r border-primary-color border-opacity-20">
                    <p className="leading-1.8 font-bold">
                      3<i className="flaticon-bed ml-1" />
                    </p>
                    <p className="leading-1.8">Bedrooms</p>
                  </li>
                  <li className="text-sm pr-4 border-r border-primary-color border-opacity-20">
                    <p className="leading-1.8 font-bold">
                      2<i className="flaticon-clean ml-1" />
                    </p>
                    <p className="leading-1.8">Bedrooms</p>
                  </li>
                  <li className="text-sm">
                    <p className="leading-1.8 font-bold">
                      3450
                      <i className="flaticon-square-shape-design-interface-tool-symbol ml-1" />
                    </p>
                    <p className="leading-1.8">square Ft</p>
                  </li>
                </ul>
              </div>
              {/* cart footer */}
              <div className="p-5 lg:p-30px lg:pt-5 border-t border-border-color-1">
                <div className="flex flex-wrap-reverse items-center justify-between gap-y-5">
                  <div className="flex gap-x-3">
                    <a href="team-details.html" className="w-10 h-10">
                      <img
                        src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/blog/author.jpg"
                        alt=""
                        className="w-full h-full rounded-100%"
                      />
                    </a>
                    <div>
                      <h4 className="text-sm font-semibold text-heading-color mb-0">
                        <a
                          className="leading-1.3 hover:text-secondary-color"
                          href="team-details.html"
                        >
                          William Seklo
                        </a>
                      </h4>
                      <span className="text-xs"> Estate Agents </span>
                    </div>
                  </div>
                  <ul className="flex gap-x-2">
                    <li>
                      <button
                        className="modal-open w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                        data-modal-index={1}
                      >
                        <i className="flaticon-expand leading-1" />
                      </button>
                    </li>
                    <li>
                      <button
                        className="modal-open w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                        data-modal-index={2}
                      >
                        <i className="flaticon-heart-1 leading-1" />
                      </button>
                    </li>
                    <li>
                      <a
                        href="product-details.html"
                        className="w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                      >
                        <i className="flaticon-add leading-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div
            className="swiper-slide mb-65px px-15px"
            style={{ width: "513.667px" }}
            role="group"
            aria-label="4 / 5"
            data-swiper-slide-index={3}
          >
            <div className="group border border-border-color-13 shadow-box-shadow-4">
              {/* card thumbs */}
              <div className="relative leading-1">
                <a href="product-details.html" className="overflow-hidden">
                  <img
                    src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/product-3/4.jpg"
                    className="w-full group-hover:scale-110 transition-all duration-700"
                    alt=""
                  />
                </a>
                <div className="absolute w-full left-0 bottom-0 px-15px pb-15px lg:px-30px bg-transparent bg-gradient-color-5">
                  <div className="text-sm text-white flex justify-between items-center">
                    <a
                      href="locations.html"
                      className="hover:text-secondary-color"
                    >
                      <i className="flaticon-pin" /> Belmont Gardens, Chicago
                    </a>
                    <ul className="flex gap-10px">
                      <li>
                        <a
                          className="w-30px lg:w-42px h-30px flex justify-center items-center bg-transparent lg:bg-white lg:bg-opacity-35 hover:text-secondary-color"
                          href="product-details.html"
                        >
                          <i className="fas fa-camera pr-1 leading-1" />4
                        </a>
                      </li>
                      <li>
                        <a
                          className="w-30px lg:w-42px h-30px flex justify-center items-center bg-transparent lg:bg-white lg:bg-opacity-35 hover:text-secondary-color"
                          href="product-details.html"
                        >
                          <i className="fas fa-film pr-1 leading-1" /> 2
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-xs sm:text-13px text-white px-10px py-1 sm:px-15px sm:pt-3px sm:pb-0 bg-green uppercase font-semibold absolute top-[15px] right-[18px]">
                  <span className="leading-5 sm:leading-25px block">
                    for rent
                  </span>
                </div>
              </div>
              {/* card body */}
              <div className="px-5 pt-4 lg:px-30px lg:pt-5">
                <h5 className="text-lg text-secondary-color font-semibold mb-5px">
                  <span className="leading-1.8">$34,900</span>
                  <label className="text-sm font-normal">/Month</label>
                </h5>
                <h4 className="text-lg md:text-xl lg:text-22px font-semibold text-heading-color mb-15px">
                  <a
                    href="product-details.html"
                    className="hover:text-secondary-color leading-1.3"
                  >
                    Luxury villa in Rego Park
                  </a>
                </h4>
                <p className="text-sm mb-15px">
                  <span className="leading-1.8">
                    Beautiful Huge 1 Family House In Heart Of
                    <br />
                    Westbury. Newly Renovated With New Wood
                  </span>
                </p>
                <ul className="flex flex-wrap gap-15px py-4">
                  <li className="text-sm pr-4 border-r border-primary-color border-opacity-20">
                    <p className="leading-1.8 font-bold">
                      3<i className="flaticon-bed ml-1" />
                    </p>
                    <p className="leading-1.8">Bedrooms</p>
                  </li>
                  <li className="text-sm pr-4 border-r border-primary-color border-opacity-20">
                    <p className="leading-1.8 font-bold">
                      2<i className="flaticon-clean ml-1" />
                    </p>
                    <p className="leading-1.8">Bedrooms</p>
                  </li>
                  <li className="text-sm">
                    <p className="leading-1.8 font-bold">
                      3450
                      <i className="flaticon-square-shape-design-interface-tool-symbol ml-1" />
                    </p>
                    <p className="leading-1.8">square Ft</p>
                  </li>
                </ul>
              </div>
              {/* cart footer */}
              <div className="p-5 lg:p-30px lg:pt-5 border-t border-border-color-1">
                <div className="flex flex-wrap-reverse items-center justify-between gap-y-5">
                  <div className="flex gap-x-3">
                    <a href="team-details.html" className="w-10 h-10">
                      <img
                        src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/blog/author.jpg"
                        alt=""
                        className="w-full h-full rounded-100%"
                      />
                    </a>
                    <div>
                      <h4 className="text-sm font-semibold text-heading-color mb-0">
                        <a
                          className="leading-1.3 hover:text-secondary-color"
                          href="team-details.html"
                        >
                          William Seklo
                        </a>
                      </h4>
                      <span className="text-xs"> Estate Agents </span>
                    </div>
                  </div>
                  <ul className="flex gap-x-2">
                    <li>
                      <button
                        className="modal-open w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                        data-modal-index={1}
                      >
                        <i className="flaticon-expand leading-1" />
                      </button>
                    </li>
                    <li>
                      <button
                        className="modal-open w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                        data-modal-index={2}
                      >
                        <i className="flaticon-heart-1 leading-1" />
                      </button>
                    </li>
                    <li>
                      <a
                        href="product-details.html"
                        className="w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                      >
                        <i className="flaticon-add leading-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div
            className="swiper-slide mb-65px px-15px"
            role="group"
            aria-label="5 / 5"
            data-swiper-slide-index={4}
            style={{ width: "513.667px" }}
          >
            <div className="group border border-border-color-13 shadow-box-shadow-4">
              {/* card thumbs */}
              <div className="relative leading-1">
                <a href="product-details.html" className="overflow-hidden">
                  <img
                    src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/product-3/5.jpg"
                    className="w-full group-hover:scale-110 transition-all duration-700"
                    alt=""
                  />
                </a>
                <div className="absolute w-full left-0 bottom-0 px-15px pb-15px lg:px-30px bg-transparent bg-gradient-color-5">
                  <div className="text-sm text-white flex justify-between items-center">
                    <a
                      href="locations.html"
                      className="hover:text-secondary-color"
                    >
                      <i className="flaticon-pin" /> Belmont Gardens, Chicago
                    </a>
                    <ul className="flex gap-10px">
                      <li>
                        <a
                          className="w-30px lg:w-42px h-30px flex justify-center items-center bg-transparent lg:bg-white lg:bg-opacity-35 hover:text-secondary-color"
                          href="product-details.html"
                        >
                          <i className="fas fa-camera pr-1 leading-1" />4
                        </a>
                      </li>
                      <li>
                        <a
                          className="w-30px lg:w-42px h-30px flex justify-center items-center bg-transparent lg:bg-white lg:bg-opacity-35 hover:text-secondary-color"
                          href="product-details.html"
                        >
                          <i className="fas fa-film pr-1 leading-1" /> 2
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-xs sm:text-13px text-white px-10px py-1 sm:px-15px sm:pt-3px sm:pb-0 bg-green uppercase font-semibold absolute top-[15px] right-[18px]">
                  <span className="leading-5 sm:leading-25px block">
                    for rent
                  </span>
                </div>
              </div>
              {/* card body */}
              <div className="px-5 pt-4 lg:px-30px lg:pt-5">
                <h5 className="text-lg text-secondary-color font-semibold mb-5px">
                  <span className="leading-1.8">$34,900</span>
                  <label className="text-sm font-normal">/Month</label>
                </h5>
                <h4 className="text-lg md:text-xl lg:text-22px font-semibold text-heading-color mb-15px">
                  <a
                    href="product-details.html"
                    className="hover:text-secondary-color leading-1.3"
                  >
                    Beautiful Flat in Manhattan
                  </a>
                </h4>
                <p className="text-sm mb-15px">
                  <span className="leading-1.8">
                    Beautiful Huge 1 Family House In Heart Of
                    <br />
                    Westbury. Newly Renovated With New Wood
                  </span>
                </p>
                <ul className="flex flex-wrap gap-15px py-4">
                  <li className="text-sm pr-4 border-r border-primary-color border-opacity-20">
                    <p className="leading-1.8 font-bold">
                      3<i className="flaticon-bed ml-1" />
                    </p>
                    <p className="leading-1.8">Bedrooms</p>
                  </li>
                  <li className="text-sm pr-4 border-r border-primary-color border-opacity-20">
                    <p className="leading-1.8 font-bold">
                      2<i className="flaticon-clean ml-1" />
                    </p>
                    <p className="leading-1.8">Bedrooms</p>
                  </li>
                  <li className="text-sm">
                    <p className="leading-1.8 font-bold">
                      3450
                      <i className="flaticon-square-shape-design-interface-tool-symbol ml-1" />
                    </p>
                    <p className="leading-1.8">square Ft</p>
                  </li>
                </ul>
              </div>
              {/* cart footer */}
              <div className="p-5 lg:p-30px lg:pt-5 border-t border-border-color-1">
                <div className="flex flex-wrap-reverse items-center justify-between gap-y-5">
                  <div className="flex gap-x-3">
                    <a href="team-details.html" className="w-10 h-10">
                      <img
                        src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/blog/author.jpg"
                        alt=""
                        className="w-full h-full rounded-100%"
                      />
                    </a>
                    <div>
                      <h4 className="text-sm font-semibold text-heading-color mb-0">
                        <a
                          className="leading-1.3 hover:text-secondary-color"
                          href="team-details.html"
                        >
                          William Seklo
                        </a>
                      </h4>
                      <span className="text-xs"> Estate Agents </span>
                    </div>
                  </div>
                  <ul className="flex gap-x-2">
                    <li>
                      <button
                        className="modal-open w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                        data-modal-index={1}
                      >
                        <i className="flaticon-expand leading-1" />
                      </button>
                    </li>
                    <li>
                      <button
                        className="modal-open w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                        data-modal-index={2}
                      >
                        <i className="flaticon-heart-1 leading-1" />
                      </button>
                    </li>
                    <li>
                      <a
                        href="product-details.html"
                        className="w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                      >
                        <i className="flaticon-add leading-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pagination */}
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal !-bottom-[6px]">
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
          <span
            className="swiper-pagination-bullet"
            tabIndex={0}
            role="button"
            aria-label="Go to slide 4"
          />
          <span
            className="swiper-pagination-bullet"
            tabIndex={0}
            role="button"
            aria-label="Go to slide 5"
          />
        </div>
        {/*  navigation */}
        <div className="hidden 3xl:block">
          <div
            className="swiper-button-next z-1"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-cc7681b1bd8ee962"
          >
            <i className="fas fa-arrow-right" />
          </div>
          <div
            className="swiper-button-prev z-1"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-cc7681b1bd8ee962"
          >
            <i className="fas fa-arrow-left" />
          </div>
        </div>
        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        />
      </div>
    </div>
    {/* modals */}
    {/* modal apartment details*/}
    <div className="modal hidden fixed top-0 left-0 w-full h-full z-xxl transition-all duration-500 bg-lightBlack opacity-0 overflow-y-auto">
      <div className="modal-close fixed md:absolute top-0 left-0 w-full h-full z-xsmall cursor-zoom-out" />
      <div className="modal-content transition-all duration-500 -translate-y-20 sm:max-w-500px lg:max-w-980px m-2 mt-150px sm:mx-auto relative z-small rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px p-30px bg-white relative">
          <div>
            <img
              src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/product/4.png"
              className="w-full"
              alt=""
            />
          </div>
          {/* card body */}
          <div className="pl-25px">
            <div className="absolute right-4 top-4">
              <button className="modal-close w-10 h-10 leading-10 text-center bg-section-bg-1 text-black text-25px inline-block">
                <span>×</span>
              </button>
            </div>
            <ul className="flex items-center mb-5px">
              <li>
                <a
                  href="#"
                  className="text-xs text-ratings hover:text-secondary-color"
                >
                  <i className="fas fa-star leading-1.8" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-ratings hover:text-secondary-color"
                >
                  <i className="fas fa-star leading-1.8" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-ratings hover:text-secondary-color"
                >
                  <i className="fas fa-star leading-1.8" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-ratings hover:text-secondary-color"
                >
                  <i className="fas fa-star-half-alt leading-1.8" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-ratings hover:text-secondary-color"
                >
                  <i className="far fa-star leading-1.8" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-ratings hover:text-secondary-color"
                >
                  ( 95 Reviews )
                </a>
              </li>
            </ul>
            <h4 className="text-22px md:text-2xl font-bold text-heading-color mb-0">
              <a
                href="product-details.html"
                className="leading-1.3 hover:text-secondary-color"
              >
                3 Rooms Manhattan
              </a>
            </h4>
            <p className="text-34px md:text-50px text-secondary-color font-semibold mb-5 pb-0 border-b border-border-color-12 border-opacity-25 leading-1.2">
              <span>$34,900</span>
              <del className="text-26px md:text-40px leading-1.2 opacity-60 pl-1">
                $36,500
              </del>
            </p>
            <p className="text-sm lg:text-base mb-9 md:mb-10">
              <span className="leading-1.8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos repellendus repudiandae incidunt quidem pariatur
                expedita, quo quis modi tempore non.
              </span>
            </p>
            <ul className="flex flex-wrap gap-5 pb-5 mb-5 border-b border-border-color-12 border-opacity-25">
              <li className="text-sm">
                <button
                  className="modal-open leading-1.8 font-semibold hover:text-secondary-color transition-all duration-300"
                  data-modal-index={3}
                >
                  <i className="far fa-heart px-0.5" /> Add to Wishlist
                </button>
              </li>
              <li className="text-sm">
                <button className="leading-1.8 font-semibold hover:text-secondary-color transition-all duration-300">
                  <i className="fas fa-exchange-alt px-0.5" /> Compare
                </button>
              </li>
            </ul>
            {/* social area */}
            <ul className="flex gap-x-[18px] items-center">
              <li>
                <p className="text-sm lg:text-base">
                  <span className="leading-1.8">Share</span>
                </p>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="text-sm lg:text-base hover:text-secondary-color"
                >
                  <i className="fab fa-facebook-f leading-1.8" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  className="text-sm lg:text-base hover:text-secondary-color"
                >
                  <i className="fab fa-twitter leading-1.8" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  className="text-sm lg:text-base hover:text-secondary-color"
                >
                  <i className="fab fa-linkedin leading-1.8" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="text-sm lg:text-base hover:text-secondary-color"
                >
                  <i className="fab fa-instagram leading-1.8" />
                </a>
              </li>
            </ul>
            {/* action */}
            <div className="text-end">
              <a
                href="product-details.html"
                className="text-xs hover:text-secondary-color underline hover:underline"
              >
                <span className="leading-1.8">View Details</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* modal  wishlist 1*/}
    <div className="modal hidden fixed top-0 left-0 w-full h-full z-xxl transition-all duration-500 bg-lightBlack opacity-0 overflow-y-auto">
      <div className="modal-close fixed md:absolute top-0 left-0 w-full h-full z-xsmall cursor-zoom-out" />
      <div className="modal-content transition-all duration-500 -translate-y-20 max-w-500px m-2 mt-150px sm:mx-auto relative z-small p-30px bg-white">
        <div className="flex">
          <div className="w-125px mr-5 flex-shrink-0">
            <img
              src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/product/4.png"
              className="w-full"
              alt=""
            />
          </div>
          {/* card body */}
          <div className="pl-25px">
            <div className="absolute right-4 top-4">
              <button className="modal-close w-10 h-10 leading-10 text-center bg-black bg-opacity-5 text-black text-25px inline-block">
                <span>×</span>
              </button>
            </div>
            <h4 className="text-base lg:text-lg font-bold text-heading-color mb-10px">
              <a
                href="product-details.html"
                className="leading-1.3 hover:text-secondary-color"
              >
                3 Rooms Manhattan
              </a>
            </h4>
            <p className="text-sm lg:text-base mb-5 md:mb-6  ">
              <i className="fa fa-check-circle leading-1 text-green float-left clear-both pr-1.5 mt-1.5" />
              Successfully added to your Wishlist
            </p>
            {/* action */}
            <div>
              <h5 className="capitalize text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                <span className="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                <a
                  href="wishlist.html"
                  className="relative z-10 px-5 py-5px group-hover:text-heading-color leading-23px"
                >
                  View Wishlist
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* modal  wishlist 2*/}
    <div className="modal hidden fixed top-0 left-0 w-full h-full z-xxl transition-all duration-500 bg-lightBlack opacity-0 overflow-y-auto">
      <div className="modal-close fixed md:absolute top-0 left-0 w-full h-full z-xsmall cursor-zoom-out" />
      <div className="modal-content transition-all duration-500 -translate-y-20 max-w-500px m-2 mt-150px sm:mx-auto relative z-small p-30px bg-white">
        <div className="flex">
          <div className="w-125px mr-5 flex-shrink-0">
            <img
              src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/product/4.png"
              className="w-full"
              alt=""
            />
          </div>
          {/* card body */}
          <div className="pl-25px">
            <div className="absolute right-4 top-4">
              <button className="modal-close w-10 h-10 leading-10 text-center bg-black bg-opacity-5 text-black text-25px inline-block">
                <span>×</span>
              </button>
            </div>
            <h4 className="text-base lg:text-lg font-bold text-heading-color mb-10px">
              <a
                href="product-details.html"
                className="leading-1.3 hover:text-secondary-color"
              >
                3 Rooms Manhattan
              </a>
            </h4>
            <p className="text-sm lg:text-base mb-5 md:mb-6  ">
              <i className="fa fa-check-circle leading-1 text-green float-left clear-both pr-1.5 mt-1.5" />
              Successfully added to your Wishlist
            </p>
            {/* action */}
            <div>
              <h5 className="capitalize text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                <span className="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                <a
                  href="wishlist.html"
                  className="relative z-10 px-5 py-5px group-hover:text-heading-color leading-23px"
                >
                  View Wishlist
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
}