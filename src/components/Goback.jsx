import Link from 'next/link'
import { Button } from './Button'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
export const Goback = ({ previousPathname, text }) => {
  let router = useRouter()

  return (
    <>
      {previousPathname && (
        <div className="absolute top-[108px] sm:top-[0] z-50 z-50 mx-[0.82em] mb-16 mt-[1em] bg-[#403f3f]  mt-2 gap-3 rounded-full  bg-white hover:bg-[var(--themeColor)] px-2 py-2 lg:top-[20%] lg:-ml-24">
          <Link
            onClick={() => router.back()}
            href={previousPathname}
            arrow="left"
            className={'rounded-full bg-gray-100/50 '}
          >
            {text ?? ''}
            <ArrowLeftIcon className="h-4 w-4 stroke-black text-black transition group-hover:stroke-zinc-300 stroke-zinc-200 dark:group-hover:stroke-zinc-100 lg:h-8 lg:w-8 lg:p-2" />
          </Link>
        </div>
      )}
      {!previousPathname && (
        <div className="absolute top-[108px] sm:top-[0] z-50 z-50 mx-[0.82em] mb-16 mt-[1em]  mt-2 gap-3 rounded-full bg-[#403f3f]  lg:bg-white hover:bg-[var(--themeColor)] px-2 py-2 lg:top-[20%] lg:-ml-24">
          <Link
            // type="link"
            href={'/exercises'}
            aria-label="No-previous-pathname-go-to-project"
            className="group h-10  w-10 items-center justify-center rounded-full rounded-full lg:bg-gray-100/80"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-black text-black transition group-hover:stroke-zinc-300 stroke-zinc-200 dark:group-hover:stroke-zinc-100 lg:h-8 lg:w-8 lg:p-2" />
          </Link>
        </div>
      )}
    
    </>
  )
}

export function ArrowLeftIcon({ className }, props, color, size) {
  return (
    <div id="svg-style" className={clsx(className)}>
      <svg
        className={clsx(
          className ? className : 'fill-white group-active:fill-white/80',
          {
            large: 'h-9 w-9',
            medium: 'h-7 w-7',
            small: 'h-5 w-5',
          }[size]
        )}
      >
        <path
          className={className}
          d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
