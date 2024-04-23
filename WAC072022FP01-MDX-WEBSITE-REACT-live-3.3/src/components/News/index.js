import EventListing from "../EventListing";
import NewsListing from "../NewsListing";
import Style from "./News.module.scss";
const News = ({ props }) => {
  return (
    <section className={Style.mdx_news_sec}>
      <div className="container-fluid">
        <h4 className="title_sub">{props?.data?.sub_title}</h4>
        <h2 className={`title`}>{props?.data?.title}</h2>
        <div className={`row ${Style.row}`}>
          <div className="col-xl-8 px-0 px-xl-3">
            <NewsListing data={props?.data} />
          </div>
          <div className="col-xl-4 px-0 px-xl-3">
            <EventListing data={props?.data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
