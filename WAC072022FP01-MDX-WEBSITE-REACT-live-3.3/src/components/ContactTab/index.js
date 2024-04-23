import Link from "next/link";
import MenuContactList from "../cards/MenuContactList";
import SocialIconList from "../cards/SocialIconList";
import Style from "./ContactTab.module.scss";

const ContactTab = (props) => {
  return (
    <div className={Style.tab_contact}>
      <div className={`${Style.tab_contact_text} ${Style.tab_contact_top} `}>
        <h2 className={Style.tab_contact_ttl}>{props?.props?.content_title}</h2>

        <p>
        {props?.props?.content_description}
        </p>
        <Link href={props?.props?.button?.url || ""}>
        <button className={`btn btn-light-border  ${Style.hamburger_btn}`}>
          {props?.props?.button?.text}
        </button>
        </Link>
      </div>
      <div className={Style.tab_contact_list}>
        <div className={`d-flex ${Style.wrap}`}>
          <ul className={` ${Style.wrap_ul} ${Style.contact_item_left}`}>
            {props?.props?.leftData.map((data) => {
              return <MenuContactList props={data} key={data.id} />;
            })}
          </ul>

          <ul className={`${Style.wrap_ul} ${Style.contact_item_right}`}>
            {props?.props?.rightData.map((data) => {
              return <SocialIconList props={data} key={data.id} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ContactTab;
