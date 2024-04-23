import Image from "next/image";
import Style from "./AlumniFooter.module.scss";

import { useWindowSize } from "../../../../logic/useDimension";

import Accordion from "react-bootstrap/Accordion";
import LanguageSwitcher from "../../../LanguageSwitcher";
import Assets from "../assets";
import Icons from "../../Icons";
import { getImageUrl } from "../../../../apis";

const AlumniFooter = (props) => {
  const parse = require("html-react-parser");

  let footerData =
    props?.props?.data[
      props?.props?.data?.findIndex(
        (d) => d?.attributes?.slug == "alumni_footer"
      )
    ];

  const size = useWindowSize();
  return (
    <footer className={Style.footer}>
      <div className="container-fluid">
        <div className={`${Style.link_row}`}>
          <div className={`row `}>
            <div className="col-lg-3 col-xxl-2">
              <div className={Style.logo_and_language}>
                <div className={Style.logo}>
                  <Image
                    src={Assets.alumni_logo}
                    alt={"logo"}
                    height={64}
                    width={87}
                  />
                </div>
                {/* {size.width >= 992 ? (
                  <div className={Style.lang_switch}>
                    <div className={Style.lang_switch_label}>Language</div>
                    <LanguageSwitcher />
                  </div>
                ) : (
                  ""
                )} */}
              </div>
            </div>
            {size.width >= 992 ? (
              <>
                <div className="col-lg-2 col-xxl-2">
                  <ul>
                    {footerData?.attributes?.items?.data[
                      footerData?.attributes?.items?.data.findIndex(
                        (d) => d?.attributes?.title == "menu_1"
                      )
                    ]?.attributes?.children?.data?.map((value, i) => {
                      return (
                        <li key={i}>
                          <a href={value?.attributes?.url}>
                            {value?.attributes?.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="col-lg-2 col-xxl-2">
                  <ul>
                    {footerData?.attributes?.items?.data[
                      footerData?.attributes?.items?.data.findIndex(
                        (d) => d?.attributes?.title == "menu_2"
                      )
                    ]?.attributes?.children?.data?.map((value, i) => {
                      return (
                        <li key={i}>
                          <a href={value?.attributes?.url}>
                            {value?.attributes?.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="col-lg-2 col-xxl-2">
                  <ul>
                    {footerData?.attributes?.items?.data[
                      footerData?.attributes?.items?.data.findIndex(
                        (d) => d?.attributes?.title == "menu_3"
                      )
                    ]?.attributes?.children?.data?.map((value, i) => {
                      return (
                        <li key={i}>
                          <a href={value?.attributes?.url}>
                            {value?.attributes?.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-lg-2 col-xxl-2">
                  <dl>
                    <dt>{props?.props?.address?.title}</dt>
                    <dd>
                      <address>{parse(props?.props?.address?.address)}</address>
                    </dd>
                  </dl>
                </div>
              </>
            ) : (
              <div className="col-12">
                <div className={Style.footer_mobilenav}>
                  <Accordion defaultActiveKey="0" className="accordion-dark">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>INFORMATION FOR</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          {footerData?.attributes?.items?.data[
                            footerData?.attributes?.items?.data.findIndex(
                              (d) => d?.attributes?.title == "accordian_menu_1"
                            )
                          ]?.attributes?.children?.data?.map((value, index) => (
                            <li key={index}>
                              <a href={value?.attributes?.url}>
                                {value?.attributes?.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        {props?.props?.address?.title}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <address>
                              {parse(props?.props?.address?.address)}
                            </address>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>QUICK LINKS</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          {footerData?.attributes?.items?.data[
                            footerData?.attributes?.items?.data.findIndex(
                              (d) => d?.attributes?.title == "menu_1"
                            )
                          ]?.attributes?.children?.data?.map((value, index) => (
                            <li key={index}>
                              <a href={value?.attributes?.url}>
                                {value?.attributes?.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  {/* {size.width < 992 ? (
                    <div className={Style.lang_switch}>
                      <div className={Style.lang_switch_label}>Language</div>
                      <LanguageSwitcher />
                    </div>
                  ) : (
                    ""
                  )} */}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={Style.social_row}>
          <div className="row align-items-center">
            <div className="col-lg">
              <ul>
                {props?.props?.social_media_icon?.map((value, index) => (
                  <li key={index}>
                    <a href={value?.link}>
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
                ))}
              </ul>
            </div>
            {size.width >= 1200 ? (
              <div className="col-lg-auto">
                <button className={Style.go_top}>
                  <span>
                    <Icons icon={"arrow-right-sharp-thin"} size={16} />
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
            <div className="col">
              <p>{props?.props?.copyright?.data1}</p>
            </div>
            {/* <div className="col-lg-5 text-lg-end">
              <p>
                Designed by <a href="">{props?.props?.copyright?.data2}</a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AlumniFooter;
