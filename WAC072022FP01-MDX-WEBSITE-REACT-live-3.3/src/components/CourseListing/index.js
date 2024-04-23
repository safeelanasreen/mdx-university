import React from "react";
import CourseCard from "../cards/CourseCard";
import Style from "./CourseListing.module.scss";
import { ourCoursesData } from "../DummyData";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";
import Icons from "../Layout/Icons";

const CourseListing = ({ props }) => {
  const size = useWindowSize();
  return (
    <>
      <section className={Style.course_listing}>
        <div className="container">
          {size.width < 992 ? (
            <Swiper
              loop={false}
              slidesPerView={1.2}
              spaceBetween={0}
              scrollbar={{ draggable: true }}
              speed={600}
              watchSlidesProgress={true}
              modules={[FreeMode, Scrollbar]}
              breakpoints={{
                768: {
                  slidesPerView: 2.2,
                },
              }}
              className={Style.course_listing_swiper}
            >
              {props?.data?.course_category_list_page.map(
                (courseData, courseIndex) => {
                  return (
                    <SwiperSlide
                      className={Style.course_listing_item}
                      key={courseIndex}
                    >
                      <CourseCard
                        title={courseData?.category}
                        content={courseData?.description}
                        img={courseData?.category_icon_full_url}
                      />
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          ) : (
            <div className={Style.course_listing_wrap}>
              {props?.data?.course_category_list_page.map(
                (courseData, courseIndex) => {
                  return (
                    <div
                      key={courseIndex}
                      className={Style.course_listing_item}
                    >
                      <CourseCard
                        title={courseData?.category?.toUpperCase()}
                        content={courseData?.description}
                        img={courseData?.category_icon_full_url}
                        listing={true}
                      />
                    </div>
                  );
                }
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CourseListing;
