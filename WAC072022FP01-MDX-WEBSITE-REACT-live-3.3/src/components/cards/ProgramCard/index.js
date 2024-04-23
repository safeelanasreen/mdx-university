import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { getImageUrl } from "../../../apis";
import Style from "./ProgramCard.module.scss";
import parse from "html-react-parser";
import { useRouter } from "next/router";

const ProgramCard = (props) => {
  // props = props?.props?.data ? props?.props?.data : props?.props;

  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props?.props];

  const [isReadMore, setIsReadMore] = useState(false);

  const contentRef = useRef(null);

  const router = useRouter();

  let page = useMemo(() => router.asPath, [router]);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    if (page == "/mdx-professional") {
      setIsReadMore(true);
    }
  }, []);
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
            content.slice(0, 160).replace(/<\s*([a-z][a-z0-9]*)\s.*?>/gi, "<$1>").length;
          let matchAll = content.slice(0, 400 + parseInt(attrLength)).matchAll(/((<\/)\w+(>))/g);
          let matches = [...matchAll];

          let slicedContent;
          let finalContent;

          if (matches?.length != 0) {
            slicedContent =
              content.slice(0, matches[matches.length - 1].index + parseInt(attrLength)) +
              matches[matches.length - 1][0];

            finalContent = `${slicedContent}${
              parse(slicedContent)?.type != matches[matches.length - 1][0]
                ? `</${parse(slicedContent)?.type}>`
                : ""
            }`;
          } else {
            finalContent = `<p>${content?.replace(/(<([^>]+)>)/gi, "")?.slice(0, 400)}...</p>`;
          }

          return finalContent;
        };
        return (
          <div
            className={`${Style.program_item} ${cardsData?.length > 1 ? "h-auto" : ""}`}
            style={{
              backgroundColor: data?.background_color ? data?.background_color : "",
            }}
            key={index}
          >
            <div className={Style.program_item_cover}>
              <div className={Style.img_wrap}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={data?.img?.indexOf("://") === -1 ? getImageUrl(data?.img) : data?.img}
                  alt={data?.title}
                />
              </div>
            </div>
            <div className={Style.program_item_content}>
              <div ref={contentRef}>
                <h3>{data?.title}</h3>
                {isReadMore ? (
                  <>{parse(content.replace(/<\/?span[^>]*>/g, ""))}</>
                ) : (
                  <>
                    {content?.length > 700 && typeof window != "undefined" ? (
                      <div dangerouslySetInnerHTML={{ __html: theContent() }}></div>
                    ) : (
                      <p>{parse(content.replace(/<\/?span[^>]*>/g, ""))}</p>
                    )}
                  </>
                )}
              </div>
              <div>
                <span>
                  {page != "/mdx-professional" && content?.length > 700 && (
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

export default ProgramCard;
