import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";
import { Cloudinary } from "@cloudinary/url-gen/instance/Cloudinary";
import axios from "axios";
import { headerRequest, uploadURL } from "./constants";

export const cld = new Cloudinary({
  cloud: {
    cloudName: "djm3yrljp",
    apiKey: "913993542954166",
  },
  url: {
    secure: true,
  },
});

export const createFormDataToUploadImage = (acceptedFiles: File[]) => {
  const formData = new FormData();
  formData.append("file", acceptedFiles[0]);
  formData.append("upload_preset", "e1yikncv");
  formData.append("timestamp", String(Date.now() / 1000));
  formData.append("api_key", "913993542954166");
  return formData;
};

export const applyBackgroundRemoval = async (formData: FormData) => {
  const uploadedImage = await UploadOriginalImage(formData);
  const data = uploadedImage.data;
  const publicId = data.public_id;
  const originalImageLink = data.secure_url;
  const imageWithoutBackgroundLink = getImageWithoutBackground(publicId);
  return {
    originalImageLink,
    imageWithoutBackgroundLink,
  };
};

const UploadOriginalImage = async (formData: FormData) => {
  return await axios.post(uploadURL, formData, {
    headers: headerRequest,
  });
};

const getImageWithoutBackground = (publicId: string) => {
  const imageWithoutBackground = cld
    .image(publicId)
    .effect(backgroundRemoval());

  return imageWithoutBackground.toURL();
};
