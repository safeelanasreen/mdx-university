import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Icons from "../Layout/Icons";
import Dropdown from "react-bootstrap/Dropdown";
import { useWindowSize } from "../../logic/useDimension";
import Style from "./PublicationSuccess.module.scss";
import PublicationCard from "../cards/PublicationCard";
import { getFilterContent } from "../../../lib/pages";
import usePublicationSuccess from "./usePublicationSuccess";

const PublicationSuccess = ({ props }) => {
  const { width } = useWindowSize();

  const {
    selectedOption,
    selectedDepartments,
    sorted,
    data,
    totalcount,
    show,
    handleItemClick,
    handleSort,
    handleInputChange,
    handleOffset,
    handleRadioButton,
    handleResInput,
    handleApplyForm,
    handleClearFilter,
    handleSelect,
    handleShow,
    handleClose
  } = usePublicationSuccess(props);

  return (
    <section className={Style.section}>
      <div className="container">
        <div className="row align-items-baseline">
          {width >= 1200 ? (
            <div className="col-xl-3">
              <div className={Style.filter_left}>
                <div className={Style.filter_left_ttl}>
                  <h2 className={`${Style.filter_top_ttl} mb-0`}>
                    Departments
                  </h2>
                </div>
                <div>
                  <div className={Style.filter_left_content}>
                    <Form>
                      {["checkbox"].map((type) => (
                        <div
                          key={`inline-${type}`}
                          className="d-flex flex-column"
                        >
                          {props?.data?.department_filters?.map((item, i) => {
                            return (
                              <div key={i}>
                                <Form.Check
                                  inline
                                  label={item?.name}
                                  name="group1"
                                  type={type}
                                  id={`inline-${type}-${i}`}
                                  // checked={isChecked}
                                  onClick={() => {
                                    handleItemClick(item);
                                  }}
                                />
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="col-xl-9">
            <div
              className={`${Style.filter_top} d-flex justify-content-between align-items-center `}
            >
              {width >= 1200 ? (
                <div className={Style.filter_top_ttlwrap}>
                  <h3 className={`${Style.filter_top_ttl} mb-0`}>
                    Showing Result :{data?.length}
                  </h3>
                </div>
              ) : (
                ""
              )}
              {width >= 1200 ? (
                <div
                  className={`${Style.filter_top_filter} d-flex align-items-center`}
                >
                  <h3 className={Style.filter_top_ttl}>Sort By :</h3>

                  <Dropdown className={Style.dropdown} onSelect={handleSelect}>
                    <Dropdown.Toggle variant="filter" id="filter-btn">
                      {selectedOption ? ` ${selectedOption}` : "Select"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {props?.data?.filters.map((option, i) => (
                        <div onClick={() => handleSort(option)} key={i}>
                          <Dropdown.Item
                            key={option.label}
                            eventKey={option.label}
                          >
                            <Form.Check
                              type="radio"
                              label={option.label}
                              id={`radio-${i}`}
                              checked={selectedOption === option.label}
                            />
                          </Dropdown.Item>
                        </div>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : (
                ""
              )}
              {/* The Search */}
              <div className={Style.filter_top_search}>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => handleInputChange(e)}
                />
                <button className={Style.icon_search}>
                  <Icons icon={"search-small"} size={24} />
                </button>
              </div>
              {width <= 1199.98 ? (
                <div className={Style.filter_btn}>
                  <button onClick={handleShow}>
                    <Icons icon={"filter-btn"} size={25} />
                    <span>Filter</span>
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>

            {width <= 1199.98 ? (
              <div className={Style.responsive_ttl}>
                <h3 className={`${Style.filter_top_ttl} mb-0`}>
                  Showing Result :<span>{data?.length}</span>
                </h3>
              </div>
            ) : (
              ""
            )}

            {data?.length > 0 ? (
              <>
                {data?.map((item, i) => {
                  return (
                    <div key={i}>
                      <PublicationCard props={item} />
                    </div>
                  );
                })}
              </>
            ) : (
              <div className={Style.no_result}>No Results Found</div>
            )}
          </div>
        </div>
        {totalcount > data?.length && (
          <div
            className={`${Style.section_footer} d-flex justify-content-center`}
          >
            <button className="btn btn-outline-primary " onClick={handleOffset}>
              Load More
            </button>
          </div>
        )}

        {/* The mobile version */}

        {width <= 1200 ? (
          <Modal
            show={show}
            onHide={handleClose}
            className={`${Style.filter_modal} filter-modal`}
          >
            <Modal.Header>
              <Modal.Title>Filter</Modal.Title>
              <Button
                variant="secondary"
                onClick={handleClose}
                className={Style.closebtn}
              >
                Close
              </Button>
            </Modal.Header>
            <Modal.Body>
              <div className={Style.filter_modal_sort}>
                <h1 className={Style.filter_modal_ttl}>Sort:</h1>

                <Form>
                  {props?.data?.filters?.map((option, i) => {
                    return (
                      <>
                        <Form.Check
                          type="radio"
                          id={`radio-${i}`}
                          label={option?.label}
                          checked={sorted === option?.value}
                          onChange={() => handleRadioButton(option?.value)}
                          name="formHorizontalRadios"
                        />
                      </>
                    );
                  })}
                </Form>
              </div>

              <div className={Style.filter_modal_depatments}>
                <h2 className={Style.filter_modal_ttl}>Departments :</h2>
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="d-flex flex-column">
                      {props?.data?.department_filters?.map((item, i) => {
                        return (
                          <div key={i}>
                            <Form.Check
                              inline
                              label={item?.name}
                              name="group1"
                              type={type}
                              id={`inline-${type}-${i}`}
                              checked={selectedDepartments.includes(item.id)}
                              onClick={() => {
                                handleResInput(item);
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </Form>
              </div>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
              <button className={Style.clrbtn} onClick={handleClearFilter}>
                Clear Filters
              </button>
              <button
                className={`${Style.applybtn} btn btn-primary`}
                onClick={handleApplyForm}
              >
                Apply
              </button>
            </Modal.Footer>
          </Modal>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
export default PublicationSuccess;
