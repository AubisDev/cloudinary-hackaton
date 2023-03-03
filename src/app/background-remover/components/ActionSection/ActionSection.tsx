"use client";

import { useState, useCallback } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import Link from "next/link";
import { Preview, ImageEdit } from "./components";
import {
  applyBackgroundRemoval,
  createFormDataToUploadImage,
} from "./utilities/cloudinaryActions";
import { Notifier, throwErrorNotification } from "./utilities/toastNotify";

const ActionSection = () => {
  const [image, setImage] = useState<string>("");
  const [originalImage, setOriginalImage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (acceptedFiles.length === 1) {
        setLoading(true);
        const formData = createFormDataToUploadImage(acceptedFiles);
        const imageLinks = await applyBackgroundRemoval(formData);
       
        setOriginalImage(imageLinks.originalImageLink);
        setImage(imageLinks.imageWithoutBackgroundLink);
        setLoading(false);
      } else {
        throwErrorNotification();
      }
    },[]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    onDrop,
  });

  return (
    <section className="w-[50%] flex justify-center flex-col ">
      <form
        {...getRootProps({
          className:
            "dropzone w-4/5 m-auto border-2 text-slate-300/80 border-green-600/20 py-8 text-center bg-gray-900 flex flex-col",
        })}
      >
        <input {...getInputProps()} />
        <strong>
          Drag 'n' drop some images here, or click to select images
        </strong>
        <em className="text-xs">(1 file only for free version)</em>
      </form>
      <aside className="flex flex-row text-white ">
        {originalImage.length !== 0 && !loading ? <Preview url={originalImage} /> : null}
        {image.length !== 0 ? <ImageEdit url={image} /> : null}
      </aside>
      <DownloadImageLink image={image}/>
      <Notifier />
    </section>
  );
};
export default ActionSection;



export const DownloadImageLink = (image: any) => {
  return(
    <>
    {image.length !== 0 ? (
        <Link
          href={image}
          target="_blank"
          className="w-1/3 py-2 m-auto mt-5 font-semibold text-center text-white bg-green-700 rounded-lg hover:bg-green-800"
        >
          Get full size image
        </Link>
      ) : null}
    </>
  )
}