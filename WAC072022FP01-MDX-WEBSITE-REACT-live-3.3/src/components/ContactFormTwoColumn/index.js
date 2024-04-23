import Style from "./ContactFormTwoColumn.module.scss";
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import FormInput from "../ContactForm/FormInput";
import FormTextarea from "../ContactForm/FormTextarea";
import FormSelectBox from "../ContactForm/FormSelectBox";
import FormInputPhone from "../ContactForm/FormInputPhone";

const ContactFormTwoColumn = ({props}) => {

    const selectOption = ['One', 'Two', 'Three'];



    return (

        
            <div className={`
                ${Style.mdx_course_intro_contact_form_wrap} 
                ${props?.bg_red == true ? Style.bg_red : ""}
                `}>
                    <div className="col-xl-7 mb-lg-5">
                        <h2 className={Style.mdx_course_intro_title}>{props?.title}</h2>
                    </div>
                
                <Form className="pb-4 pb-lg-0">
                    <div className={`row ${Style.mdx_course_intro_main_row}`}>
                        <div className="col-lg-6 ">
                            <FormInput 
                                label="Name"
                                type="text"
                            />
                        </div>

                        <div className="col-lg-6">
                            <FormSelectBox 
                                label="Programme of choice*"
                                options={selectOption}
                            />
                        </div>
                        <div className="col-lg-6">
                            <FormInput 
                                label="Email address"
                                type="email"
                            />
                        </div>
                        <div className="col-lg-6">
                            <FormInputPhone label="Phone Number" />
                        </div>
                        <div className="col-lg-6">
                            <FormSelectBox 
                                label="Nationality"
                                options={selectOption}
                            />
                        </div>
                        <div className="col-lg-6">
                            <FormSelectBox 
                                label="Campus"
                                options={selectOption}
                            />
                        </div>
                        <div className="col-lg-6">
                            <FormSelectBox 
                                label="Have you Applied Already"
                                options={selectOption}
                            />
                        </div>
                        <div className="col-lg-6">
                            <FormSelectBox 
                                label="Emirate of residence"
                                options={selectOption}
                            />
                        </div>


                        
                    </div>
                    

                    

                    <button className="btn btn-primary" type="submit">Submit</button>
                </Form>
            </div>

    );
};

export default ContactFormTwoColumn;