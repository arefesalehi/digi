import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useSwiper } from "swiper/react";


const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="bottom-10 left-20 z-560! absolute flex flex-ic *:flex-center items-center gap-3 *:bg-white *:hover:opacity-90 *:border *:border-neutral-300 *:rounded-xl *:size-10 *:text-black *:text-2xl *:active:scale-95 *:duration-150 *:cursor-pointer">
      <button className="flex justify-center items-center" onClick={() => swiper.slidePrev()}>
        <BiChevronRight />
      </button>
      <button className="flex justify-center items-center" onClick={() => swiper.slideNext()}>
        <BiChevronLeft />
      </button>
    </div>
  );
};

export default SliderButtons;
