import { forwardRef } from 'react'
import clsx from 'clsx'

export function CarouselImage({ children, className, ...props }) {
  return (
    <div
      id="CARROUSEL-IMAGE-SCREEN"
      className={clsx('relative flex flex-col', className)}
      {...props}
    >
      {/* <div className="flex justify-between px-4 pt-4">
        <MenuIcon className="h-6 w-6 flex-none" />
        <Logo className="h-6 flex-none" />
        <UserIcon className="h-6 w-6 flex-none" />
      </div> */}
      {children}
    </div>
  )
}

CarouselImage.Header = forwardRef(function CarouselImageHeader(
  { children },
  ref
) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  )
})

CarouselImage.Title = forwardRef(function CarouselImageTitle(
  { children },
  ref
) {
  return (
    <div ref={ref} className="text-2xl text-slate-900 dark:text-white">
      {children}
    </div>
  )
})

CarouselImage.Subtitle = forwardRef(function CarouselImageSubtitle(
  { children },
  ref
) {
  return (
    <div
      ref={ref}
      className="overflow-hidden truncate pt-2 text-sm text-gray-700  dark:text-slate-300"
    >
      {children}
    </div>
  )
})

CarouselImage.Body = forwardRef(function CarouselImageBody(
  { children, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx(
        'bg-tansparent mt-6  flex-auto rounded-2xl rounded-b-2xl',
        className
      )}
    >
      {children}
    </div>
  )
})
