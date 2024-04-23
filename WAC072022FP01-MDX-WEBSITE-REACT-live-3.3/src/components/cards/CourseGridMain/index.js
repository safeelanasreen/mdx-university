import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getImageUrl } from "../../../apis";

import Icons from "../../Layout/Icons";

import Style from "./CourseGridMain.module.scss";

const CourseGridMain = ({ props }) => {
  const cardsData = props?.data.length ? props?.data : [props?.data];
  return (
    <>
    {cardsData?.map((data,index)=>{
      return(
        <Link href={"/study"} key={index}>
        <div className={`${Style.course_grid_main} ${Style.course_grid_item}`}>
          <Image
            layout="fill"
            objectFit="cover"
            src={data?.img?.indexOf("://") === -1
                        ? getImageUrl(
                            data?.img ? data?.img : ""
                          )
                        : data?.img}
            alt={"course"}
          />
          <div className={Style.course_grid_content}>
            <h4 className="text-white title_sub">{data?.sub_title}</h4>
            <h2 className={`title text-white`}>{data?.title}</h2>
            <a className="btn-round btn-round-grey btn-round-grey-light md">
              <Icons icon={"arrow-right"} size={15} />
            </a>
          </div>
        </div>
      </Link>
      )
    })}
    </>
  );
};

export default CourseGridMain;
