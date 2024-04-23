import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getImageUrl } from "../../apis";
import { useWindowSize } from "../../logic/useDimension";
import Assets from "../Layout/AlumniLayout/assets";
import Style from "./AlumniMap.module.scss";

const AlumniMap = ({ props }) => {
  const { width } = useWindowSize();

  return (
    <section className={Style.alumni_map}>
      <div className="container">
        {width > 992 && (
          <figure className={Style.alumni_map_image}>
            <Image
              src={getImageUrl(props?.data?.img)}
              alt={"alumni-map"}
              width={980}
              height={452}
              objectFit="cover"
            />
          </figure>
        )}
        <div className={Style.alumni_map_contents}>
          <h2 className="title title-sm title-white">{props?.data?.title}</h2>
          <p className="paragraph">{props?.data?.sub_title}</p>
          <Link href={props?.data?.button_link || ""}>
            <button className="btn btn-primary btn-full-width">
              {props?.data?.button_text}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AlumniMap;
