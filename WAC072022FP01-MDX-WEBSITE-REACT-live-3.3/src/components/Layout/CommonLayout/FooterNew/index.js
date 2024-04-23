import Image from "next/image";
import Icons from "../../Icons";
import { useWindowSize } from "../../../../logic/useDimension";
import Assets from "../assets";
import Style from "./FooterNew.module.scss";
import Link from "next/link";
import { getImageUrl } from "../../../../apis";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const FooterNew = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  const router = useRouter();
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <>
      {client && (
        <footer className={Style.footer}>
          <div className="container-fluid">
            <div className={Style.footer_wrap}>
              {props?.data?.[0]?.footer ? (
                <>
                  <div className={`${Style.link_row_outer}`}>
                    <div
                      className={`row  justify-content-xl-between ${Style.link_row}`}
                    >
                      <div className="col-md-4 col-lg-4">
                        <figure className={Style.logo}>
                          <Image
                            src={Assets.Logo}
                            alt={"logo"}
                            height={70}
                            width={175}
                          />
                        </figure>
                        {props?.data?.[0]?.footer?.address?.address && (
                          <div className={Style.footer_logo_content}>
                            {parse(
                              `${props?.data?.[0]?.footer?.address?.address}`
                            )}
                          </div>
                        )}
                      </div>

                      <div className=" col-md-4 col-lg-4">
                        <div className={Style.quick_links}>
                          <h5 className={Style.quick_links_ttl}>
                            {props?.data?.[0]?.footer?.quick_links?.title}
                          </h5>
                          <ul>
                            {props?.data?.[0]?.footer?.quick_links?.data?.map(
                              (link, i) => {
                                return (
                                  <>
                                    <li
                                      key={i}
                                      className={`${
                                        router.asPath === link?.url &&
                                        `${Style.active}`
                                      } `}
                                    >
                                      <Link href={link?.url}>
                                        <a> {link?.title} </a>
                                      </Link>
                                    </li>
                                  </>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                      {width >= 768 ? (
                        <div className="col-md-4 col-lg-4 ">
                          <div className={Style.map_img}>
                            <figure className="mb-0 ratio ">
                              <Image
                                src={
                                  props?.data?.[0]?.footer?.image
                                    ? getImageUrl(
                                        props?.data?.[0]?.footer?.image
                                      )
                                    : Assets.footer_map
                                }
                                alt="map"
                                layout="fill"
                              />
                            </figure>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className={Style.social_row}>
                    <ul className="d-flex">
                      {props?.data?.[0]?.footer?.social_media_icon?.map(
                        (icon, i) => {
                          return (
                            <>
                              <li key={i}>
                                <Link href={icon?.link}>
                                  <a>
                                    {" "}
                                    <Icons icon={icon?.label} size={25} />
                                  </a>
                                </Link>
                              </li>
                            </>
                          );
                        }
                      )}
                    </ul>
                  </div>
                  <div className={Style.bottom_linkrow}>
                    <ul className="d-flex justify-content-center">
                      {props?.data?.[0]?.footer?.footer_links?.map(
                        (links, i) => {
                          return (
                            <>
                              <li
                                className={`${Style.bottom_links} ${
                                  router.asPath === links?.url &&
                                  `${Style.active}`
                                }`}
                                key={i}
                              >
                                <Link href={links?.url}>
                                  <a>{links?.title} </a>
                                </Link>
                              </li>
                            </>
                          );
                        }
                      )}
                    </ul>
                  </div>
                  <div
                    className={`${Style.copyright_wrap} d-flex justify-content-center`}
                  >
                    <p className="mb-0">
                      {props?.data?.[0]?.footer?.copyright?.data1}
                    </p>
                  </div>
                </>
              ) : (
                <div
                  className={`${Style.copyright_wrap} d-flex justify-content-center`}
                >
                  <p className="mb-0">{props?.copyright?.data1}</p>
                </div>
              )}
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default FooterNew;
