import Toolbar from "../../ToolbarNew";
// import Footer from "./Footer";
// import Menu from "./Menu";
import FooterNew from "./FooterNew";
import MenuNew from "./MenuNew";
import AlumniMenu from "../AlumniLayout/AlumniMenu";
import AlumniFooter from "../AlumniLayout/AlumniFooter";
import { useWindowSize } from "../../../logic/useDimension";
import GoogleTranslate from "../../GoogleTranslate";
import WebSurvey from "../../WebSurvey";
import { useState, useEffect } from "react";

const CommonLayout = ({ children, props, linksEnabled }) => {
  const { width } = useWindowSize();
  const [showSurveyModal, setShowSurveyModal] = useState(false);

  const [expand, setExpand] = useState(true);

  const toolbarHiddenPages = Object.keys(props?.data || {}).includes("cta_enabled")
    ? props?.data?.cta_enabled
    : true;

  const footerHiddenPages = Object.keys(props?.data || {}).includes("enable_footer")
    ? !props?.data?.enable_footer
    : false;
  function scroll() {
    if (typeof window !== "undefined") {
      if (window.scrollY < 20) {
        setExpand(false);
      } else {
        setExpand(true);
      }
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scroll, { passive: true });
  }
  useEffect(() => {
    scroll();
  }, []);
  return (
    <>
      <div className="translate">
        <GoogleTranslate />
      </div>
      {/* <Cursor /> */}
      {props?.menu?.data?.[0]?.attributes?.slug == "alumni_header" ? (
        <AlumniMenu props={props?.menu} />
      ) : (
        // <Menu
        //   linksEnabled={
        //     Object.keys(props?.data || {}).includes("enable_header")
        //       ? props?.data?.enable_header
        //       : true
        //   }
        //   props={props?.menu}
        //   toolbarHiddenPages={toolbarHiddenPages}
        //   data={props?.data}
        // />
        <MenuNew
        linksEnabled={
          Object.keys(props?.data || {}).includes("enable_header")
            ? props?.data?.enable_header
            : true
        }
        props={props?.menu}
        toolbarHiddenPages={toolbarHiddenPages}
        data={props?.data}
      />
      )}
      {width >= 1200 && toolbarHiddenPages ? (
        <Toolbar
          props={props?.menu?.cta_components}
          enableSurvey={props?.data?.enable_survey}
          setModal={setShowSurveyModal}
        />
      ) : (
        ""
      )}
      {props?.data?.enable_survey ? (
        <WebSurvey
          props={props?.menu}
          openModal={showSurveyModal}
          setModal={setShowSurveyModal}
          expand={expand}
        />
      ) : (
        ""
      )}

      {children}
      {props?.menu?.data?.[0]?.attributes?.slug == "alumni_header" ? (
        <AlumniFooter props={props?.menu} />
      ) : // <Footer props={props?.footer} />

      !footerHiddenPages ? (
        <FooterNew props={props?.menu} />
      ) : (
        <FooterNew props={{ copyright: { data1: props?.menu?.copyright?.data1 } }} />
      )}
    </>
  );
};

export default CommonLayout;
