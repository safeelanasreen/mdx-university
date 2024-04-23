import Script from "next/script";
import { useEffect } from "react";

const JsForm = ({ src }) => {
  return (
    <>
      <Script src={src}></Script>
    </>
  );
};

export default JsForm;
