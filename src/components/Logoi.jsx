import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
      className="h-26 w-26 absolute top-20  left-4 z-50    lg:top-[10%] lg:h-[4rem] lg:w-[4rem] xl:top-[14%] xl:h-[6rem]  xl:w-[6rem] "
      src="/logo.jpeg"
      alt="FreevolveCompany"
      width={100}
      height={100}
    />
  )
}
