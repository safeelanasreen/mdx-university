import React, { useRef, useState, useEffect } from "react";
import { getFilterContent } from "../../../lib/pages";
import { getImageUrl } from "../../apis";

const useEventGalleryNew = (props) => {
  const [sort, setsort] = useState("ASC");
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(props?.data?.tabs[0]?.title);
  const [category, setcategory] = useState(props?.data?.tabs[0]?.id);
  const [offset, setOffset] = useState(0);
  const [totalLength, settotalLength] = useState("");
  const handleSelect = (item) => {
    setOffset(0);
    setActiveTab(item.title);
    setcategory(item?.id);
  };
  useEffect(() => {
    const getData = async () => {
      const response = await getFilterContent(
        `event-gallery?category=${category}&limit=6&offset=${0}&sort_by=${sort}`
      );
      setData(response?.gallery);
      settotalLength(response?.count);
    };

    getData();
  }, [category]);
  const handleSort = async (value) => {
    const response = await getFilterContent(
      `event-gallery?category=${category}&limit=${
        data.length
      }&offset=${0}&sort_by=${sort}`
    );
    setData(response?.gallery);
    settotalLength(response?.count);
  };

  const getLoadMoreData = async (value) => {
    const response = await getFilterContent(
      `event-gallery?category=${category}&limit=6&offset=${value}&sort_by=${sort}`
    );
    setData([...data, ...response?.gallery]);
    settotalLength(response?.count);
  };
  const handleLoadMore = () => {
    setOffset(offset + 6);
    getLoadMoreData(offset + 6);
  };
  useEffect(() => {
    if (sort) {
      handleSort();
    }
  }, [sort]);
  return {
    setsort,
    data,
    activeTab,
    totalLength,
    handleSelect,
    handleLoadMore
  };
};
export default useEventGalleryNew;
