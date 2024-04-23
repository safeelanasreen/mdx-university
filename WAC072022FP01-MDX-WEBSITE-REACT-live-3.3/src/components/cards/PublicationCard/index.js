import React from "react";
import Image from "next/image";
import Link from "next/link";

import { getImageUrl } from "../../../apis";

import Style from "./PublicationCard.module.scss";
const PublicationCard = (props) => {
  function isDateOneOrTwoDaysOlder(date) {
    const twoDaysInMilliseconds = 2 * 24 * 60 * 60 * 1000;
    const givenDate = new Date(date);
    givenDate.setHours(0, 0, 0, 0);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const differenceInMilliseconds = currentDate - givenDate;
    return differenceInMilliseconds <= twoDaysInMilliseconds;
  }

  const publicationDate = props?.props?.publications?.date;
  const isNew = isDateOneOrTwoDaysOlder(publicationDate);
  const parse = require("html-react-parser");
  return (
    <>
      <div className={`${Style.card} d-flex`}>
        <div className={Style.card_imgwrap}>
          <figure className={`${Style.figure} ratio mb-0`}>
            <Image
              src={
                props?.props?.image?.url
                  ? getImageUrl(props?.props?.image?.url) ||
                    "/images/news/dummy-img.png"
                  : "/images/news/dummy-img.png"
              }
              layout="fill"
              objectFit="cover"
              alt="publisher"
            />
          </figure>
        </div>
        <div className={Style.card_contentwrap}>
          <h4 className={Style.card_title}>{props?.props?.name}</h4>
          <div className={Style.content_one}>
            {props?.props?.designation?.map((item, i) => {
              return <p key={i}>{item?.role}</p>;
            })}

            <div
              className={`${Style.contact_details} d-flex flex-wrap flex-column flex-lg-row`}
            >
              <div className={Style.tel}>
                <span>{props?.props?.contact?.text} : </span>
                <a href={`tel:${props?.props?.contact?.contact_number}`}>
                  {props?.props?.contact?.contact_number}
                </a>
              </div>
              <div className={Style.email}>
                <span>{props?.props?.email?.text} : </span>
                <a href={`mailto:${props?.props?.email?.email_address}`}>
                  {props?.props?.email?.email_address}
                </a>
              </div>
            </div>
          </div>
          <div className={`${Style.content_two} d-flex  flex-wrap `}>
            <p className={Style.description}>
              {props?.props?.publications?.title ? parse(`${props?.props?.publications?.title},`) :""}
              {parse(`${props?.props?.publications?.content}`)}
            </p>
            <div className={Style.readmore}>
              <Link
                href={`${props?.props?.publications?.link?.url}?parent_id=${
                  props?.props?.publications?.link?.parent_id
                }#${
                  props?.props?.publications?.link?.anchor_id
                    ? props?.props?.publications?.link?.anchor_id
                    : props?.props?.publications?.link?.parent_id
                }`}
              >
                Read More
              </Link>
            </div>
            {isNew ? <span className={Style.new}>NEW</span> : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default PublicationCard;
