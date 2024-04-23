import React from "react";
import LinkedinCard from "../cards/LinkedinCard";
import Style from "./LinkedinRelatedItems.module.scss";

const LinkedinRelatedItems = ({ props }) => {
  return (
    <>
      <div className="row">
        <div className="col-9 col-sm-12 col-lg-6 col-xl-4">
          <h3 className={`title ${Style.related_events_title}`}>{props?.data?.title}</h3>
        </div>
      </div>

      <div className="row">
        {props?.data?.cards?.map((data, index) => {
          return (
            <div key={index} className="col-lg-6 col-xl-4">
              <LinkedinCard props={data} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LinkedinRelatedItems;
