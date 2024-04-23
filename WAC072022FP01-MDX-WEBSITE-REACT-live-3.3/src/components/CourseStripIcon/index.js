import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { getImageUrl } from "../../apis";
import { useWindowSize } from "../../logic/useDimension";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Style from "./CourseStripIcon.module.scss";

// import required modules
import { FreeMode } from "swiper";

const CourseStripIcon = ({ props }) => {
  const scrollDiv = useRef(null);
  
  const parse = require("html-react-parser");

  const handleLinkClick = (e) => {
    window.scrollTo(window.scrollX, document.getElementById(e).offsetTop - 80);
  };

  const wSize = useWindowSize();
  return (
    <div className={`${wSize.width < 992 ? "continer" : ""}`}>
      <div className={`${Style.mdx_course_intro}`} ref={scrollDiv}>
        {wSize.width >= 768 ? (
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            freeMode={true}
            modules={[FreeMode]}
            className={Style.mdx_course_intro_swiper}
          >
            {props?.data?.cards?.map((data, index) => {
              return (
                <SwiperSlide className={Style.mdx_course_intro_swiper_slide} key={index}>
                  <div key={index} className={`${Style.intro_item}`}>
                    {data?.title == "Professional Institutes" ? (
                      <Link href={data?.link ? data?.link : ""}>
                        <>
                          {data?.icon && (
                            <div className={Style.intro_item_icon}>
                              <div className={Style.intro_icon_wrap}>
                                <Image
                                  src={
                                    data?.icon?.indexOf("://") === -1
                                      ? getImageUrl(data?.icon)
                                      : data?.icon
                                  }
                                  layout="fill"
                                  objectFit="contain"
                                  alt={data?.title}
                                />
                              </div>
                            </div>
                          )}
                        </>
                      </Link>
                    ) : (
                      <Link href={data?.link || ""}>
                        <div
                          className={Style.intro_item_icon}
                          onClick={() => handleLinkClick(data?.scrollTo)}
                        >
                          {data.icon && (
                            <div className={Style.intro_icon_wrap}>
                              <Image
                                src={
                                  data?.icon?.indexOf("://") === -1
                                    ? getImageUrl(data?.icon)
                                    : data?.icon
                                }
                                layout="fill"
                                objectFit="contain"
                                alt={data?.title}
                              />
                            </div>
                          )}
                        </div>
                      </Link>
                    )}
                    <div className={Style.intro_item_text}>
                      {data?.title == "Professional Institutes" ? (
                        <Link href={data?.link ? data?.link : ""}>
                          <h4 className={Style.intro_item_title}>
                            {parse(data?.title)}
                          </h4>
                        </Link>
                      ) : (
                        <Link href={data?.link || ""}>
                          <h4
                            className={Style.intro_item_title}
                            onClick={() => {
                              if (!data?.link) handleLinkClick(data?.scrollTo);
                            }}
                          >
                            {" "}
                            {data?.title != null && parse(data?.title)}
                          </h4>
                        </Link>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <>
            {props?.data?.cards?.map((data, index) => {
              return (
                <div className={`${Style.intro_item}`} key={index} >
                  {data?.title == "Professional Institutes" ? (
                    <Link href={data?.link ? data?.link : ""}>
                      <>
                        {data?.icon && (
                          <div className={Style.intro_item_icon}>
                            <div className={Style.intro_icon_wrap}>
                              <Image
                                src={
                                  data?.icon?.indexOf("://") === -1
                                    ? getImageUrl(data?.icon)
                                    : data?.icon
                                }
                                layout="fill"
                                objectFit="contain"
                                alt={data?.title}
                              />
                            </div>
                          </div>
                        )}
                      </>
                    </Link>
                  ) : (
                    <Link href={data?.link || ""}>
                      <div
                        className={Style.intro_item_icon}
                        onClick={() => handleLinkClick(data?.scrollTo)}
                      >
                        {data.icon && (
                          <div className={Style.intro_icon_wrap}>
                            <Image
                              src={
                                data?.icon?.indexOf("://") === -1
                                  ? getImageUrl(data?.icon)
                                  : data?.icon
                              }
                              layout="fill"
                              objectFit="contain"
                              alt={data?.title}
                            />
                          </div>
                        )}
                      </div>
                    </Link>
                  )}
                  <div className={Style.intro_item_text}>
                    {data?.title == "Professional Institutes" ? (
                      <Link href={data?.link ? data?.link : ""}>
                        <h4 className={Style.intro_item_title}>
                          {parse(data?.title)}
                        </h4>
                      </Link>
                    ) : (
                      <Link href={data?.link || ""}>
                        <h4
                          className={Style.intro_item_title}
                          onClick={() => {
                            if (!data?.link) handleLinkClick(data?.scrollTo);
                          }}
                        >
                          {" "}
                          {data?.title != null && parse(data?.title)}
                        </h4>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default CourseStripIcon;
