import Image from "next/image";
import Link from "next/link";
import Icons from "../../Layout/Icons";
import Style from "./CourseCard.module.scss";

import { useWindowSize } from "../../../logic/useDimension";
import { getImageUrl } from "../../../apis";
const CourseCard = (props) => {
  const parse = require("html-react-parser");
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props];
  const { width } = useWindowSize();
  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <Link href={data?.link || ""} key={index}>
            <div
              className={`${data?.link && Style.cursor} ${
                data?.grid ? Style.grid_item_square : ""
              } ${Style.grid_item} ${data?.listing ? Style.grid_item_listing : ""}`}
            >
              <div className={`${Style.grid_item_inner}`}>
                <div className={Style.grid_item_icon}>
                  {data?.img && (
                    <div className={Style.grid_item_i}>
                      <Image
                        src={
                          data?.img?.indexOf("://") === -1
                            ? getImageUrl(data?.img ? data?.img : "")
                            : data?.img
                        }
                        alt={data?.title}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  )}
                </div>
                <div className={Style.grid_item_info}>
                  <h3>{data?.title}</h3>
                  <div className={Style.grid_item_shortcnt}>
                    <div className={Style.grid_item_shortcnt_div}>
                      {data?.content && parse(data?.content)}
                    </div>

                    <span className={Style.know_more}>
                      <label>{data?.link_text ? data?.link_text : "Know More"}</label>{" "}
                      <span>
                        <Icons icon={"arrow-right-long"} size={20} />
                      </span>
                    </span>
                  </div>
                </div>
                {width >= 1200 ? (
                  data?.listing ? (
                    <div className={Style.grid_item_arwicon}>
                      <Icons icon={"arrow-top-right-long"} size={23.14} />
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default CourseCard;
