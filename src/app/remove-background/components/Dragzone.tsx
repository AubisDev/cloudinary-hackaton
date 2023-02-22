"use client";

import { FileRejection, FileWithPath, FileError,useDropzone } from "react-dropzone";

const Dragzone = () => {
  const { acceptedFiles, getRootProps, getInputProps, fileRejections } = useDropzone({maxFiles:5});

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }: any) => { 
    return (
      <li key={file.path}>
           {file.path} - {file.size} bytes
           <ul>
             {errors.map((e:FileError) => <li key={e.code}>{e.message}</li>)}
          </ul>
 
      </li>
    ) 
   });

  return (
      <section className="w-[50%] flex justify-center flex-col ">
        <div {...getRootProps({ className: "dropzone w-4/5 m-auto border-2 text-slate-300/80 border-slate-200/10 py-8 text-center bg-gray-900" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some images here, or click to select images</p>
          <em className="text-xs">(5 files maximum)</em>
        </div>
        <aside>
          <h4 className="mt-4 text-center text-white">Files selected: {files.length}</h4>
          <ul>
            {
                files.map((file:any) => (
                    <li className="text-white">
                        {file.path}
                    </li>
                ))
            }
          </ul>
        </aside>
      </section>
  );
};
export default Dragzone;
