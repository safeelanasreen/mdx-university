import { useRef } from "react";

import Style from "./MdxAccreditation.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import AccreditationCard from "../cards/AccreditationCard";
import Icons from "../Layout/Icons";

const MdxAccreditation = ({ props }) => {
  const parse = require("html-react-parser");

  const prevRef = useRef(null);
  const nextRef = useRef(null);
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
        {props?.data?.sub_title ? (
          <div className={props?.data?.no_spacing?.x ? "container-fluid" : ""}>
            <h4 className="section-title_sub">{props?.data?.sub_title}</h4>
          </div>
        ) : (
          ""
        )}
        {props?.data?.main_title && (
          <h2 className="title section-title mb-3">
            {props?.data?.main_title}
          </h2>
        )}
        {parse(props?.data?.content)}
        <div
          className={`d-flex flex-wrap align-items-center ${Style.swiper_outer}`}
        >
          <Swiper
            loop={false}
            slidesPerView={1}
            spaceBetween={10}
            speed={600}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation]}
            freeMode={true}
            // onBeforeInit={(swiper) => {
            //   swiper.params.navigation.prevEl = prevRef.current;
            //   swiper.params.navigation.nextEl = nextRef.current;
            // }}
            // onInit={(swiper) => {
            //   swiper.params.navigation.prevEl = prevRef.current;
            //   swiper.params.navigation.nextEl = nextRef.current;
            // }}
            navigation={{
              nextEl: ".accred_next",
              prevEl: ".accred_prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 15,
                slidesPerView: 3,
              },
              1200: {
                spaceBetween: 25,
                slidesPerView: 3,
              },
              1600: {
                spaceBetween: 25,
                slidesPerView: 4,
              },
            }}
            className={Style.swiper}
          >
            {props?.data?.cards?.map((data, index) => {
              return (
                <>
                  <SwiperSlide key={index} className="h-auto">
                    <AccreditationCard props={data} />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
          <div className={Style.swiper_navs}>
            <div
              className={`swiper_navs_prev accred_prev ${Style.swiper_navs_prev}`}
              ref={prevRef}
            >
              <Icons icon={"arrow-left-sharp-thin"} size={30} />
            </div>
            <div
              className={`swiper_navs_next accred_next ${Style.swiper_navs_next}`}
              ref={nextRef}
            >
              <Icons icon={"arrow-right-sharp-thin"} size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MdxAccreditation;
