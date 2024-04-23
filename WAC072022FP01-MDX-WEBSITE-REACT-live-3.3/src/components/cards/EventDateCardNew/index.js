import Image from "next/image";
import Icons from "../../Layout/Icons";
import Style from "./EventDateCardNew.module.scss";
import Link from "next/link";
import { getImageUrl } from "../../../apis";

const EventDateCardNew = (props) => {
  return (
    <div className={Style.card}>

  

      <figure className={`ratio ${Style.card_figure}`}>
        <Image
          src={
            props?.props?.image ? getImageUrl(props?.props?.image) || "/images/news/dummy-img.png" : "/images/news/dummy-img.png"
          }
          layout="fill"
          objectFit="cover"
          alt="Our doors are open – visit us at our Dubai Knowledge Park (DKP) campus"
        />
      </figure>
      <div className={Style.card_content}>
      <Link href={props?.props?.url}>
         <a className="fill-link"></a>
      </Link>
        <div
          className={`d-flex flex-wrap align-items-start justify-content-between ${Style.card_head}`}
        >
          <div className={Style.card_date}>
            <span className={Style.date}>{props?.props?.date?.day}</span>
            <span className={Style.month}>{props?.props?.date?.month}</span>
          </div>
          {props?.props?.tag && (
            <div className={Style.card_category}>{props?.props.tag}</div>
          )}
        </div>
        <div className={Style.card_body}>
          <h3 className={Style.card_title}>{props?.props?.title}</h3>
        </div>
        <div
          className={`d-flex justify-content-between align-items-center ${Style.card_footer}`}
        >
          <div className={`d-flex align-items-center ${Style.address}`}>
            <Icons icon="location" size={14} />{" "}
            <span>{props?.props?.place}</span>
          </div>
          <span className={Style.datecard_arrow}>
          <Icons icon="arrow-top-right-long" size={14} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventDateCardNew;
