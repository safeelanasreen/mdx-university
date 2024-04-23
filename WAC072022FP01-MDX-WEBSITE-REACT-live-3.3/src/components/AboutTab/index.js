import Link from "next/link";
import Style from "./AboutTab.module.scss";
const AboutTab = (props) => {
  return (
    <div className={Style.tab_content}>
      <div className={Style.tab_content_desktop_text}>
        <h2 className={Style.tab_content_desktop_ttl}>
          {props?.props?.content_title}
        </h2>

        <p>{props?.props?.content_description}</p>
      </div>
      <div className={`${Style.tab_content_count_wrap} d-flex `}>
        {props?.props?.count?.map((item, index) => {
          return (
            <>
              <div className={Style.count} key={index}>
                <h3 className={Style.count_num}>{item?.count_number}</h3>
                <p className="mb-0">{item?.count_title}</p>
              </div>
            </>
          );
        })}
      </div>
      <Link href={props?.props?.button?.url}>
        <button className={`btn btn-light-border  ${Style.hamburger_btn}`}>
          {props?.props?.button?.text}
        </button>
      </Link>
    </div>
  );
};
export default AboutTab;
