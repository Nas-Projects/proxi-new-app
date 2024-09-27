type User = {
  username?: string;
  image?: string;
};

type Props = Partial<AvatarProps> & {
  user?: User; // Replace `Object | undefined` with a more specific type
};

function UserAvatar({ user, ...avatarProps }: Props) {
  console.log("USER_avatar: " + user);
  return (
    <></>
    // <Avatar className="relative h-8 w-8" {...avatarProps}>
    //   <Image
    //     src={user?.image ? user?.image : DefaultUserAvatar.src}
    //     fill
    //     alt={`${user?.username ? user?.username : "default name"}'s profile picture`}
    //     className="rounded-full object-cover"
    //   />
    // </Avatar>
  );
}

export default UserAvatar;
