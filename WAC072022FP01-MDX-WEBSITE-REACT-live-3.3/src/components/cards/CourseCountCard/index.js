import Style from "./CourseCountCard.module.scss";

const CourseCountCard = (props) => {
  const parse = require("html-react-parser");
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props?.props];

  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <div className={`d-flex ${Style.countcard}`} key={index}>
            <h5 className="mb-0">{data?.count}</h5>
            <div className={`${Style.countcard_content}`}>
              <p>{parse(data?.content)}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CourseCountCard;
