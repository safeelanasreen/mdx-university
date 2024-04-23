import JotformEmbed from "react-jotform-embed";

const JotForm = ({ src }) => {
  let iframeSrc = src.replace("jsform/", "");
  return <JotformEmbed src={iframeSrc} />;
};

export default JotForm;
