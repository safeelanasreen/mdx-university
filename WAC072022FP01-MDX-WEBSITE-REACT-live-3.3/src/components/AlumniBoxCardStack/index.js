import React from "react";
import CardStack from "../CardStack";
import Style from "./AlumniBoxCardStack.module.scss";
import { ImageBoxCardData } from "../DummyData";

const AlumniBoxCardStack = ({ props }) => {
  return (
    <section className={Style.alumni_box_card_stack}>
      <div className="container">
        <CardStack props={props} />
      </div>
    </section>
  );
};

export default AlumniBoxCardStack;
