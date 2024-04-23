import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Scrollbar, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import Style from "./Experience.module.scss";
import { ourExperienceData } from "../DummyData";
import Assets from "../Layout/CommonLayout/assets";
import ExperienceCard from "../cards/ExperienceCard";
import Icons from "../Layout/Icons";
import { useWindowSize } from "../../logic/useDimension";
import { getImageUrl } from "../../apis";
import ExpetienceMain from "../cards/ExperienceMain";

const Experience = ({ props }) => {
  const size = useWindowSize();
  return (
    <section data-cursor="scroll-down">
      <div className={Style.experience_grid}>
        <ExpetienceMain props={props} />
        {size.width >= 992 ? (
          <>
            {props?.data?.experience.map((data, key) => {
              return (
                <div className={Style.experience_grid_item} key={key}>
                  <ExperienceCard
                    link={data?.links}
                    title={data?.name}
                    img={getImageUrl(data?.experience_image_full_url || "")}
                  />
                </div>
              );
            })}
          </>
        ) : (
          <Swiper
            loop={false}
            slidesPerView={1.1}
            breakpoints={{
              576: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={0}
            scrollbar={{ draggable: true }}
            speed={100}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
            freeMode={true}
            className="swiper-scroll"
          >
            {props?.data?.experience.map((data, key) => {
              return (
                <SwiperSlide
                  className={`${Style.course_grid_item} ${Style.course_grid_tile}`}
                  key={key}
                >
                  <ExperienceCard
                    title={data?.name}
                    link={data?.links}
                    img={getImageUrl(data?.experience_image_full_url || "")}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Experience;
