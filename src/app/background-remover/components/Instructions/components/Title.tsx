"use client";
import Image from "next/image";
import cld_logo from "../assets/cloudinary_logo.png";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center sm:justify-between w-full h-auto sm:h-[35%] items-center sm:items-start ">
      <div className="flex flex-col w-full pl-0 sm:pl-10 sm:w-3/4">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [-50, 0] }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-green-500 md:text-left sm:text-4xl md:text-5xl xl:text-6xl drop-shadow-bgrTitle"
        >
          Background
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [-50, 0] }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl font-bold text-center text-green-400 md:text-left sm:text-4xl md:text-5xl xl:text-6xl drop-shadow-bgrTitle"
        >
          Image
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [50, 0] }}
          transition={{ duration: 1, delay: 1 }}
          className="text-4xl font-bold text-center text-green-300 md:text-left sm:text-4xl md:text-5xl xl:text-6xl drop-shadow-bgrTitle"
        >
          Remover
        </motion.h3>
      </div>
      
      <div className="relative flex justify-center w-full h-full sm:w-1/4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [-50, 0] }}
          transition={{ duration: 2, delay: 1, ease: 'easeIn' }}
          className="bg-gray-800 sm:rounded-full w-[175px] h-[100px] rounded-lg sm:w-[135px] md:p-0 p-2 sm:h-[135px] md:w-[145px] md:h-[145px] border-2 mt-5  sm:-mt-1 md:mt-2 sm:-ml-8 lg:ml-0 border-white/40 border-dashed sm:absolute sm:-translate-x-1/2 sm:translate-y-0 flex items-center flex-col justify-center"
        >
          <span className="ml-2 font-semibold lg:text-sm xl:text-base text-slate-200">
            With IA using
          </span>
          <Image
            src={cld_logo}
            alt="cloudinary logo"
            className="mt-2 lg:w-[110] xl:w-[125px]"
            width="125"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Title;





