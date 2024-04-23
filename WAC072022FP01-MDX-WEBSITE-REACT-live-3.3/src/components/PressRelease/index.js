import { useEffect, useState } from "react";
import Style from "./PressRelease.module.scss";
import RecentStackWidget from "../RecentStackWidget";
import AnnouncementsWidget from "../AnnouncementsWidget";
import AboutPressOffice from "../AboutPressOffice";
import Icons from "../Layout/Icons";
import Link from "next/link";
import { useWindowSize } from "../../logic/useDimension";
import ScrollSpy from "react-ui-scrollspy";

const PressRelease = ({ props }) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setClient(true);
    }
  }, []);

  const { width } = useWindowSize();

  const handleClassChange = (id) => {
    document.getElementById("scrollbar").scrollLeft = Math.floor(
      document.querySelectorAll(".active-scroll-spy")[0].offsetLeft - 50
    );
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    if (typeof window !== undefined) {
      let target = document.getElementById(id);
      window.scrollTo(window.scrollX, target.offsetTop - 120);
    }
  };

  return (
    <div className={Style.sidebar_layout}>
      <aside className={Style.sidebar_layout_sidebar}>
        <div className={Style.sidebar_layout_sidebar_view}>
          {width > 1200 ? (
            <h2 className={Style.sidebar_layout_sidebar_title}>{props?.data?.sidebar_title}</h2>
          ) : (
            ""
          )}
          <ul id="scrollbar">
            {props?.data?.scrollbar_links?.map((item, index) => (
              <li key={index}>
                <a data-to-scrollspy-id={item} onClick={(e) => handleLinkClick(e, item)}>
                  {item}
                  <span>
                    <Icons icon="arrow-top-right-long" size={14} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          {width > 1200 ? (
            <>
              <div className={Style.sidebar_layout_sidebar_follow}>
                <div className={Style.title}>{props?.data?.sidebar_social_media_title}</div>
                <ul>
                  {props?.data?.media_icons?.map((media, index) => (
                    <li key={index}>
                      <Link href={media?.link}>
                        <a target={"_blank"} rel={"nofollow noopener"}>
                          <span>
                            <Icons icon={media?.icon_img} size={20} />
                          </span>
                          {media?.icon_name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={Style.sidebar_layout_sidebar_subscribe}>
                {/* <div className={Style.title}>{props?.data?.sidebar_desc}</div>
                <Link href={props?.data?.sidebar_button_link}>
                  <button className="btn btn-primary">{props?.data?.sidebar_button_text} </button>
                </Link> */}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </aside>
      <div className={Style.sidebar_layout_right}>
        {client && (
          <ScrollSpy updateHistoryStack={false} onUpdateCallback={(id) => handleClassChange(id)}>
            <RecentStackWidget props={props?.data?.recent_stack_widget} />
            <AnnouncementsWidget props={props?.data?.announcements_widget} />
            <AboutPressOffice props={props?.data?.about_widget} />
          </ScrollSpy>
        )}
        {width < 1200 ? (
          <div className="container-fluid">
            <div className={Style.sidebar_layout_sidebar_follow}>
              <div className={Style.title}>{props?.data?.sidebar_social_media_title}</div>
              <ul>
                {props?.data?.media_icons?.map((media, index) => (
                  <li key={index}>
                    <Link href={"/"}>
                      <a target={"_blank"} rel={"nofollow noopener"}>
                        <span>
                          <Icons icon={media?.icon_img} size={20} />
                        </span>
                        {media?.icon_name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={Style.sidebar_layout_sidebar_subscribe}>
              <div className={Style.title}>{props?.data?.sidebar_desc}</div>
              <Link href={props?.data?.sidebar_button_link}>
                <button className="btn btn-primary">{props?.data?.sidebar_button_text}</button>
              </Link>{" "}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PressRelease;
