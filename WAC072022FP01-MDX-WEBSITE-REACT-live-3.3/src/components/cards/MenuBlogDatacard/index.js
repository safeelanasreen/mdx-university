import Link from "next/link";
import Icons from "../../Layout/Icons";
import Style from "./MenuBlogDataCard.module.scss";
const MenuBlogDataCard = (props) => {
  const parse = require("html-react-parser");
  return (
    <Link href={props?.props?.link || ""}>
      <a className={Style.datacard}>
        <h3 className={Style.datacard_ttl}>{props?.props?.blog_title}</h3>
        <p>{parse(`${props?.props?.short_description.slice(0, 100)}...`)}</p>
        <div className={`d-flex ${Style.calendar_wrap} align-items-center`}>
          <Icons icon={"calendar"} size={16} />
          <p className="mb-0">{props?.props?.blog_date}</p>
        </div>
      </a>
    </Link>
  );
};
export default MenuBlogDataCard;
