import { useEffect, useRef} from 'react';
import Image from 'next/image';
import  { urlFor } from "@/sanity/lib/image.js";
const SlidingImage = ({hero}) => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (imgRef && entry.isIntersecting) {
            imgRef.current.classList.add('bg-pan-right');
          } else {
            return 
            // imgRef.current.classList.remove('bg-pan-right');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  return (
    <div
      id="bgMedia_comp-kkr1kfyd"
      className="SUz0WK !w-full !object-cover -mb-14 sm:!h-[100vh] z-20"
      data-container-id="comp-kkr1kfyd"
      data-container-size="0, 0"
      data-page-id="c1dmp"
      data-bg-effect-name="BgParallax"
      data-motion-part="BG_MEDIA"
      style={{
        left: 0,
        top: 0,
        willChange: "transform",
        transform: "translate3d(0px, -52.8px, 0px)"
      }}
      ref={wrapperRef}
    >
      <div id="img_slide-in" 
           ref={imgRef}>
        <Image
          className="object-cover h-[1237px] -mt-6 sm:!-mt-0 -mb-64 !h-[140vh-pt-[4em] -pr-24 sm:pt-[0em] !w-[120%] sm:!h-[170vh] sm:w-full aspect-[68/10] xl:pl-[23em] transition-transform duration-1000"
          src={urlFor(hero.banner).url()}
          alt=""
          style={{ height: 1069, objectFit: "cover" }}
          width={980}
          height={1069}
          fetchpriority="high"
        />
      </div>
    </div>
  );
};

export default SlidingImage;
