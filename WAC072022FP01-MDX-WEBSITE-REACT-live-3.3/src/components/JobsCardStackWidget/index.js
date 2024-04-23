import React, { useEffect, useState } from "react";
import Style from "./JobsCardStackWidget.module.scss";

import JobsCard from "../cards/JobsCard";
import JobSearch from "../JobSearch";
import axios from "axios";

const theme = "light";

const JobsCardStackWidget = ({ props }) => {
  const [jobs, setJobs] = useState();
  const [selectedOption, setSelectedOption] = useState({
    label: "Select Option...",
  });
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let selected = "";
    if (selectedOption?.value) {
      selected = selectedOption?.value;
    }
    getJobs(searchValue, selected);
  }, [searchValue, selectedOption]);

  const getJobs = async (query, category) => {
    const { data } = await axios.get(
      `https://api.mdx.ac.ae/api/general/jobs-search?query=${query}&category=${category}`
    );

    setJobs(data);
  };

  return (
    <>
      <JobSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        data={props?.data}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <section
        className={`${Style.jobs_cards_stack} ${
          props?.data?.theme == "light" ? "theme-light" : ""
        }`}
      >
        <div className="container">
          <h2 className="title title-sm">Jobs Updates</h2>
        </div>
        <div
          className={`${props?.data?.container ? "container" : "container-fluid"} ${
            props?.data?.no_spacing?.x ? "px-0" : ""
          }`}
        >
          <div
            className={`row row-col-2 row-cols-md-${props?.data?.columns?.md} row-cols-lg-${props?.data?.columns?.lg} row-cols-xxl-${props?.data?.columns?.xl} `}
          >
            {jobs?.data?.map((a, i) => (
              <div key={i}>
                <JobsCard data={a} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsCardStackWidget;
