

import Image from 'next/image';
import Link from 'next/link';
export default function SectionJoin() {
  return (
    <div className="relative isolate bg-custom-gradient pb-4">
      <div className="max-[600px]:pb-16 grid lg:max-w-[89vw] grid-cols-1 lg:grid-cols-3">
      <div  className="col-span-2 h-full w-full z-10">
        <Image src="/what-is-blockchain-1.jpeg" 
          width={600}
          height={300}
          alt="what-is-blockchain-1.jpeg" 
          className="h-full w-full object-cover"
          />
      </div>
        <div className="col-span-1 relative px-0 lg:py-48  lg:min-w-[420px] xl:min-w-[560px] lg:pl-8 xl:pl-14 lg:py-48 xl:pl-10xl:pl-10">
          <div className="px-6 mx-auto max-w-4xl lg:max-w-full">
            <div className="px-4 md:px-6 absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
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
            <div className="md:flex items-center w-full -mb-6">
                 <div class="section-header text-mainText opacity-1">
                    <div data-w-id="c61ae90e-5b42-2ae8-3af4-27a1254fdfcd"
                        className="title-wrap pb-6 mt-4 lg:pb-6 max-w-xl lg:max-w-[34vw]"
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d"
                        }} > 
                      <h1 class="!text-left text-center py-4 md:pt-8 md:pb-4 lg:pt-4 
                            lg:pb-[-4em] max-[1700px]:text-[63px] text-white uppercase">
                           Want to Join ?
                        </h1>
                      </div>
                   </div>
               </div>
               {/* <h2 className="pt-8 text-3xl font-bold tracking-tight text-white">Want to Join ?</h2> */}
                <p className="mt-6 text-lg leading-8 text-gray-300">
                Join our dynamic, team and unleash your full earning potential in
                          a company that&aposs revolutionizing real estate. Our cutting-edge
                          technology ensures you&lsquo;re always ahead of the curve, and our
                          lucrative referral program offers additional income opportunities.
                          Don&apos;t just work in real estate—thrive in it. Join us today and
                          transform your career!
                </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
              <div id="HERO-CTA-BUTTONS" className="lg:-mt-12  py-4 lg:py-12 z-20 ">
                    <div className="!flex grid-cols-2 gap-x-4 ">
                    <Link href="/join">
                
                        <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                            <span className="inline-block absolute top-0 right-0 w-full h-full bg-custom-gradient  group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                             <a  href="/properties"  className="relative z-10 px-5 py-4 px-6 group-hover:bg-black  group-hover:text-white leading-23px" >
                             Join Proxy 
                           </a>
                        </h5>
                  
                    </Link>
                  <div>
                  <Link className='min-[600px]:hidden' href="/blogs/benefits-of-working-with-proxy">
                    <h5 className="uppercase text-sm md:text-base text-white relative group 
                        whitespace-nowrap font-normal mb-0 transition-all duration-300 border 
                              border-black !text-black  hover:border-heading-color inline-block">
                    <span className="inline-block absolute top-0 right-0 w-full h-full bg-white !text-black 
                           group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                    <a href="/contact"
                        className="relative  z-10 relative z-10 px-5 py-4 px-8  group-hover:bg-black  group-hover:text-white  leading-23px lg:py-17px group-hover:text-heading-color leading-23px" >
                      Learn 
                        </a>
                        </h5>
                    </Link>
                <Link className='max-[600px]:hidden' href="/blogs/benefits-of-working-with-proxy">
                    <h5 className="uppercase text-sm md:text-base text-white relative group 
                        whitespace-nowrap font-normal mb-0 transition-all duration-300 border 
                              border-black !text-black  hover:border-heading-color inline-block">
                    <span className="inline-block absolute top-0 right-0 w-full h-full bg-white !text-black 
                           group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                    <a href="/contact"
                        className="relative  z-10 relative z-10 px-5 py-4 px-8  group-hover:bg-black  group-hover:text-white  leading-23px lg:py-17px group-hover:text-heading-color leading-23px" >
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
