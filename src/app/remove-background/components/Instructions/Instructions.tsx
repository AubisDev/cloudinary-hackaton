import Image from 'next/image';
import withoutbg from '../../assets/without-bg.png';
import SlideShow from './SlideShow';

const Instructions = () => {
  return (
    <section className="w-1/2 h-[90%] border rounded-xl border-green-600/60 text-white">
      <div className="w-[90%] h-[90%] m-auto flex flex-col items-center p-4">
        <SlideShow/>
      </div>
    </section>
  )
}
export default Instructions