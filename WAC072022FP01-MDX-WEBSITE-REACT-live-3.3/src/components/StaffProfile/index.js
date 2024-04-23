import Style from "./StaffProfile.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import { getImageUrl } from "../../apis";

const StaffProfile = ({ props }) => {
  return (
    <div className={Style.staff_profile}>
      <div className={Style.staff_profile_image}>
        <Image
          objectFit="cover"
          src={getImageUrl(props?.data?.img)}
          alt={"Staff Profile"}
          layout="fill"
        />
      </div>

      <div className={Style.staff_profile_details}>
        <h2 className={Style.staff_profile_details_name}>
          {props?.data?.name}
        </h2>
        <ul className={Style.staff_profile_list}>
          <li className={Style.staff_profile_list_item}>
            <span className={Style.staff_profile_list_label}>
              {props?.data?.label}
            </span>
            <span className={Style.staff_profile_list_value}>
              {props?.data?.label_value}
            </span>
          </li>
          <li className={Style.staff_profile_list_item}>
            <span className={Style.staff_profile_list_label}>
              {props?.data?.label_two}
            </span>
            <span className={Style.staff_profile_list_value}>
              <a href={`tel:${props?.data?.label_two_value}`}>
                {props?.data?.label_two_value}
              </a>
            </span>
          </li>
          <li className={Style.staff_profile_list_item}>
            <span className={Style.staff_profile_list_label}>
              {props?.data?.label_three}
            </span>
            <span className={Style.staff_profile_list_value}>
              <a href={`mailto:${props?.data?.label_three_value}`}>
                {props?.data?.label_three_value}
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StaffProfile;
