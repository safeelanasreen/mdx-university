import React from "react";
import Style from "./TextColumnTableTabWidget.module.scss";

import { TextColumnWidgetData } from "../DummyData";
import TextColumnWidget from "../TextColumnWidget";
import TableTabWidget from "../TableTabWidget";

const TextColumnTableTabWidget = ({ props }) => {
  const textColumnData = props?.data?.text_column;
  const tableWidgetData = props?.data?.table_tab;
  return (
    <div className={Style.text_column_table_tab}>
      {textColumnData && <TextColumnWidget props={textColumnData} />}
      <TableTabWidget props={tableWidgetData} />
    </div>
  );
};

export default TextColumnTableTabWidget;
