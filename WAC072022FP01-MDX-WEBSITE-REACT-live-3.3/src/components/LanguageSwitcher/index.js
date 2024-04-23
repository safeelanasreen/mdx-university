import React from "react";
import Icons from "../Layout/Icons";
import Style from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  return (
    <>
      <div className={Style.languge_switcher}>
        <div className={Style.languge_switcher_active}>
          <span className={Style.languge_switcher_icon}>
            <Icons icon={"globe"} size={18.83} />{" "}
          </span>
          <span className={Style.languge_switcher_label}>
            <span>English</span>
          </span>
          <span className={Style.languge_switcher_arrow}>
            <Icons icon={"arrrow-down-md-thin"} size={10.75} />
          </span>
        </div>
        <div className={Style.languge_switcher_dropdown}>
          <ul>
            <li>Arabic</li>
            <li>French</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LanguageSwitcher;
