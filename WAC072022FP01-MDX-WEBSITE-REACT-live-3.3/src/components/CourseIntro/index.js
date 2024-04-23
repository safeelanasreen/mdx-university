import Style from "./CourseIntro.module.scss";
import { getImageUrl } from "../../apis";

const CourseIntro = ({ props }) => {
  return (
    <section className={Style.mdx_course_intro}>
      {(props?.media!=null&&props?.media!="")&&<div className={Style.video_wrap}>
        <div className={Style.video}>
          <iframe src={props?.media} allowFullScreen></iframe>
          {/* <video autoPlay loop playsInline muted>
            <source src={props?.media} />
          </video> */}
        </div>
      </div>}
    </section>
  );
};

export default CourseIntro;
