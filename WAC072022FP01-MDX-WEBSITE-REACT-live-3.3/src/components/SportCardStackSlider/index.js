import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import Style from "./SportCardStackSlider.module.scss";

import SportsCard from "../cards/SportsCard";
import Icons from "../Layout/Icons";

const SportCardStackSlider = ({ props }) => {
  
  const prevNav = useRef(null), 
  nextNav = useRef(null);
  
  return (
    <section className={Style.mdx_sports_cardstack}>
      <Swiper
        loop={true}
        slidesPerView={1.05}
        spaceBetween={0}
        speed={100}
        watchSlidesProgress={true}
        navigation={{
          nextEl: nextNav.current,
          prevEl: prevNav.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevNav.current;
          swiper.params.navigation.nextEl = nextNav.current;
        }}
        scrollbar={{ draggable: true }}
        freeMode={true}
        modules={[FreeMode, Navigation, Scrollbar]}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        className={Style.mdx_sports_cardstack_swiper}
      >
        <div className={Style.prev_nav} ref={prevNav}>
          <Icons icon={"arrow-left-long"} size={20.97} />
          <span>Prev</span>
        </div>
        {props?.data?.map((data, key) => {
          return (
            <SwiperSlide key={key}>
              <SportsCard props={data} />
            </SwiperSlide>
          );
        })}
        <div className={Style.next_nav} ref={nextNav}>
          Next
          <Icons icon={"arrow-right-long"} size={20.97} />
        </div>
      </Swiper>
    </section>
  );
};

export default SportCardStackSlider;
