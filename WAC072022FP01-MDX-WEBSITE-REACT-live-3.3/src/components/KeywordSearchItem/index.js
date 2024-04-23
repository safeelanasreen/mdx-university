import Link from "next/link";
import React from "react";
import Icons from "../Layout/Icons";
import Style from "./KeywordSearchItem.module.scss";

const KeywordSearchItem = ({ data }) => {
  const parse = require("html-react-parser");

  return (
    <Link href={data?.url || ""}>
      <div className={Style.search_item}>
        <div className={Style.search_item_body}>
          <span className={Style.arrow}>
            <Icons icon={"arrow-top-right-long"} size={14} />
          </span>
          <h4 className={Style.search_item_title}>{data?.title}</h4>
          {data?.description && (
            <div className={Style.search_item_description}>
              {parse(`${data?.description?.slice(0, 400)} ...`)}
            </div>
          )}
          <a className={Style.search_item_link}>
            <span>
              <Icons icon={"arrow-up-thin"} size={14} />
            </span>
            {`${window.location.host}/${data?.url}`}
          </a>
        </div>
      </div>
    </Link>
  );
};

export default KeywordSearchItem;
