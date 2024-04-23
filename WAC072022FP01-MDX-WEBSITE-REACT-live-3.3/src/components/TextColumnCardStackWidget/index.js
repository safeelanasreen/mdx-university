import React from "react";
import CourseProgram from "../CourseProgram";
import { TextColumnWidgetData } from "../DummyData";
import TextColumnWidget from "../TextColumnWidget";

import Style from "./TextColumnCardStackWidget.module.scss";

const TextColumnCardStackWidget = ({ props }) => {
  return (
    <section
      id={
        props?.data?.scrollID
          ? props?.data?.scrollID
          : props?.scrollID
          ? props?.scrollID
          : "none"
      }
      className={Style.text_column_cardstack}
    >
      {props?.data?.content ? <TextColumnWidget props={props} /> : ""}
      <CourseProgram props={props?.data?.programe} />
    </section>
  );
};

export default TextColumnCardStackWidget;
