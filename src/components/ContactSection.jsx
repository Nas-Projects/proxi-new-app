import { useEffect, useRef, useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    // You can optionally post formData to a server endpoint here
    // Example:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => console.log('Server Response:', data))
    // .catch(error => console.error('Error posting data:', error));
  };

  const sectionRef = useRef(null);



  useEffect(() => {
      
    const paragraph = document.getElementById('contact-form');
    // const aboutSectionParRef = document.getElementById('ABOUT_SECTION');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    paragraph.classList.add('slide-in-right');
                } else {
                    paragraph.classList.remove('slide-in-right');
                }
            });
        },
        { threshold: 0.0 }  // Adjust the threshold as needed
    );

    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
    };
  }, []);


  return (
    <section
      id="comp-kkr4flhr"
      className="comp-kkr4flhr CohWsy wixui-column-strip !relative !mt-0 !bg-[var(--themeColorGray)] mx-auto"
    >
      {/* Background Layers */}
     
     

      {/* Form Section */}
    
  
     <div className="mx-auto max-w-[100vw] lg:!grid lg:grid-cols-6 mt-8 sm:mt-0 ">
      <div  className="contact-form V5AUxf lg:!col-span-4" data-testid="columns" >
        <div className="relative my-4 lg:pt-24 px-10">
        <div id="comp-kkr5aoaj" className="HcOXKn SxM0TO QxJLC3 comp-kkr5aoaj wixui-rich-text height-[auto] w-[508px]"  data-motion-enter="done"><h2 class="font_2 wixui-rich-text__text" style={{"font-size":"50px"}}><span style={{"letter-spacing":"0.02em"}} class="wixui-rich-text__text dark:text-white">GET IN TOUCH</span></h2></div>
        <div id="comp-kkr5b8pl" class="HcOXKn SxM0TO QxJLC3 comp-kkr5b8pl wixui-rich-text"   data-motion-enter="done"><p class="font_7 wixui-rich-text__text" style={{"font-size":"24px"}}><span class="color_14 wixui-rich-text__text dark:!text-gray-300">Got Questions? Just Contact Me Below</span></p></div>
      </div>
        <div
          id="comp-kkr4fljd"
          className="comp-kkr4fljd YzqVVZ wixui-column-strip__column-24" 
        >
          <div
            id="bgLayers_comp-kkr4fljd"
            data-hook="bgLayers"
            data-motion-part="BG_LAYER"
            className="MW5IWV "
          >
            {/* <div data-testid="colorUnderlay" className="LWbAav Kv1aVt" /> */}
            <div
              id="bgMedia_comp-kkr4fljd"
              data-motion-part="BG_MEDIA"
              className="VgO9Yg"
            />
          </div>

          <div
            data-mesh-id="comp-kkr4fljdinlineContent"
     
               className="max-w-full ml-[0.8rem] mr-[1.5rem] sm:px-[4%] py-[8%]"
          >
            <div id="contact-form" ref={sectionRef} 
              data-mesh-id="comp-kkr4fljdinlineContent-gridContainer"
                className="JVi7i2 comp-kkr5ccgf"
            >
              {/* Contact Form */}
              <form 
                // id="comp-kkr5ccgf"
                className="JVi7i2 comp-kkr5ccgf wixui-form height-[auto] !w-[387px] sm:!w-[485px]  space-y-6"
                onSubmit={handleSubmit}
              >
                {/* First Name Input */}
                <div className="grid grid-cols-2 space-x-8" >
                <div
                  id="comp-kkr5cchd"
                  className="MpKiNN comp-kkr5cchd wixui-text-input qzvPmW"
                >
                  <label
                    htmlFor="input_comp-kkr5cchd"
                    className="wPeA6j wixui-text-input__label  dark:!text-gray-300" 
                  >
                    First Name
                  </label>
                  <div className="w-full ">
                    <input
                      name="firstName"
                      id="input_comp-kkr5cchd"
                      className="KvoMHf has-custom-focus wixui-text-input__input w-full !h-14  border border-black rounded-md  w-full flex px-2"
                      type="text"
                      placeholder=""
                      aria-required="false"
                      maxLength={100}
                      autoComplete="off"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Last Name Input */}
                <div
                  id="comp-kkr5cchp1"
                  className="MpKiNN comp-kkr5cchp1 wixui-text-input qzvPmW"
                >
                  <label
                    htmlFor="input_comp-kkr5cchp1"
                    className="wPeA6j wixui-text-input__label  dark:!text-gray-300"
                  >
                    Last Name
                  </label>
                  <div className="pUnTVX">
                    <input
                      name="lastName"
                      id="input_comp-kkr5cchp1"
                      className="KvoMHf has-custom-focus wixui-text-input__input w-full !h-14  border border-black rounded-md px-2 w-full flex"
                      type="text"
                      placeholder=""
                      aria-required="false"
                      maxLength={100}
                      autoComplete="off"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                </div>

                {/* Email Input */}
                <div className="grid grid-cols-2 space-x-8">
                <div
                  id="comp-kkr5ccht"
                  className="MpKiNN comp-kkr5ccht wixui-text-input qzvPmW lPl_oN"
                >
                  <label
                    htmlFor="input_comp-kkr5ccht"
                    className="wPeA6j wixui-text-input__label  dark:!text-gray-300"
                  >
                    Email
                  </label>
                  <div className="pUnTVX">
                    <input
                      name="email"
                      id="input_comp-kkr5ccht"
                      className="KvoMHf has-custom-focus wixui-text-input__input w-full !h-14  border border-black rounded-md px-2"
                      type="email"
                      placeholder=""
                      required=""
                      aria-required="true"
                      pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                      maxLength={250}
                      autoComplete="off"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div
                  id="comp-kl7q6pv2"
                  className="MpKiNN comp-kl7q6pv2 wixui-text-input qzvPmW"
                >
                  <label
                    htmlFor="input_comp-kl7q6pv2"
                    className="wPeA6j wixui-text-input__label dark:!text-gray-300"
                  >
                    Subject
                  </label>
                  <div className="pUnTVX">
                    <input
                      name="subject"
                      id="input_comp-kl7q6pv2"
                      className="KvoMHf has-custom-focus wixui-text-input__input w-full !h-14  border border-black rounded-md px-2"
                      type="text"
                      placeholder=""
                      aria-required="false"
                      autoComplete="off"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>


                </div>
             

                {/* Message Input */}
                <div
                  id="comp-kkr5cchz"
                  className="snt4Te comp-kkr5cchz wixui-text-box oKe0Po max-w-[106%] sm:max-w-full mt-6"
                >
                  <label
                    htmlFor="textarea_comp-kkr5cchz"
                    className="PSkPrR wixui-text-box__label  dark:!text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="textarea_comp-kkr5cchz"
                    name="message"
                    className="rEindN has-custom-focus wixui-text-box__input border border-black rounded-md px-4 "
                    placeholder="Message here"
                    aria-required="false"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button */}
                <div
                  className="comp-kkr5cci w-[104%]  lg:!w-1/2"
                  id="comp-kkr5ccid"
                  aria-disabled="false"
                >
                  <button
                    aria-disabled="false"
                    data-testid="buttonElement"
                    className="uDW_Qe wixui-button PlZyDq mt-6 "
                    type="submit"
                  >
                   <span className="l7_2fn wixui-button__label !bg-black !text-white py-4 px-[14%] challenge-timer sluL5Ep bg-white uppercase !text-black !flex !py-6 content-center justify-center !mt-6 !rounded-md hover:!bg-slate-800">
                    SUBMIT</span>
                  </button>
                </div>

                {/* Submission Confirmation Message */}
                <div
                  id="comp-kkr5cci8"
                  className="HcOXKn SxM0TO QxJLC3 comp-kkr5cci8 wixui-rich-text"
                  data-testid="richTextElement"
                >
                  <p
                    className="font_8 wixui-rich-text__text"
                    style={{ fontSize: 16 }}
                  >
                    <span className="py-4 color_14 wixui-rich-text__text">
                      Thanks for submitting!
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
</div> 
        {/* Background Media */}
        <div
          id="comp-kkr4gate"
          className="comp-kkr4gate YzqVVZ wixui-column-strip__column lg:!col-span-2"
        >
          <div
            id="bgLayers_comp-kkr4gate"
            data-hook="bgLayers"
            data-motion-part="BG_LAYER"
            className="MW5IWV sm:bg-[#0e0b0bd4]"
          >
            {/* <div data-testid="colorUnderlay" className="LWbAav Kv1aVt" /> */}
            <wix-bg-media
              id="bgMedia_comp-kkr4gate"
              className="SUz0WK"
              data-container-id="comp-kkr4gate"
              data-container-size="0, 0"
              data-page-id="c1dmp"
              data-bg-effect-name="BgPanLeft"
              data-motion-part="BG_MEDIA"
              style={{
                width: "618.722px",
                height: 830,
                left: "-51.5602px",
                top: 0,
                transform:"translate3d(15.2854px, 0px, 0px)"
              }}

            >
              <wow-image
                id="img_comp-kkr4gate"
                className="HlRz5e Kv1aVt dLPlxY mNGsUM bgImage w-full"
                data-image-info='{"containerId":"comp-kkr4gate","alignType":"center","displayMode":"fill","targetWidth":392,"targetHeight":830,"isLQIP":true,"imageData":{"width":1540,"height":1660,"uri":"c837a6_fc5fe3caea084e99bf53ce5582651634~mv2.jpg","name":"","displayMode":"fill"}}'
                data-bg-effect-name="BgPanLeft"
                data-has-ssr-src=""
              >
                <img className='object-cover w-full h-full'
                  src="/omari_2_.png"
                  alt=""
                  style={{
                    width: "619.2px",
                    height: 830,
                    objectFit: "cover",
                    objectPosition: "50% 50%"
                  }}
                  width={392}
                  height={830}
                  fetchpriority="high"
                />
              </wow-image>
            </wix-bg-media>
          </div>
          <div
            data-mesh-id="comp-kkr4gateinlineContent"
            data-testid="inline-content"
            className=""
          >
            <div
              data-mesh-id="comp-kkr4gateinlineContent-gridContainer"
              data-testid="mesh-container-content"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

