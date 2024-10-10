import { darkLogo } from '../../../helper/icon';
import { landingLeft, landingRight, checkMail, landingFavicon } from '../../../helper/img';


export default function LandingPage() {
  return (
    <>
          <div class="landingpage">
  <div class="main-wrapper">
    <header class="topheader py-3" id="top">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light ps-0">
          {/* Logo will be here */}
          <a class="navbar-brand" href="/pages/landingPage">
            <img src={darkLogo} alt="img-fluid" />
          </a>
          {/*Toggle button*/}
          <button class="navbar-toggler navbar-toggler-right border-0 p-0 fs-8" type="button" data-bs-toggle="offcanvas" href="#right-sidebar">
            <iconify-icon icon="solar:hamburger-menu-line-duotone" />
          </button>
          {/* This is the navigation menu */}
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto stylish-nav">
              <li class="nav-item">
                <a class="nav-link scroll-link" href="/">Apps</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../docs/index.html" target="_blank">Documentation</a>
              </li>
              <li class="nav-item ms-3 mt-2 mt-md-0">
                <a class="btn btn-primary" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    {/* mobile sidebar */}
    <div class="offcanvas offcanvas-end" tabindex="-1" id="right-sidebar" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menus</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav stylish-nav">
          <li class="nav-item">
            <a class="nav-link scroll-link" href="/">Apps</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/docs/index.html" target="_blank">Documentation</a>
          </li>
          <li class="nav-item mt-4">
            <a class="btn btn-primary w-100" href="/login">Login</a>
          </li>
        </ul>
      </div>
    </div>
    {/* start banner */}
    <section class="hero-section position-relative overflow-hidden mb-0 mb-lg-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6">
            <div class="hero-content my-5 my-xl-0">
              <h6 class="d-flex align-items-center gap-2 fs-4 fw-semibold mb-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <i class="ti ti-rocket fs-6" />Kick start
                your project with
              </h6>
              <h1 class="fw-bolder mb-7 fs-13 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                Easy to Customize
                <span class="text-primary"> Admin Dashboard</span>
              </h1>
              <p class="fs-5 mb-5 text-dark fw-normal w-85 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                Flexy Admin comes with light &amp; dark color skins, well designed
                dashboards, applications and pages.
              </p>
              <div class="d-sm-flex align-items-center gap-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                <a class="btn btn-primary px-5 py-6 btn-hover-shadow d-block mb-3 mb-sm-0" href="/login">Login</a>
                <a class="btn btn-outline-primary d-block scroll-link px-7 py-6" href="/">Live Preview</a>
              </div>
            </div>
          </div>
          <div class="col-xl-6 d-none d-xl-block">
            <div class="hero-img-slide position-relative bg-info-subtle p-4 rounded">
              <div class="d-flex flex-row">
                <div class>
                  <div class="banner-img-1 slideup">
                    <img src={landingLeft} alt="" class="img-fluid" />
                  </div>
                  <div class="banner-img-1 slideup">
                    <img src={landingLeft} alt="" class="img-fluid" />
                  </div>
                </div>
                <div class>
                  <div class="banner-img-2 slideDown">
                    <img src={landingRight} alt="" class="img-fluid" />
                  </div>
                  <div class="banner-img-2 slideDown">
                    <img src={landingRight} alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end banner */}
    {/* demos start */}
    {/* demos end */}
    {/* apps start */}
    {/* apps end */}
    {/* features */}
    {/* end features */}
    <div class="text-bg-primary py-2">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-7 col-xl-5  mb-lg-0">
            <h2 class="fs-8 text-white text-center text-lg-start fw-bold mb-7">
              Build your app with our highly customizable Bootstrap based
              Dashboard
            </h2>
            <div class="d-sm-flex align-items-center justify-content-center justify-content-lg-start gap-3">
              <a href="/login" class="btn bg-white text-primary fw-semibold d-block mb-3 mb-sm-0 btn-hover-shadow px-7 py-6">Login</a>
              <a href="/register" class="btn border-white text-white fw-semibold btn-hover-white d-block px-7 py-6">Register</a>
            </div>
          </div>
          <div class="col-lg-5 col-xl-5">
            <div class="text-center text-lg-end">
              <img src={checkMail} alt="" width="400" height="400" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end */}
    {/* start footer */}
    <footer class="text-center py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4">
            <span>
              <img src={landingFavicon} alt="logo" />
            </span>
            <div class="mt-2">
              <span>All rights reserved by Flexy. Designed &amp; Developed by
                <a href="https://www.wrappixel.com/" class="text-primary">wrappixel</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>
    </>
  );
}
