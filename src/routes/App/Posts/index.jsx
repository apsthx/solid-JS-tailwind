import { User2, User3, User4, User5, User6, BlogImg1, BlogImg2, BlogImg3, BlogImg4, BlogImg5, BlogImg6, BlogImg8, BlogImg11 } from "../../../helper/img";

export default function Posts() {
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
            <li class="breadcrumb-item" aria-current="page">Blog</li>
          </ol>
        </nav>
        <h2 class="mb-0 fw-bolder fs-8">Blog</h2>
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
    <div class="col-md-6 col-lg-8">
      <div class="card blog blog-img-one position-relative overflow-hidden hover-img">
        <div class="card-body position-relative">
          <div class="d-flex flex-column justify-content-between h-100">
            <div class="d-flex align-items-start justify-content-between">
              <div class="position-relative" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Mollie Underwood">
                <img src={User4} alt="flexy-img" class="rounded-circle img-fluid" width="40" height="40" />
              </div>
              <span class="badge text-bg-primary fs-2 fw-semibold">Gadget</span>
            </div>
            <div>
              <a href="../horizontal/blog-detail.html" class="fs-7 my-4 fw-semibold text-white d-block lh-sm text-primary">Early Black Friday
                Amazon deals: cheap TVs, headphones, laptops</a>
              <div class="d-flex align-items-center gap-4">
                <div class="d-flex align-items-center gap-2 text-white fs-3 fw-normal">
                  <i class="ti ti-eye fs-5" />
                  6006
                </div>
                <div class="d-flex align-items-center gap-2 text-white fs-3 fw-normal">
                  <i class="ti ti-message-2 fs-5" />
                  3
                </div>
                <div class="d-flex align-items-center gap-1 text-white fw-normal ms-auto">
                  <i class="ti ti-point" />
                  <small>Fri, Jan 13</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="card blog blog-img-two position-relative overflow-hidden hover-img">
        <div class="card-body position-relative">
          <div class="d-flex flex-column justify-content-between h-100">
            <div class="d-flex align-items-start justify-content-between">
              <div class="position-relative" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Francisco Quinn">
                <img src={User5} alt="flexy-img" class="rounded-circle img-fluid" width="40" height="40" />
              </div>
              <span class="badge text-bg-primary fs-2 fw-semibold">Health</span>
            </div>
            <div>
              <a href="../horizontal/blog-detail.html" class="fs-7 my-4 fw-semibold text-white d-block lh-sm">Presented by Max
                Rushden with Barry Glendenning, Philippe Auclair</a>
              <div class="d-flex align-items-center gap-4">
                <div class="d-flex align-items-center gap-2 text-white fs-3 fw-normal">
                  <i class="ti ti-eye fs-5" />
                  713
                </div>
                <div class="d-flex align-items-center gap-2 text-white fs-3 fw-normal">
                  <i class="ti ti-message-2 fs-5" />
                  3
                </div>
                <div class="d-flex align-items-center gap-1 text-white fw-normal ms-auto">
                  <i class="ti ti-point" />
                  <small>Wed, Jan 18</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="card overflow-hidden hover-img">
        <div class="position-relative">
          <a href="../horizontal/blog-detail.html">
            <img src={BlogImg6} class="card-img-top" alt="flexy-img" />
          </a>
          <span class="badge text-bg-light fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">2
            min Read</span>
          <img src={User3} alt="flexy-img" class="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Addie Keller" />
        </div>
        <div class="card-body p-4">
          <span class="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">Gadget</span>
          <a class="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="../horizontal/blog-detail.html">As yen
            tumbles, gadget-loving Japan goes
            for iPhones</a>
          <div class="d-flex align-items-center gap-4">
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-eye text-dark fs-5" />9,125
            </div>
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-message-2 text-dark fs-5" />3
            </div>
            <div class="d-flex align-items-center fs-2 ms-auto">
              <i class="ti ti-point text-dark" />Mon, Jan 16
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="card overflow-hidden hover-img">
        <div class="position-relative">
          <a href="../horizontal/blog-detail.html">
            <img src={BlogImg11} class="card-img-top" alt="flexy-img" />
          </a>
          <span class="badge text-bg-light fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">2
            min Read</span>
          <img src={User2} alt="flexy-img" class="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Walter Palmer" />
        </div>
        <div class="card-body p-4">
          <span class="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">Social</span>
          <a class="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="../horizontal/blog-detail.html">Intel loses
            bid to revive antitrust case
            against patent foe Fortress</a>
          <div class="d-flex align-items-center gap-4">
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-eye text-dark fs-5" />4,150
            </div>
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-message-2 text-dark fs-5" />38
            </div>
            <div class="d-flex align-items-center fs-2 ms-auto">
              <i class="ti ti-point text-dark" />Sun, Jan 15
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="card overflow-hidden hover-img">
        <div class="position-relative">
          <a href="../horizontal/blog-detail.html">
            <img src={BlogImg8} class="card-img-top" alt="flexy-img" />
          </a>
          <span class="badge text-bg-light fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">2
            min Read</span>
          <img src={User3} alt="flexy-img" class="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Miguel Kennedy" />
        </div>
        <div class="card-body p-4">
          <span class="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">Health</span>
          <a class="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="../horizontal/blog-detail.html">COVID
            outbreak deepens as more lockdowns
            loom in China</a>
          <div class="d-flex align-items-center gap-4">
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-eye text-dark fs-5" />9,480
            </div>
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-message-2 text-dark fs-5" />12
            </div>
            <div class="d-flex align-items-center fs-2 ms-auto">
              <i class="ti ti-point text-dark" />Sat, Jan 14
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="card overflow-hidden hover-img">
        <div class="position-relative">
          <a href="../horizontal/blog-detail.html">
            <img src={BlogImg5} class="card-img-top" alt="flexy-img" />
          </a>
          <span class="badge text-bg-light fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">2
            min Read</span>
          <img src={User5} alt="flexy-img" class="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Esther Lindsey" />
        </div>
        <div class="card-body p-4">
          <span class="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">Lifestyle</span>
          <a class="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="../horizontal/blog-detail.html">Streaming
            video way before it was cool, go
            dark tomorrow</a>
          <div class="d-flex align-items-center gap-4">
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-eye text-dark fs-5" />2252
            </div>
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-message-2 text-dark fs-5" />3
            </div>
            <div class="d-flex align-items-center fs-2 ms-auto">
              <i class="ti ti-point text-dark" />Sat, Jan 14
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="card overflow-hidden hover-img">
        <div class="position-relative">
          <a href="../horizontal/blog-detail.html">
            <img src={BlogImg3} class="card-img-top" alt="flexy-img" />
          </a>
          <span class="badge text-bg-light fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">2
            min Read</span>
          <img src={User3} alt="flexy-img" class="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Leroy Greer" />
        </div>
        <div class="card-body p-4">
          <span class="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">Design</span>
          <a class="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="../horizontal/blog-detail.html">Apple is
            apparently working on a new
            ‘streamlined’ accessibility</a>
          <div class="d-flex align-items-center gap-4">
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-eye text-dark fs-5" />5860
            </div>
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-message-2 text-dark fs-5" />38
            </div>
            <div class="d-flex align-items-center fs-2 ms-auto">
              <i class="ti ti-point text-dark" />Fri, Jan 13
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="card overflow-hidden hover-img">
        <div class="position-relative">
          <a href="../horizontal/blog-detail.html">
            <img src={BlogImg2} class="card-img-top" alt="flexy-img" />
          </a>
          <span class="badge text-bg-light fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">2
            min Read</span>
          <img src={User2} alt="flexy-img" class="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tommy Butler" />
        </div>
        <div class="card-body p-4">
          <span class="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">Lifestyle</span>
          <a class="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="../horizontal/blog-detail.html">After
            Twitter Staff Cuts, Survivors Face
            ‘Radio Silence</a>
          <div class="d-flex align-items-center gap-4">
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-eye text-dark fs-5" />6315
            </div>
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-message-2 text-dark fs-5" />12
            </div>
            <div class="d-flex align-items-center fs-2 ms-auto">
              <i class="ti ti-point text-dark" />Wed, Jan 11
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="card overflow-hidden hover-img">
        <div class="position-relative">
          <a href="../horizontal/blog-detail.html">
            <img src={BlogImg4} class="card-img-top" alt="flexy-img" />
          </a>
          <span class="badge text-bg-light fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">2
            min Read</span>
          <img src={User4} alt="flexy-img" class="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Donald Holmes" />
        </div>
        <div class="card-body p-4">
          <span class="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">Design</span>
          <a class="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="../horizontal/blog-detail.html">Why Figma is
            selling to Adobe for $20
            billion</a>
          <div class="d-flex align-items-center gap-4">
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-eye text-dark fs-5" />7570
            </div>
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-message-2 text-dark fs-5" />38
            </div>
            <div class="d-flex align-items-center fs-2 ms-auto">
              <i class="ti ti-point text-dark" />Wed, Jan 11
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="card overflow-hidden hover-img">
        <div class="position-relative">
          <a href="../horizontal/blog-detail.html">
            <img src={BlogImg1} class="card-img-top" alt="flexy-img" />
          </a>
          <span class="badge text-bg-light fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">2
            min Read</span>
          <img src={User6} alt="flexy-img" class="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Eric Douglas" />
        </div>
        <div class="card-body p-4">
          <span class="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">Gadget</span>
          <a class="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="../horizontal/blog-detail.html">Garmins
            Instinct Crossover is a rugged
            hybrid smartwatch</a>
          <div class="d-flex align-items-center gap-4">
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-eye text-dark fs-5" />6763
            </div>
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-message-2 text-dark fs-5" />12
            </div>
            <div class="d-flex align-items-center fs-2 ms-auto">
              <i class="ti ti-point text-dark" />Tue, Jan 10
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav aria-label="...">
    <ul class="pagination justify-content-center mb-0 mt-4">
      <li class="page-item">
        <a class="page-link border-0 rounded-circle text-dark round-32 d-flex align-items-center justify-content-center" href="javascript:void(0)">
          <i class="ti ti-chevron-left" />
        </a>
      </li>
      <li class="page-item active" aria-current="page">
        <a class="page-link border-0 rounded-circle round-32 mx-1 d-flex align-items-center justify-content-center" href="javascript:void(0)">1</a>
      </li>
      <li class="page-item">
        <a class="page-link border-0 rounded-circle text-dark round-32 mx-1 d-flex align-items-center justify-content-center" href="javascript:void(0)">2</a>
      </li>
      <li class="page-item">
        <a class="page-link border-0 rounded-circle text-dark round-32 mx-1 d-flex align-items-center justify-content-center" href="javascript:void(0)">3</a>
      </li>
      <li class="page-item">
        <a class="page-link border-0 rounded-circle text-dark round-32 mx-1 d-flex align-items-center justify-content-center" href="javascript:void(0)">4</a>
      </li>
      <li class="page-item">
        <a class="page-link border-0 rounded-circle text-dark round-32 mx-1 d-flex align-items-center justify-content-center" href="javascript:void(0)">5</a>
      </li>
      <li class="page-item">
        <a class="page-link border-0 rounded-circle text-dark round-32 mx-1 d-flex align-items-center justify-content-center" href="javascript:void(0)">...</a>
      </li>
      <li class="page-item">
        <a class="page-link border-0 rounded-circle text-dark round-32 mx-1 d-flex align-items-center justify-content-center" href="javascript:void(0)">10</a>
      </li>
      <li class="page-item">
        <a class="page-link border-0 rounded-circle text-dark round-32 d-flex align-items-center justify-content-center" href="javascript:void(0)">
          <i class="ti ti-chevron-right" />
        </a>
      </li>
    </ul>
  </nav>
</div>
      </>
    );
  }
  