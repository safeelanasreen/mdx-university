import Image from "next/image";
import Assets from "../../Layout/CommonLayout/assets";
import Icons from "../../Layout/Icons";
import Style from "./VideoEventCard.module.scss";

import { useState, useRef } from "react";
import { getImageUrl } from "../../../apis";

const VideoEventCard = (props) => {
  const parse = require('html-react-parser')
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props?.props];

  // const [videoPlay, setVideoPlay] = useState(false);

  // const vidRef = useRef(null);
  // const handlePlayVideo = () => {
  //   vidRef.current.paused ? vidRef.current.play() : vidRef.current.pause();
  //   vidRef.current.paused ? setVideoPlay(false) : setVideoPlay(true);
  // };

  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <div className={`${Style.faculty_item}`} key={index}>
            <div className={Style.faculty_item_img}>
              <div className={Style.video_wrap}>
                {/* <video playsInline>
                <source src={getImageUrl(props?.video)} />
              </video> */}

                <iframe
                  width='560'
                  height='315'
                  src={
                    data?.video?.indexOf("://") === -1
                      ? getImageUrl(data?.video ? data?.video : "")
                      : data?.video
                  }
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>

                {/* <div className={Style.video_play_btn} onClick={handlePlayVideo}>
                <span className={videoPlay == true ? "d-none" : ""}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.803"
                    height="20.125"
                    viewBox="0 0 17.803 20.125"
                  >
                    <path
                      id="Polygon_3"
                      data-name="Polygon 3"
                      d="M10.063,0,20.125,17.8H0Z"
                      transform="translate(17.803) rotate(90)"
                      fill="#fff"
                    />
                  </svg>
                </span>
              </div> */}
              </div>
            </div>
            <div className={Style.faculty_item_info}>
              <div className='d-flex align-items-start justify-content-between'>
                <div className={Style.faculty_item_info_p}>
                  {data?.description &&
                    parse(data?.description?.replace(/<\/?span[^>]*>/g, ""))}
                </div>
                  {/* {data?.description} */}
                <span className={`d-flex ${Style.arrow}`}>
                  <Icons icon={"arrow-top-right-long"} size={15.69} />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VideoEventCard;
