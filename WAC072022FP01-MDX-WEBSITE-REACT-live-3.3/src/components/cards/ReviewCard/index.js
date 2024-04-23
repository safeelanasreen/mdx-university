import React from "react";
import Image from "next/image";

import Style from "./ReviewCard.module.scss";
import Assets from "../../Layout/CommonLayout/assets";
import { useWindowSize } from "../../../logic/useDimension";
import Link from "next/link";
import { getImageUrl } from "../../../apis";

const ReviewCard = (props) => {
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props?.props];
    
  const { width } = useWindowSize();
  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <Link href={"/"} key={index}>
            <div className={`${Style.review_card} ${cardsData?.length > 1 ? "h-auto" : ""}`}>
              <div className={Style.review_card_img}>
                <figure>
                  {data?.img && (
                    <Image
                    src={
                      data?.img?.indexOf("://") === -1
                        ? getImageUrl(data?.img)
                        : data?.img
                    }
                      layout="fill"
                      objectFit="cover"
                      alt={"Author"}
                    />
                  )}
                </figure>
              </div>
              <div className={Style.review_card_details}>
                <div className={Style.review_card_details_cnt}>
                  <div
                    dangerouslySetInnerHTML={{ __html: `${data?.desc}` }}
                  ></div>
                </div>
                {width >= 768 ? (
                  <div className={Style.review_card_details_name_desig}>
                    <div className={Style.name}>{data?.name}</div>
                    <div className={Style.designation}>{data?.designation}</div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {width < 768 ? (
                <div className={Style.review_card_details_name_desig}>
                  <div className={Style.name}>{data?.name}</div>
                  <div className={Style.designation}>{data?.designation}</div>
                </div>
              ) : (
                ""
              )}
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ReviewCard;
