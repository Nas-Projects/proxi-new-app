// import { format, parseISO } from "date-fns";
// import Image from "next/image";
import { Prose } from "@/app/blogs/components/Prose";
import { BasicLayout } from "@/components/layouts/BasicLayout";
import { Card, CardContent } from "@/components/ui/card";

export function BlogPost(props: {
  content: React.ReactNode;
}) {
  const { content } = props;

  return (
    <BasicLayout>
      <article className="mx-auto max-w-2xl px-6 py-20">
        {/* Uncomment this section if you plan to use date and author */}
        {/* 
        <div className="text-center">
          <time dateTime={date} className="mb-1 text-xs text-gray-600">
            {format(parseISO(date), "LLLL d, yyyy")}
          </time>
          <p className="text-sm font-semibold">by {author}</p>
        </div> 
        */}
        <Card>
          <CardContent className="pt-6">
            <Prose className="prose-a:font-semibold prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline">
              {content}
            </Prose>
          </CardContent>
        </Card>
      </article>
    </BasicLayout>
  );
}
