import Style from "./HalfContainerWithImage.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import { getImageUrl } from "../../apis";

const HalfContainerWithImage = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <section id={props?.data?.scrollID ? props?.data?.scrollID : "none"}>
      <div className={`container-fluid position-relative ${Style.half_fluid}`}>
        <div className="container">
          <div className="row">
            <div
              className={`col-lg-6 position-lg-absolute h-100 ${Style.right_half}`}
            >
              <div className={Style.image_wrap}>
                {props?.data?.img && (
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={getImageUrl(props?.data?.img)}
                    alt={props?.data?.title}
                  />
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className={Style.user_msg_wrap}>
                <h2 className="title title-sm">
                  {props?.data?.title ? parse(props?.data?.title) : ""}
                </h2>
                {props?.data?.description ? (
                  <div className={Style.user_msg_cnt}>
                    {parse(
                      props?.data?.description?.replace(/<\/?span[^>]*>/g, "")
                    )}
                  </div>
                ) : (
                  ""
                )}

                <ul className={Style.user_details}>
                  {props?.data?.name && (
                    <li className={Style.user_details_name}>
                      {parse(props?.data?.name)}
                    </li>
                  )}
                  <li>
                    {props?.data?.designation &&
                      parse(props?.data?.designation)}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HalfContainerWithImage;
