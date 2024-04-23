import { getLayout,getNewLayout } from "../lib/pages";
import CommonLayout from "../src/components/Layout/CommonLayout";
import Search from "../src/components/Search";

const SearchPage = ({ data }) => {
  return (
    <CommonLayout linksEnabled={true} props={{ ...data, data: {} }}>
      <Search />
    </CommonLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  const layout = await getLayout("");
  const newlayout = await getNewLayout("");

  const pageData = { menu: layout };

  return {
    props: {
      data: pageData,
    },
    revalidate: 300,
  };
};

export default SearchPage;
