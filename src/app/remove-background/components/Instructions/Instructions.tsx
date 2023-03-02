import Image from 'next/image';
import withoutbg from '../../assets/without-bg.png';
import SlideShow from './SlideShow';
import Stepper from './Stepper';
import Title from './Title';

const Instructions = () => {
  return (
    <section className="w-1/2 h-[95%] border-2 rounded-xl border-green-600/60 bg-[] text-white Intructions">
      <div className="w-full h-[95%] m-auto flex flex-col items-center p-4 relative overflow-hidden">
        <Title/>
        <Stepper/>
        <SlideShow/>
      </div>
    </section>
  )
}
export default Instructions


