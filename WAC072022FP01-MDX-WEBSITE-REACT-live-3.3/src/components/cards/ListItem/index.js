import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import RangeCard from "../RangeCard";
import Style from "./ListItem.module.scss";
import { useWindowSize } from "../../../logic/useDimension";

const ListItem = (props) => {
  const { width } = useWindowSize();

  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : props?.props?.length
    ? props?.props
    : props?.props
    ? [props?.props]
    : props?.length
    ? props
    : props && [props?.props];
  const parse = require("html-react-parser");
  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <div
            key={index}
            className={`${Style.list_item} list-item-wrap`}
            id={data?.anchor_id}
          >
            <div
              className={`${Style.list_item_title} list-item-title`}
              style={{
                
                    backgroundColor:
                    props?.activeState && data?.anchor_id === props.fragmentIdentifier
                    ? "#dddcdc"
                    : "initial",
                  
              }}
            >
              {data?.title}
            </div>
            <div
              className={`${Style.list_item_content} list-item-content-wrap`}
            >
              {data?.type == "range" ? (
                <div
                  className={`${Style.list_item_content_range} row row-cols-sm-2  row-cols-md-3 g-0`}
                >
                  <RangeCard props={data?.content} />
                </div>
              ) : (
                data?.content && parse(data?.content)
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListItem;
