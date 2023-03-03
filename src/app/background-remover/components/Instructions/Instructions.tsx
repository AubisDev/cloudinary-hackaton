import { SlideShow, Stepper, Title } from "./components";

const Instructions = () => {
  return (
    <section className="h-auto lg:h-full overflow-hidden text-white border-2 w-full sm:w-[80vw] md:w-[60vw] lg:w-1/2 rounded-xl border-gray-600/20 Intructions">
      <div className="w-full h-[95%] flex flex-col p-4 relative ">
        <Title />
        <Stepper />
        <SlideShow />
      </div>
    </section>
  );
};
export default Instructions;
