"use client";
import { motion } from "framer-motion";
import { ColorRing } from "react-loader-spinner";

const SlideShow = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="flex flex-row items-center justify-center w-full h-full"
    >
      <div className="flex flex-row items-center justify-center w-full -mr-32 sm:mr-0">
        <motion.img
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            delay: 0.5,
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          src={
            "https://res.cloudinary.com/djm3yrljp/image/upload/v1677820520/ugtrvgfsw9egqbrizmwt.webp"
          }
          alt="dog image with background"
          className="w-[120px] h-[150px] sm:w-[165px] sm:h-[195px] sm:mr-6 "
        />
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 0, 0],
          }}
          transition={{
            delay: 1.5,
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{ marginRight:"-13rem"}}
            wrapperClass="blocks-wrapper"
            colors={["#367a1a", "#367a1a", "#367a1a", "#367a1a", "#367a1a"]}
            
          />
        </motion.div>

        <motion.img
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0, 1, 1, 1, 1, 0],
            x: [0, 0, -150, -150, -150],
            scale: [0, 0, 1, 1, 1, 1.15, 1, 1],
          }}
          transition={{
            delay: 4.5,
            duration: 3,
            repeat: Infinity,
            repeatDelay: 4,
          }}
          src="https://res.cloudinary.com/djm3yrljp/image/upload/v1677820758/ugtrvgfsw9egqbrizmwt_dlvuzr.webp"
          alt="dog image without background"
          className="w-[150px] h-[175px] sm:w-[165px] sm:h-[195px] ml-6"
        />
      </div>
    </motion.div>
  );
};
export default SlideShow;
