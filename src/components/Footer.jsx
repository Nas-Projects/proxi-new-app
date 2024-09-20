import Link from 'next/link'

import { Container } from '@/components/Container'
import { useEffect, useRef } from 'react';

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-freevolve overflow-wrap  transition hover:text-sky-400"
    >
      {children}
    </Link>
  )
}

const footerNavigation = {
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


const Footer = () => {
  

  const sectionRef = useRef(null);
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
  return (<footer className="!relative bg-custom-gradient pt-187px pb-5 px-15px 3xl:px-[2%] 4xl:px-[5%] mt-95px bg-section-bg-2 text-sm lg:text-base text-white relative">
  <div className="px-15px">
    {/* footer top */}
    <div className="container w-[90vw]lg:max-w-[75rem] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="bg-black px-25px lg:px-60px py-50px bg-secondary-color text-white flex justify-center lg:justify-between items-center flex-col lg:flex-row gap-y-30px lg:gap-0 sm:whitespace-nowrap">
        <div>
          <h5 className="text-xl md:text-26px lg:text-3xl xl:text-4xl text-white font-bold mb-15px">
            <span className="leading-1.3">Looking for a dream home?</span>
          </h5>
          <p className="text-white leading-1.8">
            We can help you realize your dream of a new home
          </p>
        </div>
        <div>
          <h5 className="capitalize inline-block text-sm md:text-base text-primary-color hover:text-white hover:bg-primary-color relative group whitespace-nowrap font-normal transition-all duration-300 shadow-box-shadow-3 mb-0">
            <span className="inline-block absolute top-0 right-0 w-full h-full bg-white group-hover:bg-secondary-color z-1 group-hover:w-0 transition-all duration-300" />
            <a
              href="contact.html"
              className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-white leading-23px"
            >
              Explore Properties <i className="icon-next" />
            </a>
          </h5>
        </div>
      </div>
    </div>
    {/* footer main */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-x-30px text-sm lg:text-base text-white">
      {/* footer about*/}
      <div className="xl:col-start-1 xl:col-span-3 mb-60px lg:pr-35px">
        <div className="mb-15px">
          <a href="index.html">
            <img
              src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/logo-2.png"
              alt=""
            />
          </a>
          <p className="leading-1.8 mb-5 lg:mb-25px text-white">
            Lorem Ipsum is simply dummy text of the and typesetting industry.
            Lorem Ipsum is dummy text of the printing.
          </p>
          <ul className="space-y-2">
            <li>
              <p className="leading-1.8 text-white flex">
                <i className="icon-placeholder mr-15px mt-1" />
                <span>Brooklyn, New York, United States</span>
              </p>
            </li>
            <li>
              <a href="tel:+0123-456789" className="leading-1.8 flex">
                <i className="icon-call mr-15px mt-1" />
                <span>+0123-456789</span>
              </a>
            </li>
            <li>
              <a href="mailto:example@example.com" className="leading-1.8 flex">
                <i className="icon-mail mr-15px mt-1" />
                <span>example@example.com</span>
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-x-5 mt-5">
            <li>
              <a href="https://www.facebook.com" className="leading-1.8">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="https://x.com" className="leading-1.8">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" className="leading-1.8">
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" className="leading-1.8">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* footer company*/}
      <div className="xl:col-start-4 xl:col-span-2 mb-60px">
        <h3 className="text-22px font-bold mb-25px text-white">
          <span className="leading-1.3"> Company </span>
        </h3>
        <ul className="space-y-[15px]">
          <li>
            <a
              href="about.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              About
            </a>
          </li>
          <li>
            <a
              href="blog.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              Blog
            </a>
          </li>
          <li>
            <a
              href="shop.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              All Products
            </a>
          </li>
          <li>
            <a
              href="locations.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              Locations Map
            </a>
          </li>
          <li>
            <a
              href="faq.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              FAQ
            </a>
          </li>
          <li>
            <a
              href="contact.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              Contact us
            </a>
          </li>
        </ul>
      </div>
      {/* footer services*/}
      <div className="xl:col-start-6 xl:col-span-2 mb-60px">
        <h3 className="text-22px font-bold mb-25px text-white">
          <span className="leading-1.3"> Services </span>
        </h3>
        <ul className="space-y-[15px]">
          <li>
            <a
              href="order-tracking.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              Order tracking
            </a>
          </li>
          <li>
            <a
              href="wishlist.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              Wish List
            </a>
          </li>
          <li>
            <a
              href="login.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              Login
            </a>
          </li>
          <li>
            <a
              href="account.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              My account
            </a>
          </li>
          <li>
            <a
              href="about.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              Terms &amp; Conditions
            </a>
          </li>
          <li>
            <a
              href="about.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              Promotional Offers
            </a>
          </li>
        </ul>
      </div>
      {/* footer customer care*/}
      <div className="xl:col-start-8 xl:col-span-2 mb-60px">
        <h3 className="text-22px font-bold mb-25px text-white">
          <span className="leading-1.3"> Customer Care </span>
        </h3>
        <ul className="space-y-[15px]">
          <li>
            <a
              href="login.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              Login
            </a>
          </li>
          <li>
            <a
              href="account.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              My account
            </a>
          </li>
          <li>
            <a
              href="wishlist.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              Wish List
            </a>
          </li>
          <li>
            <a
              href="order-tracking.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              Order tracking
            </a>
          </li>
          <li>
            <a
              href="faq.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              FAQ
            </a>
          </li>
          <li>
            <a
              href="contact.html"
              className="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              Contact us
            </a>
          </li>
        </ul>
      </div>
      {/* footer newsletter*/}
      <div className="xl:col-start-10 xl:col-span-3 mb-60px">
        <h3 className="text-22px font-bold mb-25px text-white">
          <span className="leading-1.3"> Newsletter </span>
        </h3>
        <p className="leading-1.8 mb-5 lg:mb-25px text-white">
          Subscribe to our weekly Newsletter and receive updates via email.
        </p>
        {/* subscription input  */}
        <div>
          <form className="w-full relative">
            <input
              type="text"
              placeholder="Email*"
              className="w-full text-sm text-paragraph-color pl-5 pr-50px placeholder:text-paragraph-color outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-65px block rounded-none"
            />
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
          <img
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