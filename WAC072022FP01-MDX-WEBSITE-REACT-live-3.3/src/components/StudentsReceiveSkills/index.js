import Style from "./StudentsReceiveSkills.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import IconCard from "../cards/IconCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Navigation, Scrollbar } from "swiper";
import Icons from "../Layout/Icons";


const StudentsReceiveSkills = ({ props }) => {
  return (
    <>
      <section id={props?.data?.scrollID ? props?.data?.scrollID : "none"} className={`${Style.students_receive_skills} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      }`}>
        <div className="container-fluid">
          <div className="d-flex text-left text-md-center">
            <div className="col-lg-8 offset-lg-2">
              <h4 className={`title_sub ${Style.font_bold}`}>
                {props?.data?.sub_title}
              </h4>
              <h2 className={`title title-sm ${Style.students_skils_title}`}>
                {props?.data?.title}
              </h2>
            </div>
          </div>

          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            navigation={{
              prevEl: ".entry_nav_prev_stud",
              nextEl: ".entry_nav_next_stud",
            }}
            breakpoints={{
              0: {
                slidesPerView: "auto",
                spaceBetween: 10,
              },
              768: {
                slidesPerView: "auto",
                spaceBetween: 15,
              },
              992: {
                slidesPerView: "auto",
                spaceBetween: 15,
                scrollbar: false,
              },
              1200: {
                slidesPerView: "auto",
                spaceBetween: 20,
              },
            }}
            scrollbar={{
              el: ".slider-scrollbar",
              hide: false,
            }}
            modules={[Scrollbar, Navigation]}
            className={Style.entry_requirements_swiper}
          >
            {props?.data?.cards.map((data, index) => {
              return (
                <>
                  <SwiperSlide className={Style.slide_item} key={index}>
                    <IconCard
                      icon={data.icon}
                      title={data.title}
                      description={data.description}
                      image={data?.icon_image}
                    />
                  </SwiperSlide>
                </>
              );
            })}

            <div className={Style.entry_nav}>
              <div className={`entry_nav_prev_stud ${Style.entry_nav_prev}`}>
                <Icons icon={"arrow-left-sharp-thin"} size={30} />
              </div>
              <div className={`entry_nav_next_stud ${Style.entry_nav_next}`}>
                <Icons icon={"arrow-right-sharp-thin"} size={30} />
              </div>
            </div>

            <div className={`slider-scrollbar ${Style.slider_scrollbar}`}></div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default StudentsReceiveSkills;
