import { useWindowSize } from "../../../logic/useDimension";
import Icons from "../../Layout/Icons";
import Style from "./EventDayCard.module.scss";
import Link from "next/link";
import moment from "moment";
import trimHtml from "../../../logic/trimHtml";

const EventDayCard = (props) => {
  // props = props?.props?.data ? propprops?.props?.data : props?.prop;
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props?.props];
  const { width } = useWindowSize();
  const parse = require("html-react-parser");

  return (
    <>
      {cardsData?.map((data, index) => {
        let trim = trimHtml(data?.description, { limit: 90 });
        return (
          <Link href={data?.link} key={index}>
            <div className={`tab-event-item-wrap ${Style.tab_content_wrap}`}>
              <div className={`${Style.event_item}`}>
                {width >= 992 ? (
                  <div className={Style.event_date_card}>
                    <span className={Style.event_card_date}>{data?.date?.day}</span>
                    <span className={Style.event_card_month}>{data?.date?.month}</span>
                  </div>
                ) : (
                  <div className={Style.event_date_card_mob}>
                    <div className={Style.event_date_card}>
                      <span className={Style.event_card_date}>{data?.date?.day}</span>
                      <span className={Style.event_card_month}>{data?.date?.month}</span>
                    </div>
                    <div className={Style.event_card_month_wrap}>
                      <h3 className={Style.event_item_title}>{data?.title}</h3>
                    </div>
                  </div>
                )}

                <div className={Style.event_item_info}>
                  <div className={Style.event_item_info_dis}>
                    {width >= 992 ? (
                      <h3 className={Style.event_item_title}>{data?.title}</h3>
                    ) : (
                      <></>
                    )}

                    <div className={Style.event_item_description}>
                      {trim.html ? parse(trim.html) : ""}
                    </div>
                    <div className={Style.event_item_place}>
                      <Icons icon="thin-location" size={16} /> {data?.place}, &nbsp;
                      {moment(data?.time).format("hh:mm A")}
                    </div>
                  </div>
                  <div className={`d-flex justify-content-end ${Style.event_item_info_icon}`}>
                    <div
                      className={`arw-link arw-link-white ${Style.event_item_info_arrow_icon} ${Style.event_day_link}`}
                    >
                      <span>{width >= 992 ? "" : "Read More"}</span>
                      <Icons  className={Style.arrow_icon} icon={"arrow-top-right-long"} size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default EventDayCard;
