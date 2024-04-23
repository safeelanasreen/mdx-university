import Assets from "../Layout/CommonLayout/assets";
import Style from "./EventsDetailItem.module.scss";
import Image from "next/image";
import Icons from "../Layout/Icons";
import { getImageUrl } from "../../apis";
import moment from "moment";
import Link from "next/link";

// import { AddToCalendarButton } from "add-to-calendar-button-react";


const EventsDetailItem = ({ props, calendar }) => {
  const parse = require("html-react-parser");

  return (
    <>
      <div className={Style.event_details}>
        {props?.data?.img ? (
          <div className={Style.image_wrap}>
            <Image
              layout="fill"
              objectFit="cover"
              src={getImageUrl(props?.data?.img)}
              alt={"course cover"}
            />
          </div>
        ) : (
          <></>
        )}
        <div className="row mb-3 align-items-center justify-content-between">
          <div className="col-auto">
            <h1 className={`title ${Style.event_main_title} mb-0`}>{props?.data?.title}</h1>
          </div>
          <div className="col-auto">
            {props?.data?.btn_url && (
              <Link href={props?.data?.btn_url}>
                <div className="btn btn-primary my-3">{props?.data?.btn_text}</div>
              </Link>
            )}
          </div>
        </div>
        <div className={Style.event_details_row}>
          <ul className={Style.event_details_list}>
            {props?.data?.date && (
              <li>
                <Icons icon="calendar" size={17}  />
                {moment(new Date(props?.data?.date)).format("dddd, D MMMM YYYY")}
              </li>
            )}
            {props?.data?.experience && (
              <li>
                <Icons icon="briefcase" size={17} />
                {props?.data?.experience}
              </li>
            )}
            {props?.data?.time_string ? (
              <li>
                <Icons icon="clock-outline" size={17} />
                {props?.data?.time_string}
              </li>
            ) : (
              props?.data?.time && (
                <li>
                  <Icons icon="clock-outline" size={17} />
                  {/* {props?.data?.time} */}
                  {`${moment(props?.data?.time?.replace(" GST", ""), "h:mm a")
                    .subtract({ hours: 1, minutes: 30 })
                    .format("LT")} GST`}
                    
                </li>
              )
            )}
            {props?.data?.place && (
              <li>
                <Icons icon="thin-location" size={17} />
                {props?.data?.place}
              </li>
            )}
          </ul>
        </div>
        <div className={Style.event_details_body}>{parse(props?.data?.content)}</div>
       <div className="d-flex flex-wrap align-items-center gap-2">
        {props?.data?.register_btn?.btn_url && (
            <a
              href={props?.data?.register_btn?.btn_url}
              className={`btn btn-primary ${Style.register_now_btn}`}
            >
              {props?.data?.register_btn?.btn_text}
            </a>
          )}
            {props?.data?.btn_url && (
          <Link href={props?.data?.btn_url}>
            <div className="btn btn-primary">{props?.data?.btn_text}</div>
          </Link>
        )}
          <div>
          {calendar}
          </div>
       </div>
        {/* <AddToCalendarButton
              name={props?.body?.data?.title}
              startDate={date}
              startTime={startingTime}
              endTime={endingTime}
              timeZone="Asia/Dubai"
              location={props?.body?.data?.place}
              options={["Google"]}
              hideBackground
              buttonStyle="round"
            ></AddToCalendarButton> */}
        {props?.data?.commonContent && (
          <div className={Style.event_details_body_bottom}>{parse(props?.data?.commonContent)}</div>
        )}
      </div>
    </>
  );
};

export default EventsDetailItem;
