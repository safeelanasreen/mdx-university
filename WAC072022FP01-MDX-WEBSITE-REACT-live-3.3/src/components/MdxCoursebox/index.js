/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from "react";
import Image from "next/image";
import { getImageUrl } from "../../apis";
import Icons from "../Layout/Icons";
import Style from "./MdxCoursebox.module.scss";
import Box from "./MdxCourseInnerBox";
import TabPills from "./TabPills";

const MdxCoursebox = ({ props }) => {
  return (
    <section
      id={props?.data?.scrollID || ""}
      className={`${Style.section} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      } ${props?.data?.no_spacing?.top && "pt-0"} ${props?.data?.no_spacing?.bottom && "pb-0"} ${
        props?.data?.no_spacing?.left && "ps-0"
      }  ${props?.data?.no_spacing?.right && "pe-0"}`}
      style={{
        "--background-color": props?.data?.background ? props?.data?.background : "#EAEAEA",
        "--text-color": props?.data?.text_color ? props?.data?.text_color : "var(--text-color)",
      }}
    >
      <div
        className={`${props?.data?.container ? "container-fluid" : "container"} ${
          props?.data?.no_spacing?.all ? "px-0 py-0" : props?.data?.no_spacing?.x ? "px-0" : ""
        }`}
      >
        {props?.data?.sub_title || props?.data?.main_title ? (
          <div className={props?.data?.no_spacing?.x ? "container-fluid" : ""}>
            <h4 className="title_sub">{props?.data?.sub_title || props?.data?.main_title}</h4>
          </div>
        ) : (
          ""
        )}
        {props?.data?.title ? (
          <div className={props?.data?.no_spacing?.x ? "container-fluid" : ""}>
            <h2 className="title title-sm mb-3">{props?.data?.title}</h2>
          </div>
        ) : (
          ""
        )}

        <div className={Style.tabs}>
          {props?.data?.tab_item?.length > 0 ? (
            <div className={`${Style.tabs_pills} ${Style.tabs_pills_fold}`}>
              <TabPills props={props} />
            </div>
          ) : (
            ""
          )}
          <div className={Style.tabs_results}>
            {props?.data?.tab_result?.map((data, index) => {
              return <Box props={data} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MdxCoursebox;
