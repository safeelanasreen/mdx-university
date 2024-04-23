import Style from "./FormSelectBox.module.scss";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const FormSelectBox = ({ label, options, className, formikThree }) => {
  return (
    <FloatingLabel
      controlId="floatingSelect"
      className={`mb-3 ${Style.form_select} ${className}`}
      label={label}
    >
      <Form.Select
        aria-label={label}
        id="selectValue"
        className="form_select"
        name="selectValue"
        onChange={formikThree.handleChange}
        onBlur={formikThree.handleBlur}
        value={formikThree.values.selectValue}
        defaultValue=""
        placeholder="Select an option"
      >
        <option value="" disabled hidden>
          Select an option
        </option>
        {options?.map((option, i) => {
          return (
            <option key={i} name="reason" value={option?.id}>
              &nbsp;{option?.reason}
            </option>
          );
        })}
      </Form.Select>
      {formikThree.errors.selectValue && formikThree.touched.selectValue ? (
        <small className="error text-danger">{formikThree.errors.selectValue}</small>
      ) : null}
    </FloatingLabel>
  );
};

export default FormSelectBox;
