import React from "react";
import Style from "../WebSurvey.module.scss";
import FormTextarea from "../../ContactForm/FormTextarea";
import FormSelectBox from "../../ContactForm/FormSelectBox";
import Icons from "../../Layout/Icons";

const stepThree = ({ openAuthModal, props, formikThree }) => {
  let modalData = props?.[0]?.modal3;

  return (
    <div className={Style.survey_more}>
      <div className={Style.survey_head}>
        <h2 className={`text-uppercase mb-0 text-center ${Style.survey_title}`}>
          {modalData?.title}
        </h2>
      </div>
      <form onSubmit={formikThree.handleSubmit}>
        <FormTextarea
          className={Style.survey_more_input}
          height={"296px"}
          label="Your Feedback"
          formikThree={formikThree}
        />
        <FormSelectBox
          className={Style.survey_more_input}
          label="Why did you visit today?"
          options={modalData?.data}
          formikThree={formikThree}
        />

        <div className={`d-flex justify-content-between ${Style.survey_footer}`}>
          <button
            onClick={() => {
              if (localStorage.getItem("form_one") === "3") {
                openAuthModal("stepTwo");
              } else {
                openAuthModal("stepOne");
              }
            }}
            className={`${Style.survey_footer_nav} ${Style.survey_footer_nav_prev} d-inline-flex align-items-center justify-content-center btn btn-dark-border`}
          >
            <Icons icon="arrow-left" size={12} /> Previous
          </button>
          <button
            type="submit"
            className={`${Style.survey_footer_nav} ${Style.survey_footer_nav_next} d-inline-flex align-items-center justify-content-center btn btn-primary`}
          >
            Submit
            {/* <Icons icon="arrow-right" size={12} /> */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default stepThree;
