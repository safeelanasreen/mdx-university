import Image from "next/image";
import { getImageUrl } from "../../../apis";
import Style from "./ImageDetailsCard.module.scss";
const ImageDetailsCard = (props) => {
  const cardsData = props?.props?.data?.length
    ? props?.props?.data
    : props?.props?.data
    ? [props?.props?.data]
    : [props?.props];
  return (
    <>
      {cardsData?.map((data, index) => {
        return (
          <div className={Style.faculty_item} key={index}>
            <div className={Style.faculty_item_img}>
              <div className={Style.img_wrap}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={
                    data?.img?.indexOf("://") === -1
                      ? getImageUrl(data?.img)
                      : data?.img
                  }
                  alt={"course cover"}
                />
              </div>
            </div>
            <div className={Style.faculty_item_info}>
              <div className="d-flex align-items-start justify-content-between">
                <h5>{data?.title}</h5>{" "}
                <span className={`d-flex ${Style.arrow}`}></span>
              </div>
              <p>{data?.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ImageDetailsCard;
