const Title = () => {
  return (
    <div className="flex flex-row justify-between w-full ">
      <div className="flex flex-col pl-10">
        <h3 className="text-6xl font-bold text-white ">Background</h3>
        <h3 className="text-6xl font-bold text-white ">Image</h3>
        <h3 className="text-6xl font-bold text-white ">Remover</h3>
      </div>
      <div className="flex flex-col m-auto absolute bg-white/80 w-[400px] h-[400px] rounded-full top-[-50%] right-[-20%]"></div>
      <div className="absolute flex flex-col top-8 right-10">
        <span className="text-lg font-semibold text-gray-900 ">
          With IA using
        </span>
        <span className="text-xl font-bold text-gray-900 ">Cloudinary</span>
      </div>
    </div>
  );
};
export default Title;
