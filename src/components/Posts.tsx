import type { Post as PostType } from "../app/blogs/types";
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
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


export default function Posts({ posts }: { posts: SanityPost[] }) {
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
    // const authorImageUrl = post.author.image ? urlFor(post.author.image).url() : "/default-avatar.png";
  
    return (
      <Card className="overflow-hidden transition-transform duration-300 hover:scale-105">
        <Link href={`/blogs/${post.file}`}>
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
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
        />
           
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
  