import Link from "next/link";
import Image from "next/image";
import Style from "./NewsCard.module.scss";
import Icons from "../../Layout/Icons";
import { getImageUrl } from "../../../apis";
const NewsCard = (props) => {
  const parse = require("html-react-parser");
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props];
  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <Link href={data?.link || ""} key={index}>
            <div
              className={`${Style.news_item} ${
                data?.featured && Style.news_item_featured
              }`}
            >
              <div className={Style.news_item_img}>
                <div className={Style.news_item_img_wrap}>
                  <Image
                    src={
                      data?.img?.indexOf("://") === -1
                        ? getImageUrl(data?.img ? data?.img : "")
                        : data?.img
                    }
                    alt={data?.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className={Style.news_item_info}>
                <div className="d-flex justify-content-between align-items-start">
                  <h3>{data?.title}</h3>

                  {data?.featured ? (
                    <>
                      <div className="btn btn-link">
                        <Icons icon={"arrow-top-right-long"} size={13.76} />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                {data?.featured && <time className="mt-2">{data?.date}</time>}

                {!data?.featured ? (
                  <>
                    {data?.date && <time>{data?.date}</time>}
                    <p>
                      {data?.description &&
                        parse(data?.description?.replace(/(<([^>]+)>)/gi, ""))}
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default NewsCard;
