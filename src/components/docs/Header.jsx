import { createSignal } from "solid-js";
import { darkLogo, iconAccount, iconDdApplication, iconDdCart, iconDdChat, iconDdDate, iconDdInvoice, iconDdLifebuoy, iconDdMessageBox, iconDdMobile, iconFlagCn, iconFlagEn, iconFlagFr, iconFlagSa, iconInbox, iconTasks, lightLogo } from "../../helper/icon";
import { iconDDChat, iconDDInvoice, iconDDMessageBox, iconDDMobile, Product1, Product2, Product3, User1, User2, User3, User4, User5, User6, User7 } from "../../helper/img";
import UnlimitedBg from "../../assets/images/backgrounds/unlimited-bg.png";

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
              class={isOpenToggleHeader() ? "navbar-collapse justify-content-end collapse show" : "navbar-collapse justify-content-end collapse "}
              id="navbarNav"
            >
              <div className="d-flex align-items-center justify-content-between py-2">
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
              {/* <li className="nav-item nav-icon-hover-bg rounded-circle d-none d-xl-flex">
                <a
                  className="nav-link"
                  href="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="ti ti-search" />
                </a>
              </li> */}
            </ul>
            <ul className="navbar-nav quick-links d-none d-xl-flex align-items-center">
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
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
