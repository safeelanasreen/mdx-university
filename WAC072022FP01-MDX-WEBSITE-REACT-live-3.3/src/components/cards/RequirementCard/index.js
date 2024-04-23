import { useState } from "react";
import Style from "./RequirementCard.module.scss";

const RequirementCard = (props) => {
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props?.props];
  const [isReadMore, setIsReadMore] = useState(false);
  const parse = require("html-react-parser");

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      {cardsData?.map((data, index) => {
        let content = data?.description?.replace(/<\/?span[^>]*>/g, "");
        return (
          <div className={Style.card} key={index}>
            <div className={Style.card_letter}>
              {data?.icon_letters || data?.initial}
            </div>
            <div className={Style.card_title}>{data?.title}</div>
            <div className={`${Style.card_content}`}>
              {parse(
                !isReadMore
                  ? `${content?.slice(0, 200)}${
                      content.length > 200 ? "..." : ""
                    }`
                  : content
              )}
            </div>
            {content.length > 200 && (
              <span onClick={toggleReadMore} className={Style.readmore}>
                {`${isReadMore ? " read less" : "read more"}`}
              </span>
            )}
          </div>
        );
      })}
    </>
  );
};

export default RequirementCard;
