import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { getImageUrl } from "../../../apis";
import Icons from "../../Layout/Icons";
import Style from "./ImageContentBoxCard.module.scss";

const ImageContentBoxCard = (props) => {
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props];
  const navigator = useRouter();
  const parse = require("html-react-parser");
  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <div
            className={`${Style.image_box_card} ${
              navigator.asPath == "/cclo" ? Style.box_secondary : ""
            }`}
            key={index}
          >
            <Link href={data?.link ? data?.link : "/"}>
              <a />
            </Link>
            <figure className={Style.image_box_card_image}>
              <Image
                src={
                  data?.img?.indexOf("://") === -1
                    ? getImageUrl(data?.img ? data?.img : "")
                    : data?.img
                }
                alt={data?.title}
                width={477}
                height={293}
                objectFit="cover"
              />
            </figure>
            <div className={Style.body}>
              <h4 className={Style.image_box_card_title}>
                {data?.title && parse(data?.title)}
              </h4>
              <p className={Style.image_box_card_description}>
                {/* <div className={Style.image_box_card_description}>{parse(props?.content?.slice(0,75)+"...")}</div> */}
                <div className={Style.image_box_card_description}>{props?.content && parse(props?.content)}</div>
              </p>
              <button className="btn btn-link">
                View More
                <span className="btn-link-icon">
                  <Icons icon={"arrow-top-right-long"} size={10.36} />
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ImageContentBoxCard;
