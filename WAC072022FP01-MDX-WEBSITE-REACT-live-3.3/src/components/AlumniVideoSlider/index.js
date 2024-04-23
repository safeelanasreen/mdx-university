import Image from "next/image";
import React, { useRef } from "react";
import Assets from "../Layout/AlumniLayout/assets";
import Style from "./AlumniVideoSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";
import Icons from "../Layout/Icons";
import { videoSliderData } from "../DummyData";
import { useWindowSize } from "../../logic/useDimension";
import { getImageUrl } from "../../apis";

const AlumniVideoSlider = ({ props }) => {
  const videoRef = useRef([]);
  const navPrevRef = useRef();
  const navNextRef = useRef();

  const size = useWindowSize();

  const togglePlayVideo = (i) => {
    videoRef.current[i].paused
      ? videoRef.current[i].play()
      : videoRef.current[i].pause();
    videoRef.current[i].paused
      ? videoRef.current[i].classList.remove(Style.playing)
      : videoRef.current[i].classList.add(Style.playing);
  };

  return (
    <section className={Style.alumni_video_slider}>
      <button
        className={`${Style.swiper_nav_btn} ${Style.swiper_nav_left}`}
        ref={navPrevRef}
      >
        {size.width >= 768 ? (
          <Icons icon={"arrow-right-sharp-md-thin"} size={41} />
        ) : (
          <Icons icon={"arrow-right-sharp-thin"} size={22} />
        )}
      </button>
      <button
        className={`${Style.swiper_nav_btn} ${Style.swiper_nav_right}`}
        ref={navNextRef}
      >
        {size.width >= 768 ? (
          <Icons icon={"arrow-right-sharp-md-thin"} size={41} />
        ) : (
          <Icons icon={"arrow-right-sharp-thin"} size={22} />
        )}
      </button>
      <Swiper
        loop={false}
        slidesPerView={1}
        spaceBetween={0}
        speed={600}
        navigation={{
          prevEl: navPrevRef.current,
          nextEl: navNextRef.current,
        }}
        modules={[EffectFade, Navigation]}
        className={Style.alumni_video_swiper}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navPrevRef.current;
          swiper.params.navigation.nextEl = navNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={() => {
          videoRef.current.forEach((video) => {
            video.pause();
            video.classList.remove(Style.playing);
          });
        }}
      >
        {props?.data?.videos.map((data, i) => {
          return (
            <SwiperSlide key={Math.random()}>
              <div className={Style.alumni_video_slider_video}>
                <video
                  src={getImageUrl(data?.video)}
                  poster={data?.poster && getImageUrl(data?.poster)}
                  playsInline
                  muted
                  ref={(element) => (videoRef.current[i] = element)}
                  className="video"
                />

                <button
                  className={Style.video_play_btn}
                  onClick={() => togglePlayVideo(i)}
                >
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={Assets.video_play_btn}
                    alt={"video-play-btn"}
                  />
                </button>
              </div>
              <div className="container">
                <div className={Style.alumni_video_slider_contents}>
                  <h2
                    className={`${Style.alumni_video_slider_title} title-white`}
                  >
                    {data?.title}
                  </h2>
                  {data?.logo && (

                  <figure className={Style.mdx_logo}>
                    <Image
                      src={getImageUrl(data?.logo)}
                      alt={"mdx-logo"}
                      width={154}
                      height={61}
                    />
                  </figure>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default AlumniVideoSlider;
