import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import newyearresolution1 from '@/images/blogsImages/resolution_keep.png'
import clsx from 'clsx'
// import { formatDate } from '@/lib/formatDate'

// import useWindowDimensions from '@/lib/useWindowSize'

export function BlogCard({ blog }) {
  // const { width, height } = useWindowDimensions()
  function BlogCardMobile({ className, ...props }) {
    console.log(props, className)
    return (
      <div
        id="blog-card-mobile"
        className="blog :max-w-8xl  mt-20 w-full  bg-black pb-10 md:hidden"
      >
        <Link href={blog.href} className="dark:text-white lg:px-20">
          <div className="not-prose xl:grid-cols-20 grid grid-cols-1 gap-2 border-t border-zinc-900/5 px-4 dark:border-white/5 sm:mb-20  sm:grid-cols-2 sm:py-10  lg:ml-20 lg:gap-4 lg:px-20 lg:pt-10 xl:ml-56">
            <div
              id="blog-image-right"
              className="section section-bloglist-card relative  -mt-10 sm:-mt-0 lg:-mt-6 lg:pl-10 "
            >
              <div className="copy -my-4 flex justify-center gap-5 overflow-hidden sm:gap-8">
                <div
                  key={blog.hrf}
                  className={clsx(
                    ' relative  aspect-[9/10] flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'
                  )}
                >
                  <Image
                   width={300}
                   height={300}
                   src={blog.image.src}
                    alt=""
                    sizes="(min-width: 640px) 36rem, 22rem"
                    className="inset-0 h-full min-w-[330px] w-full object-cover"
                    priority
                    optimized={'true'}
                    // width={300}
                    // height={230}
                  />
                </div>
              </div>
            </div>

            <div
              id="left-blog-list-content"
              className="left-blog-list-content realtive  max-w-lg md:pr-10  "
            >
              <div className="section-bloglist-card pr-4">
                <div className="section-content ">
                  <div className="column  large-5 large-offset-1 small-12 small-offset-0">
                    <div className="relative ml-2 px-2 ">
                      <div
                        id="tag"
                        className="mx-auto flex o max-w-7xl sm:px-6 md:px-8"
                      >
                        <Link
                          className="eyebrow blog_list_card_tag  dark:yellow-bg  group mb-4  inline-flex h-6 items-center  whitespace-nowrap rounded-xl bg-transparent px-3 text-sm font-semibold text-black
                           hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-slate-900 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"
                          href="/docs/hover-focus-and-other-states"
                        >
                          {blog.category}
                          <span className="sr-only">blog tag</span>
                        </Link>
                      </div>
                      {/* <p
                        className={clsx([
                          'flex-shrink-1 bg-white',
                          'blog_list_card_tag',
                          blog.theme && blog.theme.text,
                          blog.theme ? blog.theme.tagStyle : 'px-2 py-1',
                          'blog_list_card_tag',
                          'eyebrow   mt-2  mb-4',
                        ])}
                      >
                        {blog.category}
                      </p> */}
                      <h2 className="headline  text-left  typography-headline max-w-xl text-white dark:text-slate-100 ">
                        {blog.title}
                        <br className="small" /> {blog.moto && blog.moto}
                      </h2>
                      <p className="typography-news-copy  text-left pt-4 text-slate-400 dark:text-slate-300/50">
                        {blog.description}
                      </p>
                      <p className="read-time blue-3 mt-4  text-left ">
                        {blog.readTime} mins read
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
  function BlogCarDesktop({ large = false, className }) {
    console.log(large,  className)
    return (
      <div
        id="blog-card-desktop"
        className="blog :max-w-8xl hidden w-full  bg-black md:flex lg:mt-10 "
      >
        <Link href={blog.href} className="dark:text-white xl:px-20">
          <div className="xl:grid-cols-20 grid grid-cols-1 gap-x-2 border-t border-zinc-900/5 px-14 dark:border-white/5 sm:mb-20  sm:grid-cols-2 lg:ml-20 lg:gap-4 lg:px-20 xl:ml-36">
            <div
              id="left-blog-list-content-desktop"
              className="realtive lg:pr-2 lg:pr-10"
            >
              <div className="section section-bloglist-card lg:pr-4 flex ">
                <div className="section-content relative mx-4 -mt-0  px-2 lg:px-4 xl:px-6">
                  <p
                    className={clsx([
                      'blog_list_card_tag mx-auto flex o max-w-7xl text-slate-200',
                      blog.theme && blog.theme.text,
                      blog.theme ? blog.theme.tagStyle : 'px-2 py-1',
                      'blog_list_card_tag',
                      'eyebrow  mt-2  mb-4',
                    ])}
                  >
                    {blog.category}
                  </p>
                  <h2 className="headline text-left typography-headline max-w-xl text-white dark:text-slate-100 ">
                    {blog.title}
                    <br className="small" /> {blog.moto && blog.moto}
                  </h2>
                  <p className="typography-news-copy text-left  pt-4 text-slate-400 dark:text-slate-300/50">
                    {blog.description}
                  </p>
                  <p className="read-time text-pink-500 text-left  mt-4">
                    {blog.readTime} mins read
                  </p>
                </div>
              </div>
            </div>
            <div
              id="blog-image-right"
              className="section section-bloglist-card relative ml-10 sm:-mt-0  md:ml-2 md:pl-10"
            >
              <div className="copy -my-4 flex justify-center gap-5  py-4 sm:gap-8">
                <div
                  key={blog.hrf}
                  className={clsx(
                    ' relative lg:min-w-[400px]   xl:min-w-[500px] object-cover aspect-[8/7]  max-w-none flex-none  flex-none  rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'
                    // rotations[imageIndex % rotations.length]
                  )}
                >
                  <Image
                    // fill
                    src={blog.image.src}
                    alt=""
                    //  width={100%}
                    sizes="(min-width: 740px) 36rem, 22rem"
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-center"
                    priority
                    optimized={'true'}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>{' '}
        </Link>
      </div>
    )
  }

  return (
    <>
      <BlogCarDesktop />
      <BlogCardMobile />
    </>
  )
}
