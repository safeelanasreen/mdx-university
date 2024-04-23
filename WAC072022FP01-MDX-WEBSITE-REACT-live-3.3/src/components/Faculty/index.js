import FacultyCard from "../cards/FacultyCard";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./Faculty.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const Faculty = ({ props }) => {
  const route = useRouter();
  const width = useWindowSize();

  const [limit, setLimit] = useState(3);

  let card = [];
  if (width?.width < 992) {
    card = props?.data?.cards?.slice(0, limit);
  } else {
    card = props?.data?.cards;
  }

  return (
    <section
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
      className={`${Style.mdx_faculty_sec} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      }`}
    >
      <div className="container-fluid">
        <h3>{props?.data?.title}</h3>
        <div
          className={`${Style.row} row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-4`}
        >
          {card?.map((value, i) => {
            return (
              <div key={i}>
                <FacultyCard data={value} />
              </div>
            );
          })}
        </div>
        {(width?.width < 992 &&props?.data?.cards?.length>limit) && (
          <div className={`${Style.btn_wrap} text-center`}>
            <button className="btn btn-primary" onClick={()=>{setLimit(limit+10)}}>Load More</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Faculty;
