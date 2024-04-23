import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import Style from "./DropdownButton2.module.scss";

const DropdownButton2 = ({ sort, handleSort }) => {
  return (
    <>
      <Dropdown className={Style.dropdown} onSelect={(e) => handleSort(e)}>
        <Dropdown.Toggle variant={"filter"} id="filter-button">
          {sort === "desc" ? "Latest" : "Oldest"}
        </Dropdown.Toggle>

        <Dropdown.Menu className={Style.dropdown_result}>
          <Dropdown.Item eventKey="desc" className={Style.dropdown_result_item}>
            Latest
          </Dropdown.Item>
          <Dropdown.Item eventKey="asc" className={Style.dropdown_result_item}>
            Oldest
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownButton2;
