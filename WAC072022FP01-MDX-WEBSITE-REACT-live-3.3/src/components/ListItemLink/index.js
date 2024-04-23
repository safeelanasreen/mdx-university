import Link from "next/link";
import Icons from "../Layout/Icons";
import Style from "./ListItemLink.module.scss";
import { getImageUrl } from "../../apis";
import { useWindowSize } from "../../logic/useDimension";

import Image from "next/image";

const ListItemLink = ({ props }) => {
  const { width } = useWindowSize();

  const parse = require("html-react-parser");
  return (
    <>
      <div className={Style.linked_list}>
        {props &&
          props?.map((data, index) => {
            return (
              <div key={index} className={Style.linked_list_item}>
                <Link href={data?.link ? data?.link : ""}>
                  <a className={Style.linked_list_link}>
                    <div className={Style.linked_list_link_details}>
                      <span className={Style.linked_list_number}>
                        {index < 9 ? `0${index + 1}` : index + 1}
                      </span>
                      <p className={Style.linked_list_para}>{data?.title}</p>
                      <Icons icon={"arrow-top-right-long"} size={12} />
                    </div>
                    {data?.img && (
                      <figure className={Style.linked_list_img}>
                        {data?.img ? (
                          <Image
                            layout="fill"
                            objectFit="cover"
                            src={
                              data?.img?.indexOf("://") === -1
                                ? getImageUrl(data?.img)
                                : data?.img
                            }
                            alt={data?.title}
                          />
                        ) : (
                          ""
                        )}
                      </figure>
                    )}
                    <div className={Style.linked_list_cnt}>
                      {data?.description ? parse(data?.description) : ""}
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ListItemLink;
