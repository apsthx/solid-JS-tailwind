import { User3, Gold, TrackBg, WebsiteUnderConstruction, WelcomeBg2, emptyShoppingCart } from "../../../helper/img";

export default function Banner() {
  return (
    <>
        <div class="container-fluid mw-100">
        <div class="page-titles mb-7 mb-md-5">
          <div class="row">
            <div class="col-lg-8 col-md-6 col-12 align-self-center">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb align-items-center">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="../minisidebar/index.html">
                      <i class="ti ti-home fs-5" />
                    </a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">Banner</li>
                </ol>
              </nav>
              <h2 class="mb-0 fw-bolder fs-8">Banner</h2>
            </div>
            <div class="col-lg-4 col-md-6 d-none d-md-flex align-items-center justify-content-end">
              <select class="form-select w-auto bg-primary-subtle border-0" aria-label="Default select example">
                <option selected>Today 23 March</option>
                <option value="1">Today 23 March</option>
                <option value="2">Today 24 March</option>
                <option value="3">Today 25 March</option>
              </select>
              <a href="javascript:void(0)" class="btn btn-primary d-flex align-items-center ms-2">
                <i class="ti ti-plus me-1" />Add New</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="card bg-primary-gt text-white overflow-hidden shadow-none">
              <div class="card-body">
                <div class="row justify-content-between align-items-center">
                  <div class="col-sm-6">
                    <h5 class="fw-semibold mb-9 fs-5 text-white">Welcome back Natalia!</h5>
                    <p class="mb-9 opacity-75">You have earned 54% more than last month which is great thing.</p>
                    <button type="button" class="btn btn-danger">Check</button>
                  </div>
                  <div class="col-sm-5">
                    <div class="position-relative mb-n7 text-end">
                      <img src={WelcomeBg2} alt="flexy-img" class="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bg-info-subtle overflow-hidden shadow-none">
              <div class="card-body py-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-sm-6">
                    <h5 class="fw-semibold mb-9 fs-5">Track your every Transaction Easily</h5>
                    <p class="mb-9">Track and record your every income and expence easily to control your balance</p>
                    <button class="btn btn-info">Download</button>
                  </div>
                  <div class="col-sm-5">
                    <div class="position-relative mb-n5 text-center">
                      <img src={TrackBg} alt="flexy-img" class="img-fluid" width="180" height="230" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-body text-center">
                    <img src={WebsiteUnderConstruction} alt="flexy-img" class="img-fluid mb-4" width="200" />
                    <h5 class="fw-semibold fs-5 mb-2">Oops something went wrong!</h5>
                    <p class="mb-3 px-xl-5">Trying again to bypasses these temporary error.</p>
                    <button class="btn btn-danger">Retry</button>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card">
                  <div class="card-body text-center">
                    <img src={emptyShoppingCart} alt="flexy-img" class="img-fluid mb-4" width="200" />
                    <h5 class="fw-semibold fs-5 mb-2">Oop, Your cart is empty!</h5>
                    <p class="mb-3">Get back to shopping and get rewards from it.</p>
                    <button class="btn btn-primary">Go for shopping!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body text-center">
                <p>LEVEL UP</p>
                <img src={Gold} alt="flexy-img" class="img-fluid mb-4" width="150" />
                <h5 class="fw-semibold fs-5 mb-2">You reach all Notifications</h5>
                <p class="mb-3 px-xl-5">Congratulations, Tap to continue next task.</p>
                <button class="btn btn-primary">Yes, Got it!</button>
              </div>
            </div>
            <div class="card">
              <div class="card-body text-center">
                <h5 class="fw-semibold fs-5 mb-4">Mutual Friend Revealed</h5>
                <div class="position-relative overflow-hidden d-inline-block">
                  <img src={User3} alt="flexy-img" class="img-fluid mb-4 rounded-circle position-relative" width="140" />
                  <span class="badge round-20 text-bg-danger fs-2 position-absolute top-0 end-0 d-flex align-items-center justify-content-center me-3 mt-2">1</span>
                </div>
                <h5 class="fw-semibold fs-5 mb-2">Tommoie Henderson</h5>
                <p class="mb-3 px-xl-5">Accept the request and type a message</p>
                <div class="d-flex align-items-center justify-content-center gap-3">
                  <button class="btn btn-primary">Accept</button>
                  <button class="btn bg-danger-subtle text-danger">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
