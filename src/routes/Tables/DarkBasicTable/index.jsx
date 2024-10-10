import { User2, User3, User4, User5 } from "../../../helper/img";

export default function DarkBasicTable() {
    return (
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
                                <li class="breadcrumb-item" aria-current="page">Table Dark</li>
                            </ol>
                        </nav>
                        <h2 class="mb-0 fw-bolder fs-8">Table Dark</h2>
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
            {/* start Inverse Table */}
            <div class="card">
                <div class="card-body">
                    <div class="d-flex mb-1 align-items-center">
                        <h4 class="card-title mb-0">Inverse Table</h4>
                        <div class="ms-auto flex-shrink-0">
                            <button class="btn bg-primary-subtle text-primary  btn-sm" title="View Code" data-bs-toggle="modal" data-bs-target="#view-code1-modal">
                                <i class="ti ti-code fs-5 d-flex" />
                            </button>
                            {/* Code Modal */}
                            <div id="view-code1-modal" class="modal fade" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header border-bottom">
                                            <h5 class="modal-title" id="exampleModalLabel">
                                                Inverse Table - View Code
                                            </h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div class="modal-body p-4">
                                            <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}&lt;table class="table table-dark mb-0"&gt;{"\n"}{"    "}&lt;thead&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="col"&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;First&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Last&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Handle&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;1&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Mark&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Otto&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@mdo&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;2&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Jacob&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Thornton&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@fat&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;3&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Larry&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;the Bird&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@twitter&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
                                        </div>
                                    </div>
                                    {/* /.modal-content */}
                                </div>
                                {/* /.modal-dialog */}
                            </div>
                            {/* /.modal */}
                        </div>
                    </div>
                    <p class="card-subtitle mb-3">
                        You can also invert the colors—with light text on dark
                        backgrounds—with
                        <code> .table-inverse</code>.
                    </p>
                    <div class="table-responsive border rounded-2" data-bs-theme="dark">
                        <table class="table text-nowrap table-dark  mb-0 align-middle">
                            <thead class="text-dark fs-4">
                                <tr>
                                    <th>
                                        <h6 class="fs-4 fw-semibold text-white mb-0">User</h6>
                                    </th>
                                    <th>
                                        <h6 class="fs-4 fw-semibold text-white mb-0">Project Name</h6>
                                    </th>
                                    <th>
                                        <h6 class="fs-4 fw-semibold text-white mb-0">Team</h6>
                                    </th>
                                    <th>
                                        <h6 class="fs-4 fw-semibold text-white mb-0">Status</h6>
                                    </th>
                                    <th>
                                        <h6 class="fs-4 fw-semibold text-white mb-0">Budget</h6>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User3} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Sunil Joshi</h6>
                                                <span class="fw-normal">Web Designer</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">Elite Admin</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-secondary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                S
                                            </a>
                                            <a href="javascript:void(0)" class="text-bg-danger text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                D
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-success-subtle text-success">Active</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$3.9k</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User2} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Arlene McCoy</h6>
                                                <span class="fw-normal">Project Manager</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">Real Homes WP Theme</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-primary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                A
                                            </a>
                                            <a href="javascript:void(0)" class="text-bg-warning text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                X
                                            </a>
                                            <a href="javascript:void(0)" class="text-bg-secondary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                N
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-warning-subtle text-warning">Pending</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$24.5k</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User3} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Christopher Jamil</h6>
                                                <span class="fw-normal">Project Manager</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">MedicalPro WP Theme</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-danger text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                X
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-subtle text-primary">Completed</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$12.8k</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User4} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Evelyn Pope</h6>
                                                <span class="fw-normal">Frontend Engineer</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">Hosting Press HTML</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-primary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                Y
                                            </a>
                                            <a href="javascript:void(0)" class="text-bg-danger text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                X
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-success-subtle text-success">Active</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$2.4k</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User5} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Micheal Doe</h6>
                                                <span class="fw-normal">Content Writer</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">Hosting Press HTML</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-secondary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                S
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-danger-subtle text-danger">Cancel</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$9.3k</h6>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* end Inverse Table */}
            {/* start Striped with Inverse Table */}
            <div class="card">
                <div class="card-body">
                    <div class="d-flex mb-1 align-items-center">
                        <div>
                            <h5 class="mb-0">Striped with Inverse Table</h5>
                        </div>
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
                                                Striped with Inverse Table - View Code
                                            </h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div class="modal-body p-4">
                                            <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}&lt;table class="table table-striped table-dark mb-0"&gt;{"\n"}{"  "}&lt;thead&gt;{"\n"}{"      "}&lt;tr&gt;{"\n"}{"          "}&lt;th scope="col"&gt;#&lt;/th&gt;{"\n"}{"          "}&lt;th scope="col"&gt;First&lt;/th&gt;{"\n"}{"          "}&lt;th scope="col"&gt;Last&lt;/th&gt;{"\n"}{"          "}&lt;th scope="col"&gt;Handle&lt;/th&gt;{"\n"}{"      "}&lt;/tr&gt;{"\n"}{"  "}&lt;/thead&gt;{"\n"}{"  "}&lt;tbody&gt;{"\n"}{"      "}&lt;tr&gt;{"\n"}{"          "}&lt;th scope="row"&gt;1&lt;/th&gt;{"\n"}{"          "}&lt;td&gt;Mark&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;Otto&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;@mdo&lt;/td&gt;{"\n"}{"      "}&lt;/tr&gt;{"\n"}{"      "}&lt;tr&gt;{"\n"}{"          "}&lt;th scope="row"&gt;2&lt;/th&gt;{"\n"}{"          "}&lt;td&gt;Jacob&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;Thornton&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;@fat&lt;/td&gt;{"\n"}{"      "}&lt;/tr&gt;{"\n"}{"      "}&lt;tr&gt;{"\n"}{"          "}&lt;th scope="row"&gt;3&lt;/th&gt;{"\n"}{"          "}&lt;td&gt;Larry&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;the Bird&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;@twitter&lt;/td&gt;{"\n"}{"      "}&lt;/tr&gt;{"\n"}{"  "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
                                        </div>
                                    </div>
                                    {/* /.modal-content */}
                                </div>
                                {/* /.modal-dialog */}
                            </div>
                            {/* /.modal */}
                        </div>
                    </div>
                    <p class="card-subtitle mb-3">
                        Use .table-striped to add zebra-striping to any table row
                        within the
                        <code>&lt;tbody&gt;</code>.
                    </p>
                    <div class="table-responsive border rounded-2" data-bs-theme="dark">
                        <table class="table table-striped table-dark border text-nowrap  mb-0 align-middle">
                            <thead class="text-dark fs-4">
                                <tr>
                                    <th>
                                        <h6 class="fs-4 fw-semibold mb-0">User</h6>
                                    </th>
                                    <th>
                                        <h6 class="fs-4 fw-semibold mb-0">Project Name</h6>
                                    </th>
                                    <th>
                                        <h6 class="fs-4 fw-semibold mb-0">Team</h6>
                                    </th>
                                    <th>
                                        <h6 class="fs-4 fw-semibold mb-0">Status</h6>
                                    </th>
                                    <th>
                                        <h6 class="fs-4 fw-semibold mb-0">Budget</h6>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User3} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Sunil Joshi</h6>
                                                <span class="fw-normal">Web Designer</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">Elite Admin</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-secondary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                S
                                            </a>
                                            <a href="javascript:void(0)" class="text-bg-danger text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                D
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-success-subtle text-success">Active</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$3.9k</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User2} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Arlene McCoy</h6>
                                                <span class="fw-normal">Project Manager</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">Real Homes WP Theme</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-primary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                A
                                            </a>
                                            <a href="javascript:void(0)" class="text-bg-warning text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                X
                                            </a>
                                            <a href="javascript:void(0)" class="text-bg-secondary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                N
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-warning-subtle text-warning">Pending</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$24.5k</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User3} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Christopher Jamil</h6>
                                                <span class="fw-normal">Project Manager</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">MedicalPro WP Theme</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-danger text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                X
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-subtle text-primary">Completed</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$12.8k</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User4} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Evelyn Pope</h6>
                                                <span class="fw-normal">Frontend Engineer</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">Hosting Press HTML</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-primary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                Y
                                            </a>
                                            <a href="javascript:void(0)" class="text-bg-danger text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                X
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-success-subtle text-success">Active</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$2.4k</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User5} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Micheal Doe</h6>
                                                <span class="fw-normal">Content Writer</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">Hosting Press HTML</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-secondary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                S
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-danger-subtle text-danger">Cancel</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$9.3k</h6>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* end Striped with Inverse Table */}
            {/* start Bordered with Inverse Table */}
            <div class="card">
                <div class="card-body">
                    <div class="d-flex mb-1 align-items-center">
                        <div>
                            <h5 class="mb-0">Bordered with Inverse Table</h5>
                        </div>
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
                                                Bordered with Inverse Table - View Code
                                            </h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div class="modal-body p-4">
                                            <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}&lt;table class="table table-bordered table-dark mb-0"&gt;{"\n"}{"  "}&lt;thead&gt;{"\n"}{"      "}&lt;tr&gt;{"\n"}{"          "}&lt;th scope="col"&gt;#&lt;/th&gt;{"\n"}{"          "}&lt;th scope="col"&gt;First&lt;/th&gt;{"\n"}{"          "}&lt;th scope="col"&gt;Last&lt;/th&gt;{"\n"}{"          "}&lt;th scope="col"&gt;Handle&lt;/th&gt;{"\n"}{"      "}&lt;/tr&gt;{"\n"}{"  "}&lt;/thead&gt;{"\n"}{"  "}&lt;tbody&gt;{"\n"}{"      "}&lt;tr&gt;{"\n"}{"          "}&lt;th scope="row"&gt;1&lt;/th&gt;{"\n"}{"          "}&lt;td&gt;Mark&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;Otto&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;@mdo&lt;/td&gt;{"\n"}{"      "}&lt;/tr&gt;{"\n"}{"      "}&lt;tr&gt;{"\n"}{"          "}&lt;th scope="row"&gt;2&lt;/th&gt;{"\n"}{"          "}&lt;td&gt;Jacob&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;Thornton&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;@fat&lt;/td&gt;{"\n"}{"      "}&lt;/tr&gt;{"\n"}{"      "}&lt;tr&gt;{"\n"}{"          "}&lt;th scope="row"&gt;3&lt;/th&gt;{"\n"}{"          "}&lt;td colspan="2"&gt;Larry the Bird&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;@twitter&lt;/td&gt;{"\n"}{"      "}&lt;/tr&gt;{"\n"}{"  "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
                                        </div>
                                    </div>
                                    {/* /.modal-content */}
                                </div>
                                {/* /.modal-dialog */}
                            </div>
                            {/* /.modal */}
                        </div>
                    </div>
                    <p class="card-subtitle mb-3">
                        Add <code>.table-bordered</code> for borders on all sides
                        of the table and cells.
                    </p>
                    <div class="table-responsive border rounded-2" data-bs-theme="dark">
                        <table class="table text-nowrap  table-bordered table-dark mb-0 align-middle">
                            <thead class="text-dark fs-4">
                                <tr>
                                    <th>
                                        <h6 class="fs-4 fw-semibold mb-0">User</h6>
                                    </th>
                                    <th>
                                        <h6 class="fs-4 fw-semibold mb-0">Project Name</h6>
                                    </th>
                                    <th>
                                        <h6 class="fs-4 fw-semibold mb-0">Team</h6>
                                    </th>
                                    <th>
                                        <h6 class="fs-4 fw-semibold mb-0">Status</h6>
                                    </th>
                                    <th>
                                        <h6 class="fs-4 fw-semibold mb-0">Budget</h6>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User3} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Sunil Joshi</h6>
                                                <span class="fw-normal">Web Designer</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">Elite Admin</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-secondary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                S
                                            </a>
                                            <a href="javascript:void(0)" class="text-bg-danger text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                D
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-success-subtle text-success">Active</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$3.9k</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User2} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Arlene McCoy</h6>
                                                <span class="fw-normal">Project Manager</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">Real Homes WP Theme</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-primary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                A
                                            </a>
                                            <a href="javascript:void(0)" class="text-bg-warning text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                X
                                            </a>
                                            <a href="javascript:void(0)" class="text-bg-secondary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                N
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-warning-subtle text-warning">Pending</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$24.5k</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User3} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Christopher Jamil</h6>
                                                <span class="fw-normal">Project Manager</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">MedicalPro WP Theme</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-danger text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                X
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-subtle text-primary">Completed</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$12.8k</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User4} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Evelyn Pope</h6>
                                                <span class="fw-normal">Frontend Engineer</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">Hosting Press HTML</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-primary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                Y
                                            </a>
                                            <a href="javascript:void(0)" class="text-bg-danger text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                X
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-success-subtle text-success">Active</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$2.4k</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={User5} class="rounded-circle" width="40" height="40" />
                                            <div class="ms-3">
                                                <h6 class="fs-4 fw-semibold mb-0">Micheal Doe</h6>
                                                <span class="fw-normal">Content Writer</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-normal fs-4">Hosting Press HTML</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="text-bg-secondary text-white fs-6 rounded-circle round-40 me-n2 card-hover border border-2 border-white d-flex align-items-center justify-content-center">
                                                S
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-danger-subtle text-danger">Cancel</span>
                                    </td>
                                    <td>
                                        <h6 class="fs-4 fw-semibold mb-0">$9.3k</h6>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* send Bordered with Inverse Table */}
        </div>
    )
}