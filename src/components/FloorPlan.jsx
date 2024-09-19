export default function FloorplanGrid() {
    return <section>
    <div className="container pb-30">
      {/* section heading */}
      <div className="text-center mb-50px">
        <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color bg-opacity-10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
          <span className="leading-1.3">Apartment Sketch</span>
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
          <span className="leading-1.3">Apartments Plan </span>
        </h2>
      </div>
      {/* plan tab */}
      <div className="tab plan-tab">
        <div className="tab-links flex flex-wrap items-center justify-center gap-x-5 lg:gap-x-30px xl:gap-x-50px gap-y-10px text-sm lg:text-lg xl:text-xl text-heading-color mb-50px">
          <button className="p-1px border-b-2 border-transparent font-semibold relative leading-1.2 after:w-10px after:h-10px after:border-3px after:border-white after:bg-transparent after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-1/2 after:z-10 after:rounded-100%">
            The Studio
          </button>
          <button className="active p-1px border-b-2 border-transparent font-semibold relative leading-1.2 after:w-10px after:h-10px after:border-3px after:border-white after:bg-transparent after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-1/2 after:z-10 after:rounded-100%">
            Deluxe Portion
          </button>
          <button className="p-1px border-b-2 border-transparent font-semibold relative leading-1.2 after:w-10px after:h-10px after:border-3px after:border-white after:bg-transparent after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-1/2 after:z-10 after:rounded-100%">
            Penthouse
          </button>
          <button className="p-1px border-b-2 border-transparent font-semibold relative leading-1.2 after:w-10px after:h-10px after:border-3px after:border-white after:bg-transparent after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-1/2 after:z-10 after:rounded-100%">
            Top Garden
          </button>
          <button className="p-1px border-b-2 border-transparent font-semibold relative leading-1.2 after:w-10px after:h-10px after:border-3px after:border-white after:bg-transparent after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-1/2 after:z-10 after:rounded-100%">
            Double Height
          </button>
        </div>
        <div className="tab-contents">
          {/* content 1 */}
          <div className="hidden opacity-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-50px">
              <div className="p-30px md:p-70px bg-secondary-color">
                <h6 className="text-xl md:text-22px lg:text-26px xl:text-3xl font-bold text-white mb-15px leading-1.3">
                  <span className="leading-1.3"> The Studio </span>
                </h6>
                <p className="text-sm lg:text-base text-white mb-10">
                  <span className="leading-1.8">
                    Enimad minim veniam quis nostrud exercitation ullamco laboris.
                    Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
                    eiusmod tempor.Incididunt labore et dolore magna aliqua. sed
                    ayd minim veniam.
                  </span>
                </p>
                <ul className="flex flex-col gap-y-10px items-stretch">
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Total Area
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        2800 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Bedroom
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        150 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Bathroom
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        45 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Belcony/Pets
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        Allowed
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Lounge
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        650 Sq. Ft
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="./assets/img/others/10.png"
                  className="w-full"
                  alt="#"
                />
              </div>
            </div>
          </div>
          {/* content 2 */}
          <div className="opacity-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-50px">
              <div className="p-30px md:p-70px bg-secondary-color">
                <h6 className="text-xl md:text-22px lg:text-26px xl:text-3xl font-bold text-white mb-15px leading-1.3">
                  <span className="leading-1.3"> Deluxe Portion </span>
                </h6>
                <p className="text-sm lg:text-base text-white mb-10">
                  <span className="leading-1.8">
                    Enimad minim veniam quis nostrud exercitation ullamco laboris.
                    Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
                    eiusmod tempor.Incididunt labore et dolore magna aliqua. sed
                    ayd minim veniam.
                  </span>
                </p>
                <ul className="flex flex-col gap-y-10px items-stretch">
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Total Area
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        2800 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Bedroom
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        150 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Bathroom
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        45 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Belcony/Pets
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        Allowed
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Lounge
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        650 Sq. Ft
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/others/10.png"
                  className="w-full"
                  alt="#"
                />
              </div>
            </div>
          </div>
          {/* content 3 */}
          <div className="hidden opacity-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-50px">
              <div className="p-30 md:p-70px bg-secondary-color">
                <h6 className="text-xl md:text-22px lg:text-26px xl:text-3xl font-bold text-white mb-15px leading-1.3">
                  <span className="leading-1.3"> Penthouse </span>
                </h6>
                <p className="text-sm lg:text-base text-white mb-10">
                  <span className="leading-1.8">
                    Enimad minim veniam quis nostrud exercitation ullamco laboris.
                    Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
                    eiusmod tempor.Incididunt labore et dolore magna aliqua. sed
                    ayd minim veniam.
                  </span>
                </p>
                <ul className="flex flex-col gap-y-10px items-stretch">
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Total Area
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        2800 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Bedroom
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        150 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Bathroom
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        45 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Belcony/Pets
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        Allowed
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Lounge
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        650 Sq. Ft
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="./assets/img/others/10.png"
                  className="w-full"
                  alt="#"
                />
              </div>
            </div>
          </div>
          {/* content 4 */}
          <div className="hidden opacity-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-50px">
              <div className="p-30px md:p-70px bg-secondary-color">
                <h6 className="text-xl md:text-22px lg:text-26px xl:text-3xl font-bold text-white mb-15px leading-1.3">
                  <span className="leading-1.3"> Top Garden </span>
                </h6>
                <p className="text-sm lg:text-base text-white mb-10">
                  <span className="leading-1.8">
                    Enimad minim veniam quis nostrud exercitation ullamco laboris.
                    Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
                    eiusmod tempor.Incididunt labore et dolore magna aliqua. sed
                    ayd minim veniam.
                  </span>
                </p>
                <ul className="flex flex-col gap-y-10px items-stretch">
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Total Area
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        2800 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Bedroom
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        150 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Bathroom
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        45 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Belcony/Pets
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        Allowed
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Lounge
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        650 Sq. Ft
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="./assets/img/others/10.png"
                  className="w-full"
                  alt="#"
                />
              </div>
            </div>
          </div>
          {/* content 5 */}
          <div className="hidden opacity-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-50px">
              <div className="p-30px md:p-70px bg-secondary-color">
                <h6 className="text-xl md:text-22px lg:text-26px xl:text-3xl font-bold text-white mb-15px leading-1.3">
                  <span className="leading-1.3"> Double Height </span>
                </h6>
                <p className="text-sm lg:text-base text-white mb-10">
                  <span className="leading-1.8">
                    Enimad minim veniam quis nostrud exercitation ullamco laboris.
                    Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
                    eiusmod tempor.Incididunt labore et dolore magna aliqua. sed
                    ayd minim veniam.
                  </span>
                </p>
                <ul className="flex flex-col gap-y-10px items-stretch">
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Total Area
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        2800 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Bedroom
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        150 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Bathroom
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        45 Sq. Ft
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Belcony/Pets
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        Allowed
                      </li>
                    </ul>
                  </li>
                  <li className="text-sm md:text-base text-white font-semibold relative z-0 before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1">
                    <ul className="flex justify-between items-center">
                      <li className="leading-1.8 pr-10px bg-secondary-color">
                        Lounge
                      </li>
                      <li className="leading-1.8 pl-10px bg-secondary-color">
                        650 Sq. Ft
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/others/10.png"
                  className="w-full"
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}