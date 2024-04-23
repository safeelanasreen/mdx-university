import Image from "next/image";
import { getImageUrl } from "../../apis";
import Style from "./MdxInnerBaner.module.scss";

const MdxInnerBaner = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <section className={`position-relative ${Style.banner}`}>
      <figure
        className={`ratio m-0 position-absolute w-100 h-100 ${Style.banner_fig}`}
      >
        <Image
          src={getImageUrl(props?.data?.img?.url)}
          layout="fill"
          alt={props?.data?.img?.alt}
          objectFit="cover"
          objectPosition={"bottom right"}
        />
      </figure>
      <div className={`position-relative ${Style.banner_body}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className={`text-white ${Style.banner_text}`}>
                <h5 className={`h6 ${Style.banner_title_sup}`}>
                  {props?.data?.sub_title}
                </h5>
                <h1 className={`h1 ${Style.banner_title}`}>
                  {props?.data?.title}
                </h1>
                <div className={Style.banner_p}>
                  {parse(`${props?.data?.content}`)}
                </div>
                <div className={`${Style.banner_button_wrap} d-flex`}>
                  {props?.data?.buttons?.map((button, index) => {
                    return (
                      <>
                        <a
                          key={index}
                          href={button?.anchor_id ? `#${button?.anchor_id}`:`${button?.link}`}
                          target={button?.anchor_id ? "_self":"_blank"}
                          className={`btn btn-light-border ${Style.banner_button}`}
                          rel="noreferrer"
                        >
                          {button?.label}
                        </a>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MdxInnerBaner;
