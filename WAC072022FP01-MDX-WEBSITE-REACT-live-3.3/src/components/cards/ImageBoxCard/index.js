import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icons from "../../Layout/Icons";
import Style from "./ImageBoxCard.module.scss";
import { getImageUrl } from "../../../apis";

const ImageBoxCard = (props) => {
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props];
  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <div className={Style.image_box_card} key={index}>
            <Link href={data?.link ? data?.link : "/"}>
              <a />
            </Link>
            <figure className={Style.image_box_card_image}>
              <Image
                 src={
                  data?.img?.indexOf("://") === -1
                    ? getImageUrl(data?.img)
                    : data?.img
                }
                alt={data?.title}
                width={477}
                height={293}
                objectFit="cover"
              />
            </figure>
            <h4 className={Style.image_box_card_title}>{data?.title}</h4>
            <p className={Style.image_box_card_description}>{data?.content}</p>
            <button className="btn btn-link">
              View More
              <span className="btn-link-icon">
                <Icons icon={"arrow-top-right-long"} size={10.36} />
              </span>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ImageBoxCard;
