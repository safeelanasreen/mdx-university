import { useEffect, useState } from "react";
import Icons from "../Layout/Icons";
import Style from "./CourseIntroWidget.module.scss";

const CourseIntroWidget = ({props}) => {
  const data = {
    content:
      '<p style="margin-left: 0px; text-align: justify;">The Middlesex University Dubai International Foundation Programme (IFP) is a 120 credit programme which aims to provide students with the required skills for entry into one of our undergraduate programmes. In addition, it helps students to transition from high school to university by teaching the use of academic conventions, fostering a learner-centred environment and encouraging independent learning whereby students become actively involved in their own education. Students will also develop transferable skills in their chosen subject area along with communication and problem solving skills.</p><p style="margin-left: 0px; text-align: justify;">Upon successful completion of the International Foundation Programme, students may progress directly onto any one of our undergraduate programmes. Graduates of the IFP programme have gone on to become some of our most successful students.</p><p></p>',
  };
  const parse = require("html-react-parser");
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    data?.content?.length < 870 ? setIsReadMore(false) : setIsReadMore(true);
  }, []);
  return (
    <section className={Style.cousre_intro}
    id={
      props?.data?.scrollID
        ? props?.data?.scrollID
        : props?.scrollID
        ? props?.scrollID
        : "none"
    }>
      <div className={props.data.container ? "container" : "container-fluid"}>
        <h4 className="title_sub">{props?.data?.title}</h4>
        <h2 className="title title-sm">{props?.data?.main_title}</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className={Style.cousre_intro_content}>
              <div className={Style.content_wrap}>
                {/* <p> */}
                {props?.data?.content &&
                  parse(
                    isReadMore
                      ? `${props?.data?.content
                          ?.replace(/<\/?span[^>]*>/g, "")
                          .slice(0, 870)}`
                      : props?.data?.content?.replace(/<\/?span[^>]*>/g, "")
                  )}
                {/* </p> */}
              </div>
              {props?.data?.content?.length > 870 && (
                <span className="mt-3 d-inline-block" onClick={toggleReadMore}>
                  <a
                    className={`btn-link ${
                      props?.data?.theme === "primary"
                        ? "btn-link-white"
                        : "btn-link-primary"
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
          <div className="col-lg-6">
            <div className={Style.cousre_intro_video_outer}>
              <div className={Style.cousre_intro_video}>
                <iframe
                  src={props?.data?.video_url}
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIntroWidget;
