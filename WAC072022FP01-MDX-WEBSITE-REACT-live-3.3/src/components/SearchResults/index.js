import React from "react";
import Style from "./SearchResults.module.scss";
import Pagination from "react-responsive-pagination";
import DropdownButton2 from "../DropdownButton2";
import KeywordSearchItem from "../KeywordSearchItem";

const SearchResult = ({
  sort,
  data,
  page,
  count,
  category,
  currentcat,
  handleSort,
  componentBRef,
  handleCatSelect,
  handleChangePage,
  loader,
}) => {
  return (
    <div className={`${Style.searchresult} headOffice`} id="componentB" ref={componentBRef}>
      <div className="container search-container">
        <div className={Style.searchresult_top}>
          {/* {data?.contents?.length > 0 && (
            <div
              className={`${Style.heading_wrap} d-flex justify-content-between flex-column flex-md-row`}
            >
              <h1 className={`${Style.searchresult_ttl} mb-0 `}>Search Result</h1>
              <div className={`${Style.sort_wrap} d-flex align-items-center `}>
                <p className="mb-0 fw-500">Sort By:</p>

                <DropdownButton2 sort={sort} handleSort={handleSort} />
              </div>
            </div>
          )} */}
          <div
            className={`${Style.heading_wrap} d-flex justify-content-between flex-column flex-md-row`}
          >
            <h1 className={`${Style.searchresult_ttl} mb-0 `}>Search Result</h1>
            <div className={`${Style.sort_wrap} d-flex align-items-center `}>
              <p className="mb-0 fw-500">Sort By:</p>

              <DropdownButton2 sort={sort} handleSort={handleSort} />
            </div>
          </div>
        </div>
        {/* {data?.contents?.length > 0 && (
          <div className={`${Style.searchresult_categories} d-flex searchresult-categories`}>
            {category?.map((data, i) => (
              <>
                <button
                  className={`${Style.filter_btn} ${currentcat === data?.id ? "active" : ""}`}
                  key={i}
                  value={data?.id}
                  onClick={(e) => handleCatSelect(e?.target?.value)}
                >
                  {data?.category}
                </button>
              </>
            ))}
          </div>
        )} */}
        <div className={`${Style.searchresult_categories} d-flex searchresult-categories`}>
          {category?.map((data, i) => (
            <>
              <button
                className={`${Style.filter_btn} ${currentcat === data?.id ? "active" : ""}`}
                key={i}
                value={data?.id}
                onClick={(e) => handleCatSelect(e?.target?.value)}
              >
                {data?.category}
              </button>
            </>
          ))}
        </div>
        <div className={Style.searchresult_card}>
          {loader === "pending" ? (
            <div className={Style.loading_black}>
              <div className={Style.dot_1}></div>
              <div className={Style.dot_2}></div>
              <div className={Style.dot_3}></div>
            </div>
          ) : (
            <>
              {data?.contents?.length > 0 ? (
                <>
                  {data?.contents?.map((r, i) => {
                    if (r?.description === null) {
                      r.description = "";
                    }
                    if (r?.title === null) {
                      r.title = "";
                    }
                    if (typeof r?.title === "object" || typeof r?.description === "object") {
                      return false;
                    }
                    return <KeywordSearchItem key={i} data={r} />;
                  })}
                </>
              ) : (
                <p className={Style.search_nodata}>No results found.</p>
              )}
            </>
          )}
        </div>
        <div>
          <Pagination
            current={page}
            total={Math.round(count / 6)}
            onPageChange={(e) => handleChangePage(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
