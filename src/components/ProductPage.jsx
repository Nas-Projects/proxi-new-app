
'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  // Backdrop,
  // DialogPanel,
  Popover,
  // PopoverButton,
  // PopoverGroup,
  // PopoverPanel,
  // Radio,
  // RadioGroup,
  Tab,
  // TabGroup,
  // TabList,
  // TabPanel,
  // TabPanels,
} from '@headlessui/react'
import {

  CurrencyDollarIcon,
  GlobeAmericasIcon,

  XMarkIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { Button } from './Button'
import ImageGallery from './ImageGallery'
import { urlFor } from "@/sanity/lib/image.js";


import imageUrlBuilder from '@sanity/image-url'
// // import { sanityClient } from '@/sanity/lib/client'
// import { createClient } from '@sanity/client';

// const builder = imageUrlBuilder(createClient)

// function urlFor(source) {
//   return builder.image(source)
// }


const product = {
  name: 'Basic Tee',
  price: '$35',
  href: '#',

  images: [
    {
      id: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
    { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: false },
  ],
  description: `
      <p>The Ultimate Workout Plan is designed to challenge and transform your body. This comprehensive plan combines strength training, cardio, and flexibility exercises for a well-rounded fitness regimen.</p>
      <p>Perfect for all fitness levels, this plan offers modifications for beginners and advanced athletes. Stay committed and see the results you desire.</p>
    `,
    details: [
      'Customized workout routines for all fitness levels',
      'Combines strength, cardio, and flexibility exercises',
      'Includes video tutorials and detailed instructions',
      'Track your progress with our fitness app',
    ],
  
}
const policies = [
  { name: 'Progress Tracking', icon: GlobeAmericasIcon, description: 'Track your workouts and see your progress over time.' },
  { name: 'Nutrition Guidance', icon: CurrencyDollarIcon, description: 'Receive expert advice on what to eat for optimal performance.' },
]

// const policies = [
//   { name: 'Personalized Training Plans', icon: FitnessCenterIcon, description: 'Get a custom workout plan tailored to your goals.' },
//   { name: 'Nutrition Guidance', icon: LocalDiningIcon, description: 'Receive expert advice on what to eat for optimal performance.' },
//   { name: 'Flexible Membership Options', icon: CardMembershipIcon, description: 'Choose a membership plan that fits your schedule and budget.' },
//   { name: 'Progress Tracking', icon: AssessmentIcon, description: 'Track your workouts and see your progress over time.' },
//   { name: 'Community Support', icon: PeopleIcon, description: 'Join a supportive community of fitness enthusiasts.' },
// ];
const reviewsData = {
  average: 3.9,
  totalCount: 512,
  featuredReview: {
    id: 1,
    title: "Amazing Workout Track",
    rating: 5,
    content: `
      <p>This workout track has transformed my fitness routine. The structure and progression are perfect for hitting my body transformation goals. Highly recommended!</p>
    `,
    author: 'John Doe',
    date: 'June 1, 2024',
    datetime: '2024-06-01',
    featured: true,
  },
  otherReviews: [
    {
      id: 2,
      title: "Effective and Motivating",
      rating: 4,
      content: `
        <p>The workout track keeps me motivated and has been effective in helping me achieve my fitness goals. It’s challenging but worth it.</p>
      `,
      author: 'Jane Smith',
      date: 'June 15, 2024',
      datetime: '2024-06-15',
      featured: false,
    },
    {
      id: 3,
      title: "Great Results!",
      rating: 5,
      content: `
        <p>I've seen great results with this workout track. It's well designed and pushes me to my limits in the best way possible.</p>
      `,
      author: 'Chris Johnson',
      date: 'June 20, 2024',
      datetime: '2024-06-20',
      featured: false,
    },
    {
      id: 2,
      title: "Best decision ever",
      rating: 4,
      content: `
        <p>Following this workout track helped me stay consistent and motivated. I can see significant changes in my body shape. Great program!</p>
      `,
      author: 'Jane Smith',
      date: 'April 12, 2023',
      datetime: '2023-04-12',
      featured: false
    },
    {
      id: 3,
      title: "Achieved my goals",
      rating: 4,
      content: `
        <p>I was skeptical at first, but this workout track really works. I've hit all my fitness goals and feel stronger than ever.</p>
      `,
      author: 'Sam Johnson',
      date: 'May 20, 2023',
      datetime: '2023-05-20',
      featured: false
    },
    {
      id: 4,
      title: "Good but challenging",
      rating: 3,
      content: `
        <p>This workout track is effective but definitely not for beginners. If you're up for a challenge, this is for you.</p>
      `,
      author: 'Alex Lee',
      date: 'March 15, 2023',
      datetime: '2023-03-15',
      featured: false
    },
    {
      id: 5,
      title: "Effective workout plan",
      rating: 5,
      content: `
        <p>I've tried many workout plans, but this one stood out. It helped me shed fat and build lean muscle efficiently.</p>
      `,
      author: 'Chris Kim',
      date: 'January 10, 2023',
      datetime: '2023-01-10',
      featured: false
    }
  ],
};



  

const relatedProducts = [
  {
    id: 1,
    name: 'Weight Loss',
    href: '#',
    imageSrc: 'https://static.wixstatic.com/media/c837a6_55e351b2fc7b4c6ab66269b7f6b1d213~mv2.jpg/v1/fill/w_706,h_900,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_55e351b2fc7b4c6ab66269b7f6b1d213~mv2.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$535',
    // color: 'Aspen White',
  },
  // More products...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductPage({product}) {
  const [open, setOpen] = useState(false)
  console.log("PRODUCT: " + product)
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  // let galleryImages = product.images.push(product.bannerImage)
  // console.log("GALLERY_IMAGESSSSS--->: " , product.images.push(product.bannerImage))
  console.log("__PRODUCT-bannerImage", product.bannerImage, "PRODUC-IMAGES", product.images)
  return (
    <div className="dark:!text-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative  !z-50 ">
        <Dialog.Backdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            transition
            className="relative flex w-full max-w-screen transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5 bg-black !z-50">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

          
       <div className="space-y-6 border-t border-gray-200 dark:border-gray-500 px-4 py-6 dark:bg-black">
                {/* Reviews */}
        <div aria-labelledby="reviews-heading" className="px-4 sm:mt-16 sm:mt-24 !flex-block">
          <h2 id="reviews-heading" className="py-6 text-lg font-medium text-slate-200 dark:text-white">
            Recent reviews
          </h2>

          <div className="mt-6 space-y-10 divide-y divide-gray-200 dark:divide-gray-600 dark:divide-gray-500 border-b pb-4 border-t border-gray-200 dark:border-gray-400 pb-10">
            {reviewsData.otherReviews.map((review) => (
              <div key={review.id} className=" pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                  <div className="flex items-center xl:col-span-1">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                            'h-9 w-9 flex-shrink-0',
                          )}
                        />
                      ))}
                    </div>
                    <p className="ml-3 text-2xl font-bold mt-4 text-gray-700 dark:text-gray-200">
                      {review.rating}
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                  </div>

                  <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                    <h3 className="text-2xl text-gray-900 dark:text-gray-100">{review.title}</h3>

                    <div
                      dangerouslySetInnerHTML={{ __html: review.content }}
                      className="mt-3  text-xl space-y-6 text-gray-500 dark:text-gray-300"
                    />
                  </div>
                </div>

                <div className="text-lg mt-6 flex items-center lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                  <p className="font-medium mt-[1em] text-gray-900 dark:text-gray-300">{review.author}</p>
                  <time
                    dateTime={review.datetime}
                    className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0 dark:text-gray-400"
                  >
                    {review.date}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </div>

              {/* {reviewsData.otherReviews.map((review) => (
                <div key={page.name} className="flow-root">
     
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))} */}


            </div>

            {/* <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                  className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div> */}
          </Dialog.Panel>
        </div>
      </Dialog>

    

      <div id="PRODUCT-PAGE_MAIN"className="mx-auto  pt-2 sm:pt-12 sm:!pt-0 max-w-xl pb-16 sm:px-6 sm:pb-24 lg:max-w-8xl xl:max-w-[100vw] lg:pl-0 lg:pr-0">
      {/* <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8"> */}
        
        <div className="">
         <div className="">
            <ImageGallery images={product.images} bannerImage={product.images[0]}/>
            <div className="absolute top-[29.5em] left-[2em] mr-8 bg-black lg:bg-[#6969696e] px-4 sm:backdrop-blur-xl rounded-xl  py-4  lg:top-[10%] sm:left-20 lg:w-[60vw] lg:px-8  xl:lg:w-[40vw] lg:col-span-5 lg:col-start-8 ">
            <div className="flex justify-between -mb-[2em] ">
              <h1 className="text-xl max-[640px]:text-[#efefef] lg:!text-4xl xl:!text-7xl font-medium text-gray-900 banner-title ">{product.title}</h1>
            </div>
         
            <div className="mt-4 sm:nt-8">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <p className="text-lg sm:text-2xl font-extrabold text-gray-700 mt-4 dark:text-gray-100 ">
                  {reviewsData.average}
                  <span className="sr-only"> out of 5 stars</span>
                </p>
               
                <div className="ml-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviewsData.average > rating ? 'text-stars' : 'text-gray-200',
                        'h-5 w-5 lg:h-8 lg:w-8 flex-shrink-0',
                      )}
                    />
                  ))}
                </div>
                 <div className="grid grid-cols-2 sm:flex items-center">
                <div aria-hidden="true" className="ml-4 text-sm text-gray-300 dark:text-white">
                <span className="text-lg lg:text-2xl "> out of 5 stars</span>
                </div>
                <div className="sm:ml-4 flex">
                  <Button  onClick={() => setOpen(true)}  href="#" className="text-md  flex sm:dark:bg-black lg:text-xl font-medium text-indigo-600 hover:text-orange-200">
                    See {reviewsData.totalCount} reviews
                  </Button>
                </div>
              </div>
            </div>
            </div>
          </div>

     
          </div>
         
        </div>
        <div className="bg-[#191a1b00] pb-24">
        <div className="mx-w-auto relative px-6 xl:grid lg:grid-cols-10 lg:gap-x-12 pt-12 sm:pt-[6rem] sm:mx-[0%] xl:mx-[15%] min-[1400px]:mx-[15.5%] bg-black ">
         <div className="mt-8 lg:col-span-5 lg:pl-0  className={`${geistSans.variable} ${geistMono.variable} antialiased`">
            <form>
              <div className="sm:mt-8">
                <div className="flex items-center justify-between">
                <h3 className="text-3xl font-medium text-gray-900 text-white dark:text-gray-200">{product.price}</h3>
                  <h3 className="text-3xl lg:text-l;g xl:text-xlfont-medium text-gray-900 text-white  dark:text-gray-300">(5 Weeks)</h3>
                  <a href="#" className="text-md lg:text-l;g xl:text-xl font-medium text-zink-300 dark:text-[var(--themeColorGray1)] hover:text-indigo-500">
                    See weeks chart
                  </a>
                </div>

                <fieldset aria-label="Choose a size" className="mt-2">
                
                </fieldset>
              </div>

              <button
                type="submit"
                className="dark:text-white mt-8 flex w-[69.2vw] sm:w-[32vw] lg:max-w-[31vw] xl:max-w-[17vw] items-center justify-center rounded-md border border-transparent dark:bg-[var(--themeColorGray)] bg-white text-black px-8 py-3 text-base font-medium  hover:bg-white dark:hover:text-black focus:outline-none 
                focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:divide-gray-600"
              >
               Start Track
              </button>
            </form>

            {/* Policies */}
              <div id="track-details-right" className="mt-10">
                <div aria-labelledby="policies-heading" >
                  <h2 id="policies-heading" className="sr-only">
                    Our Policies
                  </h2>

                  <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {policies.map((policy) => (
                      <div key={policy.name} className="bg-zinc-800 text-white border !border-black rounded-lg dark:border-gray-200 dark:bg-gray-50 p-6 text-center">
                        <dt>
                          <policy.icon aria-hidden="true" className="mx-auto h-8 w-8 flex-shrink-0 text-gray-400" />
                          <span className="mt-4 text-xl lg:text-xl  xl:text-2xl font-medium text-gray-900 text-white dark:text-gray-200 ">{policy.name}</span>
                        </dt>
                        <dd className="mt-1 text-xl text-gray-300 dark:text-gray-300">{policy.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>  
          </div> 
                

                
        <div id="details" className='lg:col-span-5  mt-10 sm:mt-0 '> {/* Product details */}
          <div className="mt-14">
              <h2 className="!text-5xl lg:text-2xl  xl:text-3xl font-mediumtext-gray-900 text-white dark:text-gray-200">Description</h2>
              <div
                dangerouslySetInnerHTML={{ __html: product.summary }}
                className="prose text-2xl text-slate-300 hover:text-slate-200 lg:text-2xl  xl:text-2xl sm:mt-2 dark:text-gray-400 mt-8"
              />
            </div>

              <div className="mt-10 border-t border-gray-200 pt-8">
                <h2 className="!text-5xl lg:text-2xl xl:text-3xl font-medium text-gray-900 text-white dark:text-gray-200 py-4">Modules &amp; Process</h2>

                <div className="prose text-2xl text-left lg:text-2xl  xl:text-2xl sm:mt-2 text-slate-300 hover:text-slate-200  dark:text-gray-400 mt-8">
                  <ul role="list">
                    {product.details.map((item) => (
                      <li key={item._key}>{item.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div aria-labelledby="reviews-heading" className="pt-8 px-8 lg::mt-4 sm:pt-10 xl:mx-[15%] min-[1400px]:mx-[15.5%] bg-black">       
            <h2 className="text-3xl text-white py-4">
                 {product.participants.length}   Track Participants
                  </h2>
                  <div className="grid lg:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ">
                     {!product.participants == null || product.participants.length > 0 && product.participants.map(participant => (
                  <div key={participant.id} className="flex items-center mt-4">
                    <img
                      src={urlFor(participant.avatar).url()}
                      alt={"participant.avatar"}
                      className="h-10 w-10 rounded-full"
                    />
                    <p className="ml-4 text-lg font-medium text-slate-200 dark:text-gray-900">{participant.name}</p>
                  </div>
                ))}
                  </div>
          
   {/* Reviews */}</div>

        <div aria-labelledby="reviews-heading" className="pt-8 lg::mt-4 sm:pt-10 xl:mx-[15%] min-[1400px]:mx-[17%] bg-black">

          <div className="px-[4%] py-12">
            <h2 id="reviews-heading" className="!text-5xl lg:text-2xl xl:text-3xl font-medium text-gray-900 text-white dark:text-gray-200 ">
              Recent reviews
            </h2>
          <div className="mt-6 space-y-10 divide-y divide-gray-200 dark:divide-gray-600 border-b border-t border-gray-200 pb-10 px">
            {product.reviews.map((review) => (
              <div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                  <div className="flex items-center xl:col-span-1">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            review.rating > rating ? 'text-stars' : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0',
                          )}
                        />
                      ))}
                    </div>
                    <p className="ml-3 text-xl text-gray-700 dark:text-gray-300 pt-5">
                      {review.rating}
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                  </div>

                  <div className="mt-4  xl:col-span-2 xl:mt-0">
                    <h3 className="text-2xl lg:mt-6 font-medium text-gray-900 text-white dark:text-gray-300 ">{review.title}</h3>

                    <div
                      dangerouslySetInnerHTML={{ __html: review.content }}
                      className="mt-3 space-y-6 text-xl text-gray-500 dark:text-[var(--themeColorGray1)] "
                    />
                  </div>
                </div>

                <div className="mt-8 flex items-center text-lg lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                  <p className="font-medium text-gray-900 text-white dark:text-[var(--themeColorGray1)] pt-3">{review.author}</p>
                  <time
                    dateTime={review.datetime}
                    className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                  >
                    {review.date}
                  </time>
                </div>
              </div>
            ))}
          </div>
          </div>

        {/* Related products */}
        <div className="px-4 lg:px-8 mt-16 sm:mt-24">
          <h1  className="text-lg font-medium text-gray-900 text-white dark:text-[var(--themeColorGray1)] ">
            Customers also purchased
          </h1>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={relatedProduct.imageAlt}
                    src={relatedProduct.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-2xl text-white  text-gray-700 dark:!text-white">
                      <a href={relatedProduct.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </a>
                    </h3>
                    {/* <p className="mt-1 text-gray-500 text-2xl text-gray-700 dark:!text-white">{relatedProduct.color}</p> */}
                  </div>
                  <p className=" font-medium text-gray-900 text-white text-2xl text-gray-700 dark:!text-white">{relatedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        </div>
     

     

       
      </div>


    </div>
  )
}



