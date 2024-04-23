import { getLayout } from "../lib/pages";
import CommonLayout from "../src/components/Layout/CommonLayout";
import SearchResult from "../src/components/SearchResults";

const keywordSearchPage = ({ data }) => {
  return (
    <CommonLayout linksEnabled={true} props={{ ...data, data: {} }}>
      <SearchResult />
    </CommonLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  const layout = await getLayout("");

  const pageData = { menu: layout };

  return {
    props: {
      data: pageData,
    },
    revalidate: 300,
  };
};

export default keywordSearchPage;
