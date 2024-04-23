import EventDayCard from "../cards/EventDayCard";
import Style from "./UpcomingEventSliderWidget.module.scss";
import React, { useRef, useState, useLayoutEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useUpcomingEventSliderWidget from "./useUpcomingEventSliderWidget";
import { forwardRef } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination, Navigation, Scrollbar } from "swiper";
import Icons from "../Layout/Icons";
import { useWindowSize } from "../../logic/useDimension";
import EventCardNew from "../cards/EventCardNew";

const UpcomingEventSliderWidget = ({ props }) => {
  const { events, prevRef, nextRef, setSwiper } =
    useUpcomingEventSliderWidget(props);

  const { width } = useWindowSize();

  /* Event Sider Slices */
  const [chunkSize, setchunkSize] = useState(6);
  const [eventChunks, setEventChunks] = useState();
  const [loader, setLoader] = useState(true);

  useLayoutEffect(() => {
    const chunkArray = (arr, size) =>
      Array.from({ length: Math.ceil(arr?.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
      );

    const handleResize = () => {
      const newSize =
        window.innerWidth < 1200 && window.innerWidth >= 768
          ? 4
          : window.innerWidth < 767.98
          ? 1
          : 6;
      setchunkSize(newSize);
      setLoader(false);
      setEventChunks(chunkArray(events, newSize));
    };

    const initialResize = () => {
      if (typeof window !== "undefined") {
        handleResize(); // Initial setup based on window wsidths
        window.addEventListener("resize", handleResize);
      }
    };

    initialResize();

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [events]);
  return (
    <section
      className={`${Style.section} ${
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
      id={props?.data?.scrollID ? props?.data?.scrollID : "Upcoming Events"}
    >
      <div className="container">
        <div
          className={`d-flex flex-wrap align-items-center justify-content-between ${Style.section_head}`}
        >
          <h2 className="title title-sm mb-0">{props?.data?.title}</h2>
          <div className={`d-flex  ${Style.filter_date_wrap}`}>
            <div className={Style.section_filter}></div>
            <div style={{ zIndex: "200" }}></div>
          </div>
        </div>

        {loader ? (
          <div className={Style.loading_black}>
            <div className={Style.dot_1}></div>
            <div className={Style.dot_2}></div>
            <div className={Style.dot_3}></div>
          </div>
        ) : (
          <div className={Style.section_body}>
            {events && (
              <div className={Style.swiper_wrapper}>
                <>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    modules={[Grid, Navigation]}
                    navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    onInit={setSwiper}
                    className={Style.swiper}
                  >
                    {eventChunks?.length < 0 ? (
                      <p className={Style.no_data}>
                        <span>No results found</span>
                      </p>
                    ) : (
                      eventChunks?.map((chunk, chunkIndex) => (
                        <SwiperSlide
                          key={chunkIndex}
                          className={Style.swiper_slide}
                        >
                          <div
                            className={`row row-cols-md-2 row-cols-xl-3 ${Style.slide_calender} `}
                          >
                            {chunk.map((event, eventIndex) => (
                              <div key={eventIndex}>
                                <EventCardNew props={event} />
                              </div>
                            ))}
                          </div>
                        </SwiperSlide>
                      ))
                    )}
                  </Swiper>
                  <div className={Style.swiper_nav}>
                    <button
                      className={`${Style.swiper_nav_el} ${Style.swiper_nav_prev}`}
                      ref={prevRef}
                    >
                      <Icons icon="arrow-left-sharp-thin" size={40} />
                    </button>
                    <button
                      className={`${Style.swiper_nav_el} ${Style.swiper_nav_next}`}
                      ref={nextRef}
                    >
                      <Icons icon="arrow-right-sharp-thin" size={40} />
                    </button>
                  </div>
                </>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEventSliderWidget;
