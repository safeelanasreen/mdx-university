import Image from "next/image";
import React from "react";
import { getImageUrl } from "../../apis";
import CountCard from "../cards/CountCard";
import EventListing from "../EventListing";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./UpcomingEventWidget.module.scss";

const UpcomingEventWidget = ({ props }) => {
  const eventData = props?.data;
  return (
    <section className={`${Style.upcoming_events} ${
      props?.data?.no_spacing?.all
        ? "no_space"
        : props?.data?.no_spacing?.top
        ? "no_space_top"
        : props?.data?.no_spacing?.bottom
        ? width < 992
          ? ""
          : "no_space_bottom"
        : ""
    }`} id={props?.data?.scrollID ? props?.data?.scrollID  : "Upcoming Events"}>
      <div className="container">
        <h2 className="title title-sm">{props?.data?.title}</h2>
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">
            {props?.data?.video ? (
              <div className={Style.upcoming_events_video_outer}>
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  poster={Assets.cover_course}
                  className={Style.upcoming_events_video}
                >
                  <source
                    src={
                      props?.data?.video?.indexOf("://") === -1
                        ? getImageUrl(props?.data?.video ? props?.data?.video : "")
                        : props?.data?.video
                    }
                    type="video/mp4"
                  />
                </video>
              </div>
            ) : (
              <div className={Style.upcoming_events_figure_outer}>
                <figure className={`mb-0 ${Style.upcoming_events_figure}`}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition={"top"}
                    src={
                      props?.data?.image?.indexOf("://") === -1
                        ? getImageUrl(props?.data?.image ? props?.data?.image : "")
                        : props?.data?.image
                    }
                    alt={"Events"}
                  />
                </figure>
              </div>
            )}
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            {props?.data?.related_events ? (
              <div className={Style.upcoming_events_list}>
                <EventListing data={eventData} />
              </div>
            ) : (
              <div className="row row-cols-2">
                {props?.data?.benefits_list?.map((item, index) => (
                  <div key={index}>
                    <CountCard props={item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventWidget;
