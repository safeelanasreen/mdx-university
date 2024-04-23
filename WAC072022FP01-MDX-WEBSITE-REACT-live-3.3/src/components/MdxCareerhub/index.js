import Image from "next/image";
import { getImageUrl } from "../../apis";
import Style from "./MdxCareerhub.module.scss";

const MdxCareerhub = ({ props }) => {
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
      } ${props?.data?.no_spacing?.top && "pt-0"} ${props?.data?.no_spacing?.bottom && "pb-0"} ${
        props?.data?.no_spacing?.left && "ps-0"
      }  ${props?.data?.no_spacing?.right && "pe-0"}`}
      style={{
        "--background-color": props?.data?.background ? props?.data?.background : "#EAEAEA",
        "--text-color": props?.data?.text_color ? props?.data?.text_color : "var(--text-color)",
      }}
    >
      <div
        className={`${Style.container} ${
          props?.data?.container ? "container-fluid" : "container"
        } ${props?.data?.no_spacing?.all ? "px-0 py-0" : props?.data?.no_spacing?.x ? "px-0" : ""}`}
      >
        <div className={`row ${Style.section_row}`}>
          <div className={`${Style.col_img} ${props?.data?.content?.length > 0 ? "" : "col-100"}`}>
            <figure className={`mb-0 ratio ${Style.figure}`}>
              <Image
                src={getImageUrl(props?.data?.background_image)}
                layout="fill"
                objectFit="cover"
                alt="Careers hub"
              />
            </figure>
          </div>
          <div
            className={`${Style.col_content} ${
              props?.data?.background_image?.length > 0 ? "" : "col-100"
            }`}
          >
            {props?.data?.sub_title ? (
              <h4 className="section-title_sub">{props?.data?.sub_title}</h4>
            ) : (
              ""
            )}
            {props?.data?.main_title && (
              <h2 className={`title section-title mb-3  ${Style.section_title}`}>
                {props?.data?.main_title}
              </h2>
            )}
            {props?.data?.content && parse(props?.data?.content)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MdxCareerhub;
