import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { getImageUrl } from "../../../apis";
import Style from "./ProgramContentCard.module.scss";

const ProgramContentCard = (props) => {
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props?.props];

  const parse = require("html-react-parser");
  const [isReadMore, setIsReadMore] = useState(false);

  const contentRef = useRef(null);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    let nodes = contentRef.current.getElementsByTagName("*");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i]?.removeAttribute("style");
    }
  }, []);

  return (
    <>
      {cardsData?.map((data, index) => {
        let content = data?.description;
        let theContent = () => {
          let attrLength =
            content.slice(0, 400).length -
            content
              .slice(0, 400)
              .replace(/<\s*([a-z][a-z0-9]*)\s.*?>/gi, "<$1>").length;
          let matchAll = content
            .slice(0, 400 + parseInt(attrLength))
            .matchAll(/((<\/)\w+(>))/g);
          let matches = [...matchAll];

          let slicedContent;
          let finalContent;

          if (matches?.length != 0) {
            slicedContent =
              content.slice(
                0,
                matches[matches.length - 1].index + parseInt(attrLength)
              ) + matches[matches.length - 1][0];

            finalContent = `${slicedContent}${
              parse(slicedContent)?.type != matches[matches.length - 1][0]
                ? `</${parse(slicedContent)?.type}>`
                : ""
            }`;
          } else {
            finalContent = `<p>${content
              ?.replace(/(<([^>]+)>)/gi, "")
              ?.slice(0, 400)}...</p>`;
          }

          return finalContent;
        };
        return (
          <div
            className={`${Style.program_item} ${
              cardsData?.length > 1 ? "h-auto" : ""
            }`}
            style={{
              backgroundColor: data?.background_color
                ? data?.background_color
                : "",
            }}
            key={index}
          >
            <div className={Style.program_item_content}>
              <div ref={contentRef}>
                <h3>{data?.title}</h3>
                {isReadMore ? (
                  <>{parse(content.replace(/<\/?span[^>]*>/g, ""))}</>
                ) : (
                  <>
                    {content?.length > 400 && typeof window != "undefined" ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: theContent() }}
                      ></div>
                    ) : (
                      <p>{parse(content.replace(/<\/?span[^>]*>/g, ""))}</p>
                    )}
                  </>
                )}
              </div>
              <div className="mt-2">
                <span>
                  {content?.length > 400 && (
                    <a onClick={toggleReadMore} className="btn btn-light">
                      {`${isReadMore ? " Read less" : "Read more"}`}
                    </a>
                  )}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProgramContentCard;
