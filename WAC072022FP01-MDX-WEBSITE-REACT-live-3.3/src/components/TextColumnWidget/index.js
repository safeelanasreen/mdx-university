import Icons from "../Layout/Icons";
import Style from "./TextColumnWidget.module.scss";
import { useEffect, useState } from "react";

const TextColumnWidget = ({ props }) => {
  const parse = require("html-react-parser");
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    props?.data?.content?.length < 775 ? setIsReadMore(false) : setIsReadMore(true);
  }, [props]);

  return (
    <section
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
      className={`${Style.mdx_course_intro} theme-${
        props?.data?.theme === "primary"
          ? "primary"
          : props?.data?.theme === "dark"
          ? "dark"
          : props?.data?.theme === "light"
          ? "light"
          : props?.data?.theme === "alumni_theme"
          ? "alumni"
          : ""
      } ${
        props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : props?.data?.no_spacing
          ? "no_space "
          : ""
      }`}
    >
      <div className={`${props?.data?.container ? "container" : "container-fluid"}`}>
        {props?.data?.title_caption ? (
          <h4 className="title_sub">{props?.data?.title_caption}</h4>
        ) : (
          ""
        )}
        <div className="row">
          <div className="col-lg-6 col-xl-6">
            {props?.data?.title ? <h2 className="title title-sm">{props?.data?.title}</h2> : ""}
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className={Style.content_wrap}>
              {/* <p> */}
              {props?.data?.content &&
                parse(
                  isReadMore
                    ? `${props?.data?.content?.replace(/<\/?span[^>]*>/g, "").slice(0, 775)}...`
                    : props?.data?.content?.replace(/<\/?span[^>]*>/g, "")
                )}
              {/* </p> */}
            </div>
            {props?.data?.content?.length > 775 && (
              <span className="mt-3 d-inline-block" onClick={toggleReadMore}>
                <a
                  className={`btn-link ${
                    props?.data?.theme === "primary" ? "btn-link-white" : "btn-link-primary"
                  }`}
                >
                  {isReadMore ? "Read More" : " Read less"}
                  <span className="btn-link-icon">
                    <Icons icon={"arrow-top-right-long"} size={13.76} />
                  </span>
                </a>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextColumnWidget;
