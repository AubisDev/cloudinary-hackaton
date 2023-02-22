"use client";

import {
  FileRejection,
  FileWithPath,
  FileError,
  useDropzone,
} from "react-dropzone";

const Dragzone = () => {
  const { acceptedFiles, getRootProps, getInputProps, fileRejections } =
    useDropzone({ maxFiles: 5 });

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
          {errors.map((e: FileError) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });

  console.log(files);
  return (
    <section className="w-[50%] flex justify-center flex-col ">
      <div
        {...getRootProps({
          className:
            "dropzone w-4/5 m-auto border-2 text-slate-300/80 border-green-600/20 py-8 text-center bg-gray-900",
        })}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some images here, or click to select images</p>
        <em className="text-xs">(5 files maximum)</em>
      </div>
      <aside>
        <h4 className="mt-4 text-center text-white">
          Files selected: {files.length}
        </h4>
        <ul className="w-4/5 mt-8 flex flex-col bg-gray-900/30 m-auto min-h-40 rounded-md border border-green-600 ">
          {files.map((file: any) => (
            <li
              key={file.key}
              className="text-white pl-3 py-2 text-sm italic border-b border-green-600 last:border-none"
            >
              {file.key}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};
export default Dragzone;
