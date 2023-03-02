const Stepper = () => {
  return (
    <div className="flex flex-col pt-4">
      <h3 className="text-2xl font-bold text-center ">In 3 easy steps</h3>
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
    </div>
  );
};
export default Stepper;
