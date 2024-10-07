import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function TryInboxZero() {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`}
    >
      <div className="rounded-lg border-2 border-blue-400 bg-white shadow-xl transition-transform duration-300 hover:scale-105">
        <Image
          src="/images/reach-inbox-zero.png"
          alt="Inbox Zero"
          width={320}
          height={240}
          className="w-full rounded-t-lg shadow"
        />
        <p className="p-4 text-gray-700">
          Let AI handle your emails, unsubscribe from newsletters, and block
          unwanted messages.
        </p>
        <div className="px-4 pb-4">
          {/* Use a valid variant */}
          <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
            Try Inbox Zero
          </Button>
        </div>
      </div>
    </Link>
  );
}
