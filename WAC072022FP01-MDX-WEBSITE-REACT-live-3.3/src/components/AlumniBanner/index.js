import Image from "next/image";
import React from "react";
import { getImageUrl } from "../../apis";
import AlumniForm from "../AlumniForm";
import Assets from "../Layout/AlumniLayout/assets";
import Style from "./AlumniBanner.module.scss";

const AlumniBanner = ({ props }) => {
  return (
    <section className={Style.alumni_banner}>
      <Image
        src={getImageUrl(props?.data?.img)}
        alt={"logo"}
        layout="fill"
        objectFit="cover"
      />
      <div className="container ">
        <div className="row align-items-lg-center align-items-end h-100">
          <div className="col-lg-6 ms-lg-auto">
            <AlumniForm props={props} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniBanner;
