import { ActionSection, Instructions } from "./components";

const BackgroundRemover = () => {
  return (
    <main className="w-[90vw] h-full m-auto flex items-center">
      <Instructions />
      <ActionSection />
    </main>
  );
};
export default BackgroundRemover;