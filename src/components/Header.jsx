import { darkLogo, iconAccount, iconDdApplication, iconDdCart, iconDdChat, iconDdDate, iconDdInvoice, iconDdLifebuoy, iconDdMessageBox, iconDdMobile, iconFlagCn, iconFlagEn, iconFlagFr, iconFlagSa, iconInbox, iconTasks, lightLogo } from "../helper/icon";
import { createSignal, createMemo } from "solid-js";
import UnlimitedBg from "../assets/images/backgrounds/unlimited-bg.png";
import { User1, User2, User3, User4, User5, User6, User7, User8, User9, User10, User11, User12, Alert1, Alert2, Alert3, Alert4, Alert5, Alert6, Alert7, Model, Product1, EmptyShoppingBag, Payment, PaymentComplete, Product2, Product3, Product4, S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, IconChrome, IconAdobe, IconFigma, IconJavascript, IconZipFoldere, ActiveBg, BlogBg, Bronze, Errorimg, Gold, Img1, KanbanImg1, KanbanImg2, LinBg, LoginSecurity, Maintenance, MyCard, NyanCat, BgPayment, Profile_bg, Profilebg, SidebarBuynow, Silver, TrackBg, UserProfilenlimitedBg, WebsiteUnderConstruction, WelcomeBg, WelcomeBg2, BlogImg1, BlogImg2, BlogImg3, BlogImg4, BlogImg5, BlogImg6, BlogImg7, BlogImg8, BlogImg9, BlogImg10, BlogImg11, favicon, iconDDChat, iconDDInvoice, iconDDCart, iconDDMessageBox, iconDDMobile, iconDDDate, iconDDAppliction } from "../helper/img";
// import {User1,User2,User3,User4,User5,User6,User7,User8,User9,User10,User11,User12,Alert1,Alert2,Alert3,Alert4,Alert5,Alert6,Alert7,Model,Product1,EmptyShoppingBag,Payment,PaymentComplete,Product2,Product3,Product4,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,IconChrome,IconAdobe,IconFigma,IconJavascript,IconZipFoldere,ActiveBg,BlogBg,Bronze,Errorimg,Gold,Img1,KanbanImg1,KanbanImg2,LinBg,LoginSecurity,Maintenance,MyCard,NyanCat,BgPayment,Profile_bg,Profilebg,SidebarBuynow,Silver,TrackBg,UserProfilenlimitedBg,WebsiteUnderConstruction,WelcomeBg,WelcomeBg2,BlogImg1,BlogImg2,BlogImg3,BlogImg4,BlogImg5,BlogImg6,BlogImg7,BlogImg8,BlogImg9,BlogImg10,BlogImg11} from "../../../helper/img";

export default function Header(props) {
  const [isOpenToggleHeader, setIsOpenToggleHeader] = createSignal(false);
  const [isOpenOffcanvas, setIsOpenOpenOffcanvas] = createSignal(false);
  const [isOpenSearchBar, setIsOpenSearchBar] = createSignal(false);
  const [darkMode, setDarkMode] = createSignal(false);

  const toggleSearchBar = () => {
    setIsOpenSearchBar(!isOpenSearchBar());
  };
  const toggleHeader = () => {
    setIsOpenToggleHeader(!isOpenToggleHeader());
    console.log('isOpenToggleHeader', isOpenToggleHeader())

  };
  const toggleOffcanvas = () => {
    setIsOpenOpenOffcanvas(!isOpenOffcanvas());
    console.log('isOpenOffcanvas', isOpenOffcanvas())
  };
  const toggleThemeMode = () => {
    setDarkMode(!darkMode());

    const htmlElement = document.documentElement; // แท็ก <html>
    htmlElement.setAttribute("data-bs-theme", darkMode() ? "dark" : "light");
    htmlElement.setAttribute("data-color-theme", "Blue_Theme");

    console.log(darkMode());
  };

  return (
    <>
      <header className="topbar">
        <div className="with-vertical">
          <nav className="navbar navbar-expand-lg p-0">
            <ul className="navbar-nav">
              <li class="nav-item nav-icon-hover-bg rounded-circle ms-n2">
                <a
                  class="nav-link sidebartoggler"
                  id="headerCollapse"
                  href="#"
                  onClick={props.toggleNavbar} // เรียกฟังก์ชัน toggleNavbar เมื่อกดปุ่ม
                >
                  <i class="ti ti-menu-2" />
                </a>
              </li>
              <li className="nav-item nav-icon-hover-bg rounded-circle d-none d-lg-flex">
                <a
                  className="nav-link"
                  href="javascript:void(0)"
                  // onClick={toggleSearchBar}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="ti ti-search" />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav quick-links d-none d-lg-flex align-items-center">
              <li className="nav-item nav-icon-hover-bg rounded w-auto dropdown d-none d-lg-block mx-0">
                <div className="hover-dd">
                  <a className="nav-link" href="javascript:void(0)">
                    Apps
                    <span className="mt-1">
                      <i className="ti ti-chevron-down fs-3" />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-nav dropdown-menu-animate-up py-0">
                    <div className="row">
                      <div className="col-8">
                        <div className="ps-7 pt-7">
                          <div className="border-bottom">
                            <div className="row">
                              <div className="col-6">
                                <div className="position-relative">
                                  <a
                                    href="/app/chat"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDDChat}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Chat Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        New messages arrived
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="/app/invoice"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDDInvoice}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Invoice App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get latest invoice
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="/app/contactlist"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDDMobile}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Contact Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        2 Unsaved Contacts
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="/app/email"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDDMessageBox}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Email App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get new emails
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="position-relative">
                                  <a
                                    href="/app/userprofile"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdCart}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        User Profile
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        learn more information
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="/app/calendar"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdDate}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Calendar App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get dates
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="/app/contacttable"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdLifebuoy}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Contact List Table
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Add new contact
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="/app/notes"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdApplication}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Notes Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        To-do and Daily tasks
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center py-3">
                            <div className="col-8">
                              <a
                                className="fw-semibold d-flex align-items-center lh-1"
                                href="javascript:void(0)"
                              >
                                <i className="ti ti-help fs-6 me-2" />
                                Frequently Asked Questions
                              </a>
                            </div>
                            <div className="col-4">
                              <div className="d-flex justify-content-end pe-4">
                                <button className="btn btn-primary">
                                  Check
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 ms-n4">
                        <div className="position-relative p-7 border-start h-100">
                          <h5 className="fs-5 mb-9 fw-semibold">Quick Links</h5>
                          <ul class>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="/pages/pricing"
                              >
                                Pricing Page
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="/login"
                              >
                                Authentication Design
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="/register"
                              >
                                Register Now
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="/Error"
                              >
                                404 Error Page
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="/app/notes"
                              >
                                Notes App
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="/app/userprofile"
                              >
                                User Application
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="/pages/accountSetting"
                              >
                                Account Settings
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link" href="/app/chat">
                  Chat
                </a>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link" href="/app/calendar">
                  Calendar
                </a>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link" href="/app/email">
                  Email
                </a>
              </li>
            </ul>
            <div className="d-block d-lg-none py-4">
              <a
                href="/"
                className="text-nowrap logo-img"
              >
                <img
                  src={darkMode() ? lightLogo : darkLogo} // ใช้ darkMode() แทน toggleThemeMode
                  className={darkMode() ? "dark-logo" : "light-logo"}
                  alt="flexy-img"
                  style={{ display: "flex" }}
                />
              </a>
            </div>
            <a
              // className="navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0 collapsed"
              class={isOpenToggleHeader() ? "navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0" : "navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0 collapsed"}
              // href="javascript:void(0)"
              onClick={toggleHeader}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ti ti-dots fs-7" />
            </a>
            <div
              // className="navbar-collapse justify-content-end collapse show"
              // className="navbar-collapse justify-content-end collapse"
              class={isOpenToggleHeader() ? "navbar-collapse justify-content-end collapse show" : "navbar-collapse justify-content-end collapse "}
              id="navbarNav"
            >
              <div className="d-flex align-items-center justify-content-between">
                <a
                  // href="javascript:void(0)"
                  onClick={toggleOffcanvas}
                  className="nav-link nav-icon-hover-bg rounded-circle mx-0 ms-n1 d-flex d-lg-none align-items-center justify-content-center"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mobilenavbar"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <i className="ti ti-align-justified fs-7" />
                </a>
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <a
                      className={darkMode() ? "nav-link sun light-layout" : "nav-link sun light-layout"} // ใช้ darkMode() แทน toggleThemeMode

                      href="javascript:void(0)"
                      style={{ display: "flex" }}
                      onclick={toggleThemeMode}
                    >
                      <i
                        className={darkMode() ? "ti ti-sun sun" : "ti ti-moon moon"} // ใช้ darkMode() แทน toggleThemeMode

                        style={{ display: "flex" }}
                      />
                    </a>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <a
                      className="nav-link"
                      href="javascript:void(0)"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <img
                        // src={iconFlagEn}
                        src={iconFlagEn}
                        alt="flexy-img"
                        width="20px"
                        height="20px"
                        className="rounded-circle object-fit-cover round-20"
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagEn}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">English (UK)</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagCn}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">中国人 (Chinese)</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagFr}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">français (French)</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagSa}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">عربي (Arabic)</p>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <a
                      className="nav-link position-relative"
                      onClick={toggleOffcanvas}
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <i className="ti ti-basket" />
                      <span className="popup-badge rounded-pill bg-danger text-white fs-2">
                        2
                      </span>
                    </a>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <a
                      className="nav-link position-relative"
                      href="javascript:void(0)"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <i className="ti ti-bell-ringing" />
                      <div className="notification bg-primary rounded-circle" />
                    </a>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="d-flex align-items-center justify-content-between py-3 px-7">
                        <h5 className="mb-0 fs-5 fw-semibold">Notifications</h5>
                        <span className="badge text-bg-primary rounded-2 px-3 py-1 lh-sm">
                          5 new
                        </span>
                      </div>
                      <div className="message-body" data-simplebar="init">
                        <div
                          className="simplebar-wrapper"
                          style={{ margin: "310px" }}
                        >
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                          </div>
                          <div className="simplebar-mask">
                            <div
                              className="simplebar-offset"
                              style={{ right: "0px", bottom: "0px" }}
                            >
                              <div
                                className="simplebar-content-wrapper"
                                tabindex="0"
                                role="region"
                                aria-label="scrollable content"
                                style={{ height: "auto", overflow: "hidden" }}
                              >
                                <div
                                  className="simplebar-content"
                                  style={{ padding: "0px" }}
                                >
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src={User2}
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Roman Joined the Team!
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Congratulate him
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src={User3}
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        New message
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Salma sent you new message
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src={User4}
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Bianca sent payment
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Check your earnings
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src={User5}
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Jolly completed tasks
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Assign her new tasks
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src={User6}
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        John received payment
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        $230 deducted from account
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src={User7}
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Roman Joined the Team!
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Congratulate him
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="simplebar-placeholder"
                            style={{ width: "0px", height: "0px" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-horizontal"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ width: "0px", display: "none" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-vertical"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ height: "0px", display: "none" }}
                          />
                        </div>
                      </div>
                      <div className="py-6 px-7 mb-1">
                        <button className="btn btn-outline-primary w-100">
                          See All Notifications
                        </button>
                      </div>
                    </div>
                  </li>
                  {/* ------------------------------- */}
                  {/* end notification Dropdown */}
                  {/* ------------------------------- */}
                  {/* ------------------------------- */}
                  {/* start profile Dropdown */}
                  {/* ------------------------------- */}
                  <li class="nav-item dropdown">
                    <a class="nav-link pe-0" href="javascript:void(0)" id="drop1" aria-expanded="false">
                      <div class="d-flex align-items-center">
                        <div class="user-profile-img">
                          <img src={User1} class="rounded-circle" width="35" height="35" alt="flexy-img" />
                          {/* <img src={User1} class="rounded-circle" width="35" height="35" alt="flexy-img" /> */}
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop1">
                      <div class="profile-dropdown position-relative" data-simplebar="init">
                        <div class="simplebar-wrapper" style={{ "margin": "310px" }}>
                          <div class="simplebar-height-auto-observer-wrapper">
                            <div class="simplebar-height-auto-observer">
                            </div>
                          </div>
                          <div class="simplebar-mask">
                            <div class="simplebar-offset" style={{ "right": "0px", "bottom": "0px" }}>
                              <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ "height": "auto", "overflow": "hidden" }}>
                                <div class="simplebar-content" style={{ "padding": "0px" }}>
                                  <div class="py-3 px-7 pb-0">
                                    <h5 class="mb-0 fs-5 fw-semibold">User Profile</h5>
                                  </div>
                                  <div class="d-flex align-items-center py-9 mx-7 border-bottom">
                                    <img src={User1} class="rounded-circle" width="80" height="80" alt="flexy-img" />
                                    <div class="ms-3">
                                      <h5 class="mb-1 fs-4">Johnathan Doe</h5>
                                      <span class="mb-1 d-block">Administrator</span>
                                      <p class="mb-0 d-flex align-items-center gap-2">
                                        <i class="ti ti-mail fs-4" />info@flexy.com</p>
                                    </div>
                                  </div>
                                  <div class="message-body">
                                    <a href="/app/userprofile" class="py-8 px-7 mt-8 d-flex align-items-center">
                                      <span class="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img src={iconAccount} alt="flexy-img" width="24" height="24" />
                                      </span>
                                      <div class="w-100 ps-3">
                                        <h6 class="mb-0 fs-4 lh-base">My Profile</h6>
                                        <span class="fs-3 d-block text-body-secondary">Account Settings</span>
                                      </div>
                                    </a>
                                    <a href="/app/email" class="py-8 px-7 d-flex align-items-center">
                                      <span class="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img src={iconInbox} alt="flexy-img" width="24" height="24" />
                                      </span>
                                      <div class="w-100 ps-3">
                                        <h6 class="mb-0 fs-4 lh-base">My Inbox</h6>
                                        <span class="fs-3 d-block text-body-secondary">Messages &amp; Emails</span>
                                      </div>
                                    </a>
                                    <a href="/app/notes" class="py-8 px-7 d-flex align-items-center">
                                      <span class="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img src={iconTasks} alt="flexy-img" width="24" height="24" />
                                      </span>
                                      <div class="w-100 ps-3">
                                        <h6 class="mb-0 fs-4 lh-base">My Task</h6>
                                        <span class="fs-3 d-block text-body-secondary">To-do and Daily Tasks</span>
                                      </div>
                                    </a>
                                  </div>
                                  <div class="d-grid py-4 px-7 pt-8">
                                    <div class="upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-2 p-4 mb-9">
                                      <div class="row">
                                        <div class="col-6">
                                          <h5 class="fs-4 mb-3 fw-semibold">Unlimited Access</h5>
                                          <button class="btn btn-primary">Upgrade</button>
                                        </div>
                                        <div class="col-6">
                                          <div class="m-n4 unlimited-img">
                                            <img src={UnlimitedBg} alt="flexy-img" class="w-100" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <a href="/login" class="btn btn-outline-primary">Log Out</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="simplebar-placeholder" style="width: 364px; height: 610px;"></div>
                        </div>
                        <div class="simplebar-track simplebar-horizontal" style={{ "visibility": "hidden" }}>
                          <div class="simplebar-scrollbar" style={{ "width": "0px", "display": "none" }}>
                          </div>
                        </div>
                        <div class="simplebar-track simplebar-vertical" style={{ "visibility": "hidden" }}>
                          <div class="simplebar-scrollbar" style={{ "height": "0px", "display": "none" }}>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div
            // class="offcanvas offcanvas-end"
            class={isOpenOffcanvas() ? "offcanvas offcanvas-end shopping-cart show" : "offcanvas offcanvas-end"}
          >
            <nav class="sidebar-nav scroll-sidebar">
              <div class="offcanvas-header justify-content-between">
                <h5 class="offcanvas-title fs-5 fw-semibold" id="offcanvasRightLabel">
                  Shopping Cart
                </h5>
                {/* <span class="badge bg-primary rounded-2 px-3 py-1 lh-sm">5 new</span> */}
                <button type="button" class="btn-close ms-auto" onClick={() => setIsOpenOpenOffcanvas(false)} data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div class="offcanvas-body h-100 px-4 pt-0" data-simplebar>
                <ul class="mb-0">
                  <li class="pb-7">
                    <div class="d-flex align-items-center">
                      <img src={Product1} width="95" height="75" class="rounded-1 me-9 flex-shrink-0" alt="flexy-img" />
                      <div>
                        <h6 class="mb-1">Supreme toys cooker</h6>
                        <p class="mb-0 text-muted fs-2">Kitchenware Item</p>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                          <h6 class="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                          <div class="input-group input-group-sm w-50">
                            <button class="btn border-0 round-20 minus p-0 bg-success-subtle text-success" type="button" id="add1">
                              -
                            </button>
                            <input type="text" class="form-control round-20 bg-transparent text-muted fs-2 border-0 text-center qty" placeholder="" aria-label="Example text with button addon" aria-describedby="add1" value="1" />
                            <button class="btn text-success bg-success-subtle p-0 round-20 border-0 add" type="button" id="addo2">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="pb-7">
                    <div class="d-flex align-items-center">
                      <img src={Product2} width="95" height="75" class="rounded-1 me-9 flex-shrink-0" alt="flexy-img" />
                      <div>
                        <h6 class="mb-1">Supreme toys cooker</h6>
                        <p class="mb-0 text-muted fs-2">Kitchenware Item</p>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                          <h6 class="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                          <div class="input-group input-group-sm w-50">
                            <button class="btn border-0 round-20 minus p-0 bg-success-subtle text-success" type="button" id="add2">
                              -
                            </button>
                            <input type="text" class="form-control round-20 bg-transparent text-muted fs-2 border-0 text-center qty" placeholder="" aria-label="Example text with button addon" aria-describedby="add2" value="1" />
                            <button class="btn text-success bg-success-subtle p-0 round-20 border-0 add" type="button" id="addon34">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="pb-7">
                    <div class="d-flex align-items-center">
                      <img src={Product3} width="95" height="75" class="rounded-1 me-9 flex-shrink-0" alt="flexy-img" />
                      <div>
                        <h6 class="mb-1">Supreme toys cooker</h6>
                        <p class="mb-0 text-muted fs-2">Kitchenware Item</p>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                          <h6 class="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                          <div class="input-group input-group-sm w-50">
                            <button class="btn border-0 round-20 minus p-0 bg-success-subtle text-success" type="button" id="add3">
                              -
                            </button>
                            <input type="text" class="form-control round-20 bg-transparent text-muted fs-2 border-0 text-center qty" placeholder="" aria-label="Example text with button addon" aria-describedby="add3" value="1" />
                            <button class="btn text-success bg-success-subtle p-0 round-20 border-0 add" type="button" id="addon3">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="align-bottom">
                  <div class="d-flex align-items-center pb-7">
                    <span class="text-dark fs-3">Sub Total</span>
                    <div class="ms-auto">
                      <span class="text-dark fw-semibold fs-3">$2530</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center pb-7">
                    <span class="text-dark fs-3">Total</span>
                    <div class="ms-auto">
                      <span class="text-dark fw-semibold fs-3">$6830</span>
                    </div>
                  </div>
                  <a href="/app/checkout" class="btn btn-outline-primary w-100">Go to shopping cart</a>
                </div>
              </div>
            </nav>
          </div>
          {isOpenOffcanvas() ? <div class="offcanvas-backdrop fade show"></div> : ""}
        </div>
        <div className="app-header with-horizontal">
          <nav className="navbar navbar-expand-xl container-fluid p-0 mw-100">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item nav-icon-hover-bg rounded-circle d-flex d-xl-none ms-n2">
                <a
                  className="nav-link sidebartoggler"
                  id="sidebarCollapse"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-menu-2" />
                </a>
              </li>
              <li className="nav-item d-none d-xl-block">
                <a
                  href="/"
                  className="text-nowrap nav-link"
                >
                  <img
                    src={darkMode() ? lightLogo : darkLogo} // ใช้ darkMode() แทน toggleThemeMode
                    className={darkMode() ? "dark-logo" : "light-logo"}
                    alt="flexy-img"
                    style={{ display: "flex" }}
                  />
                </a>
              </li>
              <li className="nav-item nav-icon-hover-bg rounded-circle d-none d-xl-flex">
                <a
                  className="nav-link"
                  href="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="ti ti-search" />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav quick-links d-none d-xl-flex align-items-center">
              {/* ------------------------------- */}
              {/* start apps Dropdown */}
              {/* ------------------------------- */}
              <li className="nav-item nav-icon-hover-bg rounded w-auto dropdown d-none d-lg-flex">
                <div className="hover-dd">
                  <a className="nav-link" href="javascript:void(0)">
                    Apps
                    <span className="mt-1">
                      <i className="ti ti-chevron-down fs-3" />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-nav dropdown-menu-animate-up py-0">
                    <div className="row">
                      <div className="col-8">
                        <div className="ps-7 pt-7">
                          <div className="border-bottom">
                            <div className="row">
                              <div className="col-6">
                                <div className="position-relative">
                                  <a
                                    href="/app/chat"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdChat}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Chat Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        New messages arrived
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="/app/invoice"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdInvoice}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Invoice App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get latest invoice
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="/app/contactlist"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdMobile}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Contact Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        2 Unsaved Contacts
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="/app/email"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdMessageBox}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Email App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get new emails
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="position-relative">
                                  <a
                                    href="/app/userprofile"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdCart}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        User Profile
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        learn more information
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="/app/calendar"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdDate}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Calendar App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get dates
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="/app/contacttable"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdLifebuoy}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Contact List Table
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Add new contact
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="/app/notes"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdApplication}
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Notes Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        To-do and Daily tasks
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center py-3">
                            <div className="col-8">
                              <a
                                className="fw-semibold d-flex align-items-center lh-1"
                                href="javascript:void(0)"
                              >
                                <i className="ti ti-help fs-6 me-2" />
                                Frequently Asked Questions
                              </a>
                            </div>
                            <div className="col-4">
                              <div className="d-flex justify-content-end pe-4">
                                <button className="btn btn-primary">
                                  Check
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 ms-n4">
                        <div className="position-relative p-7 border-start h-100">
                          <h5 className="fs-5 mb-9 fw-semibold">Quick Links</h5>
                          <ul class>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="/pages/pricing"
                              >
                                Pricing Page
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="/login"
                              >
                                Authentication Design
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="/register"
                              >
                                Register Now
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="/error"
                              >
                                404 Error Page
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="/app/notes"
                              >
                                Notes App
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="/app/userprofile"
                              >
                                User Application
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="/pages/accountSetting"
                              >
                                Account Settings
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link" href="/app/chat">
                  Chat
                </a>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link" href="/app/calendar">
                  Calendar
                </a>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link" href="/app/email">
                  Email
                </a>
              </li>
            </ul>
            <div className="d-block d-xl-none">
              <a
                href="/"
                className="text-nowrap nav-link"
              >
                <img
                  src={darkLogo}
                  width="180"
                  alt="flexy-img"
                />
              </a>
            </div>
            <a
              className="navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0"
              href="javascript:void(0)"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="p-2">
                <i className="ti ti-dots fs-7" />
              </span>
            </a>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <div className="d-flex align-items-center justify-content-between px-0 px-xl-8">
                <a
                  href="javascript:void(0)"
                  className="nav-link round-40 p-1 ps-0 d-flex d-xl-none align-items-center justify-content-center"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mobilenavbar"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <i className="ti ti-align-justified fs-7" />
                </a>
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <a
                      className={darkMode() ? "nav-link sun light-layout" : "nav-link sun light-layout"} // ใช้ darkMode() แทน toggleThemeMode

                      href="javascript:void(0)"
                      style={{ display: "flex" }}
                      onclick={toggleThemeMode}
                    >
                      <i
                        className={darkMode() ? "ti ti-sun sun" : "ti ti-moon moon"} // ใช้ darkMode() แทน toggleThemeMode

                        style={{ display: "flex" }}
                      />
                    </a>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <a
                      className="nav-link"
                      href="javascript:void(0)"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <img
                        src={iconFlagEn}
                        alt="flexy-img"
                        width="20px"
                        height="20px"
                        className="rounded-circle object-fit-cover round-20"
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagEn}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">English (UK)</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagCn}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">中国人 (Chinese)</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagFr}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">français (French)</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagSa}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">عربي (Arabic)</p>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <a
                      className="nav-link position-relative"
                      onClick={toggleOffcanvas}
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <i className="ti ti-basket" />
                      <span className="popup-badge rounded-pill bg-danger text-white fs-2">
                        2
                      </span>
                    </a>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <a
                      className="nav-link position-relative"
                      href="javascript:void(0)"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <i className="ti ti-bell-ringing" />
                      <div className="notification bg-primary rounded-circle" />
                    </a>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="d-flex align-items-center justify-content-between py-3 px-7">
                        <h5 className="mb-0 fs-5 fw-semibold">Notifications</h5>
                        <span className="badge text-bg-primary rounded-2 px-3 py-1 lh-sm">
                          5 new
                        </span>
                      </div>
                      <div className="message-body" data-simplebar="init">
                        <div
                          className="simplebar-wrapper"
                          style={{ margin: "310px" }}
                        >
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                          </div>
                          <div className="simplebar-mask">
                            <div
                              className="simplebar-offset"
                              style={{ right: "0px", bottom: "0px" }}
                            >
                              <div
                                className="simplebar-content-wrapper"
                                tabindex="0"
                                role="region"
                                aria-label="scrollable content"
                                style={{ height: "auto", overflow: "hidden" }}
                              >
                                <div
                                  className="simplebar-content"
                                  style={{ padding: "0px" }}
                                >
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src={User2}
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Roman Joined the Team!
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Congratulate him
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src={User3}
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        New message
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Salma sent you new message
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src={User4}
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Bianca sent payment
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Check your earnings
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src={User5}
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Jolly completed tasks
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Assign her new tasks
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src={User6}
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        John received payment
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        $230 deducted from account
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src={User7}
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Roman Joined the Team!
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Congratulate him
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="simplebar-placeholder"
                            style={{ width: "0px", height: "0px" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-horizontal"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ width: "0px", display: "none" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-vertical"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{
                              height: "0px",
                              display: "none",
                              transform: "translate3d(0px, 0px, 0px)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="py-6 px-7 mb-1">
                        <button className="btn btn-outline-primary w-100">
                          See All Notifications
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link pe-0"
                      href="javascript:void(0)"
                      id="drop1"
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center">
                        <div className="user-profile-img">
                          <img
                            src={User1}
                            className="rounded-circle"
                            width="35"
                            height="35"
                            alt="flexy-img"
                          />
                        </div>
                      </div>
                    </a>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop1"
                    >
                      <div
                        className="profile-dropdown position-relative"
                        data-simplebar="init"
                      >
                        <div
                          className="simplebar-wrapper"
                          style={{ margin: "310px" }}
                        >
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                          </div>
                          <div className="simplebar-mask">
                            <div
                              className="simplebar-offset"
                              style={{ right: "0px", bottom: "0px" }}
                            >
                              <div
                                className="simplebar-content-wrapper"
                                tabindex="0"
                                role="region"
                                aria-label="scrollable content"
                                style={{ height: "auto", overflow: "hidden" }}
                              >
                                <div
                                  className="simplebar-content"
                                  style={{ padding: "0px" }}
                                >
                                  <div className="py-3 px-7 pb-0">
                                    <h5 className="mb-0 fs-5 fw-semibold">
                                      User Profile
                                    </h5>
                                  </div>
                                  <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                                    <img
                                      src={User1}
                                      className="rounded-circle"
                                      width="80"
                                      height="80"
                                      alt="flexy-img"
                                    />
                                    <div className="ms-3">
                                      <h5 className="mb-1 fs-4">
                                        Johnathan Doe
                                      </h5>
                                      <span className="mb-1 d-block">
                                        Administrator
                                      </span>
                                      <p className="mb-0 d-flex align-items-center gap-2">
                                        <i className="ti ti-mail fs-4" />{" "}
                                        info@flexy.com
                                      </p>
                                    </div>
                                  </div>
                                  <div className="message-body">
                                    <a
                                      href="/app/userprofile"
                                      className="py-8 px-7 mt-8 d-flex align-items-center"
                                    >
                                      <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img
                                          src={iconAccount}
                                          alt="flexy-img"
                                          width="24"
                                          height="24"
                                        />
                                      </span>
                                      <div className="w-100 ps-3">
                                        <h6 className="mb-0 fs-4 lh-base">
                                          My Profile
                                        </h6>
                                        <span className="fs-3 d-block text-body-secondary">
                                          Account Settings
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="/app/email"
                                      className="py-8 px-7 d-flex align-items-center"
                                    >
                                      <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img
                                          src={iconInbox}
                                          alt="flexy-img"
                                          width="24"
                                          height="24"
                                        />
                                      </span>
                                      <div className="w-100 ps-3">
                                        <h6 className="mb-0 fs-4 lh-base">
                                          My Inbox
                                        </h6>
                                        <span className="fs-3 d-block text-body-secondary">
                                          Messages &amp; Emails
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="/app/notes"
                                      className="py-8 px-7 d-flex align-items-center"
                                    >
                                      <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img
                                          src={iconTasks}
                                          alt="flexy-img"
                                          width="24"
                                          height="24"
                                        />
                                      </span>
                                      <div className="w-100 ps-3">
                                        <h6 className="mb-0 fs-4 lh-base">
                                          My Task
                                        </h6>
                                        <span className="fs-3 d-block text-body-secondary">
                                          To-do and Daily Tasks
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="d-grid py-4 px-7 pt-8">
                                    <div className="upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-2 p-4 mb-9">
                                      <div className="row">
                                        <div className="col-6">
                                          <h5 className="fs-4 mb-3 fw-semibold">
                                            Unlimited Access
                                          </h5>
                                          <button className="btn btn-primary">
                                            Upgrade
                                          </button>
                                        </div>
                                        <div className="col-6">
                                          <div className="m-n4 unlimited-img">
                                            <img
                                              src={UnlimitedBg}
                                              alt="flexy-img"
                                              className="w-100"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <a
                                      href="/login"
                                      className="btn btn-outline-primary"
                                    >
                                      Log Out
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="simplebar-placeholder"
                            style={{ width: "0px", height: "0px" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-horizontal"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ width: "0px", display: "none" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-vertical"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ height: "0px", display: "none" }}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class={isOpenOffcanvas() ? "offcanvas offcanvas-end shopping-cart show" : "offcanvas offcanvas-end"} tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" aria-modal="true" role="dialog">
            <div class="offcanvas-header justify-content-between py-4">
              <h5 class="offcanvas-title fs-5 fw-semibold" id="offcanvasRightLabel">Shopping Cart</h5>
              <span class="badge bg-primary rounded-2 px-3 py-1 lh-sm">5 new</span>
              {/* <button type="button" class="btn-close ms-auto" onClick={() => setIsOpenOpenOffcanvas(false)} data-bs-dismiss="offcanvas" aria-label="Close" /> */}
            </div>
            <div class="offcanvas-body h-100 px-4 pt-0" data-simplebar="init">
              <div class="simplebar-wrapper" style={{ "margin": "0px -24px -16px" }}>
                <div class="simplebar-height-auto-observer-wrapper">
                  <div class="simplebar-height-auto-observer">
                  </div>
                </div>
                <div class="simplebar-mask">
                  <div class="simplebar-offset" style={{ "right": "0px", "bottom": "0px" }}>
                    <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ "height": "100%", "overflow": "hidden" }}>
                      <div class="simplebar-content" style={{ "padding": "0px 24px 16px" }}>
                        <ul class="mb-0">
                          <li class="pb-7">
                            <div class="d-flex align-items-center">
                              <img src={Product1} width="95" height="75" class="rounded-1 me-9 flex-shrink-0" alt="flexy-img" />
                              <div>
                                <h6 class="mb-1">Supreme toys cooker</h6>
                                <p class="mb-0 text-muted fs-2">Kitchenware Item</p>
                                <div class="d-flex align-items-center justify-content-between mt-2">
                                  <h6 class="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                                  <div class="input-group input-group-sm w-50">
                                    <button class="btn border-0 round-20 minus p-0 bg-success-subtle text-success" type="button" id="add1">-</button>
                                    <input type="text" class="form-control round-20 bg-transparent text-muted fs-2 border-0 text-center qty" placeholder aria-label="Example text with button addon" aria-describedby="add1" value="1" />
                                    <button class="btn text-success bg-success-subtle p-0 round-20 border-0 add" type="button" id="addo2">+</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="pb-7">
                            <div class="d-flex align-items-center">
                              <img src={Product2} width="95" height="75" class="rounded-1 me-9 flex-shrink-0" alt="flexy-img" />
                              <div>
                                <h6 class="mb-1">Supreme toys cooker</h6>
                                <p class="mb-0 text-muted fs-2">Kitchenware Item</p>
                                <div class="d-flex align-items-center justify-content-between mt-2">
                                  <h6 class="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                                  <div class="input-group input-group-sm w-50">
                                    <button class="btn border-0 round-20 minus p-0 bg-success-subtle text-success" type="button" id="add2">-</button>
                                    <input type="text" class="form-control round-20 bg-transparent text-muted fs-2 border-0 text-center qty" placeholder aria-label="Example text with button addon" aria-describedby="add2" value="1" />
                                    <button class="btn text-success bg-success-subtle p-0 round-20 border-0 add" type="button" id="addon34">+</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="pb-7">
                            <div class="d-flex align-items-center">
                              <img src={Product3} width="95" height="75" class="rounded-1 me-9 flex-shrink-0" alt="flexy-img" />
                              <div>
                                <h6 class="mb-1">Supreme toys cooker</h6>
                                <p class="mb-0 text-muted fs-2">Kitchenware Item</p>
                                <div class="d-flex align-items-center justify-content-between mt-2">
                                  <h6 class="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                                  <div class="input-group input-group-sm w-50">
                                    <button class="btn border-0 round-20 minus p-0 bg-success-subtle text-success" type="button" id="add3">-</button>
                                    <input type="text" class="form-control round-20 bg-transparent text-muted fs-2 border-0 text-center qty" placeholder aria-label="Example text with button addon" aria-describedby="add3" value="1" />
                                    <button class="btn text-success bg-success-subtle p-0 round-20 border-0 add" type="button" id="addon3">+</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div class="align-bottom">
                          <div class="d-flex align-items-center pb-7">
                            <span class="text-dark fs-3">Sub Total</span>
                            <div class="ms-auto">
                              <span class="text-dark fw-semibold fs-3">$2530</span>
                            </div>
                          </div>
                          <div class="d-flex align-items-center pb-7">
                            <span class="text-dark fs-3">Total</span>
                            <div class="ms-auto">
                              <span class="text-dark fw-semibold fs-3">$6830</span>
                            </div>
                          </div>
                          <a href="/app/checkout" class="btn btn-outline-primary w-100">Go to shopping cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="simplebar-placeholder" style={{ "width": "330px", "height": "477px" }}>
                </div>
              </div>
              <div class="simplebar-track simplebar-horizontal" style={{ "visibility": "hidden" }}>
                <div class="simplebar-scrollbar" style={{ "width": "0px", "display": "none" }}>
                </div>
              </div>
              <div class="simplebar-track simplebar-vertical" style={{ "visibility": "hidden" }}>
                <div class="simplebar-scrollbar" style={{ "height": "0px", "display": "none" }}>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            // class="offcanvas offcanvas-end"
            class={isOpenOffcanvas() ? "offcanvas offcanvas-end shopping-cart show" : "offcanvas offcanvas-end"}
          >
            <nav class="sidebar-nav scroll-sidebar">
              <div class="offcanvas-header justify-content-between">
                <h5 class="offcanvas-title fs-5 fw-semibold" id="offcanvasRightLabel">
                  Shopping Cart
                </h5>
                <span class="badge bg-primary rounded-2 px-3 py-1 lh-sm">5 new</span> 
                <button type="button" class="btn-close ms-auto" onClick={() => setIsOpenOpenOffcanvas(false)} data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div class="offcanvas-body h-100 px-4 pt-0" data-simplebar>
                <ul class="mb-0">
                  <li class="pb-7">
                    <div class="d-flex align-items-center">
                      <img src={Product1} width="95" height="75" class="rounded-1 me-9 flex-shrink-0" alt="flexy-img" />
                      <div>
                        <h6 class="mb-1">Supreme toys cooker</h6>
                        <p class="mb-0 text-muted fs-2">Kitchenware Item</p>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                          <h6 class="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                          <div class="input-group input-group-sm w-50">
                            <button class="btn border-0 round-20 minus p-0 bg-success-subtle text-success" type="button" id="add1">
                              -
                            </button>
                            <input type="text" class="form-control round-20 bg-transparent text-muted fs-2 border-0 text-center qty" placeholder="" aria-label="Example text with button addon" aria-describedby="add1" value="1" />
                            <button class="btn text-success bg-success-subtle p-0 round-20 border-0 add" type="button" id="addo2">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="pb-7">
                    <div class="d-flex align-items-center">
                      <img src={Product2} width="95" height="75" class="rounded-1 me-9 flex-shrink-0" alt="flexy-img" />
                      <div>
                        <h6 class="mb-1">Supreme toys cooker</h6>
                        <p class="mb-0 text-muted fs-2">Kitchenware Item</p>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                          <h6 class="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                          <div class="input-group input-group-sm w-50">
                            <button class="btn border-0 round-20 minus p-0 bg-success-subtle text-success" type="button" id="add2">
                              -
                            </button>
                            <input type="text" class="form-control round-20 bg-transparent text-muted fs-2 border-0 text-center qty" placeholder="" aria-label="Example text with button addon" aria-describedby="add2" value="1" />
                            <button class="btn text-success bg-success-subtle p-0 round-20 border-0 add" type="button" id="addon34">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="pb-7">
                    <div class="d-flex align-items-center">
                      <img src={Product3} width="95" height="75" class="rounded-1 me-9 flex-shrink-0" alt="flexy-img" />
                      <div>
                        <h6 class="mb-1">Supreme toys cooker</h6>
                        <p class="mb-0 text-muted fs-2">Kitchenware Item</p>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                          <h6 class="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                          <div class="input-group input-group-sm w-50">
                            <button class="btn border-0 round-20 minus p-0 bg-success-subtle text-success" type="button" id="add3">
                              -
                            </button>
                            <input type="text" class="form-control round-20 bg-transparent text-muted fs-2 border-0 text-center qty" placeholder="" aria-label="Example text with button addon" aria-describedby="add3" value="1" />
                            <button class="btn text-success bg-success-subtle p-0 round-20 border-0 add" type="button" id="addon3">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="align-bottom">
                  <div class="d-flex align-items-center pb-7">
                    <span class="text-dark fs-3">Sub Total</span>
                    <div class="ms-auto">
                      <span class="text-dark fw-semibold fs-3">$2530</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center pb-7">
                    <span class="text-dark fs-3">Total</span>
                    <div class="ms-auto">
                      <span class="text-dark fw-semibold fs-3">$6830</span>
                    </div>
                  </div>
                  <a href="/app/checkout" class="btn btn-outline-primary w-100">Go to shopping cart</a>
                </div>
              </div>
            </nav>
          </div> */}
          {/* {isOpenOffcanvas() ? <div class="offcanvas-backdrop fade show"></div> : ""} */}
        </div>
      </header>
    </>
  );
}
