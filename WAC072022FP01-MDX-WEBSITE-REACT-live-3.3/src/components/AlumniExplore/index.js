import React, { useEffect, useRef } from "react";
import CardStackSlider from "../CardStackSlider";
import Style from "./AlumniExplore.module.scss";
import { alumniExploreData } from "../DummyData";

const AlumniExplore = ({ props }) => {
  return (
    <div className={Style.alumni_explore}>
      <div className="container explore-container">
        <CardStackSlider props={props} name={"alumniExplore"} />
      </div>
    </div>
  );
};

export default AlumniExplore;
