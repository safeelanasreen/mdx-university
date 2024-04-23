
import Link from "next/link";
import { Container, Nav, Navbar, Accordion } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Style from "./MenuNew.module.scss";
import Icons from "../../Icons";
import BottomMenu from "../BottomMenu";
import Cookie from "../../../Cookie";
import ProgressLoader from "../../../ProgressLoader";
import Assets from "../assets";
import Image from "next/image";
import ContactTab from "../../../ContactTab";
import BlogTab from "../../../BlogTab";
import AboutTab from "../../../AboutTab";
import MainLogo from "./MainLogo";
import MainLogoDark from "./MainLogoDark";
import useMenuNew from "./useMenuNew";
// import React from "react";

const Menu = ({ props, linksEnabled, toolbarHiddenPages, data }) => {
  const {
    size,
    router,
    show,
    showMenu,
    showClass,
    isAccept,
    showLoader,
    colorChange,
    HeaderButtons,
    menuHiddenPages,
    ApplyButtonEvent,
    scrollToClicked,
    offCanvasRef,
    handleAccept,
    handleToggleShow,
    activeNavIndex,
    setActiveNavIndex,
    MenuOpen,
    setMenuOpen,
    isHovered,
    setIsHovered,
    handleHover,
    handleMouseLeave,
  } = useMenuNew({
    linksEnabled,
  });

  

        
  return (
    <>
      {isAccept && <Cookie handleClickAccept={handleAccept} />}

      <header
        className={`${Style.header} ${
          colorChange ? Style.header_scrolled : Style.header_scrolled_mini
        } fixed-top`}


      >
        <Navbar key="xl" className={`${Style.navbar} header-nav`}
            //  style={isHovered ? {paddingRight: '17px'} : {}}

                >
          <Container fluid>
            <Link href="/">
              <a className="navbar-brand">
                <div className={Style.logo_wrap}>
                  <span className={Style.logo}>
                    <MainLogo />
                  </span>
                  <span className={Style.logo_dark}>
                    <MainLogoDark />
                  </span>
                </div>
              </a>
            </Link>
            {!menuHiddenPages ? (
              <Nav className="justify-content-end flex-grow-1 pe-lg-3">
                {size.width >= 1200 ? (
                  <>
                    <div
                      className={`main_desktop_menu ${Style.main_desktop_menu}  d-none d-xl-block`}
                    >
                      <ul>
                        {props?.data?.[0]?.header?.map((value, index) => {
                          return (
                            <li
                            className={`${index > 2 ? "right_aligned" : ""} ${
                              router.asPath === value?.url ? Style.active : ""
                            } ${MenuOpen && Style.header_menu_top_link}`}
                            key={index}
                            
                            onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}
                            >
   
                              <Link
                                className={`${Style.menu}`}
                                href={value?.url}
                               >
                                <a className={Style.menu_link} onMouseEnter={() => setMenuOpen(true)} >
                                  {value?.title}
                                </a>
                              </Link>
                              {value?.main_menu?.length > 0 && (
                                <div className={Style.mega_menu} style={{display : MenuOpen ? "block" : "none" }}>
                                  {/* ******megamenu new**************** */}
                                  <div
                                    className={`${Style.megamenu_new} `}
                                    style={{ opacity: MenuOpen ? 1 : 0}}
                                  >
                                    <div className={Style.megamenu_new_start}>
                                      <div className={Style.stat_img_left}>
                                        <figure className="mb-0 ratio">
                                          <Image
                                            src={Assets.megamenu_shade}
                                            layout="fill"
                                            objectFit="cover"
                                            alt="img shade"
                                          />
                                        </figure>
                                      </div>

                                      <div className="container-fluid">
                                        <div
                                          className={`${Style.megamenu_new_wrap} row flex-nowrap `}
                                        >
                                          <div
                                            className={`${Style.megamenu_new_ttlwrap}  `}
                                          >
                                            <div className={Style.content_sec}>
                                              <h2
                                                className={
                                                  Style.megamenu_new_ttl
                                                }
                                              >
                                                {value?.heading}
                                              </h2>
                                              <p className="mb-0">
                                                {value?.sub_heading}
                                              </p>
                                            </div>
                                          </div>
                                          <div
                                            className={`${Style.menu_right}   `}
                                          >
                                            <div className={Style.right_wrap}>
                                              {/* <div
                                              className={`${Style.megamenu_new_listwrap} `}
                                            > */}
                                              <ul
                                                className={Style.listed_items}
                                              >
                                                {value?.main_menu.map(
                                                  (item, index) => (
                                                    <>
                                                      <li
                                                        key={index}
                                                        className={
                                                          router.asPath ===
                                                            item?.url &&
                                                          `${Style.active}`
                                                        }
                                                        // onClick={() => setMenuOpen(false)}
                                                      >
                                                        <Link href={item?.url}>
                                                          <a
                                                            target={
                                                              item?.target
                                                            }
                                                          >
                                                            <div
                                                              className={
                                                                Style.menu_new
                                                              }
                                                            >
                                                              {item?.title}
                                                            </div>
                                                            <div
                                                              className={
                                                                Style.menu_new_arrow
                                                              }
                                                            >
                                                              <Icons
                                                                icon={
                                                                  "arrow-right-md"
                                                                }
                                                                size={24}
                                                              />
                                                            </div>
                                                          </a>
                                                        </Link>
                                                        {item?.sub_menu
                                                          ?.length > 0 && (
                                                          <ul
                                                            className={
                                                              Style.inner_menu_wrap
                                                            }
                                                          >
                                                            {item?.sub_menu
                                                              ?.length > 0 &&
                                                              item?.sub_menu?.map(
                                                                (
                                                                  item,
                                                                  index
                                                                ) => (
                                                                  <li
                                                                    key={index}
                                                                    className={
                                                                      router.asPath ===
                                                                        item?.url &&
                                                                      `${Style.active}`
                                                                    }
                                                                    // onClick={() => setMenuOpen(false)} 
                                                                  >
                                                                    <Link
                                                                      href={
                                                                        item?.url
                                                                      }
                                                                    >
                                                                      <a
                                                                        target={
                                                                          item?.target
                                                                        }
                                                                      >
                                                                        {
                                                                          item?.title
                                                                        }
                                                                      </a>
                                                                    </Link>
                                                                  </li>
                                                                )
                                                              )}
                                                          </ul>
                                                        )}
                                                      </li>
                                                    </>
                                                  )
                                                )}
                                              </ul>
                                              {/* </div> */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* ******************megamenu new end *********************** */}
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <Link href={"/keyword-search"}>
                      <a className={Style.btn_search}>
                        {" "}
                        <Icons icon={"search-thin"} size={30} />
                      </a>
                    </Link>

                    {HeaderButtons?.map((value, index) => (
                      <a
                        key={index}
                        target={value?.target}
                        rel="noopener noreferrer"
                        href={value?.link}
                      >
                        <button
                          onClick={() => {
                            ga("send", "event", {
                              eventCategory: ApplyButtonEvent?.eventCategory,
                              eventAction: ApplyButtonEvent?.eventAction,
                              eventLabel: ApplyButtonEvent?.eventLabel,
                              eventValue: ApplyButtonEvent?.eventValue,
                            });
                          }}
                          style={
                            value?.color && {
                              "--btn-bg-color": value?.color,
                              "--btn-border-color": value?.color,
                              "--btn-text-color": "",
                              "--btn-bg-hover-color": "",
                              "--btn-border-hover-color": "",
                              "--btn-text-hover-color": "",
                            }
                          }
                          className={`btn btn-light-border ms-2 ${Style.payment_btn}`}
                        >
                          {value?.label}
                        </button>
                      </a>
                    ))}
                  </>
                ) : (
                  ""
                )}
                {size.width < 1200 ? (
                  <>
                    {props?.header_buttons?.[0] && (
                      <a
                        target={props?.header_buttons?.[0]?.target}
                        rel="noopener noreferrer"
                        href={props?.header_buttons?.[0]?.link}
                      >
                        <button
                          style={
                            props?.header_buttons?.[0]?.color && {
                              "--btn-bg-color":
                                props?.header_buttons?.[0]?.color,
                              "--btn-border-color":
                                props?.header_buttons?.[0]?.color,
                              "--btn-text-color": "",
                              "--btn-bg-hover-color": "",
                              "--btn-border-hover-color": "",
                              "--btn-text-hover-color": "",
                            }
                          }
                          className={`btn btn-light-border ms-2 ${Style.payment_btn} ${Style.payment_btn_device}`}
                        >
                          {props?.header_buttons?.[0]?.label}
                        </button>
                      </a>
                    )}
                    <div>
                      <Link href={"/keyword-search"}>
                        <a className={`${Style.btn_search} `}>
                          {" "}
                          <Icons icon={"search-thin"} size={30} />
                        </a>
                      </Link>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <button
                  className={`hamburger ${Style.hamburger} ${
                    show && Style.opened
                  }`}
                  onClick={handleToggleShow}
                >
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </Nav>
            ) : (
              <>
                {!menuHiddenPages && size.width <= 1200 ? (
                  <Nav className="justify-content-end flex-grow-1 pe-lg-3">
                    {size.width >= 1200 ? (
                      <>
                        <div
                          className={`main_desktop_menu ${Style.main_desktop_menu} d-none d-xl-block`}
                        >
                          <ul>
                            {props?.data[0]?.attributes?.items?.data?.map(
                              (value, index) => {
                                return (
                                  <li
                                    className={`${
                                      index > 2 ? "right_aligned" : ""
                                    } ${
                                      router.asPath == value?.attributes?.url &&
                                      Style.active
                                    } ${
                                      value?.attributes?.children?.data?.filter(
                                        (obj) =>
                                          obj?.attributes?.url == router.asPath
                                      )?.length !== 0 && Style.active
                                    } `}
                                    key={index}
                                  >
                                    <Link
                                      className={Style.menuttl}
                                      href={value?.attributes?.url}
                                    >
                                      <a>{value?.attributes?.title} </a>
                                    </Link>
                                    {value?.attributes?.children?.data?.length >
                                      0 && (
                                      <div className={Style.mega_menu}>
                                        <div
                                          className={`${Style.mega_menu_row} mega_menu_row`}
                                        >
                                          <ul
                                            className={`${Style.mega_menu_main}`}
                                          >
                                            {value?.attributes?.children?.data?.map(
                                              (val, i) => {
                                                return (
                                                  <li
                                                    className={`${
                                                      props?.data[0]?.attributes
                                                        ?.items?.data[index]
                                                        ?.attributes?.children
                                                        ?.data[i]?.attributes
                                                        ?.children?.data
                                                        ?.length !== 0 &&
                                                      Style.parent
                                                    }
                                              ${
                                                router.asPath ==
                                                  val?.attributes?.url &&
                                                Style.active
                                              }
                                              ${
                                                val?.attributes?.children?.data?.filter(
                                                  (obj) =>
                                                    obj?.attributes?.url ==
                                                    router?.asPath
                                                )?.length != 0 && Style.active
                                              }`}
                                                    key={i}
                                                  >
                                                    <Link
                                                      className={Style.menuttl}
                                                      href={
                                                        val?.attributes?.url
                                                      }
                                                    >
                                                      <a>
                                                        {val?.attributes?.title}
                                                      </a>
                                                    </Link>
                                                  </li>
                                                );
                                              }
                                            )}
                                          </ul>
                                          <div className={Style.mega_menu_sub}>
                                            <ul className={Style.submenu}>
                                              {props?.data[0]?.attributes?.items?.data[
                                                activeNavSubIndex
                                              ]?.attributes?.children?.data[
                                                activeNavIndex
                                              ]?.attributes?.children?.data?.map(
                                                (value, i) => {
                                                  return (
                                                    <li
                                                      key={i}
                                                      className={
                                                        value?.attributes
                                                          ?.url ==
                                                        router?.asPath
                                                          ? Style.active
                                                          : ""
                                                      }
                                                    >
                                                      <Link
                                                        className={
                                                          Style.menuttl
                                                        }
                                                        href={
                                                          value?.attributes?.url
                                                        }
                                                      >
                                                        <a>
                                                          {
                                                            value?.attributes
                                                              ?.title
                                                          }
                                                        </a>
                                                      </Link>
                                                    </li>
                                                  );
                                                }
                                              )}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>

                        <Link href={"/keyword-search"}>
                          <a className={Style.btn_search}>
                            {" "}
                            <Icons icon={"search-thin"} size={30} />
                          </a>
                        </Link>
                        <a
                          target={"_blank"}
                          rel="noopener noreferrer"
                          href={"https://payment.mdx.ac.ae/"}
                        >
                          <button
                            className={`btn btn-light-border ms-2 ${Style.payment_btn} ${Style.payment_btn_2}`}
                          >
                            Online Payment
                          </button>
                        </a>
                      </>
                    ) : (
                      ""
                    )}
                    {size.width < 1200 ? (
                      <Link href={"/keyword-search"}>
                        <a className={`${Style.btn_search} `}>
                          {" "}
                          <Icons icon={"search-thin"} size={30} />
                        </a>
                      </Link>
                    ) : (
                      ""
                    )}

                    <button
                      className={`hamburger ${Style.hamburger} ${
                        show && Style.opened
                      }`}
                      onClick={handleToggleShow}
                    >
                      <div>
                        <span></span>
                        <span></span>
                      </div>
                    </button>
                  </Nav>
                ) : (
                  <>
                    {Object.keys(data)?.includes("btn_text") ? (
                      <div
                        className={`main_desktop_menu ${Style.main_desktop_menu}`}
                      >
                        <Link href={data?.btn_link || ""}>
                          <button className="btn btn-outline-primary ms-2 ">
                            {data?.btn_text}
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </>
            )}
          </Container>
        </Navbar>
        {show ? (
          <div
            className={`${Style.nav_offcanvas} ${
              showMenu && Style.nav_offcanvas_show
            } ${showClass && Style.nav_offcanvas_show_menus}`}
            ref={offCanvasRef}
          >
            {size.width >= 1200 ? (
              <div>
                {/* ********new hamburger start**************** */}
                <div className={Style.menu_offcanvas_top}>
                  <Container fluid>
                    <div className={Style.nav_menu_row}>
                      {/* <div className={Style.nav_main_menu}>
                  
                  </div>
                  <div className={Style.nav_sub_menu}>
                    
                  </div> */}

                      <Tab.Container
                        id="left-tabs-example"
                        defaultActiveKey="about"
                      >
                        <Row
                          className={`justify-content-between ${Style.hamburger_row}`}
                        >
                          <Col xl={8} xxl={7}>
                            <Tab.Content>
                              {props?.data?.[0]?.hamburger?.map(
                                (item, index) => {
                                  return (
                                    <>
                                      <Tab.Pane
                                        eventKey={item?.event_id}
                                        className={Style.tab_content_desktop}
                                        key={index}
                                      >
                                        <div
                                          className={`tab-anim ${Style.tabanim}`}
                                        >
                                          {item?.event_id === "about" ? (
                                            <>
                                              <AboutTab props={item?.data} />
                                            </>
                                          ) : item?.event_id === "blog" ? (
                                            <>
                                              <BlogTab props={item?.data} />
                                            </>
                                          ) : (
                                            <>
                                              <ContactTab props={item?.data} />
                                            </>
                                          )}
                                        </div>
                                      </Tab.Pane>
                                    </>
                                  );
                                }
                              )}
                            </Tab.Content>
                          </Col>
                          <Col xl={4} className="position-relative">
                            <Nav className={`flex-column ${Style.tab_btns}`}>
                              {props?.data?.[0]?.hamburger?.map(
                                (item, index) => {
                                  return (
                                    <>
                                      <Nav.Item key={index}>
                                        <Nav.Link
                                          eventKey={item?.event_id}
                                          className={Style.nav_link_desktop}
                                        >
                                          {item?.title}
                                        </Nav.Link>
                                      </Nav.Item>
                                    </>
                                  );
                                }
                              )}
                            </Nav>
                          </Col>
                        </Row>
                      </Tab.Container>
                    </div>
                  </Container>
                </div>
                {/* ********new hamburger end**************** */}
                <div className={Style.nav_offcanvas_quick}>
                  <Container fluid>
                    <div
                      className={`${Style.nav_offcanvas_quick_row} d-flex flex-wrap align-items-center`}
                    >
                      <div
                        className={`${Style.nav_offcanvas_quick_label} d-flex align-items-center`}
                      >
                        Quick Links{" "}
                        <Icons
                          icon="arrow-right-sharp-md-thin"
                          size={17}
                          className={Style.nav_offcanvas_quick_arrow}
                        />
                      </div>
                      <div>
                        <ul className="d-flex flex-wrap my-0 p-0">
                          {props?.quick_links?.map((item, i) => {
                            return (
                              <>
                                <li key={i}>
                                  <Link href={item?.link ?? "#"}>
                                    {item?.label}
                                  </Link>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
            ) : (
              <>
                <Accordion
                  className={`accordion-view accordion-view-dark ${Style.header_mobile_nav}`}
                >
                  {props?.data?.[0]?.header.map((value, i) => {
                    return (
                      <Accordion.Item
                        eventKey={i}
                        className={`${Style.header_mobile_nav_acc} ${
                          activeNavIndex == i && Style.activeparent
                        } `}
                        onClick={(item) => {
                          scrollToClicked(item, i);
                          setActiveNavIndex(i);
                        }}
                        key={i}
                      >
                        <Accordion.Header
                          className={`${Style.header_mobile_nav_acc_header}  `}
                        >
                          {value?.title}
                        </Accordion.Header>
                        <Accordion.Body
                          className={Style.header_mobile_nav_acc_body}
                        >
                          <ul>
                            <li
                              className={`${Style.view_more} ${
                                router.asPath == value?.url && Style.active
                              }`}
                            >
                              <Link href={value?.url}>Overview</Link>
                            </li>
                            {value?.main_menu?.map((val, index) => {
                              return (
                                <li
                                  className={`${
                                    router.asPath == val?.attributes?.url &&
                                    `${Style.active}`
                                  }`}
                                  key={index}
                                >
                                  {value?.type == "accordion" ? (
                                    <Accordion
                                      defaultActiveKey={0}
                                      className={Style.nav_sub_menu_acc}
                                    >
                                      <Accordion.Item
                                        eventKey={index}
                                        className={Style.nav_sub_menu_acc_item}
                                      >
                                        <Accordion.Header
                                          className={
                                            Style.nav_sub_menu_acc_header
                                          }
                                        >
                                          {val?.title}
                                        </Accordion.Header>
                                        <Accordion.Body
                                          className={
                                            Style.nav_sub_menu_acc_body
                                          }
                                        >
                                          <ul>
                                            {val?.sub_menu?.map((item, i) => {
                                              return (
                                                <li
                                                  className={`${
                                                    router.asPath ==
                                                      item?.link &&
                                                    `${Style.active}`
                                                  }`}
                                                  key={i}
                                                >
                                                  <Link href={"#" || ""}>
                                                    {item?.title}
                                                  </Link>
                                                </li>
                                              );
                                            })}
                                          </ul>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                    </Accordion>
                                  ) : (
                                    <li
                                      className={`${
                                        router.asPath == val?.url &&
                                        Style.active
                                      }`}
                                    >
                                      <Link href={val?.url}>
                                        <a>{val?.title}</a>
                                      </Link>
                                    </li>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </>
            )}
            {/* </Container> */}
          </div>
        ) : (
          ""
        )}
      </header>
      {showLoader && <ProgressLoader />}
      {typeof window !== "undefined" && size.width >= 1200
        ? ""
        : !menuHiddenPages && (
            <BottomMenu
              toolbarHiddenPages={toolbarHiddenPages}
              bottom_menu={props?.cta_components}
            />
          )}
      {/* <EventNotificationBanner /> */}
    
    </>
    
  );
};

export default Menu;
