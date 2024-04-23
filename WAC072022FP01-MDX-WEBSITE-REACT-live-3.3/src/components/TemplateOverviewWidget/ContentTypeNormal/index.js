import Style from "./ContentTypeNormal.module.scss";
import Image from "next/image";
import Icons from "../../Layout/Icons";
import { useState } from "react";
import { getImageUrl } from "../../../apis";

const ContentTypeNormal = ({ props }) => {
  const parse = require("html-react-parser");
  const [isBodyReadMore, setIsBodyReadMore] = useState(true);

  function bodyreadmoreclick(e) {
    e.preventDefault();
    setIsBodyReadMore(isBodyReadMore !== true);
  }

  return (
    <div className={Style.template_overview_widget_body_wrap}>
      <div className={Style.w_lg_50}>
        <h3 className="h6 text-bold">{props?.title}</h3>
      </div>
      <div
        className={`
      ${Style.template_overview_widget_body_content} 
      ${isBodyReadMore ? Style.template_overview_widget_body_show_less : ""}
      `}
      >
        {parse(props?.content)}
      </div>

      <button
        className={`btn btn-link ${Style.read_more_btn}`}
        onClick={bodyreadmoreclick}
      >
        {isBodyReadMore ? <>Read More</> : <>Show Less</>}{" "}
        <Icons icon="arrow-top-right-long" size="11" />
      </button>

      {props?.image && (
        <div className={`${Style.img_wrap}`}>
          <Image
            layout="fill"
            objectFit="cover"
            src={getImageUrl(props?.image)}
            alt={props?.title}
          />
        </div>
      )}
    </div>
  );
};

export default ContentTypeNormal;
