import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Scrollbar, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import { useWindowSize } from "../../logic/useDimension";
import FacilityCard from "../cards/FacilityCard";
import Style from "./Facilities.module.scss";
import { getImageUrl } from "../../apis";
import Link from "next/link";

const Facilities = ({ props }) => {
  const parse = require("html-react-parser");
  const size = useWindowSize();
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <section className={Style.mdx_facilities_sec}>
        <div className="container-fluid">
          <h4 className="text-white title_sub">{props?.data?.sub_title}</h4>
          <div className="row">
            <div className="col-lg-6">
              <h2 className={`title text-white`}>{props?.data?.title}</h2>
            </div>
            <div className="col-lg-6">
              <div className={Style.content_wrap}>
                <div className="text-white">{parse(props?.data?.content)}</div>
                <Link href={"/student-services"}>
                  <button className="btn btn-light">Explore More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={Style.fac_wrap_sec} data-cursor="Know More">
        <div className="container-fluid px-0">
          {size.width >= 1200 ? (
            <div
              className={`row row-cols-lg-5 row-cols-xxl-5 g-0  ${Style.row} ${Style.random_color}`}
            >
              {props?.data?.related_facilities?.map((data, i) => (
                <div key={i} className={Style.course_grid_item}>
                  <FacilityCard
                    title={data?.title}
                    img={getImageUrl(data?.facility_image_full_url)}
                    link={data?.links}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className={Style.grid_wrap}>
              {" "}
              <Swiper
                loop={false}
                slidesPerView={1.2}
                spaceBetween={0}
                scrollbar={{ draggable: true }}
                speed={100}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
                className={`swiper-scroll ${Style.swiper_slider}`}
                freeMode={true}
                breakpoints={{
                  768: {
                    slidesPerView: 2.1,
                  },
                  992: {
                    slidesPerView: 2.5,
                  },
                }}
              >
                {props?.data?.related_facilities?.map((data, i) => (
                  <SwiperSlide
                    className={`${Style.course_grid_item} ${Style.course_grid_tile}`}
                    key={i}
                  >
                    <FacilityCard
                      title={data?.title}
                      img={getImageUrl(data?.facility_image_full_url)}
                      link={data?.links}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Facilities;
