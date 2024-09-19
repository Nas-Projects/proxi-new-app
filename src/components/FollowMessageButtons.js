// FollowMessageButtons.tsx
"use client";

import SubmitButton from "@/components/SubmitButton";
import { cn } from "@/lib/cn";
import { Input } from "./ui/input";
import { Form } from "./ui/form";

// type FollowMessageButtonsProps = {
//   followAction: (formData: FormData) => Promise<void>;
//   messageAction: () => void;
//   isFollowing: boolean;
//   profileId: string;
//   className?: string;
// };

const FollowMessageButtons = ({
  followAction,
  messageAction,
  isFollowing,
  profileId,
  className,
}) => {
  return (
    <div className={`flex gap-2 px-2 ${className}`}>
      <Form action={followAction}>
        <Input type="hidden" value={profileId} name="id" />
        <SubmitButton
          className={cn(
            "flex-1 rounded-full",
            isFollowing ? "bg-gray-400 dark:bg-gray-700" : "bg-blue-600 dark:bg-blue-800",
            "text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2"
          )}>
          {isFollowing ? "Unfollow" : "Follow"}
        </SubmitButton>
      </Form>
      <button
        className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2"
        onClick={messageAction}>
        Message
      </button>
    </div>
  );
};

export default FollowMessageButtons;
