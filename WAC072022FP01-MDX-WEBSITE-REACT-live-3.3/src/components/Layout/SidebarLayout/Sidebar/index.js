import Icons from "../../Icons";
import Style from "./Sidebar.module.scss";

const Sidebar = ({ props }) => {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    if (typeof window !== undefined) {
      let target = document.getElementById(id);
      window.scrollTo(window.scrollX, target?.offsetTop - 80);
    }
  };
  return (
    <aside className={Style.sidebar}>
      <ul id="scrollbar">
        {props?.new_sidebar_links
          ? props?.new_sidebar_links?.map((link, i) => (
              <li key={link?.anchor_id}>
                <a
                  onClick={(e) => handleLinkClick(e, link?.anchor_id)}
                  data-to-scrollspy-id={link?.anchor_id}
                >
                  {link?.title?.toUpperCase()}
                  <span>
                    <Icons icon="arrow-top-right-long" size={14} />
                  </span>
                </a>
              </li>
            ))
          : props?.sidebar_links?.map((link, i) => (
              <li key={link}>
                <a onClick={(e) => handleLinkClick(e, link)} data-to-scrollspy-id={link}>
                  {link?.toUpperCase()}
                  <span>
                    <Icons icon="arrow-top-right-long" size={14} />
                  </span>
                </a>
              </li>
            ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
