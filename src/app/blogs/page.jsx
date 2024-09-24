
"use client";

import Head from 'next/head';
// import { BlogListLayout } from '@/components/BlogListLayout';
import { BlogCard } from '@/components/blogs/BlogCard';
// import { getBlogs } from '@/lib/getBlogs';
import blogsJson from '@/lib/blogsJson';
// import { ContainerNoPadding } from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';
// import useWindowDimensions from '@/lib/useWindowSize';

import { useEffect, useState } from 'react';
export default async function BlogsPage() {

  // const blogs = await getBlogs(); 

  // const { width, height } = useWindowDimensions();

  const reversedBlogs = blogsJson.reverse();

  return (
    <>
      <Head>
        <title>Articles - NasDesign</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>

      <div
        bgColor="black"
        band
        bandcolor="bg-green-2"
        className="bg-white"
      >
        <div className="blog-list bg-black">
          <div className="w-full bg-slate-800 px-6 lg:py-20 lg:px-32">
            <h2 className="headline typography-headline max-w-8xl py-10 text-slate-300 dark:text-slate-200 lg:pb-20 lg:text-center">
              Most recent blogs.
            </h2>
            <div className="modules-lib__three-up-tile__grid glue-grid">
              {blogsJson.slice(0, 3).map((blog) => (
                <div
                  key={blog.href}
                  className="blog modules-lib__three-up-tile__grid glue-grid__col glue-grid__col--span-4 py-8"
                >
                  <Link href={blog.href}>
                    <div>
                      <div className="wide-width">
                        <picture>
                          <source
                            srcSet={blog.image.src}
                            media="(min-width: 1024px)"
                          />
                          <source
                            srcSet={blog.image.src}
                            media="(min-width: 600px)"
                          />
                          <source srcSet={blog.src} />
                          <Image
                            src={blog.image.src}
                            width={width / 1.01}
                            height={height / 1.4}
                            className="img modules-lib__doorway-tile__image"
                            alt="A hairdresser smiles while she uses a laptop on a small table in the salon."
                          />
                        </picture>
                      </div>
                      <h4 className="blog_trio_tile truncate py-3 text-slate-100">
                        {blog.title}
                      </h4>
                      <p className="modules-lib__doorway-tile__paragraph glue-mod-spacer-2-top glue-body" />
                      <p className="blog_trio_cta text-center">
                        Read more
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div id="blog-list-desktop-wrapper" className="pb-20 pt-24 lg:pb-44">
            {blogsJson.reverse().map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
