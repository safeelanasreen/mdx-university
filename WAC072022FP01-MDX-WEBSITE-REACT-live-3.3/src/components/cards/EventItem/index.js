import Link from "next/link";
import Icons from "../../Layout/Icons";
import Style from "./EventItem.module.scss";
import moment from "moment";

const EventItem = (props) => {
  const parse = require("html-react-parser");

  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props];

  return (
    <>
      {cardsData?.map((data, index) => {
        // const timeCalc =
        // data?.start_date + " " + data?.start_time;
        // const time = timeCalc ? timeCalc : data?.time;
        return (
          <Link href={data?.link || ""} key={index}>
            <div
              className={`${Style.event_item} event_item`}
              style={{ "--background": data?.background }}
            >
              <div className={Style.event_item_info}>
                <div className="d-flex justify-content-between align-items-center">
                  <p className={Style.event_item_date}>
                    {data?.timezone
                      ? data?.timezone
                      : `${moment(data?.time, "yyyy-mm-dd hh:mm:ss")
                          .subtract({ hours: 1, minutes: 30 })
                          .format("LT")} GST`}
                  </p>
                  <div className="arw-link arw-link-white">
                    <Icons icon={"arrow-top-right-long"} size={13.76} />
                  </div>
                </div>
                <h3 className={Style.event_item_title}>{data?.title} </h3>


                
                <div className={Style.event_item_description}>
                  <div>{parse(data?.description.slice(0,200)+"...")}</div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default EventItem;
