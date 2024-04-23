import { useState, useEffect } from "react";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./InsightLinksSlider.module.scss";
import Icons from "../Layout/Icons";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import VideoEventCard from "../cards/VideoEventCard";
import VideoEventCardSlider from "../VideoEventCardSlider";
import ListItemLink from "../ListItemLink";

const InsightLinksSlider = ({ props }) => {
  return (
    <section className={Style.insight_link_sec}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="itle title_sub">{props?.data?.title_caption}</h2>
            <h2 className="title title-sm">{props?.data?.title}</h2>
          </div>
          <div className="col-lg-5">
            <ListItemLink props={props?.data?.result?.links} />
          </div>
          <div className="col-lg-7">
            <VideoEventCardSlider props={props?.data?.slides} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightLinksSlider;
