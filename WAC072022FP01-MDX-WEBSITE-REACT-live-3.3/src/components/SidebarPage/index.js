import { useEffect, useState } from "react";
import ScrollSpy from "react-ui-scrollspy";
import ComponentFunc from "../components";

const SidebarPage = ({ props }) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      setClient(true);
    }
  }, []);

  const handleClassChange = (id) => {
    document.getElementById("scrollbar").scrollLeft = Math.floor(
      document.querySelectorAll(".active-scroll-spy")[0].offsetLeft - 50
    );
  };
  return (
    <>
      {client && props?.children && (
        <ScrollSpy
          updateHistoryStack={false}
          onUpdateCallback={(id) => handleClassChange(id)}
        >
          {props?.children?.map((block, i) => ComponentFunc(block))}
        </ScrollSpy>
      )}
    </>
  );
};

export default SidebarPage;
