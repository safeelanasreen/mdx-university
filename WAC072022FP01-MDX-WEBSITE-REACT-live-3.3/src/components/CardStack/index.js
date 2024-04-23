import RelatedCard from "../cards/RelatedCard";
import Style from "./CardStack.module.scss";

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
import { useCallback, useEffect, useRef, useState } from "react";
import ImageContentBoxCard from "../cards/ImageContentBoxCard";
import ImageBoxCardExpand from "../cards/ImageBoxCardExpand";

const CardStack = ({ props }) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  /************ OBSERVER ***************/

  const [num, setNum] = useState(4);

  const observer = useRef();
  const lastElement = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && num < props?.data?.cards?.length) {
            setNum((prev) => prev + 1);
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [setNum, num]
  );

  /************ OBSERVER ***************/

  const { width } = useWindowSize();

  return (
    <>
      {client && (
        <section
          className={`${props?.data?.theme=="dark" ? Style.theme_dark:""} ${Style.mdx_related_course} ${
            props?.data?.card_type == "image_box_card"
              ? Style.image_box_card_slider
              : ""
          } ${
            props?.data?.card_type == "stat_card" ? Style.stat_card_slider : ""
          } 
      ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? width < 992
            ? ""
            : "no_space_bottom"
          : ""
      }`}
        
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"} >
          {props?.data?.card_type == "stat_card" ? (
            ""
          ) : (
            <div
              className={`${
                props?.data?.container ? "container" : "container-fluid"
              } ${props?.data?.no_spacing?.x ? "px-0" : ""}`}
            >
              {props?.data?.title ? (
                <h2 className="title title-sm mb-3">{props?.data?.title}</h2>
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
            <div
              className={`row row-col-2 row-cols-md-${
                props?.data?.columns?.md
              } row-cols-lg-${props?.data?.columns?.lg} row-cols-xxl-${
                props?.data?.columns?.xl
              } ${
                props?.data?.card_type == "image_box_card"
                  ? Style.rowMargin20
                  : props?.data?.card_type == "image_box_content_card" &&
                    Style.rowMargin20
              } ${
                props?.data?.card_type == "faculty_card"
                  ? Style.faculty_card_row
                  : props?.data?.card_type == "image_box_expand_card" ? "" : "g-0"
              } ${Style.cardstack_row} `}
            >
              {props?.data?.cards?.map((data, index) => {
                return (
                  <div
                    className={`${
                      props?.data?.card_type == "card_with_icon"
                        ? Style.course_card
                        : props?.data?.card_type == "card_with_image"
                        ? Style.related_card
                        : props?.data?.card_type == "image_box_card"
                        ? Style.image_box_card_wrap
                        : props?.data?.card_type == "stat_card"
                        ? Style.stat_card_wrap
                        : props?.data?.card_type == "image_box_content_card"
                        ? Style.image_box_card_wrap
                        : ""
                    } ${Style.anim} ${index < num ? Style.anim_show : ""}`}
                    key={index}
                    ref={index + 1 == num ? lastElement : null}
                  >
                    {props?.data?.card_type == "card_with_icon" ? (
                      <CourseCard
                        grid={true}
                        listing={true}
                        link={data?.link}
                        img={
                          data?.img?.indexOf("://") === -1
                            ? getImageUrl(data?.img ? data?.img : "")
                            : data?.img
                        }
                        title={data?.title}
                        content={data?.description}
                        key={Math.floor(Math.random() * 100)}
                      />
                    ) : props?.data?.card_type == "card_with_image" ? (
                      <RelatedCard
                        title={data?.title}
                        img={
                          data?.img?.indexOf("://") === -1
                            ? getImageUrl(data?.img ? data?.img : "")
                            : data?.img
                        }
                        link={data?.link}
                      />
                    ) : props?.data?.card_type == "card_with_img" ? (
                      <RelatedCard
                        title={data?.title}
                        img={
                          data?.image?.indexOf("://") === -1
                            ? getImageUrl(data?.image ? data?.image : "")
                            : data?.image
                        }
                        link={data?.link}
                      />
                    ) : props?.data?.card_type == "card_with_alphabet" ? (
                      <FacilityCard
                        key={Math.floor(Math.random() * 100)}
                        title={"New Student Visa Application"}
                        img={
                          data?.img?.indexOf("://") === -1
                            ? getImageUrl(data?.img ? data?.img : "")
                            : data?.img
                        }
                      />
                    ) : props?.data?.card_type == "image_box_card" ? (
                      <ImageBoxCard
                        img={
                          data?.img?.indexOf("://") === -1
                            ? getImageUrl(data?.img ? data?.img : "")
                            : data?.img
                        }
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
                    // ) : props?.data?.card_type == "image_box_content_card" ? (
                    //   <ImageBoxCardExpand
                    //     img={data?.img}
                    //     title={data?.title}
                    //     content={data?.description}
                    //     link={data?.link}
                    //   />
                    ) : props?.data?.card_type == "image_box_content_card" ? (
                      <ImageContentBoxCard
                        img={data?.img}
                        title={data?.title}
                        content={data?.description}
                        link={data?.link}
                      />
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
          </div>
        </section>
      )}
    </>
  );
};

export default CardStack;
