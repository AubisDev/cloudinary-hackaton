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
      <div className="flex flex-row [&>*]:text-sm [&>*]:font-semibold [&>*]:px-4 justify-evenly w-full pt-6">
        <div>
          <span className="px-2.5 py-1 font-bold bg-green-600 rounded-full">
            1
          </span>{" "}
          <span className="border-b">Drag or select your file</span>
        </div>
        <div>
          <span className="px-2.5 py-1 font-bold bg-green-600 rounded-full">
            2
          </span>{" "}
          <span className="border-b">Wait for your images to be ready</span>
        </div>
        <div>
          <span className="px-2.5 py-1 font-bold bg-green-600 rounded-full">
            3
          </span>{" "}
          <span className="border-b">Done!</span>
        </div>
      </div>
    </motion.div>
  );
};
export default Stepper;
