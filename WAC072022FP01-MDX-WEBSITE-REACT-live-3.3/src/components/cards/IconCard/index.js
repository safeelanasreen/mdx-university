import Image from "next/image";
import { getImageUrl } from "../../../apis";
import Assets from "../../Layout/CommonLayout/assets";
import Icons from "../../Layout/Icons";
import Style from "./IconCard.module.scss";
const IconCard = (props) => {
  const parse = require("html-react-parser");

  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props];
  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <div className={Style.card} key={index}>
            {(data?.image || data?.icon) && (
              <div className={Style.card_icon}>
                {data?.image ? (
                  <figure className="mb-0">
                    <Image
                      src={
                        data?.image?.indexOf("://") === -1
                          ? getImageUrl(data?.image ? data?.image : "")
                          : data?.image
                      }
                      layout="fill"
                      alt={data?.title}
                    />
                  </figure>
                ) : (
                  <Icons icon={data?.icon} size={108} />
                )}
              </div>
            )}
            <div className={Style.card_title}>{data?.title}</div>
            <div className={Style.card_content}>
              {data?.description
                ? parse(data?.description.replace(/<[^>]+>/g, ""))
                : ""}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default IconCard;
