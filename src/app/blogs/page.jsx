"use client";
import Head from 'next/head';
import { BlogCard } from '@/components/blogs/BlogCard';
import blogsJson from '@/lib/blogsJson';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image.js";
import { formatDateToReadable } from '../../lib/dateUtils'; // Adjust the import path as needed

export async function getBlogs() {
  const query = groq`
  *[_type == "blogPost"] {
    title,
    slug,
    publishedAt,
    author -> {
      name,
      image {
        asset -> { url }
      },
      bio,
      email,
      socialLinks {
        platform,
        url
      }
    },
    mainImage {
      asset -> { url } 
    },
    content
  }
`
  const blogsData = await sanityClient.fetch(query);
  console.log("blogsData", blogsData);
  return blogsData;
}

export default function BlogsPage() {
  const [blogs, setBlogsData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [fetchResults, setFetchResults] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await getBlogs();
        console.log("BLOGS_FETCHED-->", blogsData);

        if (!blogsData || blogsData.length === 0) {
          setFetchResults("No Blogs Available");
          console.log("No blogs found");
        } else {
          setFetchResults("200 OK");
          setBlogsData(blogsData)
          // setBlogs(blogsData.map(blog => ({
          //   ...blog,
          //   blogImage: blog.image[0] ? urlFor(blog.image[0]).url() : '' // Use urlFor if image exists
          // })));
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optional loading state
  }
  console.log("fetchResults", fetchResults);
  return (
    <section className="main-container px-0 bg-black !max-w-full min-h-[50vh]">
      <Head>
        <title>Blogs - Proxy Realestate</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>

      <div className="py-24">
        <div className="blog-list ">
          <div className="w-full lg:py-20 lg:px-24 xl:px-[5vw]">
            <div
                data-w-id="a64550db-8ef2-cc50-2a21-0932a87b5f90"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d"
                }}
                className="title-wrap-center"
              >
                <h2 className='text-4xl text-white'>Our Recent Blogs</h2>
                <div className="space-12" />
                <p className="paragraph-big text-slate-200">
                  Proxy blogs to guide through the search for a better living
                </p>
              </div>

            <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8  lg:gap-x-10 gap-y-20 lg:mx-0 lg:max-w-none lg:!grid-cols-2 xl:!grid-cols-3 blog-grid">
              {blogs.map((blog) => (
                <div
                  key={blog.slug} // Use a unique key for each blog
                  className=''
                >
                  <Link href={`/blogs/${blog.slug.current}`} className='max-[500px]:max-w-[90vw]  lg:max-w-[40vw] xl:!max-w-[26vw]'>
                    <div>
                      <div className="wide-width">
                        <Image
                         src={urlFor(blog.mainImage).url()} // Use the processed blogImage
                          width={1200}
                          height={1000}
                          className="img h-full w-full blog-image "
                          alt=""
                        />
                      </div>
                      <h4 className="text-left mt-[-1em] truncate py-3 text-slate-100">
                        {blog.title}
                      </h4>
                      <div class="blog-date text-white mt-[-1.4em]"><p class="date-text">Published</p><p class="date-text text-gray-400">{formatDateToReadable(blog.publishedAt)}</p></div>
                      {/* <p className="modules-lib__doorway-tile__paragraph glue-mod-spacer-2-top glue-body" />
                      <p className="blog_trio_cta text-center">
                        Read more
                      </p> */}
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
    </section>
  );
}
