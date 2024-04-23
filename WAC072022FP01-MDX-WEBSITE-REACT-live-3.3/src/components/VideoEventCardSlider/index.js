import Style from "./VideoEventCardSlider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation, Scrollbar } from "swiper";
import VideoEventCard from "../cards/VideoEventCard";
import React from "react";
import Icons from "../Layout/Icons";

const VideoEventCardSlider = (props) => {
  props = props?.props?.data ? props?.props?.data : props?.props;
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className={`${Style.video_swiper_slider_wrap} ms-auto`}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className={Style.video_swiper_slider}
        navigation={{
          prevEl: ".swiper-slide-prevv",
          nextEl: ".swiper-slide-nextne",
        }}
       /*  onTouchStart={(swiper)=>{
          const currentVideo = swiper.slides[swiper.realIndex].querySelector('video');
          currentVideo.pause()
        }} */
      >
        {props?.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <VideoEventCard props={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={`swiper-slide-prevv ${Style.swiper_prev}`}>
        <Icons icon="arrow-left-sharp-thin" size={40} />
      </div>
      <div className={`swiper-slide-nextne ${Style.swiper_next}`}>
        <Icons icon="arrow-right-sharp-thin" size={40} />
      </div>
    </div>
  );
};

export default VideoEventCardSlider;