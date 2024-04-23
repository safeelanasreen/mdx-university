import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";

import Style from "./MdxRequirement.module.scss";
import RequirementsTab from "../RequirementsTab";

const MdxRequirement = ({ props }) => {
  const parse = require("html-react-parser");

  const dark = props?.dark;
  const large = props?.large;

  return (
    <section
      id={props?.data?.scrollID || ""}
      className={`${Style.section} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      } ${props?.data?.no_spacing?.top && "pt-0"} ${
        props?.data?.no_spacing?.bottom && "pb-0"
      } ${props?.data?.no_spacing?.left && "ps-0"}  ${
        props?.data?.no_spacing?.right && "pe-0"
      }`}
      style={{
        "--background-color": props?.data?.background
          ? props?.data?.background
          : "#EAEAEA",
        "--text-color": props?.data?.text_color
          ? props?.data?.text_color
          : "var(--text-color)",
      }}
    >
      <div
        className={`${
          props?.data?.container ? "container-fluid" : "container"
        } ${
          props?.data?.no_spacing?.all
            ? "px-0 py-0"
            : props?.data?.no_spacing?.x
            ? "px-0"
            : ""
        }`}
      >
        {props?.data?.sub_title ? (
          <div className={props?.data?.no_spacing?.x ? "container-fluid" : ""}>
            <h4 className="section-title_sub">{props?.data?.sub_title}</h4>
          </div>
        ) : (
          ""
        )}
        <h2 className="title section-title mb-3">{props?.data?.main_title}</h2>
        <RequirementsTab props={props?.data?.tab} />
      </div>
    </section>
  );
};

export default MdxRequirement;
