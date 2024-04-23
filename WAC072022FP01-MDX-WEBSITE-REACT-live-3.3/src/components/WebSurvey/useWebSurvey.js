import React, { useState } from "react";
import StepOne from "./StepOne/stepOne";
import StepTwo from "./StepTwo/stepTwo";
import StepThree from "./StepThree/stepThree";
import StepFour from "./StepFour/stepFour";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postContent } from "../../../lib/pages";
import { useRouter } from "next/router";

export const useWebSurvey = ({ props, setModal }) => {
  const [surveyModalTab, setSurveyModalTab] = useState("stepOne");
  const [userReview, setUserReview] = useState([]);
  const [activeFace, setActiveFace] = useState("");

  const Router = useRouter();

  const modalClass = () => {
    if (surveyModalTab === "stepOne") return "step_one";
    else if (surveyModalTab === "stepTwo") return "step_two";
    else if (surveyModalTab === "stepThree") return "step_three";
    else if (surveyModalTab === "stepFour") return "step_four";
  };

  const handleReviewUser = (obj) => {
    if (userReview?.some((item) => item?.user_reaction === obj?.user_reaction)) {
      let tempArr = userReview?.map((item) => {
        if (item?.user_reaction === obj?.user_reaction) {
          return { ...item, user_website_experience: obj?.user_website_experience };
        } else {
          return item;
        }
      });
      setUserReview(tempArr);
    } else {
      setUserReview((state) => [...state, obj]);
    }
  };

  const handleClose = () => {
    setModal(false);
    setTimeout(() => {
      setSurveyModalTab("stepOne");
    }, 1000);
  };
  const handleShow = () => {
    setModal(true);
    setSurveyModalTab("stepOne");
  };

  const renderScreens = (page) => {
    switch (page) {
      case "stepOne":
        return (
          <StepOne
            openAuthModal={setSurveyModalTab}
            props={props?.website_experience}
            formikOne={formikOne}
            activeFace={activeFace}
            setActiveFace={setActiveFace}
          />
        );
        break;
      case "stepTwo":
        return (
          <StepTwo
            openAuthModal={setSurveyModalTab}
            props={props?.website_experience}
            formikTwo={formikTwo}
            handleReviewUser={handleReviewUser}
            userReview={userReview}
          />
        );
        break;
      case "stepThree":
        return (
          <StepThree
            openAuthModal={setSurveyModalTab}
            props={props?.website_experience}
            formikThree={formikThree}
          />
        );
        break;
      case "stepFour":
        return (
          <StepFour
            openAuthModal={setSurveyModalTab}
            modalClose={setModal}
            props={props?.website_experience}
          />
        );
        break;
    }
  };

  const formikOne = useFormik({
    initialValues: {
      selectedIcon: "",
    },

    onSubmit: () => {
      if (activeFace == 3) {
        setSurveyModalTab("stepTwo");
      } else {
        setSurveyModalTab("stepThree");
      }
      localStorage.setItem("form_one", formikOne?.values?.selectedIcon);
    },
  });
  const formikTwo = useFormik({
    initialValues: {
      selectedIconTwo: "",
    },

    onSubmit: () => {
      setSurveyModalTab("stepThree");
      const arrayString = JSON.stringify(userReview);
      localStorage.setItem("form_two", arrayString);
    },
  });
  const formikThree = useFormik({
    initialValues: {
      selectValue: "",
      message: "",
    },

    validationSchema: Yup.object({
      selectValue: Yup.string().required("Please choose an option"),
    }),

    onSubmit: (values, { resetForm }) => {
      localStorage.setItem("form_three", values?.selectValue);
      let obj = {
        reaction: localStorage.getItem("form_one"),
        message: values?.message,
        reason_for_visit: values?.selectValue ?? localStorage.getItem("form_three"),
        review:
          localStorage.getItem("form_one") === "3"
            ? userReview ?? localStorage.getItem("form_two")
            : [],

        url: Router?.asPath.replace(/^\//, ""),
      };

      postContent("website-survey", obj).then((response) => {
        if (response?.status === 200) {
          setSurveyModalTab("stepFour");
          localStorage.removeItem("form_one");
          localStorage.removeItem("form_two");
          localStorage.removeItem("form_three");
          setActiveFace("");
          formikOne?.resetForm();
          setUserReview([]);
          resetForm();

          setTimeout(() => {
            setModal(false);
          }, 2000);
          setTimeout(() => {
            setSurveyModalTab("stepOne");
          }, 2500);
        }
      });
    },
  });

  return {
    surveyModalTab,
    renderScreens,
    handleClose,
    handleShow,
    modalClass,
  };
};
