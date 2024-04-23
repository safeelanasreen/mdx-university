import React from "react";
import Style from "./AlumniStayConnected.module.scss";
import Link from "next/link";

const AlumniStayConnected = ({ props }) => {
  return (
    <section className={Style.alumni_stay_connected}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <h2 className="title title-sm">{props?.data?.title}</h2>
          </div>
          <div className="col-xl-6">
            <p className="paragraph">{props?.data?.sub_title}</p>
            <Link href={props?.data?.button_link || "/alumni/keep-in-touch"}>
              <a className="btn btn-light">{props?.data?.button_text}</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniStayConnected;
