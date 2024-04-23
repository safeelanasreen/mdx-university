// import React from "react";

import Style from "./TemplateOverviewWidget.module.scss";

import Icons from "../Layout/Icons";
import { useState } from "react";
import ContentTypeNormal from "./ContentTypeNormal";
import ContentTypeList from "./ContentTypeList";
import Link from "next/link";

const TemplateOverviewWidget = ({ props }) => {
  const parse = require("html-react-parser");
  const [isReadMore, setIsReadMore] = useState(true);

  function readmoreclick(e) {
    e.preventDefault();
    setIsReadMore(isReadMore !== true);
  }
  return (
    <section
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
      className={`${Style.template_overview_widget} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      }`}
    >
      <div className="container mdx-table">
        <div
          className={`${Style.template_overview_widget_header} 
            ${isReadMore ? Style.template_overview_widget_header_show_less : ""}
          `}
        >
          {props?.data?.alert_info && (
            <div className="alert alert-info mb-2">
              {parse(props?.data?.alert_info)}
            </div>
          )}

          <div className={Style.w_lg_75}>
            <h4 className="title title_sub">{props?.data?.sub_title}</h4>
            <h2 className="title title-sm">{props?.data?.title}</h2>
          </div>
          <div className={Style.template_overview_widget_content}>
            {parse(props?.data?.description)}
          </div>
          <button
            className={`btn btn-link ${Style.read_more_btn}`}
            onClick={readmoreclick}
          >
            {" "}
            {isReadMore ? <>Read More</> : <>Show Less</>}{" "}
            <Icons icon="arrow-top-right-long" size={11} />
          </button>
          {props?.data?.button_label && (
            <Link href={props?.data?.button_link}>
              <button className="btn btn-primary">
                {props?.data?.button_label}
              </button>
            </Link>
          )}
        </div>
        {props?.data?.result ? (
          <div className={Style.template_overview_widget_body}>
            {props?.data?.result?.map((data, index) => {
              return (
                <div key={index}>
                  {data?.type == "list" ? (
                    <ContentTypeList key={index} props={data} />
                  ) : (
                    <>
                      {data?.data?.map((data, index) => {
                        return <ContentTypeNormal key={index} props={data} />;
                      })}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default TemplateOverviewWidget;
