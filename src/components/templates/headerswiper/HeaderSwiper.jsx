import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SliderButtons from '../sliderbuttons/SliderButtons'

const HeaderSwiper = () => {
  return (
    <section className="relative">
      {/* پس زمینه آبی */}
      <div className="bg-[#2a62ff] w-full h-140 [clip-path:polygon(49%_63%,100%_51%,100%_0,0_0,0_52%)]" />

      {/* اسلایدر */}
      <div className="top-18 left-0 z-10 absolute w-full">
        <div className="px-15 mycontainer">
          <Swiper
            modules={[ Pagination, Autoplay]}
            // navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            className="rounded-[100px] h-100 heroSwiper"
          >
            <SwiperSlide>
              <img
                src="/images/Annotation 2026-07-19 150228.png"
                alt=""
                className="w-full h-120 object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/images/Annotation 2026-07-19 150228.png"
                alt=""
                className="w-full h-120 object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/images/Annotation 2026-07-19 150228.png"
                alt=""
                className="w-full h-120 object-cover"
              />
            </SwiperSlide>
                 <SliderButtons/>
          </Swiper>
     
        </div>
      </div>
    </section>
  )
}

export default HeaderSwiper
