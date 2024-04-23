import Link from "next/link";
import { useState } from "react";
import Style from "./EventCardNew.module.scss";
import Icons from "../../Layout/Icons";
import trimHtml from "../../../logic/trimHtml";
import moment from "moment";

const EventCardNew = (props) => {
  const parse = require("html-react-parser");
  let trim = trimHtml(props?.props?.content, { limit: 90 });
  const [isReadMore, setIsReadMore] = useState(true);
  const timeStamp = props?.props?.start_date + " " + props?.props?.start_time;
  return (
    <div className={`position-relative ${Style.card}`}>
      <Link href={props?.props?.url}>
        <a className="fill-link"></a>
      </Link>
      <div
        className={`d-flex align-items-center justify-content-between ${Style.card_head}`}
      >
        <div className={`d-flex align-items-center ${Style.card_date}`}>
          <div className={Style.day}>{props?.props?.date?.day}</div>
          <div className={Style.year}>
            <span>{props?.props?.date?.month}</span>
            <span>{props?.props?.date?.year}</span>
          </div>
        </div>
        <div className={Style.card_week}>{props?.props?.date?.week}</div>
      </div>
      <div className={Style.card_body}>
        <div className={Style.card_category}>{props?.props?.category}</div>
        <h2 className={Style.card_title}>{props?.props?.title}</h2>
        <p>{trim.html ? parse(trim.html) : ""}</p>
      </div>
      <div className={`d-flex ${Style.card_footer}`}>
        <span className={`d-flex align-items-center ${Style.card_loc}`}>
          <Icons icon={"location"} size={16} />
        </span>
        <span className={Style.card_address}>
          {props?.props?.venue},
          {props?.props?.time_string
            ? props?.props?.time_string
            : `${moment(timeStamp, "yyyy-mm-dd hh:mm:ss")
                .subtract({ hours: 1, minutes: 30 })
                .format("LT")} GST`}
        </span>
        <span className={`d-flex align-items-end ${Style.card_arrow}`}>
          <Icons icon={"arrow-top-right-long"} size={18} />
        </span>
      </div>
    </div>
  );
};

export default EventCardNew;
