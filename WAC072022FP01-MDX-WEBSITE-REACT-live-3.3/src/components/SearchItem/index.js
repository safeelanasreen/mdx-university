import Link from "next/link";
import React from "react";
import Icons from "../Layout/Icons";
import Style from "./SearchItem.module.scss";

const SearchItem = ({ data }) => {
  const parse = require("html-react-parser");

  return (
    <Link href={data?.link || ""}>
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
            {`${window.location.host}/${data?.link}`}
          </a>
        </div>
      </div>
    </Link>
  );
};

export default SearchItem;
