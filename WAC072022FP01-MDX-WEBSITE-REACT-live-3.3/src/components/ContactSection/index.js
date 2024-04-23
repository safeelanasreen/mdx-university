import Assets from "../Layout/CommonLayout/assets";
import Style from "./ContactSection.module.scss";
// import Image from "next/image";
import Icons from "../Layout/Icons";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useWindowSize } from "../../logic/useDimension";
import ContactForm from "../ContactForm";
import { ContactFormMapData } from "../DummyData";
import Link from "next/link";
import { getImageUrl } from "../../apis";

const ContactSection = ({ props }) => {
  const parse = require("html-react-parser");

  const size = useWindowSize();
  return (
    <section
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
      className={Style.mdx_course_intro}
    >
      <div
        className={Style.mdx_course_intro_wrap}
        style={
          size.width > 992
            ? {
                backgroundImage:
                  "url(" + getImageUrl(props?.data?.backgound_img) + ")",
              }
            : {}
        }
      >
        <div
          className={Style.mdx_course_intro_title_header}
          style={
            size.width < 992
              ? {
                  backgroundImage:
                    "url(" + getImageUrl(props?.data?.backgound_img) + ")",
                }
              : {}
          }
        >
          <a href="#" className={Style.mdx_course_intro_look_google_btn}>
            {props?.data?.sub_title}
          </a>
          {size.width > 992 ? (
            <h2 className={Style.mdx_course_intro_title}>
              {props?.data?.title}
            </h2>
          ) : (
            <></>
          )}
        </div>

        <div className={Style.mdx_course_intro_contact_form}>
          <div className={Style.mdx_course_intro_contact_form_wrap}>
            {/* <h2 className={Style.mdx_course_intro_title}>
                            Don’t hesitate to <br />
                            contact us
                        </h2> */}

            <ContactForm props={ContactFormMapData?.data?.form?.data} />
          </div>
        </div>

        {/* <div className={Style.mdx_course_intro_contact_form}>
          <div className={Style.mdx_course_intro_contact_form_wrap}>
            <h2 className={Style.mdx_course_intro_title}>
              Don’t hesitate to <br />
              contact us
            </h2>

            <ContactForm props={ContactFormMapData?.data?.form?.data} />
          </div>
        </div> */}

        <div className={Style.mdx_course_intro_address_wrap}>
          {size.width > 992 ? (
            <></>
          ) : (
            <h2 className={`mb-4 pb-1 ${Style.mdx_course_intro_title}`}>
              {props?.data?.title}
            </h2>
          )}
          <div className={Style.mdx_course_intro_address_content}>
            <div className="row">
              <div className={Style.col_our_address}>
                <h3 className={Style.mdx_course_intro_address_title}>
                  {props?.data?.address_title}
                </h3>
                <>{parse(props?.data?.address ? props?.data?.address : "")}</>
              </div>
              <div className={Style.col_our_contact}>
                <h3 className={Style.mdx_course_intro_address_title}>
                  {props?.data?.our_contact}
                </h3>
                <ul>
                  <li>
                    <a
                      className={Style.mdx_phone_number}
                      href={`tel:${props?.data?.phone_number1}`}
                    >
                      {props?.data?.phone_number1}
                    </a>
                    {props?.data?.phone_number2 && `/`}
                    <a
                      className={Style.mdx_phone_number}
                      href={`tel:${props?.data?.phone_number2}`}
                    >
                      {props?.data?.phone_number2}
                    </a>
                  </li>
                  <li>
                    {props?.data?.email_title}
                    <Link href={`mailto:${props?.data?.email}`}>
                      {props?.data?.email}
                    </Link>
                  </li>

                  <li>
                    <Link href={`mailto:${props?.data?.admission_email}`}>
                      {props?.data?.admission_email}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={Style.col_follow_us}>
                <h3 className={Style.mdx_course_intro_address_title}> </h3>
                <ul className={Style.mdx_course_intro_follow_links}>
                  {props?.data?.social_media_icon?.map((value, i) => {
                    return (
                      <li key={i}>
                        <a href={value?.link}>
                          <Icons icon={value?.name} size={18} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <h5 className={Style.mdx_course_intro_follow_title}>
                  {props?.data?.follow_us}
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* 
                <div className={Style.mdx_course_intro_address_wrap}>
                    {size.width > 992 ? (
                        <></>
                    ) : (
                        <h2 className={`mb-4 pb-1 ${Style.mdx_course_intro_title}`}>
                            Contact with us
                        </h2>
                    )}
                    <div className={Style.mdx_course_intro_address_content}>
                        <div className="row">
                            <div className={Style.col_our_address}>
                                <h3 className={Style.mdx_course_intro_address_title}>
                                    Our Address
                                </h3>
                                <ul>
                                    <li>Middlesex University Dubai</li>
                                    <li>Dubai Knowledge Park , Dubai</li>
                                    <li>United Arab Emirates</li>
                                </ul>
                            </div>
                            <div className={Style.col_our_contact}>
                                <h3 className={Style.mdx_course_intro_address_title}>
                                    Our contact
                                </h3>
                                <ul>
                                    <li>
                                        <a
                                            className={Style.mdx_phone_number}
                                            href="tel:+971043678100"
                                        >
                                            +971 (0)4 3678100
                                        </a>
                                        /
                                        <a
                                            className={Style.mdx_phone_number}
                                            href="tel:+971(0)43678100"
                                        >
                                            +971 (0)4 3751212
                                        </a>
                                    </li>
                                    <li>Email : info@mdx.ac.ae</li>
                                    <li>admissions@mdx.ac.ae</li>
                                </ul>
                            </div>
                            <div className={Style.col_follow_us}>
                                <h3 className={Style.mdx_course_intro_address_title}> </h3>
                                <ul className={Style.mdx_course_intro_follow_links}>
                                    <li>
                                        <a href="#">
                                            <Icons icon={"twitter"} size={18} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Icons icon={"facebook"} size={18} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Icons icon={"instagram"} size={18} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Icons icon={"linkedin"} size={18} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Icons icon={"snapchat"} size={18} />
                                        </a>
                                    </li>
                                </ul>
                                <h5 className={Style.mdx_course_intro_follow_title}>
                                    follow us
                                </h5>
                            </div>
                        </div>
                    </div>
                </div> */}
      </div>
    </section>
  );
};

export default ContactSection;
