import { onMount } from "solid-js";
import { darkLogo, lightLogo } from "../../helper/icon";
import { useLocation } from "@solidjs/router";
import { createMemo } from "solid-js";

export default function Sidebar() {
    const location = useLocation()
    const activeItem = createMemo(() => location.pathname);


    onMount(async () => {
        import("../../assets/libs/simplebar/dist/simplebar.min.js").then(({ initializeSimplebarmin }) => {
            initializeSimplebarmin();
        });
    });
    onMount(async () => {
        const module = await import("../../assets/js/simplebar.js");
        module.initializeSimplebar();

    });
    return (
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
                                    <a className={`nav-link sidebar-link d-flex align-items-center ${activeItem() == "/docs/introduction" ? "active" : ""}`} href="/docs/introduction">
                                        <i class="ti ti-home-2" /> Introduction
                                    </a>
                                </li>
                                <li class="sidebar-item">
                                    <a className={`nav-link sidebar-link d-flex align-items-center ${activeItem() == "/docs/structure" ? "active" : ""}`} href="/docs/structure">
                                        <i class="ti ti-packages" /> Package Structure
                                    </a>
                                </li>
                                <li class="sidebar-item">
                                    <a className={`nav-link sidebar-link d-flex align-items-center ${activeItem() == "/docs/start" ? "active" : ""}`} href="/docs/start">
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
                                    <a className={`nav-link sidebar-link d-flex align-items-center ${activeItem() == "/docs/custom/layouts" ? "active" : ""}`} href="/docs/custom/layouts">
                                        <i class="ti ti-layout-bottombar" /> Layout Options
                                    </a>
                                </li>
                                <li class="sidebar-item">
                                    <a className={`nav-link sidebar-link d-flex align-items-center ${activeItem() == "/docs/custom/changeLogo" ? "active" : ""}`} href="/docs/custom/changeLogo">
                                        <i class="ti ti-adjustments-horizontal" /> Change Logo
                                    </a>
                                </li>
                                <li class="sidebar-item">
                                    <a className={`nav-link sidebar-link d-flex align-items-center ${activeItem() == "/docs/custom/globalSkinColor" ? "active" : ""}`} href="/docs/custom/globalSkinColor">
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
                                            <a href="/docs/theme/color" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Color </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/theme/typography" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Typography </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/theme/icons" class="nav-link sub-link">
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
                                            <a href="/docs/ui/buttons" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Buttons </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/ui/modals" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Modals </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/ui/tabs" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Tabs </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/ui/tooltipPopover" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Tooltip &amp; Popover </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/ui/notifications" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Notifications </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/ui/progressbar" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Progressbar </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/ui/typography" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Typography </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/ui/bootstrapui" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Bootstrap UI </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/ui/breadcrumbs" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Breadcrumbs </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/ui/listmedia" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> List Media </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/ui/grids" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Grids </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/ui/carousel" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Carousel </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/ui/scrollspy" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Scrollspy </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/ui/toasts" class="nav-link sub-link">
                                                <i class="ti ti-point" />
                                                <span class="hide-menu fs-3"> Toasts </span>
                                            </a>
                                        </li>
                                        <li class="sidebar-item mb-0">
                                            <a href="/docs/ui/spinner" class="nav-link sub-link">
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
                                    <a className={`nav-link sidebar-link d-flex align-items-center ${activeItem() == "/docs/introduction" ? "active" : ""}`} href="../docs/changeLog">
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
    )
}