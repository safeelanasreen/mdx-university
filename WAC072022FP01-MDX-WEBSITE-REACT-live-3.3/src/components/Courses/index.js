import { useState } from "react";
import CourseCard from "../cards/CourseCard";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import Style from "./Courses.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import { getImageUrl } from "../../apis";
import Icons from "../Layout/Icons";
import Link from "next/link";

const Courses = ({ props }) => {
  const [swiper, setSwiper] = useState();
  const size = useWindowSize();

  return (
    <section className={Style.courses_sec}>
      <div className={Style.course_grid}>
        <Link href={"/study"}>
          <div
            className={`${Style.course_grid_main} ${Style.course_grid_item}`}
          >
            <Image
              layout="fill"
              objectFit="cover"
              src={getImageUrl(props?.data?.img)}
              alt={"course"}
            />
            <div className={Style.course_grid_content}>
              <h4 className="text-white title_sub">{props?.data?.sub_title}</h4>
              <h2 className={`title text-white`}>{props?.data?.title}</h2>
              <a className="btn-round btn-round-grey btn-round-grey-light md">
                <Icons icon={"arrow-right"} size={15} />
              </a>
            </div>
          </div>
        </Link>

        {size.width < 1199 ? (
          <Swiper
            onSwiper={setSwiper}
            loop={false}
            slidesPerView={1.2}
            spaceBetween={0}
            scrollbar={{ draggable: true }}
            speed={100}
            watchSlidesProgress={true}
            modules={[FreeMode, Scrollbar]}
            freeMode={true}
            className={`${size.width < 768 ? "w-100" : ""} ${Style.courses_swiper}`}
          >
            {props?.data?.course_categories?.map((data, key) => {
              return (
                <SwiperSlide
                  className={`${Style.course_grid_item} ${Style.course_grid_tile}`}
                  key={key}
                >
                  <CourseCard
                    title={data?.category}
                    content={data?.description}
                    img={getImageUrl(data?.icon)}
                    link={data?.links}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <>
            {props?.data?.course_categories?.map((data, key) => {
              return (
                <div
                  className={`${Style.course_grid_item} ${Style.course_grid_tile}`}
                  key={key}
                >
                  <CourseCard
                    title={data?.category}
                    content={data?.description}
                    img={getImageUrl(data?.icon)}
                    link={data?.links}
                  />
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default Courses;
