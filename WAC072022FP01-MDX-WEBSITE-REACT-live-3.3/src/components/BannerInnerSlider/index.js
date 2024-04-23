import Image from "next/image";
import { getImageUrl } from "../../apis";
import { useWindowSize } from "../../logic/useDimension";
import ContactForm from "../ContactForm";
import CourseStrip from "../CourseStrip";
import CourseStripIcon from "../CourseStripIcon";
import Style from "./BannerInnerSlider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Assets from "../Layout/CommonLayout/assets";

const BannerInnerSlider = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");
  return (
    <>
      <section className={Style.mdx_banner_inner}>
        <Swiper
          pagination={{ el: ".swiper-paginate", clickable: true }}
          modules={[FreeMode, Pagination]}
        >
          {props?.data?.slider?.map((datas, key) => {
            return (
              <SwiperSlide key={key}>
                <div className={Style.banner_inner_cover}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={datas?.img ? getImageUrl(datas?.img) : Assets.news_banner_image}
                    // src={props?.data?.img}
                    alt={datas?.title}
                  />
                </div>
                <div
                  className={`${Style.banner_inner_content} ${
                    datas?.no_spacing?.bottom ? Style.no_space_bottom : ""
                  } ${datas?.spacing?.sm ? Style.banner_inner_content_space_sm : ""} ${
                    datas?.title_container == true ? "w-100" : " "
                  }`}
                >
                  <div
                    className={`${
                      datas?.title_container == true ? "container" : "container-fluid"
                    }`}
                  >
                    <div className="row align-items-center">
                      <div
                        className={`col-xl-${datas?.contact_form === false ? "12" : "7"} ${
                          datas?.center_align === true ? "text-center" : " "
                        }`}
                      >
                        <h5 className="h6">{datas?.sub_title}</h5>
                        <h1 className="h1">{parse(datas?.title)}</h1>
                        {datas?.caption ? <p>{datas?.caption}</p> : ""}
                        <div className={Style.btn_wrap}>
                          {datas?.buttons?.map((data, index) => {
                            return (
                              <a href={datas.link} className={`btn btn-${data.color}`} key={index}>
                                {data.label}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                      {width >= 1200 && props?.data?.contact_form ? (
                        <div className={"col-xl-5 my-4 my-xl-0"}>
                          <div className={Style.mdx_banner_inner_formsec}>
                            <ContactForm />
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className={Style.pagination_wrap}>
            <div className="container-fluid">
              <div className="swiper-paginate"></div>
            </div>
          </div>
        </Swiper>
      </section>
      {width < 1200 && props?.data?.course_page && <CourseStrip />}
      {width < 1200 && props?.data?.course_icon_strip && (
        <CourseStripIcon props={props?.data?.course_icon_strip} />
      )}
      {width < 1200 && props?.data?.contact_form ? (
        <div className={Style.mdx_banner_inner_formsec}>
          <ContactForm />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BannerInnerSlider;
