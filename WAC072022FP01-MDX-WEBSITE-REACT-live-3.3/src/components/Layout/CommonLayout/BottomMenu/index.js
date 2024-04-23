import Image from "next/image";
import Link from "next/link";

import Icons from "../../Icons";
import Style from "./BottomMenu.module.scss";
import Assets from "../assets";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BottomMenu = ({ toolbarHiddenPages, bottom_menu }) => {
  const [tool, setTool] = useState(true);
  const [activeBtn, setActiveBtn] = useState(true);
  const [toolClass, setToolClass] = useState(Style.scroll_start);
  const toolRef = useRef();
  const toolRefParent = useRef();
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= document.querySelector("body").scrollHeight - (screen.height + 10)) {
        setActiveBtn(false);
      } else {
        setActiveBtn(true);
      }
    });
  }, []);

  const handleToggleShow = () => {
    if (!tool || !activeBtn) {
      setTool(true);
      setActiveBtn(true);
    } else {
      setTool(false);
      setActiveBtn(false);
    }
  };

  const handleScroll = (e) => {
    const toolwrap = toolRef.current;
    let toolScroll = toolwrap.scrollLeft;
    const toolWidth = toolwrap.scrollWidth - toolwrap.clientWidth;
    if (toolScroll == toolWidth) {
      setToolClass(Style.scroll_end);
    } else if (toolScroll < toolWidth - 10 && toolScroll > 10) {
      setToolClass(Style.scroll_both);
    } else if (toolScroll < 10) {
      setToolClass(Style.scroll_start);
    }
  };

  const footerHiddenPages = [
    `/september-2022`,
    `/gcc`,
    `/September-2022-ifp`,
    `/india-nepal-srilanka`,
    `/september2022`,
    `/pakistan-afghanistan`,
    `/africa`,
    `/aptech-2022-campaigns`,
    `/book-your-open-day`,
    `/complete-your-application`,
    `/prospective-students/clearing-september-2022`,
    `/aurifer-gcc-tax-course`,
    `/row`,
  ];

  return (
    !footerHiddenPages.includes(`/${router.asPath.split("/")?.[1]}`) && (
      <>
        {toolbarHiddenPages && (
          <div
            className={`${Style.tool_wrap} ${toolClass} ${
              tool ? (activeBtn ? Style.tool_wrap_open : "") : ""
            }`}
            ref={toolRefParent}
          >
            <div
              className={`${Style.toolbar_mobile} `}
              ref={toolRef}
              onScroll={(e) => handleScroll(e)}
            >
              {bottom_menu?.map((value, index) => {
                return (
                  <Link
                    href={value?.link || ""}
                    className={Style.tool_link}
                    key={index}
                    onClick={() => {
                      ga("send", "event", {
                        eventCategory: value?.event?.eventCategory,
                        eventAction: value?.event?.eventAction,
                        eventLabel: value?.event?.eventLabel,
                        eventValue: value?.event?.eventValue,
                      });
                    }}
                  >
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      href={value?.link}
                      className={Style.tool_link}
                    >
                      <span className={Style.tool_icon}>
                        <Image
                          src={
                            value.img?.indexOf("://") === -1
                              ? `https://api.mdx.ac.ae${value?.img}`
                              : value.img
                          }
                          alt={"title"}
                          width="13"
                          height="13"
                        />
                      </span>
                      <span className={Style.tool_label}>{value?.text}</span>
                    </a>
                  </Link>
                );
              })}

              {/* <Link href="/enquire-us">
                <a className={Style.tool_link}>
                  <span>
                    <Image src={Assets.icon_hand} alt={"title"} width="16" height="16" />
                  </span>
                  Enquire Now
                </a>
              </Link>
              <Link href="/call-back">
                <a className={Style.tool_link}>
                  <span>
                    <Image src={Assets.icon_call} alt={"title"} width="16" height="16" />
                  </span>
                  Request Call
                </a>
              </Link>
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=971545825975&text&type=phone_number&app_absent=0"
                }
              >
                <a target={"_blank"} className={Style.tool_link}>
                  <span>
                    <Image src={Assets.icon_whatsapp} alt={"title"} width="16" height="16" />
                  </span>
                  Whatsapp
                </a>
              </Link>
              <Link href={"/opendays"}>
                <a target={"_blank"} className={Style.tool_link}>
                  <span>
                    <Image src={Assets.icon_openday} alt={"title"} width="16" height="16" />
                  </span>
                  Open Days
                </a>
              </Link> */}
            </div>
          </div>
        )}
        <nav className={`${Style.bottom_menu} fixed-bottom`}>
          <ul>
            <li className={router.asPath == "/" ? Style.active : ""}>
              <Link href="/">
                <a>
                  <span>
                    <Icons icon={"home"} size={35} />
                  </span>
                  Home
                </a>
              </Link>
            </li>
            <li className={router.asPath == "/study" ? Style.active : ""}>
              <Link href="/study">
                <a>
                  <span>
                    {" "}
                    <Icons icon={"courses"} size={35} />
                  </span>
                  Courses
                </a>
              </Link>
            </li>
            <li className={router.asPath == "/contact-us" ? Style.active : ""}>
              <Link href="/contact-us">
                <a>
                  <span>
                    {" "}
                    <Icons icon={"contact-icon"} size={25} />
                  </span>
                  Contact Us
                </a>
              </Link>
            </li>
            {toolbarHiddenPages && (
              <li className={tool ? (activeBtn ? Style.active : "") : ""}>
                <button onClick={handleToggleShow}>
                  <span>
                    <Icons icon={"easy-access-icon"} size={35} />
                  </span>
                  Connect
                </button>
              </li>
            )}
          </ul>
        </nav>
      </>
    )
  );
};

export default BottomMenu;
