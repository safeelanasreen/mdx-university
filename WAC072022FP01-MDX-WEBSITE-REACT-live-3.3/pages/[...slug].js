import CommonLayout from "../src/components/Layout/CommonLayout";
import ComponentFunc from "../src/components";
import Error from "../src/components/Error";

import { getPageContent, getLayout,getNewLayout} from "../lib/pages";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import RedirectPage from "../lib/redirect";
import Menu from "../src/components/Layout/CommonLayout/hamburgerMenuDummy";
import Script from "next/script";
import { getImageUrl } from "../src/apis";

const Common = ({ data }) => {
  const Router = useRouter();
  const parse = require("html-react-parser");

  useEffect(() => {
    if (typeof window !== undefined) {
      document.body.classList?.remove("show-menu");
      document.body.classList?.remove("modal-open");
    }
  }, [data]);

  return (
    <>
      {!data?.data?.is_redirect ? (
        <>
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
            {data?.data?.no_follow && <meta name="robots" content="nofollow"></meta>}
            {data?.data?.no_index && <meta name="robots" content="noindex"></meta>}
          </Head>
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></Script>
          <Script
            strategy="beforeInteractive"
            src={data?.menu?.common_script?.replace(/(<([^>]+)>)/gi, "")}
          ></Script>

          <Script
            src={
              parse(
                `${data?.data?.header_script?.match(/<script\b[^>]*>[\s\S]*?<\/script\b[^>]*>/g)}`
              )?.props?.src
            }
          ></Script>
          <Script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></Script>

          <main>
            {data?.data?.header_css && <style> {parse(data?.data?.header_css)} </style>}
            {data?.data?.status == "Not Found" ? (
              <>
                <CommonLayout
                  linksEnabled={
                    Object.keys(data?.data).includes("links_enabled")
                      ? data?.data?.links_enabled
                      : true
                  }
                  props={data}
                >
                  <Error />
                </CommonLayout>
              </>
            ) : (
              <>
                {data && !data?.data?.status && (
                  <CommonLayout
                    linksEnabled={
                      Object.keys(data?.data).includes("links_enabled")
                        ? data?.data?.links_enabled
                        : "/aptech-2023" == Router.asPath
                        ? false
                        : true
                    }
                    props={data}
                  >
                    <>{data?.data?.widgets?.map((block) => ComponentFunc(block))}</>
                  </CommonLayout>
                )}
              </>
            )}
          </main>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export const getStaticProps = async ({ params }) => {
  let route = params.slug.join("/");

  const pageContent = await getPageContent(route);
  const layout = await getLayout(route);
  const newlayout = await getNewLayout(route);

  const pageData = { ...pageContent, menu: newlayout };
  if (pageData?.data?.is_redirect) {
    return {
      redirect: {
        destination: pageData?.data?.is_redirect ? `/${pageData?.data?.redirect_url}` : null,
      },
    };
  } else {
    return {
      props: {
        data: pageData,
      },
      revalidate: 10,
    };
  }
};

export default Common;
