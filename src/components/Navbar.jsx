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
            <li className={`sidebar-item ${activeItem() == "/" || activeItem() == "/eCommerce" ? "selected" : ""}`}>
              <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="ti ti-home-2" />
                </span>
                <span className="hide-menu">Dashboard</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className={`sidebar-item`}>
                  <a href="/" className={`sidebar-link ${activeItem() == "/" ? "active" : ""}`}>
                    <i className="ti ti-aperture" />
                    <span className="hide-menu">Analytical</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/eCommerce" className={`sidebar-link  ${activeItem() == "/eCommerce" ? "active" : ""}`}>
                    <i className="ti ti-shopping-cart" />
                    <span className="hide-menu">eCommerce</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Apps */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Apps</span>
            </li>
            <li className={`sidebar-item ${activeItem().includes("/app/") ? "selected" : ""}`}>
              <a className="sidebar-link two-column has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="ti ti-archive" />
                </span>
                <span className="hide-menu">Apps</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className={`sidebar-item`}>
                  <a href="/app/calendar" className={`sidebar-link ${activeItem() == "/app/calendar" ? "active" : ""}`}>
                    <i className="ti ti-calendar" />
                    <span className="hide-menu">Calendar</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/kanban" className={`sidebar-link ${activeItem() == "/app/kanban" ? "active" : ""}`}>
                    <i className="ti ti-layout-kanban" />
                    <span className="hide-menu">Kanban</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/chat" className={`sidebar-link ${activeItem() == "/app/chat" ? "active" : ""}`}>
                    <i className="ti ti-message-dots" />
                    <span className="hide-menu">Chat</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a className={`sidebar-link ${activeItem() == "/app/email" ? "active" : ""}`} href="/app/email" aria-expanded="false">
                    <span>
                      <i className="ti ti-mail" />
                    </span>
                    <span className="hide-menu">Email</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/contacttable" className={`sidebar-link ${activeItem() == "/app/contacttable" ? "active" : ""}`}>
                    <i className="ti ti-phone" />
                    <span className="hide-menu">Contact Table</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/contactlist" className={`sidebar-link ${activeItem() == "/app/contactlist" ? "active" : ""}`}>
                    <i className="ti ti-list-details" />
                    <span className="hide-menu">Contact List</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/notes" className={`sidebar-link ${activeItem() == "/app/notes" ? "active" : ""}`}>
                    <i className="ti ti-notes" />
                    <span className="hide-menu">Notes</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/invoice" className={`sidebar-link ${activeItem() == "/app/invoice" ? "active" : ""}`}>
                    <i className="ti ti-file-text" />
                    <span className="hide-menu">Invoice</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/userprofile" className={`sidebar-link ${activeItem() == "/app/userprofile" ? "active" : ""}`}>
                    <i className="ti ti-user-circle" />
                    <span className="hide-menu">User Profile</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/posts" className={`sidebar-link ${activeItem() == "/app/posts" ? "active" : ""}`}>
                    <i className="ti ti-article" />
                    <span className="hide-menu">Posts</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/detail" className={`sidebar-link ${activeItem() == "/app/detail" ? "active" : ""}`}>
                    <i className="ti ti-details" />
                    <span className="hide-menu">Detail</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/shop" className={`sidebar-link ${activeItem() == "/app/shop" ? "active" : ""}`}>
                    <i className="ti ti-shopping-cart" />
                    <span className="hide-menu">Shop</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/shopdetail" className={`sidebar-link ${activeItem() == "/app/shopdetail" ? "active" : ""}`}>
                    <i className="ti ti-basket" />
                    <span className="hide-menu">Shop Detail</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/list" className={`sidebar-link ${activeItem() == "/app/list" ? "active" : ""}`}>
                    <i className="ti ti-list-check" />
                    <span className="hide-menu">List</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/checkout" className={`sidebar-link ${activeItem() == "/app/checkout" ? "active" : ""}`}>
                    <i className="ti ti-brand-shopee" />
                    <span className="hide-menu">Checkout</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/addproduct" className={`sidebar-link ${activeItem() == "/app/addproduct" ? "active" : ""}`}>
                    <i className="ti ti-file-plus" />
                    <span className="hide-menu">Add Product</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/app/editproduct" className={`sidebar-link ${activeItem() == "/app/editproduct" ? "active" : ""}`}>
                    <i className="ti ti-file-pencil" />
                    <span className="hide-menu">Edit Product</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* PAGES */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">PAGES</span>
            </li>
            <li className={`sidebar-item ${activeItem().includes("/pages/") ? "selected" : ""}`}>
              <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="ti ti-notebook" />
                </span>
                <span className="hide-menu">Pages</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className={`sidebar-item`}>
                  <a href="/pages/faq" className={`sidebar-link ${activeItem() == "/pages/faq" ? "active" : ""}`}>
                    <i className="ti ti-help" />
                    <span className="hide-menu">FAQ</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/pages/accountSetting" className={`sidebar-link ${activeItem() == "/pages/accountSetting" ? "active" : ""}`}>
                    <i className="ti ti-user-circle" />
                    <span className="hide-menu">Account Setting</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/pages/pricing" className={`sidebar-link ${activeItem() == "/pages/pricing" ? "active" : ""}`}>
                    <i className="ti ti-currency-dollar" />
                    <span className="hide-menu">Pricing</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/pages/card" className={`sidebar-link ${activeItem() == "/pages/card" ? "active" : ""}`}>
                    <i className="ti ti-cards" />
                    <span className="hide-menu">Card</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/pages/banner" className={`sidebar-link ${activeItem() == "/pages/banner" ? "active" : ""}`}>
                    <i className="ti ti-ad" />
                    <span className="hide-menu">Banner</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/pages/charts" className={`sidebar-link ${activeItem() == "/pages/charts" ? "active" : ""}`}>
                    <i className="ti ti-chart-bar" />
                    <span className="hide-menu">Charts</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/pages/landingPage" className={`sidebar-link ${activeItem() == "/pages/landingPage" ? "active" : ""}`}>
                    <i className="ti ti-app-window" />
                    <span className="hide-menu">Landing Page</span>
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
            <li className={`sidebar-item mega-dropdown ${activeItem().includes("/ui/") ? "selected" : ""}`}>
              <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-layout-grid" />
                </span>
                <span className="hide-menu">UI</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className={`sidebar-item`}>
                  <a href="/ui/accordion" className={`sidebar-link ${activeItem() == "/ui/accordion" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Accordian</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/badge" className={`sidebar-link ${activeItem() == "/ui/badge" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Badge</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/buttons" className={`sidebar-link ${activeItem() == "/ui/buttons" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Buttons</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/dropdowns" className={`sidebar-link ${activeItem() == "/ui/dropdowns" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Dropdowns</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/modals" className={`sidebar-link ${activeItem() == "/ui/modals" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Modals</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/tabs" className={`sidebar-link ${activeItem() == "/ui/tabs" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Tab</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/tooltipPopover" className={`sidebar-link ${activeItem() == "/ui/tooltipPopover" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Tooltip &amp; Popover</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/notification" className={`sidebar-link ${activeItem() == "/ui/notification" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Alerts</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/progressbar" className={`sidebar-link ${activeItem() == "/ui/progressbar" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Progressbar</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/pagination" className={`sidebar-link ${activeItem() == "/ui/pagination" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Pagination</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/typography" className={`sidebar-link ${activeItem() == "/ui/typography" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Typography</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/bootstrapUI" className={`sidebar-link ${activeItem() == "/ui/bootstrapUI" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Bootstrap UI</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/breadcrumb" className={`sidebar-link ${activeItem() == "/ui/breadcrumb" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Breadcrumb</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/offcanvas" className={`sidebar-link ${activeItem() == "/ui/offcanvas" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Offcanvas</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/lists" className={`sidebar-link ${activeItem() == "/ui/lists" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Lists</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/grid" className={`sidebar-link ${activeItem() == "/ui/grid" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Grid</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/carousel" className={`sidebar-link ${activeItem() == "/ui/carousel" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Carousel</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/scrollspy" className={`sidebar-link ${activeItem() == "/ui/scrollspy" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Scrollspy</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/spinner" className={`sidebar-link ${activeItem() == "/ui/spinner" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Spinner</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/ui/link" className={`sidebar-link ${activeItem() == "/ui/link" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Link</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Forms */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Forms</span>
            </li>
            {/* =================== */}
            {/* Forms */}
            {/* =================== */}
            <li className={`sidebar-item ${activeItem().includes("/forms/") ? "selected" : ""}`}>
              <a className="sidebar-link two-column has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-file-text" />
                </span>
                <span className="hide-menu">Forms</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                {/* form elements */}
                <li className={`sidebar-item`}>
                  <a href="/forms/Input" className={`sidebar-link ${activeItem() == "/forms/Input" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Forms Input</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/forms/inputGroups" className={`sidebar-link ${activeItem() == "/forms/inputGroups" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Input Groups</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/forms/inputGrid" className={`sidebar-link ${activeItem() == "/forms/inputGrid" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Input Grid</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/forms/checkboxRadios" className={`sidebar-link ${activeItem() == "/forms/checkboxRadios" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Checkbox &amp; Radios</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/forms/bootstrapSwitch" className={`sidebar-link ${activeItem() == "/forms/bootstrapSwitch" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Bootstrap Switch</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/forms/select2" className={`sidebar-link ${activeItem() == "/forms/select2" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Select2</span>
                  </a>
                </li>
                {/* form inputs */}
                <li className={`sidebar-item`}>
                  <a href="/forms/basicForm" className={`sidebar-link ${activeItem() == "/forms/basicForm" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Basic Form</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/forms/vertical" className={`sidebar-link ${activeItem() == "/forms/vertical" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Form Vertical</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/forms/horizontal" className={`sidebar-link ${activeItem() == "/forms/horizontal" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Form Horizontal</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/forms/actions" className={`sidebar-link ${activeItem() == "/forms/actions" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Form Actions</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/forms/rowSeparator" className={`sidebar-link ${activeItem() == "/forms/rowSeparator" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Row Separator</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/forms/bordered" className={`sidebar-link ${activeItem() == "/forms/bordered" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Form Bordered</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/forms/detail" className={`sidebar-link ${activeItem() == "/forms/detail" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Form Detail</span>
                  </a>
                </li>
                {/* form wizard */}
                <li className={`sidebar-item`}>
                  <a href="/forms/wizard" className={`sidebar-link ${activeItem() == "/forms/wizard" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Form Wizard</span>
                  </a>
                </li>
                {/* Quill Editor */}
                <li className={`sidebar-item`}>
                  <a href="/forms/quillEditor" className={`sidebar-link ${activeItem() == "/forms/quillEditor" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Quill Editor</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Tables */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Tables</span>
            </li>
            {/* =================== */}
            {/* Bootstrap Table */}
            {/* =================== */}
            <li className={`sidebar-item ${activeItem().includes("/table/") ? "selected" : ""}`}>
              <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-layout-sidebar" />
                </span>
                <span className="hide-menu">Tables</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className={`sidebar-item`}>
                  <a href="/table/basic" className={`sidebar-link ${activeItem() == "/table/basic" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Basic Table</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/table/darkBasic" className={`sidebar-link ${activeItem() == "/table/darkBasic" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Dark Basic Table</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/table/sizing" className={`sidebar-link ${activeItem() == "/table/sizing" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Sizing Table</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/table/layoutColoured" className={`sidebar-link ${activeItem() == "/table/layoutColoured" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Coloured Table</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/table/datatableBasic" className={`sidebar-link ${activeItem() == "/table/datatableBasic" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Basic Initialisation</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/table/datatableApi" className={`sidebar-link ${activeItem() == "/table/datatableApi" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">API</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/table/datatableAdvanced" className={`sidebar-link ${activeItem() == "/table/datatableAdvanced" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Advanced Initialisation</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Charts */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Charts</span>
            </li>
            {/* =================== */}
            {/* Apex Chart */}
            {/* =================== */}
            <li className={`sidebar-item ${activeItem().includes("/chart-apex") ? "selected" : ""}`}>
              <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-chart-pie" />
                </span>
                <span className="hide-menu">Charts</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className={`sidebar-item`}>
                  <a href="/chart/apexLine" className={`sidebar-link ${activeItem() == "/chart-apex-line" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Line Chart</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/chart/apexArea" className={`sidebar-link ${activeItem() == "/chart-apex-area" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Area Chart</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/chart/apexBar" className={`sidebar-link ${activeItem() == "/chart-apex-bar" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Bar Chart</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/chart/apexPie" className={`sidebar-link ${activeItem() == "/chart-apex-pie" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Pie Chart</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/chart/apexRadial" className={`sidebar-link ${activeItem() == "/chart-apex-radial" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Radial Chart</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/chart/apexRadar" className={`sidebar-link ${activeItem() == "/chart-apex-radar" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Radar Chart</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Icons */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Icons</span>
            </li>
            {/* =================== */}
            {/* Tabler Icon */}
            {/* =================== */}
            <li className={`sidebar-item ${activeItem().includes("/icon/") ? "selected" : ""}`}>
              <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-archive" />
                </span>
                <span className="hide-menu">Icon</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className={`sidebar-item`}>
                  <a href="/icon/tabler" className={`sidebar-link ${activeItem() == "/icon/tabler" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Tabler Icon</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="/icon/solar" className={`sidebar-link ${activeItem() == "/icon/solar" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Solar Icon</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* multi level */}
            <li className={`sidebar-item ${activeItem().includes("/docs/") ? "selected" : ""}`}>
              <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span className="rounded-3">
                  <iconify-icon icon="solar:airbuds-case-minimalistic-line-duotone" className="ti" />
                </span>
                <span className="hide-menu">Multi DD</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className={`sidebar-item`}>
                  <a href="/docs/introduction" className={`sidebar-link ${activeItem() == "/app/checkout" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Documentation</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="javascript:void(0)" className={`sidebar-link ${activeItem() == "/" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Page 1</span>
                  </a>
                </li>
                <li className={`sidebar-item`}>
                  <a href="javascript:void(0)" className="sidebar-link has-arrow">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Page 2</span>
                  </a>
                  <ul aria-expanded="false" className="collapse second-level">
                    <li className={`sidebar-item`}>
                      <a href="javascript:void(0)" className={`sidebar-link ${activeItem() == "/" ? "active" : ""}`}>
                        <i className="ti ti-circle" />
                        <span className="hide-menu">Page 2.1</span>
                      </a>
                    </li>
                    <li className={`sidebar-item`}>
                      <a href="javascript:void(0)" className={`sidebar-link ${activeItem() == "/" ? "active" : ""}`}>
                        <i className="ti ti-circle" />
                        <span className="hide-menu">Page 2.2</span>
                      </a>
                    </li>
                    <li className={`sidebar-item`}>
                      <a href="javascript:void(0)" className={`sidebar-link ${activeItem() == "/" ? "active" : ""}`}>
                        <i className="ti ti-circle" />
                        <span className="hide-menu">Page 2.3</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={`sidebar-item`}>
                  <a href="javascript:void(0)" className={`sidebar-link ${activeItem() == "/" ? "active" : ""}`}>
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Page 3</span>
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
