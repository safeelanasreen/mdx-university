import React, { useState } from "react";
import AnnouncementCard from "../cards/AnnouncementCard";
import Style from "./AnnouncementsWidget.module.scss";

const AnnouncementsWidget = (props) => {
  props = props?.props?.data ? props?.props?.data : props?.props;
  const [load, setLoad] = useState(3);
  return (
    <section id="Past Announcements" className={Style.announcement}>
      <div className="container-fluid">
        <h2 className="title title-sm">{props?.title}</h2>
      </div>
      <div className="container-fluid">
        {props?.cards?.slice(0, load)?.map((card, index) => (
          <AnnouncementCard props={card} key={index} />
        ))}
        <div className={`${Style.load_more} text-start text-md-center`}>
          {props?.cards?.length > load && (
            <button
              onClick={() => setLoad((state) => state + 3)}
              className={`btn btn-primary ${Style.load_more_btn}`}
            >
              {props?.button_text}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsWidget;
