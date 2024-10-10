export default function Spinner() {
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
                  <li class="breadcrumb-item" aria-current="page">Spinner</li>
                </ol>
              </nav>
              <h2 class="mb-0 fw-bolder fs-8">Spinner</h2>
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
                <h4 class="card-title mb-3">Border Spinner</h4>
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Placement Flex</h4>
                <div class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Spinner Colors</h4>
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-secondary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-danger" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-warning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-info" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-light" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-dark" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Loading with Text</h4>
                <div class="d-flex align-items-center">
                  <strong>Loading...</strong>
                  <div class="spinner-border ms-auto" role="status" aria-hidden="true">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Text Align</h4>
                <div class="text-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Size</h4>
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow spinner-grow-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Custom Style</h4>
                <div class="spinner-border" style={{ "width": "3rem", "height": "3rem" }} role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow" style={{ "width": "3rem", "height": "3rem" }} role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Spinner with Buttons</h4>
                <button class="btn btn-primary" type="button" disabled>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true">
                  </span>
                  <span class="visually-hidden">Loading...</span>
                </button>
                <button class="btn btn-primary" type="button" disabled>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true">
                  </span>Loading...</button>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Growing Spinner with Buttons</h4>
                <button class="btn btn-primary" type="button" disabled>
                  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true">
                  </span>
                  <span class="visually-hidden">Loading...</span>
                </button>
                <button class="btn btn-primary" type="button" disabled>
                  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true">
                  </span>Loading...</button>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Growing spinner</h4>
                <div class="spinner-grow" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-info" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-light" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-dark" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Alignment</h4>
                <div class="spinner-border m-3" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
