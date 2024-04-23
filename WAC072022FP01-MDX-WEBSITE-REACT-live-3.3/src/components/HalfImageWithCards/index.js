import { useWindowSize } from "../../logic/useDimension";
import Style from "./HalfImageWithCards.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import ImageDetailsCard from "../cards/ImageDetailsCard";
import Icons from "../Layout/Icons";
import { getImageUrl } from "../../apis";
import Link from "next/link";

const HalfImageWithCards = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");

  return (
    <section className={Style.health_safty_sec}>
      {/* <div className="container-fluid"> */}
        <div className="row">
          <div className="col-lg-4 col-xl-4  d-none d-lg-block position-relative" style={{zIndex: 10}}>
            <div className={Style.health_safety_haf_img_wrap}>
              <div className={Style.health_safety_haf_img_item_wrap}>
                <figure className={"mb-0"}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={getImageUrl(props?.data?.img)}
                  alt={"course cover"}
                />
                </figure>
              </div>
              <div className={Style.health_safety_haf_link_wrap}>
                <h2 className="title title-sm mt-0">{props?.data?.link_caption}</h2>
                {props?.data?.link && (
                  <a
                    className={Style.health_safety_haf_link_item}
                    href={props?.data?.link || " "}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Apply Now <Icons icon="arrow-top-right-long" size={12} />
                  </a>
                )}
                <div className="mt-2">
                  {props?.data?.link_text && parse(props?.data?.link_text)}
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-8 col-xl-8 ${Style.health_safety_haf_col}`}>
            <div className={Style.health_safety_content}>
              <div className="row">
              <div className="col-md-12">
                <h4 className="title title_sub">{props?.data?.title_caption}</h4>
                <h2 className="title title-sm">{props?.data?.title}</h2>
              </div>
              <div className="col-12">
                {width >= 992 ? (
                  <div className="row gx-4">
                    {props?.data?.result?.cards.map((data, index) => {
                      return (
                        <div className="col-sm-4" key={index}>
                          <ImageDetailsCard props={data} />
                        </div>
                      );
                    })}
                  </div>
                ) : props?.data?.result?.cards?.length > 2 ? (
                  <>
                  <div className={Style.health_safety_haf_img_wrap} style={{height:'auto',minHeight:'550px'}}>
                    {/* <div className={Style.health_safety_haf_img_item_wrap} style={{paddingBottom: '72%'}}> */}
                      <div className={Style.health_safety_haf_img_item_wrap} >
                      <figure className="mb-0">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src={getImageUrl(props?.data?.img)}
                        alt={"course cover"}
                      />
                      </figure>
                    </div>
                    <div className={Style.health_safety_haf_link_wrap}>
                      <h2 className="title title-sm mt-0">{props?.data?.link_caption}</h2>
                      {props?.data?.link && (
                        <a
                          className={Style.health_safety_haf_link_item}
                          href={props?.data?.link || " "}
                          target={"_blank"}
                          rel="noopener noreferrer"
                        >
                          Apply Now <Icons icon="arrow-top-right-long" size={12} />
                        </a>
                      )}
                      <div className="mt-2">
                        {props?.data?.link_text && parse(props?.data?.link_text)}
                      </div>
                    </div>
                  </div>
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
                        {props?.data?.result?.cards.map((data, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <ImageDetailsCard props={data} />
                            </SwiperSlide>
                          );
                        })} 
                      </Swiper>
                    </div>
                  </>
                ) : <div className="row gx-4">
                {props?.data?.result?.cards.map((data, index) => {
                  return (
                    <div className="col-sm-6" key={index}>
                      <ImageDetailsCard props={data} />
                    </div>
                  );
                })}
              </div>}
              </div>
            </div>
            </div>
            
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default HalfImageWithCards;
