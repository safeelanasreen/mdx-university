import Icons from "../Layout/Icons";
import { useState } from "react";
import Style from "./TeachingWidget.module.scss";
import Image from "next/image";
import { getImageUrl } from "../../apis";

const TeachingWidget = ({ props }) => {
  const parse = require("html-react-parser");
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <section
        id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
        className={Style.mdx_teaching_sec}
      >
        <div className={`container-fluid ${Style.container}`}>
          <div className={Style.item}>
            <div className={Style.item_cover}>
              <div className={Style.img_wrap}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={getImageUrl(props?.data?.img)}
                  alt={props?.data?.title}
                />
              </div>
            </div>
            <div className={Style.item_content}>
              <div className="container">
                <div className="row row-cols-1 row-cols-lg-2">
                  <div>
                    <h3 className="title_sub">{props?.data?.title}</h3>
                    <h2 className="title title-sm">
                      {props?.data?.title_caption}
                    </h2>
                  </div>
                  <div>
                    {/* <p> */}
                    {parse(
                      isReadMore
                        ? `${props?.data?.description?.slice(0, 400)}...`
                        : props?.data?.description
                    )}
                    {/* </p> */}
                    <span onClick={toggleReadMore}>
                      <a className={"btn-link btn-link-primary"}>
                        {isReadMore ? "Read More" : " Read less"}
                        <span className="btn-link-icon">
                          <Icons icon={"arrow-top-right-long"} size={13.76} />
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeachingWidget;
