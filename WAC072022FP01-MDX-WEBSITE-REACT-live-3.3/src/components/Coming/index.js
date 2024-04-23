import Image from "next/image";
import Link from "next/link";
import React from "react";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./Coming.module.scss";

const Coming = () => {
  return (
    <section className={Style.error_page}>
      <div className="container-fluid">
        <figure className={Style.error_page_fig}>
          <Image
            src={Assets.coming}
            alt={"Error"}
            layout="fill"
            objectFit="contain"
          />
        </figure>
        <h1>Coming Soon!</h1>
        <p>No worries, just go back to home</p>
        <Link href={"/"}>
          <button className="btn btn-primary">Back to home</button>
        </Link>
      </div>
    </section>
  );
};

export default Coming;
