import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getImageUrl } from "../../apis";

import Assets from "../Layout/CommonLayout/assets";
import Style from "./Toolbar.module.scss";

const Toolbar = ({ props }) => {
  const [dark, setDark] = useState(false);
  const [expand, setExpand] = useState(false);
  const [toolbar, setToolbar] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
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

        {props?.map((value, i) => (
          <div className={Style.btn_wrap} key={i}>
            <a target={"_blank"} rel="noreferrer" href={value?.link}>
              <button
                className={`${Style.button} ${Style.button_theme}`}
                onClick={() => {
                  ga("send", "event", {
                    eventCategory: value?.event?.eventCategory,
                    eventAction: value?.event?.eventAction,
                    eventLabel: value?.event?.eventLabel,
                    eventValue: value?.event?.eventValue,
                  });
                }}
              >
                <span className={Style.btn_icon}>
                  <Image
                    src={
                      value.img?.indexOf("://") === -1
                        ? `https://api.mdx.ac.ae${value?.img}`
                        : value.img
                    }
                    alt={"title"}
                    width="26"
                    height="26"
                  />{" "}
                </span>
                <span className={Style.btn_text}>{value?.text}</span>
              </button>
            </a>
          </div>
        ))}

        {/* <div className={Style.btn_wrap}>
          <button className={`${Style.button} ${Style.button_theme}`}>
            <span className={Style.btn_icon}>
              <Image
                src={Assets.icon_msg}
                alt={"title"}
                width="26"
                height="26"
              />
            </span>
            <span className={Style.btn_text}>Chat Now</span>
          </button>
        </div>
        <div className={`text-end ${Style.btn_wrap}`}>
          <button className="btn btn-pink">Let&apos;s Talk</button>
        </div> */}
      </div>
    </div>
  );
};

export default Toolbar;
