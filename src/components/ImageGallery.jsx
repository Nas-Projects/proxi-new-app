'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from 'clsx';
import { Container } from "./Container";

// import { sanityClient } from '@/sanity/lib/client'
import { urlFor } from "@/sanity/lib/image.js";

const ImageGallery = ({ images, bannerImage }) => {
  const [mainImage, setMainImage] = useState(bannerImage);
  const [mergedImages, setMergedImages] = useState(images);

  console.log("bannerImage", bannerImage, "IMAGES", images)

  
  // useEffect(() => {
  //   setMergedImages([bannerImage, ...images]);
  // }, [images, bannerImage]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  }

// aspect-[48/34] sm:aspect-[4/4] small:mx-16
  return (
    <div className="relative flex-col mt-4 sm:mt-0">
      <div className="sm:max-h-[60vh] mb-4">
        <div
          key={mainImage?.asset?._ref}
          className="relative aspect-[29/34]  sm:aspect-[29/34]
           sm:w-full sm:h-full sm:max-h-[90vh] overflow-hidden bg-ui-bg-subtle
            transition-all !duration-900 ease-in-out px-0 sm:px-0"
           id={mainImage?.asset?._ref}
        >

          
          <img
          src={urlFor(mainImage?.asset?._ref).url()}
            // src={mainImage.imageSrc}
            priority={true}
            className="!h-full absolute inset-0 rounded-rounded sm:rounded-sm transition-all duration-500 ease-in-out w-full"
            alt={`Product image`}
            fill
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 flex-1 small:mx-16 gap-x-4 gap-y-4 sm:-mt-[10%]">
        {mergedImages.map((image, index) => (
          <div
            key={image._key}
            className={clsx(
              "relative aspect-[4/4] w-full overflow-hidden bg-ui-bg-subtle cursor-pointer",
              {
                "ring-4 ring-gray-700 rounded-xl" : image.asset?._ref === mainImage.asset?._ref,
              }
            )}
            id={image._key}
            onClick={() => handleThumbnailClick(image)}
          >
            <Image
              key={image.asset?._ref}
              // src={image.imageSrc}
              src={urlFor(image.asset?._ref).url()}
              priority={index <= 2 ? true : false}
              className="absolute inset-0 rounded-rounded"
              alt={`Product image ${index + 1}`}
              fill
              sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
