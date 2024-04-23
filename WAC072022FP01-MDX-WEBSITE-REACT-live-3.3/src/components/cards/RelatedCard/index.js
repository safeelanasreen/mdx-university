import Link from "next/link";
import Image from "next/image";
import Style from "./RelatedCard.module.scss";
import Icons from "../../Layout/Icons";
import { getImageUrl } from "../../../apis";
const RelatedCard = (props) => {
 const cardsData = props?.props?.data?.length ? props?.props?.data : props?.props?.data ? [props?.props?.data] : [props];
  return (
    <>
    {cardsData?.map((data,index)=>{
      const title = data?.title;
      const img = data?.img;
      const link = data?.link;
      const startswithSlash = link?.startsWith("/");
      return(
        <Link href={startswithSlash ? link : `/${link} `|| "" } key={index}>
          <div className={`${link && Style.cursor} ${Style.grid_item} grid-item ${cardsData?.length > 1 ? "h-auto" : ""}`}>
            <span className={`${Style.cover} grid-cover`}></span>
            {img && (
              <div className={`${Style.grid_item_img} grid-img`}>
                <Image layout="fill" objectFit="cover"  src={
                            img?.indexOf("://") === -1
                              ? getImageUrl(img)
                              : img
                          } alt={title} />
              </div>
            )}
  
            <div className={Style.grid_item_info}>
              <div className={Style.content_wrap}>
                <div className="d-flex justify-content-between">
                  <h3>{title}</h3>
                  {title && link && (
                    <div className="btn btn-link btn-link-white ps-3">
                      <Icons icon={"arrow-right-long"} size={23.13} />
                    </div>
                  )}
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

export default RelatedCard;
