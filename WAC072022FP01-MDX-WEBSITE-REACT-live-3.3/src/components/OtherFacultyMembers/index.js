import FacultyCard from "../cards/FacultyCard";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./OtherFacultyMembers.module.scss";
const OtherFacultyMembers = ({ props }) => {
  return (
    <section className={Style.mdx_faculty_sec}>
      <div className="container-fluid">
        <h3 className="h3"> {props?.data?.title}</h3>
        <div
          className={`${Style.row} row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4`}
        >
          {props?.data?.cards?.map((value, i) => {
            return (
              <div key={i}>
                <FacultyCard data={value} />
              </div>
            );
          })}
        </div>
        {/* <div className={`text-center ${Style.btn_wrap}`}>
          <a
            href={props?.data?.button_link}
            className={`btn btn-primary ${Style.view_more_btn}`}
          >
            {props?.data?.button_label}
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default OtherFacultyMembers;
