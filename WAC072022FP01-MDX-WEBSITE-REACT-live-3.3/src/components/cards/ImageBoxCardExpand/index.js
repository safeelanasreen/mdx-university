import Image from "next/image";

import { useRouter } from "next/router";
import React, { useState } from "react";
import { getImageUrl } from "../../../apis";
import Style from "./ImageBoxCardExpand.module.scss";

const ImageBoxCardExpand = (props) => {
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props];

  const navigator = useRouter();
  const parse = require("html-react-parser");
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <div
            className={`${Style.image_box_card} ${
              navigator.asPath == "/cclo" ? Style.box_secondary : ""
            } ${cardsData?.length > 1 ? "h-auto" : ""}`}
            key={index}
          >
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
              <div
                className={`${Style.image_box_card_description} ${
                  isReadMore ? Style.read_more : Style.read_less
                }`}
              >
                {data?.content && parse(data?.content)}
              </div>
              {data?.content.length > 200 && (
                <button className="btn btn-link" onClick={toggleReadMore}>
                  {isReadMore ? " Read less" : "Read more"}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ImageBoxCardExpand;
