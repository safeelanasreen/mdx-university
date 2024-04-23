import Style from "./MdxFaculties.module.scss";
import MdxFacultyCard from "../cards/MdxFacultyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Navigation } from "swiper";
import React, { useEffect, useRef, useState } from "react";
import Icons from "../Layout/Icons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

const MdxFaculties = ({ props }) => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const [swiper, setSwiper] = useState();
  const handleNextClick = () => {
    swiper.slideNext();
  };

  const handlePrevClick = () => {
    swiper.slidePrev();
  };
  return (
    <section
      id={props?.data?.scrollID || ""}
      className={`${Style.section} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      } ${props?.data?.no_spacing?.top && "pt-0"} ${
        props?.data?.no_spacing?.bottom && "pb-0"
      } ${props?.data?.no_spacing?.left && "ps-0"}  ${
        props?.data?.no_spacing?.right && "pe-0"
      }`}
      style={{
        "--background-color": props?.data?.background
          ? props?.data?.background
          : "transparent",
        "--text-color": props?.data?.text_color
          ? props?.data?.text_color
          : "var(--text-color)",
      }}
    >
      <div
        className={`${
          props?.data?.container ? "container-fluid" : "container"
        } ${
          props?.data?.no_spacing?.all
            ? "px-0 py-0"
            : props?.data?.no_spacing?.x
            ? "px-0"
            : ""
        }`}
      >
        <div
          className={
            props?.data?.no_spacing?.x ? "container-fluid" : "container"
          }
        >
          <h4 className="section-title_sub"> {props?.data?.main_title}</h4>
          <h2 className={`title section-title mb-3 ${Style.section_title}`}>
            {props?.data?.title}
          </h2>

          <div
          // className={`row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ${Style.card_stack}`}
          >
            <div className={Style.faculties_swiper_wrap}>
              <Swiper
                onSwiper={(swiper) => setSwiper(swiper)}
                loop={false}
                slidesPerView={1.1}
                spaceBetween={15}
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
                breakpoints={{
                 
                  768: {
                    slidesPerView: 2.2,
                    

                  },
                  992: {
                    slidesPerView: 3.2,
                  },
                  1200: {
                    slidesPerView: 4,
                    
                    
                  },
                }}
                // className={Style.mdx_cardstack_swiper}
              >
                {props?.data?.cards?.map((data, index) => {
                  return (
                    <>
                      <SwiperSlide
                        // className={`${Style.mdx_cardstack_item} ${
                        //   props.data.card_type == "card_with_icon"
                        //     ? Style.course_card
                        //     : ""
                        // }`}
                        key={index}
                      >
                        <div key={index} className={Style.facultycard_wrap}>
                          <MdxFacultyCard props={data} />
                        </div>
                      </SwiperSlide>
                    </>
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
        </div>
      </div>
    </section>
  );
};

export default MdxFaculties;
