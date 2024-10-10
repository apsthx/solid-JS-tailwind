import { onMount } from "solid-js";

export default function AreaChart() {
  onMount(async () => {
    const module = await import("../../../assets/js/apex-chart/apex.area.init.js");

    module.initializeApexAreaInit();
  });
  return (
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
                <li class="breadcrumb-item" aria-current="page">Chart Apex Area</li>
              </ol>
            </nav>
            <h2 class="mb-0 fw-bolder fs-8">Chart Apex Area</h2>
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
      {/* start Basic Area Chart */}
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Basic Area Chart</h4>
          <div class="mx-n2" id="chart-area-basic" />
        </div>
      </div>
      {/* end Basic Area Chart */}
      {/* start Spline Area Chart */}
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Spline Area Chart</h4>
          <div class="mx-n3" id="chart-area-spline" />
        </div>
      </div>
      {/* end Spline Area Chart */}
      {/* start DateTime X-axis Area Chart */}
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">DateTime X-axis Area Chart</h4>
          <div class="mx-n3" id="chart-area-datetime" />
        </div>
      </div>
      {/* end DateTime X-axis Area Chart */}
    </div>
  )
}