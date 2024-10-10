export default function Pagination() {
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
                  <li class="breadcrumb-item" aria-current="page">Pagination</li>
                </ol>
              </nav>
              <h2 class="mb-0 fw-bolder fs-8">Pagination</h2>
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
          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Default Pagination</h4>
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">Previous</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Pagination with Icon</h4>
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link link" href="javascript:void(0)" aria-label="Previous">
                        <span aria-hidden="true">
                          <i class="ti ti-chevrons-left fs-4" />
                        </span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link link" href="javascript:void(0)">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link link" href="javascript:void(0)">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link link" href="javascript:void(0)">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link link" href="javascript:void(0)" aria-label="Next">
                        <span aria-hidden="true">
                          <i class="ti ti-chevrons-right fs-4" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title mb-3">Pagination with Active and Disabled States</h4>
                <nav aria-label="...">
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <a class="page-link" href="javascript:void(0)" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">1</a>
                    </li>
                    <li class="page-item active" aria-current="page">
                      <a class="page-link" href="javascript:void(0)">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title">Large Pagination</h4>
                <p class="mb-3 card-subtitle">Fancy larger or smaller pagination? Add
                  <mark> <code>.pagination-lg</code>
                  </mark>or
                  <mark> <code>.pagination-sm</code>
                  </mark>for additional sizes.</p>
                <nav aria-label="...">
                  <ul class="pagination pagination-lg">
                    <li class="page-item active" aria-current="page">
                      <span class="page-link">1</span>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">3</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title">Small Pagination</h4>
                <p class="mb-3 card-subtitle">Fancy larger or smaller pagination? Add
                  <mark> <code>.pagination-lg</code>
                  </mark>or
                  <mark> <code>.pagination-sm</code>
                  </mark>for additional sizes.</p>
                <nav aria-label="...">
                  <ul class="pagination pagination-sm">
                    <li class="page-item active" aria-current="page">
                      <span class="page-link">1</span>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">3</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title">Center Alignment Pagination</h4>
                <p class="mb-3 card-subtitle">Change the alignment of pagination components with flexbox utilities.</p>
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                      <a class="page-link" href="javascript:void(0)" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title">Right Alignment Pagination</h4>
                <p class="mb-3 card-subtitle">Change the alignment of pagination components with flexbox utilities.</p>
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-end">
                    <li class="page-item disabled">
                      <a class="page-link" href="javascript:void(0)" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
