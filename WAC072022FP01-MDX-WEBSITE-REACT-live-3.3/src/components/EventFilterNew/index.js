import React, { useRef, useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
// import 'swiper/css/pagination';

// import required modules
import { Grid, Navigation } from "swiper";

import Dropdown from "react-bootstrap/Dropdown";
import Style from "./EventFilterNew.module.scss";
import EventCardNew from "../cards/EventCardNew";
import Icons from "../Layout/Icons";
import EventDateCardNew from "../cards/EventDateCardNew";

import Pagination from "react-responsive-pagination";
import { getFilterContent } from "../../../lib/pages";
import useEventFilterNew from "./useEventFilterNew";

const EventFilterNew = ({ props }) => {
  const {
    selected,
    setSelected,
    events,
    count,
    page,
    setPage,
    handleSelect,
    active,setActiveTab
  } = useEventFilterNew(props);


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
        <div
          className={`d-flex flex-wrap align-items-center justify-content-between ${Style.section_head}`}
        >
          <h2 className="title title-sm mb-0">{props?.data?.title}</h2>
          <div className={Style.section_filter}>
            <Dropdown className={Style.dropdown}>
              <Dropdown.Toggle
                variant={"filter"}
                id="filter-button"
                className={`${Style.filter_btn} d-flex align-items-center justify-content-between`}
              >
                {selected}
              </Dropdown.Toggle>
              <Dropdown.Menu className={Style.dropdown_result}>
                {props?.data?.filter?.result.map((item,i) => {
                  return (
                    
                      <Dropdown.Item className={`${item?.value == active ? "active" : ""} ${Style.dropdown_item}`}
                        key={item?.value}
                        onClick={() => {
                          handleSelect(item?.value);
                          setSelected(item?.label);
                          setActiveTab(item?.value)
                        }}
                      >
                        {item?.label} ({item?.count})
                      </Dropdown.Item>
                  
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className={Style.section_body}>
          <div
            className={`row row-cols-1 row-cols-md-2 row-cols-lg-3 ${Style.row}`}
          >
            { events.length > 0 ? events?.map((event, key) => {
              return (
                <div key={key}>
                  <EventDateCardNew key={key} props={event} />
                </div>
              );
            }):(<div className={Style.nodata}>No results found</div>)}
            <div></div>
          </div>
          <div className={`w-100 text-center ${Style.pagination}`}>
            {/* <CustomPagination
                  pages={Math.ceil(props?.data?.events?.result?.length / 6)}
                  setPage={setPage}
                  page={page}
                /> */}
            {count > 6 && (
              <>
                <Pagination
                  current={page}
                  total={Math.ceil(count / 6)}
                  onPageChange={setPage}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventFilterNew;
