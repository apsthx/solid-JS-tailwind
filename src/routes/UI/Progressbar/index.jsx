export default function Progressbar() {
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
                  <li class="breadcrumb-item" aria-current="page">Progress Bars</li>
                </ol>
              </nav>
              <h2 class="mb-0 fw-bolder fs-8">Progress Bars</h2>
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
          <div class="col-md-4 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Default Progress bars</h4>
                <div class="progress">
                  <div class="progress-bar text-bg-danger" style={{ "width": "60%", "height": "6px" }} role="progressbar">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Label Progress bars</h4>
                <div class="progress" style={{ "height": "10px" }}>
                  <div class="progress-bar text-bg-success" style={{ "width": "75%" }} role="progressbar">75%</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Multiple Progress bar</h4>
                <div class="progress">
                  <div class="progress-bar text-bg-danger" role="progressbar" style={{ "width": "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                  </div>
                  <div class="progress-bar text-bg-cyan" role="progressbar" style={{ "width": "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                  </div>
                  <div class="progress-bar text-bg-info" role="progressbar" style={{ "width": "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Colored Progress</h4>
                <div class="progress">
                  <div class="progress-bar text-bg-danger" style={{ "width": "60%", "height": "6px" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar text-bg-info" style={{ "width": "40%", "height": "6px" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar text-bg-success" style={{ "width": "20%", "height": "6px" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar text-bg-primary" style={{ "width": "30%", "height": "6px" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar text-bg-warning" style={{ "width": "80%", "height": "6px" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar text-bg-inverse" style={{ "width": "40%", "height": "6px" }} role="progressbar">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Different Height Progress</h4>
                <div class="progress" style={{ "height": "15px" }}>
                  <div class="progress-bar text-bg-danger" style={{ "width": "60%" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4" style={{ "height": "15px" }}>
                  <div class="progress-bar text-bg-info" style={{ "width": "40%" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4" style={{ "height": "15px" }}>
                  <div class="progress-bar text-bg-success" style={{ "width": "20%" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4" style={{ "height": "15px" }}>
                  <div class="progress-bar text-bg-primary" style={{ "width": "30%" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4" style={{ "height": "15px" }}>
                  <div class="progress-bar text-bg-warning" style={{ "width": "80%" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4" style={{ "height": "15px" }}>
                  <div class="progress-bar text-bg-inverse" style={{ "width": "40%" }} role="progressbar">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Striped Progress</h4>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped text-bg-danger" style={{ "width": "60%", "height": "6px" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar progress-bar-striped text-bg-info" style={{ "width": "40%", "height": "6px" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar progress-bar-striped text-bg-success" style={{ "width": "20%", "height": "6px" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar progress-bar-striped text-bg-primary" style={{ "width": "30%", "height": "6px" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar progress-bar-striped text-bg-warning" style={{ "width": "80%", "height": "6px" }} role="progressbar">
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar progress-bar-striped text-bg-inverse" style={{ "width": "40%", "height": "6px" }} role="progressbar">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Animated Progress</h4>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped text-bg-primary progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ "width": "75%" }}>
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar progress-bar-striped text-bg-info progress-bar-animated" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{ "width": "45%" }}>
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar progress-bar-striped text-bg-success progress-bar-animated" role="progressbar" aria-valuenow="52" aria-valuemin="0" aria-valuemax="100" style={{ "width": "52%" }}>
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar progress-bar-striped text-bg-danger progress-bar-animated" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style={{ "width": "32%" }}>
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar progress-bar-striped text-bg-warning progress-bar-animated" role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" style={{ "width": "12%" }}>
                  </div>
                </div>
                <div class="progress mt-4">
                  <div class="progress-bar progress-bar-striped text-bg-dark progress-bar-animated" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{ "width": "67%" }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
