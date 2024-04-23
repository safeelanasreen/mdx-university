import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./GlobalPresence.module.scss";

import { useWindowSize } from "../../logic/useDimension";
import AccordionView from "../AccordionView";

const GlobalPresence = (props) => {
  const data = props?.props?.data ? props?.props?.data  : props?.data;
  const size = useWindowSize();

  const [activeElement, setActiveElement] = useState(1);

  const hoverItem = (value) => {
    setActiveElement(value);
  };

  return (
    <div className={Style.our_campuses}>
      {size.width >= 1200 ? (
        <figure className={Style.earth_glob}>
          <Image
            sizes="50vw"
            src={Assets.earth_glob}
            alt={"OUR GLOBAL PRESENCE"}
            width={779.51}
            height={756.61}
            layout="responsive"
          />
          <span className={Style.earth_glob_point}>
            {data?.university_campus?.map((data, locIndex) => {
              const locName = data?.location?.toLowerCase();
              return (
                <figure
                  className={`${locName} ${
                    activeElement == data.id ? Style.active : ""
                  }`}
                  key={locIndex}
                >
                  <Image
                    sizes="50vw"
                    src={Assets.loc}
                    alt={"Location Point"}
                    width={46.17}
                    height={53.57}
                    layout="responsive"
                  />
                </figure>
              );
            })}
          </span>
        </figure>
      ) : (
        ""
      )}

      <div className="container-fluid">
        <h4 className="text-white title_sub">{data?.campus?.title}</h4>
        <h2 className={`title text-white`}>{data?.campus?.sub_title}</h2>

        {size.width >= 1200 ? (
          <ul className={Style.our_campuses_tablist}>
            {data?.university_campus?.map((tabItems, tabIndex) => {
              return (
                <li
                  className={activeElement == tabItems.id ? Style.active : ""}
                  onMouseEnter={() => hoverItem(tabItems.id)}
                  onTouchStart={() => hoverItem(tabItems.id)}
                  onTouchMove={() => hoverItem(tabItems.id)}
                  key={tabIndex}
                >
                  <Link href={tabItems?.links || ""}>{tabItems?.location}</Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <AccordionView dark={true} props={data?.university_campus} />
        )}
      </div>
    </div>
  );
};

export default GlobalPresence;
