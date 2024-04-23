import Link from "next/link";
import React from "react";
import Icons from "../../Layout/Icons";
import Style from "./JobsCard.module.scss";

const JobsCard = (props) => {
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props];
  const parse = require("html-react-parser");
  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <Link href={data?.link || "/"} key={index}>
            <div className={Style.job_card}>
              <div className={Style.job_card_title}>
                <span>{data?.job_title}</span>
                <Icons icon={"arrow-top-right-long"} size={14} />
              </div>
              <div className={Style.job_card_postby}>
                <span className={Style.job_card_postby_icon}>
                  <Icons icon={"calendar"} size={18} />
                </span>{" "}
                <span className={Style.job_card_postby_date}>
                  {data?.posted_on}
                </span>
              </div>
              {data?.job_desc && (
                <div className={Style.job_card_description}>
                  {parse(data?.job_desc)}
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default JobsCard;
