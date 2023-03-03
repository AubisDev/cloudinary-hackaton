import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PreviewProps {
  url: string;
}

export default function Preview({ url }: PreviewProps) {
  return (
    <aside className="flex flex-col flex-wrap items-center justify-center w-full mt-12 text-white">
      <div className="inline-flex p-2 rounded-md">
        <Link href={url} className="flex min-w-0 overflow-hidden">
          <Image
            src={url}
            className="object-contain w-auto m-auto"
            alt="user image"
            width="250"
            height="250"
          />
        </Link>
      </div>
    </aside>
  );
}
