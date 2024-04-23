import React, { useEffect } from "react";
import Style from "./AlphabetCard.module.scss";
import Link from "next/link";

const AlphabetCard = ({ props }) => {
  const middleIndex = Math.ceil(props?.links?.length / 2);
  const firstHalf = props?.links?.slice(0, middleIndex);
  const secondHalf = props?.links?.slice(middleIndex);

  const handleKeyPress = (e) => {
    if (e.keyCode === 33 || e.keyCode === 34 || e.keyCode === 35 || e.keyCode === 36) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className={`${Style.card} d-md-flex`}
      id={props?.letter ? props?.letter : "none"}
      onKeyDown={(e) => handleKeyDown(e)}
    >
      <div className={Style.card_head}>
        <h3 className={Style.card_title}>{props?.letter}</h3>
      </div>
      <div className={Style.card_body}>
        <h3 className={Style.card_title}>A</h3>
        <div
          className={`admin-content-area row ${Style.card_row}`}
          style={{ "--col-width": `${secondHalf?.length > 0 ? "" : "100%"}` }}
        >
          <div>
            <ul className="m-0">
              {firstHalf?.map((data, i) => {
                return (
                  <li key={i}>
                    <Link href={data?.url || ""}>{data?.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className="m-0">
              {secondHalf?.map((data, i) => {
                return (
                  <li key={i}>
                    <Link href={data?.url || ""}>{data?.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlphabetCard;
