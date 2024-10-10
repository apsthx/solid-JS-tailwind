export default function ColouredTable() {
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
                                <li class="breadcrumb-item" aria-current="page">Table Coloured</li>
                            </ol>
                        </nav>
                        <h2 class="mb-0 fw-bolder fs-8">Table Coloured</h2>
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
                <div class="col-lg-6">
                    {/*  start Primary Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Primary Table</h4>
                                </div>
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
                                                        Primary Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}&lt;table class="table"&gt;{"\n"}{"    "}&lt;thead class="bg-primary text-white"&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;First Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Last Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Username&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;1&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Nigam&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Eichmann&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Sonu&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;2&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Deshmukh&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Prohaska&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Genelia&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;3&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Roshan&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Rogahn&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Hritik&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class <code>.table-primary</code> in
                                the <code>&lt;thead&gt;</code>.
                            </p>
                            <div class="table-responsive border rounded-2">
                                <table class="table mb-0">
                                    <thead class="table-primary">
                                        {/* start row */}
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <td>1</td>
                                            <td>Nigam</td>
                                            <td>Eichmann</td>
                                            <td>@Sonu</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>2</td>
                                            <td>Deshmukh</td>
                                            <td>Prohaska</td>
                                            <td>@Genelia</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>3</td>
                                            <td>Roshan</td>
                                            <td>Rogahn</td>
                                            <td>@Hritik</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Primary Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Success Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Success Table</h4>
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
                                                        Success Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}&lt;table class="table"&gt;{"\n"}{"    "}&lt;thead class="bg-success text-white"&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;First Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Last Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Username&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;1&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Nigam&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Eichmann&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Sonu&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;2&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Deshmukh&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Prohaska&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Genelia&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;3&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Roshan&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Rogahn&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Hritik&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class <code>.table-success</code> in
                                the <code>&lt;thead&gt;</code>.
                            </p>
                            <div class="table-responsive border rounded-2">
                                <table class="table mb-0">
                                    <thead class="table-success">
                                        {/* start row */}
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <td>1</td>
                                            <td>Nigam</td>
                                            <td>Eichmann</td>
                                            <td>@Sonu</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>2</td>
                                            <td>Deshmukh</td>
                                            <td>Prohaska</td>
                                            <td>@Genelia</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>3</td>
                                            <td>Roshan</td>
                                            <td>Rogahn</td>
                                            <td>@Hritik</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Success Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Info Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Info Table</h4>
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
                                                        Info Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}&lt;table class="table"&gt;{"\n"}{"    "}&lt;thead class="bg-info text-white"&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;First Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Last Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Username&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;1&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Nigam&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Eichmann&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Sonu&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;2&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Deshmukh&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Prohaska&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Genelia&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;3&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Roshan&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Rogahn&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Hritik&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class <code>.table-info</code> in the
                                <code>&lt;thead&gt; </code>.
                            </p>
                            <div class="table-responsive border rounded-2">
                                <table class="table mb-0">
                                    <thead class="table-info">
                                        {/* start row */}
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <td>1</td>
                                            <td>Nigam</td>
                                            <td>Eichmann</td>
                                            <td>@Sonu</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>2</td>
                                            <td>Deshmukh</td>
                                            <td>Prohaska</td>
                                            <td>@Genelia</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>3</td>
                                            <td>Roshan</td>
                                            <td>Rogahn</td>
                                            <td>@Hritik</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Info Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Warning Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Warning Table</h4>
                                </div>
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
                                                        Warning Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}&lt;table class="table"&gt;{"\n"}{"    "}&lt;thead class="bg-warning text-white"&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;First Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Last Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Username&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;1&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Nigam&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Eichmann&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Sonu&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;2&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Deshmukh&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Prohaska&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Genelia&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;3&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Roshan&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Rogahn&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Hritik&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class <code>.table-warning</code> in
                                the <code>&lt;thead&gt;</code>.
                            </p>
                            <div class="table-responsive border rounded-2">
                                <table class="table mb-0">
                                    <thead class="table-warning text-white">
                                        {/* start row */}
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <td>1</td>
                                            <td>Nigam</td>
                                            <td>Eichmann</td>
                                            <td>@Sonu</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>2</td>
                                            <td>Deshmukh</td>
                                            <td>Prohaska</td>
                                            <td>@Genelia</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>3</td>
                                            <td>Roshan</td>
                                            <td>Rogahn</td>
                                            <td>@Hritik</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Warning Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Danger Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Danger Table</h4>
                                </div>
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
                                                        Danger Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}{"  "}&lt;table class="table"&gt;{"\n"}{"      "}&lt;thead class="bg-danger text-white"&gt;{"\n"}{"          "}&lt;tr&gt;{"\n"}{"              "}&lt;th&gt;#&lt;/th&gt;{"\n"}{"              "}&lt;th&gt;First Name&lt;/th&gt;{"\n"}{"              "}&lt;th&gt;Last Name&lt;/th&gt;{"\n"}{"              "}&lt;th&gt;Username&lt;/th&gt;{"\n"}{"          "}&lt;/tr&gt;{"\n"}{"      "}&lt;/thead&gt;{"\n"}{"      "}&lt;tbody&gt;{"\n"}{"          "}&lt;tr&gt;{"\n"}{"              "}&lt;td&gt;1&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Nigam&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Eichmann&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;@Sonu&lt;/td&gt;{"\n"}{"          "}&lt;/tr&gt;{"\n"}{"          "}&lt;tr&gt;{"\n"}{"              "}&lt;td&gt;2&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Deshmukh&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Prohaska&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;@Genelia&lt;/td&gt;{"\n"}{"          "}&lt;/tr&gt;{"\n"}{"          "}&lt;tr&gt;{"\n"}{"              "}&lt;td&gt;3&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Roshan&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Rogahn&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;@Hritik&lt;/td&gt;{"\n"}{"          "}&lt;/tr&gt;{"\n"}{"      "}&lt;/tbody&gt;{"\n"}{"  "}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class <code>.table-danger</code> in
                                the <code>&lt;thead&gt;</code>.
                            </p>
                            <div class="table-responsive border rounded-2">
                                <table class="table mb-0">
                                    <thead class="table-danger">
                                        {/* start row */}
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <td>1</td>
                                            <td>Nigam</td>
                                            <td>Eichmann</td>
                                            <td>@Sonu</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>2</td>
                                            <td>Deshmukh</td>
                                            <td>Prohaska</td>
                                            <td>@Genelia</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>3</td>
                                            <td>Roshan</td>
                                            <td>Rogahn</td>
                                            <td>@Hritik</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Danger Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Inverse Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Inverse Table</h4>
                                </div>
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
                                                        Inverse Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}{"  "}&lt;table class="table"&gt;{"\n"}{"      "}&lt;thead class="bg-inverse text-white"&gt;{"\n"}{"          "}&lt;tr&gt;{"\n"}{"              "}&lt;th&gt;#&lt;/th&gt;{"\n"}{"              "}&lt;th&gt;First Name&lt;/th&gt;{"\n"}{"              "}&lt;th&gt;Last Name&lt;/th&gt;{"\n"}{"              "}&lt;th&gt;Username&lt;/th&gt;{"\n"}{"          "}&lt;/tr&gt;{"\n"}{"      "}&lt;/thead&gt;{"\n"}{"      "}&lt;tbody&gt;{"\n"}{"          "}&lt;tr&gt;{"\n"}{"              "}&lt;td&gt;1&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Nigam&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Eichmann&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;@Sonu&lt;/td&gt;{"\n"}{"          "}&lt;/tr&gt;{"\n"}{"          "}&lt;tr&gt;{"\n"}{"              "}&lt;td&gt;2&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Deshmukh&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Prohaska&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;@Genelia&lt;/td&gt;{"\n"}{"          "}&lt;/tr&gt;{"\n"}{"          "}&lt;tr&gt;{"\n"}{"              "}&lt;td&gt;3&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Roshan&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Rogahn&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;@Hritik&lt;/td&gt;{"\n"}{"          "}&lt;/tr&gt;{"\n"}{"      "}&lt;/tbody&gt;{"\n"}{"  "}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class <code>.table-dark</code> in
                                the <code>&lt;thead&gt;</code>.
                            </p>
                            <div class="table-responsive border rounded-2">
                                <table class="table mb-0">
                                    <thead class="table-dark">
                                        {/* start row */}
                                        <tr>
                                            <th class="text-white">#</th>
                                            <th class="text-white">First Name</th>
                                            <th class="text-white">Last Name</th>
                                            <th class="text-white">Username</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <td>1</td>
                                            <td>Nigam</td>
                                            <td>Eichmann</td>
                                            <td>@Sonu</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>2</td>
                                            <td>Deshmukh</td>
                                            <td>Prohaska</td>
                                            <td>@Genelia</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>3</td>
                                            <td>Roshan</td>
                                            <td>Rogahn</td>
                                            <td>@Hritik</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Inverse Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Primary border Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Primary border Table</h4>
                                </div>
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
                                                        Primary border Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive rounded-2"&gt;{"\n"}{"  "}&lt;table class="table table-bordered border-primary"&gt;{"\n"}{"      "}&lt;thead class="bg-primary text-white"&gt;{"\n"}{"          "}&lt;tr&gt;{"\n"}{"              "}&lt;th&gt;#&lt;/th&gt;{"\n"}{"              "}&lt;th&gt;First Name&lt;/th&gt;{"\n"}{"              "}&lt;th&gt;Last Name&lt;/th&gt;{"\n"}{"              "}&lt;th&gt;Username&lt;/th&gt;{"\n"}{"          "}&lt;/tr&gt;{"\n"}{"      "}&lt;/thead&gt;{"\n"}{"      "}&lt;tbody&gt;{"\n"}{"          "}&lt;tr&gt;{"\n"}{"              "}&lt;td&gt;1&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Nigam&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Eichmann&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;@Sonu&lt;/td&gt;{"\n"}{"          "}&lt;/tr&gt;{"\n"}{"          "}&lt;tr&gt;{"\n"}{"              "}&lt;td&gt;2&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Deshmukh&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Prohaska&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;@Genelia&lt;/td&gt;{"\n"}{"          "}&lt;/tr&gt;{"\n"}{"          "}&lt;tr&gt;{"\n"}{"              "}&lt;td&gt;3&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Roshan&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;Rogahn&lt;/td&gt;{"\n"}{"              "}&lt;td&gt;@Hritik&lt;/td&gt;{"\n"}{"          "}&lt;/tr&gt;{"\n"}{"      "}&lt;/tbody&gt;{"\n"}{"  "}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class <code>.bg-primary .text-white</code> in
                                the <code>&lt;thead&gt;</code> and add class
                                <code>.border .border-primary</code> in
                                <code>&lt;tbody&gt;</code>
                            </p>
                            <div class="table-responsive rounded-2">
                                <table class="table table-bordered mb-0 border-primary">
                                    <thead class="bg-primary text-white">
                                        {/* start row */}
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <td>1</td>
                                            <td>Nigam</td>
                                            <td>Eichmann</td>
                                            <td>@Sonu</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>2</td>
                                            <td>Deshmukh</td>
                                            <td>Prohaska</td>
                                            <td>@Genelia</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>3</td>
                                            <td>Roshan</td>
                                            <td>Rogahn</td>
                                            <td>@Hritik</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Primary border Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Success border Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Success border Table</h4>
                                </div>
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
                                                        Success border Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive rounded-2"&gt;{"\n"}&lt;table class="table table-bordered border-success"&gt;{"\n"}{"    "}&lt;thead class="bg-success text-white"&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;First Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Last Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Username&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;1&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Nigam&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Eichmann&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Sonu&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;2&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Deshmukh&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Prohaska&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Genelia&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;3&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Roshan&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Rogahn&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Hritik&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class <code>.bg-success .text-white</code> in
                                the <code>&lt;thead&gt;</code> and add class
                                <code>.border .border-success</code> in
                                <code>&lt;tbody&gt;</code>
                            </p>
                            <div class="table-responsive rounded-2">
                                <table class="table table-bordered mb-0 border-success">
                                    <thead class="bg-success text-white">
                                        {/* start row */}
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <td>1</td>
                                            <td>Nigam</td>
                                            <td>Eichmann</td>
                                            <td>@Sonu</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>2</td>
                                            <td>Deshmukh</td>
                                            <td>Prohaska</td>
                                            <td>@Genelia</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>3</td>
                                            <td>Roshan</td>
                                            <td>Rogahn</td>
                                            <td>@Hritik</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Success border Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Info border Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Info border Table</h4>
                                </div>
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
                                                        Info border Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive rounded-2"&gt;{"\n"}&lt;table class="table border-info table-bordered"&gt;{"\n"}{"    "}&lt;thead class="bg-info text-white"&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;First Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Last Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Username&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;1&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Nigam&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Eichmann&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Sonu&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;2&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Deshmukh&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Prohaska&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Genelia&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;3&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Roshan&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Rogahn&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Hritik&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class <code>.bg-info .text-white</code> in the
                                <code>&lt;thead&gt;</code> and add class
                                <code>.border .border-info</code>
                                in
                                <code>&lt;tbody&gt;</code>
                            </p>
                            <div class="table-responsive rounded-2">
                                <table class="table border-info table-bordered">
                                    <thead class="bg-info text-white">
                                        {/* start row */}
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <td>1</td>
                                            <td>Nigam</td>
                                            <td>Eichmann</td>
                                            <td>@Sonu</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>2</td>
                                            <td>Deshmukh</td>
                                            <td>Prohaska</td>
                                            <td>@Genelia</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>3</td>
                                            <td>Roshan</td>
                                            <td>Rogahn</td>
                                            <td>@Hritik</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Info border Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Warning border Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Warning border Table</h4>
                                </div>
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
                                                        Warning border Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive rounded-2"&gt;{"\n"}&lt;table class="table table-bordered border-warning"&gt;{"\n"}{"    "}&lt;thead class="bg-warning text-white"&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;First Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Last Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Username&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;1&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Nigam&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Eichmann&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Sonu&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;2&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Deshmukh&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Prohaska&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Genelia&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;3&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Roshan&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Rogahn&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Hritik&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class <code>.bg-warning .text-white</code> in
                                the <code>&lt;thead&gt;</code> and add class
                                <code>.border .border-warning</code> in
                                <code>&lt;tbody&gt;</code>
                            </p>
                            <div class="table-responsive rounded-2">
                                <table class="table table-bordered mb-0 border-warning">
                                    <thead class="bg-warning text-white">
                                        {/* start row */}
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <td>1</td>
                                            <td>Nigam</td>
                                            <td>Eichmann</td>
                                            <td>@Sonu</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>2</td>
                                            <td>Deshmukh</td>
                                            <td>Prohaska</td>
                                            <td>@Genelia</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>3</td>
                                            <td>Roshan</td>
                                            <td>Rogahn</td>
                                            <td>@Hritik</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Warning border Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Danger border Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Danger border Table</h4>
                                </div>
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
                                                        Danger border Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive rounded-2"&gt;{"\n"}&lt;table class="table table-bordered border-danger"&gt;{"\n"}{"    "}&lt;thead class="bg-danger text-white"&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;First Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Last Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Username&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;1&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Nigam&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Eichmann&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Sonu&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;2&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Deshmukh&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Prohaska&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Genelia&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;3&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Roshan&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Rogahn&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Hritik&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class <code>.bg-danger .text-white</code> in
                                the <code>&lt;thead&gt;</code> and add class
                                <code>.border .border-danger</code>
                                in
                                <code>&lt;tbody&gt;</code>
                            </p>
                            <div class="table-responsive rounded-2">
                                <table class="table table-bordered mb-0 border-danger">
                                    <thead class="bg-danger text-white">
                                        {/* start row */}
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <td>1</td>
                                            <td>Nigam</td>
                                            <td>Eichmann</td>
                                            <td>@Sonu</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>2</td>
                                            <td>Deshmukh</td>
                                            <td>Prohaska</td>
                                            <td>@Genelia</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>3</td>
                                            <td>Roshan</td>
                                            <td>Rogahn</td>
                                            <td>@Hritik</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Danger border Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Dark border Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Dark border Table</h4>
                                </div>
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
                                                        Dark border Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive rounded-2"&gt;{"\n"}&lt;table class="table table-bordered border-dark"&gt;{"\n"}{"    "}&lt;thead class="bg-inverse text-white"&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;First Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Last Name&lt;/th&gt;{"\n"}{"            "}&lt;th&gt;Username&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;1&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Nigam&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Eichmann&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Sonu&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;2&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Deshmukh&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Prohaska&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Genelia&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;td&gt;3&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Roshan&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Rogahn&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@Hritik&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class <code>.bg-dark .text-white</code> in the
                                <code>&lt;thead&gt;</code> and add class
                                <code>.border .border-dark</code>
                                in
                                <code>&lt;tbody&gt;</code>
                            </p>
                            <div class="table-responsive rounded-2">
                                <table class="table table-bordered mb-0 border-dark">
                                    <thead class="bg-inverse">
                                        {/* start row */}
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <td>1</td>
                                            <td>Nigam</td>
                                            <td>Eichmann</td>
                                            <td>@Sonu</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>2</td>
                                            <td>Deshmukh</td>
                                            <td>Prohaska</td>
                                            <td>@Genelia</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <td>3</td>
                                            <td>Roshan</td>
                                            <td>Rogahn</td>
                                            <td>@Hritik</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Dark border Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Light Primary Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Light Primary Table</h4>
                                </div>
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
                                                        Light Primary Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}&lt;table class="table table-hover table-primary"&gt;{"\n"}{"    "}&lt;thead class="bg-primary text-white"&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="col"&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;First&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Last&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Handle&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;1&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Mark&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Otto&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@mdo&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;2&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Jacob&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Thornton&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@fat&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;3&lt;/th&gt;{"\n"}{"            "}&lt;td colspan="2"&gt;Larry the Bird&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@twitter&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class in the table
                                <code>.table-hover .table-primary</code> and add class
                                <code>.bg-primary .text-white</code> in the
                                <code>&lt;thead&gt;</code>.
                            </p>
                            <div class="table-responsive rounded-2">
                                <table class="table table-hover mb-0 table-primary text-dark table-borderless">
                                    <thead>
                                        {/* start row */}
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Light Primary Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Light Success Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Light Success Table</h4>
                                </div>
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
                                                        Light Success Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}&lt;table class="table table-hover table-success"&gt;{"\n"}{"  "}&lt;thead class="bg-success text-white"&gt;{"\n"}{"      "}&lt;tr&gt;{"\n"}{"          "}&lt;th scope="col"&gt;#&lt;/th&gt;{"\n"}{"          "}&lt;th scope="col"&gt;First&lt;/th&gt;{"\n"}{"          "}&lt;th scope="col"&gt;Last&lt;/th&gt;{"\n"}{"          "}&lt;th scope="col"&gt;Handle&lt;/th&gt;{"\n"}{"      "}&lt;/tr&gt;{"\n"}{"  "}&lt;/thead&gt;{"\n"}{"  "}&lt;tbody&gt;{"\n"}{"      "}&lt;tr&gt;{"\n"}{"          "}&lt;th scope="row"&gt;1&lt;/th&gt;{"\n"}{"          "}&lt;td&gt;Mark&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;Otto&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;@mdo&lt;/td&gt;{"\n"}{"      "}&lt;/tr&gt;{"\n"}{"      "}&lt;tr&gt;{"\n"}{"          "}&lt;th scope="row"&gt;2&lt;/th&gt;{"\n"}{"          "}&lt;td&gt;Jacob&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;Thornton&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;@fat&lt;/td&gt;{"\n"}{"      "}&lt;/tr&gt;{"\n"}{"      "}&lt;tr&gt;{"\n"}{"          "}&lt;th scope="row"&gt;3&lt;/th&gt;{"\n"}{"          "}&lt;td colspan="2"&gt;Larry the Bird&lt;/td&gt;{"\n"}{"          "}&lt;td&gt;@twitter&lt;/td&gt;{"\n"}{"      "}&lt;/tr&gt;{"\n"}{"  "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class in the table
                                <code>.table-hover .table-success</code> and add class
                                <code>.bg-success .text-white</code> in the
                                <code>&lt;thead&gt;</code>.
                            </p>
                            <div class="table-responsive rounded-2">
                                <table class="table table-hover mb-0 table-success text-dark table-borderless">
                                    <thead>
                                        {/* start row */}
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Light Success Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Light Info Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Light Info Table</h4>
                                </div>
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
                                                        Light Info Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}&lt;table class="table table-hover table-info"&gt;{"\n"}{"    "}&lt;thead class="bg-info text-white"&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="col"&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;First&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Last&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Handle&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;1&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Mark&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Otto&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@mdo&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;2&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Jacob&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Thornton&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@fat&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;3&lt;/th&gt;{"\n"}{"            "}&lt;td colspan="2"&gt;Larry the Bird&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@twitter&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class in the table
                                <code>.table-hover .table-info</code> and add class
                                <code>.bg-info .text-white</code> in the
                                <code>&lt;thead&gt;</code>.
                            </p>
                            <div class="table-responsive rounded-2">
                                <table class="table table-hover mb-0 table-info text-dark table-borderless">
                                    <thead>
                                        {/* start row */}
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Light Info Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Light Warning Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Light Warning Table</h4>
                                </div>
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
                                                        Light Warning Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}&lt;table class="table table-hover table-warning"&gt;{"\n"}{"    "}&lt;thead class="bg-warning text-white"&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="col"&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;First&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Last&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Handle&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;1&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Mark&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Otto&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@mdo&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;2&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Jacob&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Thornton&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@fat&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;3&lt;/th&gt;{"\n"}{"            "}&lt;td colspan="2"&gt;Larry the Bird&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@twitter&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class in the table
                                <code>.table-hover .table-warning</code> and add class
                                <code>.bg-warning .text-white</code> in the
                                <code>&lt;thead&gt;</code>.
                            </p>
                            <div class="table-responsive rounded-2">
                                <table class="table table-hover mb-0 table-warning text-dark table-borderless">
                                    <thead>
                                        {/* start row */}
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Light Warning Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Light Danger Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Light Danger Table</h4>
                                </div>
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
                                                        Light Danger Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}&lt;table class="table table-hover table-danger"&gt;{"\n"}{"    "}&lt;thead class="bg-danger text-white"&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="col"&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;First&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Last&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Handle&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;1&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Mark&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Otto&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@mdo&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;2&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Jacob&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Thornton&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@fat&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;3&lt;/th&gt;{"\n"}{"            "}&lt;td colspan="2"&gt;Larry the Bird&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@twitter&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class in the table
                                <code>.table-hover .table-danger</code> and add class
                                <code>.bg-danger .text-white</code> in the
                                <code>&lt;thead&gt;</code>.
                            </p>
                            <div class="table-responsive rounded-2">
                                <table class="table table-hover mb-0 table-danger text-dark table-borderless">
                                    <thead>
                                        {/* start row */}
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Light Danger Table */}
                </div>
                <div class="col-lg-6">
                    {/*  start Dark Table */}
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex mb-1 align-items-center">
                                <div>
                                    <h4 class="card-title mb-0">Dark Table</h4>
                                </div>
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
                                                        Dark Table - View Code
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div class="modal-body p-4">
                                                    <pre class="language-html scrollable"><code>{"\n"}&lt;div class="table-responsive"&gt;{"\n"}&lt;table class="table table-hover table-dark"&gt;{"\n"}{"    "}&lt;thead class="bg-dark text-white"&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="col"&gt;#&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;First&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Last&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Handle&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;1&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Mark&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Otto&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@mdo&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;2&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Jacob&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Thornton&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@fat&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;3&lt;/th&gt;{"\n"}{"            "}&lt;td colspan="2"&gt;Larry the Bird&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;@twitter&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}</code>{"\n"}</pre>
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
                                To use add class in the table
                                <code>.table-hover .table-dark</code> and add class
                                <code>.bg-dark .text-white</code> in the
                                <code>&lt;thead&gt;</code>.
                            </p>
                            <div class="table-responsive rounded-2">
                                <table class="table table-hover mb-0 table-dark table-borderless">
                                    <thead>
                                        {/* start row */}
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        {/* end row */}
                                        {/* start row */}
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        {/* end row */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*  end Dark Table */}
                </div>
            </div>
        </div>
    )
}