import Style from "./Grid.module.scss";
import NewsCard from "../../cards/NewsCard";
import ComponentFuncTwo from "../../componentsTwo";

const Grid = ({ props }) => {
  return (
    <section
      id={props?.data?.scrollID || ""}
      className={`${Style.grid} ${
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
        "--background-color": props?.data?.background
          ? props?.data?.background
          : "var(--background-color)",
        "--text-color": props?.data?.text_color ? props?.data?.text_color : "var(--text-color)",
      }}
    >
      <div
        className={`${props?.data?.container ? "container" : "container-fluid"} ${
          props?.data?.no_spacing?.all ? "px-0 py-0" : props?.data?.no_spacing?.x ? "px-0" : ""
        }`}
      >
        {props?.data?.sub_title || props?.data?.main_title ? (
          <div className={props?.data?.no_spacing?.x ? "container-fluid" : ""}>
            <h4 className="title_sub">{props?.data?.sub_title || props?.data?.main_title}</h4>
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
        )}
        <div className={`row ${props?.data?.no_gutter ? "gx-0" : ""}`}>
          {props?.data?.columns?.map((value, index) => {
            const columnSm = value?.column_no <= 2 ? 6 : `${12} order-sm-1 order-md-unset`;
            const columnMd = value?.column_no >= 5 ? `${12} order-md-1` : 6;
            const columnLg = value?.column_no >= 5 ? `${12} order-lg-1 order-xl-unset` : 6;
            const columnBg = value?.background_color ? value?.background_color : "transparent";
            const columnText = value?.text_color ? value?.text_color : "#000";
            return (
              <div
                className={`col-bg col-12 col-xs-12 col-sm-${columnSm} col-md-${columnMd} col-lg-${columnLg} col-xl-${value?.column_no}`}
                key={index}
                style={{ "--column-bg": columnBg, "--column-text": columnText }}
              >
                <div className={Style.grid_column}>
                  {value?.widgets?.map((block) => ComponentFuncTwo(block))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Grid;
