import React from "react";
import ReviewCardStack from "../ReviewCardStack";
import Style from "./RecentReviewWidget.module.scss";

const RecentReviewWidget = () => {
  return (
    <section className={`${Style.recent_review} no_space_bottom`}>
        <div className="container">
            <h2 className="title title-sm">OUR OTHER STUDENTS SAID</h2>
        </div>
      <div className={Style.recent_review_sec}>
        <div className="container">
          <ReviewCardStack />
        </div>
      </div>
    </section>
  );
};

export default RecentReviewWidget;
