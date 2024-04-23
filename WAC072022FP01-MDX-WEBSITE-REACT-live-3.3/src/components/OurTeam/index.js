import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";

import Style from "./OurTeam.module.scss";
import CourseCard from "../cards/CourseCard";
import RelatedCard from "../cards/RelatedCard";
import FacilityCard from "../cards/FacilityCard";
import Icons from "../Layout/Icons";
import FacultyCard from "../cards/FacultyCard";
import { getImageUrl } from "../../apis";

const OurTeam = ({ props, name }) => {
  const [swiper, setSwiper] = useState();
  const parse = require("html-react-parser");
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  // const handleNextClick = () => {
  //   swiper.slideNext();
  // };

  // const handlePrevClick = () => {
  //   swiper.slidePrev();
  // };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(null);
  return (
    <section
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
      className={`${Style.cardstack_slider} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      } cardstack-slider`}
    >
      <div
        className={`${
          props?.data?.container ? "container" : "container-fluid"
        } ${props?.data?.no_spacing?.x ? "px-0" : ""}`}
      >
        <div className="row">
          <div className="col-12 col-xl-8 me-auto">
            <div
              className={`${Style.cardstack_head} d-flex flex-wrap align-items-center`}
            >
              {props?.data?.title && (
                <div className={Style.cardstack_head_title}>
                  <h2 className="title title-sm mb-0">{props?.data?.title}</h2>
                </div>
              )}
              <div className={Style.cardstack_head_nav}>
                <div
                  className={`swiper_navs_prev ${Style.swiper_navs_prev}`}
                  // onClick={handlePrevClick}
                  ref={prevRef}
                >
                  <Icons icon={"arrow-left-sharp-thin"} size={30} />
                </div>
                <div
                  className={`swiper_navs_next ${Style.swiper_navs_next}`}
                  // onClick={handleNextClick}
                  ref={nextRef}
                >
                  <Icons icon={"arrow-right-sharp-thin"} size={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className={Style.cardstack_slider_wrap}>
              <Swiper
                onSwiper={(swiper) => {
                  setSwiper(swiper);
                  setThumbsSwiper(swiper);
                }}
                slidesPerView={1}
                spaceBetween={props.data.card_type == "faculty_card" ? 15 : 0}
                navigation={{
                  nextEl: nextRef.current,
                  prevEl: prevRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                onSlideChange={(swiper) => {
                  setTimeout(() => {
                    activeSlide.slideTo(swiper.activeIndex);
                  }, 100);
                }}
                modules={[Navigation, Thumbs]}
                speed={600}
                watchSlidesProgress={true}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                  1600: {
                    slidesPerView: 3,
                  },
                }}
                className={Style.mdx_cardstack_swiper}
              >
                {props?.data?.cards?.map((data, key) => {
                  return (
                    <SwiperSlide
                      className={`${Style.mdx_cardstack_item} ${
                        props.data.card_type == "card_with_icon"
                          ? Style.course_card
                          : ""
                      }`}
                      key={key}
                    >
                      <div className={Style.mdx_cardstack_item_gap}>
                        <FacultyCard showName={true} data={data} />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="col-xl-4">
            <div className={Style.about_team}>
              <h4 className="title_sub mb-2">Background</h4>
              <h2 className="title title-sm">About Staff</h2>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                onSlideChange={(swiper) => {}}
                onBeforeInit={(swiper) => {
                  setActiveSlide(swiper);
                }}
                spaceBetween={10}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[Navigation, Thumbs]}
                className={Style.swiper_main}
              >
                {props?.data?.cards?.map((data, key) => {
                  return (
                    <SwiperSlide key={key}>
                      <div className={Style.faculty_item_info}>
                        <div className="d-flex align-items-start justify-content-between">
                          <h5>{parse(data?.name)}</h5>
                        </div>
                        <div className={Style.p}>
                          {data?.designation && <>{parse(data?.designation)}</>}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
