import React, { useState } from "react";
import Style from "../WebSurvey.module.scss";

import Icons from "../../Layout/Icons";

const stepOne = ({ props, formikOne, activeFace, setActiveFace }) => {
  let modalData = props?.[0]?.modal1;

  return (
    <div className={`text-center mx-auto ${Style.survey_exp}`}>
      <div className={Style.survey_head}>
        <h2 className={`text-uppercase mb-0 ${Style.survey_title}`}>{modalData?.title}</h2>
      </div>
      <form>
        <ul className={`d-flex m-0 p-0`}>
          {modalData?.data?.map((item, i) => {
            return (
              <>
                {/* <li className={`d-flex align-items-center flex-column ${Style.active}`} key={i}> */}
                {/* add active as above when the element is active */}
                <li
                  className={`d-flex align-items-center flex-column  ${
                    activeFace === item?.id ? Style.active : ""
                  } `}
                  key={i}
                >
                  <div className={`ratio ${Style.survey_exp_icon}`}>
                    <Icons
                      icon={item?.icon_label}
                      onClick={() => {
                        formikOne.setFieldValue("selectedIcon", item?.id);
                        setActiveFace(item?.id);
                        formikOne.handleSubmit();
                      }}
                    />
                  </div>
                  <div className={Style.survey_exp_label}>{item?.text}</div>
                </li>
              </>
            );
          })}
        </ul>
      </form>
    </div>
  );
};

export default stepOne;
