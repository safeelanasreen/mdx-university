import React from "react";
import Image from "next/image";

import Style from "./SportsCard.module.scss";
import { getImageUrl } from "../../../apis";
import Link from "next/link";

const SportsCard = (props) => {
  const cardsData = props?.props?.data?.length ? props?.props?.data : props?.props?.data ? [props?.props?.data] : [props?.props];
  return (
    <>
    {cardsData?.map((data,index)=>{
      return(
        <Link href={data?.link} key={index}>
          <div className={Style.sports_card}>
            <figure className={Style.sports_card_fig}>
              <Image src={
                              data?.img?.indexOf("://") === -1
                                ? getImageUrl(
                                    data?.img ? data?.img : ""
                                  )
                                : data?.img
                            } layout="fill" />
            </figure>
            <div className={Style.sports_card_detail}>
              <div className={Style.sports_card_detail_cnt}>
                <h3>{data?.title}</h3>
                <p>{data?.content}</p>
              </div>
            </div>
          </div>
        </Link>
      )
    })}
    </>
  );
};

export default SportsCard;
