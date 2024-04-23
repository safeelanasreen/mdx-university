import { useWindowSize } from "../../logic/useDimension";
import Style from "./CheckoutFacilitiesWidget.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import ImageDetailsCard from "../cards/ImageDetailsCard";

const CheckoutFacilitiesWidget = ({ props }) => {
  const { width } = useWindowSize();
  return (
    <>
      <section className={Style.checkout_facilities}>
        <div className="container-fluid">

          <div
            className={`row gx-3 ${width < 1200 ? "" : "flex-row-reverse"}`}
          >
            <div className={`col-xl-3 ${Style.facilities_details_col}`}>
              {props?.data?.our_highlights?.cards?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={Style.facilities_details_dataitem}
                  >
                    <span className={Style.facilities_details_number}>
                      {data.number}
                    </span>
                    <h4 className={Style.facilities_details_title}>
                      {data.title}{" "}
                    </h4>
                    <p className={Style.facilities_details_dis}>
                      {data.discription}
                    </p>
                  </div>
                );
              })}
            </div>

            <div
              className={`col-xl-9 pe-lg-4 ${Style.checkout_facilities_content} `}
            >
              <div className="row">
                <div className="col-md-6">
                  <h2 className="itle title_sub">
                    {props?.data?.title_caption}
                  </h2>
                  <h2 className="title title-sm">{props?.data?.title}</h2>
                </div>
                <div className="col-md-6">
                  <p>{props?.data?.description}</p>
                  <a className="btn btn-primary" href={props?.data?.link}>
                    View Facilities
                  </a>
                </div>
                <div className="col-12">
                  {width >= 992 ? (
                    <div className="row gx-3">
                      {props?.data?.result?.cards?.map((data, index) => {
                        return (
                          <div className="col-sm-4" key={index}>
                            <ImageDetailsCard props={data} />
                          </div>
                        );
                      })}
                      
                    </div>
                  ) : (
                    <>
                      <div
                        className={`w-100 ${Style.chechout_facilities_swiper_wrap}`}
                      >
                        <Swiper
                          loop={false}
                          slidesPerView={1.1}
                          spaceBetween={0}
                          scrollbar={{ draggable: true }}
                          speed={600}
                          watchSlidesProgress={true}
                          modules={[FreeMode, Scrollbar]}
                          breakpoints={{
                            576: {
                              slidesPerView: 1.5,
                            },
                            768: {
                              slidesPerView: 2,
                            },
                          }}
                          className={Style.mdx_related_course_swiper}
                        >
                          {props?.data?.result?.cards?.map((data, index) => {
                            return (
                              <SwiperSlide key={index}>
                                <ImageDetailsCard props={data} />
                              </SwiperSlide>
                            );
                          })}
                        </Swiper>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutFacilitiesWidget;
