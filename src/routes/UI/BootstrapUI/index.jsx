import { S7 } from "../../../helper/img";

export default function BootstrapUI() {
  return (
    <>
      <div class="container-fluid mw-100">
        <div class="page-titles mb-7 mb-md-5">
          <div class="row">
            <div class="col-lg-8 col-md-6 col-12 align-self-center">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb align-items-center">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="../dark/index.html">
                      <i class="ti ti-home fs-5" />
                    </a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">Bootstrap UI</li>
                </ol>
              </nav>
              <h2 class="mb-0 fw-bolder fs-8">Bootstrap UI</h2>
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
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Image with round corner</h4>
                <p class="mb-3 card-subtitle">Use Class for rounded image
                  <mark> <code>.rounded</code>
                  </mark>
                </p>
                <div class="text-center">
                  <img src={S7} alt="image" class="rounded" width="200" />
                </div>
              </div>
            </div>  
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Image with Circle</h4>
                <p class="mb-3 card-subtitle">Use Class for rounded image
                  <mark> <code>.rounded-circle</code>
                  </mark>
                </p>
                <div class="text-center">
                  <img src={S7} alt="image" class="rounded-circle" width="200" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Image Thumbnail</h4>
                <p class="mb-3 card-subtitle">Use Class for thumbnail image
                  <mark> <code>.img-thumbnail</code>
                  </mark>
                </p>
                <div class="text-center">
                  <img src={S7} alt="image" class="img-thumbnail" width="200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
