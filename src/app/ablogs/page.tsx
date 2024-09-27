// "use client";
import Head from 'next/head';
import { BlogCard } from '@/components/blogs/BlogCard';
import blogsJson from '@/lib/blogsJson';
import Link from 'next/link';
import Image from 'next/image';
import { postsQuery } from "@/sanity/lib/queries";

import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Card, CardContent } from "@/components/ui/card";
import type { Post as PostType } from "./types";
import { urlFor } from '@/sanity/lib/image';

type Author = {
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
  bio: string;
  email: string;
  socialLinks: Array<{
    platform: string;
    url: string;
  }>;
};
type Post = {
  title: string;
  file: string;
  description: string;
  content: string;
  date: string;
  datetime: string;
  author: Author;
  // author: { name: string; role: string; href: string; imageUrl: string };
  imageUrl: string;
  
};

type SanityPost = {
  title: string;
  description: string | null;
  content: string | null;
  slug: { current: string; _type: "slug" };
  mainImage: PostType["mainImage"];
  imageURL: string | null;
  authorName: string;
  author: Author;
  _createdAt: string;
};


export default async function BlogsPage() {
  const posts = await sanityFetch<SanityPost[]>({ query: postsQuery });
  console.log("Posts", posts);
  
  // const [blogs, setBlogsData] = useState([]); // Initialize as an empty array
  // const [loading, setLoading] = useState(true);
  // const [fetchResults, setFetchResults] = useState('');

 
  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const blogsData = await getBlogs();
  //       console.log("BLOGS_FETCHED-->", blogsData);

  //       if (!blogsData || blogsData.length === 0) {
  //         setFetchResults("No Blogs Available");
  //         console.log("No blogs found");
  //       } else {
  //         setFetchResults("200 OK");
  //         setBlogsData(blogsData)
  //         // setBlogs(blogsData.map(blog => ({
  //         //   ...blog,
  //         //   blogImage: blog.image[0] ? urlFor(blog.image[0]).url() : '' // Use urlFor if image exists
  //         // })));
  //       }
  //     } catch (error) {
  //       console.error('Error fetching blogs:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>; // Optional loading state
  // }
  // console.log("fetchResults", fetchResults);
  return (
    <section className="main-container px-0 bg-black !max-w-full min-h-[50vh]">
      <Head>
        <title>Blogs - Proxy Realestate</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>

      <div className="pb-24">
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
                <h1 className='text-5xl text-white'>Our Recent Blogs</h1>
                <div className="space-12" />
                <p className="paragraph-big text-slate-200">
                  Proxy blogs to guide through the search for a better living
                </p>
              </div>
              <Posts posts={posts} />
            <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8  lg:gap-x-10 gap-y-20 lg:mx-0 lg:max-w-none lg:!grid-cols-2 xl:!grid-cols-3 blog-grid">
              {/* {blogs.map((blog) => (
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
                      <p className="modules-lib__doorway-tile__paragraph glue-mod-spacer-2-top glue-body" />
                      <p className="blog_trio_cta text-center">
                        Read more
                      </p>
                    </div>
                  </Link>
                </div>
              ))} */}
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


export function Posts({ posts }: { posts: SanityPost[] }) {
  const allPosts: Post[] = [
    ...posts.map((post) => ({
      title: post.title,
      file: post.slug.current,
      description: post.description ?? "",
      content: post.content ?? "",
      date: new Date(post._createdAt).toLocaleDateString(),
      datetime: post._createdAt,
      author: {
        name: post.authorName,
        role: "Founder",
        href: "#",
        image:  post.author.image
      },
      imageUrl: post.imageURL ?? "/images/reach-inbox-zero.png",
    })),
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <h2 className="mb-8 font-cal text-3xl tracking-tight text-gray-900 sm:text-4xl">
          From the blog
        </h2> */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}


export function PostCard({ post }: { post: Post }) {
  const authorImageUrl = post.author.image ? urlFor(post.author.image).url() : "/default-avatar.png";

  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={`/blog/post/${post.file}`}>
        <div className="relative h-48 w-full">
        <Image
           src={post.imageUrl}
           alt={post.title}
           layout="fill"
           objectFit="cover"
           placeholder="blur"
           blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
          />
         
        </div>
        <CardContent className="pt-4">
          <h3 className="mb-2 font-cal text-normal text-left  !leading-[38px] text-gray-900 group-hover:text-gray-600">
            {post.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-600">
            {post.description}
          </p>
          <div className="flex items-center gap-x-4">
          <Image
            src={urlFor(post.author.image).url() }
            // src={authorImageUrl} // Build the image URL properly
            alt={post.author.name || "Author Avatar"}
            className="h-8 w-8 rounded-full bg-gray-50"
            width={32}
            height={32}
      />
          {/* <Image
            src={post.author.image ? post.author.image : urlFor(post.author.image).url()}
            alt=""
            className="h-8 w-8 rounded-full bg-gray-50"
            width={32}
            height={32}
          /> */}
            <div className="text-sm !text-left">
              <p className="text-left  font-semibold text-gray-900">{post.author.name}</p>
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
