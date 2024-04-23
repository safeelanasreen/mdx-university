import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getImageUrl } from "../../apis";
import { useWindowSize } from "../../logic/useDimension";
import Assets from "../Layout/CommonLayout/assets";
import Icons from "../Layout/Icons";
import Style from "./AboutWidget.module.scss";

const parse = require("html-react-parser");

const AboutWidget = ({ props }) => {
  const { width } = useWindowSize();
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <section
        id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
        className={`${Style.mdx_banner_inner} ${props?.data?.bg_light === true ? "bg-light" : ""}`}
      >
        {props?.data?.container ? (
          <div className="container">
            <div className="row g-0 row-cols-1 row-cols-lg-2 align-items-center">
              <div>
                <div className={Style.content_wrap}>
                  {props?.data?.title_caption && (
                    <h3 className="title_sub">{props?.data?.title_caption}</h3>
                  )}
                  {props?.data?.title && <h2 className="title title-sm">{props?.data?.title}</h2>}
                  {width >= 992 ? (
                    props?.data?.author ? (
                      <div className={Style.author}>
                        {props?.data?.author_img && (
                          <div className={Style.author_avatar}>
                            <Image
                              src={
                                props?.data?.author_img?.indexOf("://") === -1
                                  ? getImageUrl(
                                      props?.data?.author_img ? props?.data?.author_img : ""
                                    )
                                  : props?.data?.author_img
                                // Assets.author_img
                              }
                              layout="fill"
                              objectFit="cover"
                              alt={props?.data?.author_name ? props?.data?.author_name : "Author"}
                            />
                          </div>
                        )}
                        <div className={Style.author_details}>
                          <div className={Style.author_name}>{props?.data?.author_name}</div>
                          <div className={Style.author_designation}>
                            {props?.data?.author_designation}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                  {width < 992 ? (
                    <div className="mb-4 mx-0">
                      <div className={Style.img_wrap}>
                        {props?.data?.video_link ? (
                          <iframe src={props?.data?.video_link} allowFullScreen></iframe>
                        ) : props?.data?.video ? (
                          <video autoPlay loop playsInline muted>
                            <source
                              src={
                                props?.data?.video?.indexOf("://") === -1
                                  ? getImageUrl(props?.data?.video ? props?.data?.video : "")
                                  : props?.data?.video
                              }
                            />
                          </video>
                        ) : props?.data?.img ? (
                          <Image
                            objectFit="cover"
                            layout="fill"
                            src={
                              props?.data?.img?.indexOf("://") === -1
                                ? getImageUrl(props?.data?.img ? props?.data?.img : "")
                                : props?.data?.img
                            }
                            alt={props?.data?.title ? props?.data?.title : "Author"}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {width < 992 ? (
                    props?.data?.author ? (
                      <div className={Style.author}>
                        <div className={Style.author_avatar}>
                          <Image
                            src={
                              // props?.data?.author_img?.indexOf("://") === -1
                              //   ? getImageUrl(
                              //       props?.data?.author_img
                              //         ? props?.data?.author_img
                              //         : ""
                              //     )
                              //   : props?.data?.author_img
                              Assets.author_rachel
                            }
                            layout="fill"
                            objectFit="cover"
                            alt={props?.data?.author_name ? props?.data?.author_name : "Author"}
                          />
                        </div>
                        <div className={Style.author_details}>
                          <div className={Style.author_name}>{props?.data?.author_name}</div>
                          <div className={Style.author_designation}>
                            {props?.data?.author_designation}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                  {parse(
                    !isReadMore
                      ? `${props?.data?.description?.replace(/<\/?span[^>]*>/g, "").slice(0, 700)}`
                      : props?.data?.description?.replace(/<\/?span[^>]*>/g, "")
                  )}
                  {props?.data?.description?.length > 700 && (
                    <div>
                      {
                        <button onClick={toggleReadMore} className="btn btn-primary">
                          {isReadMore ? "Read less" : " Read more"}
                        </button>
                      }
                    </div>
                  )}
                  {props?.data?.buttons?.map((btns, index) => {
                    return (
                      <Link href={btns?.link ? btns.link : ""} key={index}>
                        <>
                          <br />
                          <a
                            href={btns?.link ? btns.link : ""}
                            className={`btn btn-primary ${Style.btn}`}
                          >
                            <span>
                              <Icons icon={"send"} size={20} />
                            </span>
                            {btns?.label}
                          </a>
                        </>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div>
                {width >= 992 ? (
                  <div className={Style.img_wrap}>
                    {props?.data?.video_link ? (
                      <iframe src={props?.data?.video_link} allowFullScreen></iframe>
                    ) : props?.data?.video ? (
                      <video autoPlay loop playsInline muted>
                        <source
                          src={
                            props?.data?.video?.indexOf("://") === -1
                              ? getImageUrl(props?.data?.video ? props?.data?.video : "")
                              : props?.data?.video
                          }
                        />
                      </video>
                    ) : props?.data?.img ? (
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src={
                          props?.data?.img?.indexOf("://") === -1
                            ? getImageUrl(props?.data?.img ? props?.data?.img : "")
                            : props?.data?.img
                        }
                        alt={props?.data?.title}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="row g-0 row-cols-1 row-cols-lg-2 align-items-center">
            <div>
              <div className={Style.content_wrap}>
                {props?.data?.title_caption && (
                  <h3 className="title_sub">{props?.data?.title_caption}</h3>
                )}
                {props?.data?.title && <h2 className="title title-sm">{props?.data?.title}</h2>}
                {props?.data?.author ? (
                  <div className={Style.author}>
                    <div className={Style.author_avatar}>
                      <Image
                        src={
                          // props?.data?.author_img?.indexOf("://") === -1
                          //   ? getImageUrl(
                          //       props?.data?.author_img
                          //         ? props?.data?.author_img
                          //         : ""
                          //     )
                          //   : props?.data?.author_img
                          Assets.author_rachel
                        }
                        layout="fill"
                        objectFit="cover"
                        alt={props?.data?.title}
                      />
                    </div>
                    <div className={Style.author_details}>
                      <div className={Style.author_name}>{props?.data?.author_name}</div>
                      <div className={Style.author_designation}>
                        {props?.data?.author_designation}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {parse(
                  !isReadMore
                    ? `${props?.data?.description?.replace(/<\/?span[^>]*>/g, "").slice(0, 700)}`
                    : props?.data?.description?.replace(/<\/?span[^>]*>/g, "")
                )}
                {props?.data?.description?.length > 700 && (
                  <button onClick={toggleReadMore} className="btn btn-primary">
                    {isReadMore ? "Read less" : " Read more"}
                  </button>
                )}
              </div>
            </div>
            {width >= 992 ? (
              <div className="mb-4 mx-0">
                <div className={Style.img_wrap}>
                  {props?.data?.video_link ? (
                    <iframe src={props?.data?.video_link} allowFullScreen></iframe>
                  ) : props?.data?.video ? (
                    <video autoPlay loop playsInline muted>
                      <source
                        src={
                          props?.data?.video?.indexOf("://") === -1
                            ? getImageUrl(props?.data?.video ? props?.data?.video : "")
                            : props?.data?.video
                        }
                      />
                    </video>
                  ) : (
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={
                        props?.data?.img?.indexOf("://") === -1
                          ? getImageUrl(props?.data?.img ? props?.data?.img : "")
                          : props?.data?.img
                      }
                      alt={props?.data?.title}
                    />
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default AboutWidget;
