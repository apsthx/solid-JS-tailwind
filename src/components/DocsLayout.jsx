import Footer from "./docs/Footer";
import Header from "./docs/Header";
import SearchBar from "./modals/SearchBar";
// import ShoppingBar from "./modals/Shoppingbar";
import Navbar from "./docs/Navbar";
import Sidebar from "./docs/Sidebar";
import { createSignal, onMount } from "solid-js";
import { darkLogo } from "../helper/icon";

const DocsLayout = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);
  const [darkMode, setDarkMode] = createSignal(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen());
  };

  // const toggleThemeMode = () => {
  //   setDarkMode(!darkMode());

  //   const htmlElement = document.documentElement; // แท็ก <html>
  //   htmlElement.setAttribute("data-bs-theme", darkMode() ? "dark" : "light");
  //   htmlElement.setAttribute("data-color-theme", "Blue_Theme");

  //   console.log(darkMode());
  // };

  console.log(isOpen)
  onMount(async () => {
    import("../assets/libs/simplebar/dist/simplebar.min.js").then(({ initializeSimplebar }) => {
      initializeSimplebar();
    });

    // const module = await import("../assets/libs/simplebar/dist/simplebar.min.js");
    // module.initializeCharts();

    function handleSidebar() {
      document.querySelectorAll(".sidebartoggler").forEach(function (element) {
        element.addEventListener("click", function () {
          document.querySelectorAll(".sidebartoggler").forEach(function (el) {
            el.checked = true;
          });
          document
            .getElementById("main-wrapper")
            .classList.toggle("show-sidebar");
          document.querySelectorAll(".sidebarmenu").forEach(function (el) {
            el.classList.toggle("close");
          });
          var dataTheme = document.body.getAttribute("data-sidebartype");
          if (dataTheme === "full") {
            document.body.setAttribute("data-sidebartype", "mini-sidebar");
          } else {
            document.body.setAttribute("data-sidebartype", "full");
          }
        });
      });
    }

    handleSidebar();

    function findMatchingElement() {
      var currentUrl = window.location.href;
      var anchors = document.querySelectorAll("#sidebarnav a");
      for (var i = 0; i < anchors.length; i++) {
        if (anchors[i].href === currentUrl) {
          return anchors[i];
        }
      }

      return null; // Return null if no matching element is found
    }
    var elements = findMatchingElement();

    // Do something with the matching element
    if (elements) {
      elements.classList.add("active");
    }

    document
      .querySelectorAll("ul#sidebarnav ul li a.active")
      .forEach(function (link) {
        link.closest("ul").classList.add("in");
        link.closest("ul").parentElement.classList.add("selected");
      });

    document.querySelectorAll("#sidebarnav li").forEach(function (li) {
      const isActive = li.classList.contains("selected");
      if (isActive) {
        const anchor = li.querySelector("a");
        if (anchor) {
          anchor.classList.add("active");
        }
      }
    });

    document.querySelectorAll("#sidebarnav a").forEach(function (link) {
      link.addEventListener("click", function (e) {
        const isActive = this.classList.contains("active");
        const parentUl = this.closest("ul");
        if (!isActive) {
          // hide any open menus and remove all other classes
          parentUl.querySelectorAll("ul").forEach(function (submenu) {
            submenu.classList.remove("in");
          });
          parentUl.querySelectorAll("a").forEach(function (navLink) {
            navLink.classList.remove("active");
          });

          // open our new menu and add the open class
          const submenu = this.nextElementSibling;
          if (submenu) {
            submenu.classList.add("in");
          }

          this.classList.add("active");
        } else {
          this.classList.remove("active");
          parentUl.classList.remove("active");
          const submenu = this.nextElementSibling;
          if (submenu) {
            submenu.classList.remove("in");
          }
        }
      });
    });
  });
  return (

    <>
      <div id="main-wrapper">
        <aside class="left-sidebar with-vertical">
          <div class="navbar-brand brand-logo d-flex align-items-center justify-content-between px-4">
            <a href="/" class="text-nowrap logo-img">
              <img src={darkLogo} class="dark-logo" alt="Logo-Dark" />
            </a>
            <a href="javascript:void(0)" class="sidebartoggler ms-auto text-decoration-none fs-5 d-block d-xl-none">
              <i class="ti ti-x" />
            </a>
          </div>
          <div class="scroll-sidebar" style={{ "height": "calc(100vh - 100px)" }} data-simplebar>
            <nav class="sidebar-nav">
              <ul id="sidebarnav" class>
                <nav class="nav nav-pills flex-column sidebar-nav">
                  <ul class="list-unstyled">
                    <li class="nav-small-cap">
                      <span class="hide-menu">Getting Started</span>
                    </li>
                    <li class="sidebar-item">
                      <a class="nav-link sidebar-link d-flex align-items-center" href="../docs/introduction">
                        <i class="ti ti-home-2" /> Introduction
                      </a>
                    </li>
                    <li class="sidebar-item">
                      <a class="nav-link sidebar-link d-flex align-items-center" href="../docs/structure">
                        <i class="ti ti-packages" /> Package Structure
                      </a>
                    </li>
                    <li class="sidebar-item">
                      <a class="nav-link sidebar-link d-flex align-items-center" href="../docs/start">
                        <i class="ti ti-brand-abstract" /> Quick Start
                      </a>
                    </li>
                    {/*CUSTOMIZATION*/}
                    <li>
                      <span class="sidebar-divider lg" />
                    </li>
                    <li class="nav-small-cap">
                      <span class="hide-menu">Customization</span>
                    </li>
                    <li class="sidebar-item">
                      <a class="nav-link sidebar-link d-flex align-items-center" href="../docs/layouts">
                        <i class="ti ti-layout-bottombar" /> Layout Options
                      </a>
                    </li>
                    <li class="sidebar-item">
                      <a class="nav-link sidebar-link d-flex align-items-center" href="../docs/changeLogo">
                        <i class="ti ti-adjustments-horizontal" /> Change Logo
                      </a>
                    </li>
                    <li class="sidebar-item">
                      <a class="nav-link sidebar-link d-flex align-items-center" href="../docs/globalSkinColor">
                        <i class="ti ti-palette" /> Global Skin Color
                      </a>
                    </li>
                    <li>
                      <span class="sidebar-divider lg" />
                    </li>
                    <li class="nav-small-cap mt-4">
                      <span class="hide-menu">Theme UI</span>
                    </li>
                    <li class="sidebar-item position-relative">
                      <a class="nav-link sidebar-link has-arrow d-flex align-items-center" href="javascript:void(0)" aria-expanded="false">
                        <i class="ti ti-file-infinity" />
                        <span class="hide-menu">Settings</span>
                      </a>
                      <ul aria-expanded="false" class="collapse first-level list-unstyled">
                        <li class="sidebar-item mb-0">
                          <a href="../docs/color" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Color </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/typography" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Typography </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/icons" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Icons </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/*UI COMPONENTS*/}
                    <li>
                      <span class="sidebar-divider lg" />
                    </li>
                    <li class="nav-small-cap mt-4">
                      <span class="hide-menu">Ui Components</span>
                    </li>
                    <li class="sidebar-item position-relative">
                      <a class="nav-link sidebar-link has-arrow d-flex align-items-center" href="javascript:void(0)" aria-expanded="false">
                        <i class="ti ti-layout-grid" />
                        <span class="hide-menu">Bootstrap</span>
                      </a>
                      {/*sub-menu items*/}
                      <ul aria-expanded="false" class="collapse first-level list-unstyled">
                        <li class="sidebar-item mb-0">
                          <a href="../docs/buttons" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Buttons </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/modals" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Modals </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/tabs" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Tabs </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/tooltipPopover" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Tooltip &amp; Popover </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/notifications" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Notifications </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/progressbar" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Progressbar </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/typography" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Typography </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/bootstrapui" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Bootstrap UI </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/breadcrumbs" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Breadcrumbs </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/listmedia" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> List Media </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/grids" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Grids </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/carousel" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Carousel </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/scrollspy" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Scrollspy </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/toasts" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Toasts </span>
                          </a>
                        </li>
                        <li class="sidebar-item mb-0">
                          <a href="../docs/spinner" class="nav-link sub-link">
                            <i class="ti ti-point" />
                            <span class="hide-menu fs-3"> Spinner </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/*Support*/}
                    <li>
                      <span class="sidebar-divider lg" />
                    </li>
                    <li class="nav-small-cap mt-4">
                      <span class="hide-menu">Support</span>
                    </li>
                    <li class="sidebar-item">
                      <a class="nav-link sidebar-link d-flex align-items-center" href="../docs/changeLog">
                        <i class="ti ti-refresh-dot" />Changelog
                      </a>
                    </li>
                  </ul>
                </nav>
              </ul>
            </nav>
            {/* End Sidebar navigation */}
          </div>
        </aside>
        <div class="page-wrapper">
          <header class="topbar position-relative">
            <div class="navbar navbar-header bg-white d-flex align-items-center justify-content-between p-3 fixed-top">
              <a href="/">
                <b class="logo-icon d-xl-none d-block">
                  <img src={darkLogo} alt="homepage" class="dark-logo" />
                </b>
              </a>
              <div class="d-flex align-items-center">
                <a class="fs-8 text-muted d-xl-none d-block sidebartoggler" href="javascript:void(0)" role="button">
                  <i class="ti ti-menu-2" />
                </a>
              </div>
            </div>
          </header>
          <div class="body-wrapper" data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" tabindex="0" />
          {props.children}
        </div>
      </div>
    </>


    // <div id="main-wrapper" class={isOpen() ? "show-sidebar" : ""}>
    // <div id="main-wrapper">
    //   <Sidebar />
    //   <div class="page-wrapper">
    //     <Header toggleNavbar={toggleNavbar} />
    //     {/* <Header toggleNavbar={toggleNavbar} toggleThemeMode={toggleThemeMode} /> */}
    //     {/* <Navbar /> */}
    //     <div class="body-wrapper" data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" tabindex="0">
    //       {props.children}
    //     </div>
    //       {/* <footer className="footer py-3 bg-white border-top text-center">
    //         2024© All Rights Reserved by Wrappixel
    //       </footer> */}
    //   </div>
    //   {/* <ShoppingBar /> */}
    //   <SearchBar/>
    // </div>
  );
};


export default DocsLayout;
