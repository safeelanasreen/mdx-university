import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getImageUrl } from "../../../apis";
import Icons from "../../Layout/Icons";

import Style from './ExperienceMain.module.scss'

const ExpetienceMain = (props) => {
  props = props?.props ? props?.props : props
  return (
    <div
      className={`${Style.experience_grid_main} ${Style.experience_grid_item}`}
    >
      <Image
        layout="fill"
        objectFit="cover"
        src={getImageUrl(props?.data?.background_image || "")}
        alt={"Experience"}
      />
      <div className={Style.experience_grid_content}>
        <h4 className="text-white title_sub">{props?.data?.sub_title}</h4>
        <h2 className={`title text-white`}>{props?.data?.title}</h2>
        <Link
          href={props?.data?.link || "/mdx-experience"}
          className="viewmore"
        >
          <button className="btn-see btn-see-grey btn-see-grey-light">
            See More
            <span>
              <Icons icon={"arrow-right"} size={15} />
            </span>
          </button>
        </Link>
      </div>

      <ul className={Style.experience_grid_content_navlinks}>
        {props?.data?.experience_category?.map((value, i) => {
          return (
            <li key={i}>
              <Link href={value?.links || ""}>
                <a>{value?.category_name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExpetienceMain;
