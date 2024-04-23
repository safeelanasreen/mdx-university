import Style from "./TabWidget.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import VerticalTabs from "../VerticalTabs";

import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { useWindowSize } from "../../logic/useDimension";
import FacultyStack from "../FacultyStack";
import ListItemLink from "../ListItemLink";
import { useState } from "react";

const TabWidget = ({ props }) => {
  const parse = require("html-react-parser");

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const { width } = useWindowSize();

  return (
    <section
      className={Style.events_tabs}
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
    >
      {width > 992 ? (
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey={props?.data?.tabs !== "" && props?.data?.tabs?.[0]?.title}
        >
          <Col lg={12} className={Style.sticky_tab}>
            <div className={props?.data?.container ? "container" : ""}>
              <Nav
                variant="pills"
                className={`${Style.tabs_wrap} ${
                  props?.data?.tabs.length == 1 ? Style.tabs_wrap_item1 : ""
                }`}
                style={{
                  "--tab-bg-color": "",
                  "--tab-bg-active-color": `${
                    props?.data?.background_color ? props?.data?.background_color : ""
                  }`,
                  "--tab-text-color": "",
                  "--tab-text-active-color": `${
                    props?.data?.text_color ? props?.data?.text_color : ""
                  }`,
                  "--tab-border-color": `${
                    props?.data?.border_color ? props?.data?.border_color : ""
                  }`,
                }}
              >
                {props?.data?.tabs !== "" &&
                  props?.data?.tabs?.map((data) => {
                    return (
                      <Nav.Item key={Math.random() * 1000}>
                        {data?.title !== "" && (
                          <Nav.Link eventKey={data?.title} className={Style.nav_link}>
                            {data?.title}
                          </Nav.Link>
                        )}
                      </Nav.Item>
                    );
                  })}
              </Nav>
            </div>
          </Col>
          <Col lg={12}>
            <Tab.Content className={Style.tab_content_wrap}>
              {props?.data?.tabs !== "" ? (
                props?.data?.tabs?.map((data) => {
                  return (
                    <>
                      <Tab.Pane key={Math.random() * 1000} eventKey={data?.title}>
                        {data?.result?.tabs !== "" && (
                          <div
                            className={`${data.result_type == "verticalTab" && "container"} ${
                              Style.tab_container
                            }`}
                          >
                            {data.result_type == "verticalTab" ? (
                              <div className="row">
                                <div className="col-lg-6">
                                  {data?.title_caption ? (
                                    <h4 className="title title_sub ">{data?.title_caption}</h4>
                                  ) : (
                                    ""
                                  )}
                                  {data?.result?.title ? (
                                    <h2 className="title title-sm">{data?.result?.title}</h2>
                                  ) : (
                                    ""
                                  )}
                                </div>
                                {data?.result?.no_content_tab == true && (
                                  <span>{data?.result?.no_content_tab_description}</span>
                                )}
                                {isReadMore ? (
                                  <div className="col-lg-12">
                                    <VerticalTabs props={data?.result?.tabs} />
                                  </div>
                                ) : (
                                  <VerticalTabs props={data?.result?.tabs} />
                                )}

                                {/* {isReadMore ? (
                                  <div
                                    className={`col-lg-12 ${Style.tab_btn_wraper}`}
                                  >
                                    <button
                                      onClick={toggleReadMore}
                                      className="btn btn-primary"
                                    >
                                      View More
                                    </button>
                                  </div>
                                ) : (
                                  <div
                                    className={`col-lg-12 ${Style.tab_btn_wraper}`}
                                  >
                                    <button
                                      onClick={toggleReadMore}
                                      className="btn btn-primary"
                                    >
                                      View less
                                    </button>
                                  </div>
                                )} */}
                              </div>
                            ) : data.result_type == "faculty_card" ? (
                              <FacultyStack props={data} />
                            ) : data?.result_type == "content" ? (
                              <div className="admin-content-area mdx-table container">
                                {parse(data?.description)}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                      </Tab.Pane>
                    </>
                  );
                })
              ) : (
                <p>No Data</p>
              )}
              {props.data.button ? (
                <div className={Style.button_wrap}>
                  <button className={`btn btn-${props.data.button.type}`}>
                    {props.data.button.text}
                  </button>
                </div>
              ) : (
                ""
              )}
            </Tab.Content>
          </Col>
        </Tab.Container>
      ) : (
        <div className="container-fluid">
          <Accordion
            defaultActiveKey={props?.data?.tabs[0]?.tab_btn_name}
            className={Style.accordion_mob}
          >
            {props?.data?.tabs !== "" &&
              props?.data?.tabs?.map((data, index) => {
                return (
                  <Accordion.Item key={index} eventKey={data.title}>
                    <Accordion.Header>
                      {data?.result?.title || data?.title || data?.title_caption}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className={`${Style.tab_container}`}>
                        {data.result_type == "verticalTab" ? (
                          <div className="row">
                            {/* <div className="col-lg-6 px-0">
                              <h4 className="title title_sub ">
                                {data.title_caption}
                              </h4>
                              <h2 className="title title-sm">
                                {data?.result?.title}
                              </h2>
                            </div> */}
                            <div className="col-lg-12 px-0">
                              {data?.result?.switch_to_link_mobile === true ? (
                                <>
                                  <ListItemLink props={data.result.tabs} />
                                  {data?.result?.flag && (
                                    <button
                                      onClick={toggleReadMore}
                                      className="btn btn-primary mb-3"
                                    >
                                      View More
                                    </button>
                                  )}
                                </>
                              ) : (
                                <VerticalTabs props={data.result.tabs} />
                              )}
                            </div>
                          </div>
                        ) : data.result_type == "faculty_card" ? (
                          <FacultyStack props={data} />
                        ) : data?.result_type == "content" ? (
                          <div className="admin-content-area mdx-table container">
                            {parse(data?.description)}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
          </Accordion>
        </div>
      )}
    </section>
  );
};

export default TabWidget;
