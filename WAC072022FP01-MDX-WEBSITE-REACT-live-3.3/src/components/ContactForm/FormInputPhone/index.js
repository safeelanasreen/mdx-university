import Style from "./FormInputPhone.module.scss";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FormInputPhone = ({ label }) => {
  const [value, setValue] = useState();
  return (
    <div
      className={`${Style.form_input_phone}
            
        `}
    >
      <PhoneInput value={value} onChange={setValue} country="in" />
      <label
        htmlFor="floatingSelect"
        className={`${!value ? "" : Style.form_hide_label}`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInputPhone;
