
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
export default function Badge() {
  return (
    <>
      <div class="container-fluid mw-100">
        <div class="page-titles mb-7 mb-md-5">
          <div class="row">
            <div class="col-lg-8 col-md-6 col-12 align-self-center">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb align-items-center">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">
                      <i class="ti ti-home fs-5" />
                    </a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">Badges</li>
                </ol>
              </nav>
              <h2 class="mb-0 fw-bolder fs-8">Badges</h2>
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
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="mb-4 card-title">Badges</h4>
                <h1>Example heading
                  <span class="badge text-bg-secondary">New</span>
                </h1>
                <h2>Example heading
                  <span class="badge text-bg-secondary">New</span>
                </h2>
                <h3>Example heading
                  <span class="badge text-bg-secondary">New</span>
                </h3>
                <h4>Example heading
                  <span class="badge text-bg-secondary">New</span>
                </h4>
                <h5>Example heading
                  <span class="badge text-bg-secondary">New</span>
                </h5>
                <h6>Example heading
                  <span class="badge text-bg-secondary">New</span>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="mb-4 card-title">Badges with button</h4>
                <h6>Right Align Badge</h6>
                <div class="row gap-2">
                  <div class="col-md-5">
                    <button type="button" class="btn d-flex bg-primary-subtle w-100 d-block text-primary ">Primary
                      <span class="badge ms-auto text-bg-primary">1</span>
                    </button>
                  </div>
                  <div class="col-md-5">
                    <button type="button" class="btn d-flex bg-info-subtle w-100 d-block text-info ">Info
                      <span class="badge ms-auto text-bg-info">2</span>
                    </button>
                  </div>
                  <div class="col-md-5">
                    <button type="button" class="btn d-flex bg-warning-subtle w-100 d-block text-warning ">Warning
                      <span class="badge ms-auto text-bg-warning">3</span>
                    </button>
                  </div>
                  <div class="col-md-5">
                    <button type="button" class="btn d-flex bg-danger-subtle w-100 d-block text-danger ">Danger
                      <span class="badge ms-auto text-bg-danger">4</span>
                    </button>
                  </div>
                  <div class="col-md-5">
                    <button type="button" class="btn d-flex bg-success-subtle w-100 d-block text-success ">Success
                      <span class="badge ms-auto text-bg-success">5</span>
                    </button>
                  </div>
                  <div class="col-md-5">
                    <button type="button" class="btn d-flex bg-secondary-subtle w-100 d-block text-secondary ">Secondary
                      <span class="badge ms-auto text-bg-secondary">6</span>
                    </button>
                  </div>
                </div>
                <h6 class="mt-3">Left Align Badge</h6>
                <div class="row gap-2 mt-2">
                  <div class="col-md-5">
                    <button type="button" class="btn d-flex bg-primary-subtle w-100 d-block text-primary ">
                      <span class="badge me-auto text-bg-primary">1</span>Primary</button>
                  </div>
                  <div class="col-md-5">
                    <button type="button" class="btn d-flex bg-info-subtle w-100 d-block text-info ">
                      <span class="badge me-auto text-bg-info">2</span>Info</button>
                  </div>
                  <div class="col-md-5">
                    <button type="button" class="btn d-flex bg-warning-subtle w-100 d-block text-warning ">
                      <span class="badge me-auto text-bg-warning">3</span>Warning</button>
                  </div>
                  <div class="col-md-5">
                    <button type="button" class="btn d-flex bg-danger-subtle w-100 d-block text-danger ">
                      <span class="badge me-auto text-bg-danger">4</span>Danger</button>
                  </div>
                  <div class="col-md-5">
                    <button type="button" class="btn d-flex bg-success-subtle w-100 d-block text-success ">
                      <span class="badge me-auto text-bg-success">5</span>Success</button>
                  </div>
                  <div class="col-md-5">
                    <button type="button" class="btn d-flex bg-secondary-subtle w-100 d-block text-secondary ">
                      <span class="badge me-auto text-bg-secondary">6</span>Secondary</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="mb-4 card-title">Badges with Background</h4>
                <h6>With Solid Background</h6>
                <span class="mb-1 badge text-bg-primary">Primary</span>
                <span class="mb-1 badge text-bg-secondary">Secondary</span>
                <span class="mb-1 badge text-bg-success">Success</span>
                <span class="mb-1 badge text-bg-danger">Danger</span>
                <span class="mb-1 badge text-bg-warning">Warning</span>
                <span class="mb-1 badge text-bg-info">Info</span>
                <span class="mb-1 badge text-bg-light">Light</span>
                <span class="mb-1 badge text-bg-dark">Dark</span>
                <h6 class="mt-3 pt-3 mt-4">With Light Background</h6>
                <span class="mb-1 badge  bg-primary-subtle text-primary">Primary</span>
                <span class="mb-1 badge  bg-secondary-subtle text-secondary">Secondary</span>
                <span class="mb-1 badge  bg-success-subtle text-success">Success</span>
                <span class="mb-1 badge  bg-danger-subtle text-danger">Danger</span>
                <span class="mb-1 badge  bg-warning-subtle text-warning">Warning</span>
                <span class="mb-1 badge  bg-info-subtle text-info">Info</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-4">Badges Pill with Background</h4>
                <h6>With Solid Background</h6>
                <span class="mb-1 badge rounded-pill text-bg-primary">Primary</span>
                <span class="mb-1 badge rounded-pill text-bg-secondary">Secondary</span>
                <span class="mb-1 badge rounded-pill text-bg-success">Success</span>
                <span class="mb-1 badge rounded-pill text-bg-danger">Danger</span>
                <span class="mb-1 badge rounded-pill text-bg-warning">Warning</span>
                <span class="mb-1 badge rounded-pill text-bg-info">Info</span>
                <span class="mb-1 badge rounded-pill text-bg-light">Light</span>
                <span class="mb-1 badge rounded-pill text-bg-dark">Dark</span>
                <h6 class="mt-3 pt-3 mt-4">With Light Background</h6>
                <span class="mb-1 badge rounded-pill  bg-primary-subtle text-primary">Primary</span>
                <span class="mb-1 badge rounded-pill  bg-secondary-subtle text-secondary">Secondary</span>
                <span class="mb-1 badge rounded-pill  bg-success-subtle text-success">Success</span>
                <span class="mb-1 badge rounded-pill  bg-danger-subtle text-danger">Danger</span>
                <span class="mb-1 badge rounded-pill  bg-warning-subtle text-warning">Warning</span>
                <span class="mb-1 badge rounded-pill  bg-info-subtle text-info">Info</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
