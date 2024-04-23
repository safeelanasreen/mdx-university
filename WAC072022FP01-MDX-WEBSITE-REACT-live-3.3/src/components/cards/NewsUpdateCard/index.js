import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icons from "../../Layout/Icons";
import Style from "./NewsUpdateCard.module.scss";

import { useWindowSize } from "../../../logic/useDimension";
import { getImageUrl } from "../../../apis";

const NewsUpdateCard = (props) => {
  const { width } = useWindowSize();
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props?.props];
  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <Link href={data?.link ? data?.link : ""} key={index}>
            <div
              className={`news_cards ${Style.news_card} ${
                data?.full_width ? "" : Style.news_card_recent
              }`}
            >
              <figure className={Style.news_card_fig}>
                <Image
                  src={
                    data?.img
                      ? getImageUrl(data?.img)
                      : "/images/news/dummy-img.png"
                  }
                  alt={data?.title}
                  layout="fill"
                  objectFit="cover"
                />
              </figure>
              <div className={Style.news_card_details}>
                <div className={Style.news_card_title}>
                  <span className={Style.text}>{data?.title}</span>
                  <span className={Style.icon}>
                    <Icons icon={"arrow-top-right-long"} size={18} />
                  </span>
                </div>
                {width >= 768 ? (
                  <>
                    {data?.date ? (
                      <div className={Style.news_card_date}>
                        <span className={Style.icon}>
                          <Icons icon={"calendar"} size={19} />
                        </span>
                        <span className={Style.text}>{data?.date}</span>
                      </div>
                    ) : (
                      ""
                    )}

                    {data?.content ? (
                      <div className={Style.news_card_content}>
                        <p>{data?.content}</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
              {width < 768 ? (
                <>
                  {data?.content ? (
                    <div className={Style.news_card_content}>
                      <p>{data?.content}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {data?.date ? (
                    <div className={Style.news_card_date}>
                      <span className={Style.icon}>
                        <Icons icon={"calendar"} size={19} />
                      </span>
                      <span className={Style.text}>{data?.date}</span>
                    </div>
                  ) : (
                    ""
                  )}
                </>
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

export default NewsUpdateCard;
