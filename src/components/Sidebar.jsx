import { darkLogo, lightLogo } from "../helper/icon";
import { SidebarBuynow } from "../helper/img"

export default function Sidebar() {
    return (
        <aside class="left-sidebar with-vertical">
            <div>
                <nav class="sidebar-nav scroll-sidebar" data-simplebar="init">
                    <div class="simplebar-wrapper" style={{ "margin": "-10px" }}>
                        <div class="simplebar-height-auto-observer-wrapper">
                            <div class="simplebar-height-auto-observer">
                            </div>
                        </div>
                        <div class="simplebar-mask">
                            <div class="simplebar-offset" style={{ "right": "0px", "bottom": "0px" }}>
                                <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ "height": "auto", "overflow": "hidden" }}>
                                    <div class="simplebar-content" style={{ "padding": "10px" }}>
                                        <ul id="sidebarnav">
                                            <li class="nav-small-cap">
                                                <i class="ti ti-dots nav-small-cap-icon fs-4" />
                                                <span class="hide-menu">Home</span>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="./" id="get-url" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-aperture" />
                                                    </span>
                                                    <span class="hide-menu">Analytical</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link active" href="../horizontal/index2.html" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-shopping-cart" />
                                                    </span>
                                                    <span class="hide-menu">eCommerce</span>
                                                </a>
                                            </li>
                                            <li class="nav-small-cap">
                                                <i class="ti ti-dots nav-small-cap-icon fs-4" />
                                                <span class="hide-menu">Apps</span>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="/app/calendar" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-calendar" />
                                                    </span>
                                                    <span class="hide-menu">Calendar</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="../horizontal/app-kanban.html" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-layout-kanban" />
                                                    </span>
                                                    <span class="hide-menu">Kanban</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="/app/chat" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-message-dots" />
                                                    </span>
                                                    <span class="hide-menu">Chat</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="/app/email" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-mail" />
                                                    </span>
                                                    <span class="hide-menu">Email</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="/app/notes" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-notes" />
                                                    </span>
                                                    <span class="hide-menu">Notes</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="/app/contacttable" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-phone" />
                                                    </span>
                                                    <span class="hide-menu">Contact Table</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="/app/contactlist" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-list-details" />
                                                    </span>
                                                    <span class="hide-menu">Contact List</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="/app/invoice" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-file-text" />
                                                    </span>
                                                    <span class="hide-menu">Invoice</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="/app/userprofile" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-user-circle" />
                                                    </span>
                                                    <span class="hide-menu">User Profile</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-chart-donut-3" />
                                                    </span>
                                                    <span class="hide-menu">Blog</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/blog-posts.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Posts</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/blog-detail.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Details</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-basket" />
                                                    </span>
                                                    <span class="hide-menu">Ecommerce</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/eco-shop.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Shop</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/eco-shop-detail.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Details</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/eco-product-list.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">List</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/eco-checkout.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Checkout</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/eco-add-product.html" class="sidebar-link">
                                                            <i class="ti ti-file-plus" />
                                                            <span class="hide-menu">Add Product</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/eco-edit-product.html" class="sidebar-link">
                                                            <i class="ti ti-file-pencil" />
                                                            <span class="hide-menu">Edit Product</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-small-cap">
                                                <i class="ti ti-dots nav-small-cap-icon fs-4" />
                                                <span class="hide-menu">PAGES</span>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="/pages/pricing" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-currency-dollar" />
                                                    </span>
                                                    <span class="hide-menu">Pricing</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="../horizontal/page-faq.html" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-help" />
                                                    </span>
                                                    <span class="hide-menu">FAQ</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="/pages/accountSetting" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-user-circle" />
                                                    </span>
                                                    <span class="hide-menu">Account Setting</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="../landingpage/index.html" aria-expanded="false">
                                                    <span>
                                                        <i class="ti ti-app-window" />
                                                    </span>
                                                    <span class="hide-menu">Landing Page</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-layout" />
                                                    </span>
                                                    <span class="hide-menu">Widgets</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/widgets-cards.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Cards</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/widgets-banners.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Banner</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/widgets-charts.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Charts</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/widgets-feeds.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Feed Widgets</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/widgets-apps.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Apps Widgets</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/widgets-data.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Data Widgets</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-small-cap">
                                                <i class="ti ti-dots nav-small-cap-icon fs-4" />
                                                <span class="hide-menu">UI</span>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-layout-grid" />
                                                    </span>
                                                    <span class="hide-menu">UI Elements</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-accordian.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Accordian</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-badge.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Badge</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-buttons.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Buttons</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-dropdowns.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Dropdowns</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-modals.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Modals</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-tab.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Tab</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-tooltip-popover.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Tooltip &amp; Popover</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-notification.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Alerts</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-progressbar.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Progressbar</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-pagination.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Pagination</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-typography.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Typography</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-bootstrap-ui.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Bootstrap UI</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-breadcrumb.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Breadcrumb</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-offcanvas.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Offcanvas</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-lists.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Lists</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-grid.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Grid</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-carousel.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Carousel</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-scrollspy.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Scrollspy</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-spinner.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Spinner</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item mb-3">
                                                        <a href="../horizontal/ui-link.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Link</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-cards" />
                                                    </span>
                                                    <span class="hide-menu">Cards</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-cards.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Basic Cards</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-card-customs.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Custom Cards</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-card-weather.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Weather Cards</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/ui-card-draggable.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Draggable Cards</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-components" />
                                                    </span>
                                                    <span class="hide-menu">Component</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/component-sweetalert.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Sweet Alert</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/component-nestable.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Nestable</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/component-noui-slider.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Noui slider</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/component-rating.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Rating</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/component-toastr.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Toastr</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-small-cap">
                                                <i class="ti ti-dots nav-small-cap-icon fs-4" />
                                                <span class="hide-menu">Forms</span>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-file-text" />
                                                    </span>
                                                    <span class="hide-menu">Form Elements</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-inputs.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Forms Input</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-input-groups.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Input Groups</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-input-grid.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Input Grid</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-checkbox-radio.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Checkbox &amp; Radios</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-bootstrap-switch.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Bootstrap Switch</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-select2.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Select2</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-qrcode" />
                                                    </span>
                                                    <span class="hide-menu">Form Addons</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-dropzone.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Dropzone</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-mask.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Form Mask</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-typeahead.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Form Typehead</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-alert-circle" />
                                                    </span>
                                                    <span class="hide-menu">Form Validation</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-bootstrap-validation.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Bootstrap Validation</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-custom-validation.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Custom Validation</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-file-pencil" />
                                                    </span>
                                                    <span class="hide-menu">Form Pickers</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-picker-colorpicker.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Colorpicker</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-picker-bootstrap-rangepicker.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">BT Rangepicker</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-picker-bootstrap-datepicker.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">BT Datepicker</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-picker-material-datepicker.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">MT Datepicker</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-dna" />
                                                    </span>
                                                    <span class="hide-menu">Form Editor</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-editor-quill.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Quill Editor</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/form-editor-tinymce.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Tinymce Editor</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="../horizontal/form-basic.html" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-archive" />
                                                    </span>
                                                    <span class="hide-menu">Basic Form</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="../horizontal/form-vertical.html" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-box-align-left" />
                                                    </span>
                                                    <span class="hide-menu">Form Vertical</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="../horizontal/form-horizontal.html" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-box-align-bottom" />
                                                    </span>
                                                    <span class="hide-menu">Form Horizontal</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="../horizontal/form-actions.html" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-file-export" />
                                                    </span>
                                                    <span class="hide-menu">Form Actions</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="../horizontal/form-row-separator.html" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-separator-horizontal" />
                                                    </span>
                                                    <span class="hide-menu">Row Separator</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="../horizontal/form-bordered.html" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-border-outer" />
                                                    </span>
                                                    <span class="hide-menu">Form Bordered</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="../horizontal/form-detail.html" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-file-description" />
                                                    </span>
                                                    <span class="hide-menu">Form Detail</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="../horizontal/form-striped-row.html" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-file-analytics" />
                                                    </span>
                                                    <span class="hide-menu">Striped Rows</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="../horizontal/form-floating-input.html" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-file-dots" />
                                                    </span>
                                                    <span class="hide-menu">Form Floating Input</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="../horizontal/form-wizard.html" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-files" />
                                                    </span>
                                                    <span class="hide-menu">Form Wizard</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="../horizontal/form-repeater.html" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-topology-star-3" />
                                                    </span>
                                                    <span class="hide-menu">Form Repeater</span>
                                                </a>
                                            </li>
                                            <li class="nav-small-cap">
                                                <i class="ti ti-dots nav-small-cap-icon fs-4" />
                                                <span class="hide-menu">Tables</span>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-layout-sidebar" />
                                                    </span>
                                                    <span class="hide-menu">Bootstrap Table</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/table-basic.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Basic Table</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/table-dark-basic.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Dark Basic Table</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/table-sizing.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Sizing Table</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item mb-3">
                                                        <a href="../horizontal/table-layout-coloured.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Coloured Table</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-air-conditioning-disabled" />
                                                    </span>
                                                    <span class="hide-menu">Datatables</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/table-datatable-basic.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Basic Initialisation</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/table-datatable-api.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">API</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/table-datatable-advanced.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Advanced Initialisation</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-small-cap">
                                                <i class="ti ti-dots nav-small-cap-icon fs-4" />
                                                <span class="hide-menu">Charts</span>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-chart-pie" />
                                                    </span>
                                                    <span class="hide-menu">Apex Charts</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/chart-apex-line.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Line Chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/chart-apex-area.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Area Chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/chart-apex-bar.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Bar Chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/chart-apex-pie.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Pie Chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/chart-apex-radial.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Radial Chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item mb-3">
                                                        <a href="../horizontal/chart-apex-radar.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Radar Chart</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-small-cap">
                                                <i class="ti ti-dots nav-small-cap-icon fs-4" />
                                                <span class="hide-menu">Sample Pages</span>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-file" />
                                                    </span>
                                                    <span class="hide-menu">Sample Pages</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/pages-animation.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Animation</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/pages-search-result.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Search Result</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/pages-gallery.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Gallery</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/pages-treeview.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Treeview</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/pages-block-ui.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Block-Ui</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item mb-3">
                                                        <a href="../horizontal/pages-session-timeout.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Session Timeout</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-small-cap">
                                                <i class="ti ti-dots nav-small-cap-icon fs-4" />
                                                <span class="hide-menu">Icons</span>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link sidebar-link" href="../horizontal/icon-tabler.html" aria-expanded="false">
                                                    <span class="rounded-3">
                                                        <i class="ti ti-archive" />
                                                    </span>
                                                    <span class="hide-menu">Tabler Icon</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link sidebar-link" href="../horizontal/icon-solar.html" aria-expanded="false">
                                                    <span class="rounded-3">
                                                        <i class="ti ti-mood-smile" />
                                                    </span>
                                                    <span class="hide-menu">Solar Icon</span>
                                                </a>
                                            </li>
                                            <li class="nav-small-cap">
                                                <i class="ti ti-dots nav-small-cap-icon fs-4" />
                                                <span class="hide-menu">AUTH</span>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link sidebar-link" href="/Error" aria-expanded="false">
                                                    <span class="rounded-3">
                                                        <i class="ti ti-alert-circle" />
                                                    </span>
                                                    <span class="hide-menu">Error</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-login" />
                                                    </span>
                                                    <span class="hide-menu">Login</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="/login" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Side Login</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/authentication-login2.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Boxed Login</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-user-plus" />
                                                    </span>
                                                    <span class="hide-menu">Register</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="/register" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Side Register</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/authentication-register2.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Boxed Register</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-rotate" />
                                                    </span>
                                                    <span class="hide-menu">Forgot Password</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/authentication-forgot-password.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Side Forgot Pwd</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/authentication-forgot-password2.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Boxed Forgot Pwd</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-zoom-code" />
                                                    </span>
                                                    <span class="hide-menu">Two Steps</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/authentication-two-steps.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Side Two Steps</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a href="../horizontal/authentication-two-steps2.html" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Boxed Two Steps</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link sidebar-link" href="../horizontal/authentication-maintenance.html" aria-expanded="false">
                                                    <span class="rounded-3">
                                                        <i class="ti ti-settings" />
                                                    </span>
                                                    <span class="hide-menu">Maintenance</span>
                                                </a>
                                            </li>
                                            <li class="nav-small-cap">
                                                <i class="ti ti-dots nav-small-cap-icon fs-4" />
                                                <span class="hide-menu">DOCUMENTATION</span>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link sidebar-link" href="../docs/index.html" aria-expanded="false">
                                                    <span class="rounded-3">
                                                        <i class="ti ti-file-text" />
                                                    </span>
                                                    <span class="hide-menu">Getting Started</span>
                                                </a>
                                            </li>
                                            <li class="nav-small-cap">
                                                <i class="ti ti-dots nav-small-cap-icon fs-4" />
                                                <span class="hide-menu">OTHER</span>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-box-multiple" />
                                                    </span>
                                                    <span class="hide-menu">Menu Level</span>
                                                </a>
                                                <ul aria-expanded="false" class="collapse first-level">
                                                    <li class="sidebar-item">
                                                        <a href="javascript:void(0)" class="sidebar-link">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Level 1</span>
                                                        </a>
                                                    </li>
                                                    <li class="sidebar-item">
                                                        <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                <i class="ti ti-circle" />
                                                            </div>
                                                            <span class="hide-menu">Level 1.1</span>
                                                        </a>
                                                        <ul aria-expanded="false" class="collapse two-level">
                                                            <li class="sidebar-item">
                                                                <a href="javascript:void(0)" class="sidebar-link">
                                                                    <div class="round-16 d-flex align-items-center justify-content-center">
                                                                        <i class="ti ti-circle" />
                                                                    </div>
                                                                    <span class="hide-menu">Level 2</span>
                                                                </a>
                                                            </li>
                                                            <li class="sidebar-item">
                                                                <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                                                                    <div class="round-16 d-flex align-items-center justify-content-center">
                                                                        <i class="ti ti-circle" />
                                                                    </div>
                                                                    <span class="hide-menu">Level 2.1</span>
                                                                </a>
                                                                <ul aria-expanded="false" class="collapse three-level">
                                                                    <li class="sidebar-item">
                                                                        <a href="javascript:void(0)" class="sidebar-link">
                                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                                <i class="ti ti-circle" />
                                                                            </div>
                                                                            <span class="hide-menu">Level 3</span>
                                                                        </a>
                                                                    </li>
                                                                    <li class="sidebar-item">
                                                                        <a href="javascript:void(0)" class="sidebar-link">
                                                                            <div class="round-16 d-flex align-items-center justify-content-center">
                                                                                <i class="ti ti-circle" />
                                                                            </div>
                                                                            <span class="hide-menu">Level 3.1</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link link-disabled" href="#disabled" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-ban" />
                                                    </span>
                                                    <span class="hide-menu">Disabled</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="#sub" aria-expanded="false">
                                                    <i class="ti ti-star" />
                                                    <div class="hide-menu lh-base">
                                                        <span class="hide-menu d-block">SubCaption</span>
                                                        <span class="hide-menu d-block fs-2">This is the sutitle</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link justify-content-between" href="#chip" aria-expanded="false">
                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="d-flex">
                                                            <i class="ti ti-award" />
                                                        </span>
                                                        <span class="hide-menu">Chip</span>
                                                    </div>
                                                    <div class="hide-menu">
                                                        <span class="badge rounded-circle bg-primary d-flex align-items-center justify-content-center rounded-pill fs-2">9</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link justify-content-between" href="#outlined" aria-expanded="false">
                                                    <div class="d-flex align-items-center gap-3">
                                                        <span class="d-flex">
                                                            <i class="ti ti-mood-smile" />
                                                        </span>
                                                        <span class="hide-menu">Outlined</span>
                                                    </div>
                                                    <span class="hide-menu badge rounded-pill border border-primary text-primary fs-2 py-1 px-2">Outline</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="https://google.com" aria-expanded="false">
                                                    <span class="d-flex">
                                                        <i class="ti ti-star" />
                                                    </span>
                                                    <span class="hide-menu">External Link</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="simplebar-placeholder" style={{ "width": "0px", "height": "0px" }}>
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
                </nav>
                <div class="fixed-profile px-4 py-9 mx-4 mb-2 bg-primary-subtle rounded mt-7 position-relative">
                    <div class="sidebar-footer-text position-relative z-1">
                        <h4 class="fw-bolder fs-5">Upgrade to</h4>
                        <h4 class="fw-bolder fs-5">Premium</h4>
                        <a href="javascript:void(0)" class="btn btn-primary mt-2">Upgrade</a>
                    </div>
                    <img src={SidebarBuynow} alt="" class="buynow-img img-fluid position-absolute end-0 bottom-0" />
                </div>
            </div>
        </aside>
    )
}