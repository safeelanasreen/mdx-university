import React from "react";
import FormInput from "../ContactForm/FormInput";
import JotForm from "../JotForm";
import Style from "./AlumniForm.module.scss";

const AlumniForm = ({ props }) => {
  return (
    <div className={Style.alumni_form}>
      <div className={Style.alumni_form_header}>
        <h2 className="title">{props?.data?.title}</h2>
        <p>{props?.data?.sub_title}</p>
      </div>
      <div className={Style.alumni_form_body}>
        {/* <FormInput label="Name" type="text" />
        <FormInput label="Email Address" type="email" />
        <FormInput label="Student Number" type="number" />
        <button className="btn btn-light btn-full-width">Submit</button> */}
        {props?.data?.src && <JotForm src={props?.data?.src} />}
      </div>
    </div>
  );
};

export default AlumniForm;
