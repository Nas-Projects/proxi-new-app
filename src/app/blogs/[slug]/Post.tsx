import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LinkIcon } from "lucide-react";
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponentProps,
} from "@portabletext/react";
import { sanityClient } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { BlogLayout } from "@/components/layouts/BlogLayout";
import type { Post as PostType } from "../types";
import { Prose } from "../components/Prose";
import { TableOfContents } from "../components/TableOfContents";
import { Card, CardContent } from "@/components/ui/card";
import { extractTextFromPortableTextBlock, slugify } from "../../../utils/text";
import { TryInboxZero } from "../components/TryInboxZero";
import { ReadMore } from "../components/ReadMore";
import { formatDate } from "@/lib/formatDate";
import { getSocialIcon } from "@/components/SocialIcons";
import { urlFor } from "@/sanity/lib/image";
// import BlurImage from '@/components/blur-image';


const builder = imageUrlBuilder(sanityClient);

export function Post({ post }: { post: PostType }) {
 const blurDataHolderUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
    // const decodeAssetId = (id) => {
    //     const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;
    //     const match = pattern.exec(id);
    //     if (!match) {
    //       console.error(`Invalid asset ID: ${id}`);
    //       return null;
    //     }
    //     const [, assetId, dimensions] = match;
    //     const [width, height] = dimensions.split("x").map(Number);
    //     return { assetId, dimensions: { width, height } };
    //   };

    const decodeAssetId = (id) => {
      const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;
      const match = pattern.exec(id);
    
      if (!match) {
        console.error(`Invalid asset ID: ${id}`);
        return null;
      }
    
      const [, assetId, dimensions] = match;
      const [width, height] = dimensions.split("x").map(Number);
    
      return {
        assetId,
        dimensions: {
          width: isNaN(width) ? 800 : width,  // Default width to 800 if NaN
          height: isNaN(height) ? 600 : height // Default height to 600 if NaN
        },
      };
    };
      
  return (
    <BlogLayout>
      <article className="mx-auto grid w-full max-w-screen-xl min-[1100px]:max-w-[98vw]  gap-5 px-0 pt-2 md:pt-4 xl:pt-6 md:grid-cols-4 md:pt-24 lg:gap-4 lg:px-20">
        <main className="md:col-span-3">
          <Card>
            <CardContent className="p-10">
              <Prose>
            <section className="ContributionPageHeader_root__AtBMO shared_sectionContainer2___zZ0P shared_container2__iZo6U shared_container1__yecs8 shared_sectionContainerPadding2__wvg1y">
                <div className="ContributionPageHeader_headerInfo__u6Wz0">
                    <h1 className="ContributionPageHeader_pageTitle__R5EDY shared_header3__shUgs shared_header__67AqL text-left">
                    {post.title}
                    </h1>
                </div>
                <div className="HelpTicketPage_headerMeta__R5ZUy shared_text3__MQrA6 shared_fg3__NXgMk gap-x-4">
                    <div>9{/* */} replies</div>
                    <div >Last updated: {/* */}{formatDate(post.publishedAt)}</div>
                </div>
            </section>

              {/* <p>{post?.description  && post.description}</p> */}
                {post.mainImage ? (
                  <div className="-mx-10 my-8">
                      <Image
                         src={builder
                          .image(post.mainImage)
                          .width(1200)
                          .height(675)
                          .url()}
                        alt={post?.mainImage?.alt || ""}
                        width={1200}
                        height={675}
                        className="h-auto w-full"
                        placeholder="blur"
                        blurDataURL={blurDataHolderUrl}
                        />
                    {/* <Image
                      src={builder
                        .image(post.mainImage)
                        .width(1200)
                        .height(675)
                        .url()}
                      alt={post?.mainImage?.alt || ""}
                      width={1200}
                      height={675}
                      className="h-auto w-full"
                    /> */}
                  </div>
                ) : null}
                {post.content ? (
                  <PortableText
                    value={post.content}
                    components={{
                      block: {
                        h2: createHeadingComponent("h2"),
                        h3: createHeadingComponent("h3"),
                      },
                      types: {
                        image: ({ value }) => {
                          if (!value.asset) {
                            console.error("No asset found for image:", value);
                            return null;
                          }
              
                          const assetId = value.asset._ref;
                          const decodedAsset = decodeAssetId(assetId);
                          const dimensions = decodedAsset?.dimensions || { width: 800, height: 600 }; // Default if undefined
              
                          return (
                            <Image
                              src={builder.image(value).width(800).url() || urlFor(value).width(800).url()}
                              alt={value.alt || ""}
                              width={dimensions.width}
                              height={dimensions.height}
                              className="h-auto w-full"
                              placeholder="blur"
                              blurDataURL={blurDataHolderUrl}
                            />
                          );
                        },
                      },
                      // types: {
                      //   image: ({ value }) => {
                      //     if (!value.asset) {
                      //       console.error("No asset found for image:", value);
                      //       return null; // Return nothing if no asset is available
                      //     }
                      
                      //     const assetId = value.asset._ref; // Get the asset reference
                      
                      //     // Ensure you have a valid asset reference
                      //     if (!assetId) {
                      //       console.error("Asset ID is undefined for value:", value);
                      //       return null;
                      //     }
                      
                      //     // Decode the asset ID if necessary or directly use builder
                      //     const dimensions = decodeAssetId(assetId);
                      //     return (
                      //       <Image
                      //         src={builder.image(value).width(800).url() || urlFor(value).width(800).url()}
                      //         alt={value.alt || ""}
                      //         width={dimensions?.width || 800}
                      //         height={dimensions?.height || 600}
                      //         className="h-auto w-full"
                      //       />
                      //     );
                      //   },
                      // },
             
                      marks: {
                        link: ({ children, value }) => {
                          const href = value?.href;
                          return (
                            <Link
                              href={href}
                              className="font-semibold text-blue-600 hover:underline"
                            >
                              {children}
                            </Link>
                          );
                        },
                      },
                    }}
                  />
                ) : null}
              </Prose>
            </CardContent>
          </Card>

          <div className="mt-4">
            <ReadMore />
          </div>
        </main>
        <aside className="hidden md:block xl:ml-6">
          <div className="sticky top-20">
            <div className="mb-4">
              <TryInboxZero />
            </div>

            <Card className="mb-4 mt-4 lg:w-[21vw]">
             <CardContent className="mt-2 ">
                <h3 className="mb-1 !text-[20px] font-semibold pt-4 text-gray-600 ">Written by</h3>
                  <div className="flex items-center">
                  {post.authorImage && (
                     <Image
                        src={builder
                          .image(post.authorImage)
                          .width(60)
                          .height(60)
                          .url()}
                        alt={post.authorName ?? ""}
                        className="mr-3 h-10 w-10 rounded-full -mt-24"
                        width={60}
                        height={60}
                        placeholder="blur"
                        blurDataURL={blurDataHolderUrl}
                    />
                  
                  )}
             <div className="pt-0">
                <p className="font-medium">{post.authorName}</p>
                  <div className="block">
                    <p className="text-slate-600">{post.author.bio.trim()}</p>  
                  <div className="inline-flex mt-2">
                     {post.author?.socialLinks && post.author.socialLinks.map((link, index) => {
                        console.log("SOPCIAL LINKS", link)
                        return <div className="rounded-full" key={index}>
                         {link.url ? ( // Ensure there's a valid URL
                             <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                             {getSocialIcon(link.platform)} {/* Get the corresponding icon */}
                             </Link>
                         ) : null} 
                           </div>
                        })
                      } 
                  
                  </div>
                </div>
             </div>
          </div>
         </CardContent>
         
            </Card>

            {post.content && (
              <Card>
                <CardContent className="pt-6">
                  <TableOfContents body={post.content} />
                </CardContent>
              </Card>
            )}
       
          </div>
        </aside>
        <CardContent className="-mt-2 lg:hidden">
           <div className="flex items-center mt-[-2em]">
                  {post.authorImage && (
                     <Image
                     src={builder
                       .image(post.authorImage)
                       .width(60)
                       .height(60)
                       .url()}
                     alt={post.authorName ?? ""}
                     className="mr-3 h-10 w-10 rounded-full -mt-24"
                     width={60}
                     height={60}
                     placeholder="blur"
                     blurDataURL={blurDataHolderUrl}
                 />
                  )}
             <div className="pt-6">
                <p className="font-medium">{post.authorName}</p>
                  <div className="block">
                    <p className="text-slate-500">{post.author.bio}</p>  
                  <div className="inline-flex mt-2">
                  {post.author?.socialLinks && post.author.socialLinks.map((link, index) => {
                        console.log("SOPCIAL LINKS", link)
                        return <div className="rounded-full" key={index}>
                         {link.url ? ( // Ensure there's a valid URL
                             <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                             {getSocialIcon(link.platform)} {/* Get the corresponding icon */}
                             </Link>
                         ) : null} 
                           </div>
                        })
                      } 
                  
                  </div>
                </div>
             </div>
          </div>
         </CardContent>
      </article>
    </BlogLayout>
  );
}

const createHeadingComponent = (Tag: "h2" | "h3") => {
  const HeadingComponent = ({ children, value }: PortableTextComponentProps<PortableTextBlock>) => {
    const text = extractTextFromPortableTextBlock(value);
    const id = slugify(text);

    return (
      <Tag id={id} className="group relative flex items-center">
        <Link href={`#${id}`} className="flex items-center">
          <span className="absolute left-0 -translate-x-full pr-2 opacity-0 transition-opacity group-hover:opacity-100">
            <LinkIcon className="size-4" />
          </span>
          {children}
        </Link>
      </Tag>
    );
  };

  // Assign a display name to the component for easier debugging
  HeadingComponent.displayName = `HeadingComponent(${Tag})`;

  return HeadingComponent;
};
