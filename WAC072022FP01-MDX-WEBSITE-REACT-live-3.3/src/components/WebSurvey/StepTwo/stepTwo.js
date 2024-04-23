import React from "react";
import Style from "../WebSurvey.module.scss";

import Icons from "../../Layout/Icons";

const stepTwo = ({ openAuthModal, props, formikTwo, handleReviewUser, userReview }) => {
  let modalData = props?.[0]?.modal2;

  return (
    <div className={Style.survey_unhappy}>
      <div className={Style.survey_head}>
        <h2 className={`text-uppercase mb-0 text-center ${Style.survey_title}`}>
          {modalData?.title}
        </h2>
      </div>
      <form onSubmit={formikTwo.handleSubmit}>
        {modalData?.data?.map((data, i) => {
          return (
            <>
              <div className={`d-flex ${Style.survey_unhappy_el} justify-content-between`} key={i}>
                <div className={Style.text}>{data?.title}</div>
                <ul
                  className={`d-flex justify-content-between m-0 p-0 ${Style.survey_unhappy_el_stack}`}
                >
                  {data?.reaction?.map((item, index) => {
                    return (
                      <>
                        <li
                          className={`d-flex align-items-center flex-column ${
                            userReview?.filter((review) => review?.user_reaction === data?.id)?.[0]
                              ?.user_website_experience === item?.id
                              ? Style.active
                              : ""
                          } `}
                          key={index}
                        >
                          <div className={`ratio ${Style.survey_unhappy_el_icon}`}>
                            <Icons
                              icon={item?.icon_label}
                              onClick={() => {
                                formikTwo.setFieldValue("selectedIconTwo", item?.id);
                                handleReviewUser({
                                  user_reaction: data?.id,
                                  user_website_experience: item?.id,
                                });
                              }}
                            />
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </>
          );
        })}

        <div className={`d-flex justify-content-between ${Style.survey_footer}`}>
          <button
            onClick={() => openAuthModal("stepOne")}
            className={`${Style.survey_footer_nav} ${Style.survey_footer_nav_prev} d-inline-flex align-items-center justify-content-center btn btn-dark-border`}
          >
            <Icons icon="arrow-left" size={12} /> Previous
          </button>
          <button
            disabled={userReview?.length === 4 ? false : true}
            type="submit"
            className={`${Style.survey_footer_nav} ${Style.survey_footer_nav_next} d-inline-flex align-items-center justify-content-center btn btn-primary`}
          >
            Next
            <Icons icon="arrow-right" size={12} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default stepTwo;
