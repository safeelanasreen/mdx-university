import RelatedCard from "../cards/RelatedCard";
import Style from "./CardStackNoSlider.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { useWindowSize } from "../../logic/useDimension";
import CourseCard from "../cards/CourseCard";
import FacilityCard from "../cards/FacilityCard";
import ImageBoxCard from "../cards/ImageBoxCard";
import StatCard from "../cards/StatCard";
import { getImageUrl } from "../../apis";
import FacultyCard from "../cards/FacultyCard";
import ImageBoxCardExpand from "../cards/ImageBoxCardExpand";

const CardStackNoSlider = ({ props }) => {
  const size = useWindowSize();
  return (
    <section
      className={`${Style.mdx_related_course} ${
        props?.data?.card_type == "image_box_card"
          ? Style.image_box_card_slider
          : ""
      } ${props?.data?.card_type == "stat_card" ? Style.stat_card_slider : ""} 
      ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      }`}
    >
      {props?.data?.card_type == "stat_card" ? (
        ""
      ) : (
        <div
          className={props?.data?.container ? "container" : "container-fluid"}
        >
          {props?.data?.title ? (
            <h2 className="title title-sm">{props?.data?.title}</h2>
          ) : (
            ""
          )}
        </div>
      )}

      <div
        className={`${
          props?.data?.container ? "container" : "container-fluid"
        } ${props?.data?.no_spacing?.x ? "px-0" : ""}`}
      >
        {size.width < 1200 ? (
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
            className={`${
              props?.data?.card_type == "image_box_card"
                ? ""
                : Style.mdx_related_course_swiper
            }`}
          >
            {props?.data?.cards?.map((data, key) => {
              return (
                <SwiperSlide
                  className={`${Style.mdx_related_course_item} ${
                    props?.data?.card_type == "image_box_card" || "stat_card"
                      ? ""
                      : Style.course_card
                  } ${
                    props?.data?.card_type == "card_with_icon"
                      ? Style.course_card
                      : ""
                  }`}
                  key={key}
                >
                  {props?.data?.card_type == "card_with_icon" ? (
                    <CourseCard
                      link={data?.link}
                      grid={true}
                      listing={true}
                      img={data?.img ? getImageUrl(data?.img) : ""}
                      title={data?.title}
                      content={data?.description}
                    />
                  ) : props?.data?.card_type == "card_with_image" ? (
                    <RelatedCard
                      title={data?.title}
                      img={data?.img ? getImageUrl(data?.img) : ""}
                      link={data?.link}
                    />
                  ) : props?.data?.card_type == "card_with_img" ? (
                    <RelatedCard
                      title={data?.title}
                      img={data?.image ? getImageUrl(data?.image) : ""}
                      link={data?.link}
                    />
                  ) : props?.data?.card_type == "card_with_alphabet" ? (
                    <div>
                      <FacilityCard
                        title={data?.title}
                        img={data?.img ? getImageUrl(data?.img) : ""}
                      />
                    </div>
                  ) : props?.data?.card_type == "image_box_card" ? (
                    <div
                      className={Style.image_box_card_wrap}
                      key={Math.random()}
                    >
                      <ImageBoxCard
                        img={data?.img ? getImageUrl(data?.img) : ""}
                        title={data?.title}
                        content={data?.description}
                        link={data?.link}
                      />
                    </div>
                  ) : props?.data?.card_type == "stat_card" ? (
                    <div className={Style.stat_card_wrap} key={Math.random()}>
                      <StatCard
                        count={data?.count}
                        description={data?.description}
                      />
                    </div>
                  ) : props?.data?.card_type == "faculty_card" ? (
                    <div key={Math.random()}>
                      <FacultyCard data={data} />
                    </div>
                  ) : props?.data?.card_type == "image_box_expand_card" ? (
                    <ImageBoxCardExpand
                      img={data?.img}
                      title={data?.title}
                      content={data?.description}
                      link={data?.link}
                    />
                  ) : (
                    ""
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div
            className={`row row-cols-md-${
              props?.data?.columns?.md
            } row-cols-lg-${props?.data?.columns?.lg} row-cols-xxl-${
              props?.data?.columns?.xl
            } ${
              props?.data?.card_type == "image_box_card" && Style.rowMargin20
            } ${
              props?.data?.card_type == "faculty_card"
                ? Style.faculty_card_row
                : "g-0"
            }`}
          >
            {props?.data?.cards?.map((data, key) => {
              return (
                <div
                  className={
                    props?.data?.card_type == "card_with_icon"
                      ? Style.course_card
                      : props?.data?.card_type == "card_with_image"
                      ? Style.related_card
                      : props?.data?.card_type == "image_box_card"
                      ? Style.image_box_card_wrap
                      : props?.data?.card_type == "stat_card"
                      ? Style.stat_card_wrap
                      : ""
                  }
                  key={key}
                >
                  {props?.data?.card_type == "card_with_icon" ? (
                    <CourseCard
                      grid={true}
                      listing={true}
                      link={data?.link}
                      img={data?.img ? getImageUrl(data?.img) : ""}
                      title={data?.title}
                      content={data?.description}
                      key={Math.floor(Math.random() * 100)}
                    />
                  ) : props?.data?.card_type == "card_with_image" ? (
                    <RelatedCard
                      title={data?.title}
                      img={data?.img ? getImageUrl(data?.img) : ""}
                      link={data?.link}
                    />
                  ) : props?.data?.card_type == "card_with_img" ? (
                    <RelatedCard
                      title={data?.title}
                      img={data?.image ? getImageUrl(data?.image) : ""}
                      link={data?.link}
                    />
                  ) : props?.data?.card_type == "card_with_alphabet" ? (
                    <FacilityCard
                      key={Math.floor(Math.random() * 100)}
                      title={"New Student Visa Application"}
                      img={data?.img ? getImageUrl(data?.img) : ""}
                    />
                  ) : props?.data?.card_type == "image_box_card" ? (
                    <ImageBoxCard
                      img={data?.img ? getImageUrl(data?.img) : ""}
                      title={data?.title}
                      content={data?.description}
                      link={data?.link}
                    />
                  ) : props?.data?.card_type == "stat_card" ? (
                    <StatCard
                      count={data?.count}
                      description={data?.description}
                    />
                  ) : props?.data?.card_type == "faculty_card" ? (
                    <div key={Math.random()}>
                      <FacultyCard data={data} />
                    </div>
                  ) : props?.data?.card_type == "image_box_expand_card" ? (
                    <ImageBoxCardExpand
                      img={data?.img}
                      title={data?.title}
                      content={data?.description}
                      link={data?.link}
                    />
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CardStackNoSlider;
