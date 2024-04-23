import React from "react";

import Style from "./ReviewWidget.module.scss";
import ReviewCardStack from "../ReviewCardStack";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";

const ReviewWidget = ({ props }) => {
  return (
    <section
      className={Style.review_widget}
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
    >
      <div className={Style.review_widget_bg}>
        <Image src={Assets.reviews_bg_image} layout="fill" objectFit="cover" alt="Review" />
      </div>
      <div className="container">
        <div className={`text-md-center text-white ${Style.review_widget_titles}`}>
          <h4 className="title_sub">{props?.data?.title}</h4>
          <h2 className="title">
            {props?.data?.sub_title != "" ? props?.data?.sub_title : "What students are saying"}
          </h2>
        </div>
        <ReviewCardStack props={props?.data?.cards} />
      </div>
    </section>
  );
};

export default ReviewWidget;
