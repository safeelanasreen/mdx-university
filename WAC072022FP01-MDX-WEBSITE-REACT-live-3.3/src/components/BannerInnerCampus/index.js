import Image from "next/image";

import { useWindowSize } from "../../logic/useDimension";
import ImageDetailsCard from "../cards/ImageDetailsCard";
import ContactForm from "../ContactForm";
import CourseStrip from "../CourseStrip";
import CourseStripIcon from "../CourseStripIcon";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./BannerInnerCampus.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { getImageUrl } from "../../apis";

const BannerInnerCampus = ({ props }) => {
  const { width } = useWindowSize();
  return (
    <>
      <section
        className={`${Style.mdx_banner_inner} ${
          props?.data?.spacing?.sm ? Style.mdx_banner_inner_space_sm : ""
        }`}
      >
        <div className={Style.banner_inner_cover}>
          <Image
            layout="fill"
            objectFit="cover"
            src={getImageUrl(props?.data?.img)}
            alt={"course cover"}
          />
        </div>
        <div className={`${Style.banner_inner_content} w-100`}>
          <div className="container-fluid">
            <div className={Style.banner_inner_content_area}>
              <h5 className={Style.banner_inner_content_subtitle}>
                {props?.data?.title_caption}
              </h5>
              <h1 className={`pb-lg-2 ${Style.banner_inner_content_title}`}>
                <span className={Style.banner_inner_content_border_title}>
                  {props?.data?.title?.border_type}
                </span>{" "}
                <span>{props?.data?.title?.normal}</span>
              </h1>

              <div className={Style.banner_inner_content_cards}>
                {width >= 1200 ? (
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row gx-3">
                        {props?.data?.result?.cards?.map((data, index) => {
                          return (
                            <div className="col-sm-4 col-lg-3" key={index}>
                              <ImageDetailsCard props={data} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-100">
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
                          992: {
                            slidesPerView: 3,
                          }
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
      </section>
    </>
  );
};

export default BannerInnerCampus;
