import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { getFilterContent } from "../../../lib/pages";

export const useSearchInput = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState("");
  const [sort, setSort] = useState("desc");
  const [keyData, setKeyData] = useState("");
  const [loader, setLoader] = useState("idle");
  const [status, setStatus] = useState("idle");
  const [pageCount, setPageCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentcat, setCurrentcat] = useState("all");
  const [keywordResults, setKeywordResults] = useState([]);
  const [keywordSelected, setKeywordSelected] = useState("");
  const [suggestionKeyword, setSuggestionKeyword] = useState({ isTouched: false, data: {} });

  const componentBRef = useRef(null);

  useEffect(() => {
    const getKeywordData = async () => {
      await getFilterContent(`suggestion-search-page`)
        .then((res) => {
          setSuggestionKeyword({ ...suggestionKeyword, data: res?.data });
        })
        .catch(() => {
          console.log("errror");
        });
    };
    getKeywordData();
  }, []);

  const useDebounce = function (value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    return debouncedValue;
  };

  const useDebounce2 = function (value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    return debouncedValue;
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const debouncedSearchTerm2 = useDebounce2(keywordSelected, 500);

  useEffect(() => {
    const controller = new AbortController();

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const getSearchData = async () => {
      if (debouncedSearchTerm) {
        setStatus("pending");
        await getFilterContent(`keyword-suggestion?keyword=${debouncedSearchTerm}`, {
          cancelToken: source.token,
          signal: controller.signal,
        })
          .then((res) => {
            setKeywordResults(res?.data);
            setTimeout(() => {
              setStatus("success");
            }, 100);
          })
          .catch(() => {
            console.log("errror");
          });
      } else {
        setKeywordResults([]);
      }
    };
    getSearchData();
    return () => source.cancel();
  }, [debouncedSearchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value?.length === 0) {
      setKeyData("");
      setKeywordResults([]);
      setKeywordSelected("");
    }
    if (e.target.value?.length >= 3) {
      setKeywordSelected(e.target.value);
      setCurrentcat("all");
    } else if (e.target.value?.length <= 2) {
      setCurrentcat("all");
      setKeyData("");
      setKeywordResults([]);
    }

    if (e.target.value?.length > 0) {
      setSuggestionKeyword({ ...suggestionKeyword, isTouched: false });
    } else {
      setSuggestionKeyword({ ...suggestionKeyword, isTouched: true });
    }

    if (e.target.value?.length > 0 && pageCount > 0) {
      setPage(0);
      setPageCount(0);
    }
  };

  const handleInputClose = (e) => {
    setSearchTerm("");
    setKeyData("");
    setSuggestionKeyword({ ...suggestionKeyword, isTouched: false });
  };

  const handleKeywordClick = (data) => {
    setCurrentcat("all");
    setKeywordSelected(data?.keyword?.split(/\s+/).join("_"));
    if (data) {
      setTimeout(() => {
        const componentBRef = document?.getElementById("componentB");
        if (componentBRef) {
          componentBRef?.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  };

  const handleInputClick = (e) => {
    setKeywordSelected("");
    if (e.target.value?.length > 0) {
      setSuggestionKeyword({ ...suggestionKeyword, isTouched: false });
    } else {
      setSuggestionKeyword({ ...suggestionKeyword, isTouched: true });
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    if (keywordSelected?.length > 0) {
      setLoader("pending");

      let keyword = keywordSelected?.replace(/_/g, " ");
      const getKeywordSearch = async () => {
        await getFilterContent(
          `suggesion-search?keyword=${keyword}&category=${currentcat}&sort_by=${sort}&limit=${6}&offset=${pageCount}`,

          {
            cancelToken: source.token,
            signal: controller.signal,
          }
        )
          .then((res) => {
            setKeyData(res?.data[currentcat]?.[0]);
            setCount(res?.total_count);

            setTimeout(() => {
              setLoader("success");
            }, 50);
          })
          .catch(() => {
            console.log("error");
          });
      };
      getKeywordSearch();
      return () => source.cancel();
    }
  }, [debouncedSearchTerm2, currentcat, sort, pageCount]);

  const handleSort = (e) => {
    setSort(e);
  };

  const handleChangePage = (e) => {
    setPage(e);
    if (e === 1) {
      setPageCount(0);
    } else {
      setPageCount(e * 6 - 6);
    }
    if (e) {
      const componentBRef = document?.getElementById("componentB");
      if (componentBRef) {
        componentBRef?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const handleCatSelect = (e) => {
    setCurrentcat(e);
    setPageCount(0);
    setPage(0);
  };

  const category = [
    {
      id: "all",
      category: "All",
    },
    {
      id: "people",
      category: "People",
    },
    {
      id: "departments",
      category: "Departments",
    },
    {
      id: "blogs",
      category: "Blogs",
    },
    {
      id: "events",
      category: "Events",
    },
  ];

  return {
    componentBRef,
    sort,
    page,
    count,
    loader,
    status,
    keyData,
    category,
    currentcat,
    searchTerm,
    keywordResults,
    suggestionKeyword,
    handleSort,
    handleCatSelect,
    handleInputClick,
    handleInputClose,
    handleChangePage,
    handleInputChange,
    handleKeywordClick,
  };
};
