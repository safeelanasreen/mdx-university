import React, { useRef, useState, useEffect } from "react";
import { getFilterContent } from "../../../lib/pages";

const useEventFilterNew = (props) => {
  const [selected, setSelected] = useState("All");
  const [events, setEvents] = useState(props?.data?.events);
  const [count, setCount] = useState(props?.data?.count);
  const [selectedCatogery, setSelectedCatogery] = useState(0);

  const[active,setActiveTab] = useState(props?.data?.filter?.result[0]?.value);
  const [page, setPage] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSelect = async (cat) => {
    const response = await getFilterContent(
      `past-events?category=${cat}&limit=6&offset=0`
    );
    setCount(response?.count);
    setEvents(response?.events);
    setSelectedCatogery(cat);
    setPage(1);
  };
  const getLoadMoreData = async (value) => {
    // setloading(true);

    const response = await getFilterContent(
      `past-events?category=${selectedCatogery}&limit=6&offset=${value}`
    );
    setEvents(response?.events);
  };
  useEffect(() => {
    if (page) {
      getLoadMoreData((page - 1) * 6);
    } else {
      getLoadMoreData(0);
    }
  }, [page]);

  return {
    selected,
    setSelected,
    events,
    count,
    page,
    setPage,
    handleSelect,
    active,setActiveTab
  };
};
export default useEventFilterNew;
