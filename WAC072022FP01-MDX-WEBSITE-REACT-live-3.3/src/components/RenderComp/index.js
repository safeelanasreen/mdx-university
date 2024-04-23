import ComponentFunc from "..";

const RenderComp = ({ slug }) => {
  return <>{ComponentFunc(slug)}</>;
};

export default RenderComp;
