import { useEffect, useRef } from "react";
import Style from "./RequirementsTable.module.scss";

const RequirementsTable = ({ props }) => {
  const parse = require("html-react-parser");
  const adminRef = useRef();

  useEffect(() => {
    if (props) {
      let nodes = adminRef?.current?.getElementsByTagName("*");
      for (var i = 0; i < nodes?.length; i++) {
        nodes[i]?.removeAttribute("style");
      }
    }
  }, [props]);

  return (
    <>
      {props?.data?.requirement_title && (
        <section
          id={props?.data?.scrollID ? props?.data?.scrollID : ""}
          className={`admin-content-area mdx-table ${Style.mdx_admin_area}`}
        >
          <div className="container-fluid">
            <h2 className="title title-sm">{props?.data?.requirement_title}</h2>
            <div className="row" ref={adminRef}>
              <div
                className={`${props?.data?.form_type ? "col-lg-8" : "col-12"}`}
              >
                {props?.data?.requirements_table_data?.map((table, index) => (
                  <span key={index}>
                    {parse(table?.table_description)}
                    <div className={Style.short_container}>
                      {parse(table?.table_content || "")}
                    </div>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}{" "}
    </>
  );
};

export default RequirementsTable;
