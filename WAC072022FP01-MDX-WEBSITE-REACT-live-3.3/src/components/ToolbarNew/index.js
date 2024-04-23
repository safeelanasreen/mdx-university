import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getImageUrl } from "../../apis";

import Assets from "../Layout/CommonLayout/assets";
import Style from "./ToolbarNew.module.scss";

const PRODUCTION = process.env.APP_PRODUCTION;

const URL = PRODUCTION === true ? process.env.BASE_URL : process.env.BASE_URL_WEBC;

const Toolbar = ({ props, setModal, enableSurvey }) => {
  const [expand, setExpand] = useState(false);
  const [toolbar, setToolbar] = useState(false);
  const [toolBtnPos, setToolBtnPos] = useState(toolBtnPos);
  const [btnIndex, setbtnIndex] = useState(0);

  const handleExpand = () => {
    setExpand(!expand);
  };
  const handleTool = (e, i) => {
    setToolBtnPos(e.target.offsetTop);
    setbtnIndex(i);
  };

  function scroll() {
    if (typeof window !== "undefined") {
      if (window.scrollY < 20) {
        setExpand(true);
        setToolbar(false);
      } else {
        setExpand(false);
        setToolbar(true);
      }
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scroll, { passive: true });
  }
  useEffect(() => {
    scroll();
  }, []);

  const handleClickmodal = () => {
    setModal(true);
  };

  return (
    <div className={Style.toolbar}>
      {/* <button className={`${Style.btn} ${Style.btn_theme} `} onClick={() => handleDark()}>
                <Image src={Assets.icon_theme} alt={"title"} width="39" height="39" />
            </button> */}
      {/* 
            <button className={`${Style.btn} ${Style.btn_disabled}`}>
                <Image src={Assets.icon_disabled} alt={"title"} width="31" height="36" />
            </button> */}

      <button
        className={`${Style.btn} ${!toolbar ? Style.hide : ""}  ${
          expand ? Style.btn_expand_open : ""
        }  ${Style.btn_expand}`}
        onClick={() => handleExpand()}
      >
        {/* <Image src={Assets.icon_expand} alt={"title"} width="35" height="20" /> */}
        <div className={Style.expand_wrap}>
          <i className={Style.expand_wrap_top}></i>
          <i className={Style.expand_wrap_bottom}></i>
        </div>
      </button>

      <div
        className={`${Style.btn_group} ${expand ? Style.btn_group_expanded : ""}
        `}
      >
        {/* ${Style.btn_group_slim} */}
        {/*  */}

        <span
          className={`${Style.active_shape} color_${btnIndex + 1} ${
            expand ? Style.show_shape : ""
          }`}
          style={{
            "--top-value": toolBtnPos ? `${toolBtnPos}px` : "4px",
          }}
        ></span>

        {props?.map((value, i) => (
          <div className={Style.btn_wrap} key={i}>
            {value?.text === "Feedback" && enableSurvey === true ? (
              <button
                className={`${Style.button} ${Style.button_theme}`}
                onClick={() => {
                  ga("send", "event", {
                    eventCategory: value.event.eventCategory,
                    eventAction: value.event.eventAction,
                    eventLabel: value.event.eventLabel,
                    eventValue: value.event.eventValue,
                  });
                  handleClickmodal();
                }}
                onMouseEnter={(e) => {
                  handleTool(e, i);
                }}
                onFocus={(e) => {
                  handleTool(e, i);
                }}
              >
                <span className={Style.btn_text}>{value.text}</span>
                <span className={Style.btn_icon}>
                  <Image
                    src={value.img?.indexOf("://") === -1 ? `${URL}${value.img}` : value.img}
                    alt={"title"}
                    width="26"
                    height="26"
                  />
                </span>
              </button>
            ) : value?.text !== "Feedback" ? (
              <a target={"_blank"} rel="noreferrer" href={value.link}>
                <button
                  className={`${Style.button} ${Style.button_theme}`}
                  onClick={(e) => {
                    ga("send", "event", {
                      eventCategory: value.event.eventCategory,
                      eventAction: value.event.eventAction,
                      eventLabel: value.event.eventLabel,
                      eventValue: value.event.eventValue,
                    });
                    handleClickmodal(e);
                  }}
                  onMouseEnter={(e) => {
                    handleTool(e, i);
                  }}
                  onFocus={(e) => {
                    handleTool(e, i);
                  }}
                >
                  <span className={Style.btn_text}>{value.text}</span>
                  <span className={Style.btn_icon}>
                    <Image
                      src={value.img?.indexOf("://") === -1 ? `${URL}${value.img}` : value.img}
                      alt={"title"}
                      width="26"
                      height="26"
                    />
                  </span>
                </button>
              </a>
            ) : null}
          </div>
        ))}

        {/* <div className={Style.btn_wrap}><button className={`${Style.button} ${Style.button_theme}`}><span className={Style.btn_icon}><Image src={Assets.icon_msg} alt={"title"} width="26" height="26"/></span><span className={Style.btn_text}>Chat Now</span></button></div><div className={`text-end ${Style.btn_wrap}`}><button className="btn btn-pink">Let&apos;s Talk</button></div> */}
      </div>
    </div>
  );
};

export default Toolbar;
