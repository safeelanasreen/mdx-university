import React, { useEffect, useRef, useState } from "react";
import { getFilterContent } from "../../../lib/pages";
import { format, parse } from "date-fns";

const useUpComingEventsNew = (props) => {
  const [selected, setSelected] = useState("All");
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [events, setEvents] = useState(props?.data?.events);
  const [selectedStartDate, setselectedStartDate] = useState();
  const [selectedEndDate, setselectedEndDate] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [disableButton, setDisableButton] = useState(false);
  const [swiper, setSwiper] = useState();
  const [activeTab, setActiveTab] = useState(
    props?.data?.filter?.result[0]?.value
  );
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      handleDateSelect(start, end);
      setDisableButton(true);
    }
  };
  const handleSelect = async (cat) => {
    const response = await getFilterContent(
      `upcoming-events?category=${cat || 0}${
        selectedStartDate ? `&from_date=${selectedStartDate}` : ""
      }${selectedEndDate ? `&to_date=${selectedEndDate}` : ""}`
    );
    setSelectedCategory(cat);
    setEvents(response?.events);
  };

  const handleDateSelect = async (start, end) => {
    try {
      let formattedStartingDate = start
        ? format(start, "yyyy-MM-dd")
        : format(new Date(), "yyyy-MM-dd");
      let formattedEndingDate = end ? format(end, "yyyy-MM-dd") : null;
      const response = await getFilterContent(
        `upcoming-events?category=${selectedCategory || 0}${
          formattedStartingDate ? `&from_date=${formattedStartingDate}` : ""
        }${formattedEndingDate ? `&to_date=${formattedEndingDate}` : ""}`
      );
      setselectedStartDate(formattedStartingDate);
      setselectedEndDate(formattedEndingDate);
      setEvents(response?.events);
    } catch (error) {
      console.error("Error handling date selection:", error);
    }
  };

  return {
    swiper,
    events,
    prevRef,
    nextRef,
    endDate,
    selected,
    activeTab,
    startDate,
    disableButton, 
    selectedStartDate,
    onChange,
    setSwiper,
    setEndDate,
    setSelected,
    handleSelect,
    setActiveTab,
    setStartDate,
    handleDateSelect,
    setDisableButton,
  };
};
export default useUpComingEventsNew;
