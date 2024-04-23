import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import Assets from "../Layout/CommonLayout/assets";
import Style from "./TestimonialSliderWidget.module.scss";
import Icons from "../Layout/Icons";
import { getImageUrl } from "../../apis";

const TestimonialSliderWidget = ({ props }) => {
  const container = true;
  const parse = require("html-react-parser");
  return (
    <section className={Style.testimonial_slider_widget}>
      <div className={container ? "container" : "container-fluid"}>
        <div className={Style.testimonial_slider_wrap}>
          <Swiper
            slidesPerView={1}
            navigation={{
              prevEl: ".testimonial_prev",
              nextEl: ".testimonial_next",
            }}
            loop={true}
            pagination={{
              el: ".testimonial_pagination",
              clickable: true,
            }}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: true,
            // }}
            grabCursor={true}
            mousewheel={true}
            keyboard={true}
            speed={1000}
            modules={[Pagination, Navigation, Autoplay]}
            className={Style.testimonial_slider}
          >
            {props?.data?.map((data, i) => {
              return (
                <SwiperSlide className={Style.testimonial_slider_item} key={i}>
                  <div className={Style.slide_item}>
                    <figure className={Style.slide_item_auth_img}>
                      <Image
                        src={getImageUrl(data?.img)}
                        alt={data?.name}
                        height={156}
                        width={156}
                        objectFit="cover"
                      />
                    </figure>
                    <h2 className="title title-sm">{data?.name}</h2>
                    <h3 className="title_sub">{data?.designation}</h3>
                    <div className={Style.paragraph}>{data?.description && parse(data?.description)}</div>
                  </div>
                </SwiperSlide>
              );
            })}

            {/* <SwiperSlide className={Style.testimonial_slider_item}>
              <div className={Style.slide_item}>
                <figure className={Style.slide_item_auth_img}>
                  <Image
                    src={Assets.author_img}
                    alt={"Joao Victor"}
                    height={156}
                    width={156}
                  />
                </figure>
                <h2 className="title title-sm">Joao Victor</h2>
                <h3 className="title_sub">
                  BA Business Management (Marketing)
                </h3>
                <p>
                  &quot;Today, you not only need to decide what you enjoy doing
                  and you have a passion for but you also need to decide what
                  you are good at. When you choose to study a programme you are
                  interested in, this really will be fulfilling and motivate you
                  to succeed.&quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={Style.testimonial_slider_item}>
              <div className={Style.slide_item}>
                <figure className={Style.slide_item_auth_img}>
                  <Image
                    src={Assets.author_img}
                    alt={"Joao Victor"}
                    height={156}
                    width={156}
                  />
                </figure>
                <h2 className="title title-sm">Joao Victor</h2>
                <h3 className="title_sub">
                  BA Business Management (Marketing)
                </h3>
                <p>
                  &quot;Today, you not only need to decide what you enjoy doing
                  and you have a passion for but you also need to decide what
                  you are good at. When you choose to study a programme you are
                  interested in, this really will be fulfilling and motivate you
                  to succeed.&quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={Style.testimonial_slider_item}>
              <div className={Style.slide_item}>
                <figure className={Style.slide_item_auth_img}>
                  <Image
                    src={Assets.author_img}
                    alt={"Joao Victor"}
                    height={156}
                    width={156}
                  />
                </figure>
                <h2 className="title title-sm">Joao Victor</h2>
                <h3 className="title_sub">
                  BA Business Management (Marketing)
                </h3>
                <p>
                  &quot;Today, you not only need to decide what you enjoy doing
                  and you have a passion for but you also need to decide what
                  you are good at. When you choose to study a programme you are
                  interested in, this really will be fulfilling and motivate you
                  to succeed.&quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={Style.testimonial_slider_item}>
              <div className={Style.slide_item}>
                <figure className={Style.slide_item_auth_img}>
                  <Image
                    src={Assets.author_img}
                    alt={"Joao Victor"}
                    height={156}
                    width={156}
                  />
                </figure>
                <h2 className="title title-sm">Joao Victor</h2>
                <h3 className="title_sub">
                  BA Business Management (Marketing)
                </h3>
                <p>
                  &quot;Today, you not only need to decide what you enjoy doing
                  and you have a passion for but you also need to decide what
                  you are good at. When you choose to study a programme you are
                  interested in, this really will be fulfilling and motivate you
                  to succeed.&quot;
                </p>
              </div>
            </SwiperSlide> */}
          </Swiper>
          <div
            className={`${Style.testimonial_pagination} testimonial_pagination`}
          ></div>
          {props?.data?.length > 2 && (
            <div className={Style.testimonial_navigation}>
              <button className={`${Style.testimonial_prev} testimonial_prev`}>
                <Icons icon={"arrow-left-sharp-thin"} size={40} />
              </button>
              <button className={`${Style.testimonial_next} testimonial_next`}>
                <Icons icon={"arrow-right-sharp-thin"} size={40} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSliderWidget;
