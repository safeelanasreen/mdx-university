import React from "react";
import Link from "next/link";

import Icons from "../Layout/Icons";

import Nav from "react-bootstrap/Nav";

import Style from "./ProgrammeTab.module.scss";

const ProgrammeTab = (props) => {
  const courseTimeLine = props?.courseTimeLine ? props?.courseTimeLine : props?.props?.data;
  const activeElement = props?.activeElement;
  const setActiveElement = props?.setActiveElement;

  const courseHoverItem = (data) => {
    setActiveElement(data);
  };

  return (
    <div className={Style.count_tabs}>
      <Nav className="flex-column">
        {courseTimeLine?.map((data, index) => {
          return (
            <span key={index}>
              <Nav.Item>
                <Nav.Link
                  eventKey={index}
                  className={`${Style.count_tabs_item} ${
                    activeElement == data.id ? Style.active : ""
                  }`}
                  onClick={() => courseHoverItem(data.id)}
                  key={index}
                >
                  <div className={Style.count_tabs_item_label}>{data?.title}</div>
                  <div className={Style.count_tabs_item_arrow}>
                    <Icons icon={"arrow-right-sharp-sm-thin"} size={33.46}></Icons>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </span>
          );
        })}
      </Nav>
    </div>
  );
};

export default ProgrammeTab;
