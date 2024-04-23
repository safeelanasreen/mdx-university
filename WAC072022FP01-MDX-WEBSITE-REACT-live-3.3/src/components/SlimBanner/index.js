import React from "react";
import Image from "next/image";

import Assets from "../Layout/CommonLayout/assets";
import Style from "./SlimBanner.module.scss";
import { getImageUrl } from "../../apis";

import { useWindowSize } from "../../logic/useDimension";

const SlimBanner = ({ props }) => {
  const { width } = useWindowSize();
  const bannerImg = props?.data?.img;
  const bannerImgMobile = props?.data?.mobile_banner_img;
  return (
    <section className={Style.mdx_slim_banner}>
      <div className={Style.mdx_slim_banner_cover}>
        {bannerImgMobile ? (
          width >= 768 ? (
            bannerImg ? (
              <Image
                layout="fill"
                objectFit="cover"
                src={getImageUrl(bannerImg) || ""}
                alt={props?.data?.title}
              />
            ) : (
              ""
            )
          ) : bannerImgMobile ? (
            <Image
              layout="fill"
              objectFit="cover"
              src={getImageUrl(bannerImgMobile) || ""}
              alt={props?.data?.title}
            />
          ) : (
            ""
          )
        ) : bannerImg ? (
          <Image
            layout="fill"
            objectFit="cover"
            src={getImageUrl(bannerImg) || ""}
            // src={bannerImg}
            alt={props?.data?.title}
          />
        ) : (
          ""
        )}
      </div>
      <div className={Style.mdx_slim_banner_content}>
        <div className="container-fluid">
          <div className="h6">{props?.data?.title}</div>
          <h1 className="h1">{props?.data?.main_title}</h1>
        </div>

        {width >= 1200 && (
            <div className={`container-fluid ${Style.container}`}>
              <div className={Style.scroll_wrap}>
                {props?.data?.hide_secroll_down == true ? (
                  ""
                ) : (
                  <div className="d-flex align-items-center text-white">
                    <p className="mb-0">Scroll down for more information</p>
                    <div className={Style.mouse}>
                      <div className={Style.mouse_roll}></div>
                      <div className={Style.mouse_rollshadow}></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
      </div>
   

      
    </section>
  );
};

export default SlimBanner;
