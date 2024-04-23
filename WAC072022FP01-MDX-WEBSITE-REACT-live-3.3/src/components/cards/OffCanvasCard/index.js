import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "../../../apis";
import Offcanvas from "react-bootstrap/Offcanvas";
import Icons from "../../Layout/Icons";
import Style from "../../ImageHoverComponent/ImageHoverComponent.module.scss";

function OffCanvasCard(props) {
  const parse = require("html-react-parser");
  return (
    <>
      <Offcanvas
        show={props?.show}
        onHide={props?.handleClose}
        placement="end"
        name="end"
        className={Style.img_hover_offcanvas}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className={Style.banner_wrap}>
            <figure className="mb-0 ratio">
              <Image
                src={
                  props?.data?.image?.url
                    ? getImageUrl(props?.data?.image?.url)
                    : ""
                }
                layout="fill"
                objectFit="cover"
                alt={props?.data?.image?.alt}
              />
            </figure>
          </div>
          <div className={Style.content_wrap}>
            <div className={Style.ttl_wrap}>
              <h2 className="title_sub">{props?.data?.content_main_title}</h2>
              <h3 className="title mb-0">{props?.data?.content_title}</h3>
            </div>
            <div className={Style.text_wrap}>
              {props?.data?.content_description
                ? parse(props?.data?.content_description)
                : ""}
            </div>
            {props?.data?.link_section?.link_section?.length > 0 && (
              <div className={Style.offcanvas_link_wrap}>
                <h4 className={Style.link_ttl}>
                  {props?.data?.link_section?.link_section_title}
                </h4>
                <div className={`${Style.link_wrap} d-flex flex-wrap`}>
                  {props?.data?.link_section?.link_section?.map((item, i) => {
                    return (
                      <>
                        <Link href={item?.url || ""} target={item?.target}>
                          <a className={Style.link_item} key={i}>
                            <span className={Style.arrow}>{">"}</span>
                            <span className={Style.link}>{item?.title}</span>
                          </a>
                        </Link>
                      </>
                    );
                  })}
                </div>
              </div>
            )}

            {props?.data?.related_service?.service_section.length > 0 && (
              <div className={Style.related_service}>
                <div className={Style.related_service_ttl}>
                  <h4 className="title mb-0">
                    {props?.data?.related_service?.related_service_title}
                  </h4>
                </div>
                <div className={`${Style.related_service_img_wrap} row`}>
                  {props?.data?.related_service?.service_section.map(
                    (item, i) => {
                      return (
                        <>
                          <div className="col-6 col-sm-4" key={i}>
                            <Link href={item?.link || ""}>
                              <a className={Style.img_item}>
                                <figure className="ratio mb-0">
                                  <Image
                                    src={getImageUrl(
                                      item?.image ? item?.image : ""
                                    )}
                                    layout="fill"
                                    objectFit="cover"
                                    alt="service-img"
                                  ></Image>
                                </figure>
                                <div className={Style.img_text}>
                                  <p className={`${Style.text} mb-0`}>
                                    {item?.title}
                                  </p>
                                  <span className={Style.icon_wrap}>
                                    <Icons
                                      icon={"arrow-right-long"}
                                      size={18}
                                    />
                                  </span>
                                </div>
                              </a>
                            </Link>
                          </div>
                        </>
                      );
                    }
                  )}
                </div>
              </div>
            )}
            {props?.data?.expert_section && (
              <div className={Style.meet_our_expert}>
                <div className={Style.meet_our_expert_ttl}>
                  <h2 className="title_sub">
                    {props?.data?.expert_section?.main_title}
                  </h2>
                  <h3 className="title mb-0">
                    {props?.data?.expert_section?.title}
                  </h3>
                </div>
                <div className={Style.meet_our_expert_text}>
                  <p>{props?.data?.expert_section?.description}</p>
                </div>
                {props?.data?.expert_section?.button?.title && (
                  <Link
                    href={props?.data?.expert_section?.button?.url || ""}
                    target={props?.data?.expert_section?.button?.target}
                  >
                    <a className={`d-block ${Style.meet_our_expert_btn}`}>
                      <button className="btn btn-dark-border">
                        {props?.data?.expert_section?.button?.title}
                      </button>
                    </a>
                  </Link>
                )}
              </div>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasCard;
