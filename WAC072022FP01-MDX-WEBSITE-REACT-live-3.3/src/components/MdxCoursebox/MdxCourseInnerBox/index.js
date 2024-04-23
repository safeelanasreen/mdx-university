import Image from "next/image";
import React, { useRef, useState } from "react";
import { getImageUrl } from "../../../apis";
import Icons from "../../Layout/Icons";
import Style from "../MdxCoursebox.module.scss";

const MdxCourseInnerBox = ({ props }) => {
  const cardData = props?.data?.length
    ? props?.data
    : props?.data
    ? [props?.data]
    : props?.length
    ? props
    : [props];

  const parse = require("html-react-parser");
  const [isReadMore, setIsReadMore] = useState(true);
  const [play, setPlay] = useState(false);

  const videoRef = useRef(null);
  const handlePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  };
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      {cardData?.map((data, index) => {
        return (
          <div className={Style.tabs_results_box} key={index}>
            <div className={`row gx-0 ${Style.box}`}>
              <div
                className={`col-lg-5 ${Style.box_media} ${
                  data?.content?.length > 0 ? "" : "col-100"
                } `}
              >
                <div className={`position-relative ${Style.box_media_vedio}`}>
                  <div className="fill-link visible">
                    <button
                      className={`${Style.box_media_play} ${
                        play && Style.box_media_playing
                      } position-absolute`}
                      onClick={handlePlay}
                    >
                      {play ? (
                        <Icons icon="pause" size={32} />
                      ) : (
                        <Icons icon="play2" size={34.06} />
                      )}
                    </button>
                  </div>
                  <video playsInline loop ref={videoRef}>
                    <source
                      src={getImageUrl(data?.video?.url)}
                      // eslint-disable-next-line react/no-unknown-property
                      poster={getImageUrl(data?.video?.poster)}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div
                className={`col-lg-7 position-relative ${Style.box_content} ${
                  data?.video?.url?.length > 0 ? "" : "col-100"
                }`}
              >
                <figure className={`position-absolute w-100 h-100 m-0 ${Style.box_content_bg}`}>
                  <Image src={"/images/course-new/background_bg.jpg"} layout="fill" objectFit="cover" />
                </figure>
                <div className={`position-relative text-white ${Style.content}`}>
                  <h2 className={Style.box_title}>{data?.title}</h2>

                  {data?.content &&
                    parse(
                      data?.content?.length > 600 && isReadMore
                        ? `${data?.content?.slice(0, 550)}...`
                        : data?.content
                    )}
                  {data?.content?.length > 600 && (
                    <div className={Style.button_wrap}>
                      <button className={`btn btn-primary ${Style.btn}`} onClick={toggleReadMore}>
                        {isReadMore ? "Read More" : " Read less"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MdxCourseInnerBox;
