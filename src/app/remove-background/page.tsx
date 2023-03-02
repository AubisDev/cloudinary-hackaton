

import {useDropzone} from 'react-dropzone';
import FileUploadField from './components/FileUploadField';
import Instructions from './components/Instructions/Instructions';

const RemoveBackground = () => {


  return (
    <main className="w-[90vw] h-full m-auto flex items-center">
      <Instructions/>
      <FileUploadField/>
    </main>
  )
}
export default RemoveBackground