/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React from "react";
import Style from "../WebSurvey.module.scss";

const stepFour = ({ props }) => {
  let modalData = props?.[0]?.modal4;
  const Router = useRouter();

  return (
    <div className={`text-center ${Style.survey_thanks}`}>
      <div className={Style.survey_head}>
        <h2 className={`text-uppercase mb-0 text-center ${Style.survey_title}`}>
          {modalData?.title}
        </h2>
      </div>
      <p>Thank you for Sharing your Opinion about Us</p>

      {Router?.asPath !== "/" && (
        <button className={`${Style.back} btn btn-dark-border`} onClick={() => Router.push("/")}>
          Back To Home
        </button>
      )}
    </div>
  );
};

export default stepFour;
