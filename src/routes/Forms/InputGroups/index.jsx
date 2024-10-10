
export default function InputGroups() {
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
            <li class="breadcrumb-item" aria-current="page">Form Input Groups</li>
          </ol>
        </nav>
        <h2 class="mb-0 fw-bolder fs-8">Form Input Groups</h2>
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
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Input Addons Left */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Input Addons Left</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code1-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code1-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      -
                      <h5 class="modal-title" id="exampleModalLabel">
                        Input Addons Left - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;div class="input-group mb-3"&gt;{"\n"}{"          "}&lt;span class="input-group-text" id="basic-addon1"&gt;@&lt;/span&gt;{"\n"}{"          "}&lt;input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"&gt;{"\n"}{"      "}&lt;/div&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            Add span with
            <mark>
              <code>.input-group-text</code>
            </mark> class before
            <mark>
              <code>&lt;input&gt;</code>
            </mark>
          </p>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
      </div>
      {/* end Input Addons Left */}
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Input Addons Both Side */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Input Addons Both Side</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code2-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code2-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Input Addons Both Side - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;div class="input-group mb-3"&gt;{"\n"}{"          "}&lt;div class="input-group-prepend"&gt;{"\n"}{"              "}&lt;span class="input-group-text"&gt;{"\\$"}&lt;/span&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"          "}&lt;input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"&gt;{"\n"}{"          "}&lt;div class="input-group-append"&gt;{"\n"}{"              "}&lt;span class="input-group-text"&gt;.00&lt;/span&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"      "}&lt;/div&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            Add span with
            <mark>
              <code>.input-group-text</code>
            </mark> class before
            &amp; after
            <mark>
              <code>&lt;input&gt;</code>
            </mark>
          </p>
          <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
            <span class="input-group-text">.00</span>
          </div>
        </div>
      </div>
      {/* end Input Addons Both Side */}
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Input Addons Right */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Input Addons Right</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code3-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code3-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Input Addons Right - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;div class="input-group mb-3"&gt;{"\n"}{"        "}&lt;input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"&gt;{"\n"}{"        "}&lt;span class="input-group-text"&gt;@&lt;/span&gt;{"\n"}{"      "}&lt;/div&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            Add span with
            <mark>
              <code>.input-group-text</code>
            </mark> class
            after<mark>
              <code>&lt;input&gt;</code>
            </mark>
          </p>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            <span class="input-group-text">@</span>
          </div>
        </div>
      </div>
      {/* end Input Addons Right */}
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Input Addons Left Icon */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Input Addons Left Icon</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code4-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code4-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Input Addons Left Icon - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;div class="input-group"&gt;{"\n"}{"          "}&lt;span class="input-group-text"&gt;&lt;i data-feather="file-text" class="feather-sm fill-white"&gt;&lt;/i&gt;&lt;/span&gt;{"\n"}{"          "}&lt;input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"&gt;{"\n"}{"      "}&lt;/div&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="input-group">
            <span class="input-group-text">
              <i class="ti ti-file-text fs-4" />
            </span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
      </div>
      {/* end Input Addons Left Icon */}
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Input Addons Both Side Icon */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Input Addons Both Side Icon</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code5-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code5-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Input Addons Both Side Icon - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"        "}&lt;div class="input-group mb-3"&gt;{"\n"}{"            "}&lt;span class="input-group-text"&gt;&lt;i data-feather="file-text" class="feather-sm fill-white"&gt;&lt;/i&gt;&lt;/span&gt;{"\n"}{"            "}&lt;input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"&gt;{"\n"}{"            "}&lt;span class="input-group-text"&gt;&lt;i data-feather="trash-2" class="feather-sm fill-white"&gt;&lt;/i&gt;&lt;/span&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <i class="ti ti-file-text fs-4" />
            </span>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
            <span class="input-group-text">
              <i class="ti ti-trash fs-4" />
            </span>
          </div>
        </div>
      </div>
      {/* end Input Addons Both Side Icon */}
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Input Addons Right Icon */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Input Addons Right Icon</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code6-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code6-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Input Addons Right Icon - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;div class="input-group mb-3"&gt;{"\n"}{"          "}&lt;input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"&gt;{"\n"}{"          "}&lt;span class="input-group-text"&gt;&lt;i data-feather="file-text" class="feather-sm fill-white"&gt;&lt;/i&gt;&lt;/span&gt;{"\n"}{"      "}&lt;/div&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            <span class="input-group-text">
              <i class="ti ti-file-text fs-4" />
            </span>
          </div>
        </div>
      </div>
      {/* end Input Addons Right Icon */}
    </div>
    <h4 class="card-title text-dark mt-5 mb-4">Addons With Checkbox</h4>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Addons With Right Checkbox */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Right Checkbox</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code7-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code7-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Right Checkbox - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form&gt;{"\n"}{"          "}&lt;div class="input-group"&gt;{"\n"}{"              "}&lt;div class="input-group-text"&gt;{"\n"}{"                  "}&lt;div class="form-check"&gt;{"\n"}{"                      "}&lt;input type="checkbox" class="form-check-input" id="checkbox3" value="check"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="checkbox3"&gt;&lt;/label&gt;{"\n"}{"                  "}&lt;/div&gt;{"\n"}{"              "}&lt;/div&gt;{"\n"}{"              "}&lt;input type="text" class="form-control" aria-label="Text input with checkbox"&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add
            <mark>
              <code>input-group-prepend</code>
            </mark> before input
            field.
          </p>
          <form>
            <div class="input-group">
              <div class="input-group-text">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="checkbox3" value="check" />
                  <label class="form-check-label" for="checkbox3" />
                </div>
              </div>
              <input type="text" class="form-control" aria-label="Text input with checkbox" />
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Right Checkbox */}
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Addons With Checkbox &amp; Button */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">
              Checkbox &amp; Button
            </h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code8-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code8-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Checkbox &amp; Button - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form&gt;{"\n"}{"          "}&lt;div class="input-group"&gt;{"\n"}{"              "}&lt;div class="input-group-text"&gt;{"\n"}{"                  "}&lt;div class="form-check"&gt;{"\n"}{"                      "}&lt;input type="checkbox" class="form-check-input" id="checkbox2" value="check"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="checkbox2"&gt;&lt;/label&gt;{"\n"}{"                  "}&lt;/div&gt;{"\n"}{"              "}&lt;/div&gt;{"\n"}{"              "}&lt;input type="text" class="form-control" aria-label="Text input with checkbox"&gt;{"\n"}{"              "}&lt;button class="btn bg-info-subtle text-info " type="button"&gt;Go!&lt;/button&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add
            <mark>
              <code>input-group-prepend &amp; append</code>
            </mark>
            before and afetr input field.
          </p>
          <form>
            <div class="input-group">
              <div class="input-group-text">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="checkbox2" value="check" />
                  <label class="form-check-label" for="checkbox2" />
                </div>
              </div>
              <input type="text" class="form-control" aria-label="Text input with checkbox" />
              <button class="btn bg-primary-subtle text-primary " type="button">
                Go!
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Checkbox &amp; Button */}
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Addons With Left Checkbox */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Left Checkbox</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code9-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code9-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Left Checkbox - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form&gt;{"\n"}{"          "}&lt;div class="input-group"&gt;{"\n"}{"              "}&lt;input type="text" class="form-control" aria-label="Text input with checkbox"&gt;{"\n"}{"              "}&lt;div class="input-group-text"&gt;{"\n"}{"                  "}&lt;div class="form-check"&gt;{"\n"}{"                      "}&lt;input type="checkbox" class="form-check-input" id="checkbox4" value="check"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="checkbox4"&gt;&lt;/label&gt;{"\n"}{"                  "}&lt;/div&gt;{"\n"}{"              "}&lt;/div&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add
            <mark>
              <code>input-group-append</code>
            </mark> after input
            field.
          </p>
          <form>
            <div class="input-group">
              <input type="text" class="form-control" aria-label="Text input with checkbox" />
              <div class="input-group-text">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="checkbox4" value="check" />
                  <label class="form-check-label" for="checkbox4" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Left Checkbox */}
    </div>
    <h4 class="card-title mt-5 mb-4 text-dark">Addons With Radio</h4>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Addons With Left Radio */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Left Radio</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code10-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code10-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Left Radio - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form&gt;{"\n"}{"          "}&lt;div class="input-group"&gt;{"\n"}{"              "}&lt;div class="input-group-text"&gt;{"\n"}{"                  "}&lt;div class="form-check"&gt;{"\n"}{"                      "}&lt;input type="radio" id="customRadio5" name="customRadio" class="form-check-input"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="customRadio5"&gt;&lt;/label&gt;{"\n"}{"                  "}&lt;/div&gt;{"\n"}{"              "}&lt;/div&gt;{"\n"}{"              "}&lt;input type="text" class="form-control" aria-label="Text input with radio button"&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add
            <mark>
              <code>input-group-prepend</code>
            </mark> before input
            field.
          </p>
          <form>
            <div class="input-group">
              <div class="input-group-text">
                <div class="form-check">
                  <input type="radio" id="customRadio5" name="customRadio" class="form-check-input" />
                  <label class="form-check-label" for="customRadio5" />
                </div>
              </div>
              <input type="text" class="form-control" aria-label="Text input with radio button" />
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Left Radio */}
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Addons With Radio &amp; Button */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">
              Radio &amp; Button
            </h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code11-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code11-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Radio &amp; Button - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form&gt;{"\n"}{"          "}&lt;div class="input-group"&gt;{"\n"}{"              "}&lt;button class="btn bg-info-subtle text-info " type="button"&gt;Go!&lt;/button&gt;{"\n"}{"              "}&lt;input type="text" class="form-control" aria-label="Text input with radio button"&gt;{"\n"}{"              "}&lt;div class="input-group-text"&gt;{"\n"}{"                  "}&lt;div class="form-check"&gt;{"\n"}{"                      "}&lt;input type="radio" id="customRadio6" name="customRadio" class="form-check-input"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="customRadio6"&gt;&lt;/label&gt;{"\n"}{"                  "}&lt;/div&gt;{"\n"}{"              "}&lt;/div&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add
            <mark>
              <code>input-group-prepend &amp; append</code>
            </mark>
            before and afetr input field.
          </p>
          <form>
            <div class="input-group">
              <button class="btn bg-primary-subtle text-primary " type="button">
                Go!
              </button>
              <input type="text" class="form-control" aria-label="Text input with radio button" />
              <div class="input-group-text">
                <div class="form-check">
                  <input type="radio" id="customRadio6" name="customRadio" class="form-check-input" />
                  <label class="form-check-label" for="customRadio6" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Radio &amp; Button */}
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Addons With Right Radio */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Right Radio</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code12-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code12-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Right Radio - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form&gt;{"\n"}{"          "}&lt;div class="input-group"&gt;{"\n"}{"              "}&lt;input type="text" class="form-control" aria-label="Text input with radio button"&gt;{"\n"}{"              "}&lt;div class="input-group-append"&gt;{"\n"}{"                  "}&lt;div class="input-group-text"&gt;{"\n"}{"                      "}&lt;div class="form-check"&gt;{"\n"}{"                          "}&lt;input type="radio" id="customRadio7" name="customRadio" class="form-check-input"&gt;{"\n"}{"                          "}&lt;label class="form-check-label" for="customRadio7"&gt;&lt;/label&gt;{"\n"}{"                      "}&lt;/div&gt;{"\n"}{"                  "}&lt;/div&gt;{"\n"}{"              "}&lt;/div&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add
            <mark>
              <code>input-group-append</code>
            </mark> after input
            field.
          </p>
          <form>
            <div class="input-group">
              <input type="text" class="form-control" aria-label="Text input with radio button" />
              <div class="input-group-text">
                <div class="form-check">
                  <input type="radio" id="customRadio7" name="customRadio" class="form-check-input" />
                  <label class="form-check-label" for="customRadio7" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Right Radio */}
    </div>
    <h4 class="card-title mt-5 mb-4 text-dark">Addons With Buttons</h4>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Addons With Color Button Left */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Color Button Left</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code13-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code13-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Color Button Left - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"          "}&lt;div class="input-group mb-3"&gt;{"\n"}{"                  "}&lt;button class="btn bg-info-subtle text-info " type="button"&gt;Go!&lt;/button&gt;{"\n"}{"              "}&lt;input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add <mark>
              <code>button</code>
            </mark> in the prepend
            div.
          </p>
          <form class="mt-3">
            <div class="input-group mb-3">
              <button class="btn bg-primary-subtle text-primary" type="button">
                Go!
              </button>
              <input type="text" class="form-control" placeholder aria-label aria-describedby="basic-addon1" />
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Color Button Left */}
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Addons With Color Buttons Both */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">
              Color Buttons Both
            </h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code14-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code14-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Color Buttons Both - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"        "}&lt;div class="input-group mb-3"&gt;{"\n"}{"            "}&lt;button class="btn bg-danger-subtle text-danger{"  "}d-flex align-items-center" type="button"&gt;&lt;i data-feather="heart" class="fill-white feather-sm me-1"&gt;&lt;/i&gt; Love&lt;/button&gt;{"\n"}{"            "}&lt;input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"&gt;{"\n"}{"            "}&lt;button class="btn bg-info-subtle text-info{"  "}d-flex align-items-center" type="button"&gt;&lt;i data-feather="slash" class="fill-white feather-sm me-1"&gt;&lt;/i&gt;Hate&lt;/button&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add <mark>
              <code>button</code>
            </mark> in the prepend
            and append div.
          </p>
          <form class="mt-3">
            <div class="input-group mb-3">
              <button class="btn bg-danger-subtle text-danger d-flex align-items-center" type="button">
                <i class="ti ti-heart fs-5 me-1" />
                Love
              </button>
              <input type="text" class="form-control" placeholder aria-label aria-describedby="basic-addon1" />
              <button class="btn bg-info-subtle text-info d-flex align-items-center" type="button">
                <i class="ti ti-circle-half fs-4 me-1" />Hate
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Color Buttons Both */}
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Addons With Color Button Right */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">
              Color Button Right
            </h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code15-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code15-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Color Button Right - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"          "}&lt;div class="input-group mb-3"&gt;{"\n"}{"              "}&lt;input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"&gt;{"\n"}{"              "}&lt;button class="btn bg-info-subtle text-info " type="button"&gt;Go!&lt;/button&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add <mark>
              <code>button</code>
            </mark> in the append
            div.
          </p>
          <form class="mt-3">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder aria-label aria-describedby="basic-addon1" />
              <button class="btn bg-primary-subtle text-primary " type="button">
                Go!
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Color Button Right */}
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Addons With icon Button Left */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Icon Button Left</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code16-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code16-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With icon Button Left - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"        "}&lt;div class="input-group mb-3"&gt;{"\n"}{"            "}&lt;div class="input-group-prepend"&gt;{"\n"}{"                "}&lt;button class="btn bg-info-subtle text-info" type="button"&gt;{"\n"}{"                    "}&lt;i data-feather="settings" class="fill-white feather-sm"&gt;&lt;/i&gt;{"\n"}{"                "}&lt;/button&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <form class="mt-3">
            <div class="input-group mb-3">
              <button class="btn bg-primary-subtle text-primary" type="button">
                <i class="ti ti-settings fs-4" />
              </button>
              <input type="text" class="form-control" placeholder aria-label aria-describedby="basic-addon1" />
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With icon Button Left */}
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Addons With icon Buttons Both */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Icon Buttons Both</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code17-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code17-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With icon Buttons Both - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"          "}&lt;div class="input-group mb-3"&gt;{"\n"}{"              "}&lt;div class="input-group-prepend"&gt;{"\n"}{"                  "}&lt;button class="btn bg-info-subtle text-info" type="button"&gt;{"\n"}{"                      "}&lt;i data-feather="edit-2" class="fill-white feather-sm"&gt;&lt;/i&gt;{"\n"}{"                  "}&lt;/button&gt;{"\n"}{"              "}&lt;/div&gt;{"\n"}{"              "}&lt;input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"&gt;{"\n"}{"              "}&lt;button class="btn bg-danger-subtle text-danger" type="button"&gt;{"\n"}{"                  "}&lt;i data-feather="trash-2" class="fill-white feather-sm"&gt;&lt;/i&gt;{"\n"}{"              "}&lt;/button&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <form class="mt-3">
            <div class="input-group mb-3">
              <button class="btn bg-primary-subtle text-primary" type="button">
                <i class="ti ti-pencil fs-4" />
              </button>
              <input type="text" class="form-control" placeholder aria-label aria-describedby="basic-addon1" />
              <button class="btn bg-danger-subtle text-danger" type="button">
                <i class="ti ti-trash fs-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With icon Buttons Both */}
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
      {/* start Addons With icon Button Right */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Icon Button Right</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code18-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code18-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With icon Button Right - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"          "}&lt;div class="input-group mb-3"&gt;{"\n"}{"              "}&lt;input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"&gt;{"\n"}{"              "}&lt;button class="btn bg-danger-subtle text-danger" type="button"&gt;{"\n"}{"                  "}&lt;i data-feather="heart" class="fill-white feather-sm"&gt;&lt;/i&gt;{"\n"}{"              "}&lt;/button&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <form class="mt-3">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder aria-label aria-describedby="basic-addon1" />
              <button class="btn bg-danger-subtle text-danger" type="button">
                <i class="ti ti-heart fs-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With icon Button Right */}
    </div>
    <h4 class="card-title mt-5 mb-4 text-dark">Multiple Addons</h4>
    <div class="col-sm-12 col-md-6">
      {/* start Addons With Left Side */}
      <div class="card">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Addons With Left Side</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code19-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code19-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Left Side - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"          "}&lt;div class="input-group"&gt;{"\n"}{"              "}&lt;span class="input-group-text"&gt;{"\\$"}&lt;/span&gt;{"\n"}{"              "}&lt;span class="input-group-text"&gt;0.00&lt;/span&gt;{"\n"}{"              "}&lt;input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add
            <mark>
              <code>input-group-text</code>
            </mark> class in the
            input-group-prepend class.
          </p>
          <form class="mt-3">
            <div class="input-group">
              <span class="input-group-text">$</span>
              <span class="input-group-text">0.00</span>
              <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Left Side */}
    </div>
    <div class="col-sm-12 col-md-6">
      {/* start Addons With Right Side */}
      <div class="card">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="mb-0">Addons With Right Side</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code20-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code20-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Right Side - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"          "}&lt;div class="input-group"&gt;{"\n"}{"              "}&lt;input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"&gt;{"\n"}{"              "}&lt;span class="input-group-text"&gt;{"\\$"}&lt;/span&gt;{"\n"}{"              "}&lt;span class="input-group-text"&gt;0.00&lt;/span&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add
            <mark>
              <code>input-group-text</code>
            </mark> class in the
            input-group-append class.
          </p>
          <form class="mt-3">
            <div class="input-group">
              <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
              <span class="input-group-text">$</span>
              <span class="input-group-text">0.00</span>
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Right Side */}
    </div>
    <h4 class="card-title mt-5 mb-4 text-dark">Multiple Inputs with Addons</h4>
    <div class="col-sm-12 col-md-6">
      {/* start Input With Right Side */}
      <div class="card">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Input With Right Side</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code21-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code21-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Input With Right Side - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"        "}&lt;div class="input-group"&gt;{"\n"}{"            "}&lt;span class="input-group-text"&gt;First and last name&lt;/span&gt;{"\n"}{"            "}&lt;input type="text" class="form-control"&gt;{"\n"}{"            "}&lt;input type="text" class="form-control"&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add <mark>
              <code>form-control</code>
            </mark> two
            times.
          </p>
          <form class="mt-3">
            <div class="input-group">
              <span class="input-group-text">First and last name</span>
              <input type="text" class="form-control" />
              <input type="text" class="form-control" />
            </div>
          </form>
        </div>
      </div>
      {/* end Input With Right Side */}
    </div>
    <div class="col-sm-12 col-md-6">
      {/* start Input With Left Side */}
      <div class="card">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Input With Left Side</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code22-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code22-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Input With Left Side - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"        "}&lt;div class="input-group"&gt;{"\n"}{"            "}&lt;input type="text" class="form-control"&gt;{"\n"}{"            "}&lt;input type="text" class="form-control"&gt;{"\n"}{"            "}&lt;span class="input-group-text"&gt;First and last name&lt;/span&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add <mark>
              <code>form-control</code>
            </mark> two
            times.
          </p>
          <form class="mt-3">
            <div class="input-group">
              <input type="text" class="form-control" />
              <input type="text" class="form-control" />
              <span class="input-group-text">First and last name</span>
            </div>
          </form>
        </div>
      </div>
      {/* end Input With Left Side */}
    </div>
    <h4 class="card-title mt-5 mb-4 text-dark">Button Addons</h4>
    <div class="col-sm-12 col-md-6">
      {/* start Button With Left Side */}
      <div class="card">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Button With Left Side</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code23-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code23-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Button With Left Side - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"                                                                                      "}&lt;form class="mt-3"&gt;{"\n"}{"                                                                                          "}&lt;div class="input-group"&gt;{"\n"}{"                                                                                              "}&lt;button class="btn bg-secondary-subtle text-secondary " type="button"&gt;Button&lt;/button&gt;{"\n"}{"                                                                                              "}&lt;input type="text" class="form-control" placeholder="Left Side" aria-label="" aria-describedby="basic-addon1"&gt;{"\n"}{"                                                                                          "}&lt;/div&gt;{"\n"}{"                                                                                      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add <mark>
              <code>button</code>
            </mark> in the prepend
            class.
          </p>
          <form class="mt-3">
            <div class="input-group">
              <button class="btn bg-primary-subtle text-primary " type="button">
                Button
              </button>
              <input type="text" class="form-control" placeholder="Left Side" aria-label aria-describedby="basic-addon1" />
            </div>
          </form>
        </div>
      </div>
      {/* end Button With Left Side */}
    </div>
    <div class="col-sm-12 col-md-6">
      {/* start Button With Right Side */}
      <div class="card">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Button With Right Side</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code24-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code24-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Button With Right Side - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"          "}&lt;div class="input-group"&gt;{"\n"}{"              "}&lt;input type="text" class="form-control" placeholder="Right Side" aria-label="Recipient's username" aria-describedby="basic-addon2"&gt;{"\n"}{"              "}&lt;button class="btn bg-secondary-subtle text-secondary " type="button"&gt;Button&lt;/button&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add <mark>
              <code>button</code>
            </mark> in the append
            class.
          </p>
          <form class="mt-3">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Right Side" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <button class="btn bg-primary-subtle text-primary  rounded-end" type="button">
                Button
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* end Button With Right Side */}
    </div>
    <div class="col-sm-12 col-md-6">
      {/* start Multiple Buttons With Left Side */}
      <div class="card">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">
              Multiple Buttons With Left Side
            </h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code25-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code25-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Multiple Buttons With Left Side - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"        "}&lt;div class="input-group"&gt;{"\n"}{"            "}&lt;button class="btn bg-secondary-subtle text-secondary " type="button"&gt;Button&lt;/button&gt;{"\n"}{"            "}&lt;button class="btn bg-secondary-subtle text-secondary " type="button"&gt;Button&lt;/button&gt;{"\n"}{"            "}&lt;input type="text" class="form-control" placeholder="Left Side" aria-label="" aria-describedby="basic-addon1"&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <form class="mt-3">
            <div class="input-group">
              <button class="btn bg-primary-subtle text-primary " type="button">
                Button
              </button>
              <button class="btn bg-primary-subtle text-primary " type="button">
                Button
              </button>
              <input type="text" class="form-control" placeholder="Left Side" aria-label aria-describedby="basic-addon1" />
            </div>
          </form>
        </div>
      </div>
      {/* end Multiple Buttons With Left Side */}
    </div>
    <div class="col-sm-12 col-md-6">
      {/* start Multiple Buttons With Left Side */}
      <div class="card">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">
              Multiple Buttons With Left Side
            </h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code26-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code26-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Multiple Buttons With Left Side - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"        "}&lt;div class="input-group"&gt;{"\n"}{"            "}&lt;input type="text" class="form-control" placeholder="Right Side" aria-label="Recipient's username" aria-describedby="basic-addon2"&gt;{"\n"}{"            "}&lt;button class="btn bg-secondary-subtle text-secondary " type="button"&gt;Button&lt;/button&gt;{"\n"}{"            "}&lt;button class="btn bg-secondary-subtle text-secondary " type="button"&gt;Button&lt;/button&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <form class="mt-3">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Right Side" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <button class="btn bg-primary-subtle text-primary " type="button">
                Button
              </button>
              <button class="btn bg-primary-subtle text-primary  rounded-end" type="button">
                Button
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* end Multiple Buttons With Left Side */}
    </div>
    <h4 class="card-title mt-5 mb-4 text-dark">Addons With Dropdown Buttons</h4>
    <div class="col-sm-12 col-md-6">
      {/* start Addons With Left Side Dropdown */}
      <div class="card">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">
              Addons With Left Side Dropdown
            </h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code27-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code27-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Left Side Dropdown - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"        "}&lt;div class="input-group"&gt;{"\n"}{"            "}&lt;button class="btn bg-info-subtle text-info{"  "}dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"&gt;Dropdown&lt;/button&gt;{"\n"}{"            "}&lt;div class="dropdown-menu"&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;{"\n"}{"                "}&lt;div role="separator" class="dropdown-divider"&gt;&lt;/div&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;input type="text" class="form-control" aria-label="Text input with dropdown button"&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add <mark>
              <code>dropdown</code>
            </mark> in the
            prepend class div.
          </p>
          <form class="mt-3">
            <div class="input-group">
              <button class="btn bg-primary-subtle text-primary  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="javascript:void(0)">Action</a>
                <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                <div role="separator" class="dropdown-divider" />
                <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
              </div>
              <input type="text" class="form-control" aria-label="Text input with dropdown button" />
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Left Side Dropdown */}
    </div>
    <div class="col-sm-12 col-md-6">
      {/* start Addons With Right Side Dropdown */}
      <div class="card">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">
              Addons With Right Side Dropdown
            </h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code28-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code28-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Right Side Dropdown - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"        "}&lt;div class="input-group"&gt;{"\n"}{"            "}&lt;input type="text" class="form-control" aria-label="Text input with dropdown button"&gt;{"\n"}{"            "}&lt;button class="btn bg-info-subtle text-info{"  "}dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"&gt;Dropdown&lt;/button&gt;{"\n"}{"            "}&lt;div class="dropdown-menu"&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;{"\n"}{"                "}&lt;div role="separator" class="dropdown-divider"&gt;&lt;/div&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <p class="mb-3 card-subtitle">
            To use add <mark>
              <code>dropdown</code>
            </mark> in the
            append class div.
          </p>
          <form class="mt-3">
            <div class="input-group">
              <input type="text" class="form-control" aria-label="Text input with dropdown button" />
              <button class="btn bg-primary-subtle text-primary  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="javascript:void(0)">Action</a>
                <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                <div role="separator" class="dropdown-divider" />
                <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Right Side Dropdown */}
    </div>
    <div class="col-sm-12 col-md-6">
      {/* start Addons With Left Side Dropdown Segments */}
      <div class="card">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">
              Addons With Left Side Dropdown Segments
            </h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code29-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code29-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Left Side Dropdown Segments - View
                        Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"        "}&lt;div class="input-group"&gt;{"\n"}{"            "}&lt;button type="button" class="btn bg-secondary-subtle text-secondary "&gt;Action&lt;/button&gt;{"\n"}{"            "}&lt;button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"&gt;{"\n"}{"                "}&lt;span class="sr-only"&gt;Toggle Dropdown&lt;/span&gt;{"\n"}{"            "}&lt;/button&gt;{"\n"}{"            "}&lt;div class="dropdown-menu"&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;{"\n"}{"                "}&lt;div role="separator" class="dropdown-divider"&gt;&lt;/div&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;input type="text" class="form-control" aria-label="Text input with segmented dropdown button"&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <form class="mt-3">
            <div class="input-group">
              <button type="button" class="btn bg-primary-subtle text-primary ">
                Action
              </button>
              <button type="button" class="btn bg-primary-subtle text-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="javascript:void(0)">Action</a>
                <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                <div role="separator" class="dropdown-divider" />
                <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
              </div>
              <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" />
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Left Side Dropdown Segments */}
    </div>
    <div class="col-sm-12 col-md-6">
      {/* start Addons With Right Side Dropdown Segments */}
      <div class="card">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">
              Addons With Right Side Dropdown Segments
            </h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code30-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code30-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Addons With Right Side Dropdown Segments -
                        View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                                  "}<code>{"\n"}{"      "}&lt;form class="mt-3"&gt;{"\n"}{"        "}&lt;div class="input-group"&gt;{"\n"}{"            "}&lt;input type="text" class="form-control" aria-label="Text input with segmented dropdown button"&gt;{"\n"}{"            "}&lt;button type="button" class="btn bg-secondary-subtle text-secondary "&gt;Action&lt;/button&gt;{"\n"}{"            "}&lt;button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"&gt;{"\n"}{"                "}&lt;span class="sr-only"&gt;Toggle Dropdown&lt;/span&gt;{"\n"}{"            "}&lt;/button&gt;{"\n"}{"            "}&lt;div class="dropdown-menu"&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;{"\n"}{"                "}&lt;div role="separator" class="dropdown-divider"&gt;&lt;/div&gt;{"\n"}{"                "}&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"      "}&lt;/form&gt;{"\n"}{"                                                                                  "}</code>{"\n"}{"                                                                              "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <form class="mt-3">
            <div class="input-group">
              <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" />
              <button type="button" class="btn bg-primary-subtle text-primary ">
                Action
              </button>
              <button type="button" class="btn bg-primary-subtle text-primary dropdown-toggle rounded-end dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="javascript:void(0)">Action</a>
                <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                <div role="separator" class="dropdown-divider" />
                <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* end Addons With Right Side Dropdown Segments */}
    </div>
  </div>
</div>
    </>
  );
}
