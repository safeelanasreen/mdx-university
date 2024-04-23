import React from "react";
import Style from "./RecentStackSlider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import Image from "next/image";
import { getImageUrl } from "../../apis";
import Link from "next/link";

const RecentStackSlider = (props) => {
  props = props?.props?.data ? props?.props?.data : props?.props;
  return (
    <div className={Style.recent_stack_widget_slider}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        speed={500}
        modules={[FreeMode, Pagination]}
        slidesPerView={1}
      >
        {props?.slider_data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={Style.stack_slider_item}>
              <div className={Style.stack_slider_item_bg}>
                <Link href={item?.link}>
                  <Image
                    src={
                      item?.img?.indexOf("://") === -1
                        ? getImageUrl(item?.img ? item?.img : "")
                        : item?.img
                    }
                    objectFit="cover"
                    layout="fill"
                    alt={"Recent Update"}
                  />
                </Link>
              </div>
              <div className={Style.stack_slider_item_title}>
                <h3>{item?.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentStackSlider;
