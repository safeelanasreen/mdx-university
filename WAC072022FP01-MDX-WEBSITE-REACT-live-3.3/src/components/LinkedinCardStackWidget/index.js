import LinkedinCard from "../cards/LinkedinCard";
import Style from "./LinkedinCardStackWidget.module.scss";
import { useLinkedinCardStackWidget } from "./useLinkedinCardStackWidget";

const LinkedinCardStackWidget = ({ props }) => {
  const { data, count, status, handleLoadMore } = useLinkedinCardStackWidget();
  return (
    <section id="mdxblogs" className={`${Style.news_cardstack_widget} `}>
      <div className={`container ${props?.data?.no_spacing?.x ? "px-0" : ""}`}>
        <div className={"row row-cols-md-2 row-cols-xl-3"}>
          {status === "pending"
            ? [...Array(data?.length || 6)]?.map((data, i) => {
                return (
                  <div key={i}>
                    <div className={Style.linkedinshimmer}>
                      <div className={Style.linkedinshimmer_img}>
                        <div className={Style.linkedinshimmer_animate}></div>
                      </div>
                      <div className={Style.linkedinshimmer_title}>
                        <span>FINDING YOUR COMMUNITY, IN AN MDX SPORTS TEAM</span>
                        <div className={Style.linkedinshimmer_animate}></div>
                      </div>
                    </div>
                  </div>
                );
              })
            : data?.length !== 0 && status == "success"
            ? data?.map((item, i) => {
                return (
                  <div className={Style.card_item} key={i}>
                    <LinkedinCard props={item} />
                  </div>
                );
              })
            : ""}
        </div>
        {count > data?.length && (
          <div className={`w-100 text-center ${Style.pagination_wrap}`} id="scroll_id_partner">
            <button className="btn btn-primary" onClick={handleLoadMore}>
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LinkedinCardStackWidget;
