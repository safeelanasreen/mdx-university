import { useState, useRef, useEffect } from "react";
import NewsUpdateCard from "../cards/NewsUpdateCard";
import Style from "./NewsCardStackWidget.module.scss";

import { useWindowSize } from "../../logic/useDimension";
import DropdownButton from "../DropdownButton";
import { getFilterContent } from "../../../lib/pages";

const NewsCardStackPaginationWidget = ({ props }) => {
  const tabouterRef = useRef();

  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  const [category, setcategory] = useState(1);
  const [offset, setoffset] = useState(0);
  const [sort, setsort] = useState("ASC");
  const [totalLength, settotalLength] = useState("");



  const [activeTab, setActiveTab] = useState(
    props?.data?.categories[0]?.category
  );
  const handleSelect = (e) => {
    setActiveTab(e.category);
    setcategory(e.id);
    setoffset(0);
  };

  useEffect(() => {
    const getData = async () => {
      setloading(true);
      const response = await getFilterContent(
        `list-by-category?category=${category}&limit=6&offset=${0}`
      );
      setloading(false);
      setdata(response?.data);
      settotalLength(response?.total_count);
    };
    if(category){

      getData();
    }

  }, [category]);

  const getLoadMoreData = async (value) => {
    setloading(true);
    const response = await getFilterContent(
      `list-by-category?category=${category}&limit=6&offset=${value}&sort=${sort}`
    );
    setloading(false);
    setdata([...data, ...response?.data]);
    settotalLength(response?.total_count);
  };

  const handleSort = async (value) => {
    setloading(true);
    const response = await getFilterContent(
      `list-by-category?category=${category}&limit=&offset=${0}&sort=${sort}`
    );
    setloading(false);
    setdata(response?.data);
    settotalLength(response?.total_count);
  };

  const handleLoadMore = () => {
    setoffset(offset + 6);
    getLoadMoreData(offset + 6);
  };

  useEffect(() => {
    if(sort){

      handleSort(offset);
    }
  }, [sort]);


  return (
    <section
      className={`${Style.news_cardstack_widget} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? "no_space_bottom"
          : ""
      }`}
    >
      <div
        className={`${
          props?.data?.container ? "container" : "container-fluid"
        } ${props?.data?.no_spacing?.x ? "px-0" : ""}`}
      >
        {props?.data?.title ? (
          <h2 className='title title-sm mb-3 mb-md-3'>{props?.data?.title}</h2>
        ) : (
          ""
        )}
        <div className={Style.filter}>
          <div className={Style.filter_categories} ref={tabouterRef}>
            {props?.data?.categories?.map((data, index) => {
              return (
                <div key={index}>
                  <button
                    className={`${Style.filter_btn} ${
                      data?.category == activeTab && Style.active
                    }`}
                    onClick={() => {
                      handleSelect(data);
                    }}
                  >
                    {data?.category}
                  </button>
                </div>
              );
            })}
          </div>
          <div className={Style.filter_sort}>
            <DropdownButton setsort={setsort} />
          </div>
        </div>
        <div className={"row row-cols-md-2 row-cols-xl-3"}>
          {data?.length >0  && data?.map((data, key) => {
            return (
              <div className={Style.card_item} key={key}>
                <NewsUpdateCard props={data} />
              </div>
            );
          })}
        </div>

        {totalLength > data?.length && (
          <div className={`${Style.btn_wrap}`}>
            <button
              onClick={() => handleLoadMore()}
              type='button'
              className={`btn btn-primary ${Style.loadmore}`}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsCardStackPaginationWidget;
