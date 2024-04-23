import Image from "next/image";
import Icons from "../../Icons";
import Assets from "../assets";
import Style from "./Footer.module.scss";

import { useWindowSize } from "../../../../logic/useDimension";

import Accordion from "react-bootstrap/Accordion";
import LanguageSwitcher from "../../../LanguageSwitcher";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Footer = ({ props }) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  const router = useRouter();

  const size = useWindowSize();

  const handleBackToTop = () => {
    if (typeof window !== undefined) {
      window.scrollTo(0, 0);
    }
  };
  const footerHiddenPages = [
    `/september-2022`,
    `/gcc`,
    `/September-2022-ifp`,
    `/india-nepal-srilanka`,
    `/pakistan-afghanistan`,
    `/africa`,
    `/aptech-2022-campaigns`,
    `/book-your-open-day`,
    `/complete-your-application`,
    `/prospective-students/clearing-september-2022`,
    `/aurifer-gcc-tax-course`,
    `/row`,
  ];
  return (
    <>
      {client && (
        <footer
          className={`${
            footerHiddenPages.includes(`/${router.asPath.split("/")?.[1]}`) && Style.remove_footer
          }  ${Style.footer} `}
        >
          <div className="container-fluid">
            <div className={`${Style.link_row}`}>
              <div className={`row  justify-content-xl-between`}>
                <div className="col-lg-3 col-xl-auto">
                  <div className={Style.logo_and_language}>
                    <div className={Style.logo}>
                      <Image src={Assets.Logo} alt={"logo"} height={70} width={175} />
                    </div>
                    <div className={Style.logo_dark}>
                      <Image src={Assets.logo_dark} alt={"logo"} height={70} width={175} />
                    </div>
                    {size.width >= 992 ? (
                      <div className={Style.lang_switch}>
                        {/* <div className={Style.lang_switch_label}>Language</div>
                    <LanguageSwitcher /> */}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {size.width >= 992 ? (
                  <>
                    {!footerHiddenPages.includes(`/${router.asPath.split("/")?.[1]}`) && (
                      <>
                        {props?.data?.[2]?.attributes?.items?.data?.map((value, index) => {
                          return (
                            <>
                              <div key={index} className="col-lg-3 col-xl-auto">
                                <div className={Style.menu_title}>{value?.attributes?.title}</div>
                                <ul>
                                  {value?.attributes?.children?.data?.map((item, index) => {
                                    return (
                                      <li
                                        className={` ${
                                          router.asPath == item?.attributes?.url && Style.active
                                        }`}
                                        key={index}
                                      >
                                        <Link href={item?.attributes?.url}>
                                          <a>{item?.attributes?.title}</a>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </>
                          );
                        })}
                      </>
                    )}
                  </>
                ) : (
                  !footerHiddenPages.includes(`/${router.asPath.split("/")?.[1]}`) && (
                    <div className="col-12">
                      <div className={Style.footer_mobilenav}>
                        <Accordion className="accordion-dark">
                          {props?.data?.[2]?.attributes?.items?.data?.map((value, i) => {
                            return (
                              <Accordion.Item eventKey={i} key={i}>
                                <Accordion.Header>{value?.attributes?.title}</Accordion.Header>
                                <Accordion.Body>
                                  <ul>
                                    {value?.attributes?.children?.data?.map((item, index) => {
                                      return (
                                        <li
                                          className={` ${
                                            router.asPath == item?.attributes?.url && Style.active
                                          }`}
                                          key={index}
                                        >
                                          <Link href={item?.attributes?.url}>
                                            <a>{item?.attributes?.title}</a>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            );
                          })}
                        </Accordion>
                        {size.width < 992 ? (
                          <div className={Style.lang_switch}>
                            {/* <div className={Style.lang_switch_label}>Language</div><LanguageSwitcher /> */}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className={Style.social_row}>
              <div className="row align-items-center">
                <div className="col-lg">
                  <ul>
                    {props?.social_media_icon?.map((value, index) => {
                      return (
                        <li key={index}>
                          <a href={value?.link} rel="noreferrer" target={"_blank"}>
                            {size.width >= 576 ? (
                              <span className={Style.icon}>
                                <Icons icon={value?.label} size={18} />
                              </span>
                            ) : (
                              ""
                            )}
                            <div className={Style.label}>{value?.name}</div>
                            <span className={"btn btn-link btn-link-white"}>
                              <Icons icon={"arrow-top-right-long"} size={10.36} />
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {!footerHiddenPages.includes(`/${router.asPath.split("/")?.[1]}`) &&
                size.width >= 1200 ? (
                  <div className="col-lg-auto">
                    <button onClick={handleBackToTop} className={Style.go_top}>
                      <span>
                        <Icons icon={"arrrow-down-md-thin"} size={16} />
                      </span>
                      Go to top
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className={Style.footer_credit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <p>{props?.copyright?.data1}</p>
                </div>
                {/* <div className="col-lg-5 text-lg-end">
                <p>
                Designed by <a href="">{props?.copyright?.data2}</a>
                </p>
                </div> */}
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
