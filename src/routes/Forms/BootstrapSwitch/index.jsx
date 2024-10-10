export default function BootstrapSwitch() {
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
            <li class="breadcrumb-item" aria-current="page">Form Switch</li>
          </ol>
        </nav>
        <h2 class="mb-0 fw-bolder fs-8">Form Switch</h2>
      </div>
      <div class="col-lg-4 col-md-6 d-none d-md-flex align-items-center justify-content-end">
        <select class="form-select w-auto bg-primary-subtle border-0" aria-label="Default select example">
          <option selected>Today 23 March</option>
          <option value="1">Today 23 March</option>
          <option value="2">Today 24 March</option>
          <option value="3">Today 25 March</option>
        </select>
        <a href="javascript:void(0)" class="btn btn-primary d-flex align-items-center ms-2">
          <i class="ti ti-plus me-1" />
          Add New
        </a>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-12">
      {/* start Bootstrap Switch */}
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title mb-3">Bootstrap Switch</h4>
          <div class="form-check form-switch py-2">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
          </div>
          <div class="form-check form-switch py-2">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
            <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
          </div>
          <div class="form-check form-switch py-2">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled />
            <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
          </div>
          <div class="form-check form-switch py-2">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled />
            <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch
              checkbox input</label>
          </div>
        </div>
      </div>
      {/* end Bootstrap Switch */}
    </div>
    <div class="col-lg-12">
      {/* start Bootstrap Switch */}
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title mb-3">Color Variation</h4>
          <div class="d-flex flex-wrap gap-6">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="color-primary" checked />
              <label class="form-check-label" for="color-primary">Primary</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input secondary" type="checkbox" id="color-secondary" checked />
              <label class="form-check-label" for="color-secondary">Secondary</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input danger" type="checkbox" id="color-danger" checked />
              <label class="form-check-label" for="color-danger">Danger</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input success" type="checkbox" id="color-success" checked />
              <label class="form-check-label" for="color-success">Success</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input warning" type="checkbox" id="color-warning" checked />
              <label class="form-check-label" for="color-warning">Warning</label>
            </div>
          </div>
        </div>
      </div>
      {/* end Bootstrap Switch */}
    </div>
  </div>
</div>
    </>
  );
}
