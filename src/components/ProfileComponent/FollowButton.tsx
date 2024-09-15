import { followUser } from "@/lib/actions";
import SubmitButton from "../SubmitButton";
import { buttonVariants } from "../button";
import { cn } from "@/lib/cn";

function FollowButton({
  profileId,
  isFollowing,
  className,
  buttonClassName,
}: {
  profileId: string;
  isFollowing?: boolean;
  className?: string;
  buttonClassName?: string;
}) {
  console.log("IS_FOLLOWING", isFollowing);
  return (
    <form action={followUser} className={className}>
      <input type="hidden" value={profileId} name="id" />
      <SubmitButton
        className={buttonVariants({
          variant: isFollowing ? "secondary" : "default",
          className: cn("!font-bold w-full", buttonClassName),
          size: "sm",
        })}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </SubmitButton>
    </form>
  );
}

export default FollowButton;
