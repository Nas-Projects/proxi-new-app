import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { env } from "../../../../.env";
import { Button } from "@/components/ui/button";

export function TryInboxZero() {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_BASE_URL}/?utm_source=blog&utm_medium=inbox-zero`}
    >
      <div className="rounded-lg border-2 border-blue-400 bg-white shadow-xl transition-transform duration-300 hover:scale-105">
        <Image
          src="/blockchain_mov_ec1ff6532a.gif"
          alt="Proxy Zero"
          width={320}
          height={240}
          className="w-full rounded-t-lg shadow"
        />
        <p className="p-4 text-gray-700">
          Let Blockchain & AI handle your search, closures with proffesionals by your side.
        </p>
        <div className="px-4 pb-4">
          <Button className="w-full bg-pink-200 border border-pink-300" variant="secondary">
            Try Proxy Realstate
          </Button>
        </div>
      </div>
    </Link>
  );
}
