import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

const useCustomForm = (props) => {
  const [formData, setFormData] = useState({
    educational_details: [{}],
    experience_details: [{}],
  });
  const [formFiles, setFormFiles] = useState({
    resume: null,
    coverLetter: null,
  });
  const [extension, setExtension] = useState("+971");
  const [activeSkillCat, setActiveSkillCat] = useState("Master");
  const [skillsList, setSkillsList] = useState([]);
  const [errors, setErrors] = useState({});
  const AllSkills = useMemo(() => {
    let skills = props?.data?.professional_details?.skills_category?.map(
      (cat) => cat.skill_sets
    );
    let all = [...skills[0], ...skills[1], ...skills[2]];
    return all;
  }, []);
  const router = useRouter();

  const container = true;
  const options = [
    { value: "01", label: "01" },
    { value: "02", label: "02" },
    { value: "03", label: "03" },
  ];
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

  const handleEducationChange = (e, section, index) => {
    setErrors({});
    const { name, value } = e.target;
    setFormData((state) => {
      if (state?.[section]) {
        let tempData = JSON.parse(JSON.stringify(state?.[section]));
        tempData[index] = { ...tempData[index], [name]: value };
        return { ...state, [section]: tempData };
      }
    });
  };

  const handleSelect = (e) => {
    setExtension(e?.target?.value);
  };

  const handleSkillCatChange = (category) => {
    setActiveSkillCat(category);
  };

  const handleSkillSelect = (skill) => {
    setErrors({});
    if (
      formData?.professional_details?.form_skill_sets?.findIndex(
        (s) => s?.id == skill?.id
      ) == -1 ||
      !formData?.professional_details?.form_skill_sets
    ) {
      setFormData((state) => {
        if (state?.professional_details?.form_skill_sets) {
          return {
            ...state,
            professional_details: {
              ...state?.professional_details,
              form_skill_sets: [
                ...state?.professional_details?.form_skill_sets,
                skill,
              ],
            },
          };
        } else if (state?.professional_details) {
          return {
            ...state,
            professional_details: {
              ...state?.professional_details,
              form_skill_sets: [skill],
            },
          };
        } else {
          return {
            ...state,
            professional_details: {
              form_skill_sets: [skill],
            },
          };
        }
      });
    }
  };

  const removeSelectedSkill = (skill) => {
    let tempData = formData?.professional_details?.form_skill_sets?.filter(
      (skills) => skills?.id !== skill?.id
    );

    setFormData((state) => {
      return {
        ...state,
        professional_details: {
          ...state.professional_details,
          form_skill_sets: tempData,
        },
      };
    });
  };
  useEffect(() => {
    let [skills] = props?.data?.professional_details?.skills_category?.filter(
      (skill) => skill?.name == activeSkillCat
    );

    setSkillsList(skills?.skill_sets);
  }, [activeSkillCat]);

  useEffect(() => {
    if (Object?.keys(errors)?.length !== 0) {
      if (typeof window !== "undefined") {
        let form = document.getElementById("formWidget");
        form?.scrollIntoView();
      }
    }
  }, [errors]);

  const handleSearch = (e) => {
    let filteredSkills = props?.data?.professional_details?.skills_category
      ?.filter((cat) => cat?.name == activeSkillCat)?.[0]
      ?.skill_sets?.filter((skill) =>
        skill?.name?.toLowerCase().includes(e?.target?.value?.toLowerCase())
      );

    setSkillsList(filteredSkills);
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

  const handleVerifyCaptcha = (token) => {
    if (token) {
    }
  };

  useEffect(() => {
    setFormData((state) => {
      return { ...state, job_detail: router.query?.["job-id"] };
    });
  }, []);

  /****************     SUBMIT      *****************/

  const handleSubmit = async () => {
    let error;
    let experience_details_error = [];
    let educational_details_error = [];
    [
      "basic_information",
      "address_information",
      "educational_details",
      "experience_details",
      "professional_details",
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

    formData?.educational_details?.map((detail, index) => {
      if (Object.keys(detail)?.length == 0) {
        educational_details_error.push(index);
        setErrors((err) => {
          return { ...err, educational_details: educational_details_error };
        });
      }
    });

    formData?.experience_details?.map((detail, index) => {
      if (Object.keys(detail)?.length == 0) {
        experience_details_error.push(index);
        setErrors((err) => {
          return { ...err, experience_details: experience_details_error };
        });
      }
    });

    let emailPattern = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!emailPattern.test(formData?.basic_information?.email)) {
      setErrors((err) => {
        return { ...err, email: true };
      });
    }

    if (
      !error &&
      educational_details_error?.length == 0 &&
      experience_details_error?.length == 0 &&
      Object?.keys(errors)?.length == 0
    ) {
      let finalFormData = new FormData();
      let updatedFormData = JSON.parse(JSON.stringify(formData));
      let updatedPhone = `${extension}${updatedFormData?.basic_information?.phone_number}`;
      let updatedSkills =
        updatedFormData?.professional_details?.form_skill_sets?.map(
          (skill) => skill.id
        );

      let finalUpdatedData = {
        ...updatedFormData,
        basic_information: {
          ...updatedFormData.basic_information,
          phone_number: updatedPhone,
        },
        professional_details: {
          ...updatedFormData.professional_details,
          form_skill_sets: updatedSkills,
        },
      };

      finalFormData.append("details", JSON.stringify(finalUpdatedData));
      finalFormData.append("resume", formFiles?.resume);
      finalFormData.append("coverLetter", formFiles?.coverLetter);
      try {
        let res = await axios.post(
          `${process.env.API_URL}/api/form/create-application`,
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
    setFormData({
      educational_details: [{}],
      experience_details: [{}],
    });
    setFormFiles({
      resume: null,
      coverLetter: null,
    });
    setSkillsList([]);
    setErrors({});
    setActiveSkillCat("Master");
  };

  return {
    container,
    options,
    formData,
    setFormData,
    formFiles,
    setFormFiles,
    handleChange,
    extension,
    setExtension,
    handleSelect,
    skillsList,
    activeSkillCat,
    handleSkillCatChange,
    handleSkillSelect,
    errors,
    setErrors,
    AllSkills,
    removeSelectedSkill,
    handleSearch,
    handleEducationChange,
    handleFileUpload,
    handleFileDrop,
    handleSubmit,
    handleClear,
    handleVerifyCaptcha,
  };
};

export default useCustomForm;
