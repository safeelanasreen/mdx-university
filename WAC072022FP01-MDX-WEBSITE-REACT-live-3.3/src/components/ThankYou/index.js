import Image from "next/image";
import Link from "next/link";
import React from "react";
import Style from "./ThankYou.module.scss";
import { getImageUrl } from "../../apis";

const ThankYou = ({ props }) => {
  return (
    <section className={Style.error_page}>
      <div className="container-fluid">
        <figure className={Style.error_page_fig}>
          <Image
            src={getImageUrl(props?.data?.img)}
            alt={"Error"}
            layout="fill"
            objectFit="contain"
          />
        </figure>
        <h1>{props?.data?.title}</h1>
        <p>{props?.data?.content}</p>
        <Link href={props?.data?.btn_link}>
          <a className="btn btn-primary">{props?.data?.btn_text}</a>
        </Link>
      </div>
    </section>
  );
};

export default ThankYou;
