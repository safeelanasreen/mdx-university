import Style from "./TitleCard.module.scss";

const TitleCard = ({ props }) => {
  return (
    <div className={Style.card}>
      <h4 className="title_sub">{props?.data?.title}</h4>
      <h2 className="title">{props?.data?.sub_title}</h2>
    </div>
  );
};

export default TitleCard;
