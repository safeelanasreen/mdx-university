
import Style from "./FormInput.module.scss";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const FormInput = ({label,type}) => {
    return (
        <FloatingLabel
            className={`mb-3 ${Style.form_input}`}
            label={label}
            controlId="formBasicName">
            <Form.Control type={type} placeholder={label} />
        </FloatingLabel>
    );
};

export default FormInput;