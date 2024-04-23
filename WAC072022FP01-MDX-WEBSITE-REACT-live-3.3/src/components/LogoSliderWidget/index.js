import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import SwiperCore, { Navigation, Scrollbar, Autoplay, FreeMode } from "swiper";
import Style from "./LogoSliderWidget.module.scss";
import Icons from "../Layout/Icons";
import { getImageUrl } from "../../apis";
import parse from "html-react-parser";

const LogoSliderWidget = ({ props }) => {
  SwiperCore.use([Navigation, Scrollbar, Autoplay, FreeMode]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const slideLength = props?.data?.logo?.length;
  const [slide, setSlide] = useState(false);
  const [swiper, setSwiper] = useState(null);
  return (
    <section
      className={`${Style.logo_slider} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? width < 992
            ? ""
            : "no_space_bottom"
          : ""
      }`}
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
      style={{"--light": props?.data?.background_color ? props?.data?.background_color : ""}}
    >
      <div className="container-fluid">
        <div className={Style.head_wrap}>
          <h4 className="title_sub text-center">{props?.data?.title}</h4>
          <h2 className="title title-sm text-center mb-0">
            {props?.data?.main_title}
          </h2>
          {props?.data?.description ? (
            <div className={Style.logo_slider_cnt}>
              {parse(props?.data?.description)}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={Style.logo_slider_wrapper}>
          <div
            className={`logo_slider_prev ${Style.logo_slider_prev} ${
              slide ? "" : "d-none"
            }`}
            ref={prevRef}
          >
            <Icons icon={"arrow-left-sharp-thin"} size={40} />
          </div>
          {props?.data?.logo ? (
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              freeMode={true}
              navigation={{
                nextEl: nextRef.current,
                prevEl: prevRef.current,
              }}
              onBeforeInit={(swiper) => {
                setSlide(swiper?.allowSlideNext);
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onInit={setSwiper}
              onResize={(swiper) => {
                setSlide(swiper?.allowSlideNext);
              }}
              grabCursor={true}
              mousewheel={true}
              keyboard={true}
              speed={400}
              className={`${Style.logo_slider_swiper} ${
                slide ? "" : Style.logo_slider_swiper_center
              }`}
            >
              {props?.data?.logo?.map((data, i) => {
                return (
                  <SwiperSlide
                    className={Style.logo_slider_swiper_item}
                    key={i}
                  >
                    <figure
                      className={Style.logo_slider_swiper_img}
                      style={{
                        "--image-width": data?.width ? data?.width : 230,
                        "--image-height": data?.height ? data?.height : 78,
                      }}
                    >
                      <Image
                        src={
                          data?.img?.indexOf("://") === -1
                            ? getImageUrl(data?.img ? data?.img : "")
                            : data?.img
                        }
                        alt={"Partners Logo"}
                        layout="fill"
                        objectFit="contain"
                      />
                    </figure>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            ""
          )}

          <div
            className={`logo_slider_next ${Style.logo_slider_next} ${
              slide ? "" : "d-none"
            }`}
            ref={nextRef}
            onClick={() => swiper?.slideNext()}
          >
            <Icons icon={"arrow-right-sharp-thin"} size={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSliderWidget;
