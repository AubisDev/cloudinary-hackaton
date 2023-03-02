'use client'
import { motion } from 'framer-motion';
import { ColorRing } from 'react-loader-spinner';

const SlideShow = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-row items-center justify-center">
          <motion.img
            initial={{
              opacity:0,
            }}
            animate={{
              opacity:[0,1,1,1,0],
            }}
            transition={{
              delay: 0.5,
              duration: 7,
            }}

            src={"https://res.cloudinary.com/demo/image/upload/w_300/wood_chair_orig.jpg"}
            alt="dog image with background"
            className="w-[165px] h-[195px] mr-6"
          />
          <motion.div
            initial={{
              opacity:0,  
            }}
            animate={{
              opacity:[0,1,1,0,0],
            }}
            transition={{
              delay: 1.5,
              duration: 6,

            }}

          >
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              
            />
          </motion.div>
          <motion.img
          initial={{
            opacity:0,  
          }}
          animate={{
            opacity:[0,0,1,1,1],
            x: [0,0,-150,-150,-150],
            scale: [0,0,1,1,1,1.5,1,1],
          }}
          transition={{
            delay: 5,
            duration: 4,
          }}
            src="https://res.cloudinary.com/demo/image/upload/w_300/wood_chair.jpg"
            alt="dog image without background"
            className="w-[165px] h-[195px] ml-6"
          />
        </div>

    </div>
  )
}
export default SlideShow