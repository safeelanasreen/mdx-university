import { useEffect, useState, useRef } from "react";
import AlphaRange from "../AlphaRange";
import AlphabetCard from "../cards/AlphabetCard";
import Style from "./AlphaRangeWidget.module.scss";

import ScrollSpy from "react-ui-scrollspy";
import WebSurvey from "../WebSurvey";

const AlphaRangeWidget = ({ props }) => {
  const [scroll, setScroll] = useState(false);
  const sectionheadRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let getPos = sectionheadRef.current?.getBoundingClientRect()?.top;
      let headerH = document.querySelector("header").getBoundingClientRect()?.height;
      if (getPos <= headerH) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClassChange = (id) => {
    document.getElementById("scrollbar").scrollLeft = Math.floor(
      document.querySelectorAll(".active-scroll-spy")[0].offsetLeft - 50
    );
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 33 || e.keyCode === 34 || e.keyCode === 35 || e.keyCode === 36) {
      e.preventDefault();
    }
  };

  return (
    <>
      <section className={Style.section}>
        <div
          className={`${Style.section_head} ${scroll ? Style.section_head_fixed : ""}`}
          ref={sectionheadRef}
        >
          <div className="container" onKeyDown={(e) => handleKeyDown(e)}>
            <AlphaRange props={props?.data} />
          </div>
        </div>
        <div className={Style.section_body}>
          <div className="container">
            <ScrollSpy updateHistoryStack={false} onUpdateCallback={(id) => handleClassChange(id)}>
              {props?.data?.data?.contents?.map((data, i) => {
                return <AlphabetCard key={i} props={data} />;
              })}
            </ScrollSpy>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlphaRangeWidget;
