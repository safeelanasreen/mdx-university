import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel, Autoplay } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
import { useState } from "react";

import Style from "./NewsFeedClone.module.scss";
import NewsCard from "../cards/NewsCard";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import { getImageUrl } from "../../apis";
import moment from "moment";
import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";

const NewsFeedClone = ({ props }) => {
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
  const { width } = useWindowSize();
  // const [mainSwiper, setMainSwiper] = useState(null);
  const parse = require("html-react-parser");
  return (
    <section
      id={props?.data?.scrollID || ""}
      className={`${Style.newsfeed} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      }`}
      style={{
        "--background-color": props?.data?.background
          ? props?.data?.background
          : "var(--background-color)",
        "--text-color": props?.data?.text_color
          ? props?.data?.text_color
          : "var(--text-color)",
      }}
    >
      <div
        className={`${
          props?.data?.container ? "container" : "container-fluid"
        } ${
          props?.data?.no_spacing?.all
            ? "px-0 py-0"
            : props?.data?.no_spacing?.x
            ? "px-0"
            : ""
        }`}
      >
        <div className={props?.data?.no_spacing?.x ? "container-fluid" : ""}>
          <h4 className="title_sub">{props?.data?.sub_title}</h4>
        </div>
        <div className={props?.data?.no_spacing?.x ? "container-fluid" : ""}>
          <h2 className="title title-sm mb-3">{props?.data?.title}</h2>
        </div>
        <div className={`row ${props?.data?.no_gutter ? "gx-0" : ""}`}>
          <div className="col-lg-5">
            <div className="slider__images">
              <Swiper
                thumbs={{
                  swiper:
                    imagesNavSlider && !imagesNavSlider.destroyed
                      ? imagesNavSlider
                      : null,
                }}
                speed={500}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                direction="horizontal"
                slidesPerView={1}
                spaceBetween={20}
                mousewheel={true}
                loop={true}
                // onInit={(swiper)=>{
                //   setMainSwiper(swiper);
                // }}
                breakpoints={{
                  0: {
                    direction: "horizontal",
                  },
                  768: {
                    direction: "horizontal",
                  },
                  992: {speed: 500}
                }}
                className="swiper-container2"
                modules={[Navigation, Thumbs, Mousewheel, Autoplay]}
              >
                {props?.data?.cards?.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      {width < 768 ? (
                        <Link href={slide?.url || ""}>
                          <div>
                            <div className="slider__image">
                              <Image
                                src={
                                  slide?.img_thumb?.indexOf("://") === -1
                                    ? getImageUrl(
                                        slide?.img_thumb ? slide?.img_thumb : ""
                                      )
                                    : slide?.img_thumb
                                }
                                alt={slide?.title}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div className={slide?.title && "mt-3"}>
                              {slide?.title && (
                                <h3 className="h6 slider__title">
                                  {slide?.title}
                                </h3>
                              )}
                              {slide?.description && (
                                <p className="slider__para">
                                  {parse(
                                    slide?.description?.replace(
                                      /(<([^>]+)>)/gi,
                                      ""
                                    )
                                  )}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <>
                          <div className="slider__image">
                            <Image
                              src={
                                slide?.img_thumb?.indexOf("://") === -1
                                  ? getImageUrl(
                                      slide?.img_thumb ? slide?.img_thumb : ""
                                    )
                                  : slide?.img_thumb
                              }
                              alt={slide?.title}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <div className={slide?.title && "mt-3"}>
                            {slide?.title && (
                              <h3 className="h6 slider__title">
                                {slide?.title}
                              </h3>
                            )}
                            {slide?.description && (
                              <p className="slider__para">
                                {parse(
                                  slide?.description?.replace(
                                    /(<([^>]+)>)/gi,
                                    ""
                                  )
                                )}
                              </p>
                            )}
                          </div>
                        </>
                      )}

                      {/* <div></div> */}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          {width > 768 && (
            <div className="col-lg-7">
              <div className="slider__thumbs fill">
                <Swiper
                  onSwiper={setImagesNavSlider}
                  onInit={(swiper) => {
                    setImagesNavSlider(swiper);
                  }}
                  speed={500}
                  loop={true}
                  direction="horizontal"
                  spaceBetween={15}
                  slidesPerView={"auto"}
                  className="swiper-container1  fill-swiper-thumb"
                  draggable={false}
                  // onSlideChange={(swiper)=>{
                  //   console.log(mainSwiper, "Thumb Slide Change _ Index");
                  // }}
                  noSwiping={true}
                  noSwipingClass="swiper-slide"
                  breakpoints={{
                    768: {
                      direction: "vertical",
                    },
                  }}
                  modules={[Navigation, Thumbs]}
                >
                  {props?.data?.cards?.map((slide, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <NewsCard
                          link={slide?.url}
                          title={slide?.title}
                          img={slide?.img_thumb}
                          date={
                            slide?.date &&
                            moment(new Date(slide?.date)).format(
                              "dddd, D MMMM YYYY"
                            )
                          }
                          description={slide?.description}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsFeedClone;
