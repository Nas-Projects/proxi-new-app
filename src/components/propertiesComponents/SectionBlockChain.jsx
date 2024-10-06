
'use client'

import Link from 'next/link'
import Image from 'next/image'
    
  
    export default function SectionBlockChain(){
      return (
        <div className="relative bg-white">
        
          <div className="relative">
            <div className="mx-auto max-w-7xl">
              <div className="relative z-10mt-4 mx-4  md:pt-14 lg:w-full lg:max-w-2xl">
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                >
                  <polygon points="0,0 90,0 50,100 0,100" />
                </svg>
    
                <div className="relative px-2 pt-8 pb-12 sm:py-40 lg:px-8 lg:pb-56 lg:pt-24 lg:pr-0">
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <div className="hidden sm:mb-10 sm:flex">
                      <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      Blockchain transaction to enrich realestate deals .{' '}
                        <a href="#" className="text-custom-gradient whitespace-nowrap font-semibold text-indigo-600">
                          <span aria-hidden="true" className="absolute inset-0" />
                          Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </div>
                    <h1 className="text-left pt-4 pb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                     <span className='text-custom-gradient text-left'></span>Revolutionizing <br/>
                      Real Estate <br></br>with <span className='text-custom-gradient'>Blockchain</span> Technology
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600  ">
                      At PROXY, we leverage blockchain technology to enrich the real estate experience, making transactions more secure, transparent, and efficient. Here are three compelling use cases that demonstrate how blockchain transforms the real estate landscape:

                    Transparent Property Transactions: Blockchain ensures that all property transactions are recorded on an immutable ledger, allowing buyers and sellers to verify ownership history and transaction details. This transparency minimizes fraud and builds trust among parties.

                    Smart Contracts: Our platform utilizes smart contracts to automate and enforce agreements...


                    </p>
                    <div id="HERO-CTA-BUTTONS" className="lg:-pt-12  py-4 lg:py-12 z-20 ">
                    <div className="!flex grid-cols-2 gap-x-4 ">
                    <Link href="/blockchain">
                
                        <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                            <span className="inline-block absolute top-0 right-0 w-full h-full bg-custom-gradient  group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                             <a  href="/properties"  className="relative z-10 px-5 py-4 px-6  group-hover:text-heading-color leading-23px" >
                             Read More
                           </a>
                        </h5>
                  
                    </Link>
                  <div>
                <Link href="/contact">
                    <h5 className="uppercase text-sm md:text-base text-white relative group 
                        whitespace-nowrap font-normal mb-0 transition-all duration-300 border 
                              border-black !text-black  hover:border-heading-color inline-block">
                    <span className="inline-block absolute top-0 right-0 w-full h-full bg-white !text-black 
                           group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                    <a href="/contact"
                        className="relative  z-10 relative z-10 px-5 py-4 px-8  group-hover:text-heading-color leading-23px lg:py-17px group-hover:text-heading-color leading-23px" >
                        Contact Us
                        </a>
                        </h5>
                    </Link>
                    </div>
                    </div>
                </div>
                    {/* <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="/blogs#proxy-s-implementation-of-blockchain-for-real-estate-innovation"
                        className="rounded-md bg-custom-gradient px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        READ MORE
                      </a>
                      <a href="/blockchain" className="text-sm font-semibold leading-6 text-gray-900">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              
            <Image
                alt=""
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      )
    }
    