import React, { useState } from "react";
import ProgrammeTab from "../../ProgrammeTab";

import Tab from "react-bootstrap/Tab";
import { Accordion } from "react-bootstrap";
import AccordionView from "../../AccordionView";
import { useWindowSize } from "../../../logic/useDimension";
import Style from "../MdxProgrammeContent.module.scss";

const MdxProgrammeContentTab = ({ props }) => {
  const parse = require("html-react-parser");
  const tabData = props?.data?.tabData ? props?.data?.tabData : props?.data;
  const { width } = useWindowSize();
  const [activeElement, setActiveElement] = useState(tabData?.[0]?.id);
  return (
    <>
      {width >= 1200 ? (
        <div className={Style.course_timeline_box}>
          <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
            <div className={Style.course_timeline_tabwrapper}>
              <div
                className={`${props?.data?.full_width ? Style.fill : ""} ${
                  Style.course_timeline_tabsview
                }`}
              >
                <ProgrammeTab
                  courseTimeLine={tabData}
                  activeElement={activeElement}
                  setActiveElement={setActiveElement}
                />
              </div>

              <div
                className={`${props?.data?.full_width ? Style.fill : ""} ${
                  Style.course_timeline_tabresults
                }`}
              >
                {tabData?.map((data, index) => {
                  return (
                    <Tab.Content key={index}>
                      <Tab.Pane eventKey={index}>
                        <div className={Style.course_timeline_tabresults_item}>
                          {data?.accordion === true || data?.accordion === "true" ? (
                            <AccordionView
                              courseTimeLine={tabData}
                              activeElement={activeElement}
                              setActiveElement={setActiveElement}
                              large={true}
                              props={data?.content}
                            />
                          ) : (
                            data?.content && parse(data?.content)
                          )}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  );
                })}
              </div>
            </div>
          </Tab.Container>
        </div>
      ) : (
        <div className={Style.course_timeline_mobile}>
          <Accordion defaultActiveKey={0} className={Style.course_timeline_mobile_accodion}>
            {tabData?.map((data, index) => {
              return (
                <Accordion.Item
                  className={Style.course_timeline_mobile_accodion_item}
                  eventKey={index}
                  key={Math.random()}
                >
                  <Accordion.Header className={Style.course_timeline_mobile_accodion_item_header}>
                    {data?.title}
                  </Accordion.Header>
                  <Accordion.Body className={Style.course_timeline_mobile_accodion_body}>
                    {data.accordion === true || data.accordion === "true" ? (
                      <AccordionView
                        courseTimeLine={tabData}
                        activeElement={activeElement}
                        setActiveElement={setActiveElement}
                        large={true}
                        props={data?.content}
                      />
                    ) : (
                      data?.content && parse(data?.content)
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      )}
    </>
  );
};
export default MdxProgrammeContentTab;
