import Style from "./PastEvents.module.scss";

import React, { useState } from "react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { useWindowSize } from "../../logic/useDimension";
import EventDateCard from "../cards/EventDateCard";
import SelectDropdown from "../SelectDropdown";
import Pagination from "react-responsive-pagination";

const PastEvents = ({ props }) => {
  const [page, setPage] = useState(0);
  const [loadMore, setLoadMore] = useState(3);
  const { width } = useWindowSize();

  return (
    <section className={Style.upcoming_events_slider}>
      <div className={`container-fluid ${Style.upcoming_events_container}`}>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="title title-sm">{props?.data?.title}</h2>
          </div>
          <div className="col-lg-6 my-auto">
            <p className="my-2"></p>
          </div>
          <div
            className={
              props?.data?.filter?.fullwiidth_filter === true
                ? "col-lg-12 filter-align-left"
                : "col-lg-6"
            }
          >
            <div className={Style.event_day_selector_wrap}>
              {width >= 992 ? (
                <>
                  {props?.data?.filter?.data?.map((data, index) => {
                    if (data?.title !== "Year")
                      return (
                        <div key={index} className={Style.select_dropdown_wrap}>
                          {/* <SelectDropdown
                            key={index}
                            label={data?.title}
                            options={data?.options}
                          /> */}
                        </div>
                      );
                  })}
                </>
              ) : (
                <>
                  {/* <Swiper
                    slidesPerView={"auto"}
                    scrollbar={{
                      hide: true,
                    }}
                    slideToClickedSlide={true}
                    modules={[Scrollbar]}
                    className={Style.event_day_selector_wrap}
                    spaceBetween={13}
                  >
                    {props?.data?.filter?.data?.map((data, index) => {
                      if (data?.title !== "Year")
                        return (
                          <SwiperSlide key={index}>
                            <div className={Style.select_dropdown_wrap}>
                              <SelectDropdown
                                key={index}
                                label={data?.title}
                                options={data?.options}
                              />
                            </div>
                          </SwiperSlide>
                        );
                    })}
                  </Swiper> */}
                </>
              )}
            </div>
          </div>
        </div>
        <div className={`row ${Style.event_date_listing_wrap}`}>
          {width >= 768 ? (
            <>
              {props?.data?.events?.result
                ?.slice(page * 6, page * 6 + 6)
                ?.map((data, index) => {
                  return (
                    <div key={index} className="col-xl-4 col-md-6">
                      <EventDateCard props={data} />
                    </div>
                  );
                })}
              <div className={`w-100 text-center ${Style.pagination_wrap}`}>
                {/* <CustomPagination
                  pages={Math.ceil(props?.data?.events?.result?.length / 6)}
                  setPage={setPage}
                  page={page}
                /> */}
                <Pagination
                  current={page}
                  total={Math.ceil(props?.data?.events?.result?.length / 6)}
                  onPageChange={setPage}
                />
              </div>
            </>
          ) : (
            <>
              {props?.data?.events?.result
                ?.slice(0, loadMore)
                ?.map((data, index) => {
                  return (
                    <div key={index} className="col-xl-4 col-md-6">
                      <EventDateCard props={data} />
                    </div>
                  );
                })}
              {/* {loadMore < props?.data?.events?.result &&  */}
              <div className="col-12 mt-3 pt-3">
                <button
                  className={`btn btn-primary w-100 ${Style.load_more_btn}`}
                  onClick={() => {
                    setLoadMore(loadMore + 3);
                  }}
                >
                  Load More
                </button>
              </div>
              {/* } */}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
