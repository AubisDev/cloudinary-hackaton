"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useState, useEffect } from "react";

interface ImageEditProps {
  url: string;
}

const ImageEdit = ({ url }: ImageEditProps) => {
  const [proccessingImage, setProccessingImage] = useState(true);
  const triesRef = useRef(0);
  let intervalId: any;

  useEffect(() => {
    if (proccessingImage) {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        triesRef.current = triesRef.current++;
      }, 500);
    }
  }, [triesRef.current]);

  return (
    <aside className="flex flex-col flex-wrap items-center justify-center w-full mt-12 text-white">
      <div className="inline-flex  rounded-md] p-2">
        <Link
          href={url}
          target="_blank"
          className={`min-w-0 overflow-hidden flex`}
        >
          <Image
            src={`${url}&t=${triesRef.current}`}
            className="object-contain w-auto m-auto"
            alt="Edited Image"
            width="250"
            height="250"
            onLoad={() => setProccessingImage(false)}
            onError={() => setProccessingImage(true)}
          />
        </Link>
      </div>
    </aside>
  );
};
export default ImageEdit;
