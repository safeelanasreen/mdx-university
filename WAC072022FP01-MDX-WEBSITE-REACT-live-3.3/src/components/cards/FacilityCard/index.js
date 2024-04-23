import Link from "next/link";
import Image from "next/image";
import Style from "./FacilityCard.module.scss";
import Icons from "../../Layout/Icons";
import { getImageUrl } from "../../../apis";

const FacilityCard = (props) => {
  const parse = require("html-react-parser");

  const cardsData = props?.props?.data?.length ? props?.props?.data : props?.props?.data ? [props?.props?.data] : 
  props?.data?.length ? props?.data : props?.data ? [props?.data] : props?.length ? props : [props]
  
  return (
    <>
    {cardsData?.map((data,index)=>{
      return(
        <Link href={data?.link || ""} key={index}>
          
        <div className={`${Style.grid_item}`}>
          <span className={Style.cover}></span>
          {data?.img && (
            <div className={Style.grid_item_img}>
              <Image layout="fill" objectFit="cover" src={data?.img?.indexOf("://") === -1
                        ? getImageUrl(
                            data?.img ? data?.img : ""
                          )
                        : data?.img} alt={data?.title} />
            </div>
          )}

          <div className={Style.grid_item_info}>
            <div className={Style.letter}>
              <span className="letter">{data?.title?.charAt(0)}</span>
            </div>
            <div className={Style.content_wrap}>
              <div className="d-flex justify-content-between align-items-end">
                <h3 className="headings">{data?.title}</h3>

                <div className="ps-3">
                  <Icons icon={"arrow-top-right-long"} size={23.13} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      )
    })}
      
    </>
  );
};

export default FacilityCard;
