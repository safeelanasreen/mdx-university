import { useEffect, useState } from "react";
import JotForm from "../JotForm";
import Style from "./AboutIntroWidget.module.scss";
import Icons from "../Layout/Icons";
import Form from "../Form";

const AboutIntroWidget = ({ props }) => {
  const data = {
    content:
      '<p style="margin-left: 0px; text-align: justify;">The Centre of Continuing Education drives forward learning as a lifelong experience of which doesn’t start or stop with a university degree. The importance of learning skills and acquiring knowledge continuously is the main driver for this centre.</p><p>Our growing portfolio of courses are designed to serve the local and international communities, whether that be individuals, employers and industry, who may be entering education for the first time or building on their qualifications or experience.</p><p>The programme delivery is flexible and accessible appealing to our diverse audiences. We provide face to face or virtual delivery modes, that can be from Campus or delivered from the Company location.</p><p>We are active in responding to customer and market demand and very agile in our approach.</p>',
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
    <section
      className={Style.about_intro}
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className={Style.about_intro_content}>
              {props?.data?.title && <h4 className="title_sub">{props?.data?.title}</h4>}
              {props?.data?.main_title && (
                <h2 className="title title-sm">{props?.data?.main_title}</h2>
              )}

              <div className={Style.content_wrap}>
                {/* <p> */}
                {props?.data?.content &&
                  parse(
                    isReadMore
                      ? `${props?.data?.content?.replace(/<\/?span[^>]*>/g, "").slice(0, 870)}...`
                      : props?.data?.content?.replace(/<\/?span[^>]*>/g, "")
                  )}
                {/* </p> */}
              </div>
              {data?.content?.length > 870 && (
                <span className="mt-3 d-inline-block" onClick={toggleReadMore}>
                  <a
                    className={`btn-link ${
                      data?.theme === "primary" ? "btn-link-white" : "btn-link-primary"
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
          <div className="col-lg-5">
            <div className={Style.about_intro_form_outer}>
              <div className={Style.about_intro_form}>
                <h2 className="title title-sm">{props?.data?.form?.title}</h2>
                {props?.data?.form?.type === "hbspot_form" ? (
                  <Form formID={props?.data?.form?.link} />
                ) : (
                  <JotForm src={props?.data?.form?.link} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroWidget;
