import Link from "next/link";
import { useEffect, useRef } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import elevatorPitch from "../../sanity/schemaTypes/elevatorPitch";
// import './your-stylesheet.css';  // Ensure this import is correct

export default function ElevatorPitch({ElevatorPitch}) {
    const sectionRef = useRef(null);
    const aboutSectionParRef  = useRef(null);

    useEffect(() => {
      const bgMedia = document.getElementById('comp-kkr3f330');
  
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
          { threshold: 0.1 }  // Adjust the threshold as needed
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
    const bgMedia = document.getElementById('comp-kkr3gyea');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    bgMedia.classList.add('bg-pan-left');
                } else {
                    bgMedia.classList.remove('bg-pan-left');
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

  
useEffect(() => 
    
    {const isDesktopOrTablet = () => {
    // Check if the device width is greater than a mobile breakpoint (e.g., 768px)
    return window.innerWidth >= 768;
  };
    if (!isDesktopOrTablet()) {
      // Do not apply the animation on mobile devices
      return;
    }

    const paragraph = document.getElementById('elevator-pitch-bottom');

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

    if (aboutSectionParRef.current) {
      observer.observe(aboutSectionParRef.current);
    }

    return () => {
      if (aboutSectionParRef.current) {
        observer.unobserve(aboutSectionParRef.current);
      }
    };
  }, []);

 useEffect(() => {
        const spanElement = document.querySelector('#slideup');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        spanElement.classList.add('slide-up');
                    } else {
                        spanElement.classList.remove('slide-up');
                    }
                });
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );

        observer.observe(spanElement);

        return () => {
            observer.unobserve(spanElement);
        };
    }, []);


    return (    <FadeInStagger key={"ABOUT_SECTION-STAGGER"}>

        
         <section id="elevator-pitch-bottom"  ref={sectionRef} 
          className="max-[700px]:hidden elevator-pitch-bottom py-6 lg:py-12 dark:!text-white h-full bg-black">
                 <div class="grid grid-cols-6 gap-4">
                    {/* <div class="col-start-2 col-span-4 ...">01</div> */}
                    <div class="col-start-1 col-end-5 ..."><FadeIn>  
                <div id="comp-kkr3f330" 
                     className="col-span-4  w-full HcOXKn c9GqVL QxJLC3 comp-kkr3f330 wixui-rich-text width-full" 
                      data-testid="richTextElement"
                        style={{ visibility: "inherit" }} data-motion-enter="done">
                        <h2 className="max-[600px]:!text-[33px] px-4 lg:px-8 font_2 wixui-rich-text__text" 
                            style={{ lineHeight: "normal", fontSize: 50 }}>
                            <span style={{ letterSpacing: "normal" }} 
                                    className="wixui-rich-text__text">
                                <span style={{ fontWeight: "normal" }} 
                                        className="wixui-rich-text__text">
                                    <span style={{ fontFamily: "dinneuzeitgroteskltw01-_812426,sans-serif" }} 
                                            className="wixui-rich-text__text dark:!text-white">
                                    { ElevatorPitch  ? ElevatorPitch.tagline : `— TAKE THE FIRST STEP ON A JOURNEY THAT PUSHES YOU TO THE LIMIT`}    
                                    </span>
                                </span>
                            </span>
                        </h2>
                    </div>
            </FadeIn> </div>
                    <div class="col-end-7 col-span-2 ..."> <FadeIn> 
            <div id="comp-kkr3gyea" ref={sectionRef} className="col-start-4 hidden col-end-6 comp-kkr3gyea YzqVVZ wixui-column-strip__column !relative 
              min-w-44 px-8 py-8  lg:h-full lg:px-24 dark:!text-white bg-white w-full sm:px-8">
                    <div className="">
                        <div data-testid="mesh-container-content">
                            <div className="" aria-disabled="false" style={{ visibility: "inherit" }}>
                                <Link  href="/tracks" target="_self" className="uDW_Qe wixui-button PlZyDq dark:!text-white text-center inline-flex justify-center" aria-disabled="false">
                                    <span className="l7_2fn wixui-button__label text-black">Join Now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
           </FadeIn> </div>
                    {/* <div class="col-start-1 col-end-7 ...">04</div> */}
                    </div>
            {/* 
            <FadeIn> 
            <div id="comp-kkr3gyea" ref={sectionRef} className="col-start-4 col-end-6 comp-kkr3gyea YzqVVZ wixui-column-strip__column !relative 
              min-w-44 px-8 py-8  lg:h-full lg:px-24 dark:!text-white bg-white w-full sm:px-8">
                    <div className="">
                        <div data-testid="mesh-container-content">
                            <div className="" aria-disabled="false" style={{ visibility: "inherit" }}>
                                <Link  href="/tracks" target="_self" className="uDW_Qe wixui-button PlZyDq dark:!text-white text-center inline-flex justify-center" aria-disabled="false">
                                    <span className="l7_2fn wixui-button__label text-black">Join Now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
           </FadeIn>  */}
         </section>
        
   </FadeInStagger>
    );
}

