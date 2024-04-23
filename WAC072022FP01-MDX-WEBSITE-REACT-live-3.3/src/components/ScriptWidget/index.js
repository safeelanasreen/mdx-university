import { useEffect } from "react";

const ScriptWidget = ({ src }) => {
  useEffect(() => {
    let script = document.getElementById("script");

    let script1 = document.createElement("script");
    script1.charset = "utf-8";
    script1.type = "text/javascript";
    script1.src = src;
    script.appendChild(script1);
  }, []);

  return (
    <>
      <div id="script"></div>
    </>
  );
};

export default ScriptWidget;
