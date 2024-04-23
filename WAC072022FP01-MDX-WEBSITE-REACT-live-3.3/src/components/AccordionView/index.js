import Link from "next/link";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Icons from "../Layout/Icons";

const AccordionView = (props) => {
  const dark = props?.dark;
  const large = props?.large;
  props = props?.props?.data ? props?.props?.data : props?.props;
  const parse = require("html-react-parser");

  return (
    <div
      className={`accordion-view  ${large ? "accordion-view-lg" : ""} ${
        dark ? "accordion-view-dark" : ""
      }`}
    >
      {props && (
        <Accordion alwaysOpen>
          {props.map((accData, accIndex) => {
            return (
              <Accordion.Item eventKey={accIndex} key={accIndex}>
                <Accordion.Header>
                  {accData?.title ? accData?.title : accData?.location}
                </Accordion.Header>

                <Accordion.Body>
                  <div className="admin-content-area">
                    {accData?.content ? parse(accData?.content) : accData?.description}
                  </div>
                  {accData?.links && (
                    <Link href={accData?.links || ""}>
                      <div className="mt-2">
                        <a className="btn btn-link btn-link-primary">
                          Read More
                          <span className="btn-link-icon">
                            <Icons icon={"arrow-top-right-long"} size={13.76} />
                          </span>
                        </a>
                      </div>
                    </Link>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      )}
    </div>
  );
};

export default AccordionView;
