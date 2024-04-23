import React from "react";
import AccordionView from "../AccordionView";
import Style from "./AlumniFAQ.module.scss";
import { alumniFaqData } from "../../components/DummyData";

const AlumniFAQ = ({ props }) => {
  return (
    <section
      className={Style.alumni_faq}
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
    >
      <div className="container">
        <h2 className="title title-sm">{props?.data?.title}</h2>
        <AccordionView props={props?.data?.faq_data} />
      </div>
    </section>
  );
};

export default AlumniFAQ;
