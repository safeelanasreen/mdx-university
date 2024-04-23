import Assets from "../Layout/CommonLayout/assets";
import Style from "./EnquiryFormMap.module.scss";
// import Image from "next/image";
import Icons from "../Layout/Icons";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "../Form";
import { useWindowSize } from "../../logic/useDimension";
import ContactFormTwoColumn from "../ContactFormTwoColumn";
import { getImageUrl } from "../../apis";
import JotForm from "../JotForm";

const EnquiryFormMap = ({ props }) => {
  const size = useWindowSize();
  const parse = require("html-react-parser");
  const mobileBaner = props?.data?.form?.data?.mobile_banner_image ? props?.data?.form?.data?.mobile_banner_image : props?.data?.form?.data?.background_image;
  return (
    <section
      className={Style.mdx_course_intro}
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
    >
      <div
        className={Style.mdx_course_intro_wrap}
        style={
          size.width > 992
            ? {
                backgroundImage:
                  "url(" +
                  `${
                    props?.data?.form?.data?.background_image?.indexOf("://") === -1
                      ? getImageUrl(
                          props?.data?.form?.data?.background_image
                            ? props?.data?.form?.data?.background_image
                            : ""
                        )
                      : Assets.cover_contact
                  }` +
                  ")",
              }
            : {}
        }
      >
        <div className="container-fluid">
          <div className="row">
            <div className="order-2 order-lg-1 col-lg-7 col-xl-8 position-relative">
              {size.width > 992 ? (
                <div
                  className={`${Style.mdx_course_intro_title_header}`}
                  style={
                    size.width < 992 ? { backgroundImage: "url(" + Assets.cover_contact + ")" } : {}
                  }
                >
                  {/* <a
                    href="#"
                    className={Style.mdx_course_intro_look_google_btn}
                  >
                    {props?.data?.form?.data?.google_map_subtitle
                      ? props?.data?.form?.data?.google_map_subtitle
                      : "Look at Google Map"}
                  </a> */}

                  <div>
                    {props?.data?.form?.data?.banner_subtitle && (
                      <h5 className="h6">{props?.data?.form?.data?.banner_subtitle}</h5>
                    )}
                    {props?.data?.form?.data?.banner_title && (
                      <h2 className="h1">{props?.data?.form?.data?.banner_title}</h2>
                    )}
                    <ul>
                      <li>{parse(props?.data?.form?.data?.form_address)}</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="order-1 mt-5 mt-lg-0 order-lg-2 col-lg-5 col-xl-4 position-relative">
              <div className="px-0">
                <h5 className="title title_sub">
                  {props?.data?.form?.data?.title ? props?.data?.form?.data?.title : "ENQUIRY"}
                </h5>
              </div>

              {typeof props?.data?.form?.data?.form_type !== undefined && props?.data?.form?.data?.form_type == "jot_form" ? (
                <JotForm src={props?.data?.form?.data?.formID} />
              ) : (
                <Form
                  contactsection
                  formID={props?.data?.form?.data?.formID}
                />
              )}

              {/* <Form formID={props?.data?.form?.data?.formID} /> */}
            </div>

            {size.width <= 991.98 ? (
              <div className="col-lg-12">
                <div
                  className={`${Style.mdx_course_intro_title_header}`}
                  style={
                    size.width <= 991.98 && size.width >= 768 ?  {
                          backgroundImage:
                            "url(" +
                            `${
                              props?.data?.form?.data?.background_image?.indexOf("://") === -1
                                ? getImageUrl(
                                    props?.data?.form?.data?.background_image
                                      ? props?.data?.form?.data?.background_image
                                      : ""
                                  )
                                : Assets.cover_contact
                            }` +
                            ")",
                        }
                      : {
                        backgroundImage:
                          "url(" +
                          `${
                            mobileBaner?.indexOf("://") === -1
                              ? getImageUrl(
                                  mobileBaner
                                    ? mobileBaner
                                    : ""
                                )
                              : Assets.cover_contact
                          }` +
                          ")",
                      }
                  }
                >
                  {/* <a
                    href="#"
                    className={Style.mdx_course_intro_look_google_btn}
                  >
                    {props?.data?.form?.data?.google_map_subtitle
                      ? props?.data?.form?.data?.google_map_subtitle
                      : "Look at Google Map"}
                  </a> */}
                </div>

                {/* <div>
                  {props?.data?.form?.data?.banner_title && (
                    <span>{props?.data?.form?.data?.banner_title}</span>
                  )}
                  {props?.data?.form?.data?.banner_subtitle && (
                    <span>{props?.data?.form?.data?.banner_subtitle}</span>
                  )}
                </div> */}
                {/* <div className="mt-3"></div> */}
                <div className={Style.mdx_course_intro_footer_list}>
                  {props?.data?.form?.data?.banner_subtitle && (
                    <h5 className="h6">{props?.data?.form?.data?.banner_subtitle}</h5>
                  )}
                  {props?.data?.form?.data?.banner_title && (
                    <h2 className="h1">{props?.data?.form?.data?.banner_title}</h2>
                  )}
                  {parse(props?.data?.form?.data?.form_address)}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryFormMap;
