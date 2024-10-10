
export default function Breadcrumb() {
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
                  <li class="breadcrumb-item" aria-current="page">Breadcrumb</li>
                </ol>
              </nav>
              <h2 class="mb-0 fw-bolder fs-8">Breadcrumb</h2>
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
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-3">Default Breadcrumb</h4>
                <nav class="py-2" aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">Home</li>
                  </ol>
                </nav>
                <nav class="py-2" aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                  </ol>
                </nav>
                <nav class="py-2" aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)">Library</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-4">Custom Dividers</h4>
                <nav class="py-2" style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                  </ol>
                </nav>
                <nav class="py-2" style={{ "--bs-breadcrumb-divider": "':'" }} aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                  </ol>
                </nav>
                <nav class="py-2" style={{ "--bs-breadcrumb-divider": "'-'" }} aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h5 class="card-title mb-3">Colored Breadcrumb</h5>
                <nav aria-label="breadcrumb" class="mb-3">
                  <ol class="breadcrumb bg-info-subtle px-3 py-2 rounded">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-info d-flex align-items-center">
                        <i class="ti ti-home fs-4 mt-1" />
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-info">Library</a>
                    </li>
                    <li class="breadcrumb-item active text-info " aria-current="page">Data</li>
                  </ol>
                </nav>
                <nav aria-label="breadcrumb" class="mb-3">
                  <ol class="breadcrumb bg-primary-subtle px-3 py-2 rounded">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-primary d-flex align-items-center">
                        <i class="ti ti-home fs-4 mt-1" />
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-primary">Library</a>
                    </li>
                    <li class="breadcrumb-item active text-primary " aria-current="page">Data</li>
                  </ol>
                </nav>
                <nav aria-label="breadcrumb" class="mb-3">
                  <ol class="breadcrumb bg-warning-subtle px-3 py-2 rounded">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-warning d-flex align-items-center">
                        <i class="ti ti-home fs-4 mt-1" />
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-warning">Library</a>
                    </li>
                    <li class="breadcrumb-item active text-warning " aria-current="page">Data</li>
                  </ol>
                </nav>
                <nav aria-label="breadcrumb" class="mb-3">
                  <ol class="breadcrumb bg-danger-subtle px-3 py-2 rounded">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-danger d-flex align-items-center">
                        <i class="ti ti-home fs-4 mt-1" />
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-danger">Library</a>
                    </li>
                    <li class="breadcrumb-item active text-danger " aria-current="page">Data</li>
                  </ol>
                </nav>
                <nav aria-label="breadcrumb" class="mb-3">
                  <ol class="breadcrumb bg-success-subtle px-3 py-2 rounded">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-success d-flex align-items-center">
                        <i class="ti ti-home fs-4 mt-1" />
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-success">Library</a>
                    </li>
                    <li class="breadcrumb-item active text-success " aria-current="page">Data</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Colored Border Breadcrumb</h4>
                <nav aria-label="breadcrumb" class="mb-3">
                  <ol class="breadcrumb border border-info px-3 py-2 rounded">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-info d-flex align-items-center">
                        <i class="ti ti-home fs-4 mt-1" />
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-info">Library</a>
                    </li>
                    <li class="breadcrumb-item active text-info " aria-current="page">Data</li>
                  </ol>
                </nav>
                <nav aria-label="breadcrumb" class="mb-3">
                  <ol class="breadcrumb border border-primary px-3 py-2 rounded">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-primary d-flex align-items-center">
                        <i class="ti ti-home fs-4 mt-1" />
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-primary">Library</a>
                    </li>
                    <li class="breadcrumb-item active text-primary " aria-current="page">Data</li>
                  </ol>
                </nav>
                <nav aria-label="breadcrumb" class="mb-3">
                  <ol class="breadcrumb border border-warning px-3 py-2 rounded">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-warning d-flex align-items-center">
                        <i class="ti ti-home fs-4 mt-1" />
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-warning">Library</a>
                    </li>
                    <li class="breadcrumb-item active text-warning " aria-current="page">Data</li>
                  </ol>
                </nav>
                <nav aria-label="breadcrumb" class="mb-3">
                  <ol class="breadcrumb border border-danger px-3 py-2 rounded">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-danger d-flex align-items-center">
                        <i class="ti ti-home fs-4 mt-1" />
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-danger">Library</a>
                    </li>
                    <li class="breadcrumb-item active text-danger " aria-current="page">Data</li>
                  </ol>
                </nav>
                <nav aria-label="breadcrumb" class="mb-3">
                  <ol class="breadcrumb border border-success px-3 py-2 rounded">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-success d-flex align-items-center">
                        <i class="ti ti-home fs-4 mt-1" />
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0)" class="text-success">Library</a>
                    </li>
                    <li class="breadcrumb-item active text-success " aria-current="page">Data</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
