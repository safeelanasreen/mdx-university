import React from "react";
import CommonLayout from "../src/components/Layout/CommonLayout";
import ComponentFunc from "../src/components";
import { customdata as pageData } from "../src/constants/gridData";
import { useRouter } from "next/router";
import { getLayout } from "../lib/pages";
const ComponentsDemoPage = (props) => {
  const Router = useRouter();
  let Data = { ...props.data, ...pageData };
  return (
    <CommonLayout linksEnabled={true} props={Data}>
      <main> {Data?.data?.widgets?.map((block) => ComponentFunc(block))}</main>
    </CommonLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  // const pageContent = await getPageContent(route);
  const layout = await getLayout("home-page");

  const pageData = { menu: layout };

  return {
    props: {
      data: pageData,
    },
  };
};

export default ComponentsDemoPage;
