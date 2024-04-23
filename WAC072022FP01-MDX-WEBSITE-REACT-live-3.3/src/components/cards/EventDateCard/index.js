import Link from "next/link";
import Icons from "../../Layout/Icons";
import Style from "./EventDateCard.module.scss";
import Assets from "../../Layout/CommonLayout/assets";
import Image from "next/image";
import { getImageUrl } from "../../../apis";

const EventDateCard = (props) => {
  const parse = require("html-react-parser");

  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props?.props];
    
  return (
    <>
      {cardsData.map((data, index) => {
        let src =
        data?.img?.indexOf("://") === -1
          ? getImageUrl(data?.img ? data?.img : "")
          : data?.img;
        return (
          <Link href={data?.link ? data?.link : '/'} key={index}>
            <div className={`event-date-item-wrap ${Style.tab_content_wrap}`}>
              <div className={`${Style.event_item}`}>
                <div className={Style.event_item_image}>
                  {src && (
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={src}
                      alt={"course cover"}
                    />
                  )}
                  <div className={Style.event_date_card}>
                    <span className={Style.event_card_date}>
                      {data?.date?.day}
                    </span>
                    <span className={Style.event_card_month}>
                      {data?.date?.month}
                    </span>
                  </div>
                </div>
                {data?.tag ? (
                  <div className={Style.event_item_info_tags}>
                    <div className={Style.event_item_info_tag}>
                      {data?.tag}
                    </div>
                  </div>
                ) : ("")}

                <div className={Style.event_item_info}>
                  <div className={Style.event_item_info_dis}>
                    <p className={Style.event_item_description}>
                      {data?.description
                        ? parse(data?.description.replace(/(<([^>]+)>)/gi, ""))
                        : ""}
                    </p>
                    <p className={Style.event_item_place}>
                      <Icons icon="thin-location" size={16} />{" "}
                      <span>{data?.place}</span>
                    </p>
                  </div>
                  <div
                    className={`d-flex justify-content-end ${Style.event_item_info_icon}`}
                  >
                    <div
                      className={`arw-link arw-link-white ${Style.event_item_info_arrow_icon}`}
                    >
                      <Icons icon={"arrow-top-right-long"} size={13.76} />
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

export default EventDateCard;
