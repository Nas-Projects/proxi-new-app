import nasIcon from '@/images/nas_Icon.jpeg'
import clsx from 'clsx'
import Image from 'next/image'

export const LoggedInUserIcon = ({ title, name, className, classText }) => {
  const decorationStyle = className
  return (
    <div
      // className="lg:px-34 lg:mt-26 xl:mt-22 mb-22 mt-14 flex items-center gap-4 border-b border-slate-800  py-4 px-8 sm:px-14 "
      className={clsx(
        decorationStyle && decorationStyle,
        title
          ? 'gap-4 px-8 py-4  sm:px-4 xl:px-10'
          : 'mt-1 mb-1 block flex items-center gap-2  lg:mt-6 lg:px-4 lg:px-4 '
      )}
    >
      <div id="icon" className="inline-flex">
        <Image
          className="h-12 w-12 rounded-full object-cover"
          src={nasIcon}
          // width={nasIcon.width}
          // height={nasIcon.height}
          alt="user icon"
          // src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
        />
        <div
          id="icon-detail"
          className={clsx(
            title ? 'mx-1 inline-block' : 'mx-1 inline-block pt-2'
          )}
        >
          {name && (
            <strong
              className={clsx(
                name
                  ? `${
                      classText && classText
                    } mx-3 -mt-1 mt-2 font-medium text-slate-900 dark:text-slate-200`
                  : 'mx-3 mt-2 text-sm font-medium text-slate-900 dark:text-slate-200'
              )}
            >
              {name}
            </strong>
          )}
          {title && (
            <div className="opactity-1 wax-w-lg mx-2 flex rounded-md bg-slate-100 px-2 py-0.5 text-sm font-medium text-slate-900  dark:bg-sky-500/10  dark:text-slate-300/80">
              {title && title}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
