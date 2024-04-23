import React, { useEffect, useState, useRef } from "react";

import Style from "./VerticalTabWidget.module.scss";

import CourseTab from "../CourseTab";
import Tab from "react-bootstrap/Tab";

import { useWindowSize } from "../../logic/useDimension";
import { Accordion } from "react-bootstrap";
import AccordionView from "../AccordionView";
import ListItem from "../cards/ListItem";
import { useRouter } from "next/router";
import useVerticalTabWidget from "./useVerticalTabWidget";

const VerticalTabWidget = ({ props }) => {
  const {
    parent_id,
    fragmentIdentifier,
    bg,
    title,
    tabData,
    width,
    activeElement,
    setActiveElement,
    index,
    activeState,
  } = useVerticalTabWidget(props);
  return (
    <section
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
      className={`${Style.course_timeline} ${bg} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      }`}
    >
      <div
        className={
          props.data.full_width ? "container-fluid" : "container-fluid"
        }
      >
        {title && <h2 className="title title-sm">{title}</h2>}
        {width >= 1200 ? (
          <div className={Style.course_timeline_box}>
            <Tab.Container
              id="left-tabs-example"
              defaultActiveKey={parent_id ? (index != -1 ? index : 0) : 0}
            >
              <div className={Style.course_timeline_tabwrapper}>
                <div
                  className={`${props?.data?.full_width ? Style.fill : ""} ${
                    Style.course_timeline_tabsview
                  }`}
                >
                  <CourseTab
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
                  {props?.data?.tabData?.map((data, index) => {
                    return (
                      <Tab.Content key={index}>
                        <Tab.Pane eventKey={index}>
                          <div
                            className={Style.course_timeline_tabresults_item}
                          >
                            {data.type == "list" ? (
                              <ListItem
                                props={data?.data}
                                fragmentIdentifier={fragmentIdentifier}
                                activeState={activeState}
                              />
                            ) : data.type == "accordion" ? (
                              <AccordionView
                                courseTimeLine={tabData}
                                activeElement={activeElement}
                                setActiveElement={setActiveElement}
                                large={true}
                                props={data?.data}
                              />
                            ) : (
                              ""
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
            <Accordion
              defaultActiveKey={parent_id ? (index != -1 ? index : 0) : 0}
              className={Style.course_timeline_mobile_accodion}
            >
              {props?.data?.tabData?.map((data, index) => {
                return (
                  <Accordion.Item
                    className={Style.course_timeline_mobile_accodion_item}
                    eventKey={index}
                    key={Math.random()}
                  >
                    <Accordion.Header
                      className={
                        Style.course_timeline_mobile_accodion_item_header
                      }
                    >
                      {data?.name}
                    </Accordion.Header>
                    <Accordion.Body
                      className={Style.course_timeline_mobile_accodion_body}
                    >
                      {data.type == "list" ? (
                        <ListItem
                          props={data?.data}
                          fragmentIdentifier={fragmentIdentifier}
                          activeState={activeState}
                        />
                      ) : data.type == "accordion" ? (
                        <AccordionView
                          courseTimeLine={tabData}
                          activeElement={activeElement}
                          setActiveElement={setActiveElement}
                          large={true}
                          props={data?.data}
                        />
                      ) : (
                        ""
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        )}
      </div>
    </section>
  );
};

export default VerticalTabWidget;
