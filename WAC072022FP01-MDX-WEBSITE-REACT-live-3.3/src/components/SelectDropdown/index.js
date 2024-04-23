import Style from "./SelectDropdown.module.scss";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Icons from "../Layout/Icons";
import { useWindowSize } from "../../logic/useDimension";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SelectDropdown = ({ label, options, className }) => {
  const [value, setValue] = useState(label.length !== 0 ? label : "");
  const [valueMob, setValueMob] = useState(value);
  const handleSelect = (e) => {
    setValue(e);
  };

  const handleSelectMob = (e) => {
    setValueMob(e);
  };

  const { width } = useWindowSize();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setValue(valueMob);
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      {width >= 992 ? (
        <Dropdown
          onSelect={handleSelect}
          className={`dropdown-item-wrap ${Style.dropdown_item} ${
            className ? className : ""
          }`}
        >
          <Dropdown.Toggle variant="success">
            {value} <Icons icon="arrrow-down-md-thin" size={10} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {options?.map((data, index) => {
              return (
                <Dropdown.Item key={index} eventKey={data}>
                  {data}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <>
          <Button
            className={Style.handle_show_btn}
            variant="success"
            onClick={handleShow}
          >
            {value} <Icons icon="arrrow-down-md-thin" size={10} />
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            className={Style.dropdown_mob_modal}
          >
            {/* <Modal.Header closeButton></Modal.Header> */}
            <Modal.Body>
              <Dropdown
                onSelect={handleSelectMob}
                className={`dropdown-item-wrap ${Style.dropdown_item} ${
                  className ? className : ""
                }`}
              >
                {options?.map((data, index) => {
                  return (
                    <Dropdown.Item key={index} eventKey={data}>
                      {data}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown>
            </Modal.Body>
            <Modal.Footer>
              <Button className="w-100" variant="primary" onClick={handleClose}>
                Apply Filter
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default SelectDropdown;
