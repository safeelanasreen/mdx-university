import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import extensions from "../../constants/extensions";

import Style from "./CustomFormWidget.module.scss";
import useCustomForm from "./useCustomForm";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

const CustomFormWidget = ({ props }) => {
  const {
    container,
    handleChange,
    handleEducationChange,
    formData,
    setFormData,
    formFiles,
    setFormFiles,
    extension,
    handleSelect,
    skillsList,
    activeSkillCat,
    handleSkillCatChange,
    handleSkillSelect,
    removeSelectedSkill,
    errors,
    handleSearch,
    handleFileUpload,
    handleFileDrop,
    handleSubmit,
    handleClear,
    handleVerifyCaptcha,
  } = useCustomForm(props);
  return (
    <section id="formWidget" className={Style.custom_form_widget}>
      <div className={container ? "container" : "containner-fluid"}>
        <div className={Style.custom_form_widget_container}>
          <div className={Style.form_field_title}>
            {props?.basic_info?.title || "Basic Information"}
          </div>
          <div className="row">
            <div className="col-lg-6">
              <FloatingLabel controlId="firstName" label="First Name">
                <Form.Control
                  type="text"
                  value={formData?.basic_information?.first_name || ""}
                  name="first_name"
                  onChange={(e) => {
                    handleChange(e, "basic_information");
                  }}
                  placeholder="First Name"
                />
              </FloatingLabel>
            </div>
            <div className="col-lg-6">
              <FloatingLabel controlId="lastName" label="Last Name">
                <Form.Control
                  type="text"
                  name="last_name"
                  value={formData?.basic_information?.last_name || ""}
                  onChange={(e) => {
                    handleChange(e, "basic_information");
                  }}
                  placeholder="Last Name"
                />
              </FloatingLabel>
            </div>
            <div className="col-lg-6">
              <FloatingLabel controlId="emailId" label="Email">
                <Form.Control
                  type="email"
                  value={formData?.basic_information?.email || ""}
                  name="email"
                  onChange={(e) => {
                    handleChange(e, "basic_information");
                  }}
                  placeholder="Email"
                />
              </FloatingLabel>
            </div>
            <div className="col-lg-6">
              <FloatingLabel
                controlId="phoneNumber"
                label="Phone Number"
                className="form-type-phone"
              >
                <div className="coutry-code">
                  <select
                    defaultValue={extension}
                    value={extension}
                    onChange={handleSelect}
                  >
                    {extensions?.map((ext, key) => (
                      <option value={ext} key={key}>
                        {ext}
                      </option>
                    ))}
                  </select>
                </div>
                <Form.Control
                  value={formData?.basic_information?.phone_number || ""}
                  name="phone_number"
                  onChange={(e) => {
                    if (
                      /^\d+$/.test(e?.target?.value) ||
                      e?.target?.value == ""
                    ) {
                      handleChange(e, "basic_information");
                    }
                  }}
                  type="tel"
                  placeholder="Phone Number"
                />
              </FloatingLabel>
            </div>
            {errors?.basic_information ? (
              <div className={Style.form_field_notes}>
                *Please fill all the feilds
              </div>
            ) : (
              errors?.email && (
                <div className={Style.form_field_notes}>
                  *Please enter a valid email ID
                </div>
              )
            )}
          </div>

          <div className={Style.form_field_title}>
            {props?.address_info?.title || "Address Information"}
          </div>
          <div className="row">
            <div className="col-lg-6">
              <FloatingLabel controlId="address" label="Address">
                <Form.Control
                  value={formData?.address_information?.address || ""}
                  name="address"
                  onChange={(e) => {
                    handleChange(e, "address_information");
                  }}
                  type="text"
                  placeholder="Address"
                />
              </FloatingLabel>
            </div>
            <div className="col-lg-6">
              <FloatingLabel controlId="city" label="City">
                <Form.Control
                  value={formData?.address_information?.city || ""}
                  name="city"
                  onChange={(e) => {
                    handleChange(e, "address_information");
                  }}
                  type="text"
                  placeholder="City"
                />
              </FloatingLabel>
            </div>
            <div className="col-lg-6">
              <FloatingLabel controlId="stateProvince" label="State / Province">
                <Form.Control
                  value={formData?.address_information?.state_province || ""}
                  name="state_province"
                  onChange={(e) => {
                    handleChange(e, "address_information");
                  }}
                  type="text"
                  placeholder="State / Province"
                />
              </FloatingLabel>
            </div>
            <div className="col-lg-6">
              <FloatingLabel controlId="country" label="Country">
                <Form.Control
                  value={formData?.address_information?.country || ""}
                  name="country"
                  onChange={(e) => {
                    handleChange(e, "address_information");
                  }}
                  type="text"
                  placeholder="Country"
                />
              </FloatingLabel>
            </div>
            {errors?.address_information && (
              <div className={Style.form_field_notes}>
                *Please fill all the feilds
              </div>
            )}
          </div>

          <div className={Style.form_field_title}>
            {props?.professional_details?.title || "Professional Details"}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <FloatingLabel
                controlId="skilSet"
                label="Select your Skill Set"
                className="mb-0"
              >
                <Form.Control
                  type="text"
                  onChange={handleSearch}
                  placeholder="Select your Skill Set"
                />
              </FloatingLabel>
              <div className={Style.form_field_suggestions_selected}>
                {formData?.professional_details?.form_skill_sets?.map(
                  (skill, index) => {
                    return (
                      <button
                        key={index}
                        style={{
                          "--sug-border-color": `${skill?.["border-color"]}`,
                          "--sug-bg-color": `${skill?.["bg-color"]}`,
                        }}
                      >
                        {skill?.name}
                        <span
                          onClick={() => removeSelectedSkill(skill)}
                          className={Style.close}
                        ></span>
                      </button>
                    );
                  }
                )}
              </div>

              <div className={Style.form_field_sub}>
                <div className={Style.form_field_sub_label}>
                  Suggested Skills
                </div>
                <div className="radio-group">
                  {["Master", "Intermediate", "Beginner"]?.map(
                    (category, index) => (
                      <Form.Check
                        key={index}
                        inline
                        defaultChecked={category === activeSkillCat}
                        label={category}
                        onClick={() => handleSkillCatChange(category)}
                        name="professional_details"
                        type={"radio"}
                        id={`inline-radio-${index + 1}`}
                      />
                    )
                  )}
                </div>
                <div className={Style.form_field_suggestions}>
                  {skillsList?.map((skill, index) => (
                    <button
                      className={
                        formData?.professional_details?.form_skill_sets?.findIndex(
                          (s) => s?.id == skill?.id
                        ) != -1 &&
                        formData?.professional_details?.form_skill_sets
                          ? Style.selected
                          : ""
                      }
                      onClick={() => handleSkillSelect(skill)}
                      key={index}
                    >
                      {skill?.name}
                    </button>
                  ))}
                </div>
                {errors?.professional_details && (
                  <div className={Style.form_field_notes}>
                    *Please Select your Skill Level First and add your Skills
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={Style.form_field_title}>
            {props?.educational_details?.title || "Educational Details"}
          </div>

          {formData?.educational_details?.map((feildLevel, index) => (
            <div key={index} className={Style.form_field_seprator}>
              <div className={Style.form_field_title_sub}>
                Education Level {index + 1}
              </div>
              <div className="row mb-2">
                <div className="col-lg-6">
                  <FloatingLabel
                    controlId="instituteSchool"
                    label="Institute / School"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Institute / School"
                      value={
                        formData?.educational_details[index]
                          ?.institute_school || ""
                      }
                      name="institute_school"
                      onChange={(e) => {
                        handleEducationChange(e, "educational_details", index);
                      }}
                    />
                  </FloatingLabel>
                </div>
                <div className="col-lg-6">
                  <FloatingLabel
                    controlId="majorDepartment"
                    label="Major / Department"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Major / Department"
                      value={
                        formData?.educational_details[index]
                          ?.major_department || ""
                      }
                      name="major_department"
                      onChange={(e) => {
                        handleEducationChange(e, "educational_details", index);
                      }}
                    />
                  </FloatingLabel>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className={Style.date_year}>
                    <label className={Style.date_year_label}>
                      Duration From
                    </label>
                    <div className="col-lg-12">
                      <FloatingLabel controlId="duration_from" label="From">
                        <Form.Control
                          type="date"
                          value={
                            formData?.educational_details[index]
                              ?.duration_from || ""
                          }
                          name="duration_from"
                          onChange={(e) => {
                            handleEducationChange(
                              e,
                              "educational_details",
                              index
                            );
                          }}
                          placeholder="From"
                        />
                      </FloatingLabel>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className={Style.date_year}>
                    <label className={Style.date_year_label}>Duration To</label>
                    <div className="col-lg-12">
                      <FloatingLabel controlId="duration_to" label="To">
                        <Form.Control
                          type="date"
                          value={
                            formData?.educational_details[index]?.duration_to ||
                            ""
                          }
                          name="duration_to"
                          onChange={(e) => {
                            handleEducationChange(
                              e,
                              "educational_details",
                              index
                            );
                          }}
                          placeholder="To"
                        />
                      </FloatingLabel>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <FloatingLabel controlId="graduation" label="Degree">
                    <Form.Control
                      type="text"
                      placeholder="Degree"
                      value={formData?.educational_details[index]?.degree || ""}
                      name="degree"
                      onChange={(e) => {
                        handleEducationChange(e, "educational_details", index);
                      }}
                    />
                  </FloatingLabel>
                </div>
                <div className="col-lg-12">
                  <Form.Check
                    inline
                    label="Currently pursuing"
                    name="currently_persuing"
                    type={"checkbox"}
                    id={`inline-check-${index + 1}`}
                    onChange={(e) => {
                      setFormData((state) => {
                        if (state?.educational_details) {
                          let tempData = JSON.parse(
                            JSON.stringify(state?.educational_details)
                          );
                          tempData[index] = {
                            ...tempData[index],
                            currently_persuing: e?.target?.checked,
                          };
                          return { ...state, educational_details: tempData };
                        }
                      });
                    }}
                  />
                </div>
              </div>
              {errors?.educational_details?.includes(index) && (
                <div className={Style.form_field_notes}>
                  *Please fill all the feilds
                </div>
              )}
            </div>
          ))}

          <button className={Style.add_additional}>
            <span className={Style.icon}></span>
            <span
              onClick={() =>
                setFormData((state) => {
                  return {
                    ...state,
                    educational_details: [...state?.educational_details, {}],
                  };
                })
              }
              className={Style.label}
            >
              Add Educational Details
            </span>
          </button>

          <div className={Style.form_field_title}>Experience Details</div>
          {formData?.experience_details?.map((feildLevel, index) => (
            <div key={index} className={Style.form_field_seprator}>
              <div className={Style.form_field_title_sub}>
                Experience Level {index + 1}
              </div>
              <div className="row mb-2">
                <div className="col-lg-6">
                  <FloatingLabel
                    controlId="occupation"
                    label="Occupation / Title"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Occupation / Title"
                      value={
                        formData?.experience_details[index]?.occupation || ""
                      }
                      name="occupation"
                      onChange={(e) => {
                        handleEducationChange(e, "experience_details", index);
                      }}
                    />
                  </FloatingLabel>
                </div>
                <div className="col-lg-6">
                  <FloatingLabel controlId="company_name" label="Company Name">
                    <Form.Control
                      type="text"
                      placeholder="Company Name"
                      value={
                        formData?.experience_details[index]?.company_name || ""
                      }
                      name="company_name"
                      onChange={(e) => {
                        handleEducationChange(e, "experience_details", index);
                      }}
                    />
                  </FloatingLabel>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className={Style.date_year}>
                    <label className={Style.date_year_label}>
                      Work Duration
                    </label>
                    <div className="col-lg-12">
                      <FloatingLabel controlId="work_duration" label="From">
                        <Form.Control
                          type="date"
                          value={
                            formData?.experience_details[index]
                              ?.work_duration || ""
                          }
                          name="work_duration"
                          onChange={(e) => {
                            handleEducationChange(
                              e,
                              "experience_details",
                              index
                            );
                          }}
                          placeholder="From"
                        />
                      </FloatingLabel>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className={Style.date_year}>
                    <label className={Style.date_year_label}>Duration To</label>
                    <div className="col-lg-12">
                      <FloatingLabel controlId="duration_to" label="To">
                        <Form.Control
                          type="date"
                          value={
                            formData?.experience_details[index]?.duration_to ||
                            ""
                          }
                          name="duration_to"
                          onChange={(e) => {
                            handleEducationChange(
                              e,
                              "experience_details",
                              index
                            );
                          }}
                          placeholder="To"
                        />
                      </FloatingLabel>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <FloatingLabel controlId="graduation" label="Degree">
                    <Form.Control
                      type="text"
                      placeholder="Degree"
                      value={formData?.experience_details[index]?.degree || ""}
                      name="degree"
                      onChange={(e) => {
                        handleEducationChange(e, "experience_details", index);
                      }}
                    />
                  </FloatingLabel>
                </div>
                <div className="col-lg-12">
                  <Form.Check
                    inline
                    label="Currently pursuing"
                    name="currently_persuing"
                    type={"checkbox"}
                    id={`inline-check-${index + 100}`}
                    onChange={(e) => {
                      setFormData((state) => {
                        if (state?.experience_details) {
                          let tempData = JSON.parse(
                            JSON.stringify(state?.experience_details)
                          );
                          tempData[index] = {
                            ...tempData[index],
                            currently_working_here: e?.target?.checked,
                          };
                          return { ...state, experience_details: tempData };
                        }
                      });
                    }}
                  />
                </div>
              </div>
              {errors?.experience_details?.includes(index) && (
                <div className={Style.form_field_notes}>
                  *Please fill all the feilds
                </div>
              )}
            </div>
          ))}

          <button className={Style.add_additional}>
            <span className={Style.icon}></span>
            <span
              onClick={() =>
                setFormData((state) => {
                  return {
                    ...state,
                    experience_details: [...state?.experience_details, {}],
                  };
                })
              }
              className={Style.label}
            >
              Add Experience Details
            </span>
          </button>

          <div className={Style.form_field_title}>
            {props?.attachment_information?.title || "Attachment Information"}
          </div>
          <div className="row mb-2">
            {formFiles?.resume ? (
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="file-drop">
                  <label className="file-drop__label">
                    {formFiles?.resume?.name}
                  </label>
                  <div className="file-drop__field">
                    <div className="file-drop__field_filled">
                      <div className="file-drop__preview">
                        <span>
                          {formFiles?.resume?.name
                            .substring(
                              formFiles?.resume?.name.lastIndexOf(".") + 1
                            )
                            .toUpperCase()}
                        </span>
                      </div>
                      <div className="file-drop__details">
                        <div className="file-drop__name">
                          {formFiles?.resume?.name}
                        </div>
                        <div className="file-drop__size">
                          {`${Math.floor(formFiles?.resume?.size / 1024)}KB`}
                        </div>
                        <div
                          onClick={() =>
                            setFormFiles((state) => {
                              return { ...state, resume: null };
                            })
                          }
                          className="file-drop__remove"
                        >
                          Remove
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-lg-6">
                <div className="file-drop">
                  <label className="file-drop__label">Attach your Resume</label>
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    accept="image/png, image/jpeg, application/pdf"
                    onChange={(e) => handleFileUpload(e, "resume")}
                  />
                  <label
                    onDragOver={(e) => {
                      e?.preventDefault();
                      e?.stopPropagation();
                    }}
                    onDrop={(e) => handleFileDrop(e, "resume")}
                    className="file-drop__field"
                    htmlFor={"resume"}
                  >
                    <div className="file-drop__field_inner">
                      <div className="file-drop__drop_here">
                        Drag & Drop or{" "}
                        <label htmlFor="resume">
                          <span>Browse Files</span>
                        </label>
                      </div>
                      <div className="file-drop__formats">
                        We accept PNG, JPG, JPEG and PDF files
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {formFiles?.coverLetter ? (
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="file-drop">
                  <label className="file-drop__label">
                    {formFiles?.coverLetter?.name}
                  </label>
                  <div className="file-drop__field">
                    <div className="file-drop__field_filled">
                      <div className="file-drop__preview">
                        <span>
                          {formFiles?.coverLetter?.name
                            .substring(
                              formFiles?.coverLetter?.name.lastIndexOf(".") + 1
                            )
                            .toUpperCase()}
                        </span>
                      </div>
                      <div className="file-drop__details">
                        <div className="file-drop__name">
                          {formFiles?.coverLetter?.name}
                        </div>
                        <div className="file-drop__size">
                          {`${Math.floor(
                            formFiles?.coverLetter?.size / 1024
                          )}KB`}
                        </div>
                        <div
                          onClick={() =>
                            setFormFiles((state) => {
                              return { ...state, coverLetter: null };
                            })
                          }
                          className="file-drop__remove"
                        >
                          Remove
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-lg-6">
                <div className="file-drop">
                  <label className="file-drop__label">
                    Attach your Cover Letter
                  </label>
                  <input
                    type="file"
                    name="coverLetter"
                    id="coverLetter"
                    accept="image/png, image/jpeg"
                    onChange={(e) => handleFileUpload(e, "coverLetter")}
                  />
                  <label
                    onDragOver={(e) => {
                      e?.preventDefault();
                      e?.stopPropagation();
                    }}
                    onDrop={(e) => handleFileDrop(e, "coverLetter")}
                    className="file-drop__field"
                    htmlFor={"coverLetter"}
                  >
                    <div className="file-drop__field_inner">
                      <div className="file-drop__drop_here">
                        Drag & Drop or{" "}
                        <label htmlFor="coverLetter">
                          <span>Browse Files</span>
                        </label>
                      </div>
                      <div className="file-drop__formats">
                        We accept PNG, JPG, JPEG and PDF files
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* <div className={Style.form_field_title}>Captcha</div>
          <div className="row">
            <div className="col-lg-6">
              <FloatingLabel controlId="reCaptcha" label="Enter the Captcha">
                <Form.Control type="text" placeholder="Enter the Captcha" />
              </FloatingLabel>
            </div>
            <div className="col-lg-6"> */}
          {/* <GoogleRecaptcha
                captchaReset={captchaReset}
                onChange={handleCaptchaChange}
              /> */}
          {/* </div>
            <div className="col-lg-12">
              <Form.Check
                inline
                label="I agree with all the Personal and academic details shared with you above to Middlesex University Dubai, and I acknowledge that I am the authorized person to share the Details."
                name="terms"
                type={"checkbox"}
                id={`terms-checkbox`}
              />
            </div>
          </div> */}
          {errors?.apiError && (
            <div className={Style.form_field_notes}>
              *Please make sure you&apos;ve filled all the feilds
            </div>
          )}
          <GoogleReCaptcha onVerify={handleVerifyCaptcha} />

          <div className={Style.submit_close}>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
            <button className="btn btn-dark-border" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomFormWidget;
