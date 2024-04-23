import Image from "next/image";
import { getImageUrl } from "../../apis";
import Icons from "../Layout/Icons";
import Style from "./CourseStrip.module.scss";
const CourseStrip = (props) => {
  const cardsData = props?.course_strip
    ? props?.course_strip
    : props?.props?.data
    ? props?.props?.data
    : props?.props?.course_strip
    ? props?.props?.course_strip
    : props?.course_strip;

  const parse = require("html-react-parser");
  const getIcon = (slug) => {
    if (slug == "start") return "flag";
    else if (slug == "duration") return "timer";
    else if (slug == "attendance") return "tick-circle";
    else if (slug == "course_leader") return "graduation";
    else if (slug == "fees_total") return "home-stroked";
  };

  return (
    <div className={`${Style.mdx_course_intro}`}>
      {cardsData?.map((value, key) => {
        return (
          <div className={Style.intro_item} key={key}>
            <p>
              {value?.icon ? (
                <div className={Style.intro_item_icon}>
                  <span>
                    <Image
                      src={
                        value?.icon?.indexOf("://") === -1
                          ? getImageUrl(value?.icon)
                          : value?.icon
                      }
                      layout="fill"
                      objectFit="contain"
                      alt={value?.icon}
                    />
                  </span>
                </div>
              ) : (
                <span>
                  <Icons icon={getIcon(value?.slug)} size={20} />
                </span>
              )}

              {value?.title}
            </p>
            {value?.sub_title && (
              <h4>
                {parse(value?.sub_title)}
              </h4>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CourseStrip;
