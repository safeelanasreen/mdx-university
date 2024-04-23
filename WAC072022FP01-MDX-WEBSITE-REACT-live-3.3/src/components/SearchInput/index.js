import Style from "./SearchInput.module.scss";
import Icons from "../Layout/Icons";
import { useSearchInput } from "./useSearchInput";
import SearchResult from "../SearchResults";
import Link from "next/link";

const SearchInput = () => {
  const {
    sort,
    page,
    count,
    loader,
    status,
    keyData,
    category,
    currentcat,
    searchTerm,
    componentBRef,
    keywordResults,
    suggestionKeyword,
    handleSort,
    handleCatSelect,
    handleInputClick,
    handleInputClose,
    handleChangePage,
    handleInputChange,
    handleKeywordClick,
  } = useSearchInput();

  return (
    <>
      <div className={Style.searchmain}>
        <div className="container search-container">
          <div className={Style.searchinput}>
            <div className={Style.search_wrap}>
              <span className={Style.icon_search}>
                <Icons icon={"search-thin"} size={38} />
              </span>
              <input
                type="text"
                placeholder="Search courses, people, events..."
                onClick={(e) => handleInputClick(e)}
                value={searchTerm}
                onChange={(e) => handleInputChange(e)}
              />
              <button
                className={Style.btn_clear}
                onClick={(e) => {
                  handleInputClose(e);
                }}
              />
            </div>
          </div>
          {suggestionKeyword?.data?.content?.length > 0 && suggestionKeyword?.isTouched ? (
            <div className={Style.suggestions}>
              <h1 className={Style.search_ttl}>Suggestions</h1>
              <div className={`row ${Style.suggestions_wrap}`}>
                {suggestionKeyword?.data?.content?.map((data, index) => (
                  <>
                    <div className="col-12 col-sm-6 col-lg-4" key={index}>
                      <h2 className={`${Style.suggestions_ttl} fw-medium`}>{data?.title}</h2>
                      <ul>
                        {data?.suggestions?.map((item, i) => (
                          <>
                            <li key={i}>
                              <Link href={item?.url}>{item?.text}</Link>
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                  </>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}

          {keywordResults?.length > 0 ? (
            <>
              <h1 className={Style.search_ttl}>Keywords</h1>

              <div className={`row ${Style.suggestions_wrap}`}>
                {keywordResults?.map((data, index) => (
                  <>
                    <div className="col-12 col-sm-6 col-lg-4" key={index}>
                      <ul>
                        <>
                          <li
                            onClick={() => handleKeywordClick(data)}
                            className={Style.suggestions_link}
                          >
                            {data?.keyword}
                          </li>
                        </>
                      </ul>
                    </div>
                  </>
                ))}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      {keyData && (
        <SearchResult
          sort={sort}
          page={page}
          count={count}
          data={keyData}
          category={category}
          currentcat={currentcat}
          componentBRef={componentBRef}
          handleSort={handleSort}
          handleCatSelect={handleCatSelect}
          handleChangePage={handleChangePage}
          loader={loader}
        />
      )}
      {/* {loader === "pending" ? (
        <div className={Style.loading_black}>
          <div className={Style.dot_1}></div>
          <div className={Style.dot_2}></div>
          <div className={Style.dot_3}></div>
        </div>
      ) :  ""} */}
    </>
  );
};

export default SearchInput;
