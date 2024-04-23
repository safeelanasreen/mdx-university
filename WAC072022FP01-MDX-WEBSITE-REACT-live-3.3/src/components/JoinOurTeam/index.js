import React, { useState, useEffect } from "react";
import { useWindowSize } from "../../logic/useDimension";
import Image from "next/image";
import Link from "next/link";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./JoinOurTeam.module.scss";
import { getImageUrl } from "../../apis";
import useJoinOurTeam from "./useJoinOurTeam";
const JoinOurTeam = (props) => {
  const { width, activeIndex } = useJoinOurTeam();
  return (
    <section className={Style.jointeam}>
      <div className="container">
        <div
          className={`row  align-items-center flex-column-reverse flex-lg-row ${Style.wrap}`}
        >
          <div className="col-lg-5 col-xl-7">
            <div className={Style.left_wrap}>
              {width >= 992 ? (
                <div className={Style.ttl_wrap}>
                  <h2 className="title_sub">
                    {props?.props?.data?.main_title}{" "}
                  </h2>
                  <h3 className="title mb-0">{props?.props?.data?.title}</h3>
                </div>
              ) : (
                ""
              )}
              <div className={Style.text_wrap}>
                <p>{props?.props?.data?.description}</p>
              </div>
              {props?.props?.data?.button?.title && (
                <Link href={props?.props?.data?.button?.url || ""}>
                  <a>
                    <button className={`btn btn-primary ${Style.btn_jointeam}`}>
                      {props?.props?.data?.button?.title || ""}
                    </button>
                  </a>
                </Link>
              )}
            </div>
          </div>
          <div className="col-lg-7 col-xl-5">
            {width <= 991.98 ? (
              <div>
                <h2 className="title_sub">
                  {" "}
                  {props?.props?.data?.main_title}{" "}
                </h2>
                <h3 className={`${Style.mainttl} title `}>
                  {props?.props?.data?.title}
                </h3>
              </div>
            ) : (
              ""
            )}
            <div className={Style.img_anim}>
              <div className={Style.img_wrap}>
                {/* <div className={Style.innerwrap}> */}
                {props?.props?.data?.images.map((item, index) => (
                  <div
                    key={index}
                    className={`${Style.img_item} ${
                      index === activeIndex ? Style.active : ""
                    }`}
                  >
                    {item?.url && (
                      <figure className="ratio">
                        <Image
                          src={getImageUrl(item?.url) ?? "#"}
                          alt=""
                          layout="fill"
                          objectFit="cover"
                        />
                      </figure>
                    )}
                  </div>
                ))}

                {/* </div> */}
              </div>
              {/* the  static logo */}
              {width >= 992 ? (
                <div className={Style.logo_wrap}>
                  <figure className="ratio mb-0">
                    <Image
                      src={Assets.team_logo}
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  </figure>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default JoinOurTeam;
