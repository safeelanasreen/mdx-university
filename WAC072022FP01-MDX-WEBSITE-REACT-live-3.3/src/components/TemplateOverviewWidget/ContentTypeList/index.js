import Style from "./ContentTypeList.module.scss";

import Icons from "../../Layout/Icons";
import { useState } from "react";
import ListItem from "../../cards/ListItem";

const ContentTypeList = ({ props }) => {
  const [isListReadMore, setIsListReadMore] = useState(true);

  function listreadmoreclick(e) {
    e.preventDefault();
    setIsListReadMore(isListReadMore !== true);
  }

  return (
    <div
      className={`${Style.template_overview_widget_body_list}
      ${
        isListReadMore ? Style.template_overview_widget_body_list_show_less : ""
      }
    `}
    >
      <ListItem props={props?.data} />
      <button
        className={`btn btn-link ${Style.read_more_btn}`}
        onClick={listreadmoreclick}
      >
        {isListReadMore ? <>Read More</> : <>Show Less</>}{" "}
        <Icons icon="arrow-top-right-long" size="11" />
      </button>
    </div>
  );
};

export default ContentTypeList;
