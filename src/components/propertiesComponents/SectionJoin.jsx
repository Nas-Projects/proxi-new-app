// export default function WannaJoin() {
//     return(<div className="relative py-4 h-full w-full">
//       <h1>Want to Join</h1>
//        <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
//           <div
//             aria-hidden="true"
//             className=" inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
//           >
//             <div
//               style={{
//                 clipPath:
//                   'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//               }}SectionJoin';SectionJoin';
//               className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
//             />
//             <div className="mx-auto max-w-2xl text-center">
//             <div className="px-[2%] md:min-h-[750px] bg-white mt-4 sm:mt-8 lg:mt-24  ss:min-h-[600px] 
//           min-h-[850px] mx-auto lg:!mx-[4%] flex items-center relative ">
          
//           <div className="w-full block lg:inline-lex">
//           <div className="items-center  mx-auto max-w-[86rem] px-4 lg:p-8 xl:p-12 "> 
          
//             <div
//               className="flex items-center w-full md:mb-16 ss:mb-8  mb-16"
//               style={{ opacity: 1, transform: "none", willChange: "auto" }}>
//               <h1 className="text-custom-gradient font-bold md:text-[55px] ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5">
//               XXX Join the team?
//               </h1>
//               <div
//                 className="flex-1 relative items-center justify-center"
//                 style={{ opacity: 1, transform: "none", willChange: "auto" }}
//               >
//                 <div className="bg-main w-full h-[2px]" />
//               </div>
//             </div>
//             <div
//               className="w-full"
//               style={{ opacity: 1, transform: "none", willChange: "auto" }}
//             >
//               <div
//                 className="flex1 flex justify-center items-start flex-col"
//                 style={{ opacity: 1, transform: "none", willChange: "auto" }}
//               >
//                 <div className="joinContainer -mt-4 xl:-mt-12">
//                   <div className="joinText text-left">
//                     <p>
//                       Join our dynamic, team and unleash your full earning potential in
//                       a company that's revolutionizing real estate. Our cutting-edge
//                       technology ensures you’re always ahead of the curve, and our
//                       lucrative referral program offers additional income opportunities.
//                       Don't just work in real estate—thrive in it. Join us today and
//                       transform your career!
//                     </p>
//                   </div>
//                   <a href="/join" className="pt-12">
//                     <button className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
//                       Join Us
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="w-full">
//           <image src="/public/what-is-blockchain-1.jpeg" alt="what-is-blockchain-1.jpeg"/>
//           </div> 
//           </div>
//         </div></div>
//         </div>
//       </section> 
//       </div>
  
//    ) 
// }


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import Image from 'next/image';
import Link from 'next/link';
export default function SectionJoin() {
  return (
    <div className="relative isolate bg-custom-gradient">
      <div className="max-[600px]:pb-16 grid lg:max-w-[89vw] grid-cols-1 lg:grid-cols-3">
      <div  className="col-span-2 h-full w-full z-10">
        <Image src="/what-is-blockchain-1.jpeg" 
          width={600}
          height={300}
          alt="what-is-blockchain-1.jpeg" 
          className="h-full w-full object-cover"
          />
      </div>
        <div className="col-span-1 relative px-6 lg:py-48 xl:pl-24">
          <div className="mx-auto max-w-4xl  lg:max-w-4xl xl:max-w-4xl">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" width="100%" height="100%" strokeWidth={0} />
              </svg>
              <div
                aria-hidden="true"
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                />
              </div>
            </div>
               <h2 className="max-[600px]:pt-8 text-3xl font-bold tracking-tight text-white">Want to Join ?</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                Join our dynamic, team and unleash your full earning potential in
                          a company that's revolutionizing real estate. Our cutting-edge
                          technology ensures you’re always ahead of the curve, and our
                          lucrative referral program offers additional income opportunities.
                          Don't just work in real estate—thrive in it. Join us today and
                          transform your career!
                </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
              <div id="HERO-CTA-BUTTONS" className="lg:-mt-12  py-4 lg:py-12 z-20 ">
                    <div className="!flex grid-cols-2 gap-x-4 ">
                    <Link href="/contact">
                
                        <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                            <span className="inline-block absolute top-0 right-0 w-full h-full bg-custom-gradient  group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                             <a  href="/properties"  className="relative z-10 px-5 py-4 px-6  group-hover:text-heading-color leading-23px" >
                             Join Proxy
                           </a>
                        </h5>
                  
                    </Link>
                  <div>
                <Link href="/blogs/benefits-of-working-with-proxy">
                    <h5 className="uppercase text-sm md:text-base text-white relative group 
                        whitespace-nowrap font-normal mb-0 transition-all duration-300 border 
                              border-black !text-black  hover:border-heading-color inline-block">
                    <span className="inline-block absolute top-0 right-0 w-full h-full bg-white !text-black 
                           group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                    <a href="/contact"
                        className="relative  z-10 relative z-10 px-5 py-4 px-8  group-hover:text-heading-color leading-23px lg:py-17px group-hover:text-heading-color leading-23px" >
                      Learn More
                        </a>
                        </h5>
                    </Link>
                    </div>
                    </div>
                </div>  
              </div>
            </dl>
          </div>
        </div>
       
      </div>
    </div>
  )
}
