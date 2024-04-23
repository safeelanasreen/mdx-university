import Style from "./ImageSlider.module.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, EffectFade } from "swiper";

import Image from "next/image";
import { getImageUrl } from "../../apis";
import Link from "next/link";

const ImageSlider = ({ props, fill }) => {
  const parse = require("html-react-parser");

  return (
    <div className={`${Style.slider} ${fill && Style.slider_fill}`}>
      <Swiper
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, EffectFade]}
        className={Style.slider_swiper}
      >
        {props?.slides?.slice(0, 8)?.map?.((data, key) => (
          <SwiperSlide key={key}>
            <Link href={data?.link || ""}>
              <figure className={`mb-0 ${Style.slider_fig}`}>
                <Image
                  src={getImageUrl(data?.image)}
                  layout="fill"
                  alt="University Experience Programme"
                />
                <figcaption className="h6 mb-0 text-white">
                  <div className="w-100">
                    <span>{data?.title && parse(data?.title)}</span>
                  </div>
                </figcaption>
              </figure>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
