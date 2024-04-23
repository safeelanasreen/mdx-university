import Image from "next/image";
import Style from "./AccreditationCard.module.scss";
import Link from "next/link";
import { getImageUrl } from "../../../apis";
import { useState } from "react";

const AccreditationCard = ({ props }) => {
  const cardData = props?.data?.length
    ? props?.data
    : props?.data
    ? [props?.data]
    : props?.length
    ? props
    : [props];
  const parse = require("html-react-parser");

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      {cardData?.map((data, index) => {
        return (
          <div
            className={`${Style.card} ${cardData?.length > 1 ? "h-auto" : "h-100"} `}
            key={index}
          >
            <div className={Style.card_fig}>
              <figure className="ratio mb-0">
                <Image
                  src={getImageUrl(data?.img?.url)}
                  layout="fill"
                  objectFit="contain"
                  objectPosition={"left"}
                  alt={data?.img?.alt}
                />
              </figure>
            </div>
            <div className={Style.card_head}>
              <h3 className={`${Style.card_title}`}>{data?.title}</h3>
            </div>
            <div className={Style.card_body}>
              {parse(
                data?.content?.length > 300 && isReadMore
                  ? `${data?.content?.slice(0, 250)}...`
                  : data?.content
              )}
            </div>
            {data?.content?.length > 300 && (
              <div className={Style.card_footer}>
                {data?.link?.url ? (
                  <Link href={data?.link?.url}>READ MORE</Link>
                ) : (
                  <a className="a" onClick={toggleReadMore}>
                    {isReadMore ? "READ MORE" : " READ LESS"}
                  </a>
                )}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default AccreditationCard;
