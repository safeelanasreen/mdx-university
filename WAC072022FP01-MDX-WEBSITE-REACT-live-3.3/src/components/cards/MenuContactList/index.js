import Link from "next/link";
import Style from "./MenuContactList.module.scss";
import Icons from "../../Layout/Icons";
const MenuContactList = (props) => {
  const { type } = props;
  //mailto
  return (
    <li
      className={`${Style.contact_item}  ${
        props?.props?.label_left === "Openinghours" ? Style.opening_hours : ""
      }`}
    >
      {/* <Link href={props?.props?.label_left ?? "#"}> */}
      <div className={`d-flex justify-content-between ${Style.item_wrap} `}>
        <div className={`d-flex align-items-center ${Style.img_wrap}`}>
          <div className={Style.contact_item_img}>
            <Icons icon={props?.props?.social_icon_left} size={24} />
          </div>
          <p className="mb-0">{props?.props?.label_left}</p>
        </div>
        {props?.props?.data?.map((item, index) => {
          return (
            <>
              {props?.props?.label_left == "Phone" ||
              props?.props?.label_left == "Email" ? (
                <a
                  href={
                    props?.props?.label_left == "Phone"
                      ? `tel:${item?.value}`
                      : `mailto:${item?.value}`
                  }
                >
                  <p className={`mb-0 ${Style.data}`} key={index}>
                    {" "}
                    {item?.value}
                  </p>
                </a>
              ) : (
                <p className={`mb-0 ${Style.data}`} key={index}>
                  {item?.value}
                </p>
              )}
            </>
          );
        })}
      </div>
      {/* </Link> */}
    </li>
  );
};
export default MenuContactList;
