import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "../../../apis";
import Icons from "../../Layout/Icons";
import Style from "./FacultyCard.module.scss";

const FacultyCard = (props) => {
  const parse = require("html-react-parser");
  const value = props?.props?.data ? props?.props?.data : props?.value;
  const showName = props?.showName;
  const cardsData = props?.props?.data?.length ? props?.props?.data : props?.props?.data ? [props?.props?.data] : 
  props?.data?.length ? props?.data : props?.data ? [props?.data] : props?.length ? props : [props]

  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <>
            {data?.link ? (
              <Link href={data?.link || ""} key={index}>
                <div className={`${Style.faculty_item}`}>
                  <div className={Style.faculty_item_img}>
                    <div className={Style.img_wrap}>
                      {data?.img ? (
                        <Image
                          alt={`${data?.name}`}
                          layout="fill"
                          objectFit="cover"
                          src={
                            data?.img?.indexOf("://") === -1
                              ? getImageUrl(data?.img)
                              : data?.img
                          }
                        ></Image>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className={Style.faculty_item_info}>
                    <div className="d-flex align-items-start justify-content-between">
                      <h5>{data?.name && parse(data?.name)}</h5>
                      <span className={`d-flex ${Style.arrow}`}>
                        <Icons icon={"arrow-top-right-long"} size={13} />
                      </span>
                    </div>
                    <div className={Style.p}>
                      {data?.designation && <>{parse(data?.designation)}</>}
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className={`${Style.faculty_item}`}>
                <div className={Style.faculty_item_img}>
                  <div className={Style.img_wrap}>
                    {data?.img ? (
                      <Image
                        alt={`${data?.name}`}
                        layout="fill"
                        objectFit="cover"
                        src={
                          data?.img?.indexOf("://") === -1
                            ? getImageUrl(data?.img)
                            : data?.img
                        }
                      ></Image>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className={Style.faculty_item_info}>
                  <div className="d-flex align-items-start justify-content-between">
                    <h5>{data?.name && parse(data?.name)}</h5>
                    <span className={`d-flex ${Style.arrow}`}>
                      <Icons icon={"arrow-top-right-long"} size={13} />
                    </span>
                  </div>
                  {!showName ? (
                    <div className={Style.p}>
                      {data?.designation && <>{parse(data?.designation)}</>}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default FacultyCard;
