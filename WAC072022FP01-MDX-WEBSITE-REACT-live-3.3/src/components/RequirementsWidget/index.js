import React from "react";
import Style from "./RequirementsWidget.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Navigation, Scrollbar, FreeMode } from "swiper";

import RequirementCard from "../cards/RequirementCard";
import Icons from "../Layout/Icons";
import RequirementsTable from "../RequirementsTable";

const RequirementsWidget = ({ props }) => {
  const parse = require("html-react-parser");
  return (
    <section
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
      className={`${Style.entry_requirements} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      }`}
    >
      <div className={props.data.container ? "container" : "container-fluid"}>
        <div className="d-flex align-items-end justify-content-between">
          <div className={Style.entry_requirements_head}>
            {props.data.title_caption && (
              <h4 className="title_sub">{props.data.title_caption}</h4>
            )}
            {props.data.title && (
              <h2 className="title title-sm">{props.data.title}</h2>
            )}
            {props.data.description && <p>{parse(props.data.description)}</p>}
          </div>
          <div className={Style.entry_nav}>
            <div className={`entry_nav_prev ${Style.entry_nav_prev}`}>
              <Icons icon={"arrow-left-sharp-thin"} size={30} />
            </div>
            <div className={`entry_nav_next ${Style.entry_nav_next}`}>
              <Icons icon={"arrow-right-sharp-thin"} size={30} />
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={1.1}
          spaceBetween={10}
          navigation={{
            prevEl: ".entry_nav_prev",
            nextEl: ".entry_nav_next",
          }}
          scrollbar={{
            el: ".entry_scrollbar",
            draggable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: props?.data?.cards?.length < 2 ? 1:  2.15,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: props?.data?.cards?.length < 2 ? 1 : 2.15,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: props?.data?.cards?.length < 2 ? 1: 2.5,
              spaceBetween: 25,
              scrollbar: false,
            },
            1200: {
              slidesPerView: props?.data?.cards?.length < 3 ? props?.data?.cards?.length < 2 ? 1: 2 : 3,
              spaceBetween: 25,
            },
          }}
          modules={[Scrollbar, Navigation, FreeMode]}
          freeMode={true}
          className={Style.entry_requirements_swiper}
        >
          {props.data.cards?.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <RequirementCard props={data} />
              </SwiperSlide>
            );
          })}
          <div
            className={`entry_scrollbar swiper-scrollbar ${Style.entry_scrollbar}`}
          ></div>
        </Swiper>
      </div>
      <RequirementsTable props={props} />
    </section>
  );
};

export default RequirementsWidget;
