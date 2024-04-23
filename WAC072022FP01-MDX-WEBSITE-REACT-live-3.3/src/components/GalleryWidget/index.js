import React, { useState } from "react";
import "yet-another-react-lightbox/styles.css";

import Style from "./GalleryWidget.module.scss";
import PhotoGallery from "../PhotoGallery";
import Link from "next/link";
import Icons from "../Layout/Icons";

const GalleryWidget = ({ props }) => {
  return (
    <section className={Style.gallery_widget} id={props?.data?.scrollID || ""}>
      <div className="container">
        <div className="my-3">
          <h1 className="title title-sm">{props?.data?.title || "Gallery"}</h1>
        </div>
        <PhotoGallery images={props?.data?.images} />
        {props?.data?.link && (
          <Link href={props?.data?.link}>
            <div className="text-center mt-5">
              <a className="btn btn-link">View More</a>
              <span className="btn-link-icon">
                <Icons icon={"arrow-top-right-long"} size={10.36} />
              </span>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default GalleryWidget;
