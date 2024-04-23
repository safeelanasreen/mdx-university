import React from "react";
import Style from "../CourseOverView.module.scss";

const CourseOverViewList = () => {
  return (
    <div className={Style.course_overview_list}>
      <div className={Style.course_overview_list_item}>
        <div className={Style.course_overview_list_item_title}>
          Start on september
        </div>
        <div className={Style.course_overview_list_item_content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s,
        </div>
      </div>
      <div className={Style.course_overview_list_item}>
        <div className={Style.course_overview_list_item_title}>
          Start on september
        </div>
        <div className={Style.course_overview_list_item_content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s,
        </div>
      </div>
      <div className={Style.course_overview_list_item}>
        <div className={Style.course_overview_list_item_title}>
          Start on september
        </div>
        <div className={Style.course_overview_list_item_content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s,
        </div>
      </div>
    </div>
  );
};

export default CourseOverViewList;
