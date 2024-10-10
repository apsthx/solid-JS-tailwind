export default function IconSolar() {
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
                                            <i class="ti ti-home fs-5"></i>
                                        </a>
                                    </li>
                                    <li class="breadcrumb-item" aria-current="page">Solar Icon</li>
                                </ol>
                            </nav>
                            <h2 class="mb-0 fw-bolder fs-8">Solar Icon</h2>
                        </div>
                        <div class="col-lg-4 col-md-6 d-none d-md-flex align-items-center justify-content-end">
                            <select class="form-select w-auto bg-primary-subtle border-0" aria-label="Default select example">
                                <option selected="">Today 23 March</option>
                                <option value="1">Today 23 March</option>
                                <option value="2">Today 24 March</option>
                                <option value="3">Today 25 March</option>
                            </select>
                            <a href="javascript:void(0)" class="btn btn-primary d-flex align-items-center ms-2">
                                <i class="ti ti-plus me-1"></i>
                                Add New
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card w-100 h-100 position-relative overflow-hidden">
                    <div class="card-body p-0">
                        <iframe class="w-100 h-n280" src="https://icon-sets.iconify.design/solar/" frameborder="0" data-simplebar=""></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}