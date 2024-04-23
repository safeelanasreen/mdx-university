import Link from "next/link";
import NewsCard from "../cards/NewsCard";
import Icons from "../Layout/Icons";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./NewsListing.module.scss";
import moment from "moment";
import { getImageUrl } from "../../apis";

const NewsListing = (props) => {
  const data = props?.props?.data ? props?.props?.data : props?.data;
  return (
    <div className={Style.news_wrap}>
      <div className={`row ${Style.row}`}>
        {data?.show_latest == undefined || data?.show_latest == true ? (
          <div className={Style.col_left}>
            <h4 className={`title_sub ${Style.title}`}>{data?.latest_news_title}</h4>
            {data?.recent_news?.slice(0, 1)?.map((n, i) => (
              <NewsCard
                key={i}
                title={n?.title}
                img={getImageUrl(n?.news_image_full_url ? n?.news_image_full_url : n?.img ?? "")}
                date={moment(new Date(n?.news_date)).format("dddd, D MMMM YYYY")}
                featured
                link={n?.links}
              />
            ))}
          </div>
        ) : (
          ""
        )}
        <div
          className={`${Style.col_right} ${
            data?.show_latest == undefined || data?.show_latest == true ? "" : "w-100"
          }`}
        >
          <div className={`d-flex justify-content-between  align-items-center ${Style.btn_wrap}`}>
            <h4 className={`title_sub mb-0 ${Style.title}`}>{data?.recent_news_title}</h4>
            <Link href={data?.news_listing_link || ""} className="viewmore">
              <button className={`btn mb-2 btn-link`}>
                <span className="me-2">Read More</span> <Icons icon={"arrow-right"} size={10} />
              </button>
            </Link>
          </div>
          {data?.recent_news?.slice(1, 4).map((n, i) => (
            <NewsCard
              title={n?.title}
              key={i}
              img={getImageUrl(n?.news_image_full_url ? n?.news_image_full_url : n?.img ?? "")}
              date={moment(new Date(n?.news_date)).format("dddd, D MMMM YYYY")}
              description={n?.description}
              link={n?.links}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsListing;
