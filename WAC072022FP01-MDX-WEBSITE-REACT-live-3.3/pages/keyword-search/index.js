import React from "react";
import CommonLayout from "../../src/components/Layout/CommonLayout";
import { getLayout,getNewLayout } from "../../lib/pages";
import SearchInput from "../../src/components/SearchInput";

const keywordPage = ({ data }) => {
  return (
    <CommonLayout linksEnabled={true} props={{ ...data, data: {} }}>
      <main>
        <>
          <SearchInput />
        </>
      </main>
    </CommonLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  const layout = await getLayout("home-page");
  const newlayout = await getNewLayout("home-page");
  const pageData = { menu: newlayout };

  return {
    props: {
      data: pageData,
    },
  };
};

export default keywordPage;
