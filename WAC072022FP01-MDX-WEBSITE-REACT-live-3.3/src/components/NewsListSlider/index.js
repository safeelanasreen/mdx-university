import React from "react";
import Link from "next/link";
import Style from "./NewsListSlider.module.scss";

import { NewsPageData } from "../DummyData";

import NewsUpdateCardStack from "../NewsUpdateCardStack";
import Icons from "../Layout/Icons";

import { useWindowSize } from "../../logic/useDimension";

const NewsListSlider = ({ props }) => {
  const container = true;
  const no_spacing = false;

  const { width } = useWindowSize();

  return (
    <section className={Style.news_list_slider}>
      <div
        className={`${container ? "container" : "container-fluid"} ${
          no_spacing?.x ? "px-0" : ""
        }`}
      >
        <div className={Style.title_sec}>
          <h2 className="title title-sm">{props?.data?.title}</h2>
          {/* {width >= 768 ? (
            <Link  href="/">
              <span className="btn-link btn-link-primary">
                View More{" "}
                <span className="btn-link-icon">
                  <Icons icon={"arrow-top-right-long"} size={13.76} />
                </span>
              </span>
            </Link>
          ) : (
            ""
          )} */}
        </div>
        <NewsUpdateCardStack props={props} />
      </div>
    </section>
  );
};

export default NewsListSlider;
