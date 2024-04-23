import Link from "next/link";
import Icons from "../../Layout/Icons";
import Style from "./EventCard.module.scss";
import Assets from "../../Layout/CommonLayout/assets";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { getImageUrl } from "../../../apis";

const EventCard = (props) => {
  const title = props?.props?.data?.title ? props?.props?.data?.title : props?.title
  const description = props?.props?.data?.description ? props?.props?.data?.description : props?.description
  const time = props?.props?.data?.time ? props?.props?.data?.time : props?.time
  const image = props?.props?.data?.image ? props?.props?.data?.image : props?.image
  const link = props?.props?.data?.link ? props?.props?.data?.link : props?.link

  const cardsData = props?.props?.data?.length ? props?.props?.data : props?.props?.data ? [props?.props?.data] : [props]
  const parse = require("html-react-parser");

  const router = useRouter();

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
    {cardsData?.map((data,index)=>{
      return(
        <div key={index}>
        {data?.link ? (
          <Link href={data?.link || ""}>
            <div className={Style.tab_content_wrap}>
              <div className={` event_item event_item`}>
                {data?.image && data?.image !== "" && (
                  <div className={Style.event_item_image}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={data?.image?.indexOf("://") === -1
                        ? getImageUrl(
                            data?.image ? data?.image : ""
                          )
                        : data?.image}
                      alt={data?.title}
                    />
                  </div>
                )}
                <div className={Style.event_item_info}>
                  <div className={Style.event_item_info_dis}>
                    <div
                      className={`${
                        router.asPath !== "/cim-accredited" ||
                        (router.asPath !== "/september2022" &&
                          Style.event_item_description)
                      }`}
                    ></div>
                    <div className="admin-content-area">
                      {router.asPath == "/research/sprl"
                      ? parse(
                          isReadMore
                            ? `${data?.description?.slice(0, 300)}...`
                            : data?.description
                        )
                      : data?.description && parse(data?.description)}</div>
                    
  
                    {!isReadMore && (
                      <p className={Style.event_item_date}>{data?.time}</p>
                    )}
                    {router.asPath == "/research/sprl" && (
                      <span onClick={toggleReadMore}>
                        {data?.description?.length > 400 && (
                          <a className="btn btn-link mt-3">
                            {isReadMore ? "Read More" : " Read less"}
                          </a>
                        )}
                      </span>
                    )}
                  </div>
                  <div
                    className={`d-flex justify-content-end ${Style.event_item_info_icon}`}
                  >
                    <div className="arw-link arw-link-white ">
                      {data?.link !== "" && (
                        <Icons icon={"arrow-top-right-long"} size={13.76} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div className={Style.tab_content_wrap}>
            <div className={`${Style.event_item} event_item`}>
              {data?.image && data?.image !== "" && (
                <div className={Style.event_item_image}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={data?.image?.indexOf("://") === -1
                        ? getImageUrl(
                            data?.image ? data?.image : ""
                          )
                        : data?.image}
                    alt={data?.title}
                  />
                </div>
              )}
              <div className={Style.event_item_info}>
                <div className={Style.event_item_info_dis}>
                  <div
                    className={`${
                      router.asPath !== "/cim-accredited" ||
                      (router.asPath !== "/september2022" &&
                        Style.event_item_description)
                    }`}
                  ></div>
                  <div className="admin-content-area">
                  {router.asPath == "/research/sprl"
                    ? parse(
                        isReadMore
                          ? `${data?.description?.slice(0, 300)}...`
                          : data?.description
                      )
                    : data?.description && parse(data?.description)}
                  </div>
  
                  {!isReadMore && <p className={Style.event_item_date}>{time}</p>}
                  {router.asPath == "/research/sprl" && (
                    <span onClick={toggleReadMore}>
                      {data?.description?.length > 400 && (
                        <a className="btn btn-link mt-3">
                          {isReadMore ? "Read More" : " Read less"}
                        </a>
                      )}
                    </span>
                  )}
                </div>
                <div
                  className={`d-flex justify-content-end ${Style.event_item_info_icon}`}
                >
                  <div className="arw-link arw-link-white ">
                    {data?.link !== "" && (
                      <Icons icon={"arrow-top-right-long"} size={13.76} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      )
    })}
    </>
  );
};

export default EventCard;
