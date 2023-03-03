"use client";
import Image from "next/image";
import cld_logo from "../assets/cloudinary_logo.png";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <div className="flex flex-row justify-between w-full ">
      <div className="flex flex-col pl-10">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [-50, 0] }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-green-500 drop-shadow-bgrTitle"
        >
          Background
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [-50, 0] }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl font-bold text-green-400 drop-shadow-bgrTitle"
        >
          Image
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [50, 0] }}
          transition={{ duration: 1, delay: 1 }}
          className="text-6xl font-bold text-green-300 drop-shadow-bgrTitle"
        >
          Remover
        </motion.h3>
      </div>
      <div className="flex flex-col m-auto absolute bg-gray-700 w-[400px] h-[400px] rounded-full top-[-47.5%] right-[-20%]"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [-50, 0], rotate: [-5, 5, -5, 5, 0] }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute flex flex-col top-4 right-6"
      >
        <span className="ml-6 font-semibold text-slate-200 ">
          With IA using
        </span>
        <Image
          src={cld_logo}
          alt="cloudinary logo"
          width="150"
          className="mt-2"
        />
      </motion.div>
    </div>
  );
};
export default Title;





