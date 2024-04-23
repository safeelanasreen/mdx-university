import { useState, useRef, useEffect } from "react";
import NewsUpdateCard from "../cards/NewsUpdateCard";
import CustomPagination from "../CustomPagination";
import Style from "./NewsCardStackWidget.module.scss";
import { getFilterContent } from "../../../lib/pages";
import Pagination from "react-responsive-pagination";

const NewsCardStackWidget = ({ props }) => {
  const [page, setPage] = useState(1);
  const [data, setdata] = useState(props?.data?.news_list?.data);
  const [loading, setloading] = useState(false);

  const getLoadMoreData = async (value) => {
    setloading(true);

    const response = await getFilterContent(
      `list-by-category?limit=6&offset=${value}`
    );
    setloading(false);
    setdata(response.data);
  };

  useEffect(() => {
    if (page) {
      getLoadMoreData((page - 1) * 6);
    } else {
      getLoadMoreData(0);
    }
  }, [page]);

  const handleClick = () => {
    if (scrollTo && typeof window !== undefined) {
      const element = document.getElementById("mdxblogs")?.offsetTop;
      if (element) {
        scroll({ top: element - 100, behavior: "smooth" });
      }
    }
  };

  const calculatePagesCount = (pageSize, totalCount) => {
    return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
  };
  const pagesCount = calculatePagesCount(
    6,
    props?.data?.total_count ?? props?.data?.news_list?.data?.length
  );
  return (
    <section
      id="mdxblogs"
      className={`${Style.news_cardstack_widget} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      }`}
    >
      <div
        className={`${
          props?.data?.container ? "container" : "container-fluid"
        } ${props?.data?.no_spacing?.x ? "px-0" : ""}`}
      >
        {props?.data?.title ? (
          <h2 className="title title-sm mb-3 mb-md-3">{props?.data?.title}</h2>
        ) : (
          ""
        )}

        <div className={"row row-cols-md-2 row-cols-xl-3"}>
          {props?.data?.total_count
            ? data?.map((data, key) => {
                return (
                  <div className={Style.card_item} key={key}>
                    <NewsUpdateCard props={data} />
                  </div>
                );
              })
            : props?.data?.news_list?.data
                ?.slice(page * 6 - 6, page * 6)
                ?.map((data, key) => {
                  return (
                    <div className={Style.card_item} key={key}>
                      <NewsUpdateCard props={data} />
                    </div>
                  );
                })}
        </div>
        <div className={`w-100 text-center ${Style.pagination_wrap}`}>
          {/* <CustomPagination page={page} pages={pagesCount} setPage={setPage} handleClick={handleClick} /> */}
          {/* <button className="btn btn-primary">View More</button> */}
          <Pagination
            current={page}
            total={pagesCount}
            onPageChange={(e) => {
              setPage(e);
              handleClick(e);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsCardStackWidget;
