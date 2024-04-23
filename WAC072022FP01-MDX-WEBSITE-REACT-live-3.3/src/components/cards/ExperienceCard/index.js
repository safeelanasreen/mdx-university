import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "../../../apis";
import Style from "./ExperienceCard.module.scss";
const ExperienceCard = (props) => {
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props];

  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <Link href={data?.link || ""} key={index}>
            <div className={`${Style.grid_item} ${cardsData?.length > 1 ? "h-auto" : ""}`}>
              <div className={Style.grid_item_img}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={data?.img?.indexOf("://") === -1
                  ? getImageUrl(
                      data?.img ? data?.img : ""
                    )
                  : data?.img}
                  alt={data?.title}
                />
              </div>

              <div className={Style.grid_item_info}>
                <div className={Style.letter}>
                  <span>{data?.title?.charAt(0)}</span>
                </div>
                <div className={Style.content_wrap}>
                  <h3>{data?.title}</h3>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ExperienceCard;
