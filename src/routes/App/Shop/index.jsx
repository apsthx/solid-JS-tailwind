import { S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12 } from "../../../helper/img";

export default function Shop() {
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
            <li class="breadcrumb-item" aria-current="page">Shop</li>
          </ol>
        </nav>
        <h2 class="mb-0 fw-bolder fs-8">Shop</h2>
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
  <div class="card position-relative overflow-hidden">
    <div class="shop-part d-flex w-100">
      <div class="shop-filters flex-shrink-0 border-end d-none d-lg-block">
        <ul class="list-group pt-2 border-bottom rounded-0">
          <h6 class="my-3 mx-4">Filter by Category</h6>
          <li class="list-group-item border-0 p-0 mx-4 mb-2">
            <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
              <i class="ti ti-circles fs-5" />All
            </a>
          </li>
          <li class="list-group-item border-0 p-0 mx-4 mb-2">
            <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
              <i class="ti ti-hanger fs-5" />Fashion
            </a>
          </li>
          <li class="list-group-item border-0 p-0 mx-4 mb-2">
            <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
              <i class="ti ti-notebook fs-5" />Books
            </a>
          </li>
          <li class="list-group-item border-0 p-0 mx-4 mb-2">
            <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
              <i class="ti ti-mood-smile fs-5" />Toys
            </a>
          </li>
          <li class="list-group-item border-0 p-0 mx-4 mb-2">
            <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
              <i class="ti ti-device-laptop fs-5" />Electronics
            </a>
          </li>
        </ul>
        <ul class="list-group pt-2 border-bottom rounded-0">
          <h6 class="my-3 mx-4">Sort By</h6>
          <li class="list-group-item border-0 p-0 mx-4 mb-2">
            <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
              <i class="ti ti-ad-2 fs-5" />Newest
            </a>
          </li>
          <li class="list-group-item border-0 p-0 mx-4 mb-2">
            <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
              <i class="ti ti-sort-ascending-2 fs-5" />Price: High-Low
            </a>
          </li>
          <li class="list-group-item border-0 p-0 mx-4 mb-2">
            <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
              <i class="ti ti-sort-descending-2 fs-5" />
              Price: Low-High
            </a>
          </li>
          <li class="list-group-item border-0 p-0 mx-4 mb-2">
            <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
              <i class="ti ti-ad-2 fs-5" />Discounted
            </a>
          </li>
        </ul>
        <div class="by-gender border-bottom rounded-0">
          <h6 class="mt-4 mb-3 mx-4 fw-semibold">By Gender</h6>
          <div class="pb-4 px-4">
            <div class="form-check py-2 mb-0">
              <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
              <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios1">
                All
              </label>
            </div>
            <div class="form-check py-2 mb-0">
              <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" />
              <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios2">
                Men
              </label>
            </div>
            <div class="form-check py-2 mb-0">
              <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios3" value="option1" />
              <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios3">
                Women
              </label>
            </div>
            <div class="form-check py-2 mb-0">
              <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios4" value="option1" />
              <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios4">
                Kids
              </label>
            </div>
          </div>
        </div>
        <div class="by-pricing border-bottom rounded-0">
          <h6 class="mt-4 mb-3 mx-4 fw-semibold">By Pricing</h6>
          <div class="pb-4 px-4">
            <div class="form-check py-2 mb-0">
              <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios5" value="option1" checked />
              <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios5">
                All
              </label>
            </div>
            <div class="form-check py-2 mb-0">
              <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios6" value="option1" />
              <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios6">
                0-50
              </label>
            </div>
            <div class="form-check py-2 mb-0">
              <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios7" value="option1" />
              <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios7">
                50-100
              </label>
            </div>
            <div class="form-check py-2 mb-0">
              <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios8" value="option1" />
              <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios8">
                100-200
              </label>
            </div>
            <div class="form-check py-2 mb-0">
              <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios9" value="option1" />
              <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios9">
                Over 200
              </label>
            </div>
          </div>
        </div>
        <div class="by-colors border-bottom rounded-0">
          <h6 class="mt-4 mb-3 mx-4 fw-semibold">By Colors</h6>
          <div class="pb-4 px-4">
            <ul class="list-unstyled d-flex flex-wrap align-items-center gap-2 mb-0">
              <li class="shop-color-list">
                <a class="shop-colors-item rounded-circle d-block shop-colors-1" href="javascript:void(0)" />
              </li>
              <li class="shop-color-list">
                <a class="shop-colors-item rounded-circle d-block shop-colors-2" href="javascript:void(0)" />
              </li>
              <li class="shop-color-list">
                <a class="shop-colors-item rounded-circle d-block shop-colors-3" href="javascript:void(0)" />
              </li>
              <li class="shop-color-list">
                <a class="shop-colors-item rounded-circle d-block shop-colors-4" href="javascript:void(0)" />
              </li>
              <li class="shop-color-list">
                <a class="shop-colors-item rounded-circle d-block shop-colors-5" href="javascript:void(0)" />
              </li>
              <li class="shop-color-list">
                <a class="shop-colors-item rounded-circle d-block shop-colors-6" href="javascript:void(0)" />
              </li>
              <li class="shop-color-list">
                <a class="shop-colors-item rounded-circle d-block shop-colors-7" href="javascript:void(0)" />
              </li>
            </ul>
          </div>
        </div>
        <div class="p-4">
          <a href="javascript:void(0)" class="btn btn-primary w-100">Reset Filters</a>
        </div>
      </div>
      <div class="card-body p-4 pb-0">
        <div class="d-flex justify-content-between align-items-center gap-6 mb-4">
          <a class="btn btn-primary d-lg-none d-flex" data-bs-toggle="offcanvas" href="#filtercategory" role="button" aria-controls="filtercategory">
            <i class="ti ti-menu-2 fs-6" />
          </a>
          <h5 class="fs-5 mb-0 d-none d-lg-block">Products</h5>
          <form class="position-relative">
            <input type="text" class="form-control search-chat py-2 ps-5" id="text-srh" placeholder="Search Product" />
            <i class="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
          </form>
        </div>
        <div class="row">
          <div class="col-sm-6 col-xxl-4">
            <div class="card hover-img overflow-hidden">
              <div class="position-relative">
                <a href="../horizontal/eco-shop-detail.html">
                  <img src={S11} class="card-img-top" alt="flexy-img" />
                </a>
                <a href="javascript:void(0)" class="text-bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
                  <i class="ti ti-basket fs-4" />
                </a>
              </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fs-4">Super Games</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fs-4 mb-0">$285 <span class="ms-2 fw-normal text-muted fs-3">
                      <del>$345</del>
                    </span>
                  </h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xxl-4">
            <div class="card hover-img overflow-hidden">
              <div class="position-relative">
                <a href="../horizontal/eco-shop-detail.html">
                  <img src={S5} class="card-img-top" alt="flexy-img" />
                </a>
                <a href="javascript:void(0)" class="text-bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
                  <i class="ti ti-basket fs-4" />
                </a>
              </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fs-4">Derma-E</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fs-4 mb-0">$650 <span class="ms-2 fw-normal text-muted fs-3">
                      <del>$900</del>
                    </span>
                  </h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xxl-4">
            <div class="card hover-img overflow-hidden">
              <div class="position-relative">
                <a href="../horizontal/eco-shop-detail.html">
                  <img src={S6} class="card-img-top" alt="flexy-img" />
                </a>
                <a href="javascript:void(0)" class="text-bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
                  <i class="ti ti-basket fs-4" />
                </a>
              </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fs-4">SockSoho</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fs-4 mb-0">$25 <span class="ms-2 fw-normal text-muted fs-3">
                      <del>$31</del>
                    </span>
                  </h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xxl-4">
            <div class="card hover-img overflow-hidden">
              <div class="position-relative">
                <a href="../horizontal/eco-shop-detail.html">
                  <img src={S4} class="card-img-top" alt="flexy-img" />
                </a>
                <a href="javascript:void(0)" class="text-bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
                  <i class="ti ti-basket fs-4" />
                </a>
              </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fs-4">Glossy Solution</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fs-4 mb-0">$50 <span class="ms-2 fw-normal text-muted fs-3">
                      <del>$65</del>
                    </span>
                  </h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xxl-4">
            <div class="card hover-img overflow-hidden">
              <div class="position-relative">
                <a href="../horizontal/eco-shop-detail.html">
                  <img src={S10} class="card-img-top" alt="flexy-img" />
                </a>
                <a href="javascript:void(0)" class="text-bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
                  <i class="ti ti-basket fs-4" />
                </a>
              </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fs-4">Supercolor 645CL</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fs-4 mb-0">$210 <span class="ms-2 fw-normal text-muted fs-3">
                      <del>$250</del>
                    </span>
                  </h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xxl-4">
            <div class="card hover-img overflow-hidden">
              <div class="position-relative">
                <a href="../horizontal/eco-shop-detail.html">
                  <img src={S7} class="card-img-top" alt="flexy-img" />
                </a>
                <a href="javascript:void(0)" class="text-bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
                  <i class="ti ti-basket fs-4" />
                </a>
              </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fs-4">Polraid One Step</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fs-4 mb-0">$150 <span class="ms-2 fw-normal text-muted fs-3">
                      <del>$200</del>
                    </span>
                  </h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xxl-4">
            <div class="card hover-img overflow-hidden">
              <div class="position-relative">
                <a href="../horizontal/eco-shop-detail.html">
                  <img src={S8} class="card-img-top" alt="flexy-img" />
                </a>
                <a href="javascript:void(0)" class="text-bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
                  <i class="ti ti-basket fs-4" />
                </a>
              </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fs-4">Colorful Camera</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fs-4 mb-0">$300 <span class="ms-2 fw-normal text-muted fs-3">
                      <del>$380</del>
                    </span>
                  </h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xxl-4">
            <div class="card hover-img overflow-hidden">
              <div class="position-relative">
                <a href="../horizontal/eco-shop-detail.html">
                  <img src={S9} class="card-img-top" alt="flexy-img" />
                </a>
                <a href="javascript:void(0)" class="text-bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
                  <i class="ti ti-basket fs-4" />
                </a>
              </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fs-4">Orange Glass</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fs-4 mb-0">$175 <span class="ms-2 fw-normal text-muted fs-3">
                      <del>$200</del>
                    </span>
                  </h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xxl-4">
            <div class="card hover-img overflow-hidden">
              <div class="position-relative">
                <a href="../horizontal/eco-shop-detail.html">
                  <img src={S3} class="card-img-top" alt="flexy-img" />
                </a>
                <a href="javascript:void(0)" class="text-bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
                  <i class="ti ti-basket fs-4" />
                </a>
              </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fs-4">Smart Watch</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fs-4 mb-0">$125 <span class="ms-2 fw-normal text-muted fs-3">
                      <del>$137</del>
                    </span>
                  </h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xxl-4">
            <div class="card hover-img overflow-hidden">
              <div class="position-relative">
                <a href="../horizontal/eco-shop-detail.html">
                  <img src={S1} class="card-img-top" alt="flexy-img" />
                </a>
                <a href="javascript:void(0)" class="text-bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
                  <i class="ti ti-basket fs-4" />
                </a>
              </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fs-4">Curology Face wash</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fs-4 mb-0">$275 <span class="ms-2 fw-normal text-muted fs-3">
                      <del>$350</del>
                    </span>
                  </h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xxl-4">
            <div class="card hover-img overflow-hidden">
              <div class="position-relative">
                <a href="../horizontal/eco-shop-detail.html">
                  <img src={S12} class="card-img-top" alt="flexy-img" />
                </a>
                <a href="javascript:void(0)" class="text-bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
                  <i class="ti ti-basket fs-4" />
                </a>
              </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fs-4">Smart Game</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fs-4 mb-0">$5 <span class="ms-2 fw-normal text-muted fs-3">
                      <del>$10</del>
                    </span>
                  </h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xxl-4">
            <div class="card hover-img overflow-hidden">
              <div class="position-relative">
                <a href="../horizontal/eco-shop-detail.html">
                  <img src={S2} class="card-img-top" alt="flexy-img" />
                </a>
                <a href="javascript:void(0)" class="text-bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
                  <i class="ti ti-basket fs-4" />
                </a>
              </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fs-4">Body Lotion</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fs-4 mb-0">$89 <span class="ms-2 fw-normal text-muted fs-3">
                      <del>$99</del>
                    </span>
                  </h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="filtercategory" aria-labelledby="filtercategoryLabel">
        <div class="offcanvas-body shop-filters w-100 p-0">
          <ul class="list-group pt-2 border-bottom rounded-0">
            <h6 class="my-3 mx-4">Filter by Category</h6>
            <li class="list-group-item border-0 p-0 mx-4 mb-2">
              <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
                <i class="ti ti-circles fs-5" />All
              </a>
            </li>
            <li class="list-group-item border-0 p-0 mx-4 mb-2">
              <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
                <i class="ti ti-hanger fs-5" />Fashion
              </a>
            </li>
            <li class="list-group-item border-0 p-0 mx-4 mb-2">
              <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
                <i class="ti ti-notebook fs-5" />
                Books
              </a>
            </li>
            <li class="list-group-item border-0 p-0 mx-4 mb-2">
              <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
                <i class="ti ti-mood-smile fs-5" />Toys
              </a>
            </li>
            <li class="list-group-item border-0 p-0 mx-4 mb-2">
              <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
                <i class="ti ti-device-laptop fs-5" />Electronics
              </a>
            </li>
          </ul>
          <ul class="list-group pt-2 border-bottom rounded-0">
            <h6 class="my-3 mx-4">Sort By</h6>
            <li class="list-group-item border-0 p-0 mx-4 mb-2">
              <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
                <i class="ti ti-ad-2 fs-5" />Newest
              </a>
            </li>
            <li class="list-group-item border-0 p-0 mx-4 mb-2">
              <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
                <i class="ti ti-sort-ascending-2 fs-5" />Price: High-Low
              </a>
            </li>
            <li class="list-group-item border-0 p-0 mx-4 mb-2">
              <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
                <i class="ti ti-sort-descending-2 fs-5" />
                Price: Low-High
              </a>
            </li>
            <li class="list-group-item border-0 p-0 mx-4 mb-2">
              <a class="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1" href="javascript:void(0)">
                <i class="ti ti-ad-2 fs-5" />Discounted
              </a>
            </li>
          </ul>
          <div class="by-gender border-bottom rounded-0">
            <h6 class="mt-4 mb-3 mx-4 fw-semibold">By Gender</h6>
            <div class="pb-4 px-4">
              <div class="form-check py-2 mb-0">
                <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios10" value="option1" checked />
                <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios10">
                  All
                </label>
              </div>
              <div class="form-check py-2 mb-0">
                <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios11" value="option1" />
                <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios11">
                  Men
                </label>
              </div>
              <div class="form-check py-2 mb-0">
                <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios12" value="option1" />
                <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios12">
                  Women
                </label>
              </div>
              <div class="form-check py-2 mb-0">
                <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios13" value="option1" />
                <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios13">
                  Kids
                </label>
              </div>
            </div>
          </div>
          <div class="by-pricing border-bottom rounded-0">
            <h6 class="mt-4 mb-3 mx-4 fw-semibold">By Pricing</h6>
            <div class="pb-4 px-4">
              <div class="form-check py-2 mb-0">
                <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios14" value="option1" checked />
                <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios14">
                  All
                </label>
              </div>
              <div class="form-check py-2 mb-0">
                <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios15" value="option1" />
                <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios15">
                  0-50
                </label>
              </div>
              <div class="form-check py-2 mb-0">
                <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios16" value="option1" />
                <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios16">
                  50-100
                </label>
              </div>
              <div class="form-check py-2 mb-0">
                <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios17" value="option1" />
                <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios17">
                  100-200
                </label>
              </div>
              <div class="form-check py-2 mb-0">
                <input class="form-check-input p-2" type="radio" name="exampleRadios" id="exampleRadios18" value="option1" />
                <label class="form-check-label d-flex align-items-center ps-2" for="exampleRadios18">
                  Over 200
                </label>
              </div>
            </div>
          </div>
          <div class="by-colors border-bottom rounded-0">
            <h6 class="mt-4 mb-3 mx-4 fw-semibold">By Colors</h6>
            <div class="pb-4 px-4">
              <ul class="list-unstyled d-flex flex-wrap align-items-center gap-2 mb-0">
                <li class="shop-color-list">
                  <a class="shop-colors-item rounded-circle d-block shop-colors-1" href="javascript:void(0)" />
                </li>
                <li class="shop-color-list">
                  <a class="shop-colors-item rounded-circle d-block shop-colors-2" href="javascript:void(0)" />
                </li>
                <li class="shop-color-list">
                  <a class="shop-colors-item rounded-circle d-block shop-colors-3" href="javascript:void(0)" />
                </li>
                <li class="shop-color-list">
                  <a class="shop-colors-item rounded-circle d-block shop-colors-4" href="javascript:void(0)" />
                </li>
                <li class="shop-color-list">
                  <a class="shop-colors-item rounded-circle d-block shop-colors-5" href="javascript:void(0)" />
                </li>
                <li class="shop-color-list">
                  <a class="shop-colors-item rounded-circle d-block shop-colors-6" href="javascript:void(0)" />
                </li>
                <li class="shop-color-list">
                  <a class="shop-colors-item rounded-circle d-block shop-colors-7" href="javascript:void(0)" />
                </li>
              </ul>
            </div>
          </div>
          <div class="p-4">
            <a href="javascript:void(0)" class="btn btn-primary w-100">Reset Filters</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </>
    );
  }
  