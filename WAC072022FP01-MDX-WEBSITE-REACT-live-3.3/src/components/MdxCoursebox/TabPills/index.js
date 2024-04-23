import React from "react";
import Style from "../MdxCoursebox.module.scss";
import Image from "next/image";
import { getImageUrl } from "../../../apis";

const TabPills = ({ props }) => {
  const parse = require("html-react-parser");
  return (
    <>
      <ul className={`d-flex overflow-xl-auto p-0 ${Style.tabs_pills_outer}`}>
        {props?.data?.tab_item?.map((data, index) => {
          return (
            <>
              <li key={index}>
                <div className={`text-xl-center h-100 position-relative ${Style.infobox}`}>
                  <div
                    className={`d-flex align-items-end justify-content-center ${Style.infobox_title}`}
                  >
                    <Image src={getImageUrl(data?.icon)} layout="fill" alt={data?.icon} />
                    <div className={Style.text}>{data?.title}</div>
                  </div>
                  <div className={Style.infobox_content}>
                    {data?.content?.map((item, i) => {
                      return (
                        <React.Fragment key={i}>
                          <span>{parse(item)}</span>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default TabPills;
