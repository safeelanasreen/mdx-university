import { useState } from "react";
import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import Icons from "../Layout/Icons";
import Style from "./ImageHoverComponent.module.scss";
import OffCanvasCard from "../cards/OffCanvasCard";
import useImageHoverComponent from "./useImageHoverComponent";
import { getImageUrl } from "../../apis";

const ImageHoverComponent = (props) => {
  const {
    width,
    show,
    setShow,
    handleClose,
    handleShow,
    handleSelect,
    data,
    setData,
  } = useImageHoverComponent();
  const parse = require("html-react-parser");
  return (
    <>
      <section className={Style.image_hover_sec}>
        <div className="container">
          <div className={Style.content_top}>
            <div className="row align-items-center g-3">
              <div className="col-md-7">
                <div className={Style.ttl_wrap}>
                  <h2 className="title_sub">
                    {props?.props?.data?.main_title}
                  </h2>
                  <h3 className="title mb-0">{props?.props?.data?.title}</h3>
                </div>
              </div>
              <div className="col-md-5">
                <div className={Style.text_wrap}>
                  {props?.props?.data?.description && parse(props?.props?.data?.description)}
                </div>
              </div>
            </div>
          </div>
          <div className={Style.content_bottom}>
            <h4 className={Style.ttl}>{props?.props?.data?.side_title}</h4>
            <div className={Style.link_wrap}>
              {props?.props?.data?.side_section_array?.map((item, i) => {
                return (
                  <>
                    <div onClick={() => setData(item)}>
                      <button onClick={handleShow} key={i}>
                        <h3 className={Style.content_bottom_ttl}>
                          {item?.section_title}
                        </h3>
                        <span className={Style.icon_wrap}>
                          <Icons icon={"arrow-right-slim"} size={20} />
                        </span>
                        {width >= 1200 ? (
                          <div className={Style.img_wrap}>
                            {item?.image?.url && (
                              <figure className="mb-0 ratio">
                                <Image
                                  src={getImageUrl(
                                    item?.image?.url ? item?.image?.url : ""
                                  )}
                                  layout="fill"
                                  objectFit="cover"
                                  alt={item?.image?.alt}
                                ></Image>
                              </figure>
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <OffCanvasCard show={show} handleClose={handleClose} data={data} />
    </>
  );
};
export default ImageHoverComponent;
