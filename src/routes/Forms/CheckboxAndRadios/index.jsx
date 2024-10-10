
export default function CheckboxAndRadios() {
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
            <li class="breadcrumb-item" aria-current="page">Checkboxes</li>
          </ol>
        </nav>
        <h2 class="mb-0 fw-bolder fs-8">Checkboxes</h2>
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
  {/* ------------------------------------------ */}
  {/* checkboxs */}
  {/* ------------------------------------------ */}
  <div class="row">
    <div class="col-lg-6 d-flex align-items-stretch">
      {/* start Checks */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Checks</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code1-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code1-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Checks -View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                    "}<code>{"\n"}{"        "}&lt;div class="form-check"&gt;{"\n"}{"          "}&lt;input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"&gt;{"\n"}{"          "}&lt;label class="form-check-label" for="flexCheckDefault"&gt;{"\n"}{"            "}Default checkbox{"\n"}{"          "}&lt;/label&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="form-check"&gt;{"\n"}{"          "}&lt;input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked&gt;{"\n"}{"          "}&lt;label class="form-check-label" for="flexCheckChecked"&gt;{"\n"}{"            "}Checked checkbox{"\n"}{"          "}&lt;/label&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"                                                                    "}</code>{"\n"}{"                                                                "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="form-check py-2">
            <input class="form-check-input" type="checkbox" value id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div class="form-check py-2">
            <input class="form-check-input" type="checkbox" value id="flexCheckChecked" checked />
            <label class="form-check-label" for="flexCheckChecked">
              Checked checkbox
            </label>
          </div>
        </div>
      </div>
      {/* end Checks */}
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      {/* start Checks - Disabled */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Checks - Disabled</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary text-decoration-none btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code3-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code3-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                    "}<code>{"\n"}{"        "}&lt;div class="form-check"&gt;{"\n"}{"          "}&lt;input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"&gt;{"\n"}{"          "}&lt;label class="form-check-label" for="flexCheckIndeterminate"&gt;{"\n"}{"            "}Indeterminate checkbox{"\n"}{"          "}&lt;/label&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"                                                                    "}</code>{"\n"}{"                                                                "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="form-check py-2">
            <input class="form-check-input" type="checkbox" value id="flexCheckDisabled" disabled />
            <label class="form-check-label" for="flexCheckDisabled">
              Disabled checkbox
            </label>
          </div>
          <div class="form-check py-2">
            <input class="form-check-input" type="checkbox" value id="flexCheckCheckedDisabled" checked disabled />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Disabled checked checkbox
            </label>
          </div>
        </div>
      </div>
      {/* end Checks - Disabled */}
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      {/* start Checks - Colors */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Checks - Colors</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary text-decoration-none btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code5-1-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code5-1-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                        "}<code>{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Success&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success" type="checkbox" id="success-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success" type="checkbox" id="success2-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success2-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success" type="checkbox" id="success3-check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success3-check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Danger&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger" type="checkbox" id="danger-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger" type="checkbox" id="danger2-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger2-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger" type="checkbox" id="danger3-check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger3-check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Warning&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning" type="checkbox" id="warning-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning" type="checkbox" id="warning2-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning2-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning" type="checkbox" id="warning3-check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning3-check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Primary&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary" type="checkbox" id="primary-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary" type="checkbox" id="primary2-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary2-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary" type="checkbox" id="primary3-check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary3-check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Secondary&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary" type="checkbox" id="secondary-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary" type="checkbox" id="secondary2-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary2-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary" type="checkbox" id="secondary3-check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary3-check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"                                                                        "}</code>{"\n"}{"                                                                "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Success</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input success" type="checkbox" id="success-check" value="option1" />
                <label class="form-check-label" for="success-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input success" type="checkbox" id="success2-check" value="option1" checked />
                <label class="form-check-label" for="success2-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input success" type="checkbox" id="success3-check" value="option1" disabled checked />
                <label class="form-check-label" for="success3-check">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Danger</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input danger" type="checkbox" id="danger-check" value="option1" />
                <label class="form-check-label" for="danger-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input danger" type="checkbox" id="danger2-check" value="option1" checked />
                <label class="form-check-label" for="danger2-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input danger" type="checkbox" id="danger3-check" value="option1" disabled checked />
                <label class="form-check-label" for="danger3-check">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Warning</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input warning" type="checkbox" id="warning-check" value="option1" />
                <label class="form-check-label" for="warning-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input warning" type="checkbox" id="warning2-check" value="option1" checked />
                <label class="form-check-label" for="warning2-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input warning" type="checkbox" id="warning3-check" value="option1" disabled checked />
                <label class="form-check-label" for="warning3-check">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Primary</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input primary" type="checkbox" id="primary-check" value="option1" />
                <label class="form-check-label" for="primary-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input primary" type="checkbox" id="primary2-check" value="option1" checked />
                <label class="form-check-label" for="primary2-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input primary" type="checkbox" id="primary3-check" value="option1" disabled checked />
                <label class="form-check-label" for="primary3-check">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Secondary</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary" type="checkbox" id="secondary-check" value="option1" />
                <label class="form-check-label" for="secondary-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary" type="checkbox" id="secondary2-check" value="option1" checked />
                <label class="form-check-label" for="secondary2-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary" type="checkbox" id="secondary3-check" value="option1" disabled checked />
                <label class="form-check-label" for="secondary3-check">Disabled</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Checks - Colors */}
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      {/* start Checks - Light Colors */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Checks - Light Colors</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary text-decoration-none btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code5-2-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code5-2-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Checks - Light Colors - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                        "}<code>{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Light Success&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success check-light-success" type="checkbox" id="success-light-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success-light-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success" type="checkbox" id="success2-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success2-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success" type="checkbox" id="success3-check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success3-check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Light Danger&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger check-light-danger" type="checkbox" id="danger-light-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger-light-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger check-light-danger" type="checkbox" id="danger2-light-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger2-light-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger check-light-danger" type="checkbox" id="danger3-light-check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger3-light-check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Light Warning&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning check-light-warning" type="checkbox" id="warning-light-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning-light-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning check-light-warning" type="checkbox" id="warning2-light-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning2-light-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning check-light-warning" type="checkbox" id="warning3-light-check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning3-light-check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Light Primary&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary check-light-primary" type="checkbox" id="primary-light-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary-light-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary check-light-primary" type="checkbox" id="primary2-light-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary2-light-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary check-light-primary" type="checkbox" id="primary3-light-check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary3-light-check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Light Secondary&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary check-light-secondary" type="checkbox" id="secondary-light-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary-light-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary check-light-secondary" type="checkbox" id="secondary2-light-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary2-light-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary check-light-secondary" type="checkbox" id="secondary3-light-check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary3-light-check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"                                                                        "}</code>{"\n"}{"                                                                "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Success</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input success check-light-success" type="checkbox" id="success-light-check" value="option1" />
                <label class="form-check-label" for="success-light-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input success check-light-success" type="checkbox" id="success2-light-check" value="option1" checked />
                <label class="form-check-label" for="success2-light-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input success check-light-success" type="checkbox" id="success3-radio-check" value="option1" disabled checked />
                <label class="form-check-label" for="success3-radio-check">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Danger</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input danger check-light-danger" type="checkbox" id="danger-light-check" value="option1" />
                <label class="form-check-label" for="danger-light-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input danger check-light-danger" type="checkbox" id="danger2-light-check" value="option1" checked />
                <label class="form-check-label" for="danger2-light-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input danger check-light-danger" type="checkbox" id="danger3-light-check" value="option1" disabled checked />
                <label class="form-check-label" for="danger3-light-check">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Warning</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input warning check-light-warning" type="checkbox" id="warning-light-check" value="option1" />
                <label class="form-check-label" for="warning-light-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input warning check-light-warning" type="checkbox" id="warning2-light-check" value="option1" checked />
                <label class="form-check-label" for="warning2-light-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input warning check-light-warning" type="checkbox" id="warning3-light-check" value="option1" disabled checked />
                <label class="form-check-label" for="warning3-light-check">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Primary</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input primary check-light-primary" type="checkbox" id="primary-light-check" value="option1" />
                <label class="form-check-label" for="primary-light-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input primary check-light-primary" type="checkbox" id="primary2-light-check" value="option1" checked />
                <label class="form-check-label" for="primary2-light-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input primary check-light-primary" type="checkbox" id="primary3-light-check" value="option1" disabled checked />
                <label class="form-check-label" for="primary3-light-check">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Secondary</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary check-light-secondary" type="checkbox" id="secondary-light-check" value="option1" />
                <label class="form-check-label" for="secondary-light-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary check-light-secondary" type="checkbox" id="secondary2-light-check" value="option1" checked />
                <label class="form-check-label" for="secondary2-light-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary check-light-secondary" type="checkbox" id="secondary3-light-check" value="option1" disabled checked />
                <label class="form-check-label" for="secondary3-light-check">Disabled</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Checks - Light Colors */}
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      {/* start Checks - Outline Border Colors */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">
              Checks - Outline Border Colors
            </h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary text-decoration-none btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code5-3-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code5-3-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Checks - Outline Border Colors - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                        "}<code>{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Success Border&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success check-outline outline-success" type="checkbox" id="success-outline-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success-outline-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success check-outline outline-success" type="checkbox" id="success2-outline-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success2-outline-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success check-outline outline-success" type="checkbox" id="success3-outline--check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success3-outline--check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Danger Border&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger check-outline outline-danger" type="checkbox" id="danger-outline-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger-outline-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger check-outline outline-danger" type="checkbox" id="danger2-outline-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger2-outline-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger check-outline outline-danger" type="checkbox" id="danger3-outline-check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger3-outline-check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Warning Border&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning check-outline outline-warning" type="checkbox" id="warning-outline-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning-outline-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning check-outline outline-warning" type="checkbox" id="warning2-outline-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning2-outline-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning check-outline outline-warning" type="checkbox" id="warning3-outline-check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning3-outline-check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Primary Border&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary check-outline outline-primary" type="checkbox" id="primary-outline-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary-outline-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary check-outline outline-primary" type="checkbox" id="primary2-outline-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary2-outline-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary check-outline outline-primary" type="checkbox" id="primary3-outline-check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary3-outline-check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Secondary Border&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary check-outline outline-secondary" type="checkbox" id="secondary-outline-check" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary-outline-check"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary check-outline outline-secondary" type="checkbox" id="secondary2-outline-check" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary2-outline-check"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary check-outline outline-secondary" type="checkbox" id="secondary3-outline-check" value="option1" disabled="" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary3-outline-check"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"                                                                        "}</code>{"\n"}{"                                                                "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Success</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input success check-outline outline-success" type="checkbox" id="success-outline-check" value="option1" />
                <label class="form-check-label" for="success-outline-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input success check-outline outline-success" type="checkbox" id="success2-outline-check" value="option1" checked />
                <label class="form-check-label" for="success2-outline-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input success check-outline outline-success" type="checkbox" id="success3-outline--check" value="option1" disabled checked />
                <label class="form-check-label" for="success3-outline--check">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Danger</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input danger check-outline outline-danger" type="checkbox" id="danger-outline-check" value="option1" />
                <label class="form-check-label" for="danger-outline-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input danger check-outline outline-danger" type="checkbox" id="danger2-outline-check" value="option1" checked />
                <label class="form-check-label" for="danger2-outline-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input danger check-outline outline-danger" type="checkbox" id="danger3-outline-check" value="option1" disabled checked />
                <label class="form-check-label" for="danger3-outline-check">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Warning</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input warning check-outline outline-warning" type="checkbox" id="warning-outline-check" value="option1" />
                <label class="form-check-label" for="warning-outline-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input warning check-outline outline-warning" type="checkbox" id="warning2-outline-check" value="option1" checked />
                <label class="form-check-label" for="warning2-outline-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input warning check-outline outline-warning" type="checkbox" id="warning3-outline-check" value="option1" disabled checked />
                <label class="form-check-label" for="warning3-outline-check">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Primary</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input primary check-outline outline-primary" type="checkbox" id="primary-outline-check" value="option1" />
                <label class="form-check-label" for="primary-outline-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input primary check-outline outline-primary" type="checkbox" id="primary2-outline-check" value="option1" checked />
                <label class="form-check-label" for="primary2-outline-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input primary check-outline outline-primary" type="checkbox" id="primary3-outline-check" value="option1" disabled checked />
                <label class="form-check-label" for="primary3-outline-check">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Secondary</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary check-outline outline-secondary" type="checkbox" id="secondary-outline-check" value="option1" />
                <label class="form-check-label" for="secondary-outline-check">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary check-outline outline-secondary" type="checkbox" id="secondary2-outline-check" value="option1" checked />
                <label class="form-check-label" for="secondary2-outline-check">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary check-outline outline-secondary" type="checkbox" id="secondary3-outline-check" value="option1" disabled checked />
                <label class="form-check-label" for="secondary3-outline-check">Disabled</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Checks - Outline Border Colors */}
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      {/* start Radios - Default */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Radios - Default</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary text-decoration-none btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code6-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code6-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Radios - Default- View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                    "}<code>{"\n"}{"        "}&lt;div class="form-check"&gt;{"\n"}{"          "}&lt;input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked&gt;{"\n"}{"          "}&lt;label class="form-check-label" for="exampleRadios1"&gt;{"\n"}{"            "}Default radio{"\n"}{"          "}&lt;/label&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="form-check"&gt;{"\n"}{"          "}&lt;input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"&gt;{"\n"}{"          "}&lt;label class="form-check-label" for="exampleRadios2"&gt;{"\n"}{"            "}Second default radio{"\n"}{"          "}&lt;/label&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="form-check"&gt;{"\n"}{"          "}&lt;input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled&gt;{"\n"}{"          "}&lt;label class="form-check-label" for="exampleRadios3"&gt;{"\n"}{"            "}Disabled radio{"\n"}{"          "}&lt;/label&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"                                                                    "}</code>{"\n"}{"                                                                "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="form-check py-2">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
            <label class="form-check-label" for="exampleRadios1">
              Default radio
            </label>
          </div>
          <div class="form-check py-2">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
            <label class="form-check-label" for="exampleRadios2">
              Second default radio
            </label>
          </div>
          <div class="form-check py-2">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled />
            <label class="form-check-label" for="exampleRadios3">
              Disabled radio
            </label>
          </div>
        </div>
      </div>
      {/* end Radios - Default */}
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      {/* start Radios - Disabled */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Radios - Disabled</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary text-decoration-none btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code8-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code8-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Radios - Disabled - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                    "}<code>{"\n"}{"        "}&lt;div class="form-check"&gt;{"\n"}{"          "}&lt;input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled&gt;{"\n"}{"          "}&lt;label class="form-check-label" for="flexRadioDisabled"&gt;{"\n"}{"            "}Disabled radio{"\n"}{"          "}&lt;/label&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="form-check"&gt;{"\n"}{"          "}&lt;input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled&gt;{"\n"}{"          "}&lt;label class="form-check-label" for="flexRadioCheckedDisabled"&gt;{"\n"}{"            "}Disabled checked radio{"\n"}{"          "}&lt;/label&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"                                                                    "}</code>{"\n"}{"                                                                "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="form-check py-2">
            <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
            <label class="form-check-label" for="flexRadioDisabled">
              Disabled radio
            </label>
          </div>
          <div class="form-check py-2">
            <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled />
            <label class="form-check-label" for="flexRadioCheckedDisabled">
              Disabled checked radio
            </label>
          </div>
        </div>
      </div>
      {/* end Radios - Disabled */}
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      {/* start Radio - Colors */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Radio - Colors</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary text-decoration-none btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code9-1-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code9-1-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Radio - Colors - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                        "}<code>{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Success&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success" type="radio" name="radio-solid-success" id="success-radio" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success" type="radio" name="radio-solid-success" id="success2-radio" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success2-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success" type="radio" name="radio-solid-success" id="success3-radio" value="option1" disabled=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success3-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Danger&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger" type="radio" name="radio-solid-danger" id="danger-radio" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger" type="radio" name="radio-solid-danger" id="danger2-radio" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger2-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger" type="radio" name="radio-solid-danger" id="danger3-radio" value="option1" disabled="" &gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger3-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Warning&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning" type="radio" name="radio-solid-warning" id="warning-radio" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning" type="radio" name="radio-solid-warning" id="warning2-radio" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning2-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning" type="radio" name="radio-solid-warning" id="warning3-radio" value="option1" disabled="" &gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning3-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Primary&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary" type="radio" name="radio-solid-primary" id="primary-radio" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary" type="radio" name="radio-solid-primary" id="primary2-radio" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary2-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary" type="radio" name="radio-solid-primary" id="primary3-radio" value="option1" disabled="" &gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary3-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Secondary&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary" type="radio" name="radio-solid-secondary" id="secondary-radio" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary" type="radio" name="radio-solid-secondary" id="secondary2-radio" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary2-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary" type="radio" name="radio-solid-secondary" id="secondary3-radio" value="option1" disabled="" &gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary3-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"                                                                        "}</code>{"\n"}{"                                                                "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Success</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input success" type="radio" name="radio-solid-success" id="success-radio" value="option1" />
                <label class="form-check-label" for="success-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input success" type="radio" name="radio-solid-success" id="success2-radio" value="option1" checked />
                <label class="form-check-label" for="success2-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input success" type="radio" name="radio-solid-success" id="success3-radio" value="option1" disabled />
                <label class="form-check-label" for="success3-radio">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Danger</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input danger" type="radio" name="radio-solid-danger" id="danger-radio" value="option1" />
                <label class="form-check-label" for="danger-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input danger" type="radio" name="radio-solid-danger" id="danger2-radio" value="option1" checked />
                <label class="form-check-label" for="danger2-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input danger" type="radio" name="radio-solid-danger" id="danger3-radio" value="option1" disabled />
                <label class="form-check-label" for="danger3-radio">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Warning</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input warning" type="radio" name="radio-solid-warning" id="warning-radio" value="option1" />
                <label class="form-check-label" for="warning-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input warning" type="radio" name="radio-solid-warning" id="warning2-radio" value="option1" checked />
                <label class="form-check-label" for="warning2-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input warning" type="radio" name="radio-solid-warning" id="warning3-radio" value="option1" disabled />
                <label class="form-check-label" for="warning3-radio">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Primary</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input primary" type="radio" name="radio-solid-primary" id="primary-radio" value="option1" />
                <label class="form-check-label" for="primary-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input primary" type="radio" name="radio-solid-primary" id="primary2-radio" value="option1" checked />
                <label class="form-check-label" for="primary2-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input primary" type="radio" name="radio-solid-primary" id="primary3-radio" value="option1" disabled />
                <label class="form-check-label" for="primary3-radio">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Secondary</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary" type="radio" name="radio-solid-secondary" id="secondary-radio" value="option1" />
                <label class="form-check-label" for="secondary-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary" type="radio" name="radio-solid-secondary" id="secondary2-radio" value="option1" checked />
                <label class="form-check-label" for="secondary2-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary" type="radio" name="radio-solid-secondary" id="secondary3-radio" value="option1" disabled />
                <label class="form-check-label" for="secondary3-radio">Disabled</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Radio - Colors */}
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      {/*  start Radios - Light Colors */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Radios - Light Colors</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary text-decoration-none btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code9-2-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code9-2-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Radios - Light Colors - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                        "}<code>{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Light Success&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success check-light-success" type="radio" name="radio-light-success" id="success-light-radio" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success-light-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success check-light-success" type="radio" name="radio-light-success" id="success2-light-radio" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success2-light-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success check-light-success" type="radio" name="radio-light-success" id="success3-light-radio" value="option1" disabled=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success3-light-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Light Danger&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger check-light-danger" type="radio" name="radio-light-danger" id="danger-light-radio" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger-light-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger check-light-danger" type="radio" name="radio-light-danger" id="danger2-light-radio" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger2-light-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger check-light-danger" type="radio" name="radio-light-danger" id="danger3-light-radio" value="option1" disabled=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger3-light-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Light Warning&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning check-light-warning" type="radio" name="radio-light-warning" id="warning-light-radio" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning-light-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning check-light-warning" type="radio" name="radio-light-warning" id="warning2-light-radio" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning2-light-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning check-light-warning" type="radio" name="radio-light-warning" id="warning3-light-radio" value="option1" disabled=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning3-light-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Light Primary&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary check-light-primary" type="radio" name="radio-light-primary" id="primary-light-radio" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary-light-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary check-light-primary" type="radio" name="radio-light-primary" id="primary2-light-radio" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary2-light-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary check-light-primary" type="radio" name="radio-light-primary" id="primary3-light-radio" value="option1" disabled=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary3-light-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Light Secondary&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary check-light-secondary" type="radio" name="radio-light-secondary" id="secondary-light-radio" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary-light-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary check-light-secondary" type="radio" name="radio-light-secondary" id="secondary2-light-radio" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary2-light-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary check-light-secondary" type="radio" name="radio-light-secondary" id="secondary3-light-radio" value="option1" disabled=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary3-light-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"                                                                        "}</code>{"\n"}{"                                                                "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Success</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input success check-light-success" type="radio" name="radio-light-success" id="success-light-radio" value="option1" />
                <label class="form-check-label" for="success-light-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input success check-light-success" type="radio" name="radio-light-success" id="success2-light-radio" value="option1" checked />
                <label class="form-check-label" for="success2-light-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input success check-light-success" type="radio" name="radio-light-success" id="success3-light-radio" value="option1" disabled />
                <label class="form-check-label" for="success3-light-radio">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Danger</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input danger check-light-danger" type="radio" name="radio-light-danger" id="danger-light-radio" value="option1" />
                <label class="form-check-label" for="danger-light-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input danger check-light-danger" type="radio" name="radio-light-danger" id="danger2-light-radio" value="option1" checked />
                <label class="form-check-label" for="danger2-light-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input danger check-light-danger" type="radio" name="radio-light-danger" id="danger3-light-radio" value="option1" disabled />
                <label class="form-check-label" for="danger3-light-radio">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Warning</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input warning check-light-warning" type="radio" name="radio-light-warning" id="warning-light-radio" value="option1" />
                <label class="form-check-label" for="warning-light-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input warning check-light-warning" type="radio" name="radio-light-warning" id="warning2-light-radio" value="option1" checked />
                <label class="form-check-label" for="warning2-light-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input warning check-light-warning" type="radio" name="radio-light-warning" id="warning3-light-radio" value="option1" disabled />
                <label class="form-check-label" for="warning3-light-radio">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Primary</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input primary check-light-primary" type="radio" name="radio-light-primary" id="primary-light-radio" value="option1" />
                <label class="form-check-label" for="primary-light-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input primary check-light-primary" type="radio" name="radio-light-primary" id="primary2-light-radio" value="option1" checked />
                <label class="form-check-label" for="primary2-light-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input primary check-light-primary" type="radio" name="radio-light-primary" id="primary3-light-radio" value="option1" disabled />
                <label class="form-check-label" for="primary3-light-radio">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Secondary</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary check-light-secondary" type="radio" name="radio-light-secondary" id="secondary-light-radio" value="option1" />
                <label class="form-check-label" for="secondary-light-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary check-light-secondary" type="radio" name="radio-light-secondary" id="secondary2-light-radio" value="option1" checked />
                <label class="form-check-label" for="secondary2-light-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary check-light-secondary" type="radio" name="radio-light-secondary" id="secondary3-light-radio" value="option1" disabled />
                <label class="form-check-label" for="secondary3-light-radio">Disabled</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  end Radios - Light Colors */}
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      {/*  start Radios - Outline Border Colors */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">
              Radios - Outline Border Colors
            </h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary text-decoration-none btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code9-3-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code9-3-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Radios - Outline Border Colors - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                    "}<code>{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Success Border&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success check-outline outline-success" type="radio" id="success-outline-radio" name="radio-success" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success-outline-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success check-outline outline-success" type="radio" id="success2-outline-radio" name="radio-success" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success2-outline-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input success check-outline outline-success" type="radio" id="success3-outline-radio" value="option1" name="radio-success" disabled=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="success3-outline-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Danger Border&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger check-outline outline-danger" type="radio" id="danger-outline-radio" name="radio-danger" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger-outline-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger check-outline outline-danger" type="radio" id="danger2-outline-radio" name="radio-danger" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger2-outline-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input danger check-outline outline-danger" type="radio" id="danger3-outline-radio" name="radio-danger" value="option1" disabled=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="danger3-outline-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Warning Border&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning check-outline outline-warning" type="radio" name="radio-warning" id="warning-outline-radio" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning-outline-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning check-outline outline-warning" type="radio" name="radio-warning" id="warning2-outline-radio" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning2-outline-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input warning check-outline outline-warning" type="radio" name="radio-warning" id="warning3-outline-radio" value="option1" disabled=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="warning3-outline-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Primary Border&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary check-outline outline-primary" type="radio" name="radio-primary" id="primary-outline-radio" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary-outline-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary check-outline outline-primary" type="radio" name="radio-primary" id="primary2-outline-radio" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary2-outline-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input primary check-outline outline-primary" type="radio" name="radio-primary" id="primary3-outline-radio" value="option1" disabled=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="primary3-outline-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"        "}&lt;div class="row py-2"&gt;{"\n"}{"            "}&lt;div class="col-md-4"&gt;{"\n"}{"                "}&lt;label&gt;Secondary Border&lt;/label&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"            "}&lt;div class="col-md-8"&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary check-outline outline-secondary" type="radio" id="secondary-outline-radio" name="radio-secondary" value="option1"&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary-outline-radio"&gt;Default&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary check-outline outline-secondary" type="radio" id="secondary2-outline-radio" name="radio-secondary" value="option1" checked=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary2-outline-radio"&gt;Checked&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"                    "}&lt;div class="form-check form-check-inline"&gt;{"\n"}{"                      "}&lt;input class="form-check-input secondary check-outline outline-secondary" type="radio" id="secondary3-outline-radio" name="radio-secondary" value="option1" disabled=""&gt;{"\n"}{"                      "}&lt;label class="form-check-label" for="secondary3-outline-radio"&gt;Disabled&lt;/label&gt;{"\n"}{"                    "}&lt;/div&gt;{"\n"}{"            "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"                                                                    "}</code>{"\n"}{"                                                                "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Success</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input success check-outline outline-success" type="radio" id="success-outline-radio" name="radio-success" value="option1" />
                <label class="form-check-label" for="success-outline-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input success check-outline outline-success" type="radio" id="success2-outline-radio" name="radio-success" value="option1" checked />
                <label class="form-check-label" for="success2-outline-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input success check-outline outline-success" type="radio" id="success3-outline-radio" value="option1" name="radio-success" disabled />
                <label class="form-check-label" for="success3-outline-radio">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Danger</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input danger check-outline outline-danger" type="radio" id="danger-outline-radio" name="radio-danger" value="option1" />
                <label class="form-check-label" for="danger-outline-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input danger check-outline outline-danger" type="radio" id="danger2-outline-radio" name="radio-danger" value="option1" checked />
                <label class="form-check-label" for="danger2-outline-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input danger check-outline outline-danger" type="radio" id="danger3-outline-radio" name="radio-danger" value="option1" disabled />
                <label class="form-check-label" for="danger3-outline-radio">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Warning</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input warning check-outline outline-warning" type="radio" name="radio-warning" id="warning-outline-radio" value="option1" />
                <label class="form-check-label" for="warning-outline-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input warning check-outline outline-warning" type="radio" name="radio-warning" id="warning2-outline-radio" value="option1" checked />
                <label class="form-check-label" for="warning2-outline-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input warning check-outline outline-warning" type="radio" name="radio-warning" id="warning3-outline-radio" value="option1" disabled />
                <label class="form-check-label" for="warning3-outline-radio">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Primary</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input primary check-outline outline-primary" type="radio" name="radio-primary" id="primary-outline-radio" value="option1" />
                <label class="form-check-label" for="primary-outline-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input primary check-outline outline-primary" type="radio" name="radio-primary" id="primary2-outline-radio" value="option1" checked />
                <label class="form-check-label" for="primary2-outline-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input primary check-outline outline-primary" type="radio" name="radio-primary" id="primary3-outline-radio" value="option1" disabled />
                <label class="form-check-label" for="primary3-outline-radio">Disabled</label>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4 col-xl-3">
              <span class="fs-3 text-muted">Secondary</span>
            </div>
            <div class="col-md-8 col-xl-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary check-outline outline-secondary" type="radio" id="secondary-outline-radio" name="radio-secondary" value="option1" />
                <label class="form-check-label" for="secondary-outline-radio">Default</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary check-outline outline-secondary" type="radio" id="secondary2-outline-radio" name="radio-secondary" value="option1" checked />
                <label class="form-check-label" for="secondary2-outline-radio">Checked</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input secondary check-outline outline-secondary" type="radio" id="secondary3-outline-radio" name="radio-secondary" value="option1" disabled />
                <label class="form-check-label" for="secondary3-outline-radio">Disabled</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  end Radios - Outline Border Colors */}
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      {/*  start Toggle buttons */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Toggle buttons</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary text-decoration-none btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code10-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code10-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Toggle buttons - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                    "}<code>{"\n"}{"        "}&lt;div class="d-md-flex gap-2"&gt;{"\n"}{"          "}&lt;div&gt;{"\n"}{"              "}&lt;input type="checkbox" class="btn-check" id="btn-check" autocomplete="off"&gt;{"\n"}{"              "}&lt;label class="btn btn-outline-primary " for="btn-check"&gt;Single toggle&lt;/label&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"        "}{"\n"}{"          "}&lt;div&gt;{"\n"}{"              "}&lt;input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off"&gt;{"\n"}{"              "}&lt;label class="btn btn-outline-info " for="btn-check-2"&gt;Checked&lt;/label&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"          "}&lt;div&gt;{"\n"}{"              "}&lt;input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled&gt;{"\n"}{"              "}&lt;label class="btn btn-outline-danger " for="btn-check-3"&gt;Disabled&lt;/label&gt;{"\n"}{"          "}&lt;/div&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"                                                                    "}</code>{"\n"}{"                                                                "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="d-flex flex-wrap gap-6">
            <div>
              <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off" />
              <label class="btn btn-outline-primary " for="btn-check">Single
                toggle</label>
            </div>
            <div>
              <input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off" />
              <label class="btn btn-outline-info " for="btn-check-2">Checked</label>
            </div>
            <div>
              <input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled />
              <label class="btn btn-outline-danger " for="btn-check-3">Disabled</label>
            </div>
          </div>
        </div>
      </div>
      {/*  end Toggle buttons */}
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      {/* start Radio toggle buttons*/}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Radio toggle buttons</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary text-decoration-none btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code11-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code11-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Radio toggle buttons - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                    "}<code>{"\n"}{"        "}&lt;input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked&gt;{"\n"}{"        "}&lt;label class="btn btn-outline-primary " for="option1"&gt;Checked&lt;/label&gt;{"\n"}{"        "}{"\n"}{"        "}&lt;input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"&gt;{"\n"}{"        "}&lt;label class="btn btn-outline-warning " for="option2"&gt;Radio&lt;/label&gt;{"\n"}{"        "}{"\n"}{"        "}&lt;input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled&gt;{"\n"}{"        "}&lt;label class="btn btn-outline-info " for="option3"&gt;Disabled&lt;/label&gt;{"\n"}{"        "}{"\n"}{"        "}&lt;input type="radio" class="btn-check" name="options" id="option4" autocomplete="off"&gt;{"\n"}{"        "}&lt;label class="btn btn-outline-danger " for="option4"&gt;Radio&lt;/label&gt;{"\n"}{"                                                                    "}</code>{"\n"}{"                                                                "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div class="d-flex flex-wrap gap-6">
            <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked />
            <label class="btn btn-outline-primary " for="option1">Checked</label>
            <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
            <label class="btn btn-outline-warning " for="option2">Radio</label>
            <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled />
            <label class="btn btn-outline-info " for="option3">Disabled</label>
            <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" />
            <label class="btn btn-outline-danger " for="option4">Radio</label>
          </div>
        </div>
      </div>
      {/*  end Radio toggle buttons */}
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      {/* start Outlined styles */}
      <div class="card w-100">
        <div class="card-body">
          <div class="d-flex mb-3 align-items-center">
            <h4 class="card-title mb-0">Outlined styles</h4>
            <div class="ms-auto flex-shrink-0">
              <button class="btn bg-primary-subtle text-primary text-decoration-none btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code12-modal">
                <i class="ti ti-code fs-5 d-flex" />
              </button>
              {/* Code Modal */}
              <div id="view-code12-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header border-bottom">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Outlined styles - View Code
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body p-4">
                      <pre class="language-html scrollable">{"                                                                    "}<code>{"\n"}{"        "}&lt;div class="d-inline-block"&gt;{"\n"}{"            "}&lt;input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"&gt;{"\n"}{"            "}&lt;label class="btn btn-outline-primary mb-2 " for="btn-check-outlined"&gt;Single toggle&lt;/label&gt;&lt;br&gt;{"\n"}{"        "}{"\n"}{"            "}&lt;input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off"&gt;{"\n"}{"            "}&lt;label class="btn btn-outline-success mb-2 " for="btn-check-2-outlined"&gt;Checked&lt;/label&gt;&lt;br&gt;{"\n"}{"        "}{"\n"}{"            "}&lt;input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked&gt;{"\n"}{"            "}&lt;label class="btn btn-outline-info mb-2 " for="success-outlined"&gt;Checked success radio&lt;/label&gt;{"\n"}{"        "}{"\n"}{"            "}&lt;input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off"&gt;{"\n"}{"            "}&lt;label class="btn btn-outline-danger mb-2 " for="danger-outlined"&gt;Danger radio&lt;/label&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"                                                                    "}</code>{"\n"}{"                                                                "}</pre>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
            </div>
          </div>
          <div>
            <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off" />
            <label class="btn btn-outline-primary mb-6 " for="btn-check-outlined">Single
              toggle</label>
            <br />
            <input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off" />
            <label class="btn btn-outline-success mb-6 " for="btn-check-2-outlined">Checked</label>
            <br />
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked />
            <label class="btn btn-outline-info mb-6 " for="success-outlined">Checked
              success radio</label>
            <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" />
            <label class="btn btn-outline-danger mb-6 " for="danger-outlined">Danger
              radio</label>
          </div>
        </div>
      </div>
      {/*  end Outlined styles */}
    </div>
  </div>
</div>
    </>
  );
}
