import React from "react";
import GlobalPartners from "../GlobalPartners";
import GlobalPresence from "../GlobalPresence";
import Style from "./GlobalPresencePartners.module.scss";

const GlobalPresencePartners = ({ props }) => {
  return (
    <section className={Style.global}>
      <div className={Style.global_wrapper}>
        <div className={Style.global_presence}>
          <GlobalPresence data={props?.data} />
        </div>
        <div className={Style.global_partners}>
          <GlobalPartners data={props?.data} />
        </div>
      </div>
    </section>
  );
};

export default GlobalPresencePartners;
