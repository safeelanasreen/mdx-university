import React from "react";
import ComponentFunc from "../../../../../src/components";
import CommonLayout from "../../../../../src/components/Layout/CommonLayout";
import { MbaDummyData, menuData } from "../../../../../src/constants/data";
import { useRouter } from "next/router";

const Mba = () => {
  const Router = useRouter();
  const pageData = { ...MbaDummyData, menu: menuData };

  return (
    <>
      {MbaDummyData && !MbaDummyData?.data?.status && (
        <CommonLayout
          linksEnabled={
            Object.keys(MbaDummyData?.data).includes("links_enabled")
              ? MbaDummyData?.data?.links_enabled
              : "/aptech-2023" == Router.asPath
              ? false
              : true
          }
          props={pageData}
        >
          <>
            {MbaDummyData?.data?.widgets?.map((block) => ComponentFunc(block))}
          </>
        </CommonLayout>
      )}
    </>
  );
};

export default Mba;