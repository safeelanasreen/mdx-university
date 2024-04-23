import React from "react";
import CommonLayout from "../../src/components/Layout/CommonLayout";
import { customdata as pageData } from "../../src/constants/gridData";
import { courseData } from "../../src/constants/courseData";
import LaunchingCourses from "../../src/components/LaunchingCourses";
const CourseDemoPage = (props) => {
  let Data = { ...props.data, ...pageData };
  return (
    <CommonLayout linksEnabled={true} props={Data}>
      <main>
        <>
          <LaunchingCourses props={courseData} />
        </>
      </main>
    </CommonLayout>
  );
};

export default CourseDemoPage;
