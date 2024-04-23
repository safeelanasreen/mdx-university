import Image from "next/image";
import Link from "next/link";
import React from "react";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./Error.module.scss";
import AlphaRangeWidget from "../AlphaRangeWidget";

const Error = () => {
  const darkTheme = false;
  return (
    <section className={Style.error_page}>
      <div className="container-fluid">
        <figure className={Style.error_page_fig}>
          <Image
            src={darkTheme ? Assets.error_dark_gif : Assets.error_gif}
            alt={"Error"}
            layout="fill"
            objectFit="contain"
          />
        </figure>
        <h1>Sorry, we couldn&apos;t find that page.</h1>
        <p>No worries, just go back to home</p>
        <Link href={"/"}>
          <button className="btn btn-primary">Back to home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
