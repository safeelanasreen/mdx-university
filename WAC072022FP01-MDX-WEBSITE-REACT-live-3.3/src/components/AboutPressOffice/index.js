import React from "react";
import AboutWidget from "../AboutWidget";
import Style from "./AboutPressOffice.module.scss";

const AboutPressOffice = ({ props }) => {
  return (
    <section id="Press Office" className={Style.mdx_press_office}>
      <div className="container-fluid">
        <AboutWidget props={props} />
      </div>
    </section>
  );
};

export default AboutPressOffice;
