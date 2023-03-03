"use client";
import { motion } from "framer-motion";

const Stepper = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="flex flex-col pt-6 pb-10"
    >
      <h3 className="text-2xl font-bold text-center ">How does it work? </h3>
      <div className="flex flex-row [&>*]:text-xs [&>*]:sm:text-sm [&>*]:font-normal [&>*]:sm:font-semibold [&>*]:px-10 justify-evenly w-full pt-6">
        <div className="flex flex-col items-center justify-center w-1/3">
          <span className="w-[30px] h-[30px] font-bold bg-green-600 rounded-full text-base text-center pt-0.5">
            1
          </span>{" "}
        </div>
        <div className="flex flex-col items-center justify-center w-1/3">
          <span className="w-[30px] h-[30px] font-bold bg-green-600 rounded-full text-base text-center pt-0.5">
            2
          </span>{" "}
        </div>
        <div className="flex flex-col items-center justify-center w-1/3 ">
          <span className="w-[30px] h-[30px] font-bold bg-green-600 rounded-full text-base text-center pt-0.5">
            3
          </span>{" "}
        </div>
      </div>
      <div className="flex flex-row [&>*]:text-xs [&>*]:sm:text-sm [&>*]:font-normal [&>*]:sm:font-semibold [&>*]:px-4 justify-evenly w-full ">
          <span className="w-1/3 pt-2 text-center ">
            Drag or select your file
          </span>
          <span className="w-1/3 pt-2 text-center ">
            Wait for your images to be ready
          </span>
          <span className="w-1/3 pt-2 text-center ">
            Done!
          </span>
      </div>
    </motion.div>
  );
};
export default Stepper;
