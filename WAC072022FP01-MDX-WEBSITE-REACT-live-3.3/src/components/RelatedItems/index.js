import React from "react";
import EventDateCard from "../cards/EventDateCard";
import NewsUpdateCard from "../cards/NewsUpdateCard";
import Icons from "../Layout/Icons";
import Style from "./RelatedItems.module.scss";

const RelatedItems = ({ props }) => {
  // const { width } = useWindowSize();

  // children
  return (
    <>
       <div className="row">
        <div className="col-6">
          <h3 className={Style.related_events_title}>{props?.data?.title}</h3>
        </div>
        <div className={`col-6 text-end`}>
          {/* <a
            className={Style.related_events_load_more}
            href={props?.data?.link}
          >
            <span>Load More</span>{" "}
            <Icons icon="arrow-top-right-long" size="12" />
          </a> */}
        </div>
      </div>

      {props?.data?.cards?.type === "news_card" ? (
        <>
          <div className="row row-cols-md-2">
            {props?.data?.cards?.news_list?.data?.map((data, index) => {
              return (
                <div key={index} className={Style.news_card_item}>
                  <NewsUpdateCard props={data} />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="row">
            {props?.data?.cards?.result?.map((data, index) => {
              return (
                <div key={index} className="col-lg-6">
                  <EventDateCard props={data} />
                </div>
              );
            })}
          </div>
        </>
      )} 
    </>
  );
};

export default RelatedItems;
