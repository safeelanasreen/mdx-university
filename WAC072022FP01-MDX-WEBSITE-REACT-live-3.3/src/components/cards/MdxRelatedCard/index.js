import React from "react";
import Style from "./MdxRelatedCard.module.scss";
import Image from "next/image";
import Icons from "../../Layout/Icons";
import { getImageUrl } from "../../../apis";
import Link from "next/link";

const MdxRelatedCard = ({ props }) => {
  const cardData = props?.data?.length
    ? props?.data
    : props?.data
    ? [props?.data]
    : props?.length
    ? props
    : [props];

  return (
    <>
      {cardData?.map((data, index) => {
        return (
          <div
            className={`position-relative  ${cardData.length > 1 ? "h-auto" : "h-100"} ${
              Style.card
            } d-flex align-items-end`}
            key={index}
          >
            <Link href={data?.link || ""}>
              <a className="fill-link"></a>
            </Link>
            <figure className={`position-absolute w-100 h-100 ${Style.card_figure}`}>
              <Image
                src={getImageUrl(data?.image?.url)}
                layout="fill"
                alt={data?.image?.alt}
                objectFit="cover"
              />
            </figure>
            <div className={`position-relative text-white ${Style.card_body}`}>
              <div className={Style.card_title_wrap}>
                <h3 className={Style.card_title}>{data?.title}</h3>
              </div>
              <div className={Style.card_arrow}>
                <Icons icon="arrow-right-slim" size={49} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MdxRelatedCard;
