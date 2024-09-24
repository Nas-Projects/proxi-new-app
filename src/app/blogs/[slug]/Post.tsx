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

const builder = imageUrlBuilder(sanityClient);

export function Post({ post }: { post: PostType }) {
    const decodeAssetId = (id) => {
        const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;
        const match = pattern.exec(id);
        if (!match) {
          console.error(`Invalid asset ID: ${id}`);
          return null;
        }
        const [, assetId, dimensions] = match;
        const [width, height] = dimensions.split("x").map(Number);
        return { assetId, dimensions: { width, height } };
      };
      
      const handleImage = (value) => {
        if (!value.asset || !value.asset._ref) {
          console.error("No valid asset reference found for image:", value);
          return null;
        }
      
        const dimensions = decodeAssetId(value.asset._ref);
        return (
          <Image
            src={builder.image(value).width(800).url() || urlFor(value).width(800).url()}
            alt={value.alt || ""}
            width={dimensions?.width || 800}
            height={dimensions?.height || 600}
            className="h-auto w-full"
          />
        );
      };

      
  return (
    <BlogLayout>
      <article className="mx-auto grid w-full max-w-screen-xl xl:max-w-[85vw] gap-5 px-0 pt-2 md:pt-4 xl:pt-6 md:grid-cols-4 md:pt-24 lg:gap-4 lg:px-20">
        <main className="md:col-span-3">
          <Card>
            <CardContent className="p-10">
              <Prose>
            <section className="ContributionPageHeader_root__AtBMO shared_sectionContainer2___zZ0P shared_container2__iZo6U shared_container1__yecs8 shared_sectionContainerPadding2__wvg1y">
                <div className="ContributionPageHeader_headerInfo__u6Wz0">
                    <h1 className="ContributionPageHeader_pageTitle__R5EDY shared_header3__shUgs shared_header__67AqL">
                    How to Create a Sitemap when using Next.js
                    </h1>
                </div>
                <div className="HelpTicketPage_headerMeta__R5ZUy shared_text3__MQrA6 shared_fg3__NXgMk gap-x-4">
                    <div>9{/* */} replies</div>
                    <div >Last updated: {/* */}{formatDate(post.publishedAt)}</div>
                </div>
            </section>

                <p>{post?.description  && post.description}</p>
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
                    />
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
                            return null; // Return nothing if no asset is available
                          }
                      
                          const assetId = value.asset._ref; // Get the asset reference
                      
                          // Ensure you have a valid asset reference
                          if (!assetId) {
                            console.error("Asset ID is undefined for value:", value);
                            return null;
                          }
                      
                          // Decode the asset ID if necessary or directly use builder
                          const dimensions = decodeAssetId(assetId);
                          return (
                            <Image
                              src={builder.image(value).width(800).url() || urlFor(value).width(800).url()}
                              alt={value.alt || ""}
                              width={dimensions?.width || 800}
                              height={dimensions?.height || 600}
                              className="h-auto w-full"
                            />
                          );
                        },
                      },
                    //   types: {
                    //     image: ({ value }) => {
                    //       // https://www.sanity.io/answers/how-to-get-the-width-height-or-dimensions-of-uploaded-image-with-sanity-and-next-js-to-prevent-cls
                    //       const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

                    //       const decodeAssetId = (id: string) => {
                    //         const match = pattern.exec(id);
                    //         if (!match) {
                    //           console.error(`Invalid asset ID: ${id}`);
                    //           return null;
                    //         }
                    //         const [, assetId, dimensions, format] = match;
                    //         const [width, height] = dimensions
                    //           .split("x")
                    //           .map((v) => Number.parseInt(v, 10));

                    //         return {
                    //           assetId,
                    //           dimensions: { width, height },
                    //           format,
                    //         };
                    //       };

                    //       const { dimensions } =
                    //         decodeAssetId(value.asset?._id) || {};

                    //       return (
                    //         <Image
                    //           src={builder.image(value).width(800).url()}
                    //           alt={value.alt || ""}
                    //           width={dimensions?.width || 800}
                    //           height={dimensions?.height || 600}
                    //           className="h-auto w-full"
                    //         />
                    //       );
                    //     },
                    //   },
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

            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="mb-2 text-base font-semibold">Written by</h3>
                <div className="flex items-center">
                  {post.authorImage && (
                    <Image
                      src={builder
                        .image(post.authorImage)
                        .width(40)
                        .height(40)
                        .url()}
                      alt={post.authorName ?? ""}
                      className="mr-3 h-10 w-10 rounded-full"
                      width={40}
                      height={40}
                    />
                  )}
                  <div>
                    <p className="font-medium">{post.authorName}</p>
                    {post.authorTwitter && (
                      <Link
                        href={`https://twitter.com/${post.authorTwitter}`}
                        className="text-sm text-gray-500"
                        target="_blank"
                      >
                        @{post.authorTwitter}
                      </Link>
                    )}
                     {post.author.socialLinks &&  post.author.socialLinks.map((link) => {
                        return   <Link
                                    href={`https://twitter.com/${post.authorTwitter}`}
                                    className="text-sm text-gray-500"
                                    target="_blank"
                                    >
                                    @{post.authorTwitter}
                                    </Link>
                     })
                    }
                     
                      
                    
                  </div>
                </div>
              </CardContent>
            </Card>

            {post.body && (
              <Card>
                <CardContent className="pt-6">
                  <TableOfContents body={post.body} />
                </CardContent>
              </Card>
            )}
       
          </div>
        </aside>
        <CardContent className="pt-6 lg:hidden">
           <div className="flex items-center">
                  {post.authorImage && (
                    <Image
                      src={builder
                        .image(post.authorImage)
                        .width(40)
                        .height(40)
                        .url()}
                      alt={post.authorName ?? ""}
                      className="mr-3 h-10 w-10 rounded-full"
                      width={40}
                      height={40}
                    />
                  )}
                  <div>
                  <p className="font-medium">{post.authorName}</p>
                    {post.authorTwitter && (
                      <div className="lg:hidden">
                      <Link
                        href={`https://twitter.com/${post.authorTwitter}`}
                        className="text-sm text-gray-500"
                        target="_blank"
                      >
                        @{post.authorTwitter}
                      </Link>
                        </div>
                    )}
                  </div>
                </div>
         </CardContent>
      </article>
    </BlogLayout>
  );
}

const createHeadingComponent =
  (Tag: "h2" | "h3") =>
  ({ children, value }: PortableTextComponentProps<PortableTextBlock>) => {
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
