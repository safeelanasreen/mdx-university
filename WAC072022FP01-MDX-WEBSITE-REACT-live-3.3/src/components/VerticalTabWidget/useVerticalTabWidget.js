import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { useWindowSize } from "../../logic/useDimension";

const useVerticalTabWidget = (props) => {
  const router = useRouter();
  const { parent_id } = router.query;
  const fragmentIdentifier = router.asPath.split("#")[1];
  const bg = props?.data?.bg;
  const title = props?.data?.title;
  const tabData = props?.data?.tabData;
  const { width } = useWindowSize();
  const [activeElement, setActiveElement] = useState(
    parent_id ? parent_id : tabData[0].id
  );
  const index = tabData.findIndex((item) => item?.id === "publications");
  const previousAnchorId = useRef(null);
  const [activeState, setActiveState] = useState(false);
  const [stateChange, setStateChange] = useState(true);
  function toggleActiveState() {
    setStateChange(false);
    setTimeout(() => {
      setActiveState(true);
    }, 500);

    setTimeout(() => {
      setActiveState(false);
    }, 1500);
  }
  function getScrollTop(width) {
    if (width < 1200 && width >= 768) {
      return 600;
    } else if (width < 767.98 && width >= 500) {
      return 900;
    } else if (width < 500 && width >= 400) {
      return 1240;
    } else if (width < 400) {
      return 1190;
    } else {
      return 500;
    }
  }
  const publicationsData = props?.data?.tabData[index]?.data;
  const DataMatchingIndex = publicationsData?.findIndex(
    (data) => data?.anchor_id === fragmentIdentifier
  );
  useEffect(() => {
    if (parent_id) {
      if (DataMatchingIndex >= 0) {
        if (DataMatchingIndex == 0) {
          toggleActiveState();
          const topPosition = getScrollTop(window.innerWidth);
          window.scrollTo({ top: topPosition, behavior: "auto" });
        } else {
          toggleActiveState();
          previousAnchorId.current =
            publicationsData[DataMatchingIndex - 1].anchor_id;
          const element = document.getElementById(previousAnchorId.current);
          if (element) {
            element.scrollIntoView({ behavior: "auto" });
          }
        }
      } else if (parent_id) {
        const topPosition = getScrollTop(window.innerWidth);
        window.scrollTo({ top: topPosition, behavior: "auto" });
      }
    }
  }, [stateChange]);
  return {
    bg,
    title,
    index,
    width,
    tabData,
    parent_id,
    activeState,
    activeElement,
    fragmentIdentifier,
    setActiveElement,
  };
};
export default useVerticalTabWidget;
