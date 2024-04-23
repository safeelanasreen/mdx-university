import Form from "../Form";
import JotForm from "../JotForm";

const FormWidget = ({ props }) => {
  return (
    <div className="content-formsec" id={props?.data?.scrollID ? props?.data?.scrollID : "none"}>
      <div className="short_container">
        <h2 className="text-center h2">{props?.data?.title}</h2>
        {props?.data?.type === "hbspot_form" ? (
          <Form formID={props?.data?.src} />
        ) : (
          <JotForm src={props?.data?.src} />
        )}
      </div>
    </div>
  );
};

export default FormWidget;
