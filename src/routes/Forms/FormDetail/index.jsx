
export default function FormDetail() {
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
            <li class="breadcrumb-item" aria-current="page">Form Detail</li>
          </ol>
        </nav>
        <h2 class="mb-0 fw-bolder fs-8">Form Detail</h2>
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
  {/* start Form with view only */}
  <div class="card">
    <div class="card-header text-bg-primary">
      <h5 class="mb-0 text-white">Form with view only</h5>
    </div>
    <form class="form-horizontal">
      <div class="form-body">
        <div class="card-body">
          <h5 class="card-title mb-0">Person Info</h5>
        </div>
        <hr class="m-0" />
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row">
                <label class="form-label text-end col-md-3">First Name:</label>
                <div class="col-md-9">
                  <p>John</p>
                </div>
              </div>
            </div>
            {/*/span*/}
            <div class="col-md-6">
              <div class="form-group row">
                <label class="form-label text-end col-md-3">Last Name:</label>
                <div class="col-md-9">
                  <p>Doe</p>
                </div>
              </div>
            </div>
            {/*/span*/}
          </div>
          {/*/row*/}
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row">
                <label class="form-label text-end col-md-3">Gender:</label>
                <div class="col-md-9">
                  <p>Male</p>
                </div>
              </div>
            </div>
            {/*/span*/}
            <div class="col-md-6">
              <div class="form-group row">
                <label class="form-label text-end col-md-3">Date of Birth:</label>
                <div class="col-md-9">
                  <p>11/06/1987</p>
                </div>
              </div>
            </div>
            {/*/span*/}
          </div>
          {/*/row*/}
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row">
                <label class="form-label text-end col-md-3">Category:</label>
                <div class="col-md-9">
                  <p>Category1</p>
                </div>
              </div>
            </div>
            {/*/span*/}
            <div class="col-md-6">
              <div class="form-group row">
                <label class="form-label text-end col-md-3">Membership:</label>
                <div class="col-md-9">
                  <p>Free</p>
                </div>
              </div>
            </div>
            {/*/span*/}
          </div>
          {/*/row*/}
        </div>
        <hr class="m-0" />
        <div class="card-body">
          <h5 class="card-title mb-0">Address</h5>
        </div>
        <hr class="m-0" />
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row">
                <label class="form-label text-end col-md-3">Address:</label>
                <div class="col-md-9">
                  <p>
                    E104, Dharti-2, Near silverstar mall
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row">
                <label class="form-label text-end col-md-3">City:</label>
                <div class="col-md-9">
                  <p>Bhavnagar</p>
                </div>
              </div>
            </div>
            {/*/span*/}
            <div class="col-md-6">
              <div class="form-group row">
                <label class="form-label text-end col-md-3">State:</label>
                <div class="col-md-9">
                  <p>Gujarat</p>
                </div>
              </div>
            </div>
            {/*/span*/}
          </div>
          {/*/row*/}
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row">
                <label class="form-label text-end col-md-3">Post Code:</label>
                <div class="col-md-9">
                  <p>457890</p>
                </div>
              </div>
            </div>
            {/*/span*/}
            <div class="col-md-6">
              <div class="form-group row">
                <label class="form-label text-end col-md-3">Country:</label>
                <div class="col-md-9">
                  <p>India</p>
                </div>
              </div>
            </div>
            {/*/span*/}
          </div>
        </div>
        <div class="form-actions border-top">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-offset-3 col-md-9">
                    <button type="submit" class="btn btn-primary">
                      <i class="ti ti-edit fs-5" />
                      Edit
                    </button>
                    <button type="button" class="btn bg-danger-subtle text-danger ms-6">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-6" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  {/* start Form with view only */}
</div>
    </>
  );
}
