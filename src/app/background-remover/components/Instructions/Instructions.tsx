import { SlideShow, Stepper, Title } from "./components";

const Instructions = () => {
  return (
    <section className="w-1/2 h-full overflow-hidden text-white border-2 rounded-xl border-gray-600/20 Intructions">
      <div className="w-full h-[95%] m-auto flex flex-col items-center p-4 relative ">
        <Title />
        <Stepper />
        <SlideShow />
      </div>
    </section>
  );
};
export default Instructions;
