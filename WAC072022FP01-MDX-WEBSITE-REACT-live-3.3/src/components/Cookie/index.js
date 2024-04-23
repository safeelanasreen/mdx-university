import Style from "./Cookie.module.scss";
import Link from "next/link";

import { useWindowSize } from "../../logic/useDimension";

const Cookie = ({ handleClickAccept }) => {
  const { width } = useWindowSize();
  return (
    <div className={Style.cookie_wrap}>
      <div className={`container ${Style.container}`}>
        <div className={Style.cookie_wrap_body}>
          <p>
            This website uses cookies to ensure you get the best experience on
            our website.{" "}
            <Link href={"/privacy-policy"}>
              <a>Learn more</a>
            </Link>
            {width < 992 ? (
              <div className={Style.cookie_wrap_btn}>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleClickAccept()}
                >
                  Accept
                </button>
              </div>
            ) : (
              ""
            )}
          </p>
        </div>
        {width >= 992 ? (
          <div className={Style.cookie_wrap_btn}>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleClickAccept()}
            >
              Accept
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cookie;
