import { useState, useRef } from "react";
import Style from "./MdxRelatedCourses.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import MdxRelatedCard from "../cards/MdxRelatedCard";

const MdxRelatedCourses = ({ props }) => {
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
        className={`${Style.container} ${
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
          {props?.data?.sub_title ? (
            <h4 className="section-title_sub">{props?.data?.sub_title}</h4>
          ) : (
            ""
          )}
          <h2 className={`title section-title mb-3  ${Style.section_title}`}>
            {props?.data?.main_title}
          </h2>
          <Swiper
            onSwiper={(swiper) => setSwiper(swiper)}
            loop={false}
            slidesPerView={1.1}
            spaceBetween={13}
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
                slidesPerView: 2.5,
              },
              1200: {
                slidesPerView: 2.65,
              },
            }}
            className={Style.mdx_cardstack_swiper}
          >
            {props?.data?.cards?.map((data, i) => (
              <SwiperSlide
                className={`${Style.mdx_cardstack_swiper_item}`}
                key={i}
              >
                <MdxRelatedCard props={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MdxRelatedCourses;
