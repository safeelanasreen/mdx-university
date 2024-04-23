import React from "react";
import Style from "./AnnouncementCard.module.scss";

import Icons from "../../Layout/Icons";
import Image from "next/image";
import Assets from "../../Layout/CommonLayout/assets";
import { getImageUrl } from "../../../apis";
import Link from "next/link";

const AnnouncementCard = (props) => {
  const parse = require("html-react-parser");
  const cardsData = props?.props?.data?.length ? props?.props?.data : props?.props?.data ? [props?.props?.data] : [props?.props];
  return (
    <>
    {cardsData?.map((data,index)=>{
      return(
        <div className={Style.announcement_card} key={index}>
      <div className={Style.announcement_card_imgcol}>
        <figure className={Style.announcement_card_img}>
          <Image
            src={
              data?.img?.indexOf("://") === -1
                ? getImageUrl(data?.img ? data?.img : "")
                : data?.img
            }
            layout="fill"
            objectFit="cover"
          />
        </figure>
      </div>
      <div className={Style.announcement_card_textcol}>
        <div className={Style.announcement_card_cnt}>
          <div className={Style.announcement_card_cnt_subhaed}>
            {data?.date}
          </div>
          <h3>{data?.title}</h3>
          <div className={Style.content}>
            {data?.desc && parse(data?.desc)}
          </div>
          {data?.link && (
            <Link href={data?.link}>
              <button
                className={`btn btn-link btn-link-primary ${Style.content_readmore}`}
              >
                {data?.link_text}
                <Icons icon="arrow-top-right-long" size={11} />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
      )
    })}
    
    </>
    
  );
};

export default AnnouncementCard;
