import { useState, useEffect, useRef } from "react";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./HomeBanner.module.scss";
import Icons from "../Layout/Icons";
import Image from "next/image";
import { useWindowSize } from "../../logic/useDimension";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Navigation, Autoplay, Pagination } from "swiper";
import { getImageUrl } from "../../apis";

const HomeBanner = ({ props }) => {
  const { width } = useWindowSize();
  const slideLength = props?.data?.home_page_sliders.length;
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playbackPositions, setPlaybackPositions] = useState({});
  const [formInputs, setFormInputs] = useState({});
  const [active, setActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const parse = require("html-react-parser");
  const [Index, setIndex] = useState(0); //To check the index of current slide

  const [video, setVideo] = useState(false);

  const [videoDuration, SetVideoDuration] = useState(25000);
  const handleThumbClick = (index) => {
    setActiveIndex(index);
    swiperRef.current.swiper.slideTo(index);
  };

  const inputRef = useRef(null);
  const videoRef = useRef(null);

  const VideoArray = props?.data?.home_page_sliders;
  const extractedNames = VideoArray.map((obj) => obj.url); //the Video Url is created.
  const currentVideoDuration = extractedNames[Index];
  // const videos = document.createElement("video");
  // videos.src = `${getImageUrl(props?.data?.home_page_sliders[0]?.url)}`;
  // videos.onloadedmetadata = () => {
  //   console.log(videos.duration,"video duration")
  // };

  var hour = new Date().getHours();
  function ValidateEmail(mail) {
    let emailPattern = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    setErrorMsg(!emailPattern.test(mail));
    return emailPattern.test(mail);
  }
  const onInputChange = ({ target: { name, value } }) => {
    setErrorMsg(false);
    if (window !== undefined) {
      localStorage.setItem(name, value);
    }
    setFormInputs((formInputs) => ({ ...formInputs, [name]: value }));
  };

  const handleReset = (event) => {
    event.preventDefault();
    setFormInputs({});
    setActive(false);
    setSubmitted(false);
    localStorage.removeItem("username");
    localStorage.removeItem("email");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(formInputs).length === 1) {
      // if (ValidateEmail(formInputs?.email)) {
      setSubmitted(true);
      // }
    }
    if (formInputs.username !== undefined) {
      setActive(true);
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    // Video creation and duration calculation
    const videos = document.createElement("video");
    videos.src = `${getImageUrl(props?.data?.home_page_sliders[0]?.url)}`;
    videos.onloadedmetadata = () => {
      SetVideoDuration(videos.duration * 1000);
    };

    // Check local storage for username and email
    if (typeof window !== "undefined") {
      let name = localStorage.getItem("username");
      let email = localStorage.getItem("email");
      if (name) {
        setActive(true);
        setSubmitted(true);
        setFormInputs((state) => ({ ...state, username: name }));
      }
      if (email) {
        setFormInputs((state) => ({ ...state, email: email }));
      }
    }

    // Set video after delay
    setTimeout(() => {
      setVideo(true);
    }, 300);

    // Cleanup function
    return () => {
      videos.remove();
    };
  }, []);

  const swiperChanges = (swiper, index) => {
    const currentSlideIndex = swiper.realIndex;
    setIndex(currentSlideIndex); //The current index is set
    const currentSlide = swiper.slides[currentSlideIndex];
    const videoTag = currentSlide.getElementsByTagName("video");
    const videoduration = currentSlide.getElementsByTagName("video")[0];
    const duration = videoTag[0] ? videoTag[0].duration * 1000 : 6000;
    SetVideoDuration(videoTag && duration > 10 ? duration : 4000);
    // if (videoduration) {
    //   setCurrentVideoDuration(videoTag.duration * 1000);
    // }
  };
  const swiperReinit = (swiper, index) => {};

  // const handlePlay = () => {}

  const handleSlideChange = () => {
    const currentSlideIndex = swiperRef.current?.swiper?.realIndex;
    const slideElements = document.querySelectorAll(".swiper-slide");

    slideElements.forEach((slide, index) => {
      const video = slide.querySelector("video");

      if (video) {
        if (index !== currentSlideIndex) {
          video.pause();
          setPlaybackPositions((prevPositions) => ({
            ...prevPositions,
            [index]: video.currentTime,
          }));
        } else {
          video.currentTime = 0;
          video.play();
        }
      }
    });
    setActiveIndex(currentSlideIndex);
  };

  const handleSlideReset = () => {
    const videoElements = document.querySelectorAll("video");
    videoElements.forEach((video, index) => {
      video.pause();
      video.currentTime = 0;
      setPlaybackPositions((prevPositions) => ({
        ...prevPositions,
        [index]: 0,
      }));
    });
    setActiveIndex(0);
  };

  const sliderImageUrls = props?.data?.home_page_sliders.map((slider) => slider.preview_image);
  const imagepathsFirst = sliderImageUrls?.shift();
  const newImagepathsFirst = [...sliderImageUrls, imagepathsFirst];
  const sliderTitle = props?.data?.home_page_sliders.map((slider) => slider.heading);
  const titleFirst = sliderTitle?.shift();
  const newTitle = [...sliderTitle, titleFirst];

  const renderThumbButtons = () => {
    return Array.from({ length: slideLength }).map((_, index) => (
      <button
        key={index}
        className={`${Style.thumb_btn} ${index === activeIndex ? Style.active : ""} `}
        onClick={() => handleThumbClick(index)}
      ></button>
    ));
  };
  const Videopush = () => {
    swiperRef.current.swiper.slideTo(1);
  };
  const ImagePush = () => {
    setTimeout(() => {
      swiperRef.current.swiper.slideTo(1);
    }, 6000);
  };
  return (
    <>
      {/* {video ? (
        ""
      ) : (
        <div className={Style.banner_loader}>
          <figure className="mb-0">
            <Image
              src={"/images/banner_loader.gif"}
              width={500}
              height={500}
              alt="Loader"
            />
          </figure>
        </div>
      )} */}

      <section
        className={`${Style.mdx_banner_sec} ${video ? Style.loaded : ""}`}
        data-cursor="scroll-down"
      >
        <div className={`${Style.personalize_wrap} ${active ? Style.active : ""}`}>
          <div className="container-fluid">
            {submitted ? (
              <>
                {<div></div>}
                <h3 className={`h3 ${submitted ? Style.submitted : ""}`}>
                  <span className={Style.name_wrap}>
                    <span>Hello {formInputs.username},</span>
                  </span>
                  {"Good " + (hour < 12 ? "Morning" : hour < 16 ? "Afternoon" : "Evening")}
                  {/* {props?.data?.title} */}
                </h3>
              </>
            ) : (
              <>
                <h3 className={`h3 ${submitted ? Style.submitted : ""}`}>
                  {"Good " + (hour < 12 ? "Morning" : hour < 16 ? "Afternoon" : "Evening")}
                </h3>
                <p>{props?.data?.sub_title}</p>
              </>
            )}
            {submitted ? (
              <button onClick={handleReset} className="btn btn-link text-white">
                {/* Reset User */}
              </button>
            ) : (
              <div className={`${Style.personalize_wrap_input} `} data-cursor="default">
                <form onSubmit={onSubmit}>
                  <div className="input-group">
                    <input
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Your Full Name"
                      aria-label="Your Full Name"
                      value={formInputs.username || ""}
                      onChange={onInputChange}
                      aria-describedby="button-addon2"
                    />
                    <input
                      autoComplete="off"
                      type="email"
                      ref={inputRef}
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                      aria-label="Your Email"
                      aria-describedby="button-addon2"
                      value={formInputs.email || ""}
                      onChange={onInputChange}
                    />
                    <input type="submit" hidden />
                    <button type="button" id="button-addon2" onClick={onSubmit}>
                      <Icons icon={"arrow-right-sharp-thin"} size={15.53} />
                    </button>
                  </div>
                </form>
                {active && errorMsg && <div className={"error"}>Enter valid mail</div>}
              </div>
            )}
          </div>
        </div>

        <>
          <Swiper
            style={{
              "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            autoplay={{
              delay: videoDuration,
              disableOnInteraction: false,
            }}
            modules={[Parallax, Navigation, Autoplay, Pagination]}
            className={Style.swiper_banner}
            onInit={(swiper, index) => {
              swiperChanges(swiper, index), swiperReinit(swiper, index);
            }}
            ref={swiperRef}
            onSlideChange={(swiper, index) => {
              swiperChanges(swiper, index);
              handleSlideChange();
            }}
            onSlideReset={handleSlideReset}
          >
            {props?.data?.home_page_sliders?.map((value, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className={Style.banner_item}>
                    {value?.content_type === "video" ? (
                      <video
                        autoPlay
                        playsInline
                        muted
                        // loop={i === 0 ? false : true}
                        // poster={Assets.cover_course}
                        ref={videoRef}
                        onEnded={() => {
                          if (i === 0) {
                            Videopush();
                          }
                        }}
                      >
                        <source src={getImageUrl(value?.slider_image_full_url)} type="video/mp4" />
                        {/* <source src={Assets.home_banner_video } type="video/ogg"/> */}
                      </video>
                    ) : (
                      <Image
                        src={getImageUrl(value?.slider_image_full_url)}
                        alt={value?.heading}
                        layout="fill"
                        objectFit="cover"
                        onLoad={() => {
                          if (i == 0) {
                            ImagePush();
                          }
                        }}
                      />
                    )}
                    <div className={`${Style.banner_content} bg_none_all`}>
                      <div className="container-fluid">
                        <h2 className="h3" data-swiper-parallax="-200">
                          {value?.heading && parse(value?.heading)}
                          {/* {parse(
                        `1926 - 2022 <br/> In Loving memory of her majesty`
                      )} */}
                        </h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
        {width >= 1200 ? (
          <div className={Style.thumb_wrap}>
            <div className={Style.thumb_inner}>
              <div className={Style.thumbslider}>
                <div
                  className={Style.slider_inner}
                  style={{
                    width: `calc(${slideLength} * 90px)`,
                    "--index": activeIndex,
                    transform: `translateX(${activeIndex * -90}px)`,
                  }}
                >
                  {newImagepathsFirst.map((imgpath, index) => (
                    <figure
                      key={index}
                      onClick={() =>
                        handleThumbClick(index === sliderImageUrls.length ? 0 : index + 1)
                      }
                      className={`${Style.video_wrap} ${
                        index === activeIndex ? Style.active : " "
                      }`}
                    >
                      <Image
                        alt="banner-small"
                        layout="fill"
                        objectFit="cover"
                        sizes="8vw"
                        src={getImageUrl(imgpath)}
                        className={Style.img}
                      />
                    </figure>
                  ))}
                </div>
              </div>

              <div className={Style.slider_content}>
                <div className={`d-flex ${Style.ttl_outer}`}>
                  {newTitle?.map((ttl, index) => (
                    <div
                      key={index}
                      className={`${Style.ttl_wrap}    ${
                        index === activeIndex ? Style.active : " "
                      }`}
                    >
                      <p>Next</p>
                      <h3 className={Style.ttl}>{ttl}</h3>
                    </div>
                  ))}
                </div>

                <div
                  className={Style.loading_wrap}
                  style={{
                    "--loading-transition-duration": `${videoDuration}ms`,
                  }}
                >
                  {renderThumbButtons()}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default HomeBanner;
