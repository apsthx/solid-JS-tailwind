import { Bronze, Gold, Silver, User1 } from "../../../helper/img";
export default function Pricing() {
  return (
    <>
<div class="container-fluid mw-100">
  <div class="page-titles mb-7 mb-md-5">
    <div class="row">
      <div class="col-lg-8 col-md-6 col-12 align-self-center">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb align-items-center">
            <li class="breadcrumb-item">
              <a class="text-muted text-decoration-none" href="../horizontal/index.html">
                <i class="ti ti-home fs-5" />
              </a>
            </li>
            <li class="breadcrumb-item" aria-current="page">Pricing</li>
          </ol>
        </nav>
        <h2 class="mb-0 fw-bolder fs-8">Pricing</h2>
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
  <div class="row justify-content-center">
    <div class="col-lg-6 text-center">
      <h2 class="fw-bolder mb-0 fs-8 lh-base">Flexible Plans Tailored to Fit Your Community's Unique Needs!</h2>
    </div>
  </div>
  <div class="d-flex align-items-center justify-content-center my-7">
    <span class="text-dark fw-bolder text-capitalize me-3">Monthly</span>
    <div class="form-check form-switch mb-0">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
    </div>
    <span class="text-dark fw-bolder text-capitalize ms-2">Yearly</span>
  </div>
  <div class="row">
    <div class="col-sm-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <span class="fw-bolder text-uppercase fs-2 d-block mb-7">Silver</span>
          <div class="my-4">
            <img src={Silver} alt="flexy-img" class="img-fluid" width="80" height="80" />
          </div>
          <h2 class="fw-bolder fs-12 mb-3">Free</h2>
          <ul class="list-unstyled mb-7">
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-check text-primary fs-4" />
              <span class="text-dark">3 Members</span>
            </li>
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-check text-primary fs-4" />
              <span class="text-dark">Single Devise</span>
            </li>
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-x text-muted fs-4" />
              <span class="text-muted">50GB Storage</span>
            </li>
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-x text-muted fs-4" />
              <span class="text-muted">Monthly Backups</span>
            </li>
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-x text-muted fs-4" />
              <span class="text-muted">Permissions &amp; workflows</span>
            </li>
          </ul>
          <button class="btn btn-primary fw-bolder py-6 w-100 text-capitalize">Choose Silver</button>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4">
      <div class="card">
        <div class="card-body pt-6">
          <div class="text-end">
            <span class="badge fw-bolder py-1 bg-warning-subtle text-warning text-uppercase fs-2 rounded-3">POPULAR</span>
          </div>
          <span class="fw-bolder text-uppercase fs-2 d-block mb-7">bronze</span>
          <div class="my-4">
            <img src={Bronze} alt="flexy-img" class="img-fluid" width="80" height="80" />
          </div>
          <div class="d-flex mb-3">
            <h5 class="fw-bolder fs-6 mb-0">$</h5>
            <h2 class="fw-bolder fs-12 ms-2 mb-0">4.99</h2>
            <span class="ms-2 fs-4 d-flex align-items-center">/mo</span>
          </div>
          <ul class="list-unstyled mb-7">
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-check text-primary fs-4" />
              <span class="text-dark">5 Members</span>
            </li>
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-check text-primary fs-4" />
              <span class="text-dark">Single Devise</span>
            </li>
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-check text-primary fs-4" />
              <span class="text-dark">80GB Storage</span>
            </li>
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-x text-muted fs-4" />
              <span class="text-muted">Monthly Backups</span>
            </li>
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-x text-muted fs-4" />
              <span class="text-muted">Permissions &amp; workflows</span>
            </li>
          </ul>
          <button class="btn btn-primary fw-bolder py-6 w-100 text-capitalize">choose bronze</button>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <span class="fw-bolder text-uppercase fs-2 d-block mb-7">gold</span>
          <div class="my-4">
            <img src={Gold} alt="flexy-img" class="img-fluid" width="80" height="80" />
          </div>
          <div class="d-flex mb-3">
            <h5 class="fw-bolder fs-6 mb-0">$</h5>
            <h2 class="fw-bolder fs-12 ms-2 mb-0">9.99</h2>
            <span class="ms-2 fs-4 d-flex align-items-center">/mo</span>
          </div>
          <ul class="list-unstyled mb-7">
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-check text-primary fs-4" />
              <span class="text-dark">5 Members</span>
            </li>
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-check text-primary fs-4" />
              <span class="text-dark">Single Devise</span>
            </li>
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-check text-primary fs-4" />
              <span class="text-dark">120GB Storage</span>
            </li>
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-check text-primary fs-4" />
              <span class="text-dark">Monthly Backups</span>
            </li>
            <li class="d-flex align-items-center gap-2 py-2">
              <i class="ti ti-check text-primary fs-4" />
              <span class="text-dark">Permissions &amp; workflows</span>
            </li>
          </ul>
          <button class="btn btn-primary fw-bolder py-6 w-100 text-capitalize">choose gold</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
