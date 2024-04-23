import React from "react";
import ComponentFunc from "../../../../../src/components";
import CommonLayout from "../../../../../src/components/Layout/CommonLayout";
import { IfpDummyData } from "../../../../../src/constants/data";
import { useRouter } from "next/router";

const Ifp = () => {
  const Router = useRouter();
  return (
    <>
      {IfpDummyData && !IfpDummyData?.data?.status && (
        <CommonLayout
          linksEnabled={
            Object.keys(IfpDummyData?.data).includes("links_enabled")
              ? IfpDummyData?.data?.links_enabled
              : "/aptech-2023" == Router.asPath
              ? false
              : true
          }
          props={IfpDummyData}
        >
          <>
            {IfpDummyData?.data?.widgets?.map((block) => ComponentFunc(block))}
          </>
        </CommonLayout>
      )}
    </>
  );
};

export default Ifp;
