import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import ReviewCard from "../cards/ReviewCard";
import Style from "./ReviewCardStack.module.scss";

import { useWindowSize } from "../../logic/useDimension";

import { useEffect, useRef, useState } from "react";
const ReviewCardStack = ({ props }) => {
  const { width } = useWindowSize();

  const mobileviewRef = useRef();

  const [showShadow, setShowShadow] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY <
        mobileviewRef.current.offsetTop +
          mobileviewRef.current.offsetHeight -
          400
      ) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    });
  }, []);
  return (
    <>
      {width < 768 ? (
        <div
          className={`${Style.review_widget_mobile} ${
            showShadow ? Style.shadow : ""
          }`}
          ref={mobileviewRef}
        >
          {props?.map((value, index) => (
            <ReviewCard key={index} props={value} />
          ))}
        </div>
      ) : (
        <Swiper
          loop={false}
          initialSlide={Math?.floor(props?.length / 2)}
          slidesPerView={1}
          spaceBetween={20}
          speed={100}
          watchSlidesProgress={true}
          modules={[FreeMode, Scrollbar, Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          freeMode={true}
          centeredSlides={true}
          className={Style.review_widget_swiper}
          ref={mobileviewRef}
        >
          {props?.map((value, index) => (
            <SwiperSlide key={index}>
              <ReviewCard props={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default ReviewCardStack;
