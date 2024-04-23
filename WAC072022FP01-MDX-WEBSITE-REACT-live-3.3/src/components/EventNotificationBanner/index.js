import { useRouter } from "next/router";
import Style from "./EventNotificationBanner.module.scss";
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination } from "swiper";
import Link from "next/link";

const EventNotificationBanner = ({ props }) => {
  const parse = require("html-react-parser");

  let events = props?.data?.events;
  let interval = 5;

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [change, setChange] = useState(true);

  useEffect(() => {
    setChange(false);
    setTimeout(() => {
      setChange(true);
    }, 300);
    const timer = setTimeout(() => {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, interval * 1000);

    return () => clearTimeout(timer);
  }, [currentEventIndex]);

  const Router = useRouter();

  const bgcolor = props?.data?.background_color ? props?.data?.background_color : "transparent";
  return (
    <section
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
      className={`${Style.section} ${Router.asPath == "/" && Style.section_home} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      }`}
      style={{"--background-color": bgcolor}}
    >
      <div
        className={`${props?.data?.container ? "container" : "container-fluid"} ${
          props?.data?.no_spacing?.x ? "px-0" : ""
        }`}
      >
        <div
          className={`row row-cols-auto align-items-center justify-content-center ${Style.notification}`}
        >
          {events[currentEventIndex]?.date && (
            <div className={Style.notification_label}>Latest Updates:</div>
          )}
          <div className={Style.notification_content}>
            <div className="d-inline-block">
              {events[currentEventIndex]?.date && (
                <Link href={`${events[currentEventIndex]?.link}`}>
                  {events[currentEventIndex]?.title}
                </Link>
              )}{" "}
              &nbsp;&nbsp;
              {
                <span className={`${Style.change} ${change ? Style.updated : ""}`}>
                  {events[currentEventIndex]?.content && parse(events[currentEventIndex]?.content)}
                </span>
              }
            </div>
            {events[currentEventIndex]?.date ? (
              <div className="d-inline-block">
                <strong>Term start date:</strong>{" "}
                <span className={`${Style.change} ${change ? Style.updated : ""}`}>
                  {events[currentEventIndex]?.date}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventNotificationBanner;
