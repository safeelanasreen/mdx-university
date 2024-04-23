import React, { useState } from "react";
import Style from "./JobSearch.module.scss";

import Select from "react-select";
import Icons from "../Layout/Icons";
const JobSearch = ({
  data,
  selectedOption,
  setSelectedOption,
  searchValue,
  setSearchValue,
}) => {
  return (
    <section className={Style.jobsearch}>
      <div className="container-fluid">
        <div className={Style.jobsearch_wrap}>
          <div className="row row-cols-lg-2">
            <div>
              <div className={Style.form_group}>
                <div className={Style.search}>
                  <span className={Style.search_icon}>
                    <Icons icon={"search-thin"} size={30} />
                  </span>
                  <input
                    type="text"
                    placeholder="Search Jobs"
                    className={Style.form_control}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e?.target?.value)}
                  />
                  <button className={Style.search_clear}></button>
                </div>
              </div>
            </div>
            <div>
              <div className={Style.form_group_wrap}>
                <div className={Style.form_group}>
                  {/* <input type="text" placeholder="Search Jobs" className={`${Style.form_control} ${Style.form_select}`} /> */}
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={data?.category_options}
                    className={Style.form_select}
                    classNamePrefix={"form_select"}
                  />
                </div>
                <button className="btn btn-primary">Search Jobs</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearch;
