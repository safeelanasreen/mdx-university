import Link from "next/link";
import Icons from "../Layout/Icons";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./VideoTextComponent.module.scss";
import { getImageUrl } from "../../apis";
import { useRef } from "react";
import { useState, useEffect } from "react";
const VideoTextComponent = (props) => {
  const videoRef = useRef(null);
  const [video, setVideo] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setVideo(true);
  //   }, 10);
  // }, []);

  return (
    <section
      className={`${Style.video_text_section} ${video ? Style.loaded : ""}`}
    >
      <div className="container">
        <div
          className={`row justify-content-between align-items-center ${Style.wrapper}`}
        >
          <div className="col-lg-5">
            <div className={Style.video_wrap}>
              {props?.props?.data?.video?.video_url && (
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  className={Style.video}
                  ref={videoRef}
                  poster={
                    props?.props?.data?.video?.poster?.url &&
                    props?.props?.data?.video?.poster?.url
                  }
                >
                  <source
                    src={getImageUrl(props?.props?.data?.video?.video_url)}
                    type="video/mp4"
                  />
                </video>
              )}
            </div>
          </div>
          <div className={`col-lg-6 ${Style.item_right}`}>
            <div className={Style.content_wrap}>
              <div className={Style.ttl_wrap}>
                <h2 className="title_sub">{props?.props?.data?.main_title}</h2>
                <h3 className="title mb-0">{props?.props?.data?.title}</h3>
              </div>
              <div className={Style.link_wrap}>
                <ul className="d-md-flex flex-md-wrap">
                  {props?.props?.data?.links?.map((item, i) => {
                    return (
                      <>
                        <li>
                          <Link href={item?.url || ""}>
                            <a>
                              <span> {item?.title}</span>
                              <span className="d-md-none">
                                <Icons icon={"arrow-right"} size={12} />
                              </span>
                            </a>
                          </Link>
                          <span
                            className={`d-none d-md-inline-block ${Style.slash}`}
                          >
                            /
                          </span>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
              {props?.props?.data?.button &&
                props?.props?.data?.button?.title && (
                  <div className={Style.btn_wrap}>
                    <Link
                      href={props?.props?.data?.button?.url || ""}
                      target={props?.props?.data?.button?.target}
                    >
                      <a className="d-block">
                        <button className="btn btn-dark-border">
                          {props?.props?.data?.button?.title}
                        </button>
                      </a>
                    </Link>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VideoTextComponent;
