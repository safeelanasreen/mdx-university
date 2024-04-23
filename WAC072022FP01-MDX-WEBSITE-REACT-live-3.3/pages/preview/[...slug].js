import CommonLayout from "../../src/components/Layout/CommonLayout";
import ComponentFunc from "../../src/components";
import Error from "../../src/components/Error";

import {
  getPageContent,
  getLayout,
  getPreviewPageContent,
  getNewLayout
} from "../../lib/pages";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import RedirectPage from "../../lib/redirect";
import Menu from "../../src/components/Layout/CommonLayout/hamburgerMenuDummy";
import Script from "next/script";
import { getImageUrl } from "../../src/apis";

const Common = ({ data }) => {
  const Router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined) {
      document.body.classList?.remove("show-menu");
    }
  }, [data]);

  useEffect(() => {
    RedirectPage(Router.asPath, Router);
  }, []);

  useEffect(() => {
    if (data?.data?.is_redirect) {
      Router.push(data?.data?.redirect_url);
    }
  }, []);

  return (
    <>
      {!data?.data?.is_redirect ? (
        <>
          <Head>
            <title>{data?.data?.meta_title}</title>
            <meta name="description" content={data?.data?.meta_description} />
            <meta
              name="google-site-verification"
              content="udKlTZHJKv-OcrOQKxrxgK5yfd4nJ5vZRDJEceiRLoU"
            />
            {data?.data?.meta_image && ( <meta property="og:image" content={getImageUrl(data?.data?.meta_image)} />)}
            <meta name="robots" content="nofollow"></meta>
            <meta name="robots" content="noindex"></meta>
          </Head>
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></Script>
          <main>
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
                    <>
                      {data?.data?.widgets?.map((block) =>
                        ComponentFunc(block)
                      )}
                    </>
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

  const pageContent = await getPreviewPageContent(route);
  const layout = await getLayout(route);
  const newlayout = await getNewLayout(route);
  const pageData = { ...pageContent, menu: newlayout };

  return {
    props: {
      data: pageData,
    },
    revalidate: 300,
  };
};

export default Common;
