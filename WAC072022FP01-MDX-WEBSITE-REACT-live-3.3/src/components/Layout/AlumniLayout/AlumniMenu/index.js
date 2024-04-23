import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Dropdown,
  NavDropdown,
  Accordion,
} from "react-bootstrap";
import Style from "./AlumniMenu.module.scss";
import Assets from "../assets";
import Icons from "../../Icons";
import { useWindowSize } from "../../../../logic/useDimension";
import BottomMenu from "../../CommonLayout/BottomMenu";
import { useRouter } from "next/router";
import ProgressLoader from "../../../ProgressLoader";

const AlumniMenu = (props) => {
  const router = useRouter();

  const size = useWindowSize();
  const [show, setShow] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleClose = () => setShow(false);

  const handleToggleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setShowLoader(true);
    };

    const handleRouteEnd = (url, { shallow }) => {
      setShowLoader(false);
      setShow(false);
      if (typeof window !== undefined) {
        if (document.body.className == "show-menu") {
          document.body.classList.remove("show-menu");
        }
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteEnd);
    };
  }, []);

  return (
    <>
      <header
        className={`${Style.header} ${
          colorChange ? Style.header_scrolled : ""
        } fixed-top`}
      >
        <Navbar key="xl" className={`${Style.navbar} header-nav`}>
          <Container fluid>
            <Link href="/alumni">
              <a className="navbar-brand">
                <div className={Style.logo_wrap}>
                  <span className={Style.logo}>
                    <Image
                      src={Assets.alumni_logo}
                      alt={"logo"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </span>
                  <span className={Style.logo_dark}>
                    <Image
                      src={Assets.alumni_dark_logo}
                      alt={"logo"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </span>
                </div>
              </a>
            </Link>
            <Nav className="justify-content-xl-between justify-content-end flex-grow-1 pe-lg-3">
              {size.width >= 1200 ? (
                <div className={`${Style.nav_primary} d-flex`}>
                  {props?.props?.data[
                    props?.props?.data?.findIndex(
                      (d) => d?.attributes?.slug == "alumni_header"
                    )
                  ]?.attributes?.items?.data?.map((value, index) => {
                    return (
                      <>
                        {value?.attributes?.url !== "" && (
                          <Link href={value?.attributes?.url} key={index}>
                            <a
                              className={`${
                                router.asPath == value?.attributes?.url
                                  ? "active "
                                  : ""
                              } nav-link`}
                            >
                              {value?.attributes?.title}
                            </a>
                          </Link>
                        )}
                      </>
                    );
                  })}
                </div>
              ) : (
                ""
              )}

              <div
                className={`${Style.nav_secondary} d-flex align-items-center`}
              >
                <Link href={"/"}>
                  <button className={`btn btn-outline-light ${Style.btn_back}`}>
                    Back to Home
                  </button>
                </Link>

                <button
                  className={`${Style.hamburger} ${show && Style.opened}`}
                  onClick={handleToggleShow}
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </Nav>
          </Container>
        </Navbar>

        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          backdrop="static"
          className={Style.alumni_offcanvas}
        >
          <Offcanvas.Header>
            <button className="btn-close-offcanvas" onClick={handleToggleShow}>
              <span></span>
              <span></span>
            </button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className={Style.alumni_sidebar_menulist}>
              {size.width >= 1200 ? (
                ""
              ) : (
                <>
                  {props?.props?.data[
                    props?.props?.data?.findIndex(
                      (d) => d?.attributes?.slug == "alumni_header"
                    )
                  ]?.attributes?.items?.data?.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link href={value?.attributes?.url}>
                          <a
                            className={
                              router.asPath == value?.attributes?.url
                                ? "active "
                                : ""
                            }
                          >
                            {value?.attributes?.title}
                            <Icons icon={"arrow-right-long"} size={20} />
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </>
              )}
              {props?.props?.data[
                props?.props?.data?.findIndex(
                  (d) => d?.attributes?.slug == "alumni_hamburger"
                )
              ]?.attributes?.items?.data[0]?.attributes?.children?.data?.map(
                (value, index) => {
                  return (
                    <li key={index}>
                      <>
                        {value?.attributes?.url !== "" && (
                          <Link href={value?.attributes?.url}>
                            <a
                              className={
                                router.asPath == value?.attributes?.url
                                  ? "active "
                                  : ""
                              }
                            >
                              {/* <span>0{index + 1}</span> */}
                              {value?.attributes?.title}
                              <Icons icon={"arrow-right-long"} size={20} />
                            </a>
                          </Link>
                        )}
                      </>
                    </li>
                  );
                }
              )}
            </ul>
            <div className={Style.connect_menu}>
              <h5 className={Style.connect_menu_title}>Connect With Us</h5>
              <ul className={Style.connect_menu_list}>
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
          </Offcanvas.Body>
        </Offcanvas>
      </header>
      {showLoader && <ProgressLoader />}
      {size.width >= 1200 ? "" : <BottomMenu />}
    </>
  );
};

export default AlumniMenu;
