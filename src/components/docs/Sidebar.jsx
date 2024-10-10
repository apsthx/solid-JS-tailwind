import { onMount } from "solid-js";

export default function Sidebar() {
    onMount(() => {

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
        <aside class="left-sidebar with-vertical">
            {/* Sidebar scroll*/}
            {/* ============================================================== */}
            {/* Logo */}
            {/* ============================================================== */}
            <div class="navbar-brand brand-logo d-flex align-items-center justify-content-between px-4">
                <a href="../index.html" class="text-nowrap logo-img">
                    <img src="../assets/images/logos/dark-logo.svg" class="dark-logo" alt="Logo-Dark" />
                </a>
                <a href="javascript:void(0)" class="sidebartoggler ms-auto text-decoration-none fs-5 d-block d-xl-none">
                    <i class="ti ti-x" />
                </a>
            </div>
            {/* ============================================================== */}
            {/* End Logo */}
            {/* ============================================================== */}
            <div class="scroll-sidebar" style={{ "height": "calc(100vh - 100px)" }} data-simplebar>
                {/* Sidebar navigation*/}
                <nav class="sidebar-nav">
                    <ul id="sidebarnav" class>
                        <nav class="nav nav-pills flex-column sidebar-nav">
                            <ul class="list-unstyled">
                                {/*Getting Started*/}
                                <li class="nav-small-cap">
                                    <span class="hide-menu">Getting Started</span>
                                </li>
                                <li class="sidebar-item">
                                    <a class="nav-link sidebar-link d-flex align-items-center" href="../docs/index.html">
                                        <i class="ti ti-home-2" /> Introduction
                                    </a>
                                </li>
                                <li class="sidebar-item">
                                    <a class="nav-link sidebar-link d-flex align-items-center" href="../docs/docs-structure.html">
                                        <i class="ti ti-packages" /> Package Structure
                                    </a>
                                </li>
                                <li class="sidebar-item">
                                    <a class="nav-link sidebar-link d-flex align-items-center" href="../docs/docs-start.html">
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
                                    <a class="nav-link sidebar-link d-flex align-items-center" href="../docs/docs-layout.html">
                                        <i class="ti ti-layout-bottombar" /> Layout Options
                                    </a>
                                </li>
                                <li class="sidebar-item">
                                    <a class="nav-link sidebar-link d-flex align-items-center" href="../docs/docs-change-logo.html">
                                        <i class="ti ti-adjustments-horizontal" /> Change Logo
                                    </a>
                                </li>
                                <li class="sidebar-item">
                                    <a class="nav-link sidebar-link d-flex align-items-center" href="../docs/docs-changes-skin-color.html">
                                        <i class="ti ti-palette" /> Global Skin Color
                                    </a>
                                </li>
                                {/*Theme UI*/}
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
                                    {/*sub-menu items*/}
                                    <ul aria-expanded="false" class="collapse first-level list-unstyled">
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-color.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Color </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-typography.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Typography </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-icon.html" class="nav-link sub-link">
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
                                            <a href="../docs/docs-ui-buttons.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Buttons </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-ui-modals.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Modals </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-ui-tabs.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Tabs </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-ui-tooltip-popover.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Tooltip &amp; Popover </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-ui-notification.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Notifications </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-ui-progressbar.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Progressbar </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-ui-typography.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Typography </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-ui-bootstrapui.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Bootstrap UI </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-ui-breadcrumb.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Breadcrumbs </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-ui-listmedia.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> List Media </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-ui-grid.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Grids </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-ui-carousel.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Carousel </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-ui-scrollspy.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Scrollspy </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-ui-toasts.html" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Toasts </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="../docs/docs-ui-spinner.html" class="nav-link sub-link">
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
                                    <a class="nav-link sidebar-link d-flex align-items-center" href="../docs/docs-change-log.html">
                                        <i class="ti ti-refresh-dot" />Changelog
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </ul>
                </nav>
                {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
        </aside>
    )
}