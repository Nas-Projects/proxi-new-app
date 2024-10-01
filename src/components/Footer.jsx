import Link from 'next/link'

// import { Container } from '@/components/Container'
import { useEffect, useRef } from 'react';
// import { Input } from './ui/input';

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-freevolve overflow-wrap  transition hover:text-sky-400"
    >
      {children}
    </Link>
  )
}

export const footerNavigation = {
  products: [
    { name: 'Tracks', href: '/tracks' },
    { name: 'Exercises', href: '/exercises' },
    // { name: 'About', href: '/about' },
    { name: 'Profile', href: '/profile' },
    { name: 'Diets', href: '/diets' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Message', href: '/message' },
    // { name: 'Sustainability', href: '#' },
    // { name: 'Press', href: '#' },
    { name: 'Callendar', href: 'callendar' },
    { name: 'Terms & Conditions', href: 'terms' },
    { name: 'Privacy', href: '/privacy' },
   
  ],
  customerService: [
    { name: 'Contact', href: '/callendar' },
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
    { name: 'Secure Payments', href: '/payments' },
    { name: 'FAQ', href: 'faq' },
    // { name: 'Find a store', href: '#' },
  ],
}

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}
const Footer = () => {
  

  // const sectionRef = useRef(null);
  const footerRef = useRef(null);
useEffect(() => {
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              const bgMedia = entry.target;
              if (entry.isIntersecting) {
                  bgMedia.classList.add('bg-pan-right');
              }
               else {
                  bgMedia.classList.add('bg-pan-right');
              }
          });
      },
      { threshold: 0.0 }  // Adjust the threshold as needed
  );

  if (footerRef.current) {
      observer.observe(footerRef.current);
  }

  return () => {
      if (footerRef.current) {
          observer.unobserve(footerRef.current);
      }
  };
}, []);
// mt-95px 
  return ( 
      <footer aria-labelledby="footer-heading" className="!group !relative bg-custom-gradient pt-24 lg:pt-24 lg:pt-[127px] pb-5 px-15px 3xl:px-[2%] 4xl:px-[5%]
       bg-section-bg-2 text-sm lg:text-base text-white relative">
        <div className="px-15px">
          {/* footer top */}
          <div className="container w-[90vw]lg:max-w-[75rem] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="pt-12  pb-6 md:py-4 md:rounded-xl bg-custom-gradient group-hover:!bg-black px-25px lg:px-60px py-50px max-w-[600px]:!bg-indigo-400  text-white flex justify-center lg:justify-between items-center flex-col lg:flex-row gap-y-30px lg:gap-0 sm:whitespace-nowrap">
              <div>
                <h5 className="text-xl md:text-26px lg:text-3xl xl:text-4xl text-white font-bold mb-15px">
                  <span className="leading-1.3">Looking for something else than whats out there?</span>
                </h5>
                <p className="text-white leading-1.8">
                  Proxy can help you buy or sell.
                </p>
              </div>
              <div className='py-4'>
                <h5 className="capitalize inline-block text-sm md:text-base text-primary-color hover:text-white hover:bg-primary-color relative group whitespace-nowrap font-normal transition-all duration-300 shadow-box-shadow-3 mb-0">
                  <span className="inline-block absolute top-0 right-0 w-full h-full bg-white group-hover:bg-secondary-color z-1 group-hover:w-0 transition-all duration-300" />
                  <Link
                    href="/properties"
                    className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-white leading-23px group-hover:bg-black"
                  >
                    Explore Properties <i className="icon-next" />
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          {/* footer main */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-x-30px text-sm lg:text-base text-white">
            {/* footer about*/}
            <div className="xl:col-start-1 xl:col-span-3 mb-60px lg:pr-35px">
              <div className="mb-15px ml-2 ">
                <Link href="/" className='h-20 w-44'>
                  <img
                    src="/logo.png"
                    alt=""
                  />
                </Link>
                <p className="leading-1.8 mb-5 lg:mb-25px text-white/90 pl-6 text-[1.275rem]">
                Full Service Real Estate Brokerage - Innovating the transaction process - Blockchain Technology
                </p>
                <ul className="space-y-2 pl-2" >
                  <li>
                    <p className="leading-1.8 text-white flex">
                      <i className="icon-placeholder mr-15px mt-1 lg:text-lg font-bold " />
                      <span>10 Lexington Avenue, 2R, New York, NY 10016</span>
                    </p>
                  </li>
                  <div className="inline-flex space-y-2 space-x-2 lg::space-x-4">
                  <li>
                    <Link href="tel:+1(347)-987-0210" className="leading-1.8 flex">
                      <i className="icon-call mr-15px mt-1" />
                      <span>+1(347)-987-0210</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@proxyre.io" className="leading-1.8 flex">
                      <i className="icon-mail mr-15px mt-1" />
                      <span>info@proxyre.io</span>
                    </Link>
                  </li>
                  </div>
                 
                </ul>
                <ul className="flex items-center gap-x-5 mt-5 ml-4">
                <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-white font-bold hover:text-sky-400">
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="h-6 w-6" />
                  </a>
                ))}
              </div>
                </ul>
              </div>
            </div>
            {/* footer company*/}
            <div className="xl:col-start-4 xl:col-span-2 mb-60px  ml-2 py-4 md:py-0">
              <h3 className="text-[1.625rem] font-bold mb-25px text-white">
                <span className="leading-1.3"> Company </span>
              </h3>
              <ul className="space-y-[15px] ml-4">
                <li>
                <Link 
                    href="/about"
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                    About
                  </Link>
                </li>
                <li>
                <Link 
                    href="/blogs"
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                    Blog
                  </Link>
                </li>
                <li>
                <Link 
                    href="/properties"
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                    All Properties
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs/revolutionizing-real-estate-with-blockchain-technology"
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                   Blockchain
                  </Link>
                </li>
                <li>
                <Link 
                    href="/community-leads  "
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                    Community Leads
                  </Link>
                </li>
               
              </ul>
            </div>
            {/* footer services*/}
            <div className="xl:col-start-6 xl:col-span-2 mb-60px ml-4">
              <h3 className="text-[1.625rem] font-bold mb-25px text-white">
                <span className="leading-1.3"> Services </span>
              </h3>
              <ul className="space-y-[15px]">
                <li>
                  <Link
                    href="/properties/search-results?location=&propertyType=retail"
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                    Comercial
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://proxi-new-app.vercel.app/properties/search-results?location=&propertyType=residential"
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                    Residential
                  </Link>
                </li>
                <li>
                  <Link
                    href="/properties/search-results?location=&propertyType=retail"
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                    Sales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lawyers"
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                     Lawyers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/virtual-tours"  
                    
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                    Virtual Tours
                  </Link>
                </li>
              </ul>
            </div>
            {/* footer customer care*/}
            <div className="xl:col-start-8 xl:col-span-2 mb-60px ml-4 py-4 md:py-0">
              <h3 className="text-[1.625rem] font-bold mb-25px text-white">
                <span className="leading-1.3"> Customer</span>
              </h3>
              <ul className="space-y-[15px]">
                <li>
                  <Link
                    href="/join"
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                    Join
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/account"
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                    My account
                  </Link>
                </li>
                 */}
             
                <li>
                <Link 
                    href="/terms"
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                    FAQ
                  </Link>
                </li>
  
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-secondary-color text-[1.275rem;] -translate-x-5 hover:translate-x-0 group leading-1.8 pl-4 lg:pl-6"
                  >
                    <span className="text-secondary-color text-[1.275rem;] pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                    </span>
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            {/* footer newsletter*/}
            <div className="xl:col-start-10 xl:col-span-3 mb-60px ml-4 py-4 md:py-0 max-w-[23rem]">
              <h3 className="text-[1.625rem] font-bold mb-25px text-white">
                <span className="leading-1.3"> Newsletter </span>
              </h3>
              <p className="leading-1.8 mb-5 lg:mb-25px text-[1.275rem;] text-white/90">
                Subscribe to our weekly Newsletter and receive updates via email.
              </p>
              {/* subscription input  */}
              <div>
                <form className="w-full relative">
                <input href="mailto:Hello@proxyre.io" 
                  className="email-input !mb-6 border-1 !border-pink-500  placeholder:text-paragraph-color outline-none border-2 "
                  inputMode="email"
                  placeholder="Email*"
                  type="email"
                  // bg-white rounded-md w-full text-sm text-paragraph-color pl-5 pr-50px 
                  name="location"
                  autoComplete="Enter location"
                  autoCapitalize="none"
                  spellCheck="false"
                  required
                />
                  {/* <Input
                    type="email"
                    placeholder="Email*"
                    className="bg-white rounded-md w-full text-sm text-paragraph-color pl-5 pr-50px 
                    placeholder:text-paragraph-color outline-none border-2 
                    border-border-color-9 focus:border focus:border-secondary-color h-65px block rounded-none "
                  /> */}
                  <button
                    type="submit"
                    className="absolute top-0 right-0 h-full px-18px text-white bg-secondary-color hover:bg-primary-color"
                  >
                    <i className="fas fa-location-arrow text-lg font-bold" />
                  </button>
                </form>
              </div>
              {/* payment methods */}
              <div>
                <h3 className="text-base lg:text-lg font-bold mt-30px mb-15px text-white">
                  <span className="leading-1.3"> We Accept </span>
                </h3>
                <img className='rounded-lg'
                  src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/icons/payment-4.png"
                  alt="Payment Image"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>

  )
}

export default Footer