import React from "react";
import FacultyCard from "../cards/FacultyCard";
import Style from "./FacultyStack.module.scss";

const FacultyStack = (props) => {
  props = props?.props?.data ? props?.props?.data : props?.props;
  const facultyData = props?.result ? props?.result : props
  return (
    <div className={Style.faculty_stack}>
      <div className={props?.container ? "container" : "container-fluid"}>
        <div
          className={`row ${Style.row} row-cols-md-${facultyData?.columns?.md} row-cols-lg-${facultyData?.columns?.lg} row-cols-xl-${facultyData?.columns?.xl}`}
        >
          {facultyData?.cards?.map((value, i) => {
            return (
              <div key={i}>
                <FacultyCard data={value} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FacultyStack;
