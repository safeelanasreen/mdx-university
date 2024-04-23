import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./GlobalPartners.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import { getImageUrl } from "../../apis";
import Link from "next/link";

const GlobalPartners = (props) => {
  const data = props?.props?.data ? props?.props?.data : props?.data;
  const { width } = useWindowSize();
  return (
    <div className={Style.our_partners}>
      <div className="container-fluid">
        <h4 className="text-white title_sub">{data?.partners?.title}</h4>
        <h2 className={`title text-white`}>{data?.partners?.sub_title}</h2>
        <ul className={Style.our_partners_list}>
          {data?.global_partners.map((data, index) => {
            return (
              <li key={index} style={{ height: "60px" }}>
                {/* <Link href={data?.links || ""}> */}
                <div>
                  <Image
                    // sizes="50vw"
                    className="h-100 w-auto"
                    // style={{ maxWidth: "none" }}
                    src={getImageUrl(data?.partners_logo_full_url)}
                    alt={data?.name}
                    width={180}
                    height={55}
                    objectFit="contain"
                  />
                </div>
                {/* </Link> */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GlobalPartners;
