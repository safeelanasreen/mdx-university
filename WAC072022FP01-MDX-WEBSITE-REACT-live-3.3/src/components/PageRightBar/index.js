import Icons from "../Layout/Icons";
import Style from "./PageRightBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "../../apis";
import moment from "moment";

const PageRightBar = ({ props }) => {
  const parse = require("html-react-parser");

  window.moment = moment;
  return (
    <div className={Style.upcomings_events}>
      <div className={Style.upcomings_events_list}>
        {props?.data?.card_type === "blog_detail" ? (
          <>
            <ul className={Style.post_short_detail}>
              {props?.data?.cards?.result?.map((data, index) => {
                return (
                  <li key={index}>
                    {data?.title ? (
                      <div className={Style.post_short_detail_title}>{data?.title}</div>
                    ) : (
                      ""
                    )}
                    {data?.name ? <p>{parse(data?.name)}</p> : ""}
                    {data?.desc?.length > 0 ? <p>{parse(data?.desc)}</p> : ""}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          ""
        )}
        <h3 className={Style.upcomings_events_title}>{props?.data?.title}</h3>

        {props?.data?.card_type === "news_archive" ? (
          <>
            <ul className={Style.news_archive_list}>
              {props?.data?.cards?.result?.map((data, index) => {
                return (
                  <li key={index}>
                    <Link href={data?.link}>{data?.news}</Link>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <>
            {props?.data?.cards?.result?.map((data, index) => {
              return (
                <>
                  {data?.description && (
                    <Link key={index} href={data?.link}>
                      <div className={Style.upcomings_events_item}>
                        <div className={Style.upcomings_events_date_wrap}>
                          <span className={Style.upcomings_events_date}>{data?.date?.day}</span>
                          <span className={Style.upcomings_events_month}>
                            {moment(new Date(`${data?.date?.day} ${data?.date?.month}`)).format(
                              "MMM"
                            )}
                          </span>
                        </div>
                        <div className={Style.upcomings_events_content}>{data?.description}</div>
                      </div>
                    </Link>
                  )}
                </>
              );
            })}
          </>
        )}
      </div>
      {/* <div className={Style.upcomings_events_tweets}>
        <h3 className={Style.upcomings_events_title}>
          {props?.data?.rightFooter?.data?.title}
        </h3>
        <a
          className="twitter-timeline"
          href="https://twitter.com/MiddlesexDubai?ref_src=twsrc%5Etfw"
        >
          Tweets by MiddlesexDubai
        </a>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
        <div className={Style.upcomings_events_tweets_address_wrap}>
          <div className={Style.upcomings_events_tweets_logo}>
            <Image
              src={"/images/logo.svg"}
              alt={"logo"}
              fill
              style={{objectFit: "cover"}}
            />
          </div>
          <div className={Style.upcomings_events_tweets_content}>
            <p className={Style.upcomings_events_tweets_name}>
              {props?.data?.rightFooter?.data?.linkAddress?.address}
            </p>
            <span className={Style.upcomings_events_tweets_tag}>
              {props?.data?.rightFooter?.data?.linkAddress?.tag}
            </span>
          </div>
        </div>
        <p>{props?.data?.rightFooter?.data?.description}</p>
        <a
          className="twitter-timeline"
          href="https://twitter.com/MiddlesexDubai?ref_src=twsrc%5Etfw"
        >
          Tweets by MiddlesexDubai{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
          <span>{props?.data?.rightFooter?.data?.url}</span>
          <Icons icon="external-link" size={12} />
        </a>
      </div> */}
    </div>
  );
};

export default PageRightBar;
