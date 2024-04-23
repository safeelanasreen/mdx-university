import Image from "next/image";
import Style from "./ImageCard.module.scss";
import { getImageUrl } from "../../../apis";

const ImageCard = ({ props }) => {
  return (
    <div className={Style.card}>
      <figure className="mb-0">
        <Image
          src={
            props?.data?.indexOf("://") === -1
              ? getImageUrl(props?.data ? props?.data : "")
              : props?.data
          }
          layout="fill"
          alt="ImageCard"
        />
      </figure>
    </div>
  );
};

export default ImageCard;
