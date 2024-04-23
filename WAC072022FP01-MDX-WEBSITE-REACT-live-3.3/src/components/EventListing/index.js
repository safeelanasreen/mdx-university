import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Style from "./EventListing.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import EventItem from "../cards/EventItem";
import Icons from "../Layout/Icons";

import moment from "moment";

const EventListing = (props) => {
  const data = props?.props?.data ? props?.props?.data : props?.data;
  const [filteredDates, setFilteredDates] = useState([]);
  const prevRef = useRef();
  const nextRef = useRef();
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [swiper, setSwiper] = useState();

  useEffect(() => {
    const temp = [];
    data?.related_events?.map((a) => {
      if (!temp.includes(a?.start_date)) {
        temp.push(a?.start_date);
      }
    });
    setFilteredDates(temp);

    if (swiper) {
      let closestNum = (num, dateArr) => {
        let closest = dateArr.reduce((a, b) => {
          return Math.abs(b - num) < Math.abs(a - num) ? b : a;
        });
        return closest;
      };

      let todaysEvent = temp.findIndex((d) => d === moment(new Date()).format("YYYY-MM-DD"));

      if (todaysEvent != "-1") {
        setSwiperActiveIndex(todaysEvent);
        if (swiper?.slideTo) {
          setTimeout(() => {
            swiper?.slideTo(todaysEvent, 300);
          }, 300);
        }
      } else {
        let closestDate = 0;
        // temp.findIndex(
        //   (d) =>
        //     closestNum(moment(new Date()).format("DD"), temp) ==
        //     moment(new Date(d)).format("DD")
        // );

        setSwiperActiveIndex(closestDate);
        if (swiper?.slideTo) {
          swiper?.slideTo(closestDate, 300);
        }
      }
    }
  }, [data, swiper]);

  useEffect(() => {
    let temp = data?.related_events?.filter(
      (a) => a?.start_date === filteredDates[swiperActiveIndex]
    );
    if (temp) {
      setFilteredEvents(temp);
    }
  }, [swiperActiveIndex, filteredDates]);

  return (
    <div className={Style.events_wrap}>
      <div className={`d-flex justify-content-between align-items-center ${Style.btn_wrap}`}>
        <h4 className="title_sub text-white mb-0">{data?.join_event_title}</h4>
        <Link href={data?.events_listing_link || ""} className="viewmore">
          <button className={`btn text-white mb-2 btn-link`}>
            <span className="me-2">View All Events</span> <Icons icon={"arrow-right"} size={10} />
          </button>
        </Link>
      </div>
      <div className={Style.swiper_wrap}>
        <div
          className={Style.btn_prev}
          ref={prevRef}
          style={{ opacity: swiperActiveIndex === 0 ? 0.5 : 1 }}
        >
          <Icons icon={"arrow-left-sharp-thin"} size={41.46} />
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          slideToClickedSlide={true}
          navigation={{
            prevEl: `.${Style.btn_prev}`,
            nextEl: `.${Style.btn_next}`,
          }}
          onSlideChange={(e) => setSwiperActiveIndex(e.activeIndex)}
          onSwiper={setSwiper}
          modules={[FreeMode, Navigation]}
          freeMode={true}
          className={Style.swiper_wrap_swiper}
        >
          {filteredDates.map((e, index) => (
            <SwiperSlide key={index} className={Style.swiper_slide}>
              <div className={Style.date_item}>
                <h4>{moment(new Date(e)).format("D")}</h4>
                <p>{moment(new Date(e)).format("MMMM")}</p>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide className={Style.swiper_slide}>
            <div className={Style.date_item}>
              <h4></h4>
              <p></p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={Style.swiper_slide}>
            <div className={Style.date_item}>
              <h4></h4>
              <p></p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${Style.swiper_slide} d-none d-md-block`}>
            <div className={Style.date_item}>
              <h4></h4>
              <p></p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div
          className={Style.btn_next}
          ref={nextRef}
          style={{
            opacity: swiperActiveIndex === filteredDates.length - 1 ? 0.5 : 1,
          }}
        >
          <Icons icon={"arrow-right-sharp-thin"} size={41.46} />
        </div>
      </div>

      <div className={Style.event_wrap}>
        {typeof swiperActiveIndex === "number" &&
          filteredEvents?.slice(0, 2)?.map((e, i) => {
            if (e.start_date === filteredDates[swiperActiveIndex]) {
              return (
                <EventItem
                  key={i}
                  title={e?.title}
                  description={e?.description}
                  time={e?.start_date + " " + e?.start_time}
                  timezone={e?.time_string}
                  link={e?.links}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default EventListing;
