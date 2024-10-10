
export default function Alerts() {
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
                  <li class="breadcrumb-item" aria-current="page">Notification</li>
                </ol>
              </nav>
              <h2 class="mb-0 fw-bolder fs-8">Notification</h2>
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
                <h4 class="card-title">Default Alert</h4>
                <p class="mb-3 card-subtitle">Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight
                  <strong>required</strong>contextual classes (e.g.,
                  <mark> <code>.alert-success</code>
                  </mark>). For background color use class
                  <mark> <code>.bg-* </code>
                  </mark>,
                  <mark> <code>.text-white </code>
                  </mark>
                </p>
                <div class="alert alert-primary text-primary role=" alert>
                  <strong>Primary -</strong>A simple primary alert</div>
                <div class="alert alert-secondary text-secondary" role="alert">
                  <strong>Secondary -</strong>A simple secondary alert</div>
                <div class="alert alert-success text-success" role="alert">
                  <strong>Success -</strong>A simple success alert</div>
                <div class="alert alert-danger text-danger" role="alert">
                  <strong>Error -</strong>A simple danger alert</div>
                <div class="alert alert-warning text-warning" role="alert">
                  <strong>Warning -</strong>A simple warning alert</div>
                <div class="alert alert-info text-info" role="alert">
                  <strong>Info -</strong>A simple info alert</div>
                <div class="alert bg-light-subtle" role="alert">
                  <strong>Light -</strong>A simple light alert</div>
                <div class="alert bg-dark-subtle text-white" role="alert">
                  <strong>Dark -</strong>A simple dark alert</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title">Dismissing Alerts</h4>
                <p class="mb-3 card-subtitle">Add a dismiss button and the
                  <mark> <code>.alert-dismissible</code>
                  </mark>class, which adds extra padding to the right of the alert and positions the
                  <mark> <code>.close</code>
                  </mark>button.</p>
                <div class="alert alert-primary alert-dismissible bg-primary text-white border-0 fade show" role="alert">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <strong>Primary -</strong>A simple primary alert</div>
                <div class="alert alert-secondary alert-dismissible bg-secondary text-white border-0 fade show" role="alert">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <strong>Secondary -</strong>A simple secondary alert</div>
                <div class="alert alert-success alert-dismissible bg-success text-white border-0 fade show" role="alert">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <strong>Success -</strong>A simple success alert</div>
                <div class="alert alert-danger alert-dismissible bg-danger text-white border-0 fade show" role="alert">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <strong>Error -</strong>A simple danger alert</div>
                <div class="alert alert-warning text-warning alert-dismissible fade show" role="alert">
                  <button type="button" class="btn-close btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <strong>Warning -</strong>A simple warning alert</div>
                <div class="alert alert-info text-info alert-dismissible fade show" role="alert">
                  <button type="button" class="btn-close btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <strong>Info -</strong>A simple info alert</div>
                <div class="alert bg-light-subtle alert-dismissible fade show" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <strong>Light -</strong>A simple light alert</div>
                <div class="alert bg-dark-subtle text-white alert-dismissible fade show mb-0" role="alert">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <strong>Dark -</strong>A simple dark alert</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title">Outline Alerts</h4>
                <p class="mb-3 card-subtitle">Add a dismiss button and the
                  <mark> <code>.border-{'{'} color {'}'}</code>
                  </mark>class, which adds extra padding to the right of the alert and positions the
                  <mark> <code>.close</code>
                  </mark>button.</p>
                <div class="alert customize-alert alert-dismissible text-primary border border-primary fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 flex-shrink-0 text-primary" />A simple primary outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible border-secondary text-secondary fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-secondary" />A simple secondary outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible border-success text-success fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-success" />A simple success outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible border-danger text-danger fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-danger" />A simple danger outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible border-warning text-warning fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-warning" />A simple warning outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible border-info text-info fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-info" />A simple info outline alert</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title">Light Alerts</h4>
                <p class="mb-3 card-subtitle">Add a dismiss button and the
                  <mark> <code>.alert-light-{'{'} color {'}'}</code>
                  </mark>class, which adds extra padding to the right of the alert and positions the
                  <mark> <code>.close</code>
                  </mark>button.</p>
                <div class="alert customize-alert alert-dismissible text-primary text-primary alert-light-primary bg-primary-subtle fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 flex-shrink-0 text-primary" />A simple primary outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible text-secondary alert-light-secondary bg-secondary-subtle fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-secondary" />A simple secondary outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible text-success alert-light-success bg-success-subtle fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-success" />A simple success outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible alert-light-danger bg-danger-subtle text-danger fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-danger" />A simple danger outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible alert-light-warning bg-warning-subtle text-warning fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-warning" />A simple warning outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible alert-light-info bg-info-subtle text-info fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-info" />A simple info outline alert</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title">Outline Rounded Alerts</h4>
                <p class="mb-3 card-subtitle">Add a dismiss button and the
                  <mark> <code>.rounded-pill</code>
                  </mark>class, which adds extra padding to the right of the alert and positions the
                  <mark> <code>.close</code>
                  </mark>button.</p>
                <div class="alert customize-alert alert-dismissible rounded-pill text-primary border border-primary fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 flex-shrink-0 text-primary" />A simple primary outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible rounded-pill border-secondary text-secondary fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-secondary" />A simple secondary outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible rounded-pill border-success text-success fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-success" />A simple success outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible rounded-pill border-danger text-danger fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-danger" />A simple danger outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible rounded-pill border-warning text-warning fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-warning" />A simple warning outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible rounded-pill border-info text-info fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-info" />A simple info outline alert</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title">Light Rounded Alerts</h4>
                <p class="mb-3 card-subtitle">Add a dismiss button and the
                  <mark> <code>.alert-light-{'{'} color {'}'}</code>
                  </mark>class, which adds extra padding to the right of the alert and positions the
                  <mark> <code>.close</code>
                  </mark>button.</p>
                <div class="alert customize-alert alert-dismissible text-primary rounded-pill alert-light-primary bg-primary-subtle fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 flex-shrink-0 text-primary" />A simple primary outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible text-secondary rounded-pill alert-light-secondary bg-secondary-subtle fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-secondary" />A simple secondary outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible text-success rounded-pill alert-light-success bg-success-subtle text-success fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-success" />A simple success outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible rounded-pill alert-light-danger bg-danger-subtle text-danger fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-danger" />A simple danger outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible rounded-pill alert-light-warning bg-warning-subtle text-warning fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-warning" />A simple warning outline alert</div>
                </div>
                <div class="alert customize-alert alert-dismissible rounded-pill alert-light-info bg-info-subtle text-info fade show remove-close-icon" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  </button>
                  <div class="d-flex align-items-center  me-3 me-md-0">
                    <i class="ti ti-info-circle fs-5 me-2 text-info" />A simple info outline alert</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <div class="mb-3">
                  <h5 class="mb-0">Notify Alerts</h5>
                </div>
                <div class="alert customize-alert alert-dismissible text-primary alert-light-primary bg-primary-subtle fade show remove-close-icon" role="alert">
                  <span class="side-line bg-primary">
                  </span>
                  <div class="d-flex align-items-center ">
                    <i class="ti ti-info-circle fs-5 me-2 flex-shrink-0 text-primary" />
                    <span class="text-truncate">A primary outline alert</span>
                    <div class="ms-auto d-flex justify-content-end">
                      <a href="javascript:void(0)" class="px-2 btn" data-bs-dismiss="alert" aria-label="Close">
                        <i class="ti ti-trash fs-5 text-primary" />
                      </a>
                      <a href="javascript:void(0)" class="px-2 btn" data-bs-dismiss="alert" aria-label="Close">
                        <i class="ti ti-settings fs-5 text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="alert customize-alert alert-dismissible text-secondary alert-light-secondary bg-secondary-subtle fade show remove-close-icon" role="alert">
                  <span class="side-line bg-secondary">
                  </span>
                  <div class="d-flex align-items-center ">
                    <i class="ti ti-info-circle fs-5 text-secondary me-2 flex-shrink-0" />
                    <span class="text-truncate">A secondary outline alert</span>
                    <div class="ms-auto d-flex justify-content-end">
                      <a href="javascript:void(0)" class="px-2 btn" data-bs-dismiss="alert" aria-label="Close">
                        <i class="ti ti-trash fs-5 text-secondary" />
                      </a>
                      <a href="javascript:void(0)" class="px-2 btn" data-bs-dismiss="alert" aria-label="Close">
                        <i class="ti ti-settings fs-5 text-secondary" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="alert customize-alert alert-dismissible text-success alert-light-success bg-success-subtle fade show remove-close-icon" role="alert">
                  <span class="side-line bg-success">
                  </span>
                  <div class="d-flex align-items-center ">
                    <i class="ti ti-info-circle fs-5 text-secondary me-2 flex-shrink-0" />
                    <span class="text-truncate">A success outline alert</span>
                    <div class="ms-auto d-flex justify-content-end">
                      <a href="javascript:void(0)" class="px-2 btn" data-bs-dismiss="alert" aria-label="Close">
                        <i class="ti ti-trash fs-5 text-success" />
                      </a>
                      <a href="javascript:void(0)" class="px-2 btn" data-bs-dismiss="alert" aria-label="Close">
                        <i class="ti ti-settings fs-5 text-success" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="alert customize-alert alert-dismissible text-danger alert-light-danger bg-danger-subtle fade show remove-close-icon" role="alert">
                  <span class="side-line bg-danger">
                  </span>
                  <div class="d-flex align-items-center ">
                    <i class="ti ti-info-circle fs-5 text-danger me-2 flex-shrink-0" />
                    <span class="text-truncate">A danger outline alert</span>
                    <div class="ms-auto d-flex justify-content-end">
                      <a href="javascript:void(0)" class="px-2 btn" data-bs-dismiss="alert" aria-label="Close">
                        <i class="ti ti-trash fs-5 text-danger" />
                      </a>
                      <a href="javascript:void(0)" class="px-2 btn" data-bs-dismiss="alert" aria-label="Close">
                        <i class="ti ti-settings fs-5 text-danger" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="alert customize-alert alert-dismissible text-warning alert-light-warning bg-warning-subtle fade show remove-close-icon" role="alert">
                  <span class="side-line bg-warning">
                  </span>
                  <div class="d-flex align-items-center ">
                    <i class="ti ti-info-circle fs-5 text-warning me-2 flex-shrink-0" />
                    <span class="text-truncate">A warning outline alert</span>
                    <div class="ms-auto d-flex justify-content-end">
                      <a href="javascript:void(0)" class="px-2 btn" data-bs-dismiss="alert" aria-label="Close">
                        <i class="ti ti-trash fs-5 text-warning" />
                      </a>
                      <a href="javascript:void(0)" class="px-2 btn" data-bs-dismiss="alert" aria-label="Close">
                        <i class="ti ti-settings fs-5 text-warning" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="alert customize-alert alert-dismissible text-info alert-light-info bg-info-subtle fade show remove-close-icon" role="alert">
                  <span class="side-line bg-info">
                  </span>
                  <div class="d-flex align-items-center ">
                    <i class="ti ti-info-circle fs-5 text-info me-2 flex-shrink-0" />
                    <span class="text-truncate">A info outline alert</span>
                    <div class="ms-auto d-flex justify-content-end">
                      <a href="javascript:void(0)" class="px-2 btn" data-bs-dismiss="alert" aria-label="Close">
                        <i class="ti ti-trash fs-5 text-info" />
                      </a>
                      <a href="javascript:void(0)" class="px-2 btn" data-bs-dismiss="alert" aria-label="Close">
                        <i class="ti ti-settings fs-5 text-info" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title">Alerts Links</h4>
                <p class="mb-3 card-subtitle">Use the
                  <mark> <code>.alert-link</code>
                  </mark>utility class to quickly provide matching colored links within any alert.</p>
                <div class="alert alert-primary" role="alert">A simple primary alert with
                  <a href="javascript:void(0)" class="alert-link">an example link</a>. Give it a click if you like.</div>
                <div class="alert alert-secondary" role="alert">A simple secondary alert with
                  <a href="javascript:void(0)" class="alert-link">an example link</a>. Give it a click if you like.</div>
                <div class="alert alert-success" role="alert">A simple success alert with
                  <a href="javascript:void(0)" class="alert-link">an example link</a>. Give it a click if you like.</div>
                <div class="alert alert-danger" role="alert">A simple danger alert with
                  <a href="javascript:void(0)" class="alert-link">an example link</a>. Give it a click if you like.</div>
                <div class="alert alert-warning" role="alert">A simple warning alert with
                  <a href="javascript:void(0)" class="alert-link">an example link</a>. Give it a click if you like.</div>
                <div class="alert alert-info" role="alert">A simple info alert with
                  <a href="javascript:void(0)" class="alert-link">an example link</a>. Give it a click if you like.</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body">
                <h4 class="card-title">Additional content</h4>
                <p class="mb-3 card-subtitle">Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
                <div class="alert alert-light-success bg-success-subtle bg-success-subtle text-success" role="alert">
                  <h4 class="alert-heading">Well done!</h4>
                  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                  <hr />
                  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>
                <div class="alert alert-light-danger bg-danger-subtle bg-danger-subtle text-danger" role="alert">
                  <h4 class="alert-heading">Alert!</h4>
                  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                  <hr />
                  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
