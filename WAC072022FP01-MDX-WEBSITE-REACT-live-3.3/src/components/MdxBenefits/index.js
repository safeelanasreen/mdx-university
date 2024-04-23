import CourseCountCard from "../cards/CourseCountCard";
import Style from "./MdxBenefits.module.scss";

const MdxBenefits = ({ props }) => {
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
        className={`${props?.data?.container ? "container-fluid" : "container"} ${
          props?.data?.no_spacing?.all ? "px-0 py-0" : props?.data?.no_spacing?.x ? "px-0" : ""
        }`}
      >
        {/* {props?.data?.sub_title || props?.data?.main_title ? (
          <div className={props?.data?.no_spacing?.x ? "container-fluid" : ""}>
            <h4 className="section-title_sub">{props?.data?.sub_title || props?.data?.main_title}</h4>
          </div>
        ) : (
          ""
        )}
        {props?.data?.title ? (
          <div className={props?.data?.no_spacing?.x ? "container-fluid" : ""}>
            <h2 className="title title-sm mb-3">{props?.data?.title}</h2>
          </div>
        ) : (
          ""
        )} */}
        <div className={props?.data?.no_spacing?.x ? "container-fluid" : ""}>
          {props?.data?.sub_title ? (
            <div className={props?.data?.no_spacing?.x ? "container-fluid" : ""}>
              <h4 className="section-title_sub">{props?.data?.sub_title}</h4>
            </div>
          ) : (
            ""
          )}
          <h2 className="title section-title mb-3">{props?.data?.title}</h2>
          <div className={`row ${Style.benefits_row}`}>
            <div className={`col-lg-3 ${props?.data?.cards?.length > 0 ? "" : "col-100"}`}>
              <h3 className={Style.benefits_title}>{props?.data?.main_title}</h3>
            </div>
            <div className={`col-lg-9 ${props?.data?.main_title?.length > 0 ? "" : "col-100"}`}>
              <div className={Style.benefits_stack}>
                <div
                  className={`row row-cols-sm-2 row-cols-md-3  row-cols-lg-2 row-cols-xl-3 ${Style.row}`}
                >
                  {props?.data?.cards?.map((data, index) => {
                    return (
                      <>
                        <div key={index}>
                          <CourseCountCard props={data} />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MdxBenefits;
