import React from "react";
import NewsUpdateCard from "../cards/NewsUpdateCard";
import Style from "./NewsUpdateCardStack.module.scss";

const NewsUpdateCardStack = (props) => {
  props = props?.props ? props?.props : props?.props;
  const container = props?.props?.data?.container;
  const no_spacing = false;
  return (
    <div className={Style.news_cardstack}>
      <div
        className={`${container ? "container" : "container-fluid"} ${
          no_spacing?.x ? "px-0" : ""
        }`}
      >
        <div className={Style.news_cardstack_box}>
          <div className={Style.news_cardstack_box_left}>
            <NewsUpdateCard props={props?.data?.latest_news?.data} />
          </div>
          <div className={Style.news_cardstack_box_right}>
            {props?.data?.recent_news?.data?.map((data, key) => {
              return <NewsUpdateCard props={data} key={key} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsUpdateCardStack;
