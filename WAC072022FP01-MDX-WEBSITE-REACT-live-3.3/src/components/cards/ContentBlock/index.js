import Style from "./ContentBlock.module.scss";

const ContentBlock = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <div className={`${Style.card} admin-content-area d-flex w-100 align-items-center`}>
      <div>{props?.data && parse(props?.data)}</div>
    </div>
  );
};

export default ContentBlock;
