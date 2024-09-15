

import Link from "next/link";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { DesktopIcon } from "@sanity/icons";
import PricingCard from "./cards/PricingCard";


export const SectionSSubscription = ({pricingSections, session}) => {
  return <div className="sm:-mt-[5.75rem] overflow-hidden pb-20 sm:pb-24 lg:pb-2 bg-[#5b6068] bg-black">
    <FadeInStagger key={"Pricing-FadeinStager"}>
  <div className="relative  pb-16 max-[680px]:pt-[5.75rem]  pb-8"> 
  <FadeIn>
    <img
      src="/img/beams-pricing.png"
      alt=""
      className="absolute left-0 top-0 z-10 w-[90.4375rem] max-w-none "
    />
    <div className="relative z-20 mx-auto max-w-container px-4 pt-4 sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-[45rem] text-center">
        <h1 className="text-lg font-semibold leading-7 text-sky-500 dark:!text-white -pt-4">
          Get All-access
        </h1>
        <p className="text-white mt-4 text-5xl font-extrabold leading-[3.5rem] tracking-tight text-slate-900 dark:!text-white uppercase">
          {pricingSections?.title ? pricingSections.title : "Get everything, forever."}
        </p>
        <p className="mt-4 text-2xl  text-slate-200 dark:!text-white">
        {pricingSections?.title ? pricingSections.title : "Update this paragrapth"}
        </p>
      </div>
    </div>
    </FadeIn>
  </div>
  
  <div className="mx-auto w-full max-w-container px-4  pb-16">
    <div className="mx-auto grid grid-cols-1 items-start gap-8 sm:max-w-[53em] bg-black !rounded-3xl px-8 min-[1200px]::max-w-[73rem] xl:max-w-[83rem] lg:grid-cols-2 dark:bg-[#5b6068] min-[1400px]:grid-cols-3 max-w-[95%] ">
    {pricingSections?.plans ? pricingSections.plans.map((plan, index) => {
             return <FadeIn key={index} className="lg:px-2">
                       <PricingCard session={session} key={index} plan={plan}/>
                    </FadeIn> 
                }) : <> Loading ....</>
                  
              }
   
    </div>
 
  </div>
 </FadeInStagger> 
</div>

}