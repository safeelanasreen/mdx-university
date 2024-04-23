import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import Style from "./DropdownButton.module.scss";

const DropdownButton = ({setsort}) => {
  const [selected, setSelected] = useState("Newest To Oldest");

  const handleSelect = (e, id) => {
    setSelected(e.target.innerText);
    setsort(id)
  };
  const dropdownData = {
    data: [
      { id: "ASC", name: "Newest To Oldest" },
      { id: "DESC", name: "Oldest To Newest" },
    ],
  };
  return (
    <>
      {dropdownData && (
        <Dropdown className={Style.dropdown}>
          <Dropdown.Toggle variant={"filter"} id="filter-button">
            {selected}
          </Dropdown.Toggle>
          <Dropdown.Menu className={Style.dropdown_result}>
            {dropdownData?.data?.map((data, index) => {
              return (
                <Dropdown.Item
                  key={index}
                  className={`${Style.dropdown_result_item} ${
                    data?.name == selected ? Style.active : ""
                  }`}
                  onClick={(e) => {
                    handleSelect(e, data?.id);
                  }}
                >
                  {data?.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};

export default DropdownButton;
