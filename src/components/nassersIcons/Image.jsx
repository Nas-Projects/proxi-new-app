import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

const variantStyles = {
  portrait:
    'ring-1 ring-inset w-18 h-18  px-1 py-1 ring-white rounded-full mx-4 bg-orange-400 object-cover object-center',
  // portrait: 'rounded-lg px-1.5 ring-1 ring-inset figma-1jtmbgc  author-image-w-ring mx-4"',
}

const imageSizes = {
  // portrait: {
  small: { width: 45, height: 45 },
  // medium: 'min-width: 640px) 36rem, 22rem',
  // },
  // sky: {
  //   small: 'text-sky-500',
  //   medium:
  //     'ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400',
  // },
  // amber: {
  //   small: 'text-amber-500',
  //   medium:
  //     'ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400',
  // },
  // rose: {
  //   small: 'text-red-500 dark:text-rose-500',
  //   medium:
  //     'ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400',
  // },
  // zinc: {
  //   small: 'text-zinc-400 dark:text-zinc-500',
  //   medium:
  //     'ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400',
  // },
}

const valueKindMap = {
  portrait: 'portrait',
  small: 'small',
  medium: 'medium',
  large: 'lare',
  extraLarge: 'extraLarge',
  fill: ' fill',
}
const valueStyleMap = {
  portrait: 'portrait',
  small: 'small',
  medium: 'medium',
  large: 'lare',
  extraLarge: 'extraLarge',
  fill: ' fill',
}

// export function Tag({
//   children,
//   variant = 'medium',
//   color = valueColorMap[children.toLowerCase()] ?? 'emerald',
// }) {
//   console.log('TAG-CHILDREN', children)
//   return (
//     <span
//       className={clsx(
//         'font-mono text-[0.625rem] font-semibold leading-6',
//         variantStyles[variant],
//         colorStyles[color][variant]
//       )}
//     >
//       {children}
//     </span>
//   )
// }

export const AuthorIconAndName = ({
  author,
  image,
  size,
  imageKind,
  nodetails,
}) => {
  const imgStyle = valueStyleMap[imageKind] ?? 'rounded'
  const imgSize = valueKindMap[size] ?? 'small'
  const { name, proffession } = author
  // const h = {
  //   small: 10,
  // }
  // const w = {
  //   small: 10,
  // }
  const imageDetails = () => {
    if (nodetails) {
      return <></>
    } else {
      return (
        <>
          {author && name && (
            <div className="contributor ml-4  text-black  dark:text-white">
              {name.split(' ')[0]}
              <div className="author--position figma-p7oszx">
                {name.split(' ')[1]}
              </div>
            </div>
          )}
          {author && !name && (
            <div className="contributor ml-4  text-black  dark:text-white">
              {author}
              {/* <div className="author--position figma-p7oszx">
              {name.split(' ')[1]}
            </div> */}
            </div>
          )}
          <div className="ml-12 text-sm text-slate-400">
            {author.proffession ? author.proffession : 'NasDesigns'}
          </div>
        </>
      )
    }
  }
  console.log('KIND:', valueKindMap[size])
  console.log('SIZE:', imageSizes[imgSize].width)
  return (
    <div className="mt-4">
      <div className="figma-1k1pkug">
        <Link href="https://twitter.com/AliaFite" className="figma-clygmv ">
          <div className="figma-13icjhm border-lg author-icon-bg rounded-full rounded-full  px-1 py-1">
            <Image
              alt="author-image"
              src={image}
              width={clsx(imageSizes[imgSize].width)}
              height={clsx(imageSizes[imgSize].height)}
              // width={w.small}
              // height={h.small}
              className={clsx(variantStyles[imgStyle])}
              loading="lazy"
            />
          </div>
          {imageDetails()}
        </Link>
      </div>
    </div>
  )
}
