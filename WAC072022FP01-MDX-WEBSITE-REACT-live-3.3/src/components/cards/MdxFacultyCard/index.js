import Image from "next/image";

import Icons from "../../Layout/Icons";

import Style from "./MdxFacultyCard.module.scss";
import Link from "next/link";
import { getImageUrl } from "../../../apis";

const MdxFacultyCard = ({ props }) => {
  const cardData = props?.data?.length
    ? props?.data
    : props?.data
    ? [props?.data]
    : props?.length
    ? props
    : [props];

  return (
    <>
      {cardData?.map((data, index) => {
        const cardLength = cardData?.length;
        return (
          <>
            <div
              className={`position-relative ${Style.card} ${cardLength > 1 ? "h-auto" : "h-100"}`}
              key={index}
            >
              <Link href={data?.link || ""}>
                <a className="fill-link"></a>
              </Link>
              <figure className={`ratio ${Style.card_figure}`}>
                <Image
                  src={getImageUrl(data?.image?.url)}
                  layout="fill"
                  objectFit="cover"
                  alt={data?.image?.alt}
                />
              </figure>
              <div className={`${Style.card_body} d-flex align-items-end`}>
                <div className={Style.card_content}>
                  <h3 className={Style.card_name}>{data?.title}</h3>
                  {data?.designation?.map((data, i) => (
                    <p key={i}>{data}</p>
                  ))}
                </div>
                <div className={Style.arrow}>
                  <Icons icon="arrow-top-right-long" size={20} />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MdxFacultyCard;
