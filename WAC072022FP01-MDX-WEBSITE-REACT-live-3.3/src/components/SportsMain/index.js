import React, { useRef } from "react";
import Style from "./SportsMain.module.scss";
import Link from "next/link";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Scrollbar } from "swiper";
import Assets from "../Layout/CommonLayout/assets";
import Icons from "../Layout/Icons";

import { useWindowSize } from "../../logic/useDimension";
import { getImageUrl } from "../../apis";

const SportsMain = ({ props }) => {
  const container = true;
  const no_spacing = false;
  const navNext = useRef(Style.nav_next);
  const navPrev = useRef(Style.nav_prev);

  const { width } = useWindowSize();
  const parse = require("html-react-parser");

  let img =
    props?.data?.img?.indexOf("://") === -1
      ? getImageUrl(props?.data?.img ? props?.data?.img : "")
      : props?.data?.img;

  return (
    <section
      style={{
        "--grey-alt": props?.data?.img ? "" : props?.data?.background_color,
        backgroundImage: `url(${img})`,
      }}
      className={Style.sports_main}
    >
      <figure className={Style.device_bg}>
        <Image
          src={Assets.sport_main_bg}
          layout="fill"
          alt={"Sports"}
          objectFit="cover"
        />
      </figure>
      <div
        className={`${container ? "container" : "container-fluid"} ${
          no_spacing ? "px-0" : ""
        } position-relative`}
      >
        <div className={Style.title_sec}>
          <h3 className="title_sub">{props?.data?.sub_title}</h3>
          <h2 className="title title-sm">{parse(props?.data?.title)}</h2>
        </div>
        <div className={Style.sports_main_slider_outer}>
          <div
            style={{
              color: props?.data?.arrow_button_color
                ? props?.data?.arrow_button_color
                : "",
            }}
            className={Style.nav_prev}
            ref={navPrev}
          >
            <Icons icon={"arrow-left-thin"} size={45} />
          </div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            initialSlide={2}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={{
              nextEl: navNext.current,
              prevEl: navPrev.current,
            }}
            scrollbar={true}
            modules={[EffectCoverflow, Navigation, Scrollbar]}
            className={Style.sports_main_slider}
            breakpoints={{
              992: {
                slidesPerView: 2,
                coverflowEffect: {
                  rotate: 45,
                  stretch: 80,
                  depth: 200,
                  modifier: 1,
                  slideShadows: false,
                },
              },
              1200: {
                slidesPerView: 2,
                coverflowEffect: {
                  rotate: 20,
                  stretch: 80,
                  depth: 200,
                  modifier: 3,
                  slideShadows: false,
                },
              },
            }}
          >
            {props?.data?.slider?.map((data, i) => {
              return (
                <SwiperSlide className={Style.sports_main_slide_item} key={i}>
                  <Link href={data?.link}>
                    <div className={Style.sports_main_card}>
                      <figure className={Style.slide_fig}>
                        <Image
                          src={getImageUrl(data?.img)}
                          alt={data?.title}
                          width={818}
                          height={560}
                          objectFit="cover"
                        />
                      </figure>
                      <div className={Style.sports_main_card_details}>
                        <div
                          className={Style.sports_main_card_details_titlelink}
                        >
                          <h3>{data?.title}</h3>
                          <a
                            className={`btn-round btn-round-grey btn-round-grey-light md ${Style.btn_link}`}
                          >
                            <Icons icon={"arrow-right"} size={15} />
                          </a>
                        </div>
                        {/* <p>{data?.content}</p> */}
                      </div>
                      <h4>{data?.title}</h4>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div
            style={{
              color: props?.data?.arrow_button_color
                ? props?.data?.arrow_button_color
                : "",
            }}
            className={Style.nav_next}
            ref={navNext}
          >
            <Icons icon={"arrow-right-sharp-md-thin"} size={45} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsMain;
