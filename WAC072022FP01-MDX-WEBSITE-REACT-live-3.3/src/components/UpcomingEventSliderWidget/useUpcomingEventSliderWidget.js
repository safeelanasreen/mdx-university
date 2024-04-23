import React, { useEffect, useRef, useState } from "react";
import { getFilterContent } from "../../../lib/pages";
import { format, parse } from "date-fns";

const useUpcomingEventSliderWidget = (props) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [events, setEvents] = useState(props?.data?.events);
  const [swiper, setSwiper] = useState();

  return {
    events,
    prevRef,
    nextRef,
    setSwiper
  };
};
export default useUpcomingEventSliderWidget;
