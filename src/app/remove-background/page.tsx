

import {useDropzone} from 'react-dropzone';
import Dragzone from './components/Dragzone';
import Instructions from './components/Instructions/Instructions';

const RemoveBackground = () => {


  return (
    <main className="w-[90vw] h-full m-auto flex items-center">
      <Instructions/>
      <Dragzone/>
    </main>
  )
}
export default RemoveBackground