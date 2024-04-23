import { useEffect } from "react";
import { useWindowSize } from "../../logic/useDimension";

const Form = ({ formID, contactsection }) => {
  useEffect(() => {
    let script2 = document.createElement("script");
    script2.id = "script2";
    script2.innerHTML = `window?.hbspt?.forms?.create({
      region: "na1",
      portalId: "19512864",
      formId: "${formID}"
    })`;
    let form = document.getElementById("rich_text_dynamic_form");

    let script1 = document.createElement("script");
    script1.charset = "utf-8";
    script1.type = "text/javascript";
    script1.src = "//js.hsforms.net/forms/v2.js";
    document.getElementsByTagName("head")[0].appendChild(script1);
    script1.addEventListener("load", () => {
      if (!document.getElementById("script2")) {
        form.appendChild(script2);
      }
    });
    return () => {
      document.getElementsByTagName("head")[0].removeChild(script1);
    };
  }, []);

  const size = useWindowSize();

  return (
    <>
      <div
        className={`${!contactsection && "container short_container "} ${
          size.width < 992 && "mb-4"
        }`}
      >
        <div id="rich_text_dynamic_form"></div>
      </div>
    </>
  );
};

export default Form;
