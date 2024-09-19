// components/ui/CommentBox.js
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea"; // Ensure you have a Textarea component

const commentSchema = z.object({
  comment: z.string().min(1, {
    message: "Comment is required.",
  }),
});

export function CommentBox() {
  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = (values) => {
    // Handle comment submission
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your comment here..." {...field} />
              </FormControl>
              <FormDescription>This is where you can write your comment.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Post Comment</Button>
      </form>
    </Form>
  );
}
