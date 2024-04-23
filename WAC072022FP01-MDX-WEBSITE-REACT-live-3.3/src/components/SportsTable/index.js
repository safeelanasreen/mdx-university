import React from "react";
import Style from "./SportsTable.module.scss";

import Table from "react-bootstrap/Table";

const SportsTable = (props) => {
  props = props?.props?.data ? props?.props?.data : props?.props;

  return (
    <div className={Style.sports_table}>
      <Table striped bordered className="text-center m-0">
        <thead>
          <tr valign="top">
            {props?.table_head?.map((value, i) => {
              return <th key={i}>{value}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props?.table_body?.map((value, i) => {
            return (
              <tr key={i}>
                {value.map((item, index) => {
                  return <td key={index}>{item}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default SportsTable;
