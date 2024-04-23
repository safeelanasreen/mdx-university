import Style from "./MdxProgrammeModule.module.scss";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import { getImageUrl } from "../../apis";

const MdxProgrammeModule = ({ props }) => {
  const parse = require("html-react-parser");

  const dark = props?.dark;
  const large = props?.large;

  return (
    <section
      id={props?.data?.scrollID || ""}
      className={`${Style.section} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      } ${props?.data?.no_spacing?.top && "pt-0"} ${props?.data?.no_spacing?.bottom && "pb-0"} ${
        props?.data?.no_spacing?.left && "ps-0"
      }  ${props?.data?.no_spacing?.right && "pe-0"}`}
      style={{
        "--background-color": props?.data?.background ? props?.data?.background : "transparent",
        "--text-color": props?.data?.text_color ? props?.data?.text_color : "var(--text-color)",
      }}
    >
      <div
        className={`${props?.data?.container ? "container-fluid" : "container"} ${
          props?.data?.no_spacing?.all ? "px-0 py-0" : props?.data?.no_spacing?.x ? "px-0" : ""
        }`}
      >
        <div className={props?.data?.no_spacing?.x ? "container-fluid" : ""}>
          {props?.data?.sub_title ? (
            <h4 className="section-title_sub">{props?.data?.sub_title}</h4>
          ) : (
            ""
          )}
          {props?.data?.main_title?.length > 0 ? (
            <h2 className="title section-title mb-4 pb-3"> {props?.data?.main_title}</h2>
          ) : (
            ""
          )}
          <div className="row gy-4">
            <div className={`col-lg-6 ${props?.data?.tab?.length > 0 ? "" : "col-100"}`}>
              <div className="sticky-lg">
                <figure className={`mb-0 ratio ${Style.section_figure}`}>
                  <Image
                    src={getImageUrl(props?.data?.featured_img?.url)}
                    layout="fill"
                    alt={props?.data?.featured_img?.alt}
                  />
                </figure>
              </div>
            </div>
            <div
              className={`col-lg-6 ${props?.data?.featured_img?.url?.length > 0 ? "" : "col-100"}`}
            >
              <div className="tab-programme sticky-lg">
                <Tabs defaultActiveKey={0} transition={false} id="noanim-tab-example">
                  {props?.data?.tab?.map((data, index) => {
                    return (
                      <Tab eventKey={`${index}`} title={data?.title} key={index}>
                        <Accordion
                          defaultActiveKey={`${index}`}
                          className={`accordion-view  ${large ? "accordion-view-lg" : ""} ${
                            dark ? "accordion-view-dark" : ""
                          }`}
                        >
                          {data.accordion === true || data.accordion === "true"
                            ? data?.content?.map((item, i) => {
                                return (
                                  <Accordion.Item
                                    key={i}
                                    eventKey={`${i}`}
                                    className={Style.course_timeline_mobile_accodion_item}
                                  >
                                    <Accordion.Header
                                      className={Style.course_timeline_mobile_accodion_item_header}
                                    >
                                      {item?.acc_title}
                                    </Accordion.Header>
                                    <Accordion.Body
                                      className={Style.course_timeline_mobile_accodion_body}
                                    >
                                      {parse(item?.acc_content)}
                                    </Accordion.Body>
                                  </Accordion.Item>
                                );
                              })
                            : data?.content && parse(data?.content)}
                        </Accordion>
                      </Tab>
                    );
                  })}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {props?.data?.note?.content?.length > 0 ? (
          <div className={"notes text-white"}>
            <div className="notes-title">{props?.data?.note?.title}</div>
            <div className="notes-content">{parse(props?.data?.note?.content)}</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default MdxProgrammeModule;
