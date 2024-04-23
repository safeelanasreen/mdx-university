import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import Form from "../Form";
import JotForm from "../JotForm";
import Style from "./RichTextWidget.module.scss";
import Script from "next/script";
import ScriptWidget from "../ScriptWidget";

const RichTextWidget = ({ props }) => {
  const parse = require("html-react-parser");
  const adminRef = useRef();
  const Router = useRouter();

  useEffect(() => {
    if (props?.data?.content != "") {
      let nodes = adminRef?.current?.getElementsByTagName("*") || [];
      for (var i = 0; i < nodes.length; i++) {
        nodes[i]?.removeAttribute("style");
      }
    }
  }, [props?.data?.content]);

  useEffect(() => {
    const handleRouteEnd = (url, { shallow }) => {
      if (Router.asPath === "/getex2023" && typeof window !== undefined) {
        window.location.reload();
      }
    };

    Router.events.on("routeChangeComplete", handleRouteEnd);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteEnd);
    };
  }, []);
  return props?.data?.content ? (
    <>
      <section
        id={props?.data?.scrollID ? props?.data?.scrollID : ""}
        className={`admin-content-area ${props?.data?.course ? Style.mdx_admin_area_course : ""} ${
          Style.mdx_admin_area
        } ${Router.asPath.split("#")?.[0] == "/scholarship-and-grants" ? "sidebar" : ""} ${
          props?.data?.theme ? props?.data?.theme : ""
        } ${
          props?.data?.no_spacing?.all
            ? "no_space"
            : props?.data?.no_spacing?.top
            ? "no_space_top"
            : props?.data?.no_spacing?.bottom
            ? "no_space_bottom"
            : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className={`${props?.data?.form_type ? "col-lg-8 order-2 order-lg-1" : "col-12"}`}>
              <div
                className={
                  props?.data?.fill || props?.data?.course ? "fill" : Style.short_container
                }
                ref={adminRef}
              >
                {props?.data?.content_title ? (
                  props?.data?.content_title != "" ? (
                    <h2 className={`${props?.data?.course ? "title section-title mb-3" : ""}`}>
                      {parse(props?.data?.content_title)}{" "}
                    </h2>
                  ) : (
                    !props?.data?.form_type && (
                      <h2 className={`${props?.data?.course ? "title section-title mb-3" : ""}`}>
                        {props?.data?.title && parse(props?.data?.title)}
                      </h2>
                    )
                  )
                ) : (
                  !props?.data?.form_type && (
                    <h2 className={`${props?.data?.course ? "title section-title mb-3" : ""}`}>
                      {props?.data?.title && parse(props?.data?.title)}
                    </h2>
                  )
                )}
                {props?.data?.content ? parse(props?.data?.content) : ""}
              </div>
            </div>
            {props?.data?.form_type ? (
              <div className="col-lg-4 order-1 order-lg-2">
                <div className={Style.form}>
                  <h3>{props?.data?.title ? props?.data?.title : ""}</h3>
                  <div className={Style.form_body}>
                    {props?.data?.form_type === "hbspot_form" ? (
                      <Form formID={props?.data?.form_src} />
                    ) : (
                      <JotForm src={props?.data?.form_src} />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  ) : (
    <></>
  );
};

export default RichTextWidget;
