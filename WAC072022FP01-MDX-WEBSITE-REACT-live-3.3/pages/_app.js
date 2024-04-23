import Head from "next/head";
import "../src/styles/common.scss";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>MDX University</title>
        <meta
          name="description"
          content="Study at Middlesex University in Dubai on the pre-university Foundation Programme, Undergraduate or Postgraduate Degree. More than just a quality UK Degree."
        />
      </Head>
      <GoogleReCaptchaProvider
        reCaptchaKey={"6LdcCisjAAAAANfejwuMw19nSiObhOYYUoPOCNtP"}
      >
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </>
  );
}

export default MyApp;
