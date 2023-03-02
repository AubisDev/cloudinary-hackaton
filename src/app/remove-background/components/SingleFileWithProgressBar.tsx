import { useEffect, useState } from "react"
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";
import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";



interface SingleFileWithProgressBarProps {
    file: File;
}

const SingleFileWithProgressBar = ({file}:SingleFileWithProgressBarProps) => {
    const [progress, setProgress] = useState(0);  
    
    

    useEffect(() => {
      async function upload() {
        const url = await uploadFile(file );
      }
      
      upload();
    }, [])
    
  return (
    <div>
    </div>
  )
}
export default SingleFileWithProgressBar


function uploadFile(file: File) {
    // new CloudinaryImage("docs/rmv_bgd/dog_couch_orig").effect(backgroundRemoval());
    console.log(file)

}