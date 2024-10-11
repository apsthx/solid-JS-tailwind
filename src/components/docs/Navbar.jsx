import { useLocation } from "@solidjs/router";
import { createMemo } from "solid-js";

export default function Navbar() {
  const location = useLocation()
  const activeItem = createMemo(() => location.pathname);

  return (
    <aside className="left-sidebar with-horizontal">
      {/* Sidebar scroll*/}
      <div>
        {/* Sidebar navigation*/}
        <nav id="sidebarnavh" class="sidebar-nav scroll-sidebar container-fluid mw-100">
          <ul id="sidebarnav">
            {/* ============================= */}
            {/* Home */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Home</span>
            </li>
            {/* =================== */}
            {/* Dashboard */}
            {/* =================== */}
            <li className={`sidebar-item ${activeItem() == "/docs/introduction" || activeItem() == "/docs/structure" || activeItem() == "/docs/start" ? "selected" : ""}`}>
              <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="ti ti-home-2" />
                </span>
                <span className="hide-menu">Getting Started</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className={`sidebar-item`}>
                  <a href="/docs/introduction" className={`sidebar-link ${activeItem() == "/docs/introduction" ? "active" : ""}`}>
                    <i className="ti ti-home-2" />
                    <span className="hide-menu">Introduction</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/structure" className={`sidebar-link  ${activeItem() == "/docs/structure" ? "active" : ""}`}>
                    <i className="ti ti-packages" />
                    <span className="hide-menu">Package Structure</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/start" className={`sidebar-link  ${activeItem() == "/docs/start" ? "active" : ""}`}>
                    <i className="ti ti-brand-abstract" />
                    <span className="hide-menu">Quick Start</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Customization */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Customization</span>
            </li>
            <li className={`sidebar-item ${activeItem().includes("/custom") ? "selected" : ""}`}>
              <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="ti ti-archive" />
                </span>
                <span className="hide-menu">Customization</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className={`sidebar-item`}>
                  <a href="/docs/custom/layouts" className={`sidebar-link ${activeItem() == "/docs/custom/layouts" ? "active" : ""}`}>
                    <i className="ti ti-layout-bottombar" />
                    <span className="hide-menu">Layout Options</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/custom/changeLogo" className={`sidebar-link ${activeItem() == "/docs/custom/changeLogo" ? "active" : ""}`}>
                    <i className="ti ti-adjustments-horizontal" />
                    <span className="hide-menu">Change Logo</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/custom/globalSkinColor" className={`sidebar-link ${activeItem() == "/docs/custom/globalSkinColor" ? "active" : ""}`}>
                    <i className="ti ti-palette" />
                    <span className="hide-menu">Global Skin Color</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* PAGES */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Theme UI</span>
            </li>
            <li className={`sidebar-item ${activeItem().includes("/theme/") ? "selected" : ""}`}>
              <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="ti ti-notebook" />
                </span>
                <span className="hide-menu">Theme UI</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className={`sidebar-item`}>
                  <a href="/docs/theme/color" className={`sidebar-link ${activeItem() == "/docs/theme/color" ? "active" : ""}`}>
                    <i className="ti ti-point" />
                    <span className="hide-menu">Settings</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/theme/typography" className={`sidebar-link ${activeItem() == "/docs/theme/typography" ? "active" : ""}`}>
                    <i className="ti ti-point" />
                    <span className="hide-menu">Typography</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/theme/icons" className={`sidebar-link ${activeItem() == "/docs/theme/icons" ? "active" : ""}`}>
                    <i className="ti ti-point" />
                    <span className="hide-menu">Icons</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* UI */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">UI</span>
            </li>
            {/* =================== */}
            {/* UI Elements */}
            {/* =================== */}
            <li className={`sidebar-item ${activeItem().includes("/ui/") ? "selected" : ""}`}>
              <a className="sidebar-link two-column has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-layout-grid" />
                </span>
                <span className="hide-menu">Bootstrap</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/buttons" className={`sidebar-link ${activeItem() == "/docs/ui/buttons" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Buttons</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/modals" className={`sidebar-link ${activeItem() == "/docs/ui/modals" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Modals</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/tabs" className={`sidebar-link ${activeItem() == "/docs/ui/tabs" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Tabs</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/tooltipPopover" className={`sidebar-link ${activeItem() == "/docs/ui/tooltipPopover" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Tooltip &amp; Popover</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/notifications" className={`sidebar-link ${activeItem() == "/docs/ui/notifications" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Notifications</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/progressbar" className={`sidebar-link ${activeItem() == "/docs/ui/progressbar" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Progressbar</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/typography" className={`sidebar-link ${activeItem() == "/docs/ui/typography" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Typography</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/bootstrapui" className={`sidebar-link ${activeItem() == "/docs/ui/bootstrapui" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Bootstrap UI</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/breadcrumbs" className={`sidebar-link ${activeItem() == "/docs/ui/breadcrumbs" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Breadcrumbs</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/listmedia" className={`sidebar-link ${activeItem() == "/docs/ui/listmedia" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">List Media</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/grids" className={`sidebar-link ${activeItem() == "/docs/ui/grids" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Grids</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/carousel" className={`sidebar-link ${activeItem() == "/docs/ui/carousel" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Carousel</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/scrollspy" className={`sidebar-link ${activeItem() == "/docs/ui/scrollspy" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Scrollspy</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/toasts" className={`sidebar-link ${activeItem() == "/docs/ui/toasts" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Toasts</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/docs/ui/spinner" className={`sidebar-link ${activeItem() == "/docs/ui/spinner" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Spinner</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* multi level */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Support</span>
            </li>
            <li className={`sidebar-item ${activeItem().includes("/version/") ? "selected" : ""}`}>
              <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="ti ti-archive" />
                </span>
                <span className="hide-menu">Support</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className={`sidebar-item`}>
                  <a href="/docs/version/changeLog" className={`sidebar-link ${activeItem() == "/docs/version/changeLog" ? "active" : ""}`}>
                    <i className="ti ti-refresh-dot" />
                    <span className="hide-menu">Change Log</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
  );
}
