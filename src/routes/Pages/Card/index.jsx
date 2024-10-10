import { User2, User3, User4, User5, User9, User11, User12, S1, S2, S4, S5, S7, S11, BlogImg1, BlogImg2, BlogImg3, BlogImg4, BlogImg5, iconPaypal, iconOfficeBag, iconMasterCard, iconPie, iconMapPin, iconDatabase, iconPhone, iconScreenShare, iconMail } from "../../../helper/img";

export default function Card() {
  return (
    <>
       <div class="container-fluid mw-100">
  <div class="page-titles mb-7 mb-md-5">
    <div class="row">
      <div class="col-lg-8 col-md-6 col-12 align-self-center">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb align-items-center">
            <li class="breadcrumb-item">
              <a class="text-muted text-decoration-none" href="../minisidebar/index.html">
                <i class="ti ti-home fs-5" />
              </a>
            </li>
            <li class="breadcrumb-item" aria-current="page">Cards</li>
          </ol>
        </nav>
        <h2 class="mb-0 fw-bolder fs-8">Cards</h2>
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
      <div class="card overflow-hidden hover-img">
        <div class="position-relative">
          <a href="javascript:void(0)">
            <img src={BlogImg1} class="card-img-top" alt="flexy-img" />
          </a>
          <span class="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">2 min Read</span>
          <img src={User3} alt="flexy-img" class="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Georgeanna Ramero" />
        </div>
        <div class="card-body p-4">
          <span class="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">Social</span>
          <a class="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="javascript:void(0)">As yen tumbles, gadget-loving Japan goes for secondhand iPhones</a>
          <div class="d-flex align-items-center gap-4">
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-eye text-dark fs-5" />9,125</div>
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-message-2 text-dark fs-5" />3</div>
            <div class="d-flex align-items-center fs-2 ms-auto">
              <i class="ti ti-point text-dark" />Mon, Dec 19</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card overflow-hidden hover-img">
        <div class="position-relative">
          <a href="javascript:void(0)">
            <img src={BlogImg2} class="card-img-top" alt="flexy-img" />
          </a>
          <span class="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">2 min Read</span>
          <img src={User2} alt="flexy-img" class="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Georgeanna Ramero" />
        </div>
        <div class="card-body p-4">
          <span class="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">Gadget</span>
          <a class="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="javascript:void(0)">Intel loses bid to revive antitrust case against patent foe Fortress</a>
          <div class="d-flex align-items-center gap-4">
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-eye text-dark fs-5" />4,150</div>
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-message-2 text-dark fs-5" />38</div>
            <div class="d-flex align-items-center fs-2 ms-auto">
              <i class="ti ti-point text-dark" />Sun, Dec 18</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card overflow-hidden hover-img">
        <div class="position-relative">
          <a href="javascript:void(0)">
            <img src={BlogImg3} class="card-img-top" alt="flexy-img" />
          </a>
          <span class="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">2 min Read</span>
          <img src={User3} alt="flexy-img" class="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Georgeanna Ramero" />
        </div>
        <div class="card-body p-4">
          <span class="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">Health</span>
          <a class="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="javascript:void(0)">COVID outbreak deepens as more lockdowns loom in China</a>
          <div class="d-flex align-items-center gap-4">
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-eye text-dark fs-5" />9,480</div>
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-message-2 text-dark fs-5" />12</div>
            <div class="d-flex align-items-center fs-2 ms-auto">
              <i class="ti ti-point text-dark" />Sat, Dec 17</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="card overflow-hidden">
        <div class="position-relative">
          <a href="javascript:void(0)">
            <img src={S4} class="card-img-top" alt="flexy-img" />
          </a>
          <a href="javascript:void(0)" class="btn btn-primary rounded-circle p-2 d-flex align-items-center justify-content-center position-absolute bottom-0 end-0 me-3 mb-n3">
            <i class="ti ti-basket" />
          </a>
        </div>
        <div class="card-body p-4">
          <h4 class="card-title">Glossy Solution</h4>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <h5 class="fs-4 mb-0">$285</h5>
              <p class="mb-0 text-decoration-line-through">$375</p>
            </div>
            <ul class="d-flex align-items-center gap-1 mb-0">
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="card overflow-hidden">
        <div class="position-relative">
          <a href="javascript:void(0)">
            <img src={S5} class="card-img-top" alt="flexy-img" />
          </a>
          <a href="javascript:void(0)" class="btn btn-primary rounded-circle p-2 d-flex align-items-center justify-content-center position-absolute bottom-0 end-0 me-3 mb-n3">
            <i class="ti ti-basket" />
          </a>
        </div>
        <div class="card-body p-4">
          <h4 class="card-title">Derma-E</h4>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <h5 class="fs-4 mb-0">$900</h5>
              <p class="mb-0 text-decoration-line-through">$650</p>
            </div>
            <ul class="d-flex align-items-center gap-1 mb-0">
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="card overflow-hidden">
        <div class="position-relative">
          <a href="javascript:void(0)">
            <img src={S7} class="card-img-top" alt="flexy-img" />
          </a>
          <a href="javascript:void(0)" class="btn btn-primary rounded-circle p-2 d-flex align-items-center justify-content-center position-absolute bottom-0 end-0 me-3 mb-n3">
            <i class="ti ti-basket" />
          </a>
        </div>
        <div class="card-body p-4">
          <h4 class="card-title">Red Valvet Dress</h4>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <h5 class="fs-4 mb-0">$200</h5>
              <p class="mb-0 text-decoration-line-through">$150</p>
            </div>
            <ul class="d-flex align-items-center gap-1 mb-0">
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="card overflow-hidden">
        <div class="position-relative">
          <a href="javascript:void(0)">
            <img src={S11} class="card-img-top" alt="flexy-img" />
          </a>
          <a href="javascript:void(0)" class="btn btn-primary rounded-circle p-2 d-flex align-items-center justify-content-center position-absolute bottom-0 end-0 me-3 mb-n3">
            <i class="ti ti-basket" />
          </a>
        </div>
        <div class="card-body p-4">
          <h4 class="card-title">Super Games</h4>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <h5 class="fs-4 mb-0">$345</h5>
              <p class="mb-0 text-decoration-line-through">$205</p>
            </div>
            <ul class="d-flex align-items-center gap-1 mb-0">
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-warning">
                  <i class="ti ti-star" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card overflow-hidden">
        <div class="row">
          <div class="col-6 pe-0">
            <div class="p-4 mb-7">
              <h4 class="card-title">Uptown Funk</h4>
              <p class="mb-0">Jon Bon Jovi</p>
            </div>
            <ul class="d-flex align-items-center justify-content-between mb-0 list-unstyled px-3 pb-7">
              <li>
                <a href="javascript:void(0)" class="text-muted p-2">
                  <i class="ti ti-player-skip-back fs-5" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-danger p-2">
                  <i class="ti ti-player-play fs-5" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-muted p-2">
                  <i class="ti ti-player-skip-forward fs-5" />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 ps-0">
            <div class="position-relative w-100 h-100">
              <img src={BlogImg5} class="w-100 h-100 rounded-0" alt="flexy-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card overflow-hidden">
        <div class="row">
          <div class="col-6 pe-0">
            <div class="p-4 mb-7">
              <h4 class="card-title">Blank Space</h4>
              <p class="mb-0">Madonna</p>
            </div>
            <ul class="d-flex align-items-center justify-content-between mb-0 list-unstyled px-3 pb-7">
              <li>
                <a href="javascript:void(0)" class="text-muted p-2">
                  <i class="ti ti-player-skip-back fs-5" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-danger p-2">
                  <i class="ti ti-player-play fs-5" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-muted p-2">
                  <i class="ti ti-player-skip-forward fs-5" />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 ps-0">
            <div class="position-relative w-100 h-100">
              <img src={BlogImg4} class="w-100 h-100 rounded-0" alt="flexy-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card overflow-hidden">
        <div class="row">
          <div class="col-6 pe-0">
            <div class="p-4 mb-7">
              <h4 class="card-title">Lean On</h4>
              <p class="mb-0">Jennifer Lopez</p>
            </div>
            <ul class="d-flex align-items-center justify-content-between mb-0 list-unstyled px-3 pb-7">
              <li>
                <a href="javascript:void(0)" class="text-muted p-2">
                  <i class="ti ti-player-skip-back fs-5" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-danger p-2">
                  <i class="ti ti-player-play fs-5" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-muted p-2">
                  <i class="ti ti-player-skip-forward fs-5" />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 ps-0">
            <div class="position-relative w-100 h-100">
              <img src={BlogImg3} class="w-100 h-100 rounded-0" alt="flexy-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body p-4 d-flex align-items-center gap-3">
          <img src={User5} alt="flexy-img" class="rounded-circle" width="40" height="40" />
          <div>
            <h4 class="card-title mb-1">Betty Adams</h4>
            <span class="fs-2 d-flex align-items-center">
              <i class="ti ti-map-pin text-dark fs-3 me-1" />Sint Maarten</span>
          </div>
          <button class="btn btn-primary py-1 px-2 ms-auto">Follow</button>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body p-4 d-flex align-items-center gap-3">
          <img src={User2} alt="flexy-img" class="rounded-circle" width="40" height="40" />
          <div>
            <h4 class="card-title mb-1">Leo Pratt</h4>
            <span class="fs-2 d-flex align-items-center">
              <i class="ti ti-map-pin text-dark fs-3 me-1" />Bulgaria</span>
          </div>
          <button class="btn btn-primary py-1 px-2 ms-auto">Follow</button>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body p-4 d-flex align-items-center gap-3">
          <img src={User3} alt="flexy-img" class="rounded-circle" width="40" height="40" />
          <div>
            <h4 class="card-title mb-1">Charles Nunez</h4>
            <span class="fs-2 d-flex align-items-center">
              <i class="ti ti-map-pin text-dark fs-3 me-1" />Nepal</span>
          </div>
          <button class="btn btn-primary py-1 px-2 ms-auto">Follow</button>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-body p-4">
          <img src={User11} alt="flexy-img" class="img-fluid rounded-circle mb-4" width="80" height="80" />
          <h4 class="card-title">Andrew Grant</h4>
          <div class="d-flex align-items-center gap-4 mb-4">
            <div class="d-flex align-items-center">
              <a href="javascript:void(0)">
                <img src={User12} class="rounded-circle me-n2 card-hover border border-white" width="32" height="32" />
              </a>
              <a href="javascript:void(0)">
                <img src={User2} class="rounded-circle me-n2 card-hover border border-white" width="32" height="32" />
              </a>
              <a href="javascript:void(0)">
                <img src={User3} class="rounded-circle me-n2 card-hover border border-white" width="32" height="32" />
              </a>
            </div>
            <p class="mb-0">3 mutual friends</p>
          </div>
          <button class="btn bg-primary-subtle text-primary mb-3 w-100">Add Friend</button>
          <button class="btn bg-secondary-subtle text-secondary w-100">Remove</button>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-body p-4">
          <img src={User2} alt="flexy-img" class="img-fluid rounded-circle mb-4" width="80" height="80" />
          <h4 class="card-title">Leo Pratt</h4>
          <div class="d-flex align-items-center gap-4 mb-4">
            <div class="d-flex align-items-center">
              <a href="javascript:void(0)">
                <img src={User11} class="rounded-circle me-n2 card-hover border border-white" width="32" height="32" />
              </a>
              <a href="javascript:void(0)">
                <img src={User2} class="rounded-circle me-n2 card-hover border border-white" width="32" height="32" />
              </a>
              <a href="javascript:void(0)">
                <img src={User3} class="rounded-circle me-n2 card-hover border border-white" width="32" height="32" />
              </a>
            </div>
            <p class="mb-0">3 mutual friends</p>
          </div>
          <button class="btn bg-primary-subtle text-primary mb-3 w-100">Add Friend</button>
          <button class="btn bg-secondary-subtle text-secondary w-100">Remove</button>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-body p-4">
          <img src={User3} alt="flexy-img" class="img-fluid rounded-circle mb-4" width="80" height="80" />
          <h4 class="card-title">Charles Nunez</h4>
          <div class="d-flex align-items-center gap-4 mb-4">
            <div class="d-flex align-items-center">
              <a href="javascript:void(0)">
                <img src={User12} class="rounded-circle me-n2 card-hover border border-white" width="32" height="32" />
              </a>
              <a href="javascript:void(0)">
                <img src={User2} class="rounded-circle me-n2 card-hover border border-white" width="32" height="32" />
              </a>
              <a href="javascript:void(0)">
                <img src={User3} class="rounded-circle me-n2 card-hover border border-white" width="32" height="32" />
              </a>
            </div>
            <p class="mb-0">3 mutual friends</p>
          </div>
          <button class="btn bg-primary-subtle text-primary mb-3 w-100">Add Friend</button>
          <button class="btn bg-secondary-subtle text-secondary w-100">Remove</button>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-body p-4">
          <img src={User4} alt="flexy-img" class="img-fluid rounded-circle mb-4" width="80" height="80" />
          <h4 class="card-title">Lora Powers</h4>
          <div class="d-flex align-items-center gap-4 mb-4">
            <div class="d-flex align-items-center">
              <a href="javascript:void(0)">
                <img src={User9} class="rounded-circle me-n2 card-hover border border-white" width="32" height="32" />
              </a>
              <a href="javascript:void(0)">
                <img src={User2} class="rounded-circle me-n2 card-hover border border-white" width="32" height="32" />
              </a>
              <a href="javascript:void(0)">
                <img src={User3} class="rounded-circle me-n2 card-hover border border-white" width="32" height="32" />
              </a>
            </div>
            <p class="mb-0">3 mutual friends</p>
          </div>
          <button class="btn bg-primary-subtle text-primary mb-3 w-100">Add Friend</button>
          <button class="btn bg-secondary-subtle text-secondary w-100">Remove</button>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card hover-img">
        <div class="card-body p-4 text-center border-bottom">
          <img src={User5} alt="flexy-img" class="rounded-circle mb-3" width="80" height="80" />
          <h4 class="card-title mb-1">Betty Adams</h4>
          <span class="fs-2">Medical Secretary</span>
        </div>
        <ul class="px-2 py-2 list-unstyled d-flex align-items-center justify-content-center mb-0">
          <li class="position-relative">
            <a class="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
              <i class="ti ti-brand-facebook" />
            </a>
          </li>
          <li class="position-relative">
            <a class="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
              <i class="ti ti-brand-instagram" />
            </a>
          </li>
          <li class="position-relative">
            <a class="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
              <i class="ti ti-brand-github" />
            </a>
          </li>
          <li class="position-relative">
            <a class="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
              <i class="ti ti-brand-twitter" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card hover-img">
        <div class="card-body p-4 text-center border-bottom">
          <img src={User2} alt="flexy-img" class="rounded-circle mb-3" width="80" height="80" />
          <h4 class="card-title mb-1">Leo Pratt</h4>
          <span class="fs-2">Telecom Analyst</span>
        </div>
        <ul class="px-2 py-2 list-unstyled d-flex align-items-center justify-content-center mb-0">
          <li class="position-relative">
            <a class="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
              <i class="ti ti-brand-facebook" />
            </a>
          </li>
          <li class="position-relative">
            <a class="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
              <i class="ti ti-brand-instagram" />
            </a>
          </li>
          <li class="position-relative">
            <a class="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
              <i class="ti ti-brand-github" />
            </a>
          </li>
          <li class="position-relative">
            <a class="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
              <i class="ti ti-brand-twitter" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card hover-img">
        <div class="card-body p-4 text-center border-bottom">
          <img src={User3} alt="flexy-img" class="rounded-circle mb-3" width="80" height="80" />
          <h4 class="card-title mb-1">Charles Nunez</h4>
          <span class="fs-2">Environmental Specialist</span>
        </div>
        <ul class="px-2 py-2 list-unstyled d-flex align-items-center justify-content-center mb-0">
          <li class="position-relative">
            <a class="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
              <i class="ti ti-brand-facebook" />
            </a>
          </li>
          <li class="position-relative">
            <a class="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
              <i class="ti ti-brand-instagram" />
            </a>
          </li>
          <li class="position-relative">
            <a class="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
              <i class="ti ti-brand-github" />
            </a>
          </li>
          <li class="position-relative">
            <a class="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
              <i class="ti ti-brand-twitter" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <div class="card-body p-4">
          <h4 class="card-title mb-4">Settings</h4>
          <div class="d-flex align-items-center gap-3 pb-3 mb-3 border-bottom">
            <div class="d-flex align-items-center">
              <div class="text-bg-primary rounded-1 d-flex align-items-center justify-content-center p-6">
                <i class="ti ti-volume text-white fs-7" />
              </div>
            </div>
            <div class="position-relative w-100">
              <div class="d-flex align-items-center justify-content-between">
                <h6 class="mb-0 fs-4">Sound</h6>
                <span>45%</span>
              </div>
              <input type="range" class="form-range pt-2" id="customRange1" />
            </div>
          </div>
          <div class="d-flex align-items-center gap-3 pb-3 border-bottom mb-3">
            <div class="d-flex align-items-center">
              <div class="text-bg-secondary rounded-1 d-flex align-items-center justify-content-center p-6">
                <i class="ti ti-message text-white fs-7" />
              </div>
            </div>
            <div class="position-relative w-100 d-flex align-items-center justify-content-between">
              <div>
                <h6 class="mb-2 fw-semibold fs-4">Sound</h6>
                <span>Turn on chat during call%</span>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              </div>
            </div>
          </div>
          <div class="text-end">
            <button class="btn bg-danger-subtle text-danger me-3">Cencel</button>
            <button class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <div class="card-body p-4">
          <div class="d-flex align-items-center justify-content-between mb-6">
            <h6 class="mb-0 fs-4 mb-0">Andrew Grant</h6>
            <i class="ti ti-gift text-info fs-6" />
          </div>
          <img src={S1} alt="flexy-img" class="card-img w-100 object-fit-cover mb-4" height="160" />
          <button class="btn btn-primary w-100 fw-normal py-8">Gift to Friend ($50.00)</button>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <div class="card-body p-4">
          <div class="d-flex align-items-center justify-content-between mb-6">
            <h6 class="mb-0 fs-4 mb-0">Leo Pratt</h6>
            <i class="ti ti-gift text-info fs-6" />
          </div>
          <img src={S2} alt="flexy-img" class="card-img w-100 object-fit-cover mb-4" height="160" />
          <button class="btn btn-primary w-100 fw-normal py-8">Gift to Friend ($50.00)</button>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body p-4">
          <h4 class="card-title">Payment Gateways</h4>
          <p class="card-subtitle mb-7 pb-8">Platform for Income</p>
          <div class="position-relative">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="d-flex">
                <div class="p-8 bg-primary-subtle rounded-1 d-flex align-items-center justify-content-center me-6">
                  <img src={iconPaypal} alt="flexy-img" class="img-fluid" width="24" height="24" />
                </div>
                <div>
                  <h6 class="mb-1 fs-4 fw-semibold">PayPal</h6>
                  <p class="fs-3 mb-0">Big Brands</p>
                </div>
              </div>
              <h6 class="mb-0">+$6,235</h6>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="d-flex">
                <div class="p-8 bg-success-subtle rounded-1 d-flex align-items-center justify-content-center me-6">
                  <img src={iconOfficeBag} alt="flexy-img" class="img-fluid" width="24" height="24" />
                </div>
                <div>
                  <h6 class="mb-1 fs-4 fw-semibold">Wallet</h6>
                  <p class="fs-3 mb-0">Bill payment</p>
                </div>
              </div>
              <h6 class="mb-0 text-muted">+$345</h6>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="d-flex">
                <div class="p-8 bg-warning-subtle rounded-1 d-flex align-items-center justify-content-center me-6">
                  <img src={iconMasterCard} alt="flexy-img" class="img-fluid" width="24" height="24" />
                </div>
                <div>
                  <h6 class="mb-1 fs-4 fw-semibold">Credit card</h6>
                  <p class="fs-3 mb-0">Money reversed</p>
                </div>
              </div>
              <h6 class="mb-0">+$2,235</h6>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-7 pb-8">
              <div class="d-flex">
                <div class="p-8 bg-danger-subtle rounded-1 d-flex align-items-center justify-content-center me-6">
                  <img src={iconPie} alt="flexy-img" class="img-fluid" width="24" height="24" />
                </div>
                <div>
                  <h6 class="mb-1 fs-4 fw-semibold">Refund</h6>
                  <p class="fs-3 mb-0">Bill payment</p>
                </div>
              </div>
              <h6 class="mb-0 text-muted">-$32</h6>
            </div>
          </div>
          <button class="btn btn-primary w-100">View all transactions</button>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body p-4">
          <h4 class="card-title">Upcoming Activity</h4>
          <p class="card-subtitle mb-7 pb-8">In New year</p>
          <div class="position-relative">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="d-flex">
                <div class="p-8 bg-primary-subtle rounded-1 d-flex align-items-center justify-content-center me-6">
                  <img src={iconMapPin} alt="flexy-img" class="img-fluid" width="24" height="24" />
                </div>
                <div>
                  <h6 class="mb-1 fs-4 fw-semibold">Trip to singapore</h6>
                  <p class="fs-3 mb-0">working on</p>
                </div>
              </div>
              <h6 class="mb-0 text-muted">5 mins</h6>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="d-flex">
                <div class="p-8 bg-info-subtle rounded-1 d-flex align-items-center justify-content-center me-6">
                  <img src={iconDatabase} alt="flexy-img" class="img-fluid" width="24" height="24" />
                </div>
                <div>
                  <h6 class="mb-1 fs-4 fw-semibold">Archived Data</h6>
                  <p class="fs-3 mb-0">working on</p>
                </div>
              </div>
              <h6 class="mb-0 text-muted">10 mins</h6>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="d-flex">
                <div class="p-8 bg-warning-subtle rounded-1 d-flex align-items-center justify-content-center me-6">
                  <img src={iconPhone} alt="flexy-img" class="img-fluid" width="24" height="24" />
                </div>
                <div>
                  <h6 class="mb-1 fs-4 fw-semibold">Meeting with client</h6>
                  <p class="fs-3 mb-0">pending</p>
                </div>
              </div>
              <h6 class="mb-0 text-muted">10 mins</h6>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="d-flex">
                <div class="p-8 bg-danger-subtle rounded-1 d-flex align-items-center justify-content-center me-6">
                  <img src={iconScreenShare} alt="flexy-img" class="img-fluid" width="24" height="24" />
                </div>
                <div>
                  <h6 class="mb-1 fs-4 fw-semibold">Screening Task Team</h6>
                  <p class="fs-3 mb-0">working on</p>
                </div>
              </div>
              <h6 class="mb-0 text-muted">20 mins</h6>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex flex-shrink-0">
                <div class="p-8 bg-success-subtle rounded-1 d-flex align-items-center justify-content-center me-6">
                  <img src={iconMail} alt="flexy-img" class="img-fluid" width="24" height="24" />
                </div>
                <div>
                  <h6 class="mb-1 fs-4 fw-semibold">Send envelope to John</h6>
                  <p class="fs-3 mb-0">done</p>
                </div>
              </div>
              <h6 class="mb-0 text-muted flex-shrink-0">20 mins</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title fw-semibold mb-7">Recent Transactions</h4>
          <ul class="timeline-widget mb-0 position-relative mb-n4">
            <li class="timeline-item d-flex position-relative overflow-hidden">
              <div class="timeline-time mt-n1 text-muted flex-shrink-0 text-end">09:46</div>
              <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                <span class="timeline-badge bg-primary flex-shrink-0 mt-2">
                </span>
                <span class="timeline-badge-border d-block flex-shrink-0">
                </span>
              </div>
              <div class="timeline-desc fs-3 text-dark mt-n1">Payment received from John Doe of $385.90</div>
            </li>
            <li class="timeline-item d-flex position-relative overflow-hidden">
              <div class="timeline-time mt-n6 text-muted flex-shrink-0 text-end">09:46</div>
              <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                <span class="timeline-badge bg-warning flex-shrink-0">
                </span>
                <span class="timeline-badge-border d-block flex-shrink-0">
                </span>
              </div>
              <div class="timeline-desc fs-3 text-dark mt-n6 fw-semibold">New sale recorded
                <a href="javascript:void(0)" class="text-primary d-block fw-normal ">#ML-3467</a>
              </div>
            </li>
            <li class="timeline-item d-flex position-relative overflow-hidden">
              <div class="timeline-time mt-n6 text-muted flex-shrink-0 text-end">09:46</div>
              <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                <span class="timeline-badge bg-warning flex-shrink-0">
                </span>
                <span class="timeline-badge-border d-block flex-shrink-0">
                </span>
              </div>
              <div class="timeline-desc fs-3 text-dark mt-n6">Payment was made of $64.95 to Michael</div>
            </li>
            <li class="timeline-item d-flex position-relative overflow-hidden">
              <div class="timeline-time mt-n6 text-muted flex-shrink-0 text-end">09:46</div>
              <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                <span class="timeline-badge bg-secondary flex-shrink-0">
                </span>
                <span class="timeline-badge-border d-block flex-shrink-0">
                </span>
              </div>
              <div class="timeline-desc fs-3 text-dark mt-n6 fw-semibold">New sale recorded
                <a href="javascript:void(0)" class="text-primary d-block fw-normal ">#ML-3467</a>
              </div>
            </li>
            <li class="timeline-item d-flex position-relative overflow-hidden">
              <div class="timeline-time mt-n6 text-muted flex-shrink-0 text-end">09:46</div>
              <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                <span class="timeline-badge bg-danger flex-shrink-0">
                </span>
                <span class="timeline-badge-border d-block flex-shrink-0">
                </span>
              </div>
              <div class="timeline-desc fs-3 text-dark mt-n6 fw-semibold">Project meeting</div>
            </li>
            <li class="timeline-item d-flex position-relative overflow-hidden">
              <div class="timeline-time mt-n6 text-muted flex-shrink-0 text-end">09:46</div>
              <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                <span class="timeline-badge bg-primary flex-shrink-0">
                </span>
              </div>
              <div class="timeline-desc fs-3 text-dark mt-n6">Payment received from John Doe of $385.90</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
