import Link from 'next/link'
import { GotoItem } from './GotoItem'

export const FeaturedContent = ({ featured }) => {
  console.log('FEATURED CONTENT is', featured)
  return (
    <div className='mx-4'>
      <div
        key={featured.title}
        className="flex-block relative font-sans lg:mx-[20%] dark:text-white dark:lg:border rounded-lg dark:lg:border-[var(--themeColor)]"
      >
        <div
          className="flex-block overflow-hidden rounded-lg bg-white shadow-lg transition-[filter] duration-500 "
          // style="opacity:1;transform:none"
        >
          <img
            src={featured.featuredImageUrl ?? featured.imageUrl}
            // src="https://tailwindcss.com/_next/static/media/5.e8ff4aa4.jpg"
            alt=""
            className=" aspect-[900/500] h-full w-full object-cover md:min-w-[500px]"
            decoding="async"
            loading="lazy"
          />
        </div>

         <span className="absolute right-[2%] top-[4%]  rounded-full bg-[var(--themeColor2)] hover:bg-white px-3 py-0.5 text-xs text-black">
                <span className=" ">Featured</span>
              </span>
            
        <form className=" bg-gray-0 px-4 pt-6 md:flex-auto absolute bottom-[4%]">
            <h1 className="mt-0 flex-auto text-3xl font-semibold text-slate-900  dark:text-slate-100">
                {featured.title}
              </h1>
         {/* <div className=" mt-1 mb-2 flex  items-baseline border-slate-200 pb-0 text-center" />{' '} */}
          <span className="-mt-10  text-center text-sm font-bold text-slate-700  dark:text-[var(--themeColor2)]">
            Weight Managment
          </span>{' '}
          <span className=" text-center text-sm font-medium text-slate-700  dark:text-white  dark:text-slate-100">
            March 23rd - 2023{' '}
            <span className="hidden md:inline-flex mt-[-4em]  dark:text-slate-100">
              <GotoItem href={`exercises/${featured.id}`} />
            </span>
          </span>
          <div className="pt-4 text-sm text-slate-700 md:hidden dark:text-[var(--themeColor2)]">
            {' '}
            <GotoItem href={`exercises/${featured.id}`} />
          </div>
        </form>
      </div>
    </div>
  )
}
