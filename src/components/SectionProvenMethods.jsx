import Link from "next/link";
import { FadeIn, FadeInStagger } from "./FadeIn";  
import { useEffect, useRef } from "react";
const benefitsOfWorkingOut = [
    {
      title: "Improved Mood",
      description: "Regular exercise can help improve your mood and reduce feelings of anxiety and depression."
    },
    {
      title: "Increased Energy",
      description: "Engaging in physical activity can boost your energy levels and improve overall stamina."
    },
    {
      title: "Better Sleep",
      description: "Exercise can help you fall asleep faster and enjoy deeper sleep."
    },
    {
      title: "Weight Management",
      description: "Consistent workouts can help maintain a healthy weight and prevent obesity."
    },
    {
      title: "Enhanced Mental Health",
      description: "Physical activity stimulates various brain chemicals that may leave you feeling happier, more relaxed, and less anxious."
    }
  ];


export default function SectionProvenMethods() {



  const sectionRef = useRef(null);
  const paragraphRef  = useRef(null);
    const SectionTextCompRef = useRef(null); 

  useEffect(() => {
    const bgMedia = document.getElementById('bgMedia_comp-kkr2t6ab');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    bgMedia.classList.add('bg-pan-right');
                } else {
                    bgMedia.classList.remove('bg-pan-right');
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

useEffect(() => {
    
  const paragraph = document.getElementById('comp-text');
  // const paragraphRef = document.getElementById('ABOUT_SECTION');

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

  if (SectionTextCompRef.current) {
      observer.observe(SectionTextCompRef.current);
  }

  return () => {
      if (SectionTextCompRef.current) {
          observer.unobserve(SectionTextCompRef.current);
      }
  };
}, []);


useEffect(() => {
    
  const paragraph = document.getElementById('comp-kkr2y2qd2');
  // const paragraphRef = document.getElementById('ABOUT_SECTION');

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

  if (paragraphRef .current) {
      observer.observe(paragraphRef .current);
  }

  return () => {
      if (paragraphRef.current) {
          observer.unobserve(paragraphRef .current);
      }
  };
}, []);


  
return <section  id="comp-lt8qptn11" 
 className="relative Oqnisf comp-lt8qptn11 wixui-section relative !block bg-[#76777a33] pt-6 lg:my-12 lg:my-24 pb-24 "
      data-block-level-container="ClassicSection "
      > <div
            id="bgLayers_comp-lt8qptn11"
            data-hook="bgLayers"
            data-motion-part="BG_LAYER"
            className="MW5IWV" >

          </div>
        <div
          data-mesh-id="comp-lt8qptn11inlineContent"
          data-testid="inline-content"
          className="">
          <div
            data-mesh-id="comp-lt8qptn11inlineContent-gridContainer"
            data-testid="mesh-container-content">
           
        
                      <div
                        id="bgLayers_comp-kkr3hmsw"
                        data-hook="bgLayers"
                        data-motion-part="BG_LAYER"
                        className="if7Vw2"
                      >
                        <div data-testid="colorUnderlay" className="tcElKx i1tH8h" />
                        <div
                          id="bgMedia_comp-kkr3hmsw"
                          data-motion-part="BG_MEDIA"
                          className="wG8dni"
                        />
                      </div>  
                    <FadeIn>
                   <div className="V5AUxf py-12  xl:py-24 " id="bgMedia_comp-kkr2t6ab">
                        <div 
                          id="comp-kkr3hmu3"
                          className="comp-kkr3hmu3 YzqVVZ wixui-column-strip__column !bg-[#dcdcdcbf] lg:grid lg:grid-cols-7"
                        >
                          <div
                            id="bgLayers_comp-kkr3hmu3"
                            data-hook="bgLayers"
                            data-motion-part="BG_LAYER"
                            className="MW5IWV dark:!bg-white col-span-4"
                            style={{
                              opacity: 1,
                              transform: "translate3d(0px, 0px, 0px)",
                              visibility: "inherit"
                            }}
                          >
                            <div data-testid="colorUnderlay" className="LWbAav Kv1aVt dark:!bg-[#dcdcdcbf]" />
                            <div  ref={sectionRef}
                              id="bgMedia_comp-kkr3hmu3"
                              
                              style={{height: 800, left: 0, top: 0 }}
                            >
                              <div 
                                id="img_comp-kkr3hmu3"
                                className="HlRz5e Kv1aVt dLPlxY mNGsUM bgImage"
                            
                              >
                                <img 
                                  src="https://static.wixstatic.com/media/c837a6_8019a3c232644764aeef41807054e82e~mv2.jpg/v1/fill/w_980,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_8019a3c232644764aeef41807054e82e~mv2.jpg"
                                  alt=""
                                  style={{
                                    width: 980,
                                    height: 800,
                                    objectFit: "cover",
                                    objectPosition: "50% 50%"
                                  }}
                                  width={980}
                                  height={800}
                                  fetchpriority="high"
                                />
                              </div>
                            </div>
                          </div>
                          <div  
                          className="col-span-3 justify-center content-center" >
                            <div
                              data-mesh-id="comp-kkr3hmu3inlineContent-gridContainer"
                              data-testid="mesh-container-content"
                            >
                            
                              <div  className="max-[679px]:shadowlight max-[640px]:!px-[1%] ">
                                <div id="comp-kkr2y2qd2"
                                    ref={paragraphRef} 
                                    className="relative HcOXKn SxM0TO QxJLC3  wixui-rich-text mt-0 sm:mt-12 !p-8">
                                  <div className="relative HcOXKn SxM0TO QxJLC3 wixui-rich-text mt-0 sm:mt-12 sm:!p-8"> 
                                    <h2 className="absolute-top-0 font_2 wixui-rich-text__text px-8 py-12"
                                    style={{ lineHeight: "normal", fontSize: 50 }}
                                    >
                                    <div style={{ letterSpacing: "normal" }} className="wixui-rich-text__text">
                                      <span style={{ fontWeight: "normal" }} className="wixui-rich-text__text">
                                        <span
                                          style={{ fontFamily: "dinneuzeitgroteskltw01-_812426,sans-serif" }}
                                          className="wixui-rich-text__text dark:!text-black"
                                        >
                                          — TAKE THE FIRST STEP ON A JOURNEY THAT PUSHES YOU TO THE LIMIT
                                        </span>
                                      </span>
                                    </div>
                                  </h2>
                                <Link href="/tracks"  className="flex justify-center content-center my-12"> 
                                  <div type="button" class="bg-wtransparent !hover:bg-black mx-6 sm:mx-0 w-[12em] content-center text-center 
                                    justify-center my-4 !border !border-1 !border-black rounded-md flex btn custom-btn-arrow !rounded-md">
                                  <div href="/tracks"  class="uDW_Qe wixui-button PlZyDq text-black py-4 px-[14%]">
                                    <span class="l7_2fn wixui-button__label !text-black hover:!text-white absolute left-40 !min-w-64">
                                      Join Now</span>
                                  </div>
                              </div>
                          </Link>
                          </div>
                                
                      </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>

    </div>
</section>


}