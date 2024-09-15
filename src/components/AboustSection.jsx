import Link from "next/link";
import { useEffect, useRef } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { urlFor } from "@/sanity/lib/image.js";
import {TextTrimmer} from '@/utils/TextTrimmer';

export default function AboutSection({aboutSection, shouldBreak}) {
    const sectionRef = useRef(null);
    const aboutSectionParRef  = useRef(null);
    
    let textContent = aboutSection.tagline;
    console.log("aboutSection.tagline-after..", textContent);
    if (shouldBreak) {
      const [firstLine, secondLine] = aboutSection.tagline.split('.');
      textContent = (
        <>
          <span className="color_11 wixui-rich-text__text">{firstLine.trim()}.</span>
          <br className="wixui-rich-text__text" />
          <div id="slideup" className="color_11 wixui-rich-text__text">{secondLine.trim()}</div>
        </>
      );
    } else {
      textContent = (
        <span className="color_11 wixui-rich-text__text">
          {/* {aboutSection.tagline} */}
          {/* <div id="slideup" className="color_11 wixui-rich-text__text">I MADE IT</div> */}
        </span>
      );
    }
  
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

    const paragraph = document.getElementById('comp-kkr2y2qd');

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
    
    if (!spanElement) return; // Ensure the span element exists before observing
    
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
      if (spanElement) {
        observer.unobserve(spanElement);
      }
    };
  }, [aboutSection]);
  const trimmedText = TextTrimmer(aboutSection?.description)
    return (
        <section id="ABOUT_SECTION" ref={sectionRef} className="-mt-[8em] sm:-mt-[6em] overflow-hidden">
            <FadeInStagger key={"ABOUT_SECTION-STAGGER"}>
            <div className="!relative h-full">
                <div>
                    <section id="comp-kkr2t67f" className="comp-kkr2t67f CohWsy wixui-column-stri">
                        <div data-testid="columns" className="V5AUxf sm:grid grid-cols-7 !gap-x-0 sm:!h-[89.5vh] sm:!w-[100vw]">
                            <div id="comp-kkr2t6ab" className="h-full !w-[100%] sm:!h-[50vh]  sm:!w-[57.2vw] sm:col-span-4 banner">
                                <div id="bgLayers_comp-kkr2t6ab" data-hook="bgLayers" data-motion-part="BG_LAYER" className="MW5IWV bg-[#5b6068]">
                                    {/* <div data-testid="colorUnderlay" className="LWbAav Kv1aVt" /> */}
                                    <div
                                        id="bgMedia_comp-kkr2t6ab"
                                        className="SUz0WK w-[1057.6px] lg:w-[928.078px] left-[93.6602px] lg:left-[-77.3398px]"
                                        data-container-id="comp-kkr2t6ab"
                                        data-container-size="0, 0"
                                        data-page-id="c1dmp"
                                        data-bg-effect-name="BgPanRight"
                                        data-motion-part="BG_MEDIA"
                                        style={{
                                            // width: "928.078px",
                                            height: "900px",
                                            position: "relative",
                                            display: "block",
                                            // left: "-77.3398px",
                                            top: 0,
                                            transform: "translate3d(-6.6519px, 0px, 0px)"
                                        }}
                                    >
                                        <wow-image
                                            id="img_comp-kkr2t6ab"
                                            className="HlRz5e Kv1aVt dLPlxY mNGsUM bgImage"
                                            data-image-info='{"containerId":"comp-kkr2t6ab","alignType":"right","displayMode":"fill","targetWidth":588,"targetHeight":900,"isLQIP":true,"imageData":{"width":2300,"height":1876,"uri":"c837a6_55e351b2fc7b4c6ab66269b7f6b1d213~mv2.jpg","name":"","displayMode":"fill"}}'
                                            data-bg-effect-name="BgPanRight"
                                            data-has-ssr-src=""
                                        >
                                            <img className=" w-[400px] sm:w-full"
                                                // src={urlFor(challenge?.images[0]).url()}
                                                src={urlFor(aboutSection.coverImage).url()}
                                                alt=""
                                                style={{
                                                    width: "927.6px",
                                                    height: "900px",
                                                    objectFit: "cover",
                                                    objectPosition: "100% 50%"
                                                }}
                                                width={588}
                                                height={900}
                                                fetchpriority="high"
                                            />
                                        </wow-image>
                                    </div>
                                </div>
                                <div data-mesh-id="comp-kkr2t6abinlineContent" data-testid="inline-content" className="banner-title absolute top-[30%] !left-[36%] text-white  sm:!top-[27%] sm:!left-[12%] text-white">
                                    <div data-mesh-id="comp-kkr2t6abinlineContent-gridContainer" data-testid="mesh-container-content">
                                        <div id="comp-kkr2wmy4" className="HcOXKn SxM0TO QxJLC3 comp-kkr2wmy4 wixui-rich-text sm:!w-[90%]"  style={{ visibility: "inherit" }} data-motion-enter="done">
                                            <h2 className="font_0 wixui-rich-text__text" style={{ fontSize: 96 }}>
                                                <span style={{ letterSpacing: "0.02em" }} className="wixui-rich-text__text max-[490px]:hidden">
                                                    <span style={{  lineHeight:'9.4vw' }} className="wixui-rich-text__text font-extrabold">
                                                       {textContent}
                                                       
                                                        {/* <span className="color_11 wixui-rich-text__text">
                                                            {aboutSection.tagline}
                                                            <br className="wixui-rich-text__text" />
                                                             <div id="slideup" className="color_11 wixui-rich-text__text">I MADE IT</div>
                                                        </span> */}
                                                    </span>
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:!col-span-3 sm!:w-[30vw] max-[679px]:absolute bottom-[5px] sm:!relative px-1 sm:!py-[33%] sm:!px-[0%] lg:bottom-[0] overflow-hidden min-[679px]:shadowlight sm:!px-[10%]">
                                <div id="bgLayers_comp-kkr2tnxo" data-hook="bgLayers" data-motion-part="BG_LAYER" className="MW5IWV">
                                    {/* <div data-testid="colorUnderlay" className="LWbAav Kv1aVt" /> */}
                                    <div id="bgMedia_comp-kkr2tnxo" data-motion-part="BG_MEDIA" className="VgO9Yg" />
                                </div>
                                <div data-mesh-id="comp-kkr2tnxoinlineContent" data-testid="inline-content" className="max-[679px]:shadowlight max-[640px]:!mx-[30%] ">
                                    <div >
                                        <div id="comp-kkwjaq00" className="HcOXKn SxM0TO QxJLC3 comp-kkwjaq00 wixui-rich-text " data-testid="richTextElement" style={{ visibility: "inherit" }} data-motion-enter="done">
                                            <p className="font_5 wixui-rich-text__text p-6 !text-2xl" style={{ fontSize: 18 }}>
                                                <Link href="/about" target="_self" className="wixui-rich-text__text !text-white sm:p-8 ">
                                                    —&nbsp;
                                                </Link>
                                                { aboutSection  ? aboutSection.title : '- ABOUT ME'}
                                            </p>
                                        </div>
                                    <div id="comp-kkr2y2qd"
                                         ref={aboutSectionParRef} 
                                        //  ref={aboutSectionParagraphRef} 
                                         className="relative HcOXKn SxM0TO QxJLC3  wixui-rich-text mt-0 sm:mt-12 !p-8" 
                                         data-testid="richTextElement">
                                            <p className="font_7 wixui-rich-text__text sm:!px-8 " style={{ lineHeight: "1.4em", fontSize: 24 }}>
                                                <span className="color_14 wixui-rich-text__text dark:text-gray-400 pb-4 !text-gray-200">
                                               { aboutSection  ? trimmedText : `I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="comp-kkr2zof2 FubTgkboyyom-0 lg:mt-12 " id="comp-kkr2zof2" aria-disabled="false" style={{ visibility: "inherit" }} data-motion-enter="done">
                                            <Link data-testid="linkElement" href="/about" target="_self" className="uDW_Qe wixui-button PlZyDq px-4 pb-4" aria-disabled="false">
                                                <span className="!px-4 l7_2fn wixui-button__label !bg-black !text-white py-4 px-[14%] challenge-timer sluL5Ep bg-white uppercase !text-black !flex !py-6 content-center justify-center !mt-6">Read More</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
         </FadeInStagger>
        </section>
    );
}

