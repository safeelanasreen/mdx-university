import React from "react";
import CardStack from "../CardStack";
import Style from "./AlumniSupport.module.scss";
import { statCardData } from "../DummyData";
import Icons from "../Layout/Icons";

const AlumniSupport = ({ props }) => {
  return (
    <div className={Style.alumni_support}>
      <div className="container">
        <div className={Style.alumni_support_row}>
          <div className={Style.alumni_support_head}>
            <div className={Style.alumni_support_head_wrap}>
              <h2 className={`${Style.alumni_support_title} title-white`}>
                {props?.data?.title}
              </h2>
              <p className={`${Style.alumni_support_description} title-white`}>
                {props?.data?.sub_title}
              </p>
              <button className="btn btn-link">
                Read More
                <span className="btn-link-icon">
                  <Icons icon={"arrow-top-right-long"} size={10.36} />
                </span>
              </button>
            </div>
          </div>
          <CardStack props={props} />
        </div>
      </div>
    </div>
  );
};

export default AlumniSupport;
