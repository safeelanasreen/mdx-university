import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import Style from "./CardStackSlider.module.scss";
import CourseCard from "../cards/CourseCard";
import RelatedCard from "../cards/RelatedCard";
import FacilityCard from "../cards/FacilityCard";
import Icons from "../Layout/Icons";
import FacultyCard from "../cards/FacultyCard";
import { getImageUrl } from "../../apis";

const CardStackSlider = ({ props, name }) => {
  const [swiper, setSwiper] = useState();
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const handleNextClick = () => {
    swiper.slideNext();
  };

  const handlePrevClick = () => {
    swiper.slidePrev();
  };
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
      {props?.data?.title && (
        <div className="container-fluid">
          <h2 className="title title-sm">{props?.data?.title}</h2>
        </div>
      )}
      <div
        className={`${
          props?.data?.container ? "container" : "container-fluid"
        } ${props?.data?.no_spacing?.x ? "px-0" : ""}`}
      >
        <div className={Style.cardstack_slider_wrap}>
          <Swiper
            onSwiper={(swiper) => setSwiper(swiper)}
            loop={false}
            slidesPerView={1.1}
            spaceBetween={props.data.card_type == "faculty_card" ? 15 : 0}
            scrollbar={{ draggable: true }}
            speed={600}
            watchSlidesProgress={true}
            modules={[FreeMode, Scrollbar, Navigation]}
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}  
            freeMode={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={
              name == "alumniExplore"
                ? {
                    280: {
                      slidesPerView: 1.1,
                    },
                    576: {
                      slidesPerView: 1.4,
                    },
                    768: {
                      slidesPerView: 2.2,
                      spaceBetween : props.data.card_type == "faculty_card" ? 20 : 0,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    1600: {
                      slidesPerView: 4.1,
                    },
                  }
                : {
                    768: {
                      slidesPerView: 2.2,
                    },
                    992: {
                      slidesPerView: 3.2,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                  }
            }
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
                  {props.data.card_type == "card_with_icon" ? (
                    <CourseCard
                      grid={true}
                      listing={true}
                      img={data?.img ? getImageUrl(data?.img) : ""}
                      title={data?.title}
                      content={data?.description}
                      link={data?.link}
                    />
                  ) : props.data.card_type == "card_with_image" ? (
                    <div>
                      <RelatedCard
                        link={data?.link}
                        title={data?.title}
                        img={getImageUrl(data?.img)}
                      />
                      {/* <RelatedCard title="Course" img={Assets.cover_campfire} /> */}
                    </div>
                  ) : props.data.card_type == "card_with_alphabet" ? (
                    <div>
                      <FacilityCard
                        title={"New Student Visa Application"}
                        img={Assets?.cover_campfire}
                      />
                    </div>
                  ) : props.data.card_type == "faculty_card" ? (
                    <div className={Style.mdx_cardstack_item_gap}>
                      <FacultyCard data={data} />
                    </div>
                  ) : (
                    ""
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div
            className={`swiper_navs_prev ${Style.swiper_navs_prev}`}
            onClick={handlePrevClick}
            ref={prevRef}
          >
            <Icons icon={"arrow-left-sharp-thin"} size={30} />
          </div>
          <div
            className={`swiper_navs_next ${Style.swiper_navs_next}`}
            onClick={handleNextClick}
            ref={nextRef}
          >
            <Icons icon={"arrow-right-sharp-thin"} size={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardStackSlider;
