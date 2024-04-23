import Head from "next/head";
import Script from "next/script";
import { getLayout, getPageContent,getNewLayout } from "../lib/pages";
import ComponentFunc from "../src/components";
import CommonLayout from "../src/components/Layout/CommonLayout";
import { getImageUrl } from "../src/apis";

export default function Home({ data }) {
  return (
    <main>
      <Head>
        <style>
          {data?.data?.custom_css && data?.data?.custom_css.replace(/(<([^>]+)>)/gi, "")}
        </style>
        <title>{data?.data?.meta_title}</title>
        <meta name="description" content={data?.data?.meta_description} />
        <meta
          name="google-site-verification"
          content="udKlTZHJKv-OcrOQKxrxgK5yfd4nJ5vZRDJEceiRLoU"
        />
        {data?.data?.meta_image && ( <meta property="og:image" content={getImageUrl(data?.data?.meta_image)} />)}
        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
      </Head>
      <Script
        strategy="beforeInteractive"
        src={data?.menu?.common_script?.replace(/(<([^>]+)>)/gi, "")}
      ></Script>
      {data && (
        <CommonLayout
          linksEnabled={
            Object.keys(data?.data).includes("links_enabled") ? data?.data?.links_enabled : true
          }
          props={data}
        >
          {data.data.widgets.map((block) => ComponentFunc(block))}
        </CommonLayout>
      )}
    </main>
  );
}

export async function getStaticProps() {
  try {
    const pageContent = await getPageContent("home-page");
    const layout = await getLayout("home-page");
    const newlayout = await getNewLayout("home-page");

    const pageData = { ...pageContent, menu: newlayout };

    return {
      props: {
        data: pageData,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        apiError: true,
      },
    };
  }
}
