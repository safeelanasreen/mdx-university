import React from "react";
import Link from "next/link";

import Style from "./TableTabWidget.module.scss";

import { useWindowSize } from "../../logic/useDimension";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SportsTable from "../SportsTable";

import Accordion from "react-bootstrap/Accordion";

const TableTabWidget = (props) => {
  props = props?.props ? props?.props : props?.props;
  const { width } = useWindowSize();
  const container = true;
  return (
    <section
      className={`${Style.table_tab_widget} ${
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
        className={`${
          props?.data?.container ? "container" : "container-fluid"
        } ${props?.data?.no_spacing?.x ? "px-0" : ""}`}
      >
        {width >= 1200 ? (
          <Tabs
            defaultActiveKey={props?.data?.table_tab[0]?.name}
            id="weeks"
            fill
            className={Style.tab_wrap}
          >
            {props?.data?.table_tab?.map((value, i) => {
              return (
                <Tab
                  className={Style.tab_item}
                  eventKey={value?.name}
                  title={value?.name}
                  key={i}
                >
                  <SportsTable props={value?.table_data} />
                </Tab>
              );
            })}
          </Tabs>
        ) : (
          props?.data?.table_tab?.map((value, i) => {
            return (
              <Accordion
                defaultActiveKey={0}
                className={Style.table_tab_widget_acc}
                key={i}
              >
                <Accordion.Item eventKey={value?.name}>
                  <Accordion.Header className={Style.table_tab_widget_acc_head}>
                    {value?.name}
                  </Accordion.Header>
                  <Accordion.Body
                    className={`p-0 ${Style.table_tab_widget_acc_body}`}
                  >
                    <SportsTable props={value?.table_data} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })
        )}

        <div className={Style.more_info}>
          {props?.data?.more_info_title}
          <Link href={`mailto:${props?.data?.info_link}`}>
            <a> {props?.data?.info_link}</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TableTabWidget;
