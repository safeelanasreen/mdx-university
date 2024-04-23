import { useEffect, useState, useRef } from "react";

import Style from "./Search.module.scss";
import SearchItem from "../SearchItem";
import Icons from "../Layout/Icons";
import { useRouter } from "next/router";
import axios from "axios";
import Pagination from "react-responsive-pagination";

const Search = () => {
  const router = useRouter();

  const [slimSearch, setSlimSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef();
  const handleSearchScroll = () => {
    if (window.scrollY >= 600) {
      setSlimSearch(true);
    } else {
      setSlimSearch(false);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    window.scrollTo(0, 0);
  };

  const handleClear = () => {
    setSearchTerm("");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const controller = new AbortController();

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const getData = async () => {
      if (searchTerm) {
        setLoading(true);
        const data = await axios.get(`https://api.mdx.ac.ae/api/search/${searchTerm}`, {
          cancelToken: source.token,
          signal: controller.signal,
        });
        setSearchResults(data?.data?.data?.results);
        setCount(data?.data?.data?.total_count);
      } else {
        setSearchResults([]);
      }
    };
    getData();
    return () => source.cancel();
  }, [searchTerm]);

  useEffect(() => {}, [loading]);

  const getData = async () => {
    setLoading(true);
    const data = await axios.get(`https://api.mdx.ac.ae/api/search/${searchTerm}`, {
      cancelToken: prevRequest,
    });
    setSearchResults(data?.data?.data?.results);
    setCount(data?.data?.data?.total_count);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleSearchScroll);
  }

  return (
    <main>
      <section
        className={`${Style.mdx_search_sec} ${slimSearch ? Style.search_scrolled : ""}`}
        ref={searchRef}
      >
        <div className={Style.search_sec}>
          <div className={`container ${Style.container}`}>
            {!slimSearch && (
              <a onClick={() => router.back()} className={Style.back}>
                <span className={Style.arrow}>
                  <Icons icon={"arrow-up-thin"} size={14} />
                </span>
                Back
              </a>
            )}
            <div className={Style.search_wrap}>
              <span className={Style.icon_search}>
                <Icons icon={"search-thin"} size={38} />
              </span>
              <input
                value={searchTerm}
                onChange={handleChange}
                type="text"
                placeholder="search here"
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    e.target.blur();
                  }
                }}
              />
              <button onClick={() => router.back()} className={Style.btn_clear}></button>
            </div>
          </div>
        </div>
        <div className={Style.results_sec}>
          <div className={`container ${Style.container}`}>
            <h3 className={Style.results_title}>SEARCH RESULT</h3>
            {searchResults?.length !== 0 && (
              <p className={Style.results_note}>
                {`Your Search Results for ‘${searchTerm}’ Returned ${count} Results`}
              </p>
            )}
            {searchResults?.length > 0 ? (
              <>
                {searchResults?.slice(page * 6, page * 6 + 6)?.map((r, i) => {
                  return <SearchItem key={i} data={r} />;
                })}
              </>
            ) : searchTerm.length == 0 ? (
              <p>Please enter your search term to get started.</p>
            ) : (
              <p>No results found.</p>
            )}
            <div>
              <Pagination
                current={page}
                total={Math.floor(searchResults?.length / 6)}
                onPageChange={setPage}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search;
