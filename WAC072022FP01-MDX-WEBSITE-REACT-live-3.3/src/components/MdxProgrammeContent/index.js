import React, { useState } from "react";
import { useWindowSize } from "../../logic/useDimension";
import Style from "./MdxProgrammeContent.module.scss";
import TabPrograme from "./MdxProgrammeContentTab";

const MdxProgrammeContent = ({ props }) => {
  const bg = props?.data?.bg;
  return (
    <section
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
      className={`${Style.course_timeline} ${bg} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      }`}
    >
      <div
        className={props?.data?.full_width ? "container-fluid" : "container"}
      >
        {props?.data?.sub_title ? (
          <div className={props?.data?.no_spacing?.x ? "container-fluid" : ""}>
            <h4 className="section-title_sub">{props?.data?.sub_title}</h4>
          </div>
        ) : (
          ""
        )}
        {props?.data?.main_title && (
          <h2 className="title section-title mb-3">
            {props?.data?.main_title}
          </h2>
        )}
        <TabPrograme props={props} />
      </div>
    </section>
  );
};
export default MdxProgrammeContent;
