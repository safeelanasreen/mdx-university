import React, { useState, useEffect } from "react";
import { useWindowSize } from "../../logic/useDimension";
import Assets from "../Layout/CommonLayout/assets";
const useJoinOurTeam = (props) => {
  const { width } = useWindowSize();
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return {
    width,
    activeIndex,
  };
};
export default useJoinOurTeam;
