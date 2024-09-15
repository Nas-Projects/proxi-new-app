import { z } from "zod";

export const PostSchema = z.object({
  id: z.string(),
  fileUrl: z.string().url(),
  caption: z.string().optional(),
});

export const CreatePost = PostSchema.omit({ id: true });
export const UpdatePost = PostSchema;
export const DeletePost = PostSchema.pick({ id: true });


export const LikeSchema = z.object({
  postId: z.string(),
});

export const BookmarkSchema = z.object({
  postId: z.string(),
});

export const CommentSchema = z.object({
  id: z.string(),
  body: z.string(),
  postId: z.string(),
});



export const CreateComment = CommentSchema.omit({ id: true });
export const UpdateComment = CommentSchema;
export const DeleteComment = CommentSchema.pick({ id: true });

export const UserSchema = z.object({
  id: z.string(),
  username: z.string().optional(),
  name: z.string().optional(),
  image: z.string().optional(),
  bio: z.string().max(150).optional(),
  website: z.string().optional(),
  gender: z.string().optional(),
});

export const UpdateUser = UserSchema;
export const DeleteUser = UserSchema.pick({ id: true });
export const FollowUser = UserSchema.pick({ id: true });



// ---------- TODOS ----------


// Define a schema for a single task

// Assuming you have a TaskSchema to validate each task individually
// Define a schema for a single task


// Define a schema for a single task
export const TaskSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().optional(),
  status: z.enum(['not_started', 'in_progress', 'completed']).default('not_started'),
});

// Define the schema for creating a TodoList
export const CreateTodo = z.object({
  title: z.string().nonempty(),
  description: z.string().optional(),
  createdBy: z.string().nonempty(), // Assuming this is an ObjectId represented as a string
  assignedTo: z.array(z.string().nonempty()), // Assuming these are emails or user IDs
  tasks: z.array(TaskSchema), // An array of tasks that should match the TaskSchema
});
