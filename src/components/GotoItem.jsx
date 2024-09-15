import Link from 'next/link'
import { Fragment } from 'react'
// import { text } from 'stream/consumers'

export const GotoItem = ({ href }) => {
  return ( <Fragment className="goto dark:text-white text-black">
      <Link href={href} className="arrow-icon-active-hover relative md:ml-4 !h-12">
      <span className="text-with-arrow inline-flex">
        {' '}
        <span className=" pr-4 uppercase  dark:text-slate-100"> Read More</span>
        <span className="absolute left-[59%] top-[8%] dark:top-[-7%] dark:left-[69%] z-[-20] h-7 w-8 rounded-full bg-[#5d798c6b] bg-sky-100  py-0.5 text-xs text-white "></span>{' '}
        {/* <span className="arrow-icon arrow-icon-theme arrow-icon-size-large"> */}
        <span className="z-50 ">
          {/* h-24 w-24 */}
          <svg
            className=" z-50 dark:stroke-white stroke-black watter-mark-arrow"
            width="28"
            height="17"
            viewBox="0 0 28 17"
            fill="none"
            preserveAspectRatio="xMinYMin meet"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              className=" z-50 stroke-black dark:stroke-white"
              d="M26 8.01221H1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              className=" z-50 stroke-black dark:stroke-white"
              d="M19.5 1.01221L26.5 8.01221L19.5 15.0122"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span className="arrow-icon-circle"></span>
        </span>
      </span>
    </Link>
  </Fragment>
  
  )
}


export const RegularButton = ({text, href, arrow}) => {

return <Link type="button" href={href && href || ""  } 
             className="group dark:hover:bg-white dark:hover:text-black  dark:bg-transparent dark:text-white dark:border  transition-fg relative inline-flex items-center justify-center overflow-hidden rounded-md outline-none disabled:bg-ui-bg-disabled disabled:border-ui-border-base disabled:text-ui-fg-disabled disabled:shadow-buttons-neutral disabled:after:hidden after:transition-fg after:absolute after:inset-0 after:content-[''] shadow-buttons-inverted text-ui-fg-on-inverted bg-ui-button-inverted after:button-inverted-gradient hover:bg-ui-button-inverted-hover hover:after:button-inverted-hover-gradient active:bg-ui-button-inverted-pressed active:after:button-inverted-pressed-gradient focus:!shadow-buttons-inverted-focus txt-compact-small-plus gap-x-[10rem] px-3 py-1.5 w-full h-10">
              {text}  {arrow &&  <span>
            <span class="absolute left-[86%] top-[8%] dark:top-[18%] dark:left-[80%] z-[-20] h-7 w-8 rounded-full bg-[#5d798c6b] dark:bg-[#e0f2fe3b] py-0.5 text-xs text-white"></span>
            <span className="z-0">
          {/* h-24 w-24 */}
          <svg
            className=" z-50 stroke-black dark:stroke-white dark:group-hover:stroke-black dark:group-hover:stroke-black  watter-mark-arrow"
            width="28"
            height="17"
            viewBox="0 0 28 17"
            fill="none"
            preserveAspectRatio="xMinYMin meet"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              className=" z-50 stroke-black dark:stroke-white dark:group-hover:stroke-black dark:group-hover:stroke-black"
              d="M26 8.01221H1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              className=" z-50 stroke-black dark:stroke-white dark:group-hover:stroke-black x"
              d="M19.5 1.01221L26.5 8.01221L19.5 15.0122"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span className="arrow-icon-circle"></span>
          </span> 
        </span>}
  </Link>

}
