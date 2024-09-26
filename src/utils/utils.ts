import { authOptions } from "../auth";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getServerSession } from "next-auth";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUserId = async () => {
  // const session = await auth();
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id || session?.user?.email ? session?.user?.email : null;

  if (!userId) {
    throw new Error("You must be signed in to use this feature");
  }

  return userId;
};
