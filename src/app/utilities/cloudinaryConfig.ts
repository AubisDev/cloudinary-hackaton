import { Cloudinary } from "@cloudinary/url-gen";

export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUDINARY_API_KEY,
    apiKey: process.env.CLOUDINARY_API_SECRET,
  },
  url: {
    secure: true,
  },
});


export const cldCloudName = 'djm3yrljp';