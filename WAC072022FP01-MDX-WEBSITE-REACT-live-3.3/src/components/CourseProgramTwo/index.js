import Style from "./CourseProgramTwo.module.scss";
import ProgramCard from "../cards/ProgramCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Scrollbar, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import { useWindowSize } from "../../logic/useDimension";
import ProgramContentCard from "../cards/ProgramContentCard";

const CourseProgramTwo = ({ props }) => {
  const size = useWindowSize();
  const cardsData = props?.data?.cards;

  return (
    <section
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
      className={`${Style.mdx_course_program} ${
        props?.data?.text_column_card_stack && props?.data?.content
          ? "pt-0"
          : size.width < 992
          ? "py-0"
          : ""
      }`}
    >
      <div className={props.data.container ? "container" : "container-fluid"}>
        <div className="col-xl-12">
          {props?.data?.title_caption ? (
            <h4 className="title_sub">{props?.data?.title_caption}</h4>
          ) : (
            ""
          )}
          {props?.data?.title ? (
            <h2 className="title title-sm">{props?.data?.title}</h2>
          ) : (
            ""
          )}
        </div>
      </div>
      {size.width >= 992 ? (
        <div className={props.data.container ? "container" : "container-fluid"}>
          <div className={`row row-cols-md-2 g-0 ${Style.program_item_wrap}`}>
            {cardsData?.map((data, dataIndex) => {
              return <ProgramContentCard props={data} key={dataIndex} />;
            })}
          </div>
        </div>
      ) : cardsData ? (
        <Swiper
          loop={false}
          slidesPerView={1}
          spaceBetween={0}
          scrollbar={{ draggable: true }}
          speed={600}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
          className={`swiper-scroll ${Style.swiper}`}
          freeMode={true}
        >
          {cardsData?.map((data) => {
            return (
              <SwiperSlide
                className={`${Style.slide_item}`}
                key={Math.random()}
              >
                <ProgramContentCard props={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        ""
      )}
    </section>
  );
};

export default CourseProgramTwo;
