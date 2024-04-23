import MenuBlogCard from "../cards/MenuBlogCard";
import MenuBlogDataCard from "../cards/MenuBlogDatacard";
import Style from "./BlogTab.module.scss";
import Link from "next/link";
const BlogTab = (props) => {
  return (
    <div className={Style.tab_blog}>
      <h3 className={Style.tab_blog_ttl}>{props?.props?.content_title}</h3>

      <div className={`${Style.tab_blog_content} d-flex`}>
        <div className={Style.tab_blog_left_wrap}>
          <MenuBlogCard props={props?.props?.blog_card[0]} />
        </div>
        <div className={Style.tab_blog_right_wrap}>
          {props?.props?.blog_card?.slice(1).map((item, index) => {
            return (
              <>
                {" "}
                <MenuBlogDataCard props={item}  />
              </>
            );
          })}

          <Link
            href={props?.props?.button?.url || ""}
            className={`btn btn-light-border  ${Style.hamburger_btn}`}
          >
            <button className={`btn btn-light-border  ${Style.hamburger_btn}`}>
              {props?.props?.button?.text}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BlogTab;
