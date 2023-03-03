"use client";

import { useState, useCallback } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { Cloudinary } from "@cloudinary/url-gen/instance/Cloudinary";
import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";
import axios from "axios";
import Link from "next/link";
import { Preview, ImageEdit } from "./components";

const cld = new Cloudinary({
  cloud: {
    cloudName: "djm3yrljp",
    apiKey: "913993542954166",
  },
  url: {
    secure: true,
  },
});

const ActionSection = () => {
  const [image, setImage] = useState<string>("");
  const [originalImage, setOriginalImage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (acceptedFiles.length === 1) {
        const formData = new FormData();
        formData.append("file", acceptedFiles[0]);
        formData.append("upload_preset", "e1yikncv");
        formData.append("timestamp", String(Date.now() / 1000));
        formData.append("api_key", "913993542954166");
        setLoading(true);
        return await axios
          .post(
            "https://api.cloudinary.com/v1_1/djm3yrljp/image/upload",
            formData,
            {
              headers: { "X-Requested-With": "XMLHttpRequest" },
            }
          )
          .then((response) => {
            const data = response.data;
            const publicId = data.public_id;
            const imageWithoutBackground = cld
              .image(publicId)
              .effect(backgroundRemoval());
            const imageWithBackground = data.secure_url;
            setOriginalImage(imageWithBackground);
            setImage(imageWithoutBackground.toURL());
          });
      } else {
        console.log("Error al subir archivo");
      }
      setLoading(false);
      console.log({ acceptedFiles, rejectedFiles });
    },
    []
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
        {originalImage.length !== 0 ? <Preview url={originalImage} /> : null}
        {image.length !== 0 ? <ImageEdit url={image} /> : null}
      </aside>

      {image.length !== 0 ? (
        <Link
          href={image}
          target="_blank"
          className="w-1/3 py-2 m-auto mt-5 font-semibold text-center text-white bg-green-700 rounded-lg hover:bg-green-800"
        >
          Get full size image
        </Link>
      ) : null}
    </section>
  );
};
export default ActionSection;
