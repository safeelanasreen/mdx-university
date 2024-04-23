import React from "react";
import Style from "./RecentStackWidget.module.scss";

import Image from "next/image";
import RecentStackSlider from "../RecentStackSlider";
import { useWindowSize } from "../../logic/useDimension";
import { getImageUrl } from "../../apis";
import Link from "next/link";

const RecentStackWidget = (props) => {
  props = props?.props?.data ? props?.props?.data : props?.props;
  const { width } = useWindowSize();
  return (
    <section id="Recent Updates" className={Style.recent_stack_widget}>
      <div className="container-fluid">
        <h2 className="title title-sm">{props?.title}</h2>
      </div>
      <div className={`container-fluid ${width < 576 ? "px-0" : ""}`}>
        <div className={Style.recent_stack_widget_wrap}>
          <div className={Style.recent_stack_widget_slider}>
            <RecentStackSlider props={props?.recent_stack_slider} />
          </div>
          <div className={Style.recent_stack_widget_list}>
            {props?.recent_updates?.slice(0, 2)?.map((item, index) => (
              <div key={index} className={Style.recent_stack_widget_list_item}>
                <div className={Style.recent_stack_widget_list_item_bg}>
                  <Link href={item?.link}>
                    <Image
                      src={
                        item?.img?.indexOf("://") === -1
                          ? getImageUrl(item?.img ? item?.img : "")
                          : item?.img
                      }
                      objectFit="cover"
                      layout="fill"
                      alt={"Recent Update"}
                    />
                  </Link>
                </div>
                <div className={Style.recent_stack_widget_list_item_title}>
                  <h3>{item?.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentStackWidget;
