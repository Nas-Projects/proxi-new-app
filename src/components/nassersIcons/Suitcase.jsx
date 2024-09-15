import Image from 'next/image'
import clsx from 'clsx'
import suitcase from '@/images/workplace.png'

export default function Suitcase({ large = false, className, props }) {
  //set desktop= sm // mpobile = h-9
  // Always set the w & h in rm for optimization purposes
  console.log('BG', props)
  return (
    <Image
      src={suitcase}
      alt="suicase image"
      sizes={large ? '4rem' : '1.25rem'}
      className={clsx(
        className,
        `object-cover ${
          props && props.bg ? props.bg : 'bg-white '
        } sm:w-81 sm:h-8`,
        large ? 'h-12 w-12  sm:h-6 sm:w-6 ' : 'h-7 w-7'
      )}
      priority
    />
  )
}
