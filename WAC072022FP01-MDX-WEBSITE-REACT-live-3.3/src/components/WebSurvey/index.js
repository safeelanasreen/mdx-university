import Modal from "react-bootstrap/Modal";
import Icons from "../Layout/Icons";
import Style from "./WebSurvey.module.scss";
import { useWebSurvey } from "./useWebSurvey";

const WebSurvey = ({ props, openModal, setModal, expand }) => {
  const { surveyModalTab, renderScreens, handleClose, handleShow, modalClass } = useWebSurvey({
    props,
    setModal,
  });

  return (
    <>
      <button
        className={`survey_btn d-flex align-items-center ${expand ? "show" : ""}`}
        onClick={handleShow}
      >
        <div className={"survey_btn_icon"}>
          <Icons icon={"happy"} />{" "}
          {/* <Icons icon={"icon_survey"} /> */}
        </div>
        <div className={"survey_btn_text"}>Feedback</div>
      </button>
      <Modal
        show={openModal}
        onHide={handleClose}
        className={`survey ${Style.survey_modal} ${
          modalClass(surveyModalTab) ? modalClass(surveyModalTab) : ""
        }`}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className={Style.survey_modalbody}>
          <div className={Style.survey}>
            <div className={Style.survey_body}>{renderScreens(surveyModalTab)}</div>
            <div className={`d-flex justify-content-between ${Style.survey_footer}`}></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WebSurvey;
