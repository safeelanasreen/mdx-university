import Image from "next/image";
import Style from "./MdxIndustryExp.module.scss";
import { getImageUrl } from "../../apis";

const MdxIndustryExp = ({ props }) => {
  const dark = props?.dark;
  const large = props?.large;

  const parse = require("html-react-parser");

  return (
    <section
      id={props?.data?.scrollID || ""}
      className={`${Style.section} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      } ${props?.data?.no_spacing?.top && "pt-0"} ${
        props?.data?.no_spacing?.bottom && "pb-0"
      } ${props?.data?.no_spacing?.left && "ps-0"}  ${
        props?.data?.no_spacing?.right && "pe-0"
      }`}
      style={{
        "--background-color": props?.data?.background
          ? props?.data?.background
          : "transparent",
        "--text-color": props?.data?.text_color
          ? props?.data?.text_color
          : "var(--text-color)",
      }}
    >
      <figure
        className={`m-0 w-100 h-100 position-absolute ${Style.section_bg}`}
      >
        <Image
          src={
            props?.data?.background_image?.indexOf("://") === -1
              ? getImageUrl(props?.data?.background_image ? props?.data?.background_image : "")
              : props?.data?.background_image
          }
          layout="fill"
          objectFit="cover"
          alt="INDUSTRY EXPERIENCE"
        />
      </figure>
      <div
        className={`${Style.container} ${
          props?.data?.container ? "container-fluid" : "container"
        } ${
          props?.data?.no_spacing?.all
            ? "px-0 py-0"
            : props?.data?.no_spacing?.x
            ? "px-0"
            : ""
        }`}
      >
        {props?.data?.sub_title ? (
          <div
            className={`text-white ${
              props?.data?.no_spacing?.x ? "container-fluid" : ""
            }`}
          >
            <h4 className="section-title_sub">{props?.data?.sub_title}</h4>
          </div>
        ) : (
          ""
        )}

        <div className="text-white ">
          <h2 className={`title section-title mb-3 ${Style.section_title}`}>
            {props?.data?.main_title}
          </h2>
        </div>
        <div className={`text-white ${Style.section_content}`}>
          {parse(props?.data?.content)}
        </div>
      </div>
    </section>
  );
};

export default MdxIndustryExp;
