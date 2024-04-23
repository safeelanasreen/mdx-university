import Style from "./FormTextarea.module.scss";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const FormTextarea = ({ label, className, height, formikThree }) => {
  return (
    <FloatingLabel
      className={`${Style.form_textarea} ${className}`}
      controlId="floatingTextarea2"
      label={label}
    >
      <Form.Control
        as="textarea"
        placeholder={label}
        style={{ height: height ? height : "125px" }}
        name="message"
        value={formikThree.values.message}
        onChange={(e) => {
          formikThree.handleChange(e);
        }}
      />
    </FloatingLabel>
  );
};

export default FormTextarea;
