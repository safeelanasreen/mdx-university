import Style from "./ContactForm.module.scss";
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from "react-bootstrap/Form";
// import FormInput from "./FormInput";
// import FormTextarea from "./FormTextarea";
// import FormSelectBox from "./FormSelectBox";

import Form from "../Form";
import JotForm from "../JotForm";

const ContactForm = ({ props, formId, type }) => {
  const selectOption = [
    "LLB Honours Law",
    "BA Honours Accounting and Finance",
    "BSc Honours Business Accounting",
  ];

  return (
    <div
      className={`
                ${Style.mdx_course_intro_contact_form_wrap} 
                ${props?.bg_red == false ? "" : Style.bg_red}
                `}
    >
      <h2 className={Style.mdx_course_intro_title}>
        {props?.title || "ENQUIRE NOW"}
      </h2>
      {/* <Form>
        <FormInput label="Name" type="text" />

        <FormSelectBox label="Interested to study in" options={selectOption} />

        <FormInput label="Email address" type="email" />

        <FormInput label="Password" type="password" />

        <FormTextarea label="Comments" />

        <button type="submit">Submit</button>
      </Form> */}
      <div className={Style.form_wrap}>
        {typeof type !== undefined && type == "jot_form" ? (
          <JotForm src={formId} />
        ) : (
          <Form
            contactsection
            formID={formId ? formId : "2694f241-d357-4ca1-a597-42cbcab2fdb8"}
          />
        )}
      </div>
    </div>
  );
};

export default ContactForm;
