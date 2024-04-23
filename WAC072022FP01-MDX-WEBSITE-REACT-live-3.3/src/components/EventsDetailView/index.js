import React, { useEffect } from "react";
import { useWindowSize } from "../../logic/useDimension";
import { useState } from "react";
import EventsDetailItem from "../EventsDetailItem";
import Icons from "../Layout/Icons";
import PageRightBar from "../PageRightBar";
import RelatedItems from "../RelatedItems";
import Style from "./EventsDetailView.module.scss";
import ShareWithFriends from "./ShareWithFriends";
import { useRouter, useNavigate } from "next/router";
import Link from "next/link";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import useEventsDetailView from "./useEventsDetailView";
import useTimeZoneFromTimeString from "./useTimeZoneFromTimeString";

const EventsDetailView = ({ props }) => {
  const {
    date,
    startingTime,
    endingTime,
    extractTimeAfterAMPM,
    isReady,
  } = useEventsDetailView(props);
  const router = useRouter();
  const { width } = useWindowSize();

  const timeAfterAMPM = extractTimeAfterAMPM(props?.body?.data?.time_string);
  const timeZone = useTimeZoneFromTimeString(timeAfterAMPM);
  return (
    <div className={`container ${Style.events_details_container}`}>
      <div className="row">
        <div className="col-xl-9">
          <div className={Style.main_sec_header}>
            <div className={Style.back_btn_wrap}>
              <button
                onClick={() => {
                  typeof window !== "undefined" && window?.history?.length > 2
                    ? router.back()
                    : router.push("/blogs");
                }}
                type="button"
                className="btn btn-link"
              >
                <Icons icon="arrow-left-thin" size={13} /> Back
              </button>
            </div>
            <ShareWithFriends />
          </div>
        </div>
      </div>
      <div className={`${Style.events_detail_wrap} row`}>
        <div className={`${Style.events_detail_main} col-xl-9`}>
          <EventsDetailItem
            props={props?.body}
            calendar={
              isReady ? (
                <AddToCalendarButton
                  name={props?.body?.data?.title}
                  startDate={date}
                  endDate={date}
                  startTime={startingTime}
                  endTime={endingTime}
                  availability="free"
                  timeZone={timeZone}
                  location={props?.body?.data?.place}
                  options={["Google"]}
                  hideBackground
                  buttonStyle="round"
                  className={Style.add_calender}
                ></AddToCalendarButton>
              ) : (
                ""
              )
            }
          />

          <div className={Style.main_sec_bottom}>
            <ShareWithFriends />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <RelatedItems props={props?.related_events} />
            </div>
          </div>
        </div>
        {width >= 1200 ? (
          <div className={`${Style.events_detail_right_side} col-lg-3`}>
            <div className={Style.events_detail_right_events}>
              <PageRightBar props={props?.right_bar} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default EventsDetailView;
