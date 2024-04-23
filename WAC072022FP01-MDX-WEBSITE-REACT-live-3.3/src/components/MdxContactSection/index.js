import React from "react";
import Style from "./MdxContactSection.module.scss";
import Image from "next/image";
import Link from "next/link";

import Icons from "../Layout/Icons";
import ContactForm from "../ContactForm";
import Form from "../Form";

const MdxContactSection = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <section
      id={props?.data?.scrollID || ""}
      className={`${Style.section} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      } ${props?.data?.no_spacing?.top && "pt-0"} ${props?.data?.no_spacing?.bottom && "pb-0"} ${
        props?.data?.no_spacing?.left && "ps-0"
      }  ${props?.data?.no_spacing?.right && "pe-0"}`}
      style={{
        "--background-color": props?.data?.background ? props?.data?.background : "#292152",
        "--text-color": props?.data?.text_color ? props?.data?.text_color : "var(--text-color)",
      }}
    >
      <figure className={`${Style.section_bg} w-100 h-100 mb-0`}>
        <Image
          src={"/images/course-new/jpg/mdx_contact_bg.jpg"}
          layout="fill"
          objectFit="cover"
          alt="Contact Us"
        />
      </figure>
      <div
        className={`${Style.container} ${
          props?.data?.container ? "container-fluid" : "container"
        } ${props?.data?.no_spacing?.all ? "px-0 py-0" : props?.data?.no_spacing?.x ? "px-0" : ""}`}
      >
        <div className={props?.data?.no_spacing?.x ? "container-fluid" : "container"}>
          {/* <h4 className="section-title_sub text-white">
            DON’T HESITATE TO CONTACT US
          </h4>
          <h2
            className={`title section-title mb-3  text-white ${Style.section_title}`}
          >
            CONTACT
          </h2> */}
          <div className={`row ${Style.section_row}`}>
            <div className={`col-lg-5 ${Style.form_col}`}>
              <div className={Style.form_wrap}>
                <h2 className={`title section-title mb-3  text-white ${Style.form_title}`}>
                  {props?.data?.form?.title}
                </h2>

                <Form contactsection formID={"2694f241-d357-4ca1-a597-42cbcab2fdb8"} />
              </div>
            </div>
            <div className={`col-lg-7 d-flex flex-column ${Style.contact_col}`}>
              <div className={`w-100 text-white d-flex flex-wrap ${Style.contact_stack}`}>
                <div className={Style.contact_stack_col}>
                  <h3 className={Style.contact_stack_title}> {props?.data?.address?.title}</h3>
                  {parse(props?.data?.address?.content)}
                </div>
                <div className={Style.contact_stack_col}>
                  <h3 className={Style.contact_stack_title}>{props?.data?.contact?.title}</h3>
                  <ul className={Style.contact_stack_contact}>
                    {props?.data?.contact?.phone?.map((data, i) =>
                      data?.length > 0 ? (
                        <li key={i}>
                          <a href={`tel:${data}`}>{data}</a>
                        </li>
                      ) : (
                        ""
                      )
                    )}

                    <li>
                      Email :{" "}
                      {props?.data?.contact?.email?.map((data, i) =>
                        data?.length > 0 ? (
                          <a key={i} href={`mailto:${data}`}>
                            {data}
                          </a>
                        ) : (
                          ""
                        )
                      )}
                      &nbsp;&nbsp;
                    </li>
                  </ul>
                </div>
                <div className={Style.contact_stack_col}>
                  <h3 className={Style.contact_stack_title}>FOLLOW US</h3>
                  <div className={Style.smedia}>
                    <ul>
                      {props?.data?.connect?.social_media?.map((data, i) => {
                        return (
                          <li key={i}>
                            <a href={data?.link || ""} rel="noreferrer" target="_blank">
                              <Icons icon={data?.name} size={41.23} />
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`w-100 ${Style.section_map}`}>
                <h3 className={Style.contact_stack_title}>FIND US ON GOOGLE MAP</h3>
                <div className={Style.section_map_wrap}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.9536677879337!2d55.16176087629289!3d25.103429677771413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6b695079cf%3A0x39837c77fd4e2851!2sMiddlesex%20University%20Dubai!5e0!3m2!1sen!2sin!4v1690872188585!5m2!1sen!2sin"
                    width="894"
                    height="420"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MdxContactSection;
