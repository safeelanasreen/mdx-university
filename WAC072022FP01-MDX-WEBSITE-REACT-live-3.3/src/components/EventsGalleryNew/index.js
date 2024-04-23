import React, { useRef, useState, useEffect } from "react";
import Style from "./EventGalleryNew.module.scss";

import Icons from "../Layout/Icons";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "../DropdownButton";
import Image from "next/image";
import { getFilterContent } from "../../../lib/pages";
import { getImageUrl } from "../../apis";
import useEventGalleryNew from "./useEventGalleryNew";

const EventGalleryNew = ({ props }) => {
  const {
    setsort,
    data,
    activeTab,
    totalLength,
    handleSelect,
    handleLoadMore
  }= useEventGalleryNew(props)
  
  return (
    <section
      className={`${Style.section} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? width < 992
            ? ""
            : "no_space_bottom"
          : ""
      }`}
      id={props?.data?.scrollID ? props?.data?.scrollID : "Upcoming Events"}
    >
      <div className="container">
        <h2 className="title title-sm mb-3 mb-md-3">{props?.data?.title}</h2>
        <div className={Style.filter}>
          <div className={Style.filter_categories}>
            {props?.data?.tabs.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <button
                      className={`${Style.filter_btn} ${
                        item?.title == activeTab ? Style.active : ""
                      }`}
                      onClick={() => {
                        handleSelect(item);
                      }}
                    >
                      {item?.title}
                    </button>
                  </div>
                </>
              );
            })}
          </div>
          <div className={Style.filter_sort}>
            <DropdownButton setsort={setsort} />
          </div>
        </div>
        <div className={Style.section_body}>
          {/* Expand with this div (<div className={`row ${Style.figure_stack}`}>) on loading more */}
          <div className={`row ${Style.figure_stack}`}>
            {data?.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <figure className={`ratio ${Style.figure}`}>
                      <Image
                        src={getImageUrl(item?.image?.url || "")}
                        layout="fill"
                        alt="Event Gallery"
                        objectFit="cover"
                      />
                    </figure>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {totalLength > data?.length && (
          <div className={Style.section_footer}>
            <button
              className="btn btn-outline-primary "
              onClick={() => handleLoadMore()}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventGalleryNew;
