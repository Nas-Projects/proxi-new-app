import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const AnimatedComponent = ({ textToScaleDown, break: shouldBreak}) => {
  const [inView, setInView] = useState(false);
  const [scaleDown, setScaleDown] = useState(false);
  const [moveDown, setMoveDown] = useState(false);
  const [paddingClass, setPaddingClass] = useState('');

  let textContent;

  if (shouldBreak && textToScaleDown) {
    const [firstLine, secondLine] = textToScaleDown.split(',');
    textContent = (
      <>
        <span className="color_11 wixui-rich-text__text">{firstLine.trim().toUpperCase()}.</span>
        <br className="wixui-rich-text__text" />
        <span>{secondLine.trim().toUpperCase()}</span>
      </>
    );
  } else {
    textContent =<span className="color_11 wixui-rich-text__text">{textToScaleDown}</span>;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setPaddingClass('pl-[16%] lg:!pl-[8%]');
    }, 6000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animatedDiv');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially if in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setScaleDown(true), 3300);
      setTimeout(() => setMoveDown(true), 4500);
    }
  }, [inView]);

  return (
    <div
      id="animatedDiv"
      className={`absolute z-20 inset-x-0 sm:top-[3.5%] top-[20em] ${
        moveDown ? 'max-[600px]:top-[15em] sm:top-[5.5%] lg:top-[10.5%] xl:!top-[30vh]' : ''
      } transition-all duration-1000`}
      data-mesh-id="comp-kkr1kfydinlineContent-gridContainer"
      data-testid="mesh-container-content"
    >
      <div id="comp-kkr1o0a8"
        className={`HcOXKn c9GqVL QxJLC3 comp-kkr1o0a8 wixui-rich-text !px-[18%] ${paddingClass}`}
        data-testid="richTextElement"
      >
        <h1 className="font_0 wixui-rich-text__text">
          <span style={{ letterSpacing: '0.02em' }} className="wixui-rich-text__text">
            <span
              style={{ fontFamily: 'dinneuzeitgroteskltw01-_812426,sans-serif' }}
              className={`wixui-rich-text__text ${scaleDown ? '!text-3xl lg:text-7xl lg:!text-[45px] xl:!text-[51px]' : 'text-white'} transition-all duration-1000`}
            >
               {textContent}
              {/* <span className="color_11 wixui-rich-text__text">
                IT DOESN&apos;T GET EASIER.
               
                <br className="wixui-rich-text__text" />
                YOU GET BETTER.
              </span> */}
            </span>
          </span>
        </h1>
      </div>
  
      <div
        className="bg-wtransparent mx-[3em] xl:ml-[8%] j sm:mx-0 w-[20em] lg:w-[14em] !flex content-center justify-center !mt-6 border border-1 border-white rounded-md lg:ml-[6.2%]"
      >
        <Link
          href="/tracks"
          target="_self"
          className="uDW_Qe wixui-button PlZyDq text-white py-4 hover:bg-[var(--light-theme-secondary-color)]"
        >
          <span className="l7_2fn wixui-button__label hover:!text-white">View All Tracks</span>
        </Link>
      </div>   
      {/* <div className="items-center block justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
     <div className="group xl:ml-[0%] mt-12 lg:mt-12 flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="xl:ml-[6%] justify-center inline-flex gap-4 items-center font-[family-name:var(--font-geist-sans)]">
      <a
            className="rounded-full border bg-foreground  border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 hover:text-black"
            href='/tracks'
            target="_blank"
            rel="noopener noreferrer"
          >
          Challenge
          </a>
        <Link href='/login'
              to="/login"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center dark:bg-foreground text-background gap-2 bg-sky-600 hover:bg-sky-700 dark:hover:bg-[#383838] 
              dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert group-hover:rotate-90 transition-transform"
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Login
            </Link>

          <a
            className="rounded-full border bg-foreground  border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 hover:text-black"
            href='/login'
            target="_blank"
            rel="noopener noreferrer"
          >
           Register
          </a>
       
        </div> 
         <ol className="max-[600px]:hidden xl:ml-[6%] list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] hover:backdrop-blur px-4 py-4 ">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        </div>
        {/* </div> */}
    </div>
  );
};

export default AnimatedComponent;
