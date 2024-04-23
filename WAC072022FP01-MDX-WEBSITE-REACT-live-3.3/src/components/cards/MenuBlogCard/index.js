import Link from "next/link";
import Image from "next/image";
import Assets from "../../Layout/CommonLayout/assets";
import Icons from "../../Layout/Icons";
import Style from "./MenuBlogCard.module.scss";
import { getImageUrl } from "../../../apis";

const MenuBlogCard = (props) => {
  const parse = require("html-react-parser");
  return (
    <Link href={props?.props?.link || ""}>
      <a className={Style.blogcard}>
        <figure className="ratio">
          <Image
          src={getImageUrl(props?.props?.blog_image?.url) || ""}
          layout="fill"
          objectFit="cover"
          alt={props?.props?.blog_image?.alt ?? "blog_image"} 
        />
        </figure>
        <div className={Style.blogcard_text}>
          <div className="d-flex justify-content-between align-items-start">
            <h3 className={Style.blogcard_text_ttl}>
              {props?.props?.blog_title}
            </h3>
            <div className={Style.arrow}>
              <Icons icon={"arrow-top-right-long"} size={16} />
            </div>
          </div>

          <p>{parse(`${props?.props?.blog_description.slice(0,100)}...`)}</p>
          <div className={`d-flex ${Style.calendar_wrap} align-items-center`}>
            <Icons icon={"calendar"} size={16} />
            <p className="mb-0"> {props?.props?.blog_date}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default MenuBlogCard;
