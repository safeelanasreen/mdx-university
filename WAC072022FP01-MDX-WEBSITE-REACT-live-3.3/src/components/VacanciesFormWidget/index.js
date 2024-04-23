import Style from "../CustomFormWidget/CustomFormWidget.module.scss";
import { FloatingLabel, Form } from "react-bootstrap";
import extensions from "../../constants/extensions";
import useVacanciesForm from "./useVacanciesForm";

const VacanciesForm = ({ props }) => {
  const {
    container,
    formData,
    formFiles,
    extension,
    handleChange,
    handleSelect,
    errors,
    handleFileUpload,
    handleFileDrop,
    setFormFiles,
    handleSubmit,
    handleClear,
  } = useVacanciesForm();

  return (
    <section id="formWidget" className={Style.custom_form_widget}>
      <div className={container ? "container" : "containner-fluid"}>
        <div className={Style.custom_form_widget_container}></div>
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

        {/********* Master Details ***********/}
        <div className={Style.form_field_title}>
          {props?.masters_details?.title || "Masters Details"}
        </div>
        <div className="row">
          <div className={Style.form_field_sub}>
            <div className={Style.form_field_sub_label}>Masters</div>
          </div>
          <div className="radio-group">
            {["Yes", "No"]?.map((category, index) => (
              <Form.Check
                key={index}
                inline
                defaultChecked={category === "Yes"}
                label={category}
                onChange={(e) => {
                  let ev = {
                    ...e,
                    target: {
                      ...e.target,
                      value: e.target.checked ? "Yes" : "No",
                      name: "masters",
                    },
                  };
                  handleChange(ev, "masters_details");
                }}
                type={"radio"}
                id={`inline-radio-${index + 1}`}
              />
            ))}
          </div>
          <div className="col-lg-6">
            <FloatingLabel
              controlId="subject_area"
              label="Subject Area (masters)"
            >
              <Form.Control
                type="text"
                value={formData?.masters_details?.subject_area || ""}
                name="subject_area"
                onChange={(e) => {
                  handleChange(e, "masters_details");
                }}
                placeholder="Subject Area (masters)"
              />
            </FloatingLabel>
          </div>
          <div className="col-lg-6">
            <FloatingLabel controlId="university" label="University (Masters)">
              <Form.Control
                type="text"
                name="university"
                value={formData?.masters_details?.university || ""}
                onChange={(e) => {
                  handleChange(e, "masters_details");
                }}
                placeholder="University (Masters)"
              />
            </FloatingLabel>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className={Style.date_year}>
              <label className={Style.date_year_label}>Year completed:</label>
              <div className="col-lg-12">
                <FloatingLabel
                  controlId="year_completed"
                  label="Year completed"
                >
                  <Form.Control
                    type="date"
                    value={formData?.masters_details?.year_completed || ""}
                    name="year_completed"
                    onChange={(e) => {
                      handleChange(e, "masters_details");
                    }}
                    placeholder="Year completed"
                  />
                </FloatingLabel>
              </div>
            </div>
          </div>
          {errors?.masters_details && (
            <div className={Style.form_field_notes}>
              *Please fill all the feilds
            </div>
          )}
        </div>
        {/**** Master Details ****/}
        {/**** PhD Details ****/}
        <div className={Style.form_field_title}>
          {props?.phd_details?.title || "PhD Details"}
        </div>
        <div className="row">
          <div className={Style.form_field_sub}>
            <div className={Style.form_field_sub_label}>PhD</div>
          </div>
          <div className="radio-group">
            {["Yes", "No"]?.map((category, index) => (
              <Form.Check
                key={index}
                inline
                defaultChecked={category === "Yes"}
                label={category}
                onChange={(e) => {
                  let ev = {
                    ...e,
                    target: {
                      ...e.target,
                      value: e.target.checked ? "Yes" : "No",
                      name: "phd",
                    },
                  };
                  handleChange(ev, "phd_details");
                }}
                type={"radio"}
                id={`inline-radio-${index + 5}`}
              />
            ))}
          </div>
          <div className="col-lg-6">
            <FloatingLabel
              controlId="subject_area_phd"
              label="Subject Area (phD)"
            >
              <Form.Control
                type="text"
                value={formData?.phd_details?.subject_area || ""}
                name="subject_area"
                onChange={(e) => {
                  handleChange(e, "phd_details");
                }}
                placeholder="Subject Area (PhD)"
              />
            </FloatingLabel>
          </div>
          <div className="col-lg-6">
            <FloatingLabel controlId="university" label="University (PhD)">
              <Form.Control
                type="text"
                name="university"
                value={formData?.phd_details?.university || ""}
                onChange={(e) => {
                  handleChange(e, "phd_details");
                }}
                placeholder="University (PhD)"
              />
            </FloatingLabel>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className={Style.date_year}>
              <label className={Style.date_year_label}>Year completed:</label>
              <div className="col-lg-12">
                <FloatingLabel
                  controlId="year_completed"
                  label="Year completed"
                >
                  <Form.Control
                    type="date"
                    value={formData?.phd_details?.year_completed || ""}
                    name="year_completed"
                    onChange={(e) => {
                      handleChange(e, "phd_details");
                    }}
                    placeholder="Year completed"
                  />
                </FloatingLabel>
              </div>
            </div>
          </div>
          {errors?.phd_details && (
            <div className={Style.form_field_notes}>
              *Please fill all the feilds
            </div>
          )}
          <div className="col-lg-12">
            <Form.Check
              inline
              label="Currently pursuing"
              name="currently_pursuing"
              type={"checkbox"}
              id={`inline-check-${10}}`}
              onChange={(e) => {
                let ev = {
                  ...e,
                  target: {
                    ...e.target,
                    value: e.target.checked,
                    name: "currently_pursuing",
                  },
                };
                handleChange(ev, "phd_details");
              }}
            />
          </div>
        </div>
        {/**** PhD Details ****/}
        {/******** Most Recent Employment  ********/}
        <div className={Style.form_field_title}>
          {props?.most_recent_employment?.title || "Most Recent Employment"}
        </div>
        <div className="row">
          <div className="col-lg-6">
            <FloatingLabel
              controlId="position_title"
              label="Position/Title:
"
            >
              <Form.Control
                type="text"
                value={formData?.most_recent_employment?.position_title || ""}
                name="position_title"
                onChange={(e) => {
                  handleChange(e, "most_recent_employment");
                }}
                placeholder="Position/Title:
"
              />
            </FloatingLabel>
          </div>
          <div className="col-lg-6">
            <FloatingLabel controlId="university" label="University (PhD)">
              <Form.Control
                type="text"
                name="university"
                value={formData?.most_recent_employment?.university || ""}
                onChange={(e) => {
                  handleChange(e, "most_recent_employment");
                }}
                placeholder="University (PhD)"
              />
            </FloatingLabel>
          </div>
          <div className="col-lg-6">
            <FloatingLabel
              controlId="title_of_classes_module_taught"
              label="Title of Any Classes/Module Taught"
            >
              <Form.Control
                type="text"
                value={
                  formData?.most_recent_employment
                    ?.title_of_classes_module_taught || ""
                }
                name="title_of_classes_module_taught"
                onChange={(e) => {
                  handleChange(e, "most_recent_employment");
                }}
                placeholder="Title of Any Classes/Module Taught:"
              />
            </FloatingLabel>
          </div>

          <div className="col-lg-12">
            <Form.Check
              inline
              label="Currently pursuing"
              name="currently_pursuing"
              type={"checkbox"}
              id={`inline-check-${20}}`}
              onChange={(e) => {
                let ev = {
                  ...e,
                  target: {
                    ...e.target,
                    value: e.target.checked,
                    name: "currently_pursuing",
                  },
                };
                handleChange(ev, "most_recent_employment");
              }}
            />
          </div>
          {errors?.most_recent_employment && (
            <div className={Style.form_field_notes}>
              *Please fill all the feilds
            </div>
          )}
        </div>
        {/******** Most Recent Employment  ********/}
        {/******** Professional Experience  ********/}
        <div className={Style.form_field_title}>
          {props?.professional_experience?.title || "Professional Experience"}
        </div>
        <div className="row">
          <div className="col-lg-6">
            <FloatingLabel
              controlId="areas_of_teaching_expertise"
              label="Areas of Teaching Expertise"
            >
              <Form.Control
                type="textarea"
                as="textarea"
                value={
                  formData?.professional_experience
                    ?.areas_of_teaching_expertise || ""
                }
                name="areas_of_teaching_expertise"
                onChange={(e) => {
                  handleChange(e, "professional_experience");
                }}
                placeholder="Areas of Teaching Expertise"
              />
            </FloatingLabel>
          </div>
          <div className="col-lg-6">
            <FloatingLabel
              controlId="research_interest"
              label="Research Interest"
            >
              <Form.Control
                type="text"
                as="textarea"
                name="research_interest"
                value={
                  formData?.professional_experience?.research_interest || ""
                }
                onChange={(e) => {
                  handleChange(e, "professional_experience");
                }}
                placeholder="Research Interest"
              />
            </FloatingLabel>
          </div>
          <div className="col-lg-6">
            <FloatingLabel
              controlId="relevant_professional_qualification"
              label="Relevant Professional Qualification & Memberships"
            >
              <Form.Control
                type="text"
                as="textarea"
                value={
                  formData?.professional_experience
                    ?.relevant_professional_qualification || ""
                }
                name="relevant_professional_qualification"
                onChange={(e) => {
                  handleChange(e, "professional_experience");
                }}
                placeholder="Relevant Professional Qualification & Memberships"
              />
            </FloatingLabel>
          </div>
          <div className="col-lg-6">
            <FloatingLabel controlId="ORCID_number" label="ORCID Number">
              <Form.Control
                type="text"
                name="ORCID_number"
                value={formData?.professional_experience?.ORCID_number || ""}
                onChange={(e) => {
                  handleChange(e, "professional_experience");
                }}
                placeholder="ORCID Number"
              />
            </FloatingLabel>
          </div>
          <div className="col-lg-6">
            <FloatingLabel controlId="SCOPUS_number" label="SCOPUS Number">
              <Form.Control
                type="text"
                name="SCOPUS_number"
                value={formData?.professional_experience?.SCOPUS_number || ""}
                onChange={(e) => {
                  handleChange(e, "professional_experience");
                }}
                placeholder="SCOPUS Number"
              />
            </FloatingLabel>
          </div>
          <div className="col-lg-12">
            <Form.Check
              inline
              label="Currently pursuing"
              name="currently_pursuing"
              type={"checkbox"}
              id={`inline-check-${30}}`}
              onChange={(e) => {
                let ev = {
                  ...e,
                  target: {
                    ...e.target,
                    value: e.target.checked,
                    name: "currently_pursuing",
                  },
                };
                handleChange(ev, "professional_experience");
              }}
            />
          </div>
          {errors?.professional_experience && (
            <div className={`${Style.form_field_notes} mt-3 mb-2`}>
              *Please fill all the feilds
            </div>
          )}
        </div>
        {/******** Professional Experience  ********/}
        {/****************** Attachment Information **************/}
        <div className="row mb-2">
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
                        {`${Math.floor(formFiles?.coverLetter?.size / 1024)}KB`}
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

          {formFiles?.academicCv ? (
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="file-drop">
                <label className="file-drop__label">
                  {formFiles?.academicCv?.name}
                </label>
                <div className="file-drop__field">
                  <div className="file-drop__field_filled">
                    <div className="file-drop__preview">
                      <span>
                        {formFiles?.academicCv?.name
                          .substring(
                            formFiles?.academicCv?.name.lastIndexOf(".") + 1
                          )
                          .toUpperCase()}
                      </span>
                    </div>
                    <div className="file-drop__details">
                      <div className="file-drop__name">
                        {formFiles?.academicCv?.name}
                      </div>
                      <div className="file-drop__size">
                        {`${Math.floor(formFiles?.academicCv?.size / 1024)}KB`}
                      </div>
                      <div
                        onClick={() =>
                          setFormFiles((state) => {
                            return { ...state, academicCv: null };
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
                  Attach your Academic CV
                </label>
                <input
                  type="file"
                  name="academicCv"
                  id="academicCv"
                  accept="image/png, image/jpeg, application/pdf"
                  onChange={(e) => handleFileUpload(e, "academicCv")}
                />
                <label
                  onDragOver={(e) => {
                    e?.preventDefault();
                    e?.stopPropagation();
                  }}
                  onDrop={(e) => handleFileDrop(e, "academicCv")}
                  className="file-drop__field"
                  htmlFor={"academicCv"}
                >
                  <div className="file-drop__field_inner">
                    <div className="file-drop__drop_here">
                      Drag & Drop or{" "}
                      <label htmlFor="academicCv">
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

          {formFiles?.statementOfTeaching ? (
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="file-drop">
                <label className="file-drop__label">
                  {formFiles?.statementOfTeaching?.name}
                </label>
                <div className="file-drop__field">
                  <div className="file-drop__field_filled">
                    <div className="file-drop__preview">
                      <span>
                        {formFiles?.statementOfTeaching?.name
                          .substring(
                            formFiles?.statementOfTeaching?.name.lastIndexOf(
                              "."
                            ) + 1
                          )
                          .toUpperCase()}
                      </span>
                    </div>
                    <div className="file-drop__details">
                      <div className="file-drop__name">
                        {formFiles?.statementOfTeaching?.name}
                      </div>
                      <div className="file-drop__size">
                        {`${Math.floor(
                          formFiles?.statementOfTeaching?.size / 1024
                        )}KB`}
                      </div>
                      <div
                        onClick={() =>
                          setFormFiles((state) => {
                            return { ...state, statementOfTeaching: null };
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
                  Attach your Statement of Teaching Philosophy and Impact
                </label>
                <input
                  type="file"
                  name="statementOfTeaching"
                  id="statementOfTeaching"
                  accept="image/png, image/jpeg, application/pdf"
                  onChange={(e) => handleFileUpload(e, "statementOfTeaching")}
                />
                <label
                  onDragOver={(e) => {
                    e?.preventDefault();
                    e?.stopPropagation();
                  }}
                  onDrop={(e) => handleFileDrop(e, "statementOfTeaching")}
                  className="file-drop__field"
                  htmlFor={"statementOfTeaching"}
                >
                  <div className="file-drop__field_inner">
                    <div className="file-drop__drop_here">
                      Drag & Drop or{" "}
                      <label htmlFor="statementOfTeaching">
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

          {formFiles?.statementOfResearch ? (
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="file-drop">
                <label className="file-drop__label">
                  {formFiles?.statementOfResearch?.name}
                </label>
                <div className="file-drop__field">
                  <div className="file-drop__field_filled">
                    <div className="file-drop__preview">
                      <span>
                        {formFiles?.statementOfResearch?.name
                          .substring(
                            formFiles?.statementOfResearch?.name.lastIndexOf(
                              "."
                            ) + 1
                          )
                          .toUpperCase()}
                      </span>
                    </div>
                    <div className="file-drop__details">
                      <div className="file-drop__name">
                        {formFiles?.statementOfResearch?.name}
                      </div>
                      <div className="file-drop__size">
                        {`${Math.floor(
                          formFiles?.statementOfResearch?.size / 1024
                        )}KB`}
                      </div>
                      <div
                        onClick={() =>
                          setFormFiles((state) => {
                            return { ...state, statementOfResearch: null };
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
                  Attach your Statement of Research Interest/ Professional
                  Practice and Impact
                </label>
                <input
                  type="file"
                  name="statementOfResearch"
                  id="statementOfResearch"
                  accept="image/png, image/jpeg, application/pdf"
                  onChange={(e) => handleFileUpload(e, "statementOfResearch")}
                />
                <label
                  onDragOver={(e) => {
                    e?.preventDefault();
                    e?.stopPropagation();
                  }}
                  onDrop={(e) => handleFileDrop(e, "statementOfResearch")}
                  className="file-drop__field"
                  htmlFor={"statementOfResearch"}
                >
                  <div className="file-drop__field_inner">
                    <div className="file-drop__drop_here">
                      Drag & Drop or{" "}
                      <label htmlFor="statementOfResearch">
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
        {errors?.academicCv && (
          <div className={Style.form_field_notes}>*Academic CV is required</div>
        )}
        {/****************** Attachment Information **************/}
        {errors?.apiError && (
          <div className={Style.form_field_notes}>
            *Please make sure you&apos;ve filled all the feilds
          </div>
        )}
        <div className={Style.submit_close}>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn btn-dark-border" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </section>
  );
};

export default VacanciesForm;
