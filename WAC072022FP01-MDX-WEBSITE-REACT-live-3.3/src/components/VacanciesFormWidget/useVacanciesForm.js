import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useVacanciesForm = () => {
  const [formData, setFormData] = useState({});
  const [formFiles, setFormFiles] = useState({
    coverLetter: null,
    academicCv: null,
    statementOfTeaching: null,
    statementOfResearch: null,
  });
  const [extension, setExtension] = useState("+971");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  let container = true;

  const handleChange = (e, section) => {
    setErrors({});
    const { name, value } = e.target;
    setFormData((state) => {
      if (state?.[section]) {
        return { ...state, [section]: { ...state[section], [name]: value } };
      } else {
        return { ...state, [section]: { [name]: value } };
      }
    });
  };

  const handleSelect = (e) => {
    setExtension(e?.target?.value);
  };

  const handleFileUpload = (e, type) => {
    setFormFiles((state) => {
      return { ...state, [type]: e?.target?.files[0] };
    });
  };
  const handleFileDrop = (e, type) => {
    e?.preventDefault();
    e?.stopPropagation();

    setFormFiles((state) => {
      return { ...state, [type]: e.dataTransfer.files[0] };
    });
  };

  useEffect(() => {
    if (Object?.keys(errors)?.length !== 0) {
      if (typeof window !== "undefined") {
        let form = document.getElementById("formWidget");
        form?.scrollIntoView();
      }
    }
  }, [errors]);

  useEffect(() => {
    setFormData((state) => {
      return { ...state, job_detail: router.query?.["job-id"] };
    });
  }, []);

  /****************     SUBMIT      *****************/

  const handleSubmit = async () => {
    let error;
    [
      "basic_information",
      "masters_details",
      "phd_details",
      "most_recent_employment",
      "professional_experience",
    ].map((section) => {
      if (!Object.keys(formData).includes(section)) {
        error = true;
        setErrors((errors) => {
          return { ...errors, [section]: true };
        });
      }
    });

    if (formData?.basic_information) {
      if (Object?.keys(formData?.basic_information)?.length < 4) {
        setErrors((err) => {
          return { ...err, basic_information: true };
        });
      }
    }

    if (formData?.address_information) {
      if (Object?.keys(formData?.address_information)?.length < 4) {
        setErrors((err) => {
          return { ...err, address_information: true };
        });
      }
    }
    let emailPattern = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!emailPattern.test(formData?.basic_information?.email)) {
      setErrors((err) => {
        return { ...err, email: true };
      });
    }

    if (!formFiles.academicCv) {
      setErrors((err) => {
        return { ...err, academicCv: true };
      });
    }

    if (!error && Object?.keys(errors)?.length == 0) {
      let finalFormData = new FormData();
      let updatedFormData = JSON.parse(JSON.stringify(formData));
      let updatedPhone = `${extension}${updatedFormData?.basic_information?.phone_number}`;
      let finalUpdatedData = {
        ...updatedFormData,
        basic_information: {
          ...updatedFormData.basic_information,
          phone_number: updatedPhone,
        },
      };

      finalFormData.append("details", JSON.stringify(finalUpdatedData));
      finalFormData.append("academicCv", formFiles?.academicCv);
      finalFormData.append("coverLetter", formFiles?.coverLetter);
      finalFormData.append(
        "statementOfResearch",
        formFiles?.statementOfResearch
      );
      finalFormData.append(
        "statementOfTeaching",
        formFiles?.statementOfTeaching
      );
      try {
        let res = await axios.post(
          `${process.env.API_URL}/api/academic-form/create-application`,
          finalFormData,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (res.status == 200) {
          handleClear();
        }
      } catch (error) {
        setErrors((err) => {
          return { ...err, apiError: true };
        });
      }
    }
  };

  /****************     SUBMIT      *****************/

  const handleClear = () => {
    setFormData({});
    setFormFiles({
      coverLetter: null,
      academicCv: null,
      statementOfTeaching: null,
      statementOfResearch: null,
    });
    setErrors({});
  };

  return {
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
  };
};

export default useVacanciesForm;
