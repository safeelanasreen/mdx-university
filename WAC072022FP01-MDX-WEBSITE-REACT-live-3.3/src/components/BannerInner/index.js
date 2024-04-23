import Image from "next/image";
import { useRouter } from "next/router";
import { getImageUrl } from "../../apis";
import { useWindowSize } from "../../logic/useDimension";
import BannerSearch from "../BannerSearch";
import ContactForm from "../ContactForm";
import CourseStrip from "../CourseStrip";
import CourseStripIcon from "../CourseStripIcon";
import Style from "./BannerInner.module.scss";

const BannerInner = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");

  const Router = useRouter();

  const bannerImg = props?.data?.img;
  const bannerImgMobile = props?.data?.mobile_banner_img;
  return (
    <>
      {/* {width >= 1200 ? <Toolbar /> : ""} */}
      <section
        className={`${Style.mdx_banner_inner} ${
          props?.data?.spacing?.sm ? Style.mdx_banner_inner_space_sm : ""
        } ${Router.asPath === "/january2023" && Style.slim_ondevice} ${
          props?.data?.contact_form ? Style.auto_height : ""
        }`}
      >
        <div className={Style.banner_inner_cover}>
          {bannerImgMobile ? (
            width >= 768 ? (
              bannerImg ? (
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={
                    bannerImg?.indexOf("://") === -1
                      ? getImageUrl(bannerImg ? bannerImg : "")
                      : bannerImg
                  }
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
        <div
          className={`${Style.banner_inner_content} ${
            props?.data?.no_spacing?.bottom ? Style.no_space_bottom : ""
          } ${
            props?.data?.spacing?.sm ? Style.banner_inner_content_space_sm : ""
          } ${props?.data?.title_container == true ? "w-100" : " "}`}
        >
          <div
            className={`${
              props?.data?.title_container == true
                ? "container"
                : "container-fluid"
            }`}
          >
            
            <div className="row align-items-center">
              <div
                className={`col-xl-${
                  props?.data?.contact_form === false ? "10" : "7"
                } ${props?.data?.center_align === true ? "" : " "}`}
              >
                <h5 className="h6">{props?.data?.sub_title}</h5>
                {props?.data?.title && (
                  <h1 className={`h1 ${Style.title}`}>
                    {parse(props?.data?.title)}
                  </h1>
                )}
                {props?.data?.caption ? <p>{props?.data?.caption}</p> : ""}
                <div className={Style.btn_wrap}>
                  {props?.data?.buttons?.map((data, index) => {
                    return (
                      <span className="pe-2" key={index}>
                        {data?.link ? (
                          <a
                            href={data.link}
                            className={`btn btn-${data.color} ${
                              data.link == "#" ? "d-none" : ""
                            } ${data?.label ? "" : "d-none"}`}
                            key={index}
                          >
                            {data?.label}
                          </a>
                        ) : (
                          <a
                            onClick={() => {
                              if (typeof window !== "undefined") {
                                window.scrollTo(
                                  0,
                                  document.getElementById(data?.scrollTo)
                                    .offsetTop - 100
                                );
                              }
                            }}
                            className={`btn btn-${data.color} ${
                              data.link == "#" ? "d-none" : ""
                            } ${data?.label ? "" : "d-none"}`}
                          >
                            {data?.label}
                          </a>
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>
              {width >= 1200 && props?.data?.contact_form ? (
                <div className={"col-xl-5 my-4 my-xl-0"}>
                  <div className={Style.mdx_banner_inner_formsec}>
                    <ContactForm
                      formId={props?.data?.form_id}
                      formTitle="Lorem Ipsum is dummy text"
                      type={props?.data?.form_type}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className={Style.box_detail}>
          {width >= 1200 && (
            <div className={`container-fluid ${Style.container}`}>
              <div className={Style.scroll_wrap}>
                {props?.data?.hide_secroll_down == true ? (
                  ""
                ) : (
                  <div className="d-flex align-items-center text-white">
                    Scroll down for more information
                    <div className={Style.mouse}>
                      <div className={Style.mouse_roll}></div>
                      <div className={Style.mouse_rollshadow}></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {width >= 1200 && props?.data?.course_page && (
            <div
              className={`container-fluid ${Style.container} ${Style.strip_container}`}
            >
              <CourseStrip props={props?.data} />
            </div>
          )}
          {width >= 1200 && props?.data?.course_icon_strip && (
            <div className={`container ${Style.container} `}>
              <CourseStripIcon props={props?.data?.course_icon_strip} />
            </div>
          )}
          {width >= 1200 && props?.data?.banner_search && (
            <div className={`container-fluid ${Style.container}`}>
              <BannerSearch />
            </div>
          )}
        </div>
      </section>
      {width < 1200 && props?.data?.course_page && (
        <CourseStrip props={props?.data} />
      )}
      {width < 1200 && props?.data?.course_icon_strip && (
        <CourseStripIcon props={props?.data?.course_icon_strip} />
      )}
      {width < 1200 && props?.data?.contact_form ? (
        <div className={Style.mdx_banner_inner_formsec}>
          <ContactForm
            formId={props?.data?.form_id}
            formTitle="Lorem Ipsum is dummy text"
            type={props?.data?.form_type}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BannerInner;
