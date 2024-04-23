import React from "react";
import Style from "./RangeCard.module.scss";

const RangeCard = (props) => {
  props = props?.props?.data ? props?.props?.data : props?.props;
  
  return (
    <>
      {props?.map((data, index) => {
        return (
          <div className={Style.range_card} key={index}>
            <div className={Style.range_card_year}>{data?.year}</div>
            <div className={Style.range_card_title}>{data?.title}</div>
            <div className={Style.range_card_location}>{data?.location}</div>
          </div>
        );
      })}
    </>
  );
};

export default RangeCard;
