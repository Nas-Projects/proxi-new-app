import React from 'react';
// import { cn } from "@/lib/utils";
import clsx from 'clsx';
import Link from 'next/link';

const Card = ({ title, description, href, cta, icon, bg, btnColor,  txtColor, btntxtColor }) => {
  const renderIcon = () => {
    if (icon === 'arrow-topblue') {
      return <img src="/arrow-topblue.svg" loading="lazy" alt="" className="icon-cta" />;
    }
    if (icon === 'button') {
      return <button className={clsx(`${txtColor && txtColor}, ${btntxtColor && btntxtColor}  py-4 px-8`)}>{cta}</button> 
    }
     else if (cta && icon === 'arrow-topblue'){
        return  <div className="inlne-flex"> 
              <button className={clsx(`${txtColor && txtColor}, ${btntxtColor && btntxtColor}  py-4 px-8`)}>{cta}</button>  
               <img src="/arrow-topblue.svg" loading="lazy" alt="" className="icon-cta" />;
            </div>
    }
    else if ( cta && href){
      return  <div className="inlne-flex"> 
           <button className={clsx(`${txtColor && txtColor}, ${btntxtColor && btntxtColor}  py-4 px-8`)}>{cta}</button> 
             <img src="/arrow-topblue.svg" loading="lazy" alt="" className="icon-cta" />;
          </div>
  }
    return null;
  };

  return (
    <div className={clsx(`${bg ? bg :'bg-white'}  ${txtColor &&  txtColor} text-left shadow-md rounded-md p-6`)}>
      <div className="flex flex-col items-start">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-base mb-4">{description}</p>
        <Link href={href} className={clsx( btnColor ? btnColor : "text-blue-500" , "card-link  underline")}>
           {renderIcon()}
        </Link>
      </div>
    </div>
  );
};

export default Card;



// .card {
//   @apply bg-white shadow-md rounded-md p-6;
// }

// .card-content {
//   @apply flex flex-col items-start;
// }

// .card-title {
//   @apply text-xl font-bold mb-2;
// }

// .card-description {
//   @apply text-base mb-4;
// }

// .card-link {
//   @apply text-blue-500 underline;
// }

// .icon-cta {
//   @apply w-6 h-6;
// }